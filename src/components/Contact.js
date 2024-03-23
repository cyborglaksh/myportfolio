// src/components/Contact.js

import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="flex justify-center items-center h-screen">
  <form
    netlify
    name="contact"
    onSubmit={handleSubmit}
    className="w-1/2 bg-gray-800 rounded-lg px-8 py-6 shadow-lg"
  >
    <h2 className="text-white text-3xl mb-4 font-medium">
      Hire Me
    </h2>
    <p className="text-gray-400 mb-6">
      I am a regular Developer currently working on new technologies.
    </p>
    <div className="mb-4">
      <label htmlFor="name" className="block text-sm text-gray-400">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-white py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="block text-sm text-gray-400">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-white py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div className="mb-6">
      <label htmlFor="message" className="block text-sm text-gray-400">Message</label>
      <textarea
        id="message"
        name="message"
        className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-white py-2 px-3 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
    <button
      type="submit"
      className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Submit
    </button>
  </form>
</div>

    </section>
  );
}