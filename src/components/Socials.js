import { UserIcon } from "@heroicons/react/solid";
import React from 'react';
import { socials } from "../data"; // Assuming socials array is imported from a separate data file

const SocialProfileBlock = ({ name, url, icon }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center bg-gray-200 rounded-lg p-3 m-3 hover:bg-gray-300 transition duration-300 shadow-md"
  >
    <img src={icon} alt={name} className="w-8 h-8 mr-3" />
    <span className="text-black text-lg font-semibold">{name}</span>
  </a>
);

const Socials = () => {
  const profileBlocks = socials.map((profile, index) => (
    <div key={index} className="w-1/4 px-3">
      <SocialProfileBlock {...profile} />
    </div>
  ));

  return (
    <section id="socials" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <UserIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My Social Profiles
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Connect with me on various social platforms.
          </p>
        </div>
        <div className="flex flex-wrap justify-center py-4">
          {profileBlocks}
        </div>
      </div>
    </section>
  );
};

export default Socials;
