import BreadCrumb from "../components/BreadCrumb"
import DashboardMenu from "../components/DashboardMenu"


export default function EstatesManagementPage(){
    return <>
<BreadCrumb page="Estates Management" />

    
<section class="space-ptb" style={{marginTop : "-4rem"}}>
  <div class="container">
    <div class="row">
        <DashboardMenu page="estates-management"/>
      <div class="col-md-6">
        <div class="section-title mb-3 mb-lg-4">
          <h2><span class="text-primary">156</span> Results</h2>
        </div>
      </div>
      <div class="col-md-6">
        <div class="property-filter-tag">
          <ul class="list-unstyled">
            <li><a href="#">Duplex <i class="fas fa-times-circle"></i> </a></li>
            <li><a class="filter-clear" href="#">Reset Search <i class="fas fa-redo-alt"></i> </a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 col-md-4 mb-5 mb-md-0">
        <div class="sidebar">
          <div class="widget">
            <div class="widget-title">
              <h6>Featured property</h6>
            </div>
            <div class="property-item mb-0">
              <div class="property-image bg-overlay-gradient-04">
                <img class="img-fluid" src="images/property/grid/06.jpg" alt=""/>
                <div class="property-lable">
                  <span class="badge badge-md bg-primary">Studio</span>
                  <span class="badge badge-md bg-info">New </span>
                </div>
                <div class="property-agent-popup">
                  <a href="#"><i class="fas fa-camera"></i> 02</a>
                </div>
              </div>
              <div class="property-details">
                <div class="property-details-inner">
                  <h5 class="property-title"><a href="property-detail-style-01.html">184 lexington avenue</a></h5>
                  <span class="property-address"><i class="fas fa-map-marker-alt fa-xs"></i>Hamilton rd. willoughby, oh</span>
                  <span class="property-agent-date"><i class="far fa-clock fa-md"></i>3 years ago</span>
                  <div class="property-price">$236.00<span> / month</span> </div>
                </div>
                <div class="property-btn">
                  <a class="property-link" href="property-detail-style-01.html">See Details</a>
                </div>
              </div>
          </div>
          </div>
          <div class="widget">
            <div class="widget-title">
              <h6>Recently listed properties</h6>
            </div>
            <div class="recent-list-item">
              <img class="img-fluid" src="images/property/list/01.jpg" alt=""/>
              <div class="recent-list-item-info">
                <a class="address mb-2" href="property-detail-style-01.html">Awesome family home</a>
                <span class="text-primary">$1,456,233 </span>
              </div>
            </div>
            <div class="recent-list-item">
              <img class="img-fluid" src="images/property/list/02.jpg" alt=""/>
              <div class="recent-list-item-info">
                <a class="address mb-2" href="property-detail-style-01.html">Contemporary apartment</a>
                <span class="text-primary">$2,496,454 </span>
              </div>
            </div>
            <div class="recent-list-item">
              <img class="img-fluid" src="images/property/list/03.jpg" alt=""/>
              <div class="recent-list-item-info">
                <a class="address mb-2" href="property-detail-style-01.html">Family home for sale</a>
                <span class="text-primary">$4,662,457 </span>
              </div>
            </div>
            <div class="recent-list-item">
              <img class="img-fluid" src="images/property/list/04.jpg" alt=""/>
              <div class="recent-list-item-info">
                <a class="address mb-2" href="property-detail-style-01.html">184 lexington avenue</a>
                <span class="text-primary">$2,456,452 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-9 col-md-8">
        <div class="property-filter d-sm-flex">
          <ul class="property-short list-unstyled d-sm-flex mb-0">
            <li>
              <form class="form-inline">
                <div class="form-group d-lg-flex d-block mb-sm-0 mb-3">
                  <label class="justify-content-start mb-2 mb-sm-0">Short by:</label>
                  <div class="short-by">
                    <select class="form-control basic-select">
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
          <ul class="property-view-list list-unstyled d-flex mb-0">
            <li>
              <form class="form-inline">
                <div class="form-group d-lg-flex d-block mb-3 mb-sm-0">
                  <label class="justify-content-start pe-2 mb-sm-0 mb-2">Sort by: </label>
                  <div class="short-by">
                    <select class="form-control basic-select">
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
            <li><a href="index-half-map.html"><i class="fas fa-map-marker-alt fa-lg"></i></a></li>
            <li><a class="property-list-icon active" href="agency-list.html">
              <span></span>
              <span></span>
              <span></span>
            </a></li>
            <li><a class="property-grid-icon" href="agency-grid.html">
              <span></span>
              <span></span>
              <span></span>
            </a></li>
          </ul>
        </div>
        <div class="agent agent-03 mt-4">
          <div class="row g-0">
            <div class="col-lg-4 text-center border-end">
              <div class="d-flex flex-column h-100">
                <div class="agent-avatar p-3 my-auto">
                  <img class="img-fluid rounded-circle" src="images/agency/01.png" alt=""/>
                </div>
                <div class="agent-listing text-center mt-auto">
                  <a href="#"><strong class="text-primary me-2 d-inline-block">15</strong>Listed Properties </a>
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="d-flex h-100 flex-column">
                <div class="agent-detail">
                  <div class="d-sm-flex">
                    <div class="agent-name">
                      <h5> <a href="agency-detail.html">Duplex estates</a></h5>
                      <span><i class="fas fa-map-marker-alt fa-xs pe-2"></i> Virginia drive temple hills</span>
                    </div>
                    <div class="agent-social ms-auto mt-2 mt-sm-0">
                      <ul class="list-unstyled list-inline">
                        <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i> </a></li>
                        <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i> </a></li>
                        <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin"></i> </a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="agent-info">
                    <p class="mt-3 mb-3">Figure out what you want, put a plan together to achieve it, understand the cost, believe in yourself then.</p>
                    <ul class="list-unstyled mb-0">
                      <li><strong>Office: </strong>(123) 345-6789</li>
                      <li><strong>Fax: </strong>(123) 345-6789</li>
                      <li><strong>Email: </strong>support@realvilla.demo </li>
                    </ul>
                    <ul class="list-unstyled mb-0">
                      <li><strong>Mobile: </strong>(456) 478-2589</li>
                      <li><strong>WhatsApp: </strong>(456) 478-2589</li>
                    </ul>
                  </div>
                </div>
                <div class="agent-button">
                  <a class="btn btn-light btn-lg d-grid" href="agency-detail.html">View Profile</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="agent agent-03 mt-4">
          <div class="row g-0">
            <div class="col-lg-4 text-center border-end">
              <div class="d-flex flex-column h-100">
                <div class="agent-avatar p-3 my-auto">
                  <img class="img-fluid rounded-circle" src="images/agency/02.png" alt=""/>
                </div>
                <div class="agent-listing text-center mt-auto">
                  <a href="#"><strong class="text-primary me-2 d-inline-block">12</strong>Listed Properties </a>
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="d-flex h-100 flex-column">
                <div class="agent-detail">
                  <div class="d-sm-flex">
                    <div class="agent-name">
                      <h5> <a href="agency-detail.html">Business estates </a></h5>
                      <span><i class="fas fa-map-marker-alt fa-xs pe-2"></i> West Indian Summer St. Missoula</span>
                    </div>
                    <div class="agent-social ms-auto mt-2 mt-sm-0">
                      <ul class="list-unstyled list-inline">
                        <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i> </a></li>
                        <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i> </a></li>
                        <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin"></i> </a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="agent-info">
                    <p class="mt-3 mb-3">Step out on to the path to your left. Where there is no change. Briefly imagine that you are not.</p>
                    <ul class="list-unstyled mb-0">
                      <li><strong>Office: </strong>(123) 345-6789</li>
                      <li><strong>Fax: </strong>(123) 345-6789</li>
                      <li><strong>Email: </strong>support@realvilla.demo </li>
                    </ul>
                    <ul class="list-unstyled mb-0">
                      <li><strong>Mobile: </strong>(456) 478-2589</li>
                      <li><strong>WhatsApp: </strong>(456) 478-2589</li>
                    </ul>
                  </div>
                </div>
                <div class="agent-button">
                  <a class="btn btn-light btn-lg d-grid" href="agency-detail.html">View Profile</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="agent agent-03 mt-4">
          <div class="row g-0">
            <div class="col-lg-4 text-center border-end">
              <div class="d-flex flex-column h-100">
                <div class="agent-avatar p-3 my-auto">
                  <img class="img-fluid rounded-circle" src="images/agency/03.png" alt=""/>
                </div>
                <div class="agent-listing text-center mt-auto">
                  <a href="#"><strong class="text-primary me-2 d-inline-block">32</strong>Listed Properties </a>
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="d-flex h-100 flex-column">
                <div class="agent-detail">
                  <div class="d-sm-flex">
                    <div class="agent-name">
                      <h5> <a href="agency-detail.html">Green house </a></h5>
                      <span><i class="fas fa-map-marker-alt fa-xs pe-2"></i> Fairground St. North Bergen, NJ</span>
                    </div>
                    <div class="agent-social ms-auto mt-2 mt-sm-0">
                      <ul class="list-unstyled list-inline">
                        <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i> </a></li>
                        <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i> </a></li>
                        <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin"></i> </a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="agent-info">
                    <p class="mt-3 mb-3">Really experience that. See what you see, hear what you hear, feel the feelings. Disappointment? Anger?</p>
                    <ul class="list-unstyled mb-0">
                      <li><strong>Office: </strong>(123) 345-6789</li>
                      <li><strong>Fax: </strong>(123) 345-6789</li>
                      <li><strong>Email: </strong>support@realvilla.demo </li>
                    </ul>
                    <ul class="list-unstyled mb-0">
                      <li><strong>Mobile: </strong>(456) 478-2589</li>
                      <li><strong>WhatsApp: </strong>(456) 478-2589</li>
                    </ul>
                  </div>
                </div>
                <div class="agent-button">
                  <a class="btn btn-light btn-lg d-grid" href="agency-detail.html">View Profile</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <ul class="pagination mt-5">
              <li class="page-item disabled me-auto">
                <span class="page-link b-radius-none">Prev</span>
              </li>
              <li class="page-item active" aria-current="page"><span class="page-link">1 </span> <span class="sr-only">(current)</span></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item ms-auto">
                <a class="page-link b-radius-none" href="#">Next</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* <!--=================================
Listing – list view --> */}

    </>
}