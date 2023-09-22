import Image from "next/image";
import { MOCKS_ICON } from "../../utils/MOCKS";
import { Fade, Rotate, Slide } from "react-awesome-reveal";

const Skills = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-light-yellow p-4"
      id="Skills"
    >
      <div className="flex flex-col w-full justify-center text-center my-[40px]">
        <Slide direction="up" duration={500}>
          <h3 className="text-blue text-6xl p-4 font-Inconsolata">Skills</h3>
        </Slide>

        <div className="grid grid-cols-4 lg:gap-2 sm:gap-4 sm:m-2 place-content-center place-items-center mx-16 mb-[50px]">
          {MOCKS_ICON.map((item) => {
            return (
              <Slide direction="up" key={item.id} duration={500}>
                <div className="flex flex-col items-center bg-fixed transition duration-300 ease-in-out hover:opacity-[0.7] hover:scale-125">
                  <h4 className="ml-[5px]">{item.iconTitle}</h4>
                  <Image
                    src={item.icon}
                    alt={item.alt}
                    className="max-w-[64px] my-[16px] overflow-hidden "
                    width={80}
                    height={80}
                  />
                </div>
              </Slide>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
