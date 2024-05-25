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
      .then(() => alert("Thank you! Your message has been sent."))
      .catch((error) => alert("Oops! Something went wrong. Please try again."));
  }

  return (
    <section id="contact" className="relative py-20 bg-gray-900">
      <div className="container mx-auto flex justify-center items-center">
        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-gray-800 rounded-lg px-8 py-10 shadow-2xl"
        >
          <h2 className="text-white text-4xl mb-6 font-bold text-center">
            Contact Me
          </h2>
          <p className="text-gray-400 mb-8 text-center">
            I'm open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm text-gray-400">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-white py-3 px-4 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm text-gray-400">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-white py-3 px-4 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-8">
            <label htmlFor="message" className="block text-sm text-gray-400">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-white py-3 px-4 leading-tight focus:outline-none focus:shadow-outline h-40 resize-none"
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
