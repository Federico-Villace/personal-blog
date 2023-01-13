import React from "react";
import Button from "../Button";

const Header = (): JSX.Element => {
  return (
    <div className="flex items-center w-full h-[120px] bg-light-yellow border-1 border-black border-b-black ">
      <div className="flex flex-wrap items-center w-full mx-[30px] justify-between capitalize">
        <div>
          <p className="text-[60px] font-light text-purple drop-shadow-lg">
            FNV
          </p>
        </div>
        <div className="flex flex-wrap gap-8 font-Inconsolata ">
          <Button variant={"primary"} text={"About Me"} href={"#AboutMe"} />
          <Button variant={"secondary"} text={"Skills"} href={"#Skills"} />
          <Button variant={"secondary"} text={"Projects"} />
          <Button variant={"secondary"} text={"Contact Me"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
