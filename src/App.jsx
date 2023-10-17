import { Sidenav } from './components/Sidenav';
import SidenavProvider from './components/SidenavProvider';
import { Main } from './components/Main';
import { Work } from './components/Work';
import Projects from './components/Projects';
import Contact from './components/Contact';
import {Skills} from './components/Skill';



function App() {

  return (
    <div>
        <SidenavProvider>
       <Sidenav />
       </SidenavProvider>
        <Main />
        <Work />
        <Skills />
        <Projects />
        <Contact />
       

    </div>
  )
};

export default App;
