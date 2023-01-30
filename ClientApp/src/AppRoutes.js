import Home from "./components/Home";
import AboutUs from "./components/AboutUs";

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
