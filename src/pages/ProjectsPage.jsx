import React from 'react';
import Projects from '../components/Projects';


const ProjectsPage = () => {
  const projects = [
    {
      title: 'TicTacToe Game',
      description: 'A fun two-player game built with React.',
      link: 'https://amitictactoe.netlify.app/',
    },
    {
      title: 'Review & Hiring App',
      description: 'An app for posting company reviews and hiring talent.',
      link: 'https://jafi.vercel.app/',
    },
    {
      title: 'Split Bill App',
      description: 'Helps you split bills with friends easily.',
      link: 'https://jazzy-kulfi-ca9dd1.netlify.app/',
    },
    {
      title: 'CRUD App',
      description: 'Create, Read, Update, Delete operations in a clean UI.',
      link: 'https://eclectic-capybara-14018a.netlify.app/',
    },
   
  ];

  return (
    <section className="py-10 px-4 bg-[#1f2029]">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <Projects key={index} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
