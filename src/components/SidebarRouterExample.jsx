import React from "react";
import { Route, Link } from "react-router-dom";

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
  {
    path: "/",
    exact: true,
    title: 'Home',
    sidebar: () => <div>Home</div>,
    main: () => <h2>首页</h2>
  },
  {
    path: "/list",
    title: 'List',
    sidebar: () => <div>List</div>,
    main: () => <h2>商品列表</h2>
  },
  {
    path: "/about",
    title: 'About',
    sidebar: () => <div>About</div>,
    main: () => <h2>关于我们</h2>
  }
];

const SidebarRouterExample = () => (
  <div style={{ display: "flex" }}>
    <div
      style={{
        padding: "10px",
        width: "10%",
        background: "#f0f0f0",
        border: "1px solid #333"
      }}
    >
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {routes.map((route, index) => (
          <li key={route.path}>
            <Link to={route.path}>{route.title}</Link>
          </li>
        ))}
      </ul>
    </div>

    <div style={{ flex: 1, padding: "10px", border: "1px solid #666" }}>
      {routes.map((route, index) => (
        // Render more <Route>s with the same paths as
        // above, but different components this time.
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ))}
    </div>
  </div>
);

export default SidebarRouterExample;
