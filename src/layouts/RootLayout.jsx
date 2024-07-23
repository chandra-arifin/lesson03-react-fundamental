import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : ""
        }
        style={{
          marginRight: "5px",
        }}
        to="/"
      >
        Home
      </NavLink>{" "}
      |
      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : ""
        }
        style={{
          marginRight: "5px",
          marginLeft: "5px",
        }}
        to="Blog"
      >
        Blog
      </NavLink>
      |
      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : ""
        }
        style={{
          marginLeft: "5px",
        }}
        to="vCard"
      >
        Virtual Card
      </NavLink>
      |
      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : ""
        }
        style={{
          marginLeft: "5px",
        }}
        to="steps"
      >
        Step
      </NavLink>
      |
      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : ""
        }
        style={{
          marginLeft: "5px",
        }}
        to="gocheck"
      >
        Go Check
      </NavLink>
      |
      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : ""
        }
        style={{
          marginLeft: "5px",
        }}
        to="accordion"
      >
        FAQ
      </NavLink>
      |
      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : ""
        }
        style={{
          marginLeft: "5px",
        }}
        to="splitbills"
      >
        Split Bills
      </NavLink>
      |
      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : ""
        }
        style={{
          marginLeft: "5px",
        }}
        to="About"
      >
        About
      </NavLink>
      <p />
      <Outlet />
    </>
  );
}

export default RootLayout;
