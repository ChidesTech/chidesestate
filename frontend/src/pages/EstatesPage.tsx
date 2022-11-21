import BreadCrumb from "../components/BreadCrumb";
import Footer from "../components/Footer";

export default function EstatesPage(){
    return <>
        <BreadCrumb page="Estates" />
        
        <section className="space-ptb">
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
            <li><a href="#">Duplex <i className="fas fa-times-circle"></i> </a></li>
            <li><a className="filter-clear" href="#">Reset Search <i className="fas fa-redo-alt"></i> </a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-3 col-md-4 mb-5 mb-md-0">
        <div className="sidebar">
          <div className="widget">
            <div className="widget-title">
              <h6>Featured property</h6>
            </div>
            <div className="property-item mb-0">
              <div className="property-image bg-overlay-gradient-04">
                <img className="img-fluid" src="images/property/grid/06.jpg" alt=""/>
                <div className="property-lable">
                  <span className="badge badge-md bg-primary">Studio</span>
                  <span className="badge badge-md bg-info">New </span>
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
                </div>
                <div className="property-btn">
                  <a className="property-link" href="property-detail-style-01.html">See Details</a>
                </div>
              </div>
          </div>
          </div>
          <div className="widget">
            <div className="widget-title">
              <h6>Recently listed properties</h6>
            </div>
            <div className="recent-list-item">
              <img className="img-fluid" src="images/property/list/01.jpg" alt=""/>
              <div className="recent-list-item-info">
                <a className="address mb-2" href="property-detail-style-01.html">Awesome family home</a>
                <span className="text-primary">$1,456,233 </span>
              </div>
            </div>
            <div className="recent-list-item">
              <img className="img-fluid" src="images/property/list/02.jpg" alt=""/>
              <div className="recent-list-item-info">
                <a className="address mb-2" href="property-detail-style-01.html">Contemporary apartment</a>
                <span className="text-primary">$2,496,454 </span>
              </div>
            </div>
            <div className="recent-list-item">
              <img className="img-fluid" src="images/property/list/03.jpg" alt=""/>
              <div className="recent-list-item-info">
                <a className="address mb-2" href="property-detail-style-01.html">Family home for sale</a>
                <span className="text-primary">$4,662,457 </span>
              </div>
            </div>
            <div className="recent-list-item">
              <img className="img-fluid" src="images/property/list/04.jpg" alt=""/>
              <div className="recent-list-item-info">
                <a className="address mb-2" href="property-detail-style-01.html">184 lexington avenue</a>
                <span className="text-primary">$2,456,452 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-9 col-md-8">
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
                  <label className="justify-content-start pe-2 mb-sm-0 mb-2">Sort by: </label>
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
            <li><a className="property-list-icon" href="agency-list.html">
              <span></span>
              <span></span>
              <span></span>
            </a></li>
            <li><a className="property-grid-icon active" href="agency-grid.html">
              <span></span>
              <span></span>
              <span></span>
            </a></li>
          </ul>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-6">
            <div className="agent text-center mt-4">
              <div className="agent-detail">
                <div className="agent-avatar avatar avatar-xllll">
                  <img className="img-fluid rounded-circle" src="images/agency/01.png" alt=""/>
                </div>
                <div className="agent-info">
                  <h6> <a href="agency-detail.html">Duplex estates</a></h6>
                  <span><i className="fas fa-map-marker-alt fa-xs pe-2"></i>Virginia drive temple hills</span>
                  <p className="mt-3 mb-0">And it’s not just parents that are the cause – teachers, friends, clergy members or anyone else that has.</p>
                </div>
              </div>
              <div className="agent-button">
                <a className="btn btn-light d-grid" href="agency-detail.html">View Profile</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="agent text-center mt-4">
              <div className="agent-detail">
                <div className="agent-avatar avatar avatar-xllll">
                  <img className="img-fluid rounded-circle" src="images/agency/02.png" alt=""/>
                </div>
                <div className="agent-info">
                  <h6> <a href="agency-detail.html">Business estates </a></h6>
                  <span><i className="fas fa-map-marker-alt fa-xs pe-2"></i>West Indian Summer St. Missoula</span>
                  <p className="mt-3 mb-0">“Nothing changes until something moves” – this is the battle cry of author and journalist Robert Ringer.</p>
                </div>
              </div>
              <div className="agent-button">
                <a className="btn btn-light d-grid" href="agency-detail.html">View Profile</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="agent text-center mt-4">
              <div className="agent-detail">
                <div className="agent-avatar avatar avatar-xllll">
                  <img className="img-fluid rounded-circle" src="images/agency/03.png" alt=""/>
                </div>
                <div className="agent-info">
                  <h6> <a href="agency-detail.html">Green house </a></h6>
                  <span><i className="fas fa-map-marker-alt fa-xs pe-2"></i>Fairground St. North Bergen, NJ</span>
                  <p className="mt-3 mb-0">So, there you have it; the six steps that will help you to the fabled land of achievement and success!</p>
                </div>
              </div>
              <div className="agent-button">
                <a className="btn btn-light d-grid" href="agency-detail.html">View Profile</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="agent text-center mt-4">
              <div className="agent-detail">
                <div className="agent-avatar avatar avatar-xllll">
                  <img className="img-fluid rounded-circle" src="images/agency/04.png" alt=""/>
                </div>
                <div className="agent-info">
                  <h6> <a href="agency-detail.html">leaf apartments </a></h6>
                  <span><i className="fas fa-map-marker-alt fa-xs pe-2"></i>Piper Drive Zion</span>
                  <p className="mt-3 mb-0">Franklin’s extraordinary success in life and politics can be attributed to his perseverance to overcome his.</p>
                </div>
              </div>
              <div className="agent-button">
                <a className="btn btn-light d-grid" href="agency-detail.html">View Profile</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ul className="pagination mt-5">
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
<Footer></Footer>
    </>
}