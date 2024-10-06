"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MOCK_RECENT_PROJECTS } from "../../utils/MOCKS";
import Image from "next/image";
import Button from "../Button";

const MostRecentProjects = (): JSX.Element => {
  const [isClient, setIsClient] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Rotar entre imágenes cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex + 1) %
          MOCK_RECENT_PROJECTS[activeProjectIndex].images.length
      );
    }, 5000); // Cambiar imagen cada 5 segundos

    return () => clearInterval(interval);
  }, [currentImageIndex, activeProjectIndex]);

  if (!isClient) {
    return <></>; // Evitar errores de hidratación
  }

  return (
    <div
      className="bg-light-yellow w-full flex flex-col items-center pb-16 px-4"
      id="Projects"
    >
      <h3 className="text-blue text-6xl p-4 font-Inconsolata">
        Recent Projects
      </h3>
      <div className="grid gap-16 md:grid-cols-1 lg:grid-cols-2">
        {MOCK_RECENT_PROJECTS.map((project, index) => (
          <div
            className="flex flex-col lg:flex-row items-center shadow-md rounded-xl overflow-hidden"
            key={index}
            onMouseEnter={() => setActiveProjectIndex(index)} // Cambiar proyecto activo
          >
            {/* Sección de imagen/carousel */}
            <div className="w-full lg:w-1/3 relative">
              <div className="w-full h-full overflow-hidden p-4">
                <Image
                  src={project.images[currentImageIndex]} // Mostrar imagen actual del carrusel
                  alt={project.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105 shadow-md"
                />
              </div>
            </div>

            {/* Sección de texto */}
            <div className="w-full lg:w-2/3 p-6 flex flex-col justify-between">
              <h4 className="text-2xl font-bold mb-4">{project.title}</h4>
              <p className="text-gray-500 mb-4">{project.description}</p>
              <p className="text-gray-500 mb-6">{project.features}</p>
              <Link href={project.src} target="_blank">
                <Button variant={"primary"} text={"Test Project"} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MostRecentProjects;
