import { PiBracketsAngleBold } from "react-icons/pi";
import { FaDatabase } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { FaMobileButton } from "react-icons/fa6";

const technologies = [
  {
    icon: <PiBracketsAngleBold size={25} />,
    name: "Frontend",
    technologies: ["React", "Javascript", "Typescript"],
  },
  {
    icon: <FaDatabase size={25} />,
    name: "Backend",
    technologies: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    icon: <TbWorld size={25} />,
    name: "Web Technologies",
    technologies: ["HTML", "CSS", "Tailwind CSS"],
  },
  {
    icon: <FaMobileButton size={25} />,
    name: "Tools",
    technologies: ["Git", "VS Code", "Postman"],
  },
];
export default function Cards() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 my-20 ">
      {technologies.map((el) => {
        return (
          <div
            key={el.name}
            className="space-y-3 w-full p-7 shadow-lg rounded-lg transition-transform duration-300 hover:-translate-y-2 bg-slate-50 dark:text-white dark:bg-dark-700"
          >
            <div className="bg-pink-600 dark:bg-green-500 text-slate-200 p-4 rounded-2xl w-max mx-auto lg:mx-0">
              {el.icon}
            </div>
            <div className="font-semibold text-xl">{el.name}</div>
            <div className="text-slate-700 dark:text-slate-300 text-sm">
              {el.technologies.join(", ")}
            </div>
          </div>
        );
      })}
    </div>
  );
}
