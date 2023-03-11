import React from 'react'
import { VscGithub } from "react-icons/vsc"
import { FaLinkedinIn } from "react-icons/fa"
const Connection = () => {
    return (
        <div className='fixed left-2 bottom-5 lk'>
            <a href='https://github.com/monumarquis' target='_blank'>
                <button className=' animate-bounce  bg-[#de4958] lk hover:bg-accent-hover text-white w-16 h-16 mb-1 rounded-full cursor-pointer flex justify-center items-center transition-all'>
                    <VscGithub className='w-10 h-10' />
                </button>
            </a>
            <a href="https://www.linkedin.com/in/monu-yadav-2003m/" target='_blank'>
                <button className=' animate-bounce  bg-[#de4958] lk hover:bg-accent-hover text-white w-16 h-16 rounded-full cursor-pointer flex justify-center items-center transition-all'>
                    <FaLinkedinIn className='w-8 h-8' />
                </button>
            </a>
        </div>
    )
}

export default Connection