import { ChangeEvent, useEffect, useState } from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { searchProperties } from "../api/PropertyApi";
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

        {/* ===== SEARCHFORM =====*/}
        <div className="container js-home-1-search" style={{ marginTop: "31px" }}>

            {/* <!--PROPERTY SEARCH FORM 1 BEGIN--> */}

            <form id="search-form-1">
                <div className="property-search">
                    <div className="main-apartment-search-options">
                        <div className="options-wrapper-main">
                            <div className="wrapper search-property">
                                <h3>Title or Key Word</h3>
                                <input onChange={e => setTitle(e.target.value)} name="title" type="text" className="property-searchinput" placeholder="Title or Key Word" />
                            </div>
                            <div className="wrapper search-property">
                                <h3>Location</h3>
                                <input onChange={e => setLocation(e.target.value)} name="location" type="text" className="property-searchinput" placeholder="Location" />
                            </div>


                            <div className="wrapper">
                                <h3>Property type</h3>
                                <select onChange={e => setType(e.target.value)} name="type" className="select-input big-input property-searchinput"
                                    data-placeholder="type">
                                    <option value="">Property Type</option>
                                    <option value="apartment">Apartment</option>
                                    <option value="farm">Farm</option>
                                    <option value="condo">Condo</option>
                                    <option value="multi-family-house">Multi Family House</option>
                                    <option value="townhouse">Townhouse</option>
                                </select>
                            </div>

                            <div className="wrapper">
                                <h3>Status</h3>
                                <select onChange={e => setStatus(e.target.value)} name="status" className="select-input big-input badge-test"
                                    data-placeholder="status">
                                    <option value="" data-text="small-badge sale">Property Status</option>
                                    <option value="sale" data-text="small-badge sale">For Sale</option>
                                    <option value="rent" data-text="small-badge rent">For Rent</option>
                                    <option value="new" data-text="small-badge new">New</option>
                                    <option value="featured" data-text="small-badge featured">Featured</option>
                                    <option value="reused" data-text="small-badge reused">Reused</option>
                                    <option value="hot" data-text="small-badge hot">Hot Offer</option>
                                </select>
                            </div>

                            <div className="wrapper advanced-wrapper">
                                <h3>Advanced mode</h3>
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider round"></span>
                                </label>
                                {/* <button  className="property-button">Find Properties</button> */}
                            </div>
                        </div>

                    </div>

                    <div className="toggle-options">

                        
                    <div className="main-apartment-search-options">
                    <div className="options-wrapper-main">
                       
                        <div className="wrapper search-property">
                            <h3>Min. Price(NGN)</h3>
                            <input  name="min-price" type="number" className="property-searchinput" placeholder="Min. Price" />
                        </div>
                        <div className="wrapper search-property">
                            <h3>Max. Price(NGN)</h3>
                            <input  name="max-price" type="number" className="property-searchinput" placeholder="Max. Price" />
                        </div>
                        <div className="wrapper search-property">
                            <h3>Bedrooms</h3>
                            <input onChange={e => setBedrooms(Number(e.target.value))} name="bedrooms" type="number" className="property-searchinput" placeholder="Bedrooms" />
                        </div>
                        <div className="wrapper search-property">
                            <h3>Bathrooms</h3>
                            <input onChange={e => setBathrooms(Number(e.target.value))} name="bathrooms" type="number" className="property-searchinput" placeholder="Bathrooms" />
                        </div>


                        
                       
                    </div>

                </div>

                        <div style={{ display: "none" }} className="apartment-features">
                            <span>Other features:</span>

                            <span className="features-count">4</span>
                            <div className="checkboxes-block">
                                <div>
                                    <input type="checkbox" name="conditioning" id="ch1" className="css-checkbox" />
                                    <label htmlFor="ch1" className="css-label">Air Conditioning</label> <br />
                                </div>
                                <div>
                                    <input type="checkbox" name="refrigerator" id="ch2" className="css-checkbox" />
                                    <label htmlFor="ch2" className="css-label">Refrigerator</label> <br />
                                </div>


                                <div>
                                    <input type="checkbox" name="barbeque" id="ch3" className="css-checkbox" />
                                    <label htmlFor="ch3" className="css-label">Barbeque</label> <br />
                                </div>
                                <div>
                                    <input type="checkbox" name="sauna" id="ch4" className="css-checkbox" />
                                    <label htmlFor="ch4" className="css-label">Sauna</label> <br />
                                </div>


                                <div><input type="checkbox" name="dryer" id="ch5" className="css-checkbox" />
                                    <label htmlFor="ch5" className="css-label">Dryer</label> <br />
                                </div>
                                <div><input type="checkbox" name="pool" id="ch6" className="css-checkbox" />
                                    <label htmlFor="ch6" className="css-label">Swimming Pool</label> <br />
                                </div>


                                <div>
                                    <input type="checkbox" name="gym" id="ch7" className="css-checkbox" />
                                    <label htmlFor="ch7" className="css-label">Gym</label> <br />
                                </div>

                                <div>
                                    <input type="checkbox" name="tv" id="ch8" className="css-checkbox" />
                                    <label htmlFor="ch8" className="css-label">TV Cable</label> <br />
                                </div>


                                <div>
                                    <input type="checkbox" name="laundry" id="ch9" className="css-checkbox" />
                                    <label htmlFor="ch9" className="css-label">Laundry</label> <br />
                                </div>
                                <div><input type="checkbox" name="washer" id="ch10" className="css-checkbox" />
                                    <label htmlFor="ch10" className="css-label">Washer</label> <br />
                                </div>


                                <div>
                                    <input type="checkbox" name="microwave" id="ch11" className="css-checkbox" />
                                    <label htmlFor="ch11" className="css-label">Microwave</label> <br />
                                </div>
                                <div>
                                    <input type="checkbox" name="wifi" id="ch12" className="css-checkbox" />
                                    <label htmlFor="ch12" className="css-label">WI FI</label> <br />
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </form>


            {/* <!--PROPERTY SEARCH FORM 1 END--> */}
        </div>
        {/* ===== SEARCHFORM =====*/}


        {loading ? <h1 className="container">Fetching Properties ...</h1> :
            properties.length === 0 ? <h1 className="container">No Property Found</h1> : null}

        <div className={`${loading || properties.length === 0 ? "container hide-container" : "container"}`}>

            {/* <!--APARTMENT GRID BEGIN--> */}
            <div className="apartment-grid">
                <div className="owl-carousel owl-theme">
                    <div className="item">
                        <div className="row">

                            {
                                properties.map(property => {
                                    return <a href={`/property/${property._id}`} key={property._id} className="col-md-4 col-sm-6 col-xs-12">
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
                <div className="arrow-block hidespan">

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
                </div>
            </div>
            {/* <!--APARTMENT GRID END--> */}
        </div>


    </>
}