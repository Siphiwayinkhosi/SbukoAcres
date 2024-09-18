import React from "react";

// Placeholder SingleImage component with increased size
const SingleImage = ({ imgSrc }) => {
  return (
    <img src={imgSrc} alt="Client logo" className="h-16 w-auto" /> // Increased image size
  );
};

const Alliances = () => {
  return (
    <div className="relative bg-white pb-[110px] pt-[120px] dark:bg-dark lg:pt-[150px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-5/12">
            <div className="hero-content">
              {/* Heading styled and positioned on top */}
              <h1 className="mb-5 text-4xl font-extrabold leading-snug text-orange-500 dark:text-orange-400 sm:text-[42px] lg:text-[40px] xl:text-5xl">
                We have our African Alliances
              </h1>
              {/* Paragraph content */}
              <p className="mb-8 max-w-[480px] text-lg text-orange-500 dark:text-orange-400">
                As an integrated communications and advertising agency,
                we prioritize communication and consumer-centric excellence.
                Our services go beyond conventional methods,
                including stakeholder campaigns, design and creative executions.
              </p>
              <ul className="flex flex-wrap items-center">
                <li>
                  <a
                    href="/#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-dark lg:px-7"
                  >
                    Get Started
                  </a>
                </li>
                <li>
                  <a
                    href="/#"
                    className="inline-flex items-center justify-center px-5 py-3 text-center text-lg font-medium text-orange-500 hover:text-primary dark:text-orange-400"
                  >
                    For more of our alliances
                  </a>
                </li>
              </ul>
              <div className="clients pt-16">
                <h6 className="mb-6 flex items-center text-s font-normal text-orange-500 dark:text-orange-400">
                  Some Of Our Alliances
                  <span className="ml-3 inline-block h-px w-8 bg-orange-500 dark:bg-orange-400"></span>
                </h6>

                <div className="flex items-center space-x-6"> {/* Increased spacing */}
                  {/* Replace with images from your public folder */}
                  <SingleImage imgSrc="/Sbuko images/wp.png" />
                  <SingleImage imgSrc="/Sbuko images/x.png" />
                  <SingleImage imgSrc="/Sbuko images/y.png" />
                  <SingleImage imgSrc="/Sbuko images/z.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden px-4 lg:block lg:w-1/12"></div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="lg:ml-auto lg:text-right">
              <div className="relative z-10 inline-block pt-11 lg:pt-0">
                {/* Replace image with a custom path from public folder */}
                <img
                  src="/Sbuko images/c.png" // Put your image in the public folder (e.g., public/images/your-large-image.png)
                  alt="hero"
                  className="max-w-full lg:ml-auto"
                />
                <span className="absolute -bottom-8 -left-8 z-[-1]">
                  <svg
                    width="93"
                    height="93"
                    viewBox="0 0 93 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#FFA500" /> {/* Changed to orange */}
                    <circle cx="2.5" cy="24.5" r="2.5" fill="#FFA500" />
                    <circle cx="2.5" cy="46.5" r="2.5" fill="#FFA500" />
                    <circle cx="2.5" cy="68.5" r="2.5" fill="#FFA500" />
                    <circle cx="2.5" cy="90.5" r="2.5" fill="#FFA500" />
                    <circle cx="24.5" cy="2.5" r="2.5" fill="#FFA500" />
                    <circle cx="24.5" cy="24.5" r="2.5" fill="#FFA500" />
                    <circle cx="24.5" cy="46.5" r="2.5" fill="#FFA500" />
                    <circle cx="24.5" cy="68.5" r="2.5" fill="#FFA500" />
                    <circle cx="24.5" cy="90.5" r="2.5" fill="#FFA500" />
                    <circle cx="46.5" cy="2.5" r="2.5" fill="#FFA500" />
                    <circle cx="46.5" cy="24.5" r="2.5" fill="#FFA500" />
                    <circle cx="46.5" cy="46.5" r="2.5" fill="#FFA500" />
                    <circle cx="46.5" cy="68.5" r="2.5" fill="#FFA500" />
                    <circle cx="46.5" cy="90.5" r="2.5" fill="#FFA500" />
                    <circle cx="68.5" cy="2.5" r="2.5" fill="#FFA500" />
                    <circle cx="68.5" cy="24.5" r="2.5" fill="#FFA500" />
                    <circle cx="68.5" cy="46.5" r="2.5" fill="#FFA500" />
                    <circle cx="68.5" cy="68.5" r="2.5" fill="#FFA500" />
                    <circle cx="68.5" cy="90.5" r="2.5" fill="#FFA500" />
                    <circle cx="90.5" cy="2.5" r="2.5" fill="#FFA500" />
                    <circle cx="90.5" cy="24.5" r="2.5" fill="#FFA500" />
                    <circle cx="90.5" cy="46.5" r="2.5" fill="#FFA500" />
                    <circle cx="90.5" cy="68.5" r="2.5" fill="#FFA500" />
                    <circle cx="90.5" cy="90.5" r="2.5" fill="#FFA500" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alliances;
