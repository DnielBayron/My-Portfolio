import { Sidenav } from './components/Sidenav';
import SidenavProvider from './components/SidenavProvider';
import { Main } from './components/Main';
import { Work } from './components/Work';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {

  return (
    <div>
        <SidenavProvider>
       <Sidenav />
       </SidenavProvider>
        <Main />
        <Work />
        <Projects />
        <Contact />
       

    </div>
  )
};

export default App;
