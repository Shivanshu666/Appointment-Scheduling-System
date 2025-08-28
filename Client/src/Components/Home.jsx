import React from 'react'
// import doctor1 from "../assets/doctor1.jpg"
// import doctor2 from "../assets/doctor2.jpg"
import doctor3 from "../assets/doctor3.jpg"

const Home = () => {
    const cards=[
        {
            id:1,
            title:"Emergency Cases",
            desc:"Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.",
            link:"LEARN MORE",
        },
         {
            id:2,
            title:"Doctors Timetable",
            desc:"Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.",
            link:"LEARN MORE",
        },
         {
            id:3,
            title:"Opening Hours",
            desc:"Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.",
            link:"LEARN MORE",
        }
    ]
  return (
    <>
      <main className='overflow-hidden'>
        <section className='w-full py-6'>
               <div className='relative group w-full'>
                <img src={doctor3} alt="DoctorImg" className='w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transform transition-transform duration-500 group-hover:scale-105'/>

                 {/* Text on top of image */}
                <div className='absolute inset-0 flex flex-col justify-end px-6 sm:px-8 pb-3'>
                    <div className='backdrop-blur-md bg-black/30 px-4 py-3 shadow-xl rounded-2xl flex items-center justify-around'>
                     <div>

                    <h1 className='text-4xl text-white font-extrabold leading-snug mb-3'>
                        We Provide Best <span className='text-blue-500'>Medical</span> Services <br />
                        That You Can <span className='text-blue-500'>Trust!</span>
                    </h1>
                    <p className='text-sm text-gray-100 sm:text-base leading-relaxed max-w-3xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad rerum aspernatur ratione laborum ipsa laudantium odit exercitationem.</p>
                     </div>


                    
                    <div className='space-x-16'>
                        <button className='bg-blue-700 text-white font-bold px-4 py-2 rounded cursor-pointer'>Get Appointment</button>
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
                cards.map((card,index)=>(
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

      </main>
    </>
  )
}

export default Home
