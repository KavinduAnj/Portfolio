import { FaCalendarAlt } from "react-icons/fa";

const experiences = [
  {
    title: "BSc (Hons) in Information Systems",
    company: "Sabaragamuwa University of Sri Lanka",
    date: "2024 - Present",
  },
  {
    title: "Front-End Web Development Certification",
    company: "University of Moratuwa",
    date: "2024",
  },
  {
    title: "Python for Beginners Certification",
    company: "University of Moratuwa",
    date: "2024",
  },
  {
    title: "School Education",
    company: "Richmond College Galle",
    date: "2019 - 2023",
  },
];

const Timeline = () => {
  return (
    <div className="max-w-2xl mx-auto p-5">
      <div className="relative border-l-2 border-gray-300">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-10 ml-6">
            {/* Dot */}
            <div className="absolute w-3 h-3 bg-blue-900 rounded-full -left-[7px] border border-white" />
            
            {/* Content */}
            <h3 className="text-lg text-gray-600">
              {exp.title}
            </h3>
            <p className="text-sm text-blue-900">{exp.company}</p>
            <div className="flex items-center text-sm text-blue-950 mt-1">
              <FaCalendarAlt className="mr-2" />
              {exp.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
