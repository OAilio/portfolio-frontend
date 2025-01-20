/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-useless-escape */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Projects() {
    const allProjects = [
        {
            id: 1,
            name: `Mitäsöis`,
            image: `./mitasois.png`,
            description: `A MERN-stack app that helps the user store their cooking history and decide what to make when it's time to go grocery shopping.`,
            link: `https://github.com/OAilio/mitasois`,
            button_text: "GitHub" 
        },
        {
            id: 5,
            name: `Acme Coffee`,
            image: `./acmecoffee.png`,
            description: `Design of a modern café website for tablet and mobile layouts, ensuring a seamless and user-friendly experience.`,
            link: `https://www.figma.com/design/5je8RlUEOoxjrqaUNEDBbB/Okko-Ailio-Design-portfolio?node-id=1-2&t=3pT3HfyIjMEGj44V-1`,
            button_text: "Figma" 
        },
        {
            id: 9,
            name: `Event Programme`,
            image: `./hbc.png`,
            description: `A mobile-first designed React app, used as an event programme for a basketball game student event.`,
            link: `https://github.com/OAilio/HBCStudentNight`,
            button_text: "GitHub" 
        },
        {
            id: 2,
            name: `Portfolio`,
            image: `./portfolio.png`,
            description: `My personal portfolio website, which I've created from scratch to display my web development skills and design potential.`,
            link: `https://github.com/OAilio/portfolio-frontend`,
            button_text: "GitHub" 
        },
        {
            id: 6,
            name: `Menu design`,
            image: `./ottergame.png`,
            description: `An intuitive and visually appealing menu for a 2D platformer game as part of a university group project.`,
            link: `https://www.figma.com/design/5je8RlUEOoxjrqaUNEDBbB/Okko-Ailio-Design-portfolio?node-id=1-5890&t=3pT3HfyIjMEGj44V-1`,
            button_text: "Figma" 
        },
        {
            id: 3,
            name: `Contact Book`,
            image: `./contactbook.png`,
            description: `My first full-stack web project, a SPA contact management application created with React and Node.js.`,
            link: `https://github.com/OAilio/contactBook`,
            button_text: "GitHub"
        },
        {
            id: 7,
            name: `Date Picker`,
            image: `./input.png`,
            description: `My design sketch of a robust and efficient input method for selecting a range of two dates, intended to minimize user errors.`,
            link: `https://www.figma.com/design/5je8RlUEOoxjrqaUNEDBbB/Okko-Ailio-Design-portfolio?node-id=1-4666&t=3pT3HfyIjMEGj44V-1`,
            button_text: "Figma"
        },
        {
            id: 4,
            name: `AlgoCompare`,
            image: `./algoritmit.png`,
            description: `A first-year group project, which compares the sorting speeds of some of the most popular
            sorting algorithms.`,
            link: `https://github.com/OAilio/spAlgorithmComparison`,
            button_text: "GitHub" 
        },
        {
            id: 8,
            name: `Shopping list`,
            image: `./shoppinglist.png`,
            description: `The initial sketch and detailed design prototype of a shopping list app, created to simplify the shopping process.`,
            link: `https://www.figma.com/design/5je8RlUEOoxjrqaUNEDBbB/Okko-Ailio-Design-portfolio?node-id=1-3&t=3pT3HfyIjMEGj44V-1`,
            button_text: "Figma" 
        }
    ]
    const settings = {
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 1,
        speed: 500,
        dots: true,
        adaptiveHeight: false
    };
    return (
        <>
            <div className="projects-container" id="projects">
                <div className="projects-header">
                    <h2>Projects</h2>
                    <p>Here are the projects that I've worked on during my studies</p>
                </div>
                <div>
                    <Slider {...settings} className='carousel-container'>
                        {allProjects.map((project) => {
                            return (
                            <div className="carousel-item" key={project.id}>
                                <div className="item-header">
                                    <h3>{project.name}</h3>
                                </div>
                                <div className="item-container">
                                    <div className="item-image">
                                        <img src={project.image} /> 
                                    </div>
                                    <div className="item-content">
                                        <p>{project.description}</p>
                                        <div className="button-container">
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="blue-button">
                                                {project.button_text}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>                                
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default Projects