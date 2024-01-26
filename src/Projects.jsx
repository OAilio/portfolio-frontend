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
            image: `pictures/1 – kopio – kopio.png`,
            description: `"A collaborative web development project using Git version control to 
            track changes and manage collaboration. The project focuses on creating a 
            responsive and user-friendly e-commerce website, integrating features such 
            as product catalog, user authentication, and a secure checkout system. 
            Team members contribute through branches."`,
            link: `https://github.com/OAilio/portfolio-frontend` 
        },
        {
            id: 2,
            name: `Contact book`,
            image: `pictures/1 – kopio – kopio.png`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc sodales non dui sed posuere.`,
            link: `https://github.com/OAilio/portfolio-frontend` 
        },
        {
            id: 3,
            name: `Contact book 2`,
            image: `pictures/1 – kopio – kopio.png`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc sodales non dui sed posuere. Lorem ipsum dolor sit amet.`,
            link: `https://github.com/OAilio/portfolio-frontend` 
        },
        {
            id: 4,
            name: `Contact book 3`,
            image: `pictures/1 – kopio – kopio.png`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc sodales non dui sed posuere. Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc sodales non dui sed posuere. Lorem ipsum.`,
            link: `https://github.com/OAilio/portfolio-frontend` 
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
            <div className="projects-container">
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