import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profileImg from "../assests/myImage.jpeg"


const Hero = () => {
  

  
  return (
    <div className="min-h-screen transition-colors" style={{ backgroundColor: '#1f2029', color: 'white' }}>


    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-8 md:py-16"
    >
       <img src={profileImg} alt="Profile" className="w-32 h-32 rounded-full mb-6 object-cover border-2 border-darkPink" />
      <h1 className="text-3xl md:text-5xl font-bold">Hi, I'm Miracle Ezeh</h1>
      <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl">
        I'm a Frontend Developer with 3 years of experience crafting high-performance, user-friendly interfaces using JavaScript, React, Vue, Next.js, Tailwind CSS, and Material UI.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <Link to="/projects" className="px-6 py-2 bg-darkPink text-white rounded-lg hover:opacity-90">View Projects</Link>
        <a href="../assests/CV_II.pdf" download className="px-6 py-2 border border-darkPink text-darkPink rounded-lg hover:bg-darkPink hover:text-white">Download CV</a>
      </div>
    </motion.section>
    </div>
  );
};

export default Hero;
