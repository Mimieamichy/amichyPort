import { useState } from "react";
import { FaWhatsapp, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <footer className=" text-white py-10 px-4 md:px-6 mt-12">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <div className="flex flex-wrap gap-6 justify-center mb-6 text-sm md:text-lg">
          <a href="mailto:amichy07@gmail.com" className="hover:text-darkPink">
            Email
          </a>
          <a
            href="https://wa.me/2348065557468"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-darkPink"
          >
            WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/miracle-amarachy-ezeh-078516278/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-darkPink"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/js_mimie"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-darkPink"
          >
            X (Twitter)
          </a>
          <a
            href="https://github.com/Mimieamichy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-darkPink"
          >
             GitHub
          </a>
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="px-6 py-2 bg-darkPink text-white rounded hover:opacity-90 mb-6"
        >
          Contact Me
        </button>

        {showForm && (
          <form
            action="https://formsubmit.co/amichy07@gmail.com"
            method="POST"
            className="w-full max-w-md space-y-4"
            onSubmit={() => toast.success("Message sent successfully!")}
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full p-2 rounded  bg-darkGrey text-white border border-gray-600"
            />
            <input
              type="text"
              name="title"
              required
              placeholder="Subject"
              className="w-full p-2 rounded bg-darkGrey capitalize text-white border border-gray-600"
            />
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Your Message"
              className="w-full p-2 rounded bg-darkGrey text-white border border-gray-600"
            ></textarea>
            <div className="flex justify-between gap-4">
              <button
                type="submit"
                className="px-4 py-2 bg-darkPink text-white rounded hover:opacity-90"
              >
                Send
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 border border-gray-400 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </footer>
  );
};

export default Contact;
