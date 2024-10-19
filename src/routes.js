import Blog from "./pages/Blog";
import BlogItem from "./pages/BlogItem";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import Signer from "./pages/Signer";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/signer", element: <Signer /> },
  { path: "/blog", element: <Blog /> },
  { path: "/blog/:id", element: <BlogItem /> },
  { path: "suport", element: <Faq /> },

];

export default routes;
