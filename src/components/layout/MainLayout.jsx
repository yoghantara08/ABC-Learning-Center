import Footer from "./Footer/Footer";
import MainNavigation from "./Navigation/MainNavigation";

import "./MainLayout.css";
import { ScrollRestoration } from "react-router-dom";

const MainLayout = (props) => {
  return (
    <div className="layout">
      <header className="navbar">
        <MainNavigation />
      </header>
      <main>{props.children}</main>
      <footer className="footer">
        <Footer />
      </footer>
      <ScrollRestoration />
    </div>
  );
};

export default MainLayout;
