import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../components/layout/MainLayout";
import "./404.css";

const NotFoundPage = () => {
  return (
    <MainLayout>
      <div className="not-found-page">
        <div className="not-found">
          <h1 className="text-404">404</h1>
          <h2 className="text-not-found">Not Found</h2>
          <Link to="/">
            <button className="button-back">Back to home</button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFoundPage;
