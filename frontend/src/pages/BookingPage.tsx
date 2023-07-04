import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { format } from "date-fns";
import { deleteProperty, getProperties, searchProperties } from "../api/PropertyApi";
import BreadCrumb from "../components/BreadCrumb";
import DashboardMenu from "../components/DashboardMenu";
import IPropertyInterface from "../interfaces/IPropertyInterface";
import { data } from "../data";


export default function BookingPage() {
    const location = useLocation()
    const [properties, setProperties] = useState<Array<IPropertyInterface>>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const userInfo = JSON.parse(localStorage.getItem("userInfo")!);
    const [openDatePicker, setOpenDatePicker] = useState(false);
    const [date, setDate] = useState<any>(location.state?.date ||[
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [city, setCity] = useState<string>(location.state?.city|| "");
    const [adults, setAdults] = useState<number>(Number(location.state?.adults) || 1);
    const [children, setChildren] = useState<number>(Number(location.state?.children) || 0);
    const [rooms, setRooms] = useState<number>(Number(location.state?.rooms) || 1);
    const [min , setMin] = useState<number>()
    const [max , setMax] = useState<number>()


    async function getMyProperties() {
        setLoading(true);
        try {
            const { data } = await searchProperties({city, adults, children, rooms, min , max});
            setProperties(data);
            setLoading(false)
        } catch (error: any) {
            setError(error.response.data.error)
        }

    }

    async function deleteHandler(id: string) {
        if (!window.confirm("Are you sure you want to delete this property?")) {
            return;
        }
        try {
            const { data } = await deleteProperty(id);
            if (data.success) {
                Swal.fire("Done", "Property Deleted Successfully", "success");
                getMyProperties();
            }
        } catch (error: any) {
            error.response && error.response.data.message
                ? Swal.fire(error.response.data.message)
                : Swal.fire(error.message);
        }
    }

    const navigate = useNavigate();
    useEffect(() => {
        !userInfo._id && navigate("/login")
    }, []);

    useEffect(() => {
        getMyProperties();
    }, [])
    return <>
                <BreadCrumb page={`SEARCH OPTIONS : City = ${city}, Date = ${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}, Adults = ${adults}, Children = ${children}, Rooms = ${rooms}, Min. Price = , Max. Price = `} />

        <section className="space-ptb" style={{ marginTop: "-4rem" }}>
            <div className="container">
                <div className="row">

                    <div className="col-md-6">
                        <div className="section-title mb-3 mb-lg-4">
                            <h2><span className="text-primary">156</span> Results</h2>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="property-filter-tag">
                            <ul className="list-unstyled">
                                <li><a className="filter-clear p-2" href="#">Reset Search <i className="fas fa-redo-alt"></i> </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 mb-5 mb-lg-0">
                        <div className="sidebar">
                            <div className="widget">
                                <div className="widget-title widget-collapse">
                                    <h6>Advanced filter</h6>
                                    <a className="ms-auto" data-bs-toggle="collapse" href="#filter-property" role="button" aria-expanded="false" aria-controls="filter-property"> <i className="fas fa-chevron-down"></i> </a>
                                </div>
                                <div className="collapse show" id="filter-property">
                                    <form className="mt-3">
                                        <div className="mb-2 select-border" style={{ position: "relative" }}>
                                            <div className="mb-2 select-border">
                                                <select className="form-control basic-select ">
                                                    <option>--- State ---</option>
                                                    <option>All</option>
                                                    {data.states.map(state => {
                                                        return <option>{state}</option>

                                                    })}

                                                </select>
                                            </div>
                                            <select className="form-control basic-select " >
                                                <option>--- City ---</option>
                                                <option>All</option>
                                                {data.states.map(state => {
                                                    return <option>{state}</option>

                                                })}

                                            </select>
                                            <div className="headerSearch mt-2">
                                                <div className="headerSearchItem">
                                                    <FontAwesomeIcon onClick={() => { setOpenDatePicker(!openDatePicker); }} icon={faCalendarDays} className="headerIcon" />
                                                    <span onClick={() => { setOpenDatePicker(!openDatePicker); }} className="headerSearchText">{format(date[0].startDate, "dd/MM/yyyy")} to {format(date[0].endDate, "dd/MM/yyyy")} <i className="fa fa-caret-down"></i></span>
                                                    {openDatePicker && <DateRange
                                                        editableDateInputs={true}
                                                        onChange={(item: any) => setDate([item.selection])}
                                                        moveRangeOnFirstSelection={false}
                                                        ranges={date}
                                                        className="date-range-picker date-range-picker-booking-page"
                                                        rangeColors={["palevioletred"]}

                                                    />}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-2">
                                            <input className="form-control" type="number" placeholder="Min. Price per night" />
                                        </div>
                                        <div className="mb-2">
                                            <input className="form-control" type="number" placeholder="Max. Price per night" />
                                        </div>
                                        <div className="mb-2">
                                            <input className="form-control" type="number" placeholder="Adults" />
                                        </div>
                                        <div className="mb-2">
                                            <input className="form-control" type="number" placeholder="Children" />
                                        </div>
                                        <div className="mb-2">
                                            <input className="form-control" type="number" placeholder="Rooms" />
                                        </div>

                                        <div className="d-grid mb-2">
                                            <button className="btn btn-primary align-items-center" type="submit"><i className="fas fa-search me-1"></i><span>Search</span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="property-filter d-sm-flex">
                            <ul className="property-short list-unstyled d-sm-flex mb-0">
                                <li>
                                    <form className="form-inline">
                                        <div className="form-group d-lg-flex d-block mb-sm-0 mb-3">
                                            <label className="justify-content-start mb-2 mb-sm-0">Short by:</label>
                                            <div className="short-by">
                                                <select className="form-control basic-select">
                                                    <option>Date new to old</option>
                                                    <option>Price Low to High</option>
                                                    <option>Price High to Low</option>
                                                    <option>Date Old to New</option>
                                                    <option>Date New to Old</option>
                                                </select>
                                            </div>
                                        </div>
                                    </form>
                                </li>
                            </ul>
                            <ul className="property-view-list list-unstyled d-flex mb-0">
                                <li>
                                    <form className="form-inline">
                                        <div className="form-group d-lg-flex d-block mb-3 mb-sm-0">
                                            <label className="justify-content-start pe-2 mb-2 mb-sm-0">Sort by: </label>
                                            <div className="short-by">
                                                <select className="form-control basic-select">
                                                    <option>12</option>
                                                    <option>18 </option>
                                                    <option>24 </option>
                                                    <option>64 </option>
                                                    <option>128</option>
                                                </select>
                                            </div>
                                        </div>
                                    </form>
                                </li>
                                <li><a href="index-half-map.html"><i className="fas fa-map-marker-alt fa-lg"></i></a></li>
                                <li><a className="property-list-icon active" href="property-list.html">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </a></li>
                                <li><a className="property-grid-icon" href="property-grid.html">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </a></li>
                            </ul>
                        </div>
                        {loading ? <h3 className="m-2">Fetching Properties . . .</h3> : error ? <div className="alert alert-danger m-1 mt-2">{error}</div> :
                            properties.map(property => {
                                return <div className="property-item property-col-list mt-4">
                                    <div className="row g-0">
                                        <div className="col-lg-4 col-md-5">
                                            <div className="property-image bg-overlay-gradient-04">
                                                <img style={{ height: "15rem" }} className="img-fluid" src={property.cover || "/images/empty.jpg"} alt="" />
                                                <div className="property-lable">
                                                    <span className="badge badge-md bg-primary text-capitalize">{property.type}</span>
                                                    <span className="badge badge-md bg-info text-capitalize">{property.status} </span>
                                                </div>
                                                <span className="property-trending" title="trending"><i className="fas fa-bolt"></i></span>
                                                {/* <div className="property-agent">
                                            <div className="property-agent-image">
                                                <img className="img-fluid" src="images/avatar/01.jpg" alt="" />
                                            </div>
                                            <div className="property-agent-info">
                                                <a className="property-agent-name" href="#">Alice Williams</a>
                                                <span className="d-block">Company Agent</span>
                                                <ul className="property-agent-contact list-unstyled">
                                                    <li><a href="#"><i className="fas fa-mobile-alt"></i> </a></li>
                                                    <li><a href="#"><i className="fas fa-envelope"></i> </a></li>
                                                </ul>
                                            </div>
                                        </div> */}
                                                <div className="property-agent-popup">
                                                    <a href="#"><i className="fas fa-camera"></i> {property.images && property.images.length}</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-md-7">
                                            <div className="property-details">
                                                <div className="property-details-inner">
                                                    <div className="property-details-inner-box">
                                                        <div className="property-details-inner-box-left">
                                                            <h5 className="property-title"><a href="property-detail-style-01.html">{property.title}</a></h5>
                                                            <span className="property-address"><i className="fas fa-map-marker-alt fa-xs"></i>{property.address}</span>
                                                            <span className="property-agent-date"><i className="far fa-clock fa-md"></i>{format(new Date(property.createdAt), "dd/MM/yyyy")}</span>
                                                        </div>
                                                        <div className="property-price">${property.price}<span className="d-block"> {property.period && `${property.period}/ month`}</span> </div>
                                                    </div>
                                                    <ul className="property-info list-unstyled d-flex">
                                                        <li className="flex-fill property-bed"><i className="fas fa-bed"></i>Bed<span>{property.bedrooms}</span></li>
                                                        <li className="flex-fill property-bath"><i className="fas fa-bath"></i>Bath<span>{property.bathrooms}</span></li>
                                                        <li className="flex-fill property-m-sqft"><i className="far fa-square"></i>sqft<span>145m</span></li>
                                                    </ul>
                                                    <p className="mb-0 mt-3">{property.description}</p>
                                                </div>
                                                <div className="property-btn">
                                                    <Link className="property-link" to={`/property/${property._id}`}>See Details</Link>
                                                    <ul className="property-listing-actions list-unstyled mb-0">
                                                        <li className="property-compare"><a href="#" style={{ cursor: "pointer", borderRadius: "4px" }} className="bg-info"><i className="fa fa-edit text-white"></i></a></li>
                                                        <li onClick={() => deleteHandler(property._id)} className="property-favourites"><a style={{ cursor: "pointer", borderRadius: "4px" }} className="bg-danger" ><i className="fa fa-trash-alt  text-white"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }

                        {!loading && properties.length > 0 && <div className="row">
                            <div className="col-12">
                                <ul className="pagination mt-3">
                                    <li className="page-item disabled me-auto">
                                        <span className="page-link b-radius-none">Prev</span>
                                    </li>
                                    <li className="page-item active" aria-current="page"><span className="page-link">1 </span> <span className="sr-only">(current)</span></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item ms-auto">
                                        <a className="page-link b-radius-none" href="#">Next</a>
                                    </li>
                                </ul>
                            </div>
                        </div>}

                    </div>
                </div>
            </div>
        </section>
        {/* <!--=================================
Listing – grid view --> */}


    </>

}