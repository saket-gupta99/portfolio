import Cards from "../components/Cards";

export default function About() {
  return (
    <div id="about" className="text-center lg:text-left mt-32">
      <h2 className="text-3xl font-bold text-green-500 mb-7">About Me</h2>
      <div className="flex flex-col gap-16 lg:flex-row">
        <div className="space-y-7 lg:w-1/2 text-lg">
          <p>
            I'm a passionate full-stack developer with expertise in the MERN
            stack. I love creating efficient, scalable applications that solve
            real-world problems.
          </p>
          <p>
            With a strong foundation in modern web technologies, I specialize in
            building dynamic, responsive applications using MongoDB, Express.js,
            React, and Node.js. My passion lies in writing clean, maintainable
            code and staying up-to-date with the latest industry trends.
          </p>
        </div>
        <div className="lg:w-1/2 rounded-4xl h-fit bg-pink-600 dark:bg-green-500 mt-6 lg:mt-0">
          <div className="p-10 text-white space-y-6 font-semibold text-lg">
            <p className="text-xl">Quick Stats</p>
            <div className="flex justify-between">
              <p>Projects Completed</p>
              <p>5+</p>
            </div>
            <div className="flex justify-between">
              <p>Technologies mastered</p>
              <p>10+</p>
            </div>
          </div>
        </div>
      </div>
      <Cards />
    </div>
  );
}
