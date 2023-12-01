import Image from "next/image";
import ExperienceCard from "./experienceCard";
import exp from "../assets/exp.png"
import decl from "../assets/declaa.png"

const Experience = () => {
  return (
    <>
      <section
        className="flex flex-col py-10 justify-between items-center p-5 experience"
      >
        <div className="flex flex-col items-center">
          <div className="bg-lime-300 w-fit rounded-2xl p-2 ">
            <Image
              className="w-fit rounded-2xl"
              src={exp}
              alt="Welcome"
              width={60}
              height={80}
            />
          </div>
          <h1 className="text-4xl font-bold m-2">Experience</h1>
        </div>
        <div className="flex w-full gap-5 justify-center items-center flex-col m-5">
          <ExperienceCard
            title={"Business Development Manager"}
            company={"Codezee Solutions Pvt Ltd | Surat"}
            year="Sep 2022 - Present"
            desc={[
              "Proactively identify and pursue new business opportunities in the IT industry. This includes lead generation, market research, and networking to expand the client base.",
              "Build and maintain strong relationships with clients, understanding their IT needs and providing tailored solutions. Ensure client satisfaction and act as a trusted advisor.",
              "Drive sales efforts, meet or exceed sales targets, and negotiate contracts. Present IT products or services to clients and effectively close deals.",
              "Conduct market analysis to identify trends, competition, and customer demands. Develop and implement effective sales and marketing strategies to gain a competitive edge in the IT market.",
              "Prepare compelling proposals and quotations, tailored to clients' requirements. Negotiate contract terms and conditions, ensuring compliance and profitability.",
              "Collaborate with internal teams such as technical experts, project managers, and delivery teams to ensure successful project execution and client satisfaction.",
              "Stay updated on the latest IT technologies, trends, and industry best practices. Possess in-depth knowledge of IT solutions and effectively communicate the value proposition to clients.",
              "Manage and grow existing client accounts, ensuring long-term relationships and repeat business. Provide exceptional customer service and support, addressing any concerns or issues promptly.",
              "Gather and analyze market intelligence, competitor activities, and customer feedback. Utilize this information to adapt sales strategies and identify new opportunities.",
              "Track and report sales performance, pipeline, and revenue forecasts. Analyze data to identify areas for improvement and make data-driven decisions.",
            ]}
            skills={[
              "Lead Generation",
              "Client Relationship Management",
              "Sales and Revenue Generation",
              "Market Analysis and Strategy",
              "Proposal Development",
              "Collaboration and Teamwork",
              "Technological Expertise",
              "Account Management",
              "Market Intelligence",
              "Reporting and Analysis",
            ]}
          />

          <ExperienceCard
            title={"Business Development Manager"}
            company={"Tecocraft Infusion Pvt Ltd | Surat"}
            year="Feb 2022 - Aug 2022"
            desc={[
              "Experienced IT Upwork Business Development Manager (BDM) with a proven track record of securing new clients and driving revenue growth.Utilizes market analysis and strategic networking to identify and engage with potential clients. Expertly tailors IT solutions to meet client needs, exceeding sales targets and consistently delivering results.",
              "Collaborates seamlessly with cross-functional teams, including technical experts and project managers, to ensure seamless project delivery and exceptional client satisfaction. Builds and maintains strong client relationships through effective communication, understanding their unique requirements, and providing tailored solutions.",
              "Highly skilled in contract negotiation, proposal development, and pricing strategies to maximize profitability. A proactive and goaloriented professional, constantly staying updated on industry trends and leveraging market intelligence to identify new opportunities and stay ahead of the competition.",
              "Overall, a results-driven IT Upwork BDM who excels in client acquisition, revenue generation, and fostering long-term partnerships, driving business growth and success.",
            ]}
            skills={[
              "Upwork",
              "IT Sales",
              "Team Management",
              "Client Acquisition",
              "Sales Management",
            ]}
          />
          <ExperienceCard
            title={"Business Development Manager"}
            company={"Ohoshop Mcommerce Pvt ltd | Ahamedabad"}
            year="Jan 2019 - Jan 2022"
            desc={[
              "As an E-commerce Business Development Manager (BDM), I am responsible for driving business growth in the mobile and Web commerce industries. I actively seek out and pursue new opportunities, while also cultivating strong client relationships and providing tailored solutions. I am in charge of meeting sales targets, negotiating contracts, and presenting clients with the benefits of mobile and Web commerce. I align strategies and ensure the successful implementation of E-commerce solutions by collaborating with cross-functional teams. I analyse market data to make informed decisions and contribute to the improvement of products and services while staying up to date on industry trends. Overall, as an E-commerce BDM, I am a strategic and results-driven professional committed to increasing revenue and positioning your company as a mobile commerce leader.",
            ]}
            skills={[
              "IT Sales",
              "Team Management",
              "Client Acquisition",
              "Sales Management",
              "Business Strategies",
            ]}
          />
          <ExperienceCard
            title={"Business Development Executive | Team Lead"}
            company={"E-Procurement Technologies Ltd | Ahamedabad"}
            year="2019 - 2020"
            desc={[
              "Proactively identify and generate leads through various channels such as market research, networking, and cold calling. Identify potential clients and initiate contact to explore business opportunities.",
              "Build and maintain strong relationships with clients by understanding their IT needs and providing suitable solutions. Act as a trusted advisor, effectively communicating the value proposition of your company's IT services or products.",
              "Drive sales efforts to meet or exceed sales targets. Present and demonstrate IT solutions to clients, addressing their pain points and showcasing the benefits of your offerings. Negotiate contracts and pricing to close dealssuccessfully.",
              "Conduct market research and analysis to identify industry trends, competitors, and customer preferences. Develop effective sales and marketing strategies to position your company competitively and maximize business opportunities.",
              "Prepare compelling proposals and quotations tailored to client requirements. Clearly outline the scope of work, deliverables, timelines, and pricing to present a comprehensive solution to clients.",
              "Collaborate with internal teams, including technical experts, project managers, and delivery teams, to ensure successful project execution. Coordinate efforts to meet client expectations and ensure seamless project delivery.",
              "Actively participate in industry events, conferences, and networking opportunities to expand professional networks and promote your company's IT solutions. Stay updated on the latest industry trends and technologies.",
              "Nurture existing client relationships to encourage repeat business and referrals. Provide exceptional customer service and support, addressing any concerns or issues promptly.",
              "Track and report sales performance, pipeline, and revenue forecasts. Analyze data to identify areas for improvement and make data-driven decisions to optimize business development strategies.",
              "Stay updated on the latest IT technologies, solutions, and industry best practices. Continuously enhance your knowledge and skills to effectively communicate the value proposition of your company's offerings.",
              "Overseeing team performance, providing guidance and support, and ensuring successful project delivery.",
            ]}
            skills={["Lead Generation", "Client Relationship Management", "Sales and Revenue Generation", "Market Analysis and Strategy", "Proposal Development", "Collaboration and Teamwork", "Industry Networking", "Relationship Building", "Reporting and Analysis", "Continuous Learning", "Team Leading"]}
          />
        </div>
        <div className="text-center flex flex-col items-center mt-16">
          <div className="bg-lime-300 w-fit rounded-2xl p-2 ">
            <Image
              className="w-fit rounded-2xl scale-150 p-2"
              src={decl}
              alt="Welcome"
              width={80}
              height={100}
            />
          </div>
          <h1 className="text-4xl font-bold m-2">Declaration</h1>
          <p className="text-xl m-6">I hereby declare that the above-mentioned information is correct up to my knowledge and I bear the responsibility for the
            correctness of the above-mentioned particulars</p>
        </div>
      </section>
    </>
  );
};

export default Experience;
