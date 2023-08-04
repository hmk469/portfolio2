import React from 'react'

export default function Contact() {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-900 text-white '>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full '>
        <div className='pb-8 py-20'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
          <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>

        <div className='flex justify-center items-center'>
          <form action="" className='flex flex-col w-full md:w-1/2'>
            <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
            <input type="email" name='email' placeholder='Enter your email' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
            <textarea className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' name="message" id="" cols="30" rows="10"></textarea>

            <button className='text-white bg-gradient-to-b from-cyan-600 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
