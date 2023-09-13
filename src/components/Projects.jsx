import ProjectItem from "./ProjectItem";
import teraImg from '../assets/Images/teracotta.png'

const Projects = () => {
  return (
    <div id="projects" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16]'>
    <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
    <p className="text-center py-8">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </p>
    <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={teraImg} title='Personal Website' code='HTML & CSS' />
        <ProjectItem img={teraImg} title='Teracotta App' code='React JS'/>
        <ProjectItem img={teraImg} title='Crypto App' code='Next JS' />
        <ProjectItem img={teraImg} title='Crypto App' code='Express JS'/>
    </div>
  
    </div>
  )
}

export default Projects;
