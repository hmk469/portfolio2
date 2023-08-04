import React from 'react'

export default function Experience() {
  return (
    <div name="experience" className='bg-gradient-to-b from-black via-black to-gray-900 w-full h-screen-full text-white py-10  flex flex-col items-center justify-center '>
      <div className='max-w-screen-lg mx-auto  flex flex-col justify-center w-full h-screen-full '>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
          <p className='py-6'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid gird-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          <div className='shadow-md hover:scale-105 duration-200 py-2 rounded-lg shadow-red-500 py-5'>
            <img src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" alt="" className='mx-auto w-20'/>
            <p className='mt-4'>HTML</p>
          </div>
          <div className='shadow-md hover:scale-105 duration-200 py-2 rounded-lg shadow-blue-500 py-5 '>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/512px-CSS3_logo.svg.png?20210705212817" alt="" className='mx-auto w-20'/>
            <p className='mt-4'>CSS</p>
          </div>
          <div className='shadow-md hover:scale-105 duration-200 py-2 rounded-lg shadow-orange-500 py-5'>
            <img src="https://www.svgrepo.com/show/303206/javascript-logo.svg" alt="" className='mx-auto w-20'/>
            <p className='mt-4'>JAVASCRIPT</p>
          </div>
          <div className='shadow-md hover:scale-105 duration-200 py-2 rounded-lg shadow-green-500 py-5'>
          <svg className='mx-auto w-20' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="mongodb"><path fill="#FFF" d="m12.546 24-.639-.218s.078-3.257-1.091-3.491c-.779-.904.125-38.338 2.93-.125 0 0-.966.483-1.138 1.309-.186.811-.062 2.525-.062 2.525z"></path><path fill="#A6A385" d="m12.546 24-.639-.218s.078-3.257-1.091-3.491c-.779-.904.125-38.338 2.93-.125 0 0-.966.483-1.138 1.309-.186.811-.062 2.525-.062 2.525z"></path><path fill="#FFF" d="M12.889 20.852s5.595-3.678 4.286-11.33c-1.262-5.563-4.239-7.387-4.566-8.088-.358-.499-.701-1.371-.701-1.371l.234 15.475c-.001.015-.484 4.737.747 5.314z"></path><path fill="#499D4A" d="M12.889 20.852s5.595-3.678 4.286-11.33c-1.262-5.563-4.239-7.387-4.566-8.088-.358-.499-.701-1.371-.701-1.371l.234 15.475c-.001.015-.484 4.737.747 5.314z"></path><path fill="#FFF" d="M11.58 21.054s-5.252-3.584-4.94-9.896c.296-6.312 4.005-9.413 4.722-9.974.468-.498.483-.685.514-1.184.327.701.265 10.488.312 11.641.14 4.442-.249 8.572-.608 9.413z"></path><path fill="#58AA50" d="M11.58 21.054s-5.252-3.584-4.94-9.896c.296-6.312 4.005-9.413 4.722-9.974.468-.498.483-.685.514-1.184.327.701.265 10.488.312 11.641.14 4.442-.249 8.572-.608 9.413z"></path></svg>
            <img src="https://iconscout.com/icon/mongodb-3521676" alt="" />
            <p className='mt-4'>MONGO DB</p>
          </div>
          <div className='shadow-md hover:scale-105 duration-200 py-2 rounded-lg shadow-gray-500 py-5'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png?20170401104355" alt="" className='mx-auto w-20'/>
            <p className='mt-4'>EXPRESS</p>
          </div>
          <div className='shadow-md hover:scale-105 duration-200 py-2 rounded-lg shadow-cyan-200 py-5'>
            <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="" className='mx-auto w-20'/>
            <p className='mt-4'>REACT</p>
          </div>
          <div className='shadow-md hover:scale-105 duration-200 py-2 rounded-lg shadow-cyan-800 py-5'>
            <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="" className='mx-auto w-20'/>
            <p className='mt-4'>TAILWIND CSS</p>
          </div>
          <div className='shadow-md hover:scale-105 duration-200 py-2 rounded-lg shadow-white py-5'>
            <img src="https://cdn4.iconfinder.com/data/icons/social-media-free-13/32/Github_social_media_logo-256.png" alt="" className='mx-auto w-20'/>
            <p className='mt-4'>GITHUB</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}
