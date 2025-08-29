import React from 'react'
// import doctor1 from "../assets/doctor1.jpg"
// import doctor2 from "../assets/doctor2.jpg"
import doctor3 from "../assets/doctor3.jpg"
import { FaAmbulance, FaStethoscope } from "react-icons/fa";
import { GiCaduceus } from "react-icons/gi";
const Home = () => {
  const cards = [
    {
      id: 1,
      title: "Emergency Cases",
      desc: "Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.",
      link: "LEARN MORE",
    },
    {
      id: 2,
      title: "Doctors Timetable",
      desc: "Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.",
      link: "LEARN MORE",
    },
    {
      id: 3,
      title: "Opening Hours",
      desc: "Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.",
      link: "LEARN MORE",
    }
  ]
  return (
    <>
      <main className='overflow-hidden'>
        <section className='w-full py-6'>


          <div className='relative group w-full'>
            <img src={doctor3} alt="DoctorImg" className='w-full h-[200px] sm:min-h-[400px] md:min-h-[500px] object-cover transform transition-transform duration-500 group-hover:scale-105' />

            {/* Text on top of image */}
            <div className='absolute hidden bottom-[-150px] left-0 right-0 sm:bottom-[5px] md:flex flex-col justify-end items-end px-6 sm:px-8 pb-3'>
              <div className='w-full backdrop-blur-md bg-black/30 px-4 py-3 gap-6 flex-col shadow-xl lg:flex-row items-start  rounded-2xl flex lg:items-center justify-around'>
                <div className='text-left'>

                  <h1 className='text-2xl sm:text-2xl md:text-4xl lg:text-5xl text-white font-extrabold leading-snug mb-3'>
                    We Provide Best <span className='text-blue-500'>Medical</span> Services <br />
                    That You Can <span className='text-blue-500'>Trust!</span>
                  </h1>
                  <p className='text-sm text-gray-100 sm:text-base leading-relaxed max-w-3xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad rerum aspernatur ratione laborum ipsa laudantium odit exercitationem.</p>
                </div>



                <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto'>
                  <button className='bg-blue-700 text-white font-bold px-4 py-2 rounded cursor-pointer w-full sm:w-auto'>Get Appointment</button>
                  <button className='border-2 border-blue-700 text-white bg-gray-800 font-bold px-4 py-2 rounded cursor-pointer'>Contact Us</button>
                </div>
              </div>

            </div>
          </div>



          <div className='max-w-7xl mx-auto'>
            {/* // 1st  */}

            {/* Three Cards  */}
            <div className='flex justify-center items-center gap-8 py-12'>
              {
                cards.map((card, index) => (
                  <div className='w-[350px] h-auto border border-white/20 backdrop-blur-md bg-white/10 shadow-lg text-white px-6 py-6 flex flex-col space-y-10 justify-between rounded-xl transition duration-300 hover:scale-105' key={index}>
                    <h1 className='text-2xl font-bold leading-snug text-blue-500'>{card.title}</h1>
                    <p className='text-sm text-gray-600 leading-relaxed'>{card.desc}</p>
                    <a href="" className='font-bold text-sm text-blue-800 hover:underline'>{card.link}</a>
                  </div>
                ))
              }
            </div>








          </div>

        </section>

        <section className='bg-white dark:bg-gray-900 py-16 px-6'>
          <div className='max-w-6xl mx-auto text-center'>

            {/* Heading  */}
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white'> We Are Always Ready <span className="text-blue-600">To</span> Help You & <br />
              Your Family</h2>
            <p className='text-gray-500 dark:text-gray-300 max-w-2xl mx-auto mt-4'> Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet, pretium.</p>

            {/* Services  */}
            <div className='grid grid-col md:grid-cols-3 gap-8 mt-12'>
              {/* Emergency Help  */}
              <div className='flex flex-col items-center text-center'>

                <div className='w-20 h-20 flex items-center justify-center rounded-full hover:bg-blue-500 hover:text-white bg-blue-100 text-blue-600 mb-4  transition-all duration-300 ease-in-out'>
                  <FaAmbulance size={36} />
                </div>
                <h3 className='text-lg font-bold text-gray-900 dark:text-white'>Emergency Help</h3>
                <p className='text-sm text-gray-600 dark:text-gray-400 mt-2'> Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>


              </div>
              {/* Enriched Pharmacy */}
              <div className='flex flex-col items-center text-center'>
                <div className='w-20 h-20 rounded-full flex justify-center items-center hover:bg-blue-500 hover:text-white bg-blue-100 text-blue-600 mb-4 transition-all duration-300 ease-in-out'>
                  <GiCaduceus size={36} />
                </div>
                <h3 className='text-lg font-bold text-gary-900 dark:text-white'>Enriched Pharmacy</h3>
                <p className='text-sm text-gray-600 dark:text-gray-400 mt-2'>  Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.
                </p>
              </div>


              {/* Medical Treatment */}
              <div className='flex flex-col items-center text-center'>
                <div className='w-20 h-20 flex items-center justify-center rounded-full hover:bg-blue-500 hover:text-white bg-blue-100 text-blue-600 mb-4 transition-all duration-300 ease-in-out'>
                  <FaStethoscope size={36} />
                </div>
                <h3 className='text-lg font-bold text-gray-900 dark:text-white'>Medical Treatment</h3>
                <p className='text-sm text-gray-600 dark:text-white mt-2'> Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
              </div>

            </div>
          </div>

        </section>

      </main>
    </>
  )
}

export default Home
