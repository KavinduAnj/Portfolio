import { FaLink } from "react-icons/fa";
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
import pic4 from '../assets/pic4.png'

const projects = [
  {
    title: "Travel Website",
    description: "Responsive travel landing page with animations",
    link: "https://kavinduanj.github.io/travel-website/",
    image: pic2,
  },
  {
    title: "Study Compaion",
    description: "A Study Companion with multiple features.",
    link: "https://github.com/KavinduAnj/Study-Companion-Bot",
    image: pic3,
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website.",
    link: "https://kavinduanj.github.io/Portfolio/",
    image: pic4,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 ">
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
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-2xl hover:bg-blue-700 transition"
                >
                  View Project <FaLink className="ml-2" />
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
