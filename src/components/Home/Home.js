import React, { } from 'react';
import { Carousel } from 'react-bootstrap';
import '../../App.css';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

import places from '../Places/Places';

const Home = () => {


    return (
        <Carousel className="headerBakgroundImager pt-5">
            {
                places.map(place => {
                    return (
                        <Carousel.Item className="p-5">
                            <div className="row p-3">
                                <div className="ps-3 pb-3 col-md-7 text-center text-white">
                                    <div className="ps-5 text-start">
                                        <h1>{place.name}</h1>
                                        <p>{place.description}</p>
                                        <Link className="text-white" to={"/booking/" + place.id}>
                                            <button
                                                className="btn btn-danger">
                                                Booking
                                                <span className="ms-3">
                                                    <FontAwesomeIcon icon={faArrowRight} />
                                                </span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-5 text-center">
                                    <img
                                        className=" w-50 carouselImage"
                                        src={place.image}
                                        alt="First slide"
                                    />
                                </div>
                            </div>
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>

    );
}

export default Home;