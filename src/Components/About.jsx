import React from 'react';

export const About = () => {
  const explodingBeamsStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `radial-gradient(circle, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0) 70%),
                 radial-gradient(circle, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0) 70%),
                 radial-gradient(circle, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0) 70%)`,
    backgroundPosition: '0 0, 50% 50%, 100% 100%',
    backgroundSize: '20% 20%, 20% 20%, 20% 20%',
    backgroundRepeat: 'no-repeat',
    animation: 'explode 5s infinite',
    pointerEvents: 'none',
  };

  const keyframes = `
    @keyframes explode {
      0% {
        transform: scale(0);
        opacity: 0.8;
      }
      100% {
        transform: scale(2);
        opacity: 0;
      }
    }
  `;

  return (
    <div className="relative flex flex-col items-center h-screen bg-black text-white p-10 overflow-hidden">
      {/* Background Beams */}
      <style>{keyframes}</style>
      <div style={explodingBeamsStyle}></div>

      {/* Centered "About Us" and "At Sbuko Acres..." */}
      <div className="text-center relative z-10">
        <h1 className="text-4xl md:text-8xl font-bold mb-4">About Us</h1>
        <p className="text-base md:text-lg mb-12 max-w-md mx-auto">
          Let us inspire and take your brand conversations to new heights with our creative executions.
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative group bg-orange-600 p-6 md:p-12 rounded-lg shadow-lg max-w-md overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-left">Our Heritage</h2>
            <p className="text-left text-base md:text-lg">
              We are an African-inspired marketing agency that specializes in integrated communications, advisory services, and digital innovations. 
              With a focus on Brand Advertising and creative Services, public Relations, Stakeholder Management and Media Consultancy, 
              We bring authenticity and a cultural lens to each project. We are African storytellers that elevate your presence through communications strategies that captivate
              and inspire, embracing the vibrant spirit of Africa.
            </p>
          </div>

          <div className="relative group bg-orange-600 p-6 md:p-12 rounded-lg shadow-lg max-w-md overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-left">Our Journey</h2>
            <p className="text-left text-base md:text-lg">
              At Sbuko Acres, we understand the unique African context in which businesses operate.We bring together a team of experienced professionals, combining the expertise
              of top agencies in Eswatini. What sets us apart is our deep understanding of the local context, which forms the foundation of our tailor-made creative Strategy
              development.With our team, networks, skills, and experience, we give our clients a competitive advantage in this tough marketplace.
              Trust us to be your partner in achieving communication and marketing success that aligns with your objectives and celebrates African culture and values.
            </p>
          </div>

          <div className="relative group bg-orange-600 p-6 md:p-12 rounded-lg shadow-lg max-w-md overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-left">Our Culture</h2>
            <p className="text-left text-base md:text-lg">
              Strategy is our foundation. It guides us in understanding your brand's purpose, target audience and the most effective channels to convey your message. 
              With an African focus, we ensure your brand speaks to the right people in a way that resonates with their values.
              Creativity is our platform for achieving resonance and elevating brand conversations. Through our talented team of creatives, 
              we bring fresh perspectives and innovative ideas to captivate and deeply engage a global audience with African stories.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
