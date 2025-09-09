import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";


const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
      <section className=" text-white py-20">
        ddsd
      </section>
  );
};

export default Home;

