import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import CoursesPage from "./pages/courses/CoursesPage";
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
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
