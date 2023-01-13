import React from "react";
import { MOCKS_ICON } from "../../utils/MOCKS";

const Skills = () => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-light-yellow font-Inconsolata"
      id="Skills"
    >
      <div className="flex flex-col w-full justify-center text-center">
        <h3 className="text-blue text-3xl p-4">Skills</h3>

        <div className="grid grid-cols-4 gap-1 place-content-center place-items-center mx-16 mb-[50px]">
          {MOCKS_ICON.map((item) => {
            return (
              <img
                src={item.icon}
                alt={item.alt}
                className="max-w-[64px] my-[16px]"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
