import {TypeAnimation} from 'react-type-animation';
import {FaGithub, FaInstagram, FaLinkedinIn} from 'react-icons/fa';
import ExamplePdf from '../assets/Deniel Philip Bayron_CV-1.pdf';

export const Main = () => {
  return (
    <div id="main">
    <img className="w-full h-screen object-cover object-left" src="https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80" alt="deniel-img" />
    <div className="w-full h-screen absolute top-0 left-0 bg-white/30">
        <div  className=' pb-[100px] max-w-[1100px] w-full h-full flex flex-col m-auto justify-center xl:items-start items-center  '>
            <h1 className=' sm:text-5xl text-4xl font-bold text-gray-950'>I`m Deniel Bayron</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-950'>
            I`m a
        <TypeAnimation
      sequence={[
        'Web Developer',
        2000,
        'Web Designer',
        2000,
        'Gamer',
        2000,
        'Coffeeholic',
        2000
      ]}
      wrapper="span"
      cursor={true}
      style={{ fontWeight: 'bold', fontSize: '1em', paddingLeft: '5px' }}
      repeat={Infinity}
    />
            
            </h2>

            <div className=' flex justify-between pt-4 max-w-[200px] w-full '>
                <a href="https://github.com/DnielBayron"><FaGithub className='cursor-pointer' size={20}/></a>
                <a href="https://www.linkedin.com/in/deniel-bayron-70974418a/"><FaLinkedinIn className='cursor-pointer' size={20}/></a>
                <a href="https://www.instagram.com/denbayron_/?hl=en"><FaInstagram className='cursor-pointer' size={20}/></a>
                
            </div>
            <div className='pt-8'>
            <a
        href={ExamplePdf}
        download="Deniel-Bayron_CV"
        target="_blank"
        rel="noreferrer"
      >
            <button className='p-2 text-sm rounded-lg bg-gray-950 text-white hover:bg-white hover:text-gray-950 duration-200 '>Download CV</button>
        </a>
            </div>
        </div>
    </div>
    </div>
  )
};
