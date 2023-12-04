import React, { useState, ChangeEvent } from "react";

const Home = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState<string | null>(null);


  const handleNavItemClick = (itemName: string) => {
    setActiveNavItem(itemName);
    setNavOpen(false); // Close the mobile navigation after clicking
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handleNumberInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setNumber(e.target.value);
  const handleMessageInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value);


  
  return (
    <div className="w-full px-2 sm:px-4 md:px-8">
      <div className="container mx-auto flex justify-center items-center py-4 top-0">
        <div className="hidden lg:flex space-x-4 text-neutral-700 text-base font-medium">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="lg:hidden items-end flex w-full justify-end">
          <button
            className="text-2xl focus:outline-none"
            onClick={() => setNavOpen(!isNavOpen)}
          >
            &#9776;
          </button>
        </div>
      </div>
      {isNavOpen && (
        <div className="lg:hidden bg-violet-400 text-white p-4 rounded-md">
          <a href="#home" className="block py-2">
            Home
          </a>
          <a href="#skills" className="block py-2">
            Skills
          </a>
          <a href="#projects" className="block py-2">
            Projects
          </a>
          <a href="#contact" className="block py-2">
            Contact
          </a>
        </div>
      )}
      <div
        className="header w-full flex flex-col md:flex-row md:py-20 py-6"
        id="home"
      >
        <div className="header-img w-full items-center flex justify-center md:w-1/2 pb-8 md:pb-0 p-4">
          <img src="./images/Group 1.png" alt="Header Image" className="" />
        </div>
        <div className="header-content w-full items-center flex justify-center md:w-1/2 flex-col p-1 sm:p-5">
          <div className="header-text w-full flex flex-col justify-start items-start">
            <div className="sub-text text-gray-900 text-xl font-semibold sm:text-2xl pb-1">
              Hello 👋
            </div>
            <div className="main-header text-gray-900 text-3xl sm:text-[40px] font-semibold pb-2 w-full">
              I’m <span className="text-violet-400">Dilhara Abeysekera</span>
            </div>
            <div className="header-content text-gray-500 text-lg sm:text-xl font-normal pb-6 w-full md:max-w-xl">
              “ Transforming a passion for technology into a career, I
              specialize in front-end development. Currently navigating the IT
              industry through an internship, I am on a journey of continuous
              learning and growth. My blend of creativity and technical skills,
              especially in UI/UX design, defines my commitment to innovation in
              the dynamic field of IT. “
            </div>
          </div>
          <div className="header-cta flex flex-row items-start justify-start gap-4 w-full">
            <button className=" text-white text-base font-semibold  bg-violet-600 rounded-lg justify-center items-center gap-3 flex flex-row-reverse px-3 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>
              Resume
            </button>
            <button className="rounded-lg justify-center items-center px-3 py-2 border-2 border-gray-400 text-gray-600">
              Contact
            </button>
          </div>
        </div>
      </div>
      <div
        className="skills w-full flex flex-col justify-center items-center  mt-3 md:mt-6"
        id="skills"
      >
        <div className="heading text-gray-900 text-[32px] sm:text-4xl md:text-5xl font-semibold py-4 md:py-8">
          Skills & Expertise
        </div>
        <div className="content text-gray-500 text-lg md:text-xl font-normal text-center items-center md:max-w-6xl px-4 md:px-8 pb-8 md:pb-10">
          From web design aesthetics to the software development, I bring a
          versatile set of competencies to the forefront. Proficient in{" "}
          <span className=" text-violet-400">Figma, CSS, Java, and HTML</span> ,
          I don't just code; I design experiences. Explore the facets of my
          expertise as I navigate the digital landscape with a blend of
          innovation, precision, and an eye for detail.
        </div>
        <div className="w-full flex flex-col md:flex-row items-center gap-8  justify-center md:gap-24 md:py-16">
          <div className="flex flex-row items-center justify-center gap-8 md:gap-24">
            <div className="flex flex-col items-center justify-center gap-2">
              <img src="./images/html.png" alt="" className="img h-24 w-24" />
              <div>HTML</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <img src="./images/css-3.png" alt="" className="img h-24 w-24" />
              <div>CSS</div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-8 md:gap-24">
            <div className="flex flex-col items-center justify-center gap-2">
              <img src="./images/js.png" alt="" className="img h-24 w-24" />
              <div>JavaScript</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <img src="./images/figma.png" alt="" className="img h-24 w-24" />
              <div>Figma</div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="projects w-full flex flex-col items-center justify-center py-8 md:py-8"
        id="projects"
      >
        <div className="heading text-gray-900 text-[32px] sm:text-4xl md:text-5xl font-semibold py-4 md:py-12 md:pb-20">
          Projects
        </div>
        <div className="projects-section flex justify-center items-center flex-col md:flex-row gap-8 md:gap-16 px-4 md:px-0">
          <div className="container bg-[#63A58D] p-4 rounded-md">
            <img src="./images/image 12.png" alt="" />
            <div className="type text-xl font-medium md:text-2xl pt-2">
              UI/UX Design
            </div>
            <div className="name text-white text-[32px] leading-none md:text-4xl font-bold pb-1">
              Travel Website
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="text-white text-base md:text-xl font-light underline ">
                Visit
              </div>
              <img src="./images/figma (1).png" alt="" className="w-6 h-6" />
            </div>
          </div>
          <div className="container bg-[#CA7984] p-4 rounded-md">
            <img src="./images/image 11.png" alt="" />
            <div className="type text-xl font-medium md:text-2xl pt-2">
              Image search Website
            </div>
            <div className="name text-white text-[32px] leading-none md:text-4xl font-bold pb-1">
              Travel Website
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="text-white text-base md:text-xl font-light underline ">
                Visit
              </div>
              <img src="./images/figma (1).png" alt="" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="contact w-full items-center justify-center flex flex-col py-8 pb-16 px-4 md:px-6"
        id="contact"
      >
        <div className="max-w-2xl">
          <div className="heading text-gray-900 text-[32px] sm:text-4xl md:text-5xl font-semibold py-4 md:py-6 md:pt-10 items-center text-center">
            Get in touch
          </div>
          <div className="content text-gray-500 text-lg md:text-xl font-normal text-center items-center md:max-w-6xl px-4 md:px-8 pb-8 md:pb-12">
            Whether it's about collaboration, inquiries, or a simple greeting,
            your message is important. Don't hesitate to reach out—I'm all ears
            and excited to connect!
          </div>
          <form
            className="form items-center justify-center w-full flex flex-col"
            method="POST"
            action="https://formspree.io/f/xpzggvgq" // Replace with your Formspree endpoint
          >
            <div className="flex flex-col w-full pb-4 max-w-sm">
              <label
                htmlFor="name"
                className="text-slate-700 text-sm font-medium pb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={name}
                onChange={handleNameInputChange}
                className="w-full p-3 border rounded text-gray-500 text-base font-light focus:ring-1 focus:ring-gray-400 focus:outline-none "
              />
            </div>
            <div className="flex flex-col w-full pb-4 max-w-sm">
              <label
                htmlFor="email"
                className="text-slate-700 text-sm font-medium pb-1"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="name@gmail.com"
                value={email}
                onChange={handleEmailInputChange}
                className="w-full p-3 border rounded text-gray-500 text-base font-light focus:ring-1 focus:ring-gray-400 focus:outline-none "
              />
            </div>
            <div className="flex flex-col w-full pb-4 max-w-sm">
              <label
                htmlFor="number"
                className="text-slate-700 text-sm font-medium pb-1"
              >
                Number
              </label>
              <input
                type="text"
                id="number"
                name="number"
                placeholder="+94 11 000 0000"
                value={number}
                onChange={handleNumberInputChange}
                className="w-full p-3 border rounded text-gray-500 text-base font-light focus:ring-1 focus:ring-gray-400 focus:outline-none "
              />
            </div>
            <div className="flex flex-col w-full pb-4 max-w-sm">
              <label
                htmlFor="message"
                className="text-slate-700 text-sm font-medium pb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder=""
                value={message}
                onChange={handleMessageInputChange}
                className="w-full p-3 border rounded text-gray-500 text-base font-light focus:ring-1 focus:ring-gray-400 focus:outline-none "
              />
            </div>
            <div className="flex flex-col w-full pb-4 max-w-sm">
              <button
                type="submit"
                className="rounded-lg justify-center items-center px-3 py-2 border-2 bg-violet-600 text-white"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
