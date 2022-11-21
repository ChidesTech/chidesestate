import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { getProperties } from "../api/PropertyApi";
import Footer from "../components/Footer";
import SearchForm from "../components/SearchForm";
import IPropertyInterface from "../interfaces/IPropertyInterface";
export default function HomePage() {

    const [properties, setProperties] = useState<Array<IPropertyInterface>>([]);
    const [loading, setLoading] = useState(true);



    async function getMyProperties() {
        setLoading(true);
        try {
            const { data } = await getProperties();
            setProperties(data);
            setLoading(false)
        } catch (error) {

        }

    }

    useEffect(() => {
        getMyProperties();
    }, [])
    return <>
        {/* BANNER STARTS */}

        <section className="banner bg-holder bg-overlay-black-30" style={{ backgroundImage: "url(images/banner-01.jpg)" }}>
            <div className="container">
                <div className="row">
                    <div className="col-12 position-relative">
                        <h1 className="text-white text-center mb-2">Create wealth through Chides Estates</h1>
                        <p className="lead text-center text-white mb-4 fw-normal">Take a step to realizing your dream. </p>
                        <SearchForm/>
                    </div>
                </div>
            </div>
        </section>
        {/* BANNER ENDS */}


        {/* FEATURES STARTS */}

        <section className="space-ptb bg-holder-bottom building-space" style={{ backgroundImage: "url(images/building-bg.png)" }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-9">
                        <div className="section-title mb-0">
                            <h2>Plenty of reasons to choose us</h2>
                            <p>Our agency has many specialized areas, but our CUSTOMERS are our real specialty.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 text-lg-end">
                        <a className="btn btn-primary" href="about-us.html">More about us </a>
                    </div>
                </div>
                <div className="row g-0 mt-4">
                    <div className="col-lg-3 col-sm-6">
                        <div className="feature-info h-100">
                            <div className="feature-info-icon">
                                <i className="flaticon-like"></i>
                            </div>
                            <div className="feature-info-content">
                                <h6 className="mb-3 feature-info-title">Excellent reputation</h6>
                                <p className="mb-0">Our comprehensive database of listings and market info give the most accurate view of the market and your home value.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="feature-info h-100">
                            <div className="feature-info-icon">
                                <i className="flaticon-agent"></i>
                            </div>
                            <div className="feature-info-content">
                                <h6 className="mb-3 feature-info-title">Best local agents</h6>
                                <p className="mb-0">You are just minutes from joining with the best agents who are fired up about helping you Buy or sell.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="feature-info h-100">
                            <div className="feature-info-icon">
                                <i className="flaticon-like-1"></i>
                            </div>
                            <div className="feature-info-content">
                                <h6 className="mb-3 feature-info-title">Peace of mind</h6>
                                <p className="mb-0">Rest guaranteed that your agent and their expert team are handling every detail of your transaction from start to end.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="feature-info h-100">
                            <div className="feature-info-icon">
                                <i className="flaticon-house-1"></i>
                            </div>
                            <div className="feature-info-content">
                                <h6 className="mb-3 feature-info-title">Tons of options</h6>
                                <p className="mb-0">Discover a place you’ll love to live in. Choose from our vast inventory and choose your desired house.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-7 text-center">
                        <p className="mb-4">Ten years and thousands of home buyers have turned to Real Villa to find their dream home. We offer a comprehensive list of for-sale properties, as well as the knowledge and tools to make informed real estate decisions. Today, more than ever, Real Villa is the home of home Search.</p>
                        <div className="popup-video">
                            <a className="popup-icon popup-youtube" href="https://www.youtube.com/watch?v=LgvseYYhqU0"> <i className="flaticon-play-button"></i> </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* FEATURES ENDS */}


        {/* PROPERTY LIST STARTS */}

        <section className="space-pb">
            <div className="container">
                <div className="row justify-content-center">
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
                                            <span className="badge badge-md bg-primary text-uppercase">{property.type}</span>
                                            {property.status && <span className="badge badge-md bg-info text-uppercase">{property.status} </span>}
                                        </div>
                                        {/* <div className="property-agent">
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
                                        </div> */}
                                        <div className="property-agent-popup">
                                            <a href="#"><i className="fas fa-camera"></i> {property.images && property.images.length}</a>
                                        </div>
                                    </div>
                                    <div className="property-details">
                                        <div className="property-details-inner">
                                            <h5 className="property-title"><Link to={`/property/${property._id}`}>{property.title}</Link></h5>
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
                                            <Link className="property-link" to={`/property/${property._id}`}>See Details</Link>
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
                        <Link className="btn btn-link" to="/listings"><i className="fas fa-plus"></i>View All Listings</Link>
                    </div>
                </div>
            </div>
        </section>
        {/* PROPERTY LIST ENDS */}
        <Footer></Footer>


    </>
}