import React, { } from 'react';
import { Carousel } from 'react-bootstrap';
import '../../App.css';
import sajek from '../../Images/Image/Sajek.png';
import sreemongol from '../../Images/Image/Sreemongol.png';
import sundorbon from '../../Images/Image/sundorbon.png';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Home = () => {

    const places = [
        {
            id: 1,
            name: "COX'S BAZAR",
            description: "Cox's bazar is a city,fishig port,turism center and district headquarters in southeastern bangladesh.It is famous for it's long natural sandy beatch",
            image: sajek
        },
        {
            id: 2,
            name: "SREEMONGOL",
            description: "Hotel Skypark is set in Sreemangal and features a garden and a terrace. Their top floor garden was awesome place. Well service. Great staff...",
            image: sreemongol
        },
        {
            id: 3,
            name: "SUNDORBAN",
            description: "Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh's division of Khulna",
            image: sundorbon
        }
    ]


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
                                        <Link className="text-white" to="/booking">
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