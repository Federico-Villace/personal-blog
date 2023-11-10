import Image from "next/image";
import Link from "next/link";
import { MOCK_PROJECTS } from "../../utils/MOCKS";
import { Fade, Slide } from "react-awesome-reveal";

const Projects = (): JSX.Element => {
  return (
    <div
      className="bg-light-yellow w-full flex flex-col items-center"
      id="Projects"
    >
      <Slide direction="up" duration={500} reverse={false}>
        <div className="mt-[30px]">
          <h3 className="text-blue text-6xl p-4 font-Inconsolata">Projects</h3>
        </div>
      </Slide>
      <div className="grid  md:grid-cols-1 gap-10 mb-[150px] sm:p-[10px]">
        {MOCK_PROJECTS.map((item, index) => {
          return (
            <Fade
              key={index}
              direction={`${parseInt(item.id) % 2 === 0 ? "right" : "left"}`}
              duration={500}
              reverse={false}
            >
              <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center mt-10">
                <div className="lg:col-start-2 md:pl-20">
                  <h4 className="text-2xl font-extrabold leading-8 sm:leading-9 mb-6 font-Inconsolata">
                    {item.title}
                  </h4>
                  <ul className="flex flex-col">
                    <li className="flex">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                            <svg
                              width="20"
                              height="20"
                              fill="currentColor"
                              className="w-6 h-6"
                              viewBox="0 0 1792 1792"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="text-base leading-6 text-gray-500 dark:text-gray-300">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="mt-10">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                            <svg
                              width="20"
                              height="20"
                              fill="currentColor"
                              className="w-6 h-6"
                              viewBox="0 0 1792 1792"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="text-base leading-6 text-gray-500 dark:text-gray-300">
                            {item.features}
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="relative lg:p-20 mt-10 mx-16 md:mx-12 lg:mt-0 lg:col-start- bg-fixed transition duration-300 ease-in-out hover:scale-110">
                  <Link href={item.src} target={"_blank"}>
                    <Image
                      src={item.background}
                      className="w-full bg-cover"
                      alt={""}
                      width={500}
                      height={500}
                    />
                  </Link>
                </div>
              </div>
            </Fade>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
