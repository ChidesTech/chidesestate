import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getProperty } from "../api/PropertyApi";
import BreadCrumb from "../components/BreadCrumb";
import SearchForm from "../components/FilterForm";
import IPropertyInterface from "../interfaces/IPropertyInterface";

export default function SinglePropertyPage() {
  const { id } = useParams();
  const initialPropertyState = {
    _id: null, title: "", type: "", status: "", location: "", price: 0, cover: "", images: [], videos: [], description: "", bathrooms: 0,
    bedrooms: 0, garages: 0, features: [], details: [], period: ""
  }

  const [property, setProperty] = useState<IPropertyInterface>(initialPropertyState);
  const [showGallery, setShowGallery] = useState<boolean>(false);
  const [openSlider, setOpenSlider] = useState<boolean>(false);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const photos = [
    "https://housing.com/news/wp-content/uploads/2022/11/shutterstock_1715891752-1200x700-compressed.jpg",
    "https://i.ytimg.com/vi/vZHPJPRNnQA/maxresdefault.jpg",
    "https://archello.s3.eu-central-1.amazonaws.com/images/2020/02/13/Classic-House-Interior-Design-4.1581603609.7419.jpg",
    "https://assets-news.housing.com/news/wp-content/uploads/2020/04/22184310/Check-out-these-duplex-interior-design-ideas-FB-1200x700-compressed.jpg",
    "https://homeandfarmsense.com/wp-content/uploads/2018/10/Home-Interior-Design01.jpg"
  ]

  async function getPropertyDetails() {

    try {
      const { data } = await getProperty(id);
      setProperty(data);

    } catch (error) {

    }

  }

  function moveSlide(direction : string){
    let newIndex;
   if(direction === "right" ){
      newIndex = slideIndex === photos.length - 1 ? 0 : slideIndex + 1;
   }else{
    newIndex = slideIndex === 0 ? photos.length - 1 : slideIndex - 1;
   }
   setSlideIndex(newIndex)

  }

  useEffect(() => {
    getPropertyDetails();
  }, [])
  return <>
    <BreadCrumb page={property.title} />

    <div className="wrapper">
      {/* <!--=================================
  Property details --> */}

      {openSlider && <div className="imageSlider">
       <FontAwesomeIcon icon={faCircleXmark} className="slider-close-icon" onClick={() => setOpenSlider(false)}/>
       <FontAwesomeIcon icon={faCircleArrowLeft} className="slider-left-icon" onClick={() => moveSlide("right")}/>
       <div className="sliderWrapper">
        <img src={photos[slideIndex]} alt="" className="sliderImage" />
       </div>
       <FontAwesomeIcon icon={faCircleArrowRight} className="slider-right-icon" onClick={()=> moveSlide('left')}/>
      </div>
      }

      <section className="space-ptb">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-10 col-md-6">
              <div className="property-detail-title">
                <h3>{property.title}</h3>
                <span className="d-block mb-4"><i className="fas fa-map-marker-alt fa-xs pe-2"></i>{property.location}</span>
                <div className="d-inline">
                  <span className="price font-xll text-primary me-2 fs-4">${property.price}</span>
                  <span className="sub-price font-lg text-dark"><b>{property.period && `/${property.period}`} </b> </span>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 ">


              <Link to="/" className="btn btn-sm  btn-primary">Book Now</Link>

            </div>
            <div className="col-sm-12 mt-2">
              <div className="propertyImages">
                <div className="propertyImageWrapper">
                  <img src={property.cover || "/images/empty.jpg"} alt="" className="propertyImage" />

                </div>
                {photos.map((photo, i) => {
                  return <div className="propertyImageWrapper" onClick={() => {setSlideIndex(i); setOpenSlider(true)}}>
                    <img src={photo || "/images/empty.jpg"} alt="" className="propertyImage" />
                    <i className="fa fa-expand image-expand-icon"></i>

                  </div>

                })}

              </div>
            </div>

            <div style={{ display: "flex", marginTop: "1rem" }}>
              <Link to={`/photo-gallery/${id}`}>
                <button className="btn btn-outline-primary me-2"><i className="fa fa-camera"></i> Photos</button>
              </Link>
              <Link to={`/video-gallery/${id}`}>
                <button className="btn btn-outline-primary"><i className="fa fa-video"></i> Videos</button>
              </Link>
            </div>

          </div>
          <div className="row">
            <div className="col-lg-8 col-md-7">
              <div className="property-info mt-5">
                <div className="row">
                  <div className="col-sm-3 mb-3 mb-sm-0">
                    <h5>Property details</h5>
                  </div>
                  <div className="col-sm-9">
                    <div className="row mb-3">
                      <div className="col-sm-6">
                        <ul className="property-list list-unstyled">
                          <li><b>Property ID:</b> RV151</li>
                          <li><b>Price:</b> $484,400</li>
                          <li><b>Property Size:</b> 1466 Sq Ft</li>
                          <li><b>Bedrooms:</b> 4</li>
                          <li><b>Bathrooms:</b> 2</li>
                        </ul>
                      </div>
                      <div className="col-sm-6">
                        <ul className="property-list list-unstyled">
                          <li><b>Garage:</b> 1</li>
                          <li><b>Garage Size:</b> 458 SqFt</li>
                          <li><b>Year Built:</b> 2019-01-09</li>
                          <li><b>Property Type:</b> Full  Family Home</li>
                          <li><b>Property Status:</b> For rent</li>
                        </ul>
                      </div>
                    </div>
                    <h6 className="text-primary">Additional details</h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <ul className="property-list list-unstyled mb-0">
                          <li><b>Deposit:</b> 30%</li>
                          <li><b>Pool Size:</b> 457 Sqft</li>
                          <li><b>Last remodel year:</b> 1956</li>
                        </ul>
                      </div>
                      <div className="col-sm-6">
                        <ul className="property-list list-unstyled mb-0">
                          <li><b>Amenities:</b> Clubhouse</li>
                          <li><b>Additional Rooms:</b> Guest Bat</li>
                          <li><b>Equipment:</b> Grill - Gas - light</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="mt-4 mb-4 mb-sm-5 mt-sm-5" />
              <div className="property-description">
                <div className="row">
                  <div className="col-sm-3 mb-3 mb-sm-0">
                    <h5>Description</h5>
                  </div>
                  <div className="col-sm-9">
                    <p>The home features private entry copper-clad door leading to salon with marble floors. Stunning great room has soaring 45 foot ceilings with glass windows, polished concrete floors, exposed brick & sculptural steel beams. The chef's kitchen has honed granite counters, high-end S/S appliances, French cabinets & gas range.</p>
                    <p>Floor-to-ceiling windows accentuate the panoramic vistas that sweep across the Golden Gate Bridge, the downtown skyline, the artfully lit Bay Bridge and beyond. The floor plan features two bedroom suites, kitchen, living/dining room, two view terraces and ample storage space. </p>
                  </div>
                </div>
              </div>
              <hr className="mt-4 mb-4 mb-sm-5 mt-sm-5" />
              <div className="property-features">
                <div className="row">
                  <div className="col-sm-3 mb-3 mb-sm-0">
                    <h5>Features</h5>
                  </div>
                  <div className="col-sm-9">
                    <div className="row">
                      <div className="col-sm-6">
                        <ul className="property-list-style-2 list-unstyled mb-0">
                          <li>TV Cable</li>
                          <li>Air Conditioning</li>
                          <li>Barbeque</li>
                          <li>Gym</li>
                          <li>Swimming Pool</li>
                          <li>Laundry</li>
                          <li>Microwave</li>
                          <li>Outdoor Shower</li>
                        </ul>
                      </div>
                      <div className="col-sm-6">
                        <ul className="property-list-style-2 list-unstyled mb-0">
                          <li>Lawn</li>
                          <li>Refrigerator</li>
                          <li>Sauna</li>
                          <li>Washer</li>
                          <li>Dryer</li>
                          <li>WiFi</li>
                          <li>Window Coverings</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="mt-4 mb-4 mb-sm-5 mt-sm-5" />
              <div className="property-address">
                <div className="row">
                  <div className="col-sm-3 mb-3 mb-sm-0">
                    <h5>Address</h5>
                  </div>
                  <div className="col-sm-9">
                    <div className="row">
                      <div className="col-sm-6">
                        <ul className="property-list list-unstyled mb-0">
                          <li><b>Address:</b> Virginia drive temple hills</li>
                          <li><b>State/County:</b> San francisco</li>
                          <li><b>Area:</b> Embarcadero</li>
                        </ul>
                      </div>
                      <div className="col-sm-6">
                        <ul className="property-list list-unstyled mb-0">
                          <li><b>City:</b> San francisco</li>
                          <li><b>Zip:</b> 4848494</li>
                          <li><b>Country:</b> United States</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="mt-4 mb-4 mb-sm-5 mt-sm-5" />
              <div className="property-floor-plans">
                <div className="row">
                  <div className="col-sm-3 mb-3 mb-sm-0">
                    <h5>Floor plans</h5>
                  </div>
                  <div className="col-sm-9">
                    <div className="accordion-style-2" id="accordion">
                      <div className="card">
                        <div className="card-header" id="headingOne">
                          <h5 className="accordion-title mb-0">
                            <button className="btn btn-link d-flex ms-auto align-items-center" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">First Floor <i className="fas fa-chevron-down fa-xs"></i></button>
                          </h5>
                        </div>
                        <div id="collapseOne" className="collapse show accordion-content" aria-labelledby="headingOne" data-bs-parent="#accordion">
                          <div className="card-body">
                            <p>Introspection is the trick. Understand what you want, why you want it and what it will do for you. This is a critical factor, and as such, is probably the most difficult step. For this reason, most people never!</p>
                            <img className="img-fluid" src="images/property/floor-plans-01.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingTwo">
                          <h5 className="accordion-title mb-0">
                            <button className="btn btn-link d-flex ms-auto align-items-center collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              Second Floor <i className="fas fa-chevron-down fa-xs"></i>
                            </button>
                          </h5>
                        </div>
                        <div id="collapseTwo" className="collapse accordion-content" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                          <div className="card-body">
                            <p>Focus is having the unwavering attention to complete what you set out to do. There are a million distractions in every facet of our lives. Telephones and e-mail, clients and managers, spouses and kids, TV, newspapers and radio.</p>
                            <img className="img-fluid" src="images/property/floor-plans-01.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="mt-4 mb-4 mb-sm-5 mt-sm-5" />
              <div className="property-video">
                <div className="row">
                  <div className="col-sm-3 mb-3 mb-sm-0">
                    <h5>Property video</h5>
                  </div>
                  <div className="col-sm-9">
                    {/* <div className="embed-responsive embed-responsive-16by9">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/kacyaEXqVhs" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div> */}
                  </div>
                </div>
              </div>
              <hr className="mt-4 mb-4 mb-sm-5 mt-sm-5" />
              <div className="property-walk-score">
                <div className="row">
                  <div className="col-sm-3 mb-3 mb-sm-0">
                    <h5>WalkScore</h5>
                  </div>
                  <div className="col-sm-9">
                    <div className="walk-score-info d-sm-flex">
                      <div className="mb-2 mb-sm-0">
                        <img src="images/property/walk-score.png" alt="" />
                        <p className="mb-0 d-block mt-2">walkscore96 / Walker's Paradise</p>
                      </div>
                      <a className="btn btn-primary btn-sm ms-auto" href="#">More details here</a>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="mt-4 mb-4 mb-sm-5 mt-sm-5" />
              <div className="property-nearby">
                <div className="row">
                  <div className="col-sm-3 mb-3 mb-sm-0">
                    <h5>What's nearby</h5>
                  </div>
                  <div className="col-sm-9">
                    <div className="nearby-info mb-4">
                      <span className="nearby-title mb-2 d-block text-info">
                        <i className="fas fa-graduation-cap me-2"></i><b>Education</b>
                      </span>
                      <div className="nearby-list">
                        <ul className="property-list list-unstyled mb-0">
                          <li className="d-flex">
                            <span className="me-1"><b>Case Western Reserve University</b> (2.10 km)</span>
                            <ul className="list-unstyled list-inline ms-auto">
                              <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                              <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                              <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                              <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                              <li className="list-inline-item m-0 text-warning"><i className="fas fa-star-half-alt fa-xs"></i></li>
                            </ul>
                          </li>
                          <li className="d-flex">
                            <span className="me-1"><b>Georgia Institute of Technology</b> (1.42 km)</span>
                            <ul className="list-unstyled list-inline ms-auto">
                              <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                              <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                              <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                              <li className="list-inline-item m-0 text-warning"><i className="fas fa-star-half-alt fa-xs"></i></li>
                              <li className="list-inline-item m-0 text-warning"><i className="far fa-star fa-xs"></i></li>
                            </ul>
                          </li>
                          <li className="d-flex">
                            <span className="me-1"><b>Harvey Mudd College</b> (1.64 km)</span>
                            <ul className="list-unstyled list-inline ms-auto">
                              <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                              <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                              <li className="list-inline-item m-0 text-warning"><i className="fas fa-star-half-alt fa-xs"></i></li>
                              <li className="list-inline-item m-0 text-warning"><i className="far fa-star fa-xs"></i></li>
                              <li className="list-inline-item m-0 text-warning"><i className="far fa-star fa-xs"></i></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="nearby-info mb-4">
                      <span className="nearby-title mb-2 d-block text-success">
                        <i className="fas fa-user-md me-2"></i><b>Health & Medical</b>
                      </span>
                      <div className="nearby-list">
                        <ul className="property-list list-unstyled mb-0">
                          <li className="d-flex">
                            <span className="me-1"><b>Hopedale Community Hospital</b> (2.04 km)</span>
                            <ul className="list-unstyled list-inline ms-auto">
                              <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                              <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                              <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                              <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                              <li className="list-inline-item m-0 text-warning"><i className="fas fa-star-half-alt fa-xs"></i></li>
                            </ul>
                          </li>
                          <li className="d-flex">
                            <span className="me-1"><b>North Star Medical Clinic</b> (1.45 km)</span>
                            <ul className="list-unstyled list-inline ms-auto">
                              <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                              <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                              <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                              <li className="list-inline-item m-0 text-warning"><i className="fas fa-star-half-alt fa-xs"></i></li>
                              <li className="list-inline-item m-0 text-warning"><i className="far fa-star fa-xs"></i></li>
                            </ul>
                          </li>
                          <li className="d-flex">
                            <span className="me-1"><b>Maple Valley General Hospital</b> (2.64 km)</span>
                            <ul className="list-unstyled list-inline ms-auto">
                              <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                              <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                              <li className="list-inline-item m-0 text-warning"><i className="fas fa-star-half-alt fa-xs"></i></li>
                              <li className="list-inline-item m-0 text-warning"><i className="far fa-star fa-xs"></i></li>
                              <li className="list-inline-item m-0 text-warning"><i className="far fa-star fa-xs"></i></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="nearby-info">
                      <span className="nearby-title mb-2 d-block text-danger">
                        <i className="fas fa-bus-alt me-2"></i><b>Transportation</b>
                      </span>
                      <div className="nearby-list">
                        <ul className="property-list list-unstyled mb-0">
                          <li className="d-flex">
                            <span className="me-1"><b>Central bus depot </b> (2.04 km)</span>
                            <ul className="list-unstyled list-inline ms-auto">
                              <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                              <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                              <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                              <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                              <li className="list-inline-item m-0 text-warning"><i className="fas fa-star-half-alt fa-xs"></i></li>
                            </ul>
                          </li>
                          <li className="d-flex">
                            <span className="me-1"><b>Travello & Bus Charter Express</b> (2.54 km)</span>
                            <ul className="list-unstyled list-inline ms-auto">
                              <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                              <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                              <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                              <li className="list-inline-item m-0 text-warning"><i className="fas fa-star-half-alt fa-xs"></i></li>
                              <li className="list-inline-item m-0 text-warning"><i className="far fa-star fa-xs"></i></li>
                            </ul>
                          </li>
                          <li className="d-flex">
                            <span className="me-1"><b>Charing Cross & Paddington Shipping</b> (2.64 km)</span>
                            <ul className="list-unstyled list-inline ms-auto">
                              <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                              <li className="list-inline-item m-0 text-warning"><i className="fas fa-star fa-xs"></i></li>
                              <li className="list-inline-item m-0 text-warning"><i className="fas fa-star-half-alt fa-xs"></i></li>
                              <li className="list-inline-item m-0 text-warning"><i className="far fa-star fa-xs"></i></li>
                              <li className="list-inline-item m-0 text-warning"><i className="far fa-star fa-xs"></i></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="mt-4 mb-4 mb-sm-5 mt-sm-5" />
              <div className="property-schedule">
                <div className="row">
                  <div className="col-sm-3 mb-3 mb-sm-0">
                    <h5>Schedule a tour</h5>
                  </div>
                  <div className="col-sm-9">
                    <div className="row">
                      <div className="mb-3 col-sm-6 datetimepickers">
                        <div className="input-group date" id="datetimepicker-01" data-target-input="nearest">
                          <input type="text" className="form-control datetimepicker-input" placeholder="Date" data-target="#datetimepicker-01" />
                          <div className="input-group input-group-box" data-target="#datetimepicker-01" data-toggle="datetimepicker">
                            <div className="input-group-text rounded-0 rounded-end"><i className="far fa-calendar-alt"></i></div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3 col-sm-6 datetimepickers">
                        <div className="input-group date" id="datetimepicker-03" data-target-input="nearest">
                          <input type="text" className="form-control datetimepicker-input" placeholder="Time" data-target="#datetimepicker-03" />
                          <div className="input-group input-group-box" data-target="#datetimepicker-03" data-toggle="datetimepicker">
                            <div className="input-group-text rounded-0 rounded-end"><i className="far fa-clock"></i></div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3 col-sm-12">
                        <input type="text" className="form-control" placeholder="Name" />
                      </div>
                      <div className="mb-3 col-sm-12">
                        <input type="email" className="form-control" placeholder="Email" />
                      </div>
                      <div className="mb-3 col-sm-12">
                        <input type="Text" className="form-control" placeholder="Phone" />
                      </div>
                      <div className="mb-3 col-sm-12">
                        <textarea className="form-control" rows={4} placeholder="Message"></textarea>
                      </div>
                      <div className="mb-3 col-sm-12">
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </div>
                      <div className="col-sm-6"></div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="mt-4 mb-4 mb-sm-5 mt-sm-5" />
              <div className="property-statistics">
                <div className="row">
                  <div className="col-sm-3 mb-3 mb-sm-0">
                    <h5>Page views statistics</h5>
                  </div>
                  <div className="col-sm-9">
                    <img className="img-fluid" src="images/property/views--statistics.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5">
              <div className="sticky-top">
                <div className="sidebar mt-5 ">
                  <div className="widget agent-info">
                    <div className="widget-dec border-bottom-0 mb-0">
                      <div className="agent-detail text-center">
                        <div className="agent-avatar avatar avatar-xlll mb-3">
                          <img className="img-fluid rounded-circle" src="images/avatar/01.jpg" alt="" />
                        </div>
                        <div className="agent-info">
                          <h5 className="mb-0"> <a href="#">Felica queen</a></h5>
                          <span className="text-primary font-sm d-block mb-1">Company Agent</span>
                          <b className="property-number"><i className="fas fa-phone-volume me-2"></i>(123) 345-6789</b>
                        </div>
                      </div>
                    </div>
                    <a className="btn btn-dark d-grid" href="#">View listings</a>
                    <a className="btn btn-primary d-grid m-0" href="#">Request info</a>
                  </div>
                  <div className="widget">
                    <div className="widget-title">
                      <h6>Contact info</h6>
                    </div>
                    <form>
                      <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Name" />
                      </div>
                      <div className="mb-3">
                        <input type="email" className="form-control" placeholder="Email" />
                      </div>
                      <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Phones" />
                      </div>
                      <div className="mb-3">
                        <textarea className="form-control" rows={4} placeholder="Message"></textarea>
                      </div>
                      <div className="mb-3 d-grid">
                        <button type="submit" className="btn btn-primary">Request info</button>
                      </div>
                    </form>
                  </div>
                  <div className="widget">
                    <div className="widget-title">
                      <h6>Mortgage calculator</h6>
                    </div>
                    <form>
                      <div className="input-group mb-2">
                        <div className="input-group input-group-box">
                          <div className="input-group-text"><i className="fas fa-dollar-sign"></i></div>
                        </div>
                        <input type="text" className="form-control" placeholder="Total Amount" />
                      </div>
                      <div className="input-group mb-2">
                        <div className="input-group input-group-box">
                          <div className="input-group-text"><i className="fas fa-dollar-sign"></i></div>
                        </div>
                        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Down Payment" />
                      </div>
                      <div className="input-group mb-2">
                        <div className="input-group input-group-box">
                          <div className="input-group-text"><i className="fas fa-percent"></i></div>
                        </div>
                        <input type="text" className="form-control" placeholder="Interest Rate" />
                      </div>
                      <div className="input-group mb-2">
                        <div className="input-group input-group-box">
                          <div className="input-group-text"><i className="far fa-clock"></i></div>
                        </div>
                        <input type="text" className="form-control" placeholder="Loan Term (Years)" />
                      </div>
                      <div className="input-group mb-3 select-border">
                        <select className="form-control basic-select">
                          <option>Monthly</option>
                          <option>Weekly</option>
                          <option>Yearly</option>
                        </select>
                      </div>
                      <a className="btn btn-primary d-grid" href="#">Calculate</a>
                    </form>
                  </div>
                  <div className="widget">
                    <div className="widget-title">
                      <h6>Schedule a tour</h6>
                    </div>
                    <form>
                      <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Name" />
                      </div>
                      <div className="mb-3">
                        <input type="email" className="form-control" placeholder="Email" />
                      </div>
                      <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Phone" />
                      </div>
                      <div className="mb-3 datetimepickers">
                        <div className="input-group date" id="datetimepicker-02" data-bs-target-input="nearest">
                          <input type="text" className="form-control datetimepicker-input" placeholder="Date" data-bs-target="#datetimepicker-02" />
                          <div className="input-group input-group-box" data-bs-target="#datetimepicker-02" data-bs-toggle="datetimepicker">
                            <div className="input-group-text rounded-0 rounded-end"><i className="far fa-calendar-alt"></i></div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3 datetimepickers">
                        <div className="input-group date" id="datetimepicker-04" data-bs-target-input="nearest">
                          <input type="text" className="form-control datetimepicker-input" placeholder="Time" data-bs-target="#datetimepicker-04" />
                          <div className="input-group input-group-box" data-bs-target="#datetimepicker-04" data-bs-toggle="datetimepicker">
                            <div className="input-group-text rounded-0 rounded-end"><i className="far fa-clock"></i></div>
                          </div>
                        </div>
                      </div>
                      <a className="btn btn-primary d-grid" href="#">Submit</a>
                    </form>
                  </div>
                  <div className="widget">
                    <div className="widget-title">
                      <h6>Recently listed properties</h6>
                    </div>
                    <div className="recent-list-item">
                      <img className="img-fluid" src="images/property/list/01.jpg" alt="" />
                      <div className="recent-list-item-info">
                        <a className="address mb-2" href="#">Ample apartment at last floor</a>
                        <span className="text-primary">$1,147,457 </span>
                      </div>
                    </div>
                    <div className="recent-list-item">
                      <img className="img-fluid" src="images/property/list/02.jpg" alt="" />
                      <div className="recent-list-item-info">
                        <a className="address mb-2" href="#">Contemporary apartment</a>
                        <span className="text-primary">$2,577,577 </span>
                      </div>
                    </div>
                    <div className="recent-list-item">
                      <img className="img-fluid" src="images/property/list/03.jpg" alt="" />
                      <div className="recent-list-item-info">
                        <a className="address mb-2" href="#">3 bedroom house in gardner</a>
                        <span className="text-primary">$3,575,547 </span>
                      </div>
                    </div>
                    <div className="recent-list-item">
                      <img className="img-fluid" src="images/property/list/04.jpg" alt="" />
                      <div className="recent-list-item-info">
                        <a className="address mb-2" href="#">Stunning 2 bedroom home in village</a>
                        <span className="text-primary">$1,475,575 </span>
                      </div>
                    </div>
                  </div>
                  <div className="widget">
                    <div className="widget-title">
                      <h6>Leave a review for Rylan Tolbert</h6>
                    </div>
                    <div className="review d-flex">
                      <div className="review-avatar avatar avatar-xl me-3">
                        <img className="img-fluid rounded-circle" src="images/avatar/02.jpg" alt="" />
                      </div>
                      <div className="review-info flex-grow-1">
                        <span className="mb-2 d-block">Rating:</span>
                        <ul className="list-unstyled list-inline">
                          <li className="list-inline-item m-0 text-warning"><i className="fas fa-star"></i></li>
                          <li className="list-inline-item m-0 text-warning"><i className="fas fa-star"></i></li>
                          <li className="list-inline-item m-0 text-warning"><i className="fas fa-star"></i></li>
                          <li className="list-inline-item m-0 text-warning"><i className="fas fa-star-half-alt"></i></li>
                          <li className="list-inline-item m-0 text-warning"><i className="far fa-star"></i></li>
                        </ul>
                        <div className="mb-3">
                          <span className="mb-2 d-block">Rating comment:</span>
                          <textarea className="form-control" rows={3}></textarea>
                        </div>
                        <span> <a href="login.html"> <b>Login</b>  </a> to leave a review</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--=================================
  Property details --> */}
    </div>

  </>

}