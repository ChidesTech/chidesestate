import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { getProperties } from "../api/PropertyApi";
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

        {/* <!--PROPERTY SLIDER BEGIN--> */}
        <div className="property-slider">
            <div className="owl-carousel owl-theme">
                <div className="item">
                    <div className="slide">
                        <img  src="images/property_slider_first_slide.png" />
                       
                    </div>
                </div>
                <div className="item">
                    <div className="slide">
                        <img  src="images/ecom2.jpg" />
                        
                    </div>
                </div>
            </div>
            <a href="#" className="nav-arrow left-arrow"><i className="fa fa-arrow-left" aria-hidden="true"></i></a>
            <a href="#" className="nav-arrow right-arrow"><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
        </div>
        {/* <!--PROPERTY SLIDER ENDS--> */}
        <SearchForm/>
        <div className="counters-wrapper light-counters">
            {/* <!--COUNTERS BLOCK BEGIN--> */}
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 counter-element">
                        <div className="i">
                            <i className="material-icons">location_city</i>
                        </div>
                        <div className="data">
                            <p className="number" data-number="428">0</p>
                            <span>New properties for last 7 days</span>
                        </div>
                    </div>
                    <div className="col-md-3  col-sm-6 counter-element">
                        <div className="i">
                            <i className="material-icons">graphic_eq</i>
                        </div>
                        <div className="data">
                            <p className="number" data-number="73.4">0</p>
                            <span>Off available ads in all categories</span>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 counter-element">
                        <div className="i">
                            <i className="material-icons">face</i>
                        </div>
                        <div className="data">
                            <p className="number" data-number="947">947</p>
                            <span>Active agents visiting the site every day</span>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 counter-element">
                        <div className="i">
                            <i className="material-icons">event_seat</i>
                        </div>
                        <div className="data">
                            <p className="number" data-number="848">848</p>
                            <span>Visitors every day</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--COUNTERS BLOCK END--> */}
        </div>

    {loading ? <h1 className="container">Fetching Properties ...</h1> :
    properties.length === 0 ? <h1 className="container">No Property Added</h1> : null}
       
        <div className={`${loading || properties.length === 0 ? "container hide-container" : "container"}`}>

        {/* <!--APARTMENT GRID BEGIN--> */}
        <div className="apartment-grid">
            <div className="owl-carousel owl-theme">
                <div className="item">
                    <div className="row">

                        {
                            properties.map(property =>{
                                return  <a href={`/property/${property._id}`} key={property._id} className="col-md-4 col-sm-6 col-xs-12">
                                <div className="property-block">
                                    <p className="property-type">Farm</p>
                                    <p className="property-title">{property.title}</p>
                                    <div className="apartment-address">
                                        <i className="material-icons">place</i>
                                        <span className="address">{property.location}</span>
                                    </div>
    
                                    <div className="apartment-image">
                                        <img src={property.cover || "images/image.png"} alt="image" />
                                        <div className="badges">
                                            {/* <p className="featured">Featured</p> */}
                                            <p className="rent">{property.status}</p>
                                            {/* <p className="sale">For Sale</p> */}
                                        </div>
    
                                    </div>
    
                                    <div className="apartment-values">
                                        <span>Beds: {property.bedrooms}</span>
                                        <span>Bath: {property.bathrooms} </span>
                                        <span>Sq Ft: </span>
                                    </div>
                                    <div className="apartment-info">
                                        <div className="apartment-price">
                                            <p className="price-big">&#163;{property.price}{property.period && `/${property.period}`}</p>
                                            {/* <p className="price-small">&#163;1,800/sq ft</p> */}
                                        </div>
                                        {/* <div className="icons">
                                            <a href="#" className="clone"> <i className="material-icons icons-style"></i></a>
                                            <a href="#" className="heart"><i className="material-icons icons-style"></i></a>
                                        </div> */}
                                    </div>
                                    <div className="apartment-manager">
                                        {/* <div className="manager-wrap">
                                            <div className="manager-icon">
                                                <a href="#chat"> <img src="images/userpic.png" alt="userpic" /></a>
                                                <div className="online-status"></div>
                                            </div>
                                            <span className="manager-name">Eleanor French</span>
                                        </div> */}
                                        <div className="calendar">
                                            <i className="material-icons">insert_invitation</i>
                                            <span> 1 days a go</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
    
    
                            })
                        }
                       

                    </div>
                </div>

                {/* <div className="item">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="property-block">
                                <p className="property-type">Farm</p>
                                <p className="property-title">Luxury Apartment ocean view</p>
                                <div className="apartment-address">
                                    <i className="material-icons">place</i>
                                    <span className="address">153 Adriana Mews Suite 247</span>
                                </div>

                                <div className="apartment-image">
                                    <img src="images/image.png" alt="image" />
                                    <div className="badges">
                                        <p className="featured">Featured</p>
                                        <p className="rent">For Rent</p>
                                        <p className="sale">For Sale</p>
                                    </div>

                                </div>

                                <div className="apartment-values">
                                    <span>Beds: 4</span>
                                    <span>Bath: 4 </span>
                                    <span>Sq Ft: 2100</span>
                                </div>
                                <div className="apartment-info">
                                    <div className="apartment-price">
                                        <p className="price-big">&#163;1.245.000</p>
                                        <p className="price-small">&#163;1,800/sq ft</p>
                                    </div>
                                    <div className="icons">
                                        <a href="#" className="clone"> <i className="material-icons icons-style"></i></a>
                                        <a href="#" className="heart"><i className="material-icons icons-style"></i></a>
                                    </div>
                                </div>
                                <div className="apartment-manager">
                                    <div className="manager-wrap">
                                        <div className="manager-icon">
                                            <a href="#chat"> <img src="images/userpic.png" alt="userpic" /></a>
                                            <div className="online-status"></div>
                                        </div>
                                        <span className="manager-name">Eleanor French</span>
                                    </div>
                                    <div className="calendar">
                                        <i className="material-icons">insert_invitation</i>
                                        <span> 3 days a go</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div> */}
            </div>
            {/* <!-- class hidebutton hide button-wrapper block, class hidespan hide span-wrapper --> */}
            {/* <div className="arrow-block hidespan">

                <div className="arrow-wrapper">
                    <a href="#" className="arrow-prev">
                        <i className="material-icons">arrow_back</i>
                    </a>
                    <a href="#" className="arrow-next">
                        <i className="material-icons">arrow_forward</i>
                    </a>
                </div>
                <div className="span-wrapper">
                    <span>Partners</span>
                </div>
                <div className="button-wrapper">
                    <a href="#">button</a>
                </div>
            </div> */}
        </div>
        {/* <!--APARTMENT GRID END--> */}
    </div>
       
    
    </>
}