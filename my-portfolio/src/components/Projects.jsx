import { FaExternalLinkAlt } from "react-icons/fa";
import pic2 from '../assets/pic2.png'

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React & Tailwind.",
    link: "https://portfolio-b7wa.vercel.app/",
    image: "https://via.placeholder.com/400x250?text=Portfolio+Preview",
  },
  {
    title: "Notes App",
    description: "A MERN stack notes app with authentication.",
    link: "https://your-notes-app.com",
    image: "https://via.placeholder.com/400x250?text=Notes+App",
  },
  {
    title: "Travel Website",
    description: "Responsive travel landing page with animations.",
    link: "https://kavinduanj.github.io/travel-website/",
    image: pic2,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Grid layout */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg overflow-hidden flex flex-col"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                >
                  View Project <FaExternalLinkAlt className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
