import React from 'react'

export default function About() {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-900 text-white py-10'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col  w-full h-screen-full'>
        <div >
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <p className='text-xl mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus doloribus molestias ipsa explicabo suscipit neque at fugiat corrupti provident enim, ullam similique voluptate mollitia autem voluptates odio dolore repellat magni.</p>
        <br />

        <p className='text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sint dignissimos maxime quaerat autem necessitatibus, sequi rerum reprehenderit, modi aliquam explicabo obcaecati similique, sed vero vel neque culpa quidem natus?
        </p>
      </div>
    </div>
  )
}
