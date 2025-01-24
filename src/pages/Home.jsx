import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import CountdownTimer from '../components/Timer';
import About from './AboutUs';
import Sponsors from './Sponsors';
// import Conference from '../components/Conference';
// import logo from '../assets/Heading.png';
import squidFont from '../../public/assets/fonts/GameOfSquids.ttf'; // Assuming you have a CSS file to apply the font
import Prizes from '../components/Prizes';
import Contact from '../components/contact'
import logo from '../assets/logo transparent.svg';
import SocietyLogo from '../../public/assets/images/images-removebg-preview.png'

const Home = () => {

  const theme = {
    themeOfEvent: "Rise of the Machines"
  }

  return (
    <div className="min-h-screen overflow-hidden">

      {/* Hero Section */}

        <section className='relative w-full lg:min-h-screen min-h-[70vh] flex flex-col justify-center items-center '>
      <img src={logo} alt="" className='lg:absolute lg:top-1 lg:right-[-5px]  w-[350px] '/>
      {/* <img src={SocietyLogo} alt="" className='lg:absolute lg:top-[7px] lg:right-[10px] rounded-3xl w-[100px] bg-white '/> */}
        <div className='flex flex-col justify-center items-center space-y-8 gap-205'>
          <h1 className='relative z-[100] text-white/80 font-squidFont lg:text-[8vw] lg:leading-[8vw] leading-[14vw] text-[14vw] text-center '>RoboWeek<br />3.0</h1>
            <CountdownTimer />
          </div>
          <div className='mt-5'>
            <Link to="/sign">
          <Button text="Register Now" textSize="text-2xl" iconLink={<i className="ri-arrow-right-line"></i>} />
            </Link>
          </div>
        </section>

        {/* Features Section */}
      <section className="py-20 z-1000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="relative z-1000 text-3xl font-bold text-center mb-12 text-pink-400 font-squidFont"><span className='text-white'>Why Join</span> RoboWeek 3.0?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ 
              {
                title: "Learn & Innovate",
                description: "Get hands-on experience with cutting-edge robotics technology"
              },
              {
                title: "Network",
                description: "Connect with industry experts and like-minded innovators"
              },
              {
                title: "Win Prizes",
                description: "Compete for exciting prizes and recognition"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-lg bg-black/40 p-6 rounded-xl border border-pink-500 shadow-lg hover:border-pink-400 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-4 text-pink-400 font-squidFont">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <About />   

      {/* Timeline Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="relative z-1000 text-3xl font-bold text-center mb-10 text-pink-400 font-squidFont">Unleash the Future: Event Timeline</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pink-400/30"></div>

            {[ 
              { event: "Registration Opens", date: "--/03/2025" },
              { event: "Team Formation Deadline", date: "--/03/2025" },
              { event: "Events Begin", date: "22/03/2025" },
              { event: "Day 2", date: "23/03/2025" },
              { event: "Final Day", date: "24/03/2025" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pl-6' : 'md:pr-6 text-right'}`}>
                  <div className="backdrop-blur-lg bg-black/40 p-6 rounded-xl border border-pink-500 shadow-lg hover:border-pink-400 transition-all duration-300">
                    <p className="text-gray-300">{item.event} : {item.date}</p>
                  </div>
                </div>

                <div className="w-2/12 flex justify-center">
                  <motion.div
                    className="w-6 h-6 bg-pink-400 rounded-full border-4 border-black relative z-10"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>

                <div className="w-full md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Prizes />

      <Sponsors />
    <Contact />

      {/* Conference Section */}
      {/* <Conference /> */}
    </div>
  );
};

export default Home;