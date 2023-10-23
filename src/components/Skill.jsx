import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/javascript.png';
import github from '../assets/github_git_icon_145985.png';
import node from '../assets/node.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import ts from '../assets/typescript_original_logo_icon_146317.png';
import mongo from '../assets/mongo.png';
import Cplus from '../assets/c_icon_132529.png';
import mailchimp from '../assets/mailchimp_icon_130881.png';
import next from '../assets/nextjs_icon_212861.png';



export const Skills = () => {
  return (
    <div id='skill' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 2xl:my-36">
   
      <h1 className="mb-5 text-4xl font-bold text-center text-[#001b5e]"> Skills </h1>

      <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
        <div className='text-[#001b5e] font-Nunito'>
          <img className='w-20 mx-auto' src={html} alt="" />
          <p className='my-4'>HTML</p>
      </div>
      
      
        <div className='text-[#001b5e] font-Nunito'>
          <img className='w-20 mx-auto' src={css} alt="" />
          <p className='my-4'>CSS</p>
     
      </div>
      
        <div className='text-[#001b5e] font-Nunito'>
          <img className='w-20 mx-auto' src={js} alt="" />
          <p className='my-4'>JavaScript</p>
      
      </div>
      
        <div className='text-[#001b5e] font-Nunito'>
          <img className='w-20 mx-auto' src={github} alt="" />
          <p className='my-4'>Github</p>
     
      </div>
     
        <div className='text-[#001b5e] font-Nunito'>
          <img className='w-20 mx-auto' src={node} alt="" />
          <p className='my-4'>Node</p>
   
      </div>
     
        <div className='text-[#001b5e] font-Nunito'>
          <img className='w-20 mx-auto' src={react} alt="" />
          <p className='my-4'>React JS</p>
    
      </div>
      
        <div className='text-[#001b5e] font-Nunito'>
          <img className='w-20 mx-auto' src={tailwind} alt="" />
          <p className='my-4'>Tailwind CSS</p>
     
      </div>
     
        <div className='text-[#001b5e] font-Nunito'>
          <img className='w-20 mx-auto' src={ts} alt="" />
          <p className='my-4'>TypeScript</p>
      
      </div>
     
        <div className='text-[#001b5e] font-Nunito'>
          <img className='w-20 mx-auto' src={mongo} alt="" />
          <p className='my-4'>MongoDB </p>
    
      </div>

      <div className='text-[#001b5e] font-Nunito'>
          <img className='w-20 mx-auto' src={Cplus} alt="" />
          <p className='my-4'> C++ </p>
    
      </div>

      <div className='text-[#001b5e] font-Nunito'>
          <img className='w-20 mx-auto' src={mailchimp} alt="" />
          <p className='my-4'>MailChimp </p>
    
      </div>

      <div className='text-[#001b5e] font-Nunito'>
          <img className='w-20 mx-auto' src={next} alt="" />
          <p className='my-4'> Next JS </p>
    
      </div>

      </div>
    
    </div>
  ) 
};

