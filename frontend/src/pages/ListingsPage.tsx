import { ChangeEvent, useEffect, useState } from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { searchProperties } from "../api/PropertyApi";
import BreadCrumb from "../components/BreadCrumb";
import Footer from "../components/Footer";
import IPropertyInterface from "../interfaces/IPropertyInterface";
export default function ListingsPage() {
    const navigate = useNavigate();
    const [params, setParms] = useSearchParams();
    const [title, setTitle] = useState(() => params.get("title") || "");
    const [location, setLocation] = useState(() => params.get("location") || "");
    const [type, setType] = useState(() => params.get("type") || "");
    const [status, setStatus] = useState(() => params.get("status") || "");
    const [bedrooms, setBedrooms] = useState(() => Number(params.get("bedrooms")) || 0);
    const [bathrooms, setBathrooms] = useState(() => Number(params.get("bathrooms")) || 0);


    const [properties, setProperties] = useState<Array<IPropertyInterface>>([]);
    const [loading, setLoading] = useState(true);


    async function getListing() {

        setLoading(true);
        try {
            const { data } = await searchProperties({ title, location, type, status, bedrooms, bathrooms });
            setProperties(data);
            setLoading(false);
        } catch (error) {

        }

    }

    useEffect(() => {
        getListing();
    }, [title, location, type, status, bedrooms, bathrooms]);
    return <>
        <BreadCrumb page={`SEARCH : Status = ${status}, Location = ${location}, Type = ${type}, Bedrooms = ${bedrooms}, Bathrooms = ${bathrooms}, Min. Price = , Max. Price = `} />

        {/* SEARCH FORM STARTS */}
        <div className="property-search-field bg-white p-2">
            <div className="property-search-item">
                <form className="row basic-select-wrapper">
                    <div className="form-group col-lg-3 col-md-6">
                        <label className="form-label">Property type</label>
                        <select onChange={e => setType(e.target.value)} name="type" className="form-control search-form-select">
                            <option value="">--- Select Type --- </option>
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
                    <div className="form-group col-lg-3 col-md-6">
                        <label className="form-label">Property Status</label>
                        <select onChange={e => setStatus(e.target.value)} name="status" className="form-control search-form-select">
                            <option value="">--- Select Status --- </option>
                            <option value="rent">For Rent</option>
                            <option value="sale">For Sale</option>
                        </select>
                    </div>
                    <div className="form-group d-flex col-lg-4">
                        <div className="form-group-search">
                            <label className="form-label">Location</label>
                            <div className="d-flex align-items-center"><i className="far fa-compass me-1"></i>
                                <input onChange={e => setLocation(e.target.value)} name="location" className="form-control search-form-select" type="search" placeholder="Search Location" /></div>
                        </div>
                        <span className="align-items-center ms-3 d-none d-lg-block"><button className="btn btn-primary d-flex align-items-center" type="submit"><i className="fas fa-search me-1"></i><span>Search</span></button></span>
                    </div>
                    <div className="form-group text-center col-lg-2">
                        <div className="d-flex justify-content-center d-md-inline-block">
                            <a className="more-search p-0" data-bs-toggle="collapse" href="#advanced-search" role="button" aria-expanded="false" aria-controls="advanced-search"> <span className="d-block pe-2 mb-1">Advanced search</span>
                                <i className="fas fa-angle-double-down"></i></a>
                        </div>
                        <div className="d-flex justify-content-center d-md-inline-block mt-3">
                            <button type="button" className="btn-sm btn-primary">Reset Filter</button>
                        </div>
                    </div>
                    <div className="collapse advanced-search p-0 row mb-5" id="advanced-search">
                        <div className="form-group col-lg-3 col-md-6">
                            <div className="form-group-search">
                                <label className="form-label">Bedrooms</label>
                                <div className="d-flex align-items-center"><i className="fa fa-bed me-1"></i>
                                    <input onChange={e => setBedrooms(Number(e.target.value))} name="bedrooms" type="number" className="form-control search-form-select" placeholder="No. Of Bedrooms" /></div>
                            </div>
                        </div>
                        <div className="form-group col-lg-3 col-md-6">
                            <div className="form-group-search">
                                <label className="form-label">Bathrooms</label>
                                <div className="d-flex align-items-center"><i className="fa fa-bath me-1"></i>
                                    <input onChange={e => setBathrooms(Number(e.target.value))} name="bathrooms" type="number" className="form-control search-form-select" placeholder="No. Of Bathrooms" /></div>
                            </div>
                        </div>
                        <div className="form-group d-flex col-lg-4">
                            <div className="form-group-search">
                                <label className="form-label">Minimum Price</label>
                                <div className="d-flex align-items-center"><i className="fa fa-minus me-1"></i>
                                    <input className="form-control search-form-select" type="number" placeholder="Min. Price" /></div>
                            </div>
                        </div>
                        <div className="form-group text-center col-lg-2">
                            <div className="form-group-search">
                                <label className="form-label">Maximum Price</label>
                                <div className="d-flex align-items-center"><i className="fa fa-plus me-1"></i>
                                    <input className="form-control search-form-select" type="number" placeholder="Max. Price" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="d-lg-none btn-mobile p-3 d-grid">
                        <button className="btn btn-primary align-items-center" type="submit"><i className="fas fa-search me-1"></i><span>Search</span></button>
                    </div>
                </form>
            </div>
        </div>
        {/* SEARCH FORM ENDS */}

       
        {/* PROPERTY LIST STARTS */}

        <section className="space-pb">
            <div className="container">
                <div style={{ visibility: "hidden" }} className="row justify-content-center hidden">
                    <div className="col-lg-8">
                        <div className="section-title text-center">
                            <h2>Newly listed properties</h2>
                            <p>Find your dream home from our Newly added properties</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {loading ? <h4>Fetching Properties . . .</h4> : properties.length === 0 ? <h4>No Property Found</h4> :
                        properties.map(property => {
                            return <div key={property._id} className="col-sm-6 col-md-4">
                                <div className="property-item">
                                    <div className="property-image bg-overlay-gradient-04">
                                        <Link to={`/property/${property._id}`}>
                                            <img style={{ height: "15rem" }} className="img-fluid w-100" src={property.cover || "/images/empty.jpg"} alt="" />

                                        </Link>
                                        <div className="property-lable">
                                            <span className="badge badge-md bg-primary">{property.type}</span>
                                            {property.status && <span className="badge badge-md bg-info text-uppercase">{property.status} </span>}
                                        </div>
                                        <div className="property-agent">
                                            <div className="property-agent-image">
                                                <img className="img-fluid" src="images/avatar/06.jpg" alt="" />
                                            </div>
                                            <div className="property-agent-info">
                                                <a className="property-agent-name" href="#">Michael Bean</a>
                                                <span className="d-block">Research</span>
                                                <ul className="property-agent-contact list-unstyled">
                                                    <li><a href="#"><i className="fas fa-mobile-alt"></i> </a></li>
                                                    <li><a href="#"><i className="fas fa-envelope"></i> </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="property-agent-popup">
                                            <a href="#"><i className="fas fa-camera"></i> 02</a>
                                        </div>
                                    </div>
                                    <div className="property-details">
                                        <div className="property-details-inner">
                                            <h5 className="property-title"><a href="property-detail-style-01.html">{property.title}</a></h5>
                                            <span className="property-address"><i className="fas fa-map-marker-alt fa-xs"></i>{property.location}</span>
                                            <span className="property-agent-date"><i className="far fa-clock fa-md"></i>3 years ago</span>
                                            <div className="property-price">${property.price}{property.period && <span> / {property.period}</span>} </div>
                                            <ul className="property-info list-unstyled d-flex">
                                                <li className="flex-fill property-bed"><i className="fas fa-bed"></i>Bed<span>{property.bedrooms}</span></li>
                                                <li className="flex-fill property-bath"><i className="fas fa-bath"></i>Bath<span>{property.bathrooms}</span></li>
                                                <li className="flex-fill property-m-sqft"><i className="far fa-square"></i>sqft<span>3,657m</span></li>
                                            </ul>
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
                        })
                    }
                    <div className="col-12 text-center">
                        <a className="btn btn-link" href="property-list.html"><i className="fas fa-plus"></i>View All Listings</a>
                    </div>
                </div>
            </div>
        </section>
        {/* PROPERTY LIST ENDS */}

<Footer></Footer>


    </>
}