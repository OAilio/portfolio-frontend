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
            link: `https://github.com/OAilio/mitasois` 
        },
        {
            id: 2,
            name: `Portfolio`,
            image: `./portfolio.png`,
            description: `My personal portfolio website, which I've created from scratch to display my web development skills and design potential.`,
            link: `https://github.com/OAilio/portfolio-frontend` 
        },
        {
            id: 3,
            name: `Contact Book`,
            image: `./contactbook.png`,
            description: `My first full-stack web project, a SPA contact management application created with React and Node.js.`,
            link: `https://github.com/OAilio/contactBook` 
        },
        {
            id: 4,
            name: `AlgoCompare`,
            image: `./algoritmit.png`,
            description: `A first-year group project, which compares the sorting speeds of some of the most popular
            sorting algorithms.`,
            link: `https://github.com/OAilio/spAlgorithmComparison` 
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
                                                GitHub
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