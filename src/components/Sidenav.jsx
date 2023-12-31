import { useContext } from 'react';
import {AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlineProject} from 'react-icons/ai';
import {GrProjects} from 'react-icons/gr'
import { BsPerson} from 'react-icons/bs';
import sideNav from '../context/sideNav';

export const Sidenav = () => {

    const { nav, handleNav} = useContext(sideNav);
     
  return (



    <div>

        <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden  '/>
        {
            nav ? (
                <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                <a onClick={handleNav} href="#main" className='w-[70%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-slate-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineHome size={20} />
                    <span className='pl-4'>Home</span>
                </a>
                <a onClick={handleNav} href="#work" className='w-[70%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-slate-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <GrProjects size={20} />
                    <span className='pl-4'>Work</span>
                </a>
                <a onClick={handleNav} href="#skill" className='w-[70%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-slate-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <BsPerson size={20} />
                    <span className='pl-4'>Skills</span>
                </a>
                <a onClick={handleNav} href="#projects" className='w-[70%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-slate-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineProject size={20} />
                    <span className='pl-4'>Projects</span>
                </a>
                <a onClick={handleNav} href="#contact" className='w-[70%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-slate-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineMail size={20} />
                    <span className='pl-4'>Contact</span>
                </a>

                </div>
            )
            : (
               " "
            )}

            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                    <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineHome size={20} />
                    </a>
                    <a href="#work" className='rounded-full shadow-lg bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <GrProjects size={20} />
                    </a>
                    <a href="#skill" className='rounded-full shadow-lg bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <BsPerson size={20} />
                    </a>
                    <a href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineProject size={20} />
                    </a>
                    <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineMail size={20} />
                    </a>
                   
                </div>
            </div>

    </div>


  );
};
