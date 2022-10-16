import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProperty } from "../api/PropertyApi";
import SearchForm from "../components/SearchForm";
import IPropertyInterface from "../interfaces/IPropertyInterface";

export default function SinglePropertyPage() {
    const { id } = useParams();
    const initialPropertyState = {
        _id: null, title: "", type: "", status: "", location: "", price: 0, cover: "", images: [], videos: [], description: "", bathrooms: 0,
        bedrooms: 0, garages: 0, features: [], details: [], period: ""
    }

    const [property, setProperty] = useState<IPropertyInterface>(initialPropertyState);
    const [showGallery, setShowGallery] = useState<boolean>(false);

    async function getPropertyDetails() {

        try {
            const { data } = await getProperty(id);
            setProperty(data);

        } catch (error) {

        }

    }

    useEffect(() => {
        getPropertyDetails();
    }, [])
    return <>
        <SearchForm />
        <br />
        {!property._id && <h1>No Property Found</h1>
        }
        <div
            className={`${!property._id && " invisible-container"}`}
        >


            <div className="page-title-simple m-b-30">
                <div className="container">
                    <ul>
                        <li>
                            <a href="/">home</a>
                        </li>
                        <li>
                            <a >property details</a>
                        </li>
                    </ul>
                    <br />
                    <h1>{property.title}</h1>
                    <h1 style={{ fontSize: "1.8rem", marginTop: "1rem" }}>Location: {property.location}</h1>
                </div>
            </div>
            {!showGallery &&
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-7">

                            <div className="property-price m-b-30">
                                <div className="price">
                                    <div className="full-price"><span>£</span>{property.price}{property.period && `/${property.period}`}</div>
                                    {/* <div className="price-per"><span>£</span>600/sq ft</div> */}
                                </div>
                                <div className="buttons-wrap">
                                    <a className="compare active"></a>
                                    <a className="heart active"></a>
                                    <a className="contact">contact agent</a>
                                </div>
                            </div>
                            <div className="property_gallery m-b-30">
                                <div className="wrapper">
                                    {/* <div className="slide" data-height="450">
                                <div className="js-image-preloader">
                                    <div>
                                        <canvas id='imagecircleback' height='100' width='100'></canvas>
                                        <canvas id='imagecirclemain' height='100' width='100'></canvas>

                                    </div>
                                </div>
                                <div className="property-status">
                                    <span className="featured">featured</span>
                                    <span className="rent">for rent</span>
                                </div>
                                <p className="js-fullscreen-message">Press <kbd>ESC</kbd> to exit full screen mode </p>
                            </div>
                            <a href="#" className="js-fullscreen-btn fullscreen"> <i className="material-icons"></i></a>

                            <div className="property-slides-list-wrapper">
                                <div className="owl-carousel owl-theme">
                                    <div className="item">
                                        <a href="#" data-image={property.cover}>
                                            <img src={property.cover} className="active-slide" alt="active-slide" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="nav-arrow left-arrow"><i className="material-icons">arrow_back</i></a>
                            <a href="#" className="nav-arrow right-arrow"><i className="material-icons">arrow_forward</i></a> */}
                                    <img style={{ height: "35rem", width: "100%" }} src={property.cover} alt="" />
                                </div>
                            </div>




                            <div className="single-property-details m-b-30">
                                <div style={{ display: "flex", justifyContent: "space-between" }} className="main-info">
                                    <span className="details">Property Images</span>
                                    {
                                        property.images.length > 2 && <span className="close-gallery" onClick={() => setShowGallery(!showGallery)} ><i className="fa fa-photo"></i></span>

                                    }
                                </div>

                                {property.images.length === 0 ? <h3>No Image Added</h3> :
                                    <div className="image-grid">
                                        {property.images.map((image, i) => {
                                            if (i > 2) return;
                                            return <img src={image} alt="" />
                                        })}
                                    </div>
                                }


                            </div>

                            <div className="single-property-details m-b-30">
                                <div className="main-info">
                                    <span className="details">Details</span>
                                    <span className="update">Updated on February 11, 2017 at 1:07 pm</span>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-4">
                                        <div className="wrap">
                                            <span>ID</span>8494108566
                                        </div>
                                        <div className="wrap">
                                            <span>Square</span>4600 sq.ft
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-4">
                                        <div className="wrap">
                                            <span>Published</span>3 months ago
                                        </div>
                                        <div className="wrap">
                                            <span>Bedrooms:</span>4
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-4">
                                        <div className="wrap">
                                            <span>Updated</span>20 hours ago
                                        </div>
                                        <div className="wrap">
                                            <span>Bathrooms:</span>2
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="single-property-description m-b-30">
                                <h3>Description</h3>
                                <p>Has ex maisonette persecuti. Nulla luxury ea est, eu high ceilings volutpat sit. Vim historic necessitatibus id. Id eos cozy intellegat, id dicant breathtaking views constituto pro. Quo dicant handyman special ceteros at, ornatus rent-controlled tenant in place iudicabit sit cu.Eos an high ceilings delicata. Quo ei trendy shops discere facilisi.
                                    Eos dico picturesque delicata ex, an nostrum decorative fireplace atomorum mel.
                                    Et luxury euripidis his.Has ex modern interior persecuti. </p>

                                <p>Nulla historic ea est, eu Carrara marble volutpat sit. Vim amenities necessitatibus id. Id eos breathtaking views intellegat, id dicant stainless steel constituto pro. Quo dicant noted architect ceteros at, ornatus the next Williamsburg iudicabit sit cu. She was bouncing away, when a cry from the two women, who had turned towards the bed, caused her to look round. The patient had raised herself upright, and was stretching her arms towards them.
                                    With this irrepressible ebullition of mirth, Master Bates laid himself flat on the floor: and kicked convulsively for five minutes in an ecstasy of facetious joy. </p>

                                <p>Then jumping to his feet, he snatched the cleft stick from the Dodger; and, advancing to Oliver, viewed him round and round; while the Jew, taking off his nightcap, made a great number of low bows to the bewildered boy.
                                </p>
                            </div>



                            <div className="single-property-features m-b-30">
                                <h3>Features</h3>

                                <div className="feature-wrap">
                                    <div className="wrap">
                                        <div className="available">Air Conditioning</div>
                                        <div className="unavailable">Pool</div>
                                        <div className="available">New Construction</div>
                                        <div className="available">Basketball court</div>
                                        <div className="unavailable">Gym</div>
                                        <div className="available">Laundry</div>
                                    </div>


                                    <div className="wrap">
                                        <div className="unavailable">Alarm System</div>
                                        <div className="available">Spa</div>
                                        <div className="available">Carport</div>
                                        <div className="unavailable">Dishwasher</div>
                                        <div className="unavailable">Floor Boards</div>
                                        <div className="available">Lawn</div>
                                    </div>


                                    <div className="wrap">
                                        <div className="available">Basketball court</div>
                                        <div className="available">Condition</div>
                                        <div className="unavailable">Heighbors</div>
                                        <div className="available">Dryer</div>
                                        <div className="unavailable">Mountines</div>
                                        <div className="unavailable">Outdoor Shower</div>
                                    </div>


                                    <div className="wrap">
                                        <div className="available">Refrigerator</div>
                                        <div className="unavailable">Sauna</div>
                                        <div className="available">WiFi</div>
                                        <div className="available">TV Cable</div>
                                        <div className="unavailable">Sauna</div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-5">
                            <div className="sidebar-agent m-b-30">
                                <div className="agent-info-wrap">
                                    <div className="agent-img online">
                                        <img src="/images/mask.png" alt="agent-img" />
                                    </div>
                                    <div className="agent-name">
                                        Pauline Saunders
                                        <span>41 property listings</span>
                                    </div>
                                    <div className="buttons-wrap">
                                        <div className="buttons-left-wrap">
                                            <a href="#"><i className="material-icons">&#xE0BF;</i> start chat</a>
                                        </div>
                                        <div className="buttons-right-wrap">
                                            <a href="#">
                                                <i className="fa fa-facebook icons" aria-hidden="true"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-twitter icons" aria-hidden="true"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-google icons" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="agent-contact-wrap">
                                    <p>Has ex maisonette persecuti. Nulla luxury ea est, eu high ceilings volutpat sit. </p>
                                    <div className="information-column">
                                        <span><i className="fa fa-phone" aria-hidden="true"></i>Office:</span>
                                        <span className="values">083-501-2427</span>
                                        <span><i className="fa fa-mobile fa-lg" aria-hidden="true"></i>Mobile:</span>
                                        <span className="values">686-986-7249</span>
                                        <span><i className="fa fa-skype" aria-hidden="true"></i>Skype:</span>
                                        <a href="#" className="values">Lillie Martin</a>
                                        <span><i className="fa fa-envelope" aria-hidden="true"></i>E-mail:</span>
                                        <a href="#" className="values">jacynthe_labadie@friesen.info</a>
                                    </div>
                                    <form>
                                        <input type="text" placeholder="Your name" />
                                        <input type="text" placeholder="Phone" />
                                        <input type="text" placeholder="E-mail" />
                                        <textarea placeholder="Message"></textarea>
                                    </form>
                                    <button type="submit">send message</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-sm-6">
                                    <div className="sidebar-property-price-for-rent m-b-30">
                                        <div className="main-wrap">
                                            <div className="left-wrap">
                                                <span className="full-price">
                                                    <span>£</span>5.953.000
                                                </span>
                                                <span className="price-for-sq">1.900/sq ft</span>
                                            </div>
                                            <div className="right-wrap">
                                                <span className="for-rent">for rent</span>
                                            </div>
                                        </div>
                                        <div className="check">
                                            <a href="#">Check availability</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-6">
                                    <div className="sidebar-property-price m-b-30">
                                        <div className="left-wrap">
                                            <span className="full-price">
                                                <span>£</span>9.974.000
                                            </span>
                                            <span className="price-for-sq">600/sq ft</span>
                                        </div>
                                        <div className="right-wrap">
                                            <span className="for-sale">for sale</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}

            {showGallery && <div className="container">
                <div style={{
                    display: "flex", justifyContent: "space-between", marginBottom: "5rem",
                    alignItems: "center"
                }}>
                    <h2>Property Gallery</h2>
                    <span onClick={() => setShowGallery(!showGallery)} className="close-gallery">X</span>
                </div>
                <div className="single-image-grid">
                    {property.images.map(image => {
                        return <img src={image} alt="" />
                    })}


                </div>
            </div>


            }


        </div>
    </>
}