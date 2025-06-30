export default function Footer() {
  return (
    <footer className="bg-gray-900/80 text-gray-200 py-10">
      <div className="max-w-7xl text-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Saket Gupta. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://www.linkedin.com/in/saket-gupta-062baa248/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/saket-gupta99/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            GitHub
          </a>
          <a href="/Saket-Resume.pdf" download className="hover:text-white">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
