import React, { useState } from 'react';
import { useParams } from 'react-router';
import places from '../Places/Places';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from "react-datepicker";
// import { KeyboardDatePicker } from "@material-ui/pickers";
import './Book.css'
import { Link } from 'react-router-dom';

const Booking = () => {
    const { id } = useParams();
    const place = places.find(p => p.id == id);
    console.log(place);

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);

    const submitHndler = () => {

    }

    return (
        <div className="headerBakgroundImager  pt-5">
            <div className="container">
                <div className="row  pt-5">
                    <div className="col-6 text-white pt-5">
                        <h1>{place.name}</h1>
                        <p>{place.description}</p>
                    </div>
                    <div className="col-6 d-flex justify-content-end ">
                        <div className="pt-3 ps-3 pe-3 pb-3 bg-white myForm">
                            <form onSubmit={submitHndler}>
                                <div className="">
                                    <div>
                                        <span>Origin :</span>
                                        <input class="form-control myFormControl bg-light" type="text" placeholder="Enter origin" />
                                    </div>

                                    <div className="mt-3">
                                        <span>Destination :</span>
                                        <input class="form-control myFormControl bg-light" type="text" value={place.name} />
                                    </div>
                                </div>

                                <div className="d-flex mt-3 mb-2">
                                    <div className="me-1">
                                        <span>From :</span>
                                        <DatePicker
                                            className="form-control myFormControl bg-light"
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            showYearDropdown
                                            minDate={new Date()}
                                        />
                                    </div>

                                    <div className="ms-1">
                                        <span>To :</span>
                                        <DatePicker
                                            className="form-control myFormControl bg-light"
                                            selected={endDate}
                                            onChange={(date) => setEndDate(date)}
                                            showYearDropdown
                                            minDate={new Date()}
                                        />
                                    </div>
                                </div>
                                <Link to={"/bookingstart/" + id}>
                                    <input
                                        type="submit"
                                        class="btn mt-2 btn-danger form-control"
                                        value="Start Booking"
                                    />
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;