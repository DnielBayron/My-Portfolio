import ProjectItem from "./ProjectItem";
import teraImg from "../assets/1697450196.png";
import tera2Img from "../assets/1697450197.png";
import tera3Img from "../assets/teracotta.png";
import tera4Img from "../assets/qweer.png";
import tera5Img from "../assets/b.png";
import tera6Img from "../assets/hangman.png";


const Projects = () => {
  return (
    <div id="projects" className='max-w-[1040px] m-auto md:pl-20 p-6]'>
    <h1 className="text-4xl font-bold text-center py-12 text-[#001b5e]">Projects</h1>
    
    <div className="grid sm:grid-cols-2 gap-4 p-6 lg:p-2 ">
        <ProjectItem img={teraImg} title='Tindog' code='HTML & CSS (BootStrap)' link1='https://dazzling-piroshki-ea4cc4.netlify.app'  link2='https://github.com/DnielBayron/Tindog-app' />
        <ProjectItem img={tera2Img} title='Teracotta Shop' code='React JS' link1='https://elegant-crisp-8a33d8.netlify.app/' link2='https://github.com/DnielBayron/Teracotta-Shop' />
        <ProjectItem img={tera3Img} title='Teracotta Mail' code='Express JS' link1='https://stormy-erin-coyote.cyclic.app' link2='https://github.com/DnielBayron/teracotta-server' />
        <ProjectItem img={tera4Img} title='Personal Website' code='HTML and CSS'  link1='error' link2='https://github.com/DnielBayron/My-First-Site' />
        <ProjectItem img={tera5Img} title='Sticky App' code='React JS'  link1='https://courageous-fox-04c420.netlify.app' link2='https://github.com/DnielBayron/Keeper-App' />
        <ProjectItem img={tera6Img} title='HangStickman' code='React JS and TypeScript'  link1='https://dancing-strudel-27520c.netlify.app' link2='https://github.com/DnielBayron/HangStickMan' />
      
    </div>
  
    </div>
  )
};

export default Projects;
