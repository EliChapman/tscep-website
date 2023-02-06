import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/about-us',
    element: <AboutUs />
  }
];

export default AppRoutes;
