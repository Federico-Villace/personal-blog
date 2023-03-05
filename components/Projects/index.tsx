import Image from "next/image";
import React from "react";
import { MOCK_PROJECTS } from "../../utils/MOCKS";

const Projects = () => {
  return (
    <div className="bg-light-yellow flex flex-col items-center" id="Projects">
      <div className="mt-[30px]">
        <h3 className="text-blue text-3xl p-4 font-semibold">Projects</h3>
      </div>
      <div className="grid xl:grid-cols-2 md:grid-cols-1 gap-10 mb-[150px]">
        {MOCK_PROJECTS.map((item) => {
          return (
            <ul
              className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer my-[30px] h-90 w-60 md:w-80"
              key={item.id}
            >
              <li>
                <a
                  href={item.src}
                  className="group/edit block w-full h-full"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Image
                    src={item.background}
                    className="object-cover w-full max-h-[150px]"
                    alt={item.title}
                    width={320}
                    height={150}
                  />
                  <div className="w-full p-4">
                    <p className="mb-2 text-lg">{item.title}</p>
                    <p className="font-light">{item.description}</p>
                  </div>
                </a>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
