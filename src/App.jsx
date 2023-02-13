import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import NotFoundPage from "./pages/404/404Page";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import BackEnd from "./pages/courses/back-end/BackEnd";
import CoursesPage from "./pages/courses/CoursesPage";
import FrontEnd from "./pages/courses/front-end/FrontEnd";
import HomePage from "./pages/home/HomePage";
import PrivacyPolicyPage from "./pages/privacy-policy/PrivacyPolicyPage";
import RegistrationPage from "./pages/register/RegistrationPage";
import SitemapPage from "./pages/sitemap/SitemapPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/sitemap" element={<SitemapPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/courses/frontend" element={<FrontEnd />} />
      <Route path="/courses/backend" element={<BackEnd />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
