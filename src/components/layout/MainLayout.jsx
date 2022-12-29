import Footer from "./Footer/Footer";
import MainNavigation from "./Navigation/MainNavigation";

import "./MainLayout.css";
import { ScrollRestoration } from "react-router-dom";

const MainLayout = (props) => {
  return (
    <div className="layout">
      <MainNavigation className="navbar" />
      <main>{props.children}</main>
      <Footer className="footer" />
      <ScrollRestoration />
    </div>
  );
};

export default MainLayout;
