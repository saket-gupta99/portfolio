export default function Home() {
  return (
    <div id="home" className="pt-52 lg:pt-44 flex ">
      <div className="space-y-2 lg:w-1/2">
        <div className="flex mb-1">
          Hello &nbsp;
          <img className="h-5 w-5" src="/Hello.gif" alt="hand waving" />, I'm
        </div>
        <div className="text-5xl lg:text-7xl font-semibold mb-4 ">
          Saket Gupta
        </div>
        <div className="text-green-500 text-2xl font-semibold mb-10">
          Web Developer
        </div>
        <a
          href="#contact"
          className="rounded-full bg-green-500 text-white px-16 py-3"
        >
          Contact
        </a>
        <div className="flex mt-10 gap-2">
          <a
            href="https://www.linkedin.com/in/saket-gupta-062baa248/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-10 w-10" src="/linkedin.svg" />
          </a>
          <a
            href="https://github.com/saket-gupta99/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-10 w-10" src="/github.svg" />
          </a>
          {/* <a href="">
            <img className="h-10 w-10" src="/whatsapp.svg" />
          </a> */}
          <a
            href="https://t.me/saketdabbu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-10 w-10" src="/telegram.svg" />
          </a>
        </div>
      </div>
      <div className="hidden lg:flex w-1/2 justify-end">
        <img src="/illustration.svg" alt="illustration" className="h-[26rem]" />
      </div>
    </div>
  );
}
