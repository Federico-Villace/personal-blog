import React from "react";
import Button from "../Button";

const Header = (): JSX.Element => {
  return (
    <div className="flex items-center w-full h-[120px] bg-yellow ">
      <div className="flex flex-wrap items-center w-full mx-[30px] justify-between capitalize">
        <div>
          <p className="text-[60px] font-light text-purple drop-shadow-lg">
            FNV
          </p>
        </div>
        <div className="flex gap-8">
          <Button variant={"primary"} text={"Home"} />
          <Button variant={"secondary"} text={"Proyects"} />
          <Button variant={"secondary"} text={"About Me"} />
          <Button variant={"secondary"} text={"Contact Me"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
