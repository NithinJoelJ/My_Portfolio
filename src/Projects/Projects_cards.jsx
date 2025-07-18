import Projects from './Projects';
import netflix from './projectsimages/netflix.jpg'
import Spotify from'./projectsimages/Spotify.jpg'
import './Projects.css'
import youtube from'./projectsimages/yt.jpg'
import parkinson from './projectsimages/parkinson.jpg'
import movieticketbookingui from './projectsimages/Movie_Ticket_Booking_App.png'
import interior_design from './projectsimages/interior_design.png'
function Projects_cards(){

    const projectcards = [
        {
            img: movieticketbookingui,
            title: "Avengers-Themed Movie Ticket Booking App (Figma Prototype)",
            description : "A Marvel-themed movie ticket booking app designed in Figma, inspired by Avengers: Endgame. It features a complete user journey — from movie selection to seat booking and mobile ticket generation.",
            link : "https://www.figma.com/proto/9EOAIHyG2LyjeBm4GjC1qL/Movie_Booking_Ui?page-id=0%3A1&node-id=1-2&p=f&viewport=204%2C231%2C0.42&t=FOoDRDmobIkHqEbg-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2"
        },
        {
            img: parkinson,
            title: "Parkinson-Disease-Detection",
            description : "Parkinson’s disease is a brain disorder that affects movement. It happens when brain cells that make dopamine slowly die. This causes symptoms like: Shaking, Stiffness, Slowness of movement, Trouble with balance and walking. While it currently can't be cured, medications can help manage the symptoms.",
            link : "https://github.com/NithinJoelJ/Parkinson-Disease-Detection"
        },
        {
            img: netflix,
            title: "Youtube Clone",
            description : "I created a YouTube clone using React and Firebase, featuring video streaming, user authentication, and dynamic video loading. The project focuses on responsive design and replicating YouTube's core functionality for an intuitive user experience.",
            link : "https://yt-clone-by-joel.web.app/"
        },
        {
            img: interior_design,
            title: "CleverDecor – Modern Interior Design Website (UI/UX Design)",
            description : "This project focuses on elegant layout composition, clean typography, and an inviting user journey designed to reflect the aesthetic sophistication of the brand.",
            link : "https://www.figma.com/proto/Tik12CqwtuCHTnWvs268g0/Insterior_design?page-id=0%3A1&node-id=1-2&viewport=236%2C348%2C0.5&t=TklQKXqEcByMZggS-1&scaling=scale-down&content-scaling=fixed"
        },
        {
            img: Spotify,
            title: "Spotify Clone",
            description : "I built a Spotify clone using React and Firebase, incorporating features like user authentication, playlist management, and real-time music streaming. The project emphasizes responsive design and smooth integration with Spotify's APl for an engaging user experience.",
            link : "https://spotify-clone-by-joel.web.app/"
        },
                {
            img: youtube,
            title: "Netflix Clone",
            description : "I developed Netflix clone applications using React and Firebase, focusing on responsive Ul, dynamic routing, and seamless integration of real-time data. These projects replicate key features of Netflix, such as user authentication and media streaming interfaces.",
            link : "https://netflix-clone-44f7d.web.app/"
        },
        
    ]
    
    return(
        <div className="project-container">
            {projectcards.map((info,index)=>
        <Projects key = {index} 
        projectimage = {info.img} 
        projecttitle = {info.title} 
        projectdescription = {info.description} 
        link = {info.link}/>
    )}
        </div>
    );
}

export default Projects_cards;