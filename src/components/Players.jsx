import { useLocation, useSearchParams, Link } from "react-router-dom";
import usePlayerNames from "../hooks/usePlayerNames";
import { slugify } from "../utils";

const CustomLink = ({ to, children }) => {
  const location = useLocation();
  const playerId = location.pathname.split("/")[2];
  const match = playerId === to;

  const styles =
    match === true ? { fontweight: 900, color: "var(--white)" } : {};

  return (
    <li>
      <Link
        to={{
          pathname: to,
          search: location.search,
        }}
        style={{ ...styles }}
      >
        {children}
      </Link>
    </li>
  );
};

const Sidebar = ({ title, list }) => {
  return (
    <div>
      <h3 className="header">{title}</h3>
      <ul className="sidebar-list">
        {list.map((item) => (
          <CustomLink key={item} to={slugify(item)}>
            {item.toUpperCase()}
          </CustomLink>
        ))}
      </ul>
    </div>
  );
};

const Players = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const team = searchParams.get("teamId");

  const { response: names, loading } = usePlayerNames(team);

  if (loading) {
    return null;
  }

  return (
    <div className="container">
      <Sidebar title="Players" list={names} />
    </div>
  );
};

export default Players;
