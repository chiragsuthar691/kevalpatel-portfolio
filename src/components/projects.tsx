import ProjectCard from "./projectCard";
import edu from "../assets/edu.png"
import Image from "next/image";

const Projects = () => {
  return (
    <>
      <section
        className="p-5 flex py-10 flex-col justify-between items-center"
      >
        <div className="flex flex-col items-center">
          <div className="bg-lime-300 w-fit rounded-2xl p-2 ">
            <Image
              className="w-fit rounded-2xl"
              src={edu}
              alt="Welcome"
              width={60}
              height={80}
            />
          </div>
          <h1 className="text-4xl font-bold m-2">Education</h1>
        </div>
        <div className="flex flex-col m-5">
          <div className="overflow-auto">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-lime-300">Charusat University, Gujarat, India</h1>
              <p className="mt-5 italic text-lime-600">2014 - 2016</p>
              <p className="text-sm">Masters in Business Administration
                (MBA) - Marketing</p>
            </div>
            <div className="text-center mt-10">
              <h1 className="text-2xl font-bold text-lime-300">University of Tilak Maharashtra
                Pune, India</h1>
              <p className="mt-5 italic text-lime-600">2011 - 2014</p>
              <p className="text-sm">BBA - Marketing</p>
            </div>
          </div>
          <div id="experience" />
        </div>
      </section>
    </>
  );
};

export default Projects;
