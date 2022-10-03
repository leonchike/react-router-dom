<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/collection" element={<Collection />} />
    <Route
      path="/admin"
      element={
        <RequireAuth>
          <AdminDashboard />
        </RequireAuth>
      }
    >
      <Route path="collection/:id" element={<CollectionDetail />} />
      <Route path="about" element={<AdminAbout />} />
      <Route path="contact" element={<AdminContact />} />
    </Route>
  </Routes>
</Router>;

const AdminDashboard = () => {
  return (
    <div>
      <SideBar />
      <Outlet />
    </div>
  );
};

const RequireAuth = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  if (user) return children;
  return <Navigate to="/login" state={{ path: location.pathname }} replace />;
};

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { state } = useLocation();

  const handleLogin = () => {
    login();
    navigate(state?.path || "/admin");
  };
};
