import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteProperty, getProperties } from "../api/PropertyApi";
import BreadCrumb from "../components/BreadCrumb";
import DashboardMenu from "../components/DashboardMenu";
import IPropertyInterface from "../interfaces/IPropertyInterface";

export default function PropertiesManagementPage() {
    const [properties, setProperties] = useState<Array<IPropertyInterface>>([]);
    const [loading, setLoading] = useState(true);
    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");


    async function getMyProperties() {
        setLoading(true);
        try {
            const { data } = await getProperties();
            setProperties(data);
            setLoading(false)
        } catch (error) {

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
        <BreadCrumb page="Properties Management"/>
        <section className="space-ptb" style={{marginTop :"-4rem"}}>
            <div className="container">
                <div className="row">
                <DashboardMenu page="properties-management"/>
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
                                        <div className="mb-2 select-border">
                                            <select className="form-control basic-select">
                                                <option>All Type</option>
                                                <option>Villa</option>
                                                <option>Apartment Building</option>
                                                <option>Commercial</option>
                                                <option>Office</option>
                                                <option>Residential</option>
                                                <option>Shop</option>
                                                <option>Apartment</option>
                                            </select>
                                        </div>
                                        <div className="mb-2 select-border">
                                            <select className="form-control basic-select">
                                                <option>For Rent</option>
                                                <option>For Sale</option>
                                            </select>
                                        </div>
                                        <div className="mb-2 select-border">
                                            <select className="form-control basic-select">
                                                <option>Distance from location</option>
                                                <option>Within 1 mile</option>
                                                <option>Within 3 miles</option>
                                                <option>Within 5 miles</option>
                                                <option>Within 10 miles</option>
                                                <option>Within 15 miles</option>
                                                <option>Within 30 miles</option>
                                            </select>
                                        </div>
                                        <div className="mb-2 select-border">
                                            <select className="form-control basic-select">
                                                <option>Bedrooms</option>
                                                <option>01</option>
                                                <option>02</option>
                                                <option>03</option>
                                            </select>
                                        </div>
                                        <div className="mb-2 select-border">
                                            <select className="form-control basic-select">
                                                <option>Sort by</option>
                                                <option>Most popular</option>
                                                <option>Highest price</option>
                                                <option>Lowest price</option>
                                                <option>Most reduced</option>
                                            </select>
                                        </div>
                                        <div className="mb-2 select-border">
                                            <select className="form-control basic-select">
                                                <option>Select Floor</option>
                                                <option>01</option>
                                                <option>02</option>
                                                <option>03</option>
                                            </select>
                                        </div>
                                        <div className="mb-2">
                                            <input className="form-control" placeholder="Type (sq ft)" />
                                        </div>
                                        <div className="mb-2">
                                            <input className="form-control" placeholder="Type (sq ft)" />
                                        </div>
                                        <div className="mb-3 property-price-slider mt-3">
                                            <label className="form-label">Select Price Range</label>
                                            <input type="text" id="property-price-slider" name="example_name" value="" />
                                        </div>
                                        <div className="d-grid mb-2">
                                            <button className="btn btn-primary align-items-center" type="submit"><i className="fas fa-filter me-1"></i><span>Filter</span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="widget">
                                <div className="widget-title widget-collapse">
                                    <h6>Status of property</h6>
                                    <a className="ms-auto" data-bs-toggle="collapse" href="#status-property" role="button" aria-expanded="false" aria-controls="status-property"> <i className="fas fa-chevron-down"></i> </a>
                                </div>
                                <div className="collapse show" id="status-property">
                                    <ul className="list-unstyled mb-0 pt-3">
                                        <li><a href="#">For rent<span className="ms-auto">(500)</span></a></li>
                                        <li><a href="#">For Sale<span className="ms-auto">(1200)</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="widget">
                                <div className="widget-title widget-collapse">
                                    <h6>Type of property</h6>
                                    <a className="ms-auto" data-bs-toggle="collapse" href="#type-property" role="button" aria-expanded="false" aria-controls="type-property"> <i className="fas fa-chevron-down"></i> </a>
                                </div>
                                <div className="collapse show" id="type-property">
                                    <ul className="list-unstyled mb-0 pt-3">
                                        <li><a href="#">Residential<span className="ms-auto">(12)</span></a></li>
                                        <li><a href="#">Commercial<span className="ms-auto">(45)</span></a></li>
                                        <li><a href="#">Industrial<span className="ms-auto">(23)</span></a></li>
                                        <li><a href="#">Apartment<span className="ms-auto">(05)</span></a></li>
                                        <li><a href="#">Building code<span className="ms-auto">(10)</span></a></li>
                                        <li><a href="#">Communal land<span className="ms-auto">(47)</span></a></li>
                                        <li><a href="#">Insurability<span className="ms-auto">(32)</span></a></li>
                                    </ul>
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
                        <div className="property-item property-col-list mt-4">
                            <div className="row g-0">
                                <div className="col-lg-4 col-md-5">
                                    <div className="property-image bg-overlay-gradient-04">
                                        <img className="img-fluid" src="images/property/list/01.jpg" alt="" />
                                        <div className="property-lable">
                                            <span className="badge badge-md bg-primary">Bungalow</span>
                                            <span className="badge badge-md bg-info">Sale </span>
                                        </div>
                                        <span className="property-trending" title="trending"><i className="fas fa-bolt"></i></span>
                                        <div className="property-agent">
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
                                        </div>
                                        <div className="property-agent-popup">
                                            <a href="#"><i className="fas fa-camera"></i> 04</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-7">
                                    <div className="property-details">
                                        <div className="property-details-inner">
                                            <div className="property-details-inner-box">
                                                <div className="property-details-inner-box-left">
                                                    <h5 className="property-title"><a href="property-detail-style-01.html">Ample apartment at last floor </a></h5>
                                                    <span className="property-address"><i className="fas fa-map-marker-alt fa-xs"></i>Virginia drive temple hills</span>
                                                    <span className="property-agent-date"><i className="far fa-clock fa-md"></i>10 days ago</span>
                                                </div>
                                                <div className="property-price">$150.00<span className="d-block"> / month</span> </div>
                                            </div>
                                            <ul className="property-info list-unstyled d-flex">
                                                <li className="flex-fill property-bed"><i className="fas fa-bed"></i>Bed<span>1</span></li>
                                                <li className="flex-fill property-bath"><i className="fas fa-bath"></i>Bath<span>2</span></li>
                                                <li className="flex-fill property-m-sqft"><i className="far fa-square"></i>sqft<span>145m</span></li>
                                            </ul>
                                            <p className="mb-0 mt-3">For those of you who are serious about having more, doing more, giving more and being with some understanding.</p>
                                        </div>
                                        <div className="property-btn">
                                            <a className="property-link" href="property-detail-style-01.html">See Details</a>
                                            <ul className="property-listing-actions list-unstyled mb-0">
                                                <li className="property-compare"><a data-bs-toggle="tooltip" data-bs-placement="top" title="Compare" href="#"><i className="fas fa-exchange-alt"></i></a></li>
                                                <li className="property-favourites"><a data-bs-toggle="tooltip" data-bs-placement="top" title="Favourite" href="#"><i className="far fa-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="property-item property-col-list mt-4">
                            <div className="row g-0">
                                <div className="col-lg-4 col-md-5">
                                    <div className="property-image bg-overlay-gradient-04">
                                        <img className="img-fluid" src="images/property/list/02.jpg" alt="" />
                                        <div className="property-lable">
                                            <span className="badge badge-md bg-primary">Summer House</span>
                                            <span className="badge badge-md bg-info">Hot </span>
                                        </div>
                                        <div className="property-agent">
                                            <div className="property-agent-image">
                                                <img className="img-fluid" src="images/avatar/02.jpg" alt="" />
                                            </div>
                                            <div className="property-agent-info">
                                                <a className="property-agent-name" href="#">Alice Williams</a>
                                                <span className="d-block">Company Agent</span>
                                                <ul className="property-agent-contact list-unstyled">
                                                    <li><a href="#"><i className="fas fa-mobile-alt"></i> </a></li>
                                                    <li><a href="#"><i className="fas fa-envelope"></i> </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="property-agent-popup">
                                            <a href="#"><i className="fas fa-camera"></i> 12</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-7">
                                    <div className="property-details">
                                        <div className="property-details-inner">
                                            <div className="property-details-inner-box">
                                                <div className="property-details-inner-box-left">
                                                    <h5 className="property-title"><a href="property-detail-style-01.html">The citizen apartment 5th floor</a></h5>
                                                    <span className="property-address"><i className="fas fa-map-marker-alt fa-xs"></i>Border st. nicholasville, ky</span>
                                                    <span className="property-agent-date"><i className="far fa-clock fa-md"></i>6 months ago</span>
                                                </div>
                                                <div className="property-price">$250.00<span className="d-block"> / month</span> </div>
                                            </div>
                                            <ul className="property-info list-unstyled d-flex">
                                                <li className="flex-fill property-bed"><i className="fas fa-bed"></i>Bed<span>2</span></li>
                                                <li className="flex-fill property-bath"><i className="fas fa-bath"></i>Bath<span>3</span></li>
                                                <li className="flex-fill property-m-sqft"><i className="far fa-square"></i>sqft<span>2,324m</span></li>
                                            </ul>
                                            <p className="mb-0 mt-3">Success isn’t really that difficult. There is a significant portion of the population here in North America, that actually.</p>
                                        </div>
                                        <div className="property-btn">
                                            <a className="property-link" href="property-detail-style-01.html">See Details</a>
                                            <ul className="property-listing-actions list-unstyled mb-0">
                                                <li className="property-compare"><a data-bs-toggle="tooltip" data-bs-placement="top" title="Compare" href="#"><i className="fas fa-exchange-alt"></i></a></li>
                                                <li className="property-favourites"><a data-bs-toggle="tooltip" data-bs-placement="top" title="Favourite" href="#"><i className="far fa-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="property-item property-col-list mt-4">
                            <div className="row g-0">
                                <div className="col-lg-4 col-md-5">
                                    <div className="property-image bg-overlay-gradient-04">
                                        <img className="img-fluid" src="images/property/list/03.jpg" alt="" />
                                        <div className="property-lable">
                                            <span className="badge badge-md bg-primary">Summer House</span>
                                            <span className="badge badge-md bg-info">Hot </span>
                                        </div>
                                        <div className="property-agent">
                                            <div className="property-agent-image">
                                                <img className="img-fluid" src="images/avatar/03.jpg" alt="" />
                                            </div>
                                            <div className="property-agent-info">
                                                <a className="property-agent-name" href="#">Sara lisbon</a>
                                                <span className="d-block">Company Agent</span>
                                                <ul className="property-agent-contact list-unstyled">
                                                    <li><a href="#"><i className="fas fa-mobile-alt"></i> </a></li>
                                                    <li><a href="#"><i className="fas fa-envelope"></i> </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="property-agent-popup">
                                            <a href="#"><i className="fas fa-camera"></i> 03</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-7">
                                    <div className="property-details">
                                        <div className="property-details-inner">
                                            <div className="property-details-inner-box">
                                                <div className="property-details-inner-box-left">
                                                    <h5 className="property-title"><a href="property-detail-style-01.html">Cottage woods housed for sale</a></h5>
                                                    <span className="property-address"><i className="fas fa-map-marker-alt fa-xs"></i>Newport st. mebane, nc</span>
                                                    <span className="property-agent-date"><i className="far fa-clock fa-md"></i>10 months ago</span>
                                                </div>
                                                <div className="property-price">$326.00<span className="d-block"> / month</span> </div>
                                            </div>
                                            <ul className="property-info list-unstyled d-flex">
                                                <li className="flex-fill property-bed"><i className="fas fa-bed"></i>Bed<span>3</span></li>
                                                <li className="flex-fill property-bath"><i className="fas fa-bath"></i>Bath<span>2</span></li>
                                                <li className="flex-fill property-m-sqft"><i className="far fa-square"></i>sqft<span>3,987m</span></li>
                                            </ul>
                                            <p className="mb-0 mt-3">I truly believe Augustine’s words are true and if you look at history you know it is true. There are many people in.</p>
                                        </div>
                                        <div className="property-btn">
                                            <a className="property-link" href="property-detail-style-01.html">See Details</a>
                                            <ul className="property-listing-actions list-unstyled mb-0">
                                                <li className="property-compare"><a data-bs-toggle="tooltip" data-bs-placement="top" title="Compare" href="#"><i className="fas fa-exchange-alt"></i></a></li>
                                                <li className="property-favourites"><a data-bs-toggle="tooltip" data-bs-placement="top" title="Favourite" href="#"><i className="far fa-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="property-item property-col-list mt-4">
                            <div className="row g-0">
                                <div className="col-lg-4 col-md-5">
                                    <div className="property-image bg-overlay-gradient-04">
                                        <img className="img-fluid" src="images/property/list/04.jpg" alt="" />
                                        <div className="property-lable">
                                            <span className="badge badge-md bg-primary">Summer House</span>
                                            <span className="badge badge-md bg-info">Hot </span>
                                        </div>
                                        <div className="property-agent">
                                            <div className="property-agent-image">
                                                <img className="img-fluid" src="images/avatar/04.jpg" alt="" />
                                            </div>
                                            <div className="property-agent-info">
                                                <a className="property-agent-name" href="#">Anne Smith</a>
                                                <span className="d-block">Company Agent</span>
                                                <ul className="property-agent-contact list-unstyled">
                                                    <li><a href="#"><i className="fas fa-mobile-alt"></i> </a></li>
                                                    <li><a href="#"><i className="fas fa-envelope"></i> </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="property-agent-popup">
                                            <a href="#"><i className="fas fa-camera"></i> 12</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-7">
                                    <div className="property-details">
                                        <div className="property-details-inner">
                                            <div className="property-details-inner-box">
                                                <div className="property-details-inner-box-left">
                                                    <h5 className="property-title"><a href="property-detail-style-01.html">Executive 4 bed WDM ranch</a></h5>
                                                    <span className="property-address"><i className="fas fa-map-marker-alt fa-xs"></i>Virginia drive temple hills</span>
                                                    <span className="property-agent-date"><i className="far fa-clock fa-md"></i>05 months ago</span>
                                                </div>
                                                <div className="property-price">$658.00<span className="d-block"> / month</span> </div>
                                            </div>
                                            <ul className="property-info list-unstyled d-flex">
                                                <li className="flex-fill property-bed"><i className="fas fa-bed"></i>Bed<span>2</span></li>
                                                <li className="flex-fill property-bath"><i className="fas fa-bath"></i>Bath<span>2</span></li>
                                                <li className="flex-fill property-m-sqft"><i className="far fa-square"></i>sqft<span>1,658m</span></li>
                                            </ul>
                                            <p className="mb-0 mt-3">We also know those epic stories, those modern-day legends surrounding the early failures of such supremely successful folks.</p>
                                        </div>
                                        <div className="property-btn">
                                            <a className="property-link" href="property-detail-style-01.html">See Details</a>
                                            <ul className="property-listing-actions list-unstyled mb-0">
                                                <li className="property-compare"><a data-bs-toggle="tooltip" data-bs-placement="top" title="Compare" href="#"><i className="fas fa-exchange-alt"></i></a></li>
                                                <li className="property-favourites"><a data-bs-toggle="tooltip" data-bs-placement="top" title="Favourite" href="#"><i className="far fa-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="property-item property-col-list mt-4">
                            <div className="row g-0">
                                <div className="col-lg-4 col-md-5">
                                    <div className="property-image bg-overlay-gradient-04">
                                        <img className="img-fluid" src="images/property/list/05.jpg" alt="" />
                                        <div className="property-lable">
                                            <span className="badge badge-md bg-primary">Summer House</span>
                                            <span className="badge badge-md bg-info">Hot </span>
                                        </div>
                                        <span className="property-trending" title="trending"><i className="fas fa-bolt"></i></span>
                                        <div className="property-agent">
                                            <div className="property-agent-image">
                                                <img className="img-fluid" src="images/avatar/05.jpg" alt="" />
                                            </div>
                                            <div className="property-agent-info">
                                                <a className="property-agent-name" href="#">Sara lisbon</a>
                                                <span className="d-block">Company Agent</span>
                                                <ul className="property-agent-contact list-unstyled">
                                                    <li><a href="#"><i className="fas fa-mobile-alt"></i> </a></li>
                                                    <li><a href="#"><i className="fas fa-envelope"></i> </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="property-agent-popup">
                                            <a href="#"><i className="fas fa-camera"></i> 04</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-7">
                                    <div className="property-details">
                                        <div className="property-details-inner">
                                            <div className="property-details-inner-box">
                                                <div className="property-details-inner-box-left">
                                                    <h5 className="property-title"><a href="property-detail-style-01.html">Cottage woods housed for sale</a></h5>
                                                    <span className="property-address"><i className="fas fa-map-marker-alt fa-xs"></i>Newport st. mebane, nc</span>
                                                    <span className="property-agent-date"><i className="far fa-clock fa-md"></i>11 months ago</span>
                                                </div>
                                                <div className="property-price">$987.00<span className="d-block"> / month</span> </div>
                                            </div>
                                            <ul className="property-info list-unstyled d-flex">
                                                <li className="flex-fill property-bed"><i className="fas fa-bed"></i>Bed<span>2</span></li>
                                                <li className="flex-fill property-bath"><i className="fas fa-bath"></i>Bath<span>2</span></li>
                                                <li className="flex-fill property-m-sqft"><i className="far fa-square"></i>sqft<span>3,987m</span></li>
                                            </ul>
                                            <p className="mb-0 mt-3">We know this in our gut, but what can we do about it? How can we motivate ourselves? One of the most difficult aspects of achieving.</p>
                                        </div>
                                        <div className="property-btn">
                                            <a className="property-link" href="property-detail-style-01.html">See Details</a>
                                            <ul className="property-listing-actions list-unstyled mb-0">
                                                <li className="property-compare"><a data-bs-toggle="tooltip" data-bs-placement="top" title="Compare" href="#"><i className="fas fa-exchange-alt"></i></a></li>
                                                <li className="property-favourites"><a data-bs-toggle="tooltip" data-bs-placement="top" title="Favourite" href="#"><i className="far fa-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--=================================
Listing – grid view --> */}


    </>

}