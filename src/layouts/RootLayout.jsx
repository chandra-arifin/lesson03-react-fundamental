import { Link, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <Link to="/">Home</Link> | <Link to="Blog">Blog</Link> |{" "}
      <Link to="About">About</Link>
      <p />
      <Outlet />
    </>
  );
}

export default RootLayout;
