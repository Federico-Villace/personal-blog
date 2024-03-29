import Image from "next/image";
import { MOCKS_ICON } from "../../utils/MOCKS";

const Skills = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-light-yellow p-4"
      id="Skills"
    >
      <div className="flex flex-col w-full justify-center text-center my-[40px]">
        <h3 className="text-blue text-6xl p-4 font-Inconsolata">Skills</h3>

        <div className="grid grid-cols-4 lg:gap-2 sm:gap-4 sm:m-2 place-content-center place-items-center mx-16 mb-[50px]">
          {MOCKS_ICON.map((item) => {
            return (
              <div
                data-aos={`${
                  parseInt(item.id) % 2 === 0 ? "fade-right" : "fade-left"
                }`}
                className="flex flex-col items-center bg-fixed transition duration-300 ease-in-out hover:opacity-[0.7] hover:scale-125"
                key={item.id}
              >
                <h4 className="ml-[5px]">{item.iconTitle}</h4>
                <Image
                  src={item.icon}
                  alt={item.alt}
                  className="max-w-[64px] my-[16px] overflow-hidden "
                  width={80}
                  height={80}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
