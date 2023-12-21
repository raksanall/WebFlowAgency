import { Iroutes } from "../Types";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Features from "../Pages/Features";
import Pricing from "../Pages/Pricing";
import FAQ from "../Pages/FAQ";
import Blog from "../Pages/Blog";
import ContactUs from "../Pages/ContactUs";
import Work from "../Components/Work";
import BlogSingle from "../Components/BlogSingle";
import WorkSingle from "../Components/WorkSingle";

export const routes: Iroutes = [
  { id: 1, path: "/", element: <Home />, title: "Home" },
  { id: 2, path: "/AboutUs", element: <AboutUs />, title: "About Us" },
  { id: 3, path: "/Features", element: <Features />, title: "Features" },
  { id: 4, path: "/Pricing", element: <Pricing />, title: "Pricing" },
  { id: 5, path: "/FAQ", element: <FAQ />, title: "FAQ" },
  { id: 6, path: "/Blog", element: <Blog />, title: "Blog" },
  { id: 7, path: "/Blog/:bId", element: <BlogSingle />, title: "" },
  { id: 8, path: "/ContactUs", element: <ContactUs />, title: "ContactUs" },
  { id: 9, path: "/Work", element: <Work />, title: "" },
  { id: 10, path: "/Work/:bId", element: <WorkSingle />, title: "" },
];

