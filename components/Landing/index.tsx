import React from "react";
import Header from "../Header";

const Landing = (): JSX.Element => {
  return (
    <div>
      <Header />
      <div className="flex items-center w-full h-[420px] bg-light-yellow ">
        <div className="flex flex-wrap items-center w-full mx-[30px] justify-around ">
          <div> fotito </div>
          <div> texto </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
