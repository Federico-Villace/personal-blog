import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Projects from "../Projects";
import Skills from "../Skills";

const Landing = (): JSX.Element => {
  return (
    <div>
      <Header />
      <div
        className="flex items-center w-full h-[600px] bg-light-yellow font-Inconsolata p-6"
        id="AboutMe"
      >
        <div className="flex flex-col items-center w-full justify-center">
          <div className="flex flex-col items-center p-5 font-normal text-5xl">
            <h1>Hi!, I'm Federico Villace</h1>
            <h2 className="text-purple p-2">Full Stack Developer</h2>
          </div>
          <div className="flex flex-col max-w-xl items-center text-center font-normal text-lg">
            <p>
              + 2 years of experience working with innovative products and
              creating high-end solutions
            </p>
          </div>
        </div>
      </div>
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default Landing;