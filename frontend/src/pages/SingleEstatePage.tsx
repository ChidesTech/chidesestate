import BreadCrumb from "../components/BreadCrumb";

export default function SingleEstatePage(){
    return <>
    <BreadCrumb page={"property.title"}/>
    <section className="space-ptb">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="agent agent-03">
          <div className="row g-0">
            <div className="col-md-3 text-center border-end">
              <div className="d-flex flex-column h-100">
                <div className="agent-avatar p-3 my-auto">
                  <img className="img-fluid rounded-circle" src="/images/agency/01.png" alt=""/>
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
                      <h2> <a href="#">Pomegranate real estates</a></h2>
                      <span>Company Agent</span>
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
                    <p className="mt-3 mb-3">We all carry a lot of baggage, thanks to our upbringing. The majority of people carry with them, an entire series of self-limiting beliefs that will absolutely stop, and hold them back from, success. Things like</p>
                    <p className="mt-3">“I’m not smart enough”, “I’m not lucky enough”, and the worst, “I’m not worthy” are but a few of the self-limiting beliefs I have encountered. We carry them with us like rocks in a knapsack, and then use them to sabotage our success. So, how twisted is that? One of the main areas that I work on with my clients is shedding these non-supportive beliefs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-md-4 mt-sm-5">
        <div className="p-4 bg-light">
          <div className="section-title mb-4">
            <h4>Contact Detail</h4>
          </div>
          <ul className="list-unstyled mb-0">
            <li className="mb-2"><strong className="text-dark d-inline-block me-2">Address:</strong>support@realvilla.demo</li>
            <li className="mb-2"><strong className="text-dark d-inline-block me-2">Website:</strong>potenzaglobalsolutions.com</li>
            <li className="mb-2"><strong className="text-dark d-inline-block me-2">Agency:</strong>Pomegranate real estates</li>
            <li className="mb-2"><strong className="text-dark d-inline-block me-2">Licenses:</strong>A42C3326</li>
            <li className="mb-2"><strong className="text-dark d-inline-block me-2">Phone:</strong>(123) 345-6789</li>
            <li className="mb-2"><strong className="text-dark d-inline-block me-2">Company:</strong>realvilla</li>
            <li><strong className="text-dark d-inline-block me-2">Office Number:</strong>(456) 478-2589</li>
          </ul>
        </div>
      </div>
      <div className="col-md-8 mt-5">
        <div className="section-title mb-4">
          <h4>Contact pomegranate real estates</h4>
        </div>
        <form>
          <div className="row">
            <div className="form-group col-md-4 mb-3">
              <input type="text" className="form-control" id="name" placeholder="Your name"/>
            </div>
            <div className="form-group col-md-4 mb-3">
              <input type="text" className="form-control" id="phone" placeholder="Your phone"/>
            </div>
            <div className="form-group col-md-4 mb-3">
              <input type="email" className="form-control" id="inputEmail4" placeholder="Your email"/>
            </div>
            <div className="form-group col-md-12 mb-3">
              <textarea className="form-control" rows={4} placeholder="Your message"></textarea>
            </div>
            <div className="col-md-12">
              <a className="btn btn-primary" href="#">Send message</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
{/* Overview */}
<section className="space-pb">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <ul className="nav nav-tabs mb-4" id="pills-tab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="overview-tab" data-bs-toggle="pill" href="#overview" role="tab" aria-controls="overview" aria-selected="true">Overview</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="listing-tab" data-bs-toggle="pill" href="#listing" role="tab" aria-controls="listing" aria-selected="false">Listing</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" id="agents-tab" data-bs-toggle="pill" href="#agents" role="tab" aria-controls="agents" aria-selected="false">Agents</a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" id="map-tab" data-bs-toggle="pill" href="#map" role="tab" aria-controls="map" aria-selected="false">Map</a>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
            <div className="row">
              <div className="col-md-6">
                <p>It is truly amazing the damage that we, as parents, can inflict on our children. So why do we do it? For the most part, we don’t do it intentionally or with malice. In the majority of cases, the cause is a well-meaning!</p>
                <p>Benjamin Franklin, inventor, statesman, writer, publisher and economist relates in his autobiography that early in his life he decided to focus on arriving at moral perfection. He made a list of 13 virtues, assigning a page to each. Under each virtue he wrote a summary that gave it fuller meaning. Then he practiced each one for a certain length of time. To make these virtues a habit, Franklin can up with a method to grade himself on his daily actions.</p>
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled list-style">
                  <li> <i className="far fa-check-circle font-md text-primary me-2 mb-3"></i> Franklin’s extraordinary success in life.</li>
                  <li> <i className="far fa-check-circle font-md text-primary me-2 mb-3"></i> Politics can be attributed to his perseverance.</li>
                  <li> <i className="far fa-check-circle font-md text-primary me-2 mb-3"></i> You will begin to realise why this exercise is.</li>
                  <li> <i className="far fa-check-circle font-md text-primary me-2 mb-3"></i> From twelve to one he read or overlooked his accounts and dined.</li>
                  <li> <i className="far fa-check-circle font-md text-primary me-2 mb-3"></i> From two to five he worked at his trade.</li>
                  <li> <i className="far fa-check-circle font-md text-primary me-2 mb-3"></i> Just have a think about something that you know.</li>
                </ul>
              </div>
              <div className="col-12">
                <p className="mb-0">Sint deserunt esse quibusdam quae ex error molestias fuga rem totam beatae accusantium placeat velit dignissimos necessitatibus labore facilis enim, eum aperiam ut laudantium, nisi cupiditate. Aliquam quos cum omnis explicabo voluptatem minus neque eaque rem animi ad, vitae porro, accusamus totam enim voluptate illum debitis pariatur autem perspiciatis dolore commodi natus. Natus nihil illum totam repellat id repudiandae, incidunt sed, ab autem dignissimos repellendus doloremque quaerat non suscipit animi fugit inventore facilis quos tempora in. Nesciunt nam deleniti similique quod quisquam deserunt.</p>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="listing" role="tabpanel" aria-labelledby="listing-tab">
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
                    <img className="img-fluid" src="/images/avatar/01.jpg" alt=""/>
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
                    <img className="img-fluid" src="/images/avatar/02.jpg" alt=""/>
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
                    <img className="img-fluid" src="/images/avatar/03.jpg" alt=""/>
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
       </div>
     </div>
          <div className="tab-pane fade" id="agents" role="tabpanel" aria-labelledby="agents-tab">
            <div className="row">
              <div className="col-md-4 mb-4 mb-md-0">
                <div className="agent text-center">
                  <div className="agent-detail">
                    <div className="agent-avatar avatar avatar-xllll">
                      <img className="img-fluid rounded-circle" src="/images/agent/01.jpg" alt=""/>
                    </div>
                    <div className="agent-info">
                      <h6 className="mb-0"> <a href="agent-detail.html">Rylan Tolbert </a></h6>
                      <span className="text-primary font-sm">Founder & CEO </span>
                      <p className="mt-3 mb-0">Figure out what you want, put a plan together to achieve it, understand the cost, believe in yourself.</p>
                    </div>
                  </div>
                  <div className="agent-button">
                    <a className="btn btn-light d-grid" href="agent-detail.html">View Profile</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 mb-md-0">
                <div className="agent text-center">
                  <div className="agent-detail">
                    <div className="agent-avatar avatar avatar-xllll">
                      <img className="img-fluid rounded-circle" src="/images/agent/02.jpg" alt=""/>
                    </div>
                    <div className="agent-info">
                      <h6 className="mb-0"> <a href="agent-detail.html">Felica queen </a></h6>
                      <span className="text-primary font-sm">Construction</span>
                      <p className="mt-3 mb-0">So, there you have it; the six steps that will help you to the fabled land of achievement and success.</p>
                    </div>
                  </div>
                  <div className="agent-button">
                    <a className="btn btn-light d-grid" href="agent-detail.html">View Profile</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 mb-md-0">
                <div className="agent text-center">
                  <div className="agent-detail">
                    <div className="agent-avatar avatar avatar-xllll">
                      <img className="img-fluid rounded-circle" src="/images/agent/03.jpg" alt=""/>
                    </div>
                    <div className="agent-info">
                      <h6 className="mb-0"> <a href="agent-detail.html">Paul flavius </a></h6>
                      <span className="text-primary font-sm">Investment</span>
                      <p className="mt-3 mb-0">Really experience that. See what you see, hear what you hear, feel the feelings imagining them.</p>
                    </div>
                  </div>
                  <div className="agent-button">
                    <a className="btn btn-light d-grid" href="agent-detail.html">View Profile</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="map" role="tabpanel" aria-labelledby="map-tab">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8351288872545!2d144.9556518!3d-37.8173306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1443621171568" style={{border: 0, width: "100%", height: "400px"}}></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
}