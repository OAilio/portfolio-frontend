// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Projects() {
    const allProjects = [
        {
            id: 1,
            name: `Portfolio`,
            image: `pictures/portfolio.png`,
            description: `My personal portfolio website, which I've created from scratch to display my dev & design skills.`,
            link: `https://github.com/OAilio/portfolio-frontend` 
        },
        {
            id: 2,
            name: `Contact Book`,
            image: `pictures/contactbook.png`,
            description: `My first full-stack project, a single-page application (SPA) contact management application.`,
            link: `https://github.com/OAilio/contactBook` 
        },
        {
            id: 3,
            name: `AlgoCompare`,
            image: `pictures/algoritmit.png`,
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
        dots: true
    };
    return (
        <>
            <div className="projects-container" id="projects">
                <div className="projects-header">
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc sodales non dui sed posuere.</p>
                </div>
                <div>
                    <Slider {...settings} className='carousel-container'>
                        {allProjects.map((project) => {
                            console.log("Mapping started");

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