import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";

export default function Navbar() {
  // Function to handle smooth scrolling to target
  const smoothScroll = (targetId) => {
    const target = document.querySelector(targetId);
    if (target) {
      const navbarHeight = document.querySelector('header').offsetHeight;
      window.scrollTo({
        top: target.offsetTop - navbarHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const hashChangeHandler = () => {
      if (window.location.hash) {
        const targetId = `#${window.location.hash.substring(1)}`;
        smoothScroll(targetId);
      }
    };

    window.addEventListener('hashchange', hashChangeHandler);
    return () => {
      window.removeEventListener('hashchange', hashChangeHandler);
    };
  }, []);

  // Function to handle link click
  const handleLinkClick = (targetId) => {
    if (window.location.hash !== targetId) {
      smoothScroll(targetId);
    }
  };

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Laksh Gupta
          </a>
          <span className="ml-3 text-gray-400 text-sm">@cyborglaksh</span>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a href="#socials" className="mr-5 hover:text-white" onClick={() => handleLinkClick('#socials')}>
            Socials
          </a>
          <a href="#projects" className="mr-5 hover:text-white" onClick={() => handleLinkClick('#projects')}>
            Projects
          </a>
          <a href="#workex" className="mr-5 hover:text-white" onClick={() => handleLinkClick('#workex')}>
            Workex
          </a>
          <a href="#skills" className="mr-5 hover:text-white" onClick={() => handleLinkClick('#skills')}>
            Skills
          </a>
          {/* <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a> */}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Hire me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
