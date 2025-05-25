import dayjs from "dayjs";
import React from "react";

const JobCard = ({ title, company, type, experience, location, skills, job_link, postedOn }) => {
  const date1 = dayjs(Date.now());
  const diffInDays = date1.diff(postedOn, "day");
  return (
    <div className="mx-40 mb-4">
      <div className="flex justify-between items-center bg-zinc-200 px-6 py-4  hover:scale-101 rounded-lg shadow-md border-2 border-black hover:border-blue-600">
        <div className="flex flex-col items-start gap-3 ">
          <h1 className="text-lg font-semibold">{title} - {company}</h1>
          <p>{type} &#x2022; {experience} &#x2022; {location}</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => ( 
                <p className="text-gray-500 py-1 px-2 rounded-md border border-black" key={index}>{skill}</p>
            ))}
          </div>
        </div>
        <div className="flex  items-center gap-4">
          <p className="text-gray-500">Posted {diffInDays > 0 ? `${diffInDays} days ago` : "Today"}</p>
          <button className="bg-white font-semibold border border-blue-500 text-blue-500 rounded-md px-10 py-2 hover:scale-102 cursor-pointer" onClick={() => window.open(job_link, "_blank")}>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
