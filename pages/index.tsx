import type { NextPage } from "next";
import Landing from "../components/Landing";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);
  return <Landing />;
};

export default Home;
