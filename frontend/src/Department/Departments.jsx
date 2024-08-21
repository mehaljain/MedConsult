import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const Departments = () => {
  const departmentsArray = [
    {
      name: "Pediatrics",
      imageUrl: "/departments/pedia.jpg",
      link: "/departments/pediatrics", // add a link property to each department
    },
    {
      name: "Orthopedics",
      imageUrl: "/departments/ortho.jpg",
      link: "/departments/orthopedics",
    },
    {
      name: "Cardiology",
      imageUrl: "/departments/cardio.jpg",
      link: "/departments/cardiology",
    },
    {
      name: "Neurology",
      imageUrl: "/departments/neuro.jpg",
      link: "/departments/neurology",
    },
    {
      name: "Oncology",
      imageUrl: "/departments/onco.jpg",
      link: "/departments/oncology",
    },
    {
      name: "Radiology",
      imageUrl: "/departments/radio.jpg",
      link: "/departments/radiology",
    },
    {
      name: "Physical Therapy",
      imageUrl: "/departments/therapy.jpg",
      link: "/departments/physical-therapy",
    },
    {
      name: "Dermatology",
      imageUrl: "/departments/derma.jpg",
      link: "/departments/dermatology",
    },
    {
      name: "ENT",
      imageUrl: "/departments/ent.jpg",
      link: "/departments/ent",
    },
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1,
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1, 
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1, 
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, 
    },
  };

  return (
    <>
      <div className="container departments">
        <h2>Departments</h2>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={[
            // "superLargeDesktop",
            // "desktop",
            "tablet",
            "mobile",
          ]}
        >
          {departmentsArray.map((depart, index) => {
            return (
              <Link to={depart.link} key={index} style={{ textDecoration: 'none' }}>
                <div className="card">
                <div className="depart-name">{depart.name}</div>
                  <img src={depart.imageUrl} alt="Department" />
                </div>
              </Link>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Departments;