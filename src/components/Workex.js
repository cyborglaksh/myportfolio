import React from "react";
import { workex } from "../data";
import { BriefcaseIcon } from "@heroicons/react/solid";

export default function Workex() {
  return (
    <section id="workex" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
        <BriefcaseIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Work Experience
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Internships & Proof of Work
          </p>
        </div>
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" />
          {workex.map((job, index) => (
            <div
              key={index}
              className="border-l-2 border-opacity-20 border-gray-700 border-dashed p-4 transition duration-500 ease-in-out transform hover:scale-105 relative"
            >
              <div className="flex items-center mb-4">
                <span className="text-green-400 font-semibold mr-2">
                  {job.time}
                </span>
                <div className="border-t-2 border-green-400 flex-1" />
              </div>
              <h2 className="text-sm tracking-widest text-green-400 title-font mb-1">
                {job.Position}
              </h2>
              <h1 className="text-lg font-medium title-font mb-3 text-white">
                {job.Company}
              </h1>
              <p className="leading-relaxed text-base">{job.Description}</p>
              {/* Separate sections for documents */}
              {job.documents && (
                <div className="mt-4">
                  <h3 className="text-white font-semibold mb-2">Documents:</h3>
                  <ul>
                    {job.documents.map((doc, i) => (
                      <li key={i} className="text-gray-400">
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
