import React from 'react'
import { FaLinkedin,FaGithub ,FaFacebook} from 'react-icons/fa'
export default function SocialLinks() {
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-blue-500'>
    <a href="/" className='flex justify-between items-center w-full text-white ml-3'>
        LinkedIn  <FaLinkedin size={30}/>
    </a>
        </li>
        <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
    <a href="/" className='flex justify-between items-center w-full text-white ml-3'>
        github  <FaGithub size={30}/>
    </a>
        </li>
        <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-blue-800'>
    <a href="/" className='flex justify-between items-center w-full text-white ml-3'>
        Facebook  <FaFacebook size={30}/>
    </a>
        </li>

      </ul>
    </div>
  )
}
