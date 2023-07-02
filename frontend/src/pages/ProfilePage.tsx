import { Link } from "react-router-dom"
import BreadCrumb from "../components/BreadCrumb"
export default function ProfilePage() {

    return <>
        <BreadCrumb page="Profile" />
        <section className="space-ptb">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="agent agent-03 mb-5">
                            <div className="row g-0">
                                <div className="col-md-3 text-center border-end">
                                    <div className="d-flex flex-column h-100">
                                        <div className="agent-avatar p-3 my-auto">
                                            <img className="img-fluid rounded-circle" src="/images/dp.jpg" alt="" />
                                        </div>
                                        <div className="agent-listing text-center mt-auto">
                                            <a href="#"><strong className="text-primary me-2 d-inline-block">15</strong>Listed Properties </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="d-flex h-100 flex-column">
                                        <div className="agent-detail">
                                            <div className="d-block d-sm-flex">
                                                <div className="agent-name mb-3 mt-sm-0">
                                                    <h2> <a href="#">Desmond Nwosu </a></h2>
                                                    <span>Realtor</span>
                                                </div>
                                                <div className="agent-social ms-auto">
                                                    <ul className="list-unstyled list-inline">
                                                        <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i> </a></li>
                                                        <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i> </a></li>
                                                        <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin"></i> </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="agent-info">
                                                <p className="mt-3 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, maxime minima? Fugiat modi sequi quidem pariatur iste odio dolorem temporibus voluptates commodi, sit cumque voluptatibus, vel ullam voluptatem est assumenda soluta! Vitae nisi maiores et in porro iure nam enim quis error voluptas temporibus iusto, dolorum eius. Dolorem, autem ut. </p>
                                                <p className="mt-3">Success isn’t really that difficult. There is a significant portion of the population here in North America, that actually want and need success to be hard! Why? So they then have a built-in excuse when things don’t go their way! Pretty sad situation, to say the least. Have some fun and hypnotize yourself to be your very own “Ghost of Christmas future” and see what the future holds for you.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="space-pt">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="section-title">
          <h4>Listing by Desmond Nwosu</h4>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-6 col-md-4">
        <div className="property-item">
          <div className="property-image bg-overlay-gradient-04">
            <img className="img-fluid" src="/images/property/grid/01.jpg" alt=""/>
            <div className="property-lable">
              <span className="badge badge-md bg-primary">Bungalow</span>
              <span className="badge badge-md bg-info">Sale </span>
            </div>
            <span className="property-trending" title="trending"><i className="fas fa-bolt"></i></span>
            <div className="property-agent">
              <div className="property-agent-image">
                <img className="img-fluid" src="images/avatar/01.jpg" alt=""/>
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
              <a href="#"><i className="fas fa-camera"></i> 06</a>
            </div>
          </div>
          <div className="property-details">
            <div className="property-details-inner">
              <h5 className="property-title"><a href="property-detail-style-01.html">Ample apartment at last floor </a></h5>
              <span className="property-address"><i className="fas fa-map-marker-alt fa-xs"></i>Virginia drive temple hills</span>
              <span className="property-agent-date"><i className="far fa-clock fa-md"></i>10 days ago</span>
              <div className="property-price">$150.00<span> / month</span> </div>
              <ul className="property-info list-unstyled d-flex">
                <li className="flex-fill property-bed"><i className="fas fa-bed"></i>Bed<span>1</span></li>
                <li className="flex-fill property-bath"><i className="fas fa-bath"></i>Bath<span>2</span></li>
                <li className="flex-fill property-m-sqft"><i className="far fa-square"></i>sqft<span>145m</span></li>
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
      <div className="col-sm-6 col-md-4">
        <div className="property-item">
          <div className="property-image bg-overlay-gradient-04">
            <img className="img-fluid" src="/images/property/grid/02.jpg" alt=""/>
            <div className="property-lable">
              <span className="badge badge-md bg-primary">Apartment</span>
              <span className="badge badge-md bg-info">New </span>
            </div>
            <div className="property-agent">
              <div className="property-agent-image">
                <img className="img-fluid" src="images/avatar/02.jpg" alt=""/>
              </div>
              <div className="property-agent-info">
                <a className="property-agent-name" href="#">John doe</a>
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
          <div className="property-details">
            <div className="property-details-inner">
              <h5 className="property-title"><a href="property-detail-style-01.html">Awesome family home</a></h5>
              <span className="property-address"><i className="fas fa-map-marker-alt fa-xs"></i>Vermont dr. hephzibah</span>
              <span className="property-agent-date"><i className="far fa-clock fa-md"></i>2 months ago</span>
              <div className="property-price">$326.00<span> / month</span> </div>
              <ul className="property-info list-unstyled d-flex">
                <li className="flex-fill property-bed"><i className="fas fa-bed"></i>Bed<span>2</span></li>
                <li className="flex-fill property-bath"><i className="fas fa-bath"></i>Bath<span>3</span></li>
                <li className="flex-fill property-m-sqft"><i className="far fa-square"></i>sqft<span>215m</span></li>
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
      <div className="col-sm-6 col-md-4">
        <div className="property-item">
          <div className="property-image bg-overlay-gradient-04">
            <img className="img-fluid" src="/images/property/grid/03.jpg" alt=""/>
            <div className="property-lable">
              <span className="badge badge-md bg-primary">Summer House</span>
              <span className="badge badge-md bg-info">Hot </span>
            </div>
            <span className="property-trending" title="trending"><i className="fas fa-bolt"></i></span>
            <div className="property-agent">
              <div className="property-agent-image">
                <img className="img-fluid" src="images/avatar/03.jpg" alt=""/>
              </div>
              <div className="property-agent-info">
                <a className="property-agent-name" href="#">Felica queen</a>
                <span className="d-block">Investment</span>
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
          <div className="property-details">
            <div className="property-details-inner">
              <h5 className="property-title"><a href="property-detail-style-01.html">Contemporary apartment</a></h5>
              <span className="property-address"><i className="fas fa-map-marker-alt fa-xs"></i>Newport st. mebane, nc</span>
              <span className="property-agent-date"><i className="far fa-clock fa-md"></i>6 months ago</span>
              <div className="property-price">$658.00<span> / month</span> </div>
              <ul className="property-info list-unstyled d-flex">
                <li className="flex-fill property-bed"><i className="fas fa-bed"></i>Bed<span>3</span></li>
                <li className="flex-fill property-bath"><i className="fas fa-bath"></i>Bath<span>4</span></li>
                <li className="flex-fill property-m-sqft"><i className="far fa-square"></i>sqft<span>3,189m</span></li>
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
      <div className="col-sm-6 col-md-4">
        <div className="property-item">
          <div className="property-image bg-overlay-gradient-04">
            <img className="img-fluid" src="/images/property/grid/04.jpg" alt=""/>
            <div className="property-lable">
              <span className="badge badge-md bg-primary">Duplex</span>
              <span className="badge badge-md bg-info">Hot </span>
            </div>
            <div className="property-agent">
              <div className="property-agent-image">
                <img className="img-fluid" src="images/avatar/04.jpg" alt=""/>
              </div>
              <div className="property-agent-info">
                <a className="property-agent-name" href="#">Sara lisbon</a>
                <span className="d-block">Construction</span>
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
          <div className="property-details">
            <div className="property-details-inner">
              <h5 className="property-title"><a href="property-detail-style-01.html">Family home for sale</a></h5>
              <span className="property-address"><i className="fas fa-map-marker-alt fa-xs"></i>Border st. nicholasville, ky</span>
              <span className="property-agent-date"><i className="far fa-clock fa-md"></i>12 months ago</span>
              <div className="property-price">$485.00<span> / month</span> </div>
              <ul className="property-info list-unstyled d-flex">
                <li className="flex-fill property-bed"><i className="fas fa-bed"></i>Bed<span>2</span></li>
                <li className="flex-fill property-bath"><i className="fas fa-bath"></i>Bath<span>1</span></li>
                <li className="flex-fill property-m-sqft"><i className="far fa-square"></i>sqft<span>2,356m</span></li>
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
      <div className="col-sm-6 col-md-4">
        <div className="property-item">
          <div className="property-image bg-overlay-gradient-04">
            <img className="img-fluid" src="/images/property/grid/05.jpg" alt=""/>
            <div className="property-lable">
              <span className="badge badge-md bg-primary">Penthouses</span>
              <span className="badge badge-md bg-info">Rent </span>
            </div>
            <span className="property-trending" title="trending"><i className="fas fa-bolt"></i></span>
            <div className="property-agent">
              <div className="property-agent-image">
                <img className="img-fluid" src="images/avatar/05.jpg" alt=""/>
              </div>
              <div className="property-agent-info">
                <a className="property-agent-name" href="#">Mellissa Doe</a>
                <span className="d-block">Founder & CEO</span>
                <ul className="property-agent-contact list-unstyled">
                  <li><a href="#"><i className="fas fa-mobile-alt"></i> </a></li>
                  <li><a href="#"><i className="fas fa-envelope"></i> </a></li>
                </ul>
              </div>
            </div>
            <div className="property-agent-popup">
              <a href="#"><i className="fas fa-camera"></i> 10</a>
            </div>
          </div>
          <div className="property-details">
            <div className="property-details-inner">
              <h5 className="property-title"><a href="property-detail-style-01.html">Luxury villa with pool</a></h5>
              <span className="property-address"><i className="fas fa-map-marker-alt fa-xs"></i>West Indian St. Missoula</span>
              <span className="property-agent-date"><i className="far fa-clock fa-md"></i>2 years ago</span>
              <div className="property-price">$698.00<span> / month</span> </div>
              <ul className="property-info list-unstyled d-flex">
                <li className="flex-fill property-bed"><i className="fas fa-bed"></i>Bed<span>5</span></li>
                <li className="flex-fill property-bath"><i className="fas fa-bath"></i>Bath<span>4</span></li>
                <li className="flex-fill property-m-sqft"><i className="far fa-square"></i>sqft<span>1,658m</span></li>
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
      <div className="col-sm-6 col-md-4">
        <div className="property-item">
          <div className="property-image bg-overlay-gradient-04">
            <img className="img-fluid" src="/images/property/grid/06.jpg" alt=""/>
            <div className="property-lable">
              <span className="badge badge-md bg-primary">Studio</span>
              <span className="badge badge-md bg-info">New </span>
            </div>
            <div className="property-agent">
              <div className="property-agent-image">
                <img className="img-fluid" src="images/avatar/06.jpg" alt=""/>
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
              <h5 className="property-title"><a href="property-detail-style-01.html">184 lexington avenue</a></h5>
              <span className="property-address"><i className="fas fa-map-marker-alt fa-xs"></i>Hamilton rd. willoughby, oh</span>
              <span className="property-agent-date"><i className="far fa-clock fa-md"></i>3 years ago</span>
              <div className="property-price">$236.00<span> / month</span> </div>
              <ul className="property-info list-unstyled d-flex">
                <li className="flex-fill property-bed"><i className="fas fa-bed"></i>Bed<span>2</span></li>
                <li className="flex-fill property-bath"><i className="fas fa-bath"></i>Bath<span>2</span></li>
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
    </div>
  </div>
</section>

    </>
}