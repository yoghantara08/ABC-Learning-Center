import Footer from "./Footer/Footer";
import MainNavigation from "./Navigation/MainNavigation";

import "./MainLayout.css";

const MainLayout = (props) => {
  return (
    <div className="layout">
      <MainNavigation className="navbar" />
      <main>{props.children}</main>
      <Footer className="footer" />
    </div>
  );
};

export default MainLayout;
