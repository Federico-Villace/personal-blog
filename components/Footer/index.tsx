import React from "react";
import { MOCK_FOOTER } from "../../utils/MOCKS";

const Footer = () => {
  return (
    <div className="flex items-center w-full h-[200px] bg-yellow border border-t-peach font-Inconsolata">
      <div className="flex flex-wrap items-center w-full mx-[30px] my-[20px] justify-around">
        <div className="flex flex-col text-justify">
          <h4 className="text-[30px] font-semibold">Contact Me!</h4>
          <p className="font-light text-sm">
            Tell me about your project and lets find a solution that works for
            you.{" "}
          </p>
        </div>
        {MOCK_FOOTER.map((item) => {
          return (
            <div className="grid grid-rows-3 font-light text-sm">
              <div className="">
                {` Email: `}
                {item.Email}
              </div>
              <div className="">
                {` Phone: `}
                {item.Phone}
              </div>
              <div className="">
                {` Address: `}
                {item.Address}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
