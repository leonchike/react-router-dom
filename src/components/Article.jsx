import { useParams, Navigate } from "react-router-dom";
import useArticle from "../hooks/useArticle";
import Loading from "./Loading";

export default function Article() {
  const { teamId, articleId } = useParams();

  const { response: article, loading } = useArticle({ teamId, articleId });

  if (!loading && !article) {
    return <Navigate to={`/${teamId}/articles`} />;
  }

  return (
    <div className="panel">
      {loading === true ? (
        <Loading />
      ) : (
        <article className="article">
          <h1 className="header">{article.title}</h1>
          <p>{article.body}</p>
        </article>
      )}
    </div>
  );
}
