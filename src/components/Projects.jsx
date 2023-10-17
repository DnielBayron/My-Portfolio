import ProjectItem from "./ProjectItem";
import teraImg from "../assets/1697450196.png";
import tera2Img from "../assets/1697450197.png";
import tera3Img from "../assets/teracotta.png";
import tera4Img from "../assets/qweer.png";
import tera5Img from "../assets/b.png";


const Projects = () => {
  return (
    <div id="projects" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16]'>
    <h1 className="text-4xl font-bold text-center py-8 text-[#001b5e]">Projects</h1>
    
    <div className="grid sm:grid-cols-2 gap-12 ">
        <ProjectItem img={teraImg} title='Tindog' code='HTML & CSS (BootStrap)' link='' />
        <ProjectItem img={tera2Img} title='Teracotta Shop' code='React JS' link='https://github.com/DnielBayron/Teracotta-Shop' />
        <ProjectItem img={tera3Img} title='Teracotta Mail' code='Express JS & MailChimp' link='https://github.com/DnielBayron/teracotta-server' />
        <ProjectItem img={tera4Img} title='Personal Website' code='HTML and CSS'  link='https://github.com/DnielBayron/My-First-Site' />
        <ProjectItem img={tera5Img} title='Sticky App' code='React JS'  link='https://github.com/DnielBayron/Keeper-App' />
      
    </div>
  
    </div>
  )
};

export default Projects;
