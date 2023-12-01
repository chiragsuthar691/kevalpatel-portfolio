import Image from "next/image";
import Card from "./card";
import skills from "../assets/skills.png"

const Skills = () => {
  return (
    <>
      <section
        className="p-5 py-10 flex flex-col justify-between items-center skills overflow-x-hidden"
      >
        <div className="flex flex-col items-center">
          <div className="bg-lime-300 w-fit rounded-2xl p-2 ">
            <Image
              className="w-fit rounded-2xl"
              src={skills}
              alt="Welcome"
              width={60}
              height={80}
            />
          </div>
          <h1 className="text-4xl font-bold m-2">Skills</h1>
        </div>
        <div className="flex flex-col m-5 w-full whitespace-nowrap">
          <div className="flex flex-col justify-center items-center">

            <div className="w-fit flex justify-center items-center flex-wrap">
              <Card title={"MS Office"} />
              <Card title={"G-Suite"} />
              <Card title={"Sales Management"} />
              <Card title={"Client Acquisition"} />
              <Card title={"IT Sales"} />
              <Card title={"Upwork"} />
              <Card title={"Guru"} />
              <Card title={"LinkedIn"} />
              <Card title={"IT Lead Generation"} />
              <Card title={"Team Management"} />
              <Card title={"Time Management"} />
              <Card title={"Relationship Management"} />
              <Card title={"Multilinguistic"} />
            </div>
          </div>
        </div>
        <div id="projects" />
      </section>
    </>
  );
};

export default Skills;
