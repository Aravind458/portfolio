import React from 'react';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'FuelX',
      description:
        'A full-stack fuel delivery web app enabling users to request fuel with real-time delivery tracking. It supports secure online payments and includes a robust admin panel for order and user management. Built using the MERN stack.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Stripe API'],
      githubUrl: 'https://github.com/Aravind458/FuelX.git',
    },
    {
      title: 'Sports Facility Reservation System',
      description:
        'A slot-based web application for booking sports facilities with real-time availability updates. It features role-based authentication for users and admins, ensuring secure access. Admin dashboard includes analytics for tracking bookings and user activity.',
      technologies: ['React.js', 'Express.js', 'MongoDB', 'Socket.io', 'Material-UI'],
      githubUrl: 'https://github.com/Aravind458/sportsfacility-reservation-system',
    },
    {
      title: 'Heart Disease Detection',
      description:
        'This project is a Streamlit-based web app that predicts the risk of heart disease using machine learning. Users input medical data like age, cholesterol, and blood pressure to get instant predictions. Built using Python, Streamlit, and Scikit-learn, it aids in early diagnosis and preventive care.',
      technologies: ['Python', 'Streamlit', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
      githubUrl: 'https://github.com/Aravind458/Heart-disease-detection.git',
    },
    // {
    //   title: 'Portfolio Website',
    //   description:
    //     'A space-themed responsive portfolio built using React and Tailwind to showcase skills and projects interactively.',
    //   technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'Lucide Icons'],
    //   githubUrl: '#',
    // },
  ];

  return (
    <section id="projects" className="py-20 text-white relative z-10">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">Projects</h2>
        <p className="text-lg text-gray-300">Some of the things I’ve built recently.</p>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 text-left shadow-lg hover:shadow-cyan-500/30 transition-shadow duration-300"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300"
              >
                <Github size={22} />
              </a>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-cyan-400/10 text-cyan-200 border border-cyan-400/20 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
