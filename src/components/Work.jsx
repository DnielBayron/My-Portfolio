import { WorkItem } from "./WorkItem";


const data = [
    {
        year: 2023,
        title: 'Business Owner / Web Developer Freelancer',
        duration: '1 Year',
        details: 'Specialize in building responsive websites tailored to clients specific needs. Additionally, I have created multiple projects that can be found on my GitHub account, demonstrating my coding expertise and project portfolio. and have successfully developed a business website for our small family business'
    },
    {
        year: 2020,
        title: 'Onsemi',
        duration: '2 Year',
        details: ' Troubleshooting unexpected issues in a production line, specifically related to CUH (Customer Unit Head) and loadboards, can be a complex task. Additionally, analyzing datalogs of failing parameters, such as DCT (Design Characteristic Test) and FCT (Functional Characteristic Test) failures, and Debugging, calibrating, and diagnosing electronic test equipment like the Advantest T2k and ASL1000, as well as interpreting electronic schematic diagrams for loadboards and test procedures that lead to failing parameters, requires a combination of technical knowledge and a systematic approach'
    },
    {
        year: 2018,
        title: 'Ionics (Internship)',
        duration: '1 Year',
        details: 'Supports Production by addressing issues with Test Computers, including troubleshooting problems like computer hang-ups, monitor malfunctions, and the installation of internal hard drives, video cards, or LAN cards. Additionally, We performs data collection of test equipment for failure analysis.'
    },
]


export const Work = () => {
  return (
    <div id='work' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="mb-5 text-4xl font-bold text-center text-[#001b5e]">Work</h1>
        {data.map((item, index) => (
            <WorkItem 
                key = {index}
                year= {item.year}
                title = {item.title}
                duration= {item.duration}
                details = {item.details}

            />
        ))}
    </div>
  )
}
