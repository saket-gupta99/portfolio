import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

const projects = [
  {
    name: "Employee Management System",
    image: "/EMS.png",
    description:
      "A full-stack app to manage employee records with role-based access and JWT authentication. Built using React, Node.js, Express, and MongoDB. Admins can securely add, update, or delete users through a responsive UI.",
    technologies: ["Node.js", "Express", "MongoDB", "React", "TanStack Query", "Tailwind CSS", "JWT"],
    github: "https://github.com/saket-gupta99/ems",
    live: "https://siinfratechems.netlify.app/home",
  },
  {
    name: "Second Brain App",
    image: "/second-brain.png",
    description:
      "A modern note-taking and knowledge management app inspired by the second brain concept. Features rich-text editing, link previews, and persistent storage.",
    technologies: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Tailwind CSS",
      "Express",
      "MongoDB",
      "JWT"
    ],
    github: "https://github.com/saket-gupta99/second-brain",
    live: "https://second-brainn.netlify.app/login",
  },
  {
    name: "usePopcorn",
    image: "/use-popcorn.png",
    description:
      "A movie browser using the OMDB API. Search, rate, and save movies to your watched list with localStorage and custom React hooks. Smooth keyboard navigation and dynamic content rendering enhance the experience.",
    technologies: ["React", "OMDB API", "LocalStorage", "Hooks"],
    github: "https://github.com/saket-gupta99/usepopcorn",
    live: "https://usepopcorn-react-now.netlify.app/",
  },
  {
    name: "Fast React Pizza",
    image: "/react-pizza.png",
    description:
      "A pizza ordering app with cart, real-time menu, and priority order options. Built with React, Redux Toolkit, Tailwind, and API integration. Includes order tracking, form validation, and full mobile responsiveness.",
    technologies: [
      "React",
      "Redux Toolkit",
      "TailwindCSS",
      "React Router",
      "API",
    ],
    github: "https://github.com/saket-gupta99/fast-react-pizza",
    live: "https://react-pizza-now.netlify.app/",
  },
];

export default function ProjectCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
      {projects.map((project) => {
        return (
          <div
            key={project.name}
            className="rounded-2xl shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2 "
          >
            <div>
              <img
                className="rounded-t-2xl h-44 lg:h-52 w-full"
                src={project.image}
                alt={project.name}
              />
            </div>
            <div className="p-4 space-y-4 rounded-b-2xl bg-slate-50 dark:bg-dark-700 dark:text-slate-100">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p>{project.description}</p>
              <p className=" flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md p-2 bg-green-500 dark:bg-pink-600"
                  >
                    {tech}
                  </span>
                ))}
              </p>
              <div className="flex justify-between pt-2">
                <a href={project.github} target="_blank">
                  <FaGithub size={25} />
                </a>
                <a href={project.live} target="_blank">
                  <FaArrowUpRightFromSquare size={25} />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
