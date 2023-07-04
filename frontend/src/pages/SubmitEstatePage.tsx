import React, { ChangeEvent, useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProperty } from "../api/PropertyApi";
import DashboardMenu from "../components/DashboardMenu";
import IPropertyInterface from "../interfaces/IPropertyInterface";
import Compressor from "compressorjs";
import axios from "axios";
import Swal from "sweetalert2";
import BreadCrumb from "../components/BreadCrumb";

const SubmitEstatePage: React.FC = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
  const [feature, setFeature] = useState<string>("");
  const [uploadingCoverPhoto, setUploadingCoverPhoto] = useState<boolean>(false);
  const [uploadedCoverPhoto, setUploadedCoverPhoto] = useState<boolean>(false);
  const [uploadingPhoto, setUploadingPhoto] = useState<boolean>(false);
  const [uploadedPhoto, setUploadedPhoto] = useState<boolean>(false);
  const [galleryType, setGalleryType] = useState("photo");


  const navigate = useNavigate();

  const initialPropertyState = {
    _id: null, title: "", type: "", status: "", address: "", price: 0, cover: "", images: [], videos: [],
    description: "", bathrooms: 0, bedrooms: 0, garages: 0, features: [], details: [], period: ""
  }
  const [property, setProperty] = useState<IPropertyInterface>(initialPropertyState);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e)
  }
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    alert("Changed");
    handleChange(e);
  }
  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    handleChange(e);
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "image")
      setProperty({ ...property, [name]: property.images.unshift(value) });

    if (name === "video") {
      setProperty({ ...property, [name]: property.videos.unshift(value) });
    }
    setProperty({ ...property, [name]: value });
  }


  const addFeature = () => {
    setProperty({ ...property, features: [...property.features, feature] });
    setFeature("");
  }
  const resetFeatures = () => {
    setProperty({ ...property, features: [] });
  }



  const submitHandler = async () => {
    try {
      const { data } = await createProperty(property);
      if (data.success) {
        Swal.fire("Done", "Property Submitted Successfully", "success");
        navigate("/properties-management");

      }
    } catch (error) {

    }

  }


  function fileInputChangeHandler(e: any) {

    const file = e.target.files[0];
    new Compressor(file, {
      quality: 0.6, //  Its not recommended to go below 0.6.
      success: (compressedResult: any) => {
        uploadPhoto(compressedResult, e.target.name);
      },
    });
  }

  async function uploadPhoto(file: any, imageType: string) {
    { imageType === "cover-photo" && setUploadingCoverPhoto(true) };
    { imageType === "photo" && setUploadingPhoto(true) };
    { imageType === "cover-photo" && setUploadedCoverPhoto(false) };
        { imageType === "photo" && setUploadedPhoto(false) };
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "chidespencils");
    data.append("cloud_name", "chidestech");
    axios.post("https://api.cloudinary.com/v1_1/chidestech/image/upload", data)
      .then(response => {
        if (imageType === "cover-photo") {
          setProperty({ ...property, cover: response.data.url });
        } else if (imageType === "photo") {
          setProperty({ ...property, images: [...property.images, response.data.url] });
        }

        { imageType === "cover-photo" && setUploadingCoverPhoto(false) };
        { imageType === "photo" && setUploadingPhoto(false) };
        { imageType === "cover-photo" && setUploadedCoverPhoto(true) };
        { imageType === "photo" && setUploadedPhoto(true) };
      })
      .catch(error => {
        Swal.fire("Error", "Failed To Process Image", "error");
        { imageType === "cover-photo" && setUploadingCoverPhoto(false) };
        { imageType === "photo" && setUploadingPhoto(false) };
      })
  }



  useEffect(() => {
    !userInfo._id && navigate("/login")
  }, []);

  return <>
    {/* <div className="account-page">
      <div className="account_menu account_menu__normal">
        <a href="#" className="js-toggle-menu">
          <div className="account_menu_agent">
            <div className="agent-avatar">
              <img src="images/userpic.png" alt="user" />
              <div className="agent-status status-online"></div>
            </div>
            <h2 style={{ textTransform: "uppercase" }}>{userInfo.username && userInfo.username}</h2>
            <i className="material-icons js-test-toggle sm-visible"></i>

          </div>
        </a>
        <DashboardMenu />
      </div>



      <div id="submit"

      >
        <div className="submit-wrapper">
          <h1 className="account-header-top">Submit new property</h1>
          <div className="submit-content">
            <div className="property-block">
              <p className="property-type">Farm</p>
              <p className="property-title">{property.title || "Title"}</p>
              <div className="apartment-address">
                <i className="material-icons">place</i>
                <span className="address">{property.address || "Location"}</span>
              </div>

              <div className="apartment-image">
                <img src={property.cover || "images/image.png"} alt="image" />
                <div className="badges">

                  <p className="rent">{property.status}</p>

                </div>

              </div>

              <div className="apartment-values">
                <span>Beds: {property.bedrooms || 0}</span>
                <span>Bath: {property.bathrooms || 0} </span>
                <span>Sq Ft: 2100</span>
              </div>
              <div className="apartment-info">
                <div className="apartment-price">
                  <p className="price-small">&#163;{property.price}{property.period && `/${property.period}`}</p>
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
                  <span> 2 days ago</span>
                </div>
              </div>
            </div>
            <div className="submit-property-wild-block">
              <div className="property-img-drag-drop">
                <h2 className="submit-property__block-header">Property Cover Photo</h2>
                {uploadingCoverPhoto && <h2 style={{ fontSize: "1.6rem" }} className="submit-property__block-header">
                  Processing Image <span style={{ letterSpacing: "7px" }}>...</span>  </h2>}
                {uploadedCoverPhoto && <h2 style={{ fontSize: "1.6rem" }} className="submit-property__block-header">
                  Image Processed Successfully.</h2>}
                <div className="styling-file-input">
                  <label>
                    <span className="drag-span"> Drag and drop image here or</span>
                    <span style={{ cursor: "pointer" }} className="select-span">Select Image</span>
                    <input name="cover-photo" onChange={fileInputChangeHandler} className="style-file-input" type="file" />
                  </label>
                </div>

              </div>
              <div className="general-property-info">
                <h2 className="submit-property__block-header">General Property Info</h2>
                <div className="prop-type">
                  <p className="input-header">Property Title</p>
                  <input name="title" onChange={handleInputChange} type="text" />
                </div>


                <div className="select-type">
                  <p className="input-header">Type</p>
                  <select name="type" onChange={handleSelectChange} className="property-select big-input select-input" data-placeholder="type">
                    <option value="">---- Select Type ----</option>
                    <option value="land">Land</option>
                    <option value="apartment">Apartment</option>
                    <option value="building">Building</option>
                    <option value="farm">Farm</option>
                    <option value="condo">Condo</option>
                    <option value="multi-family-house">Multi Family House</option>
                    <option value="townhouse">Townhouse</option>
                  </select>
                </div>
                <div className="select-status">
                  <p className="input-header">Status</p>
                  <select name="status" onChange={handleSelectChange} className="status-select big-input select-input badge-test"
                    data-placeholder="status">
                    <option value="" data-text="small-badge sale">---- Select Status ----</option>
                    <option value="sale" data-text="small-badge sale">For Sale</option>
                    <option value="rent" data-text="small-badge rent">For Rent</option>
                    <option value="new" data-text="small-badge new">New</option>
                    <option value="featured" data-text="small-badge featured">Featured</option>
                    <option value="reused" data-text="small-badge reused">Reused</option>
                    <option value="hot" data-text="small-badge hot">Hot Offer</option>
                  </select>
                </div>


                <div className="location">
                  <p className="input-header">Location</p>
                  <input name="location" onChange={handleInputChange} type="text" />
                </div>

                <div className="map-btn">
                  <button className="button-secondary">Select on google map</button>
                </div>
                <div className="price-full">
                  <p className="input-header">Price</p>
                  <input name="price" onChange={handleInputChange} className="price-select big-input select-input" data-placeholder="type" />
                </div>

                <div className="price-value">
                  <p className="input-header">Period</p>
                  <select name="period" onChange={handleSelectChange} className="value-select big-input select-input" data-placeholder="type">
                    <option value="">---- Select Period ----</option>
                    <option value="week">Per Day</option>
                    <option value="value2">Per Week</option>
                    <option value="value3">Per Month</option>
                    <option value="value4">Quaterly</option>
                    <option value="value5">Half A Year</option>
                    <option value="value5">Annually</option>
                  </select>
                </div>

              </div>







              <div className="description-textarea">
                <h2 className="submit-property__block-header">Description</h2>
                <textarea id="editor" className="text-editor" onChange={handleTextAreaChange}
                  placeholder="Description" ></textarea>
              </div>
              <div className="property-details-block">
                <h2 className="submit-property__block-header">Details</h2>
                <div className="prop-id">
                  <p className="input-header">Property Area</p>
                  <input type="text" />
                </div>
                <div className="prop-size">
                  <p className="input-header">Year Built</p>
                  <input type="text" />
                </div>
                <div className="prop-year">
                  <p className="input-header">Year Built</p>
                  <input type="text" />
                </div>

                <div className="prop-bathrooms">
                  <div className="options-wrapper bathrooms">
                    <div className="prop-wrapper">
                      <span className="properties">Bathrooms: </span>
                    </div>
                    <input type="number" id="bathrooms" name="bathrooms" onChange={handleInputChange} data-type="single"
                      data-min="0" data-max="10" data-from="5" />
                  </div>
                </div>
                <div className="prop-bedrooms">
                  <div className="options-wrapper bedrooms">
                    <div className="prop-wrapper">
                      <span className="properties">Bedrooms: </span>
                    </div>
                    <input type="number" name="bathrooms" onChange={handleInputChange} id="bedrooms" data-type="single"
                      data-min="0" data-max="10" data-from="3" />
                  </div>
                </div>
                <div className="prop-garages">
                  <div className="options-wrapper garages">
                    <div className="prop-wrapper">
                      <span className="properties">Garages: </span>
                      <span className="js-first-0">200k</span>
                    </div>
                    <input type="text" id="garages" onChange={handleInputChange} name="garages" data-type="single"
                      data-min="0" data-max="10" data-from="2" />
                  </div>
                </div>


              </div>

              <div className="additional-details">

                <h2 className="submit-property__block-header">Property Features</h2>
                <div className="additional-details_components">
                  <input value={feature} type="text" name="feature" onChange={e => setFeature(e.target.value)} placeholder="Add Feature" />

                </div>
                <div style={{ display: "flex", justifyContent: "space-between", margin: "1rem" }} >
                  <button onClick={addFeature} className="button-secondary"> Add Feature</button>
                  <button onClick={resetFeatures} className="button-secondary "> Reset</button>
                </div>


              </div>

              <div className="property-features-block">
                <div className="checkboxes-block">
                  {property.features.map((feature, i) => {
                    return <div key={i}>
                      <input checked type="checkbox" name="conditioning" id="c-h1" className="css-checkbox" />
                      <label htmlFor="c-h1" className="css-label css-checkbox">{feature}</label> <br />
                    </div>
                  })}

                </div>
              </div>


              <div className="property-img-drag-drop">
                <h2 className="submit-property__block-header">Property Images</h2>
                {uploadingPhoto && <h2 style={{ fontSize: "1.6rem" }} className="submit-property__block-header">
                  Processing Image <span style={{ letterSpacing: "7px" }}>...</span>  </h2>}
                {uploadedPhoto && <h2 style={{ fontSize: "1.6rem" }} className="submit-property__block-header">
                  Image Processed Successfully.</h2>}
                <div className="styling-file-input">
                  <label>
                    <span className="drag-span"> Drag and drop images here or</span>
                    <span className="select-span">Select Image</span>
                    <input name="photo" onChange={fileInputChangeHandler} className="style-file-input" type="file" />

                  </label>
                </div>
                <div className="image-miniatures-grid">

                  {property.images.length === 0 ? <h3>No Image Added</h3> :
                    property.images.map((image, i) => {
                      return <div key={i} className="image-miniature">
                        <img src={image} alt="image" />
                        <div className="mask">
                          <i className="material-icons mask-controls">done</i>
                          <i className="material-icons mask-controls">close</i>
                        </div>
                      </div>
                    })

                  }



                </div>
              </div>


              <div className="submit-property-btns">
                <div>

                </div>

                <div onClick={submitHandler} className="button-link-primary-icon">
                  <i className="material-icons">done_all</i>
                  <span>Submit property</span>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div> */}

    {/* <!--=================================
Submit Property --> */}
    <BreadCrumb page="Submit Estate" />
    <section className="space-ptb">
      <div className="container">
        <div className="row">
          <DashboardMenu page="submit-estate" />
          <div className="col-md-12">
            <div className="section-title d-flex align-items-center">
              <h2>Submit Property</h2>
            </div>
            <div className="row">
              <div className="col-12">
                <ul className="nav nav-tabs nav-tabs-03 nav-fill" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="tab-01-tab" data-bs-toggle="tab" href="#tab-01" role="tab" aria-controls="tab-01" aria-selected="true">
                      <span>01</span>
                      Basic Information
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="tab-02-tab" data-bs-toggle="tab" href="#tab-02" role="tab" aria-controls="tab-02" aria-selected="false">
                      <span>02</span>
                      Gallery</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="tab-03-tab" data-bs-toggle="tab" href="#tab-03" role="tab" aria-controls="tab-03" aria-selected="false"
                    ><span>03</span>
                      Location</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="tab-04-tab" data-bs-toggle="tab" href="#tab-04" role="tab" aria-controls="tab-04" aria-selected="false">
                      <span>04</span>
                      Detailed Information</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="tab-05-tab" data-bs-toggle="tab" href="#tab-05" role="tab" aria-controls="tab-05" aria-selected="false">
                      <span>05</span>
                      Floorplans</a>
                  </li>
                </ul>
                <div className="tab-content mt-4" id="myTabContent">
                  {/* ============================ BASIC INFORMATION STARTS ============================== */}
                  <div className="tab-pane fade show active" id="tab-01" role="tabpanel" aria-labelledby="tab-01-tab">
                    <form>
                      <div className="row">
                        <div className="" style={{ marginBottom: "6rem" }} >
                          <label className="form-label">Cover Photo</label>
                          <label style={{ textAlign: "center" }} className="input-group file-upload" >
                            <input name="cover-photo" onChange={fileInputChangeHandler} type="file" className="form-control pt-5 pb-5" id="customFile" />
                            <label style={{ height: "8rem", textAlign: "center", borderStyle: "dashed", borderRadius: "6px", borderColor: "grey" }} className="input-group-text" htmlFor="customFile">Drag And Drop Image Here Or Click To Browse</label>
                          </label>
                        </div>
                        <div className="mb-3 col-md-6" >
                          <label className="form-label">Property Title </label>
                          <input name="title" onChange={handleInputChange} type="text" className="form-control" placeholder="Property Title" />
                        </div>

                        <div className="mb-3 col-md-6 select-border">
                          <label className="form-label">Property Type</label>
                          <select name="type" onChange={handleSelectChange} className="form-control search-form-select">
                            <option value="">---- Select Type ----</option>
                            <option value="land">Land</option>
                            <option value="apartment">Apartment</option>
                            <option value="building">Building</option>
                            <option value="farm">Farm</option>
                            <option value="condo">Condo</option>
                            <option value="multi-family-house">Multi Family House</option>
                            <option value="townhouse">Townhouse</option>
                          </select>
                        </div>
                        <div className="mb-3 col-md-6 select-border">
                          <label className="form-label">Property Status</label>
                          <select name="status" onChange={handleSelectChange} className="form-control search-form-select">
                            <option value="" >------ Select Status ------</option>
                            <option value="sale" >For Sale</option>
                            <option value="rent" >For Rent</option>
                            <option value="new" >New</option>
                            <option value="featured">Featured</option>
                            <option value="reused">Reused</option>
                            <option value="hot">Hot Offer</option>
                          </select>
                        </div>
                        <div className="mb-3 col-md-6">
                          <label className="d-block form-label">Property price </label>
                          <div className="input-group input-group-box">
                            <div className="input-group-text"><i className="fas fa-dollar-sign"></i></div>
                            <input name="price" onChange={handleInputChange} type="text" className="form-control" placeholder="Property Price" />
                          </div>
                        </div>

                        <div className="mb-3 col-md-6 select-border">
                          <label className="form-label">Purchase/Rental Period</label>
                          <select name="period" onChange={handleSelectChange} className="form-control search-form-select">
                            <option value="day" selected>Daily</option>
                            <option value="week">Weekly</option>
                            <option value="month">Monthly</option>
                            <option value="year">Yearly</option>
                          </select>
                        </div>




                        <div className="mb-3 col-md-6">
                          <label className="form-label">Bedrooms</label>
                          <input className="form-control" name="bedrooms" onChange={handleInputChange} type="number" placeholder="No. Of Bedrooms" />
                        </div>

                        <div className="mb-3 col-md-6">
                          <label className="form-label">Bathrooms</label>
                          <input className="form-control" name="bathrooms" onChange={handleInputChange} type="number" placeholder="No. Of Bathrooms" />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label className="form-label">Location</label>
                          <input className="form-control" name="location" onChange={handleInputChange} placeholder="Location" />
                        </div>
                       
                      </div>
                    </form>
                  </div>
                  {/* ============================ BASIC INFORMATION ENDS ============================== */}

                  {/* ============================GALLERY STARTS ============================== */}
                  <div className="tab-pane fade" id="tab-02" role="tabpanel" aria-labelledby="tab-02-tab">
                    <div className="switch">
                      <div onClick={() => setGalleryType("photo")} className={galleryType === "photo" ? "chosen-gallery-type" : ""}><i className="fa fa-camera"></i> Photo</div>
                      <div onClick={() => setGalleryType("video")} className={galleryType === "video" ? "chosen-gallery-type" : ""}><i className="fa fa-video"></i> Video</div>
                    </div>
                    {/* ============= Photo Gallery Starts  =============  */}
                    {galleryType === "photo" && <>
                      <div className="input-group file-upload">
                        <input name="photo" onChange={fileInputChangeHandler} type="file" accept="image/*" className="form-control" id="customFile" />
                        <label className="input-group-text" htmlFor="customFile">Choose Photo</label>
                      </div>

                      <div className="mt-4 text-center">
                        {uploadingPhoto && <h2 style={{ fontSize: "1.2rem" }} className="">
                          Processing Image <span style={{ letterSpacing: "7px" }}>...</span>  </h2>}
                        {uploadedPhoto && <h2 style={{ fontSize: "1.2rem" }} className="alert alert-success p-2">
                          Done</h2>}
                      </div>
 

                      <section className="space-pb mt-4">
                        <div className="container">
                          <div className="row">
                            {property.images.map((image, i) => {
                              return <div className="col-md-3 mb-4 mb-lg-2">
                                <a href="property-grid.html">
                                  <div className="location-item bg-overlay-gradient bg-holder" style={{
                                    backgroundImage: `url(${image})`,
                                    backgroundSize: "contain", backgroundRepeat: "no-repeat"
                                  }}>


                                  </div>
                                </a>
                              </div>
                            })}

                            <div className="col-md-3 mb-4 mb-lg-2">
                              <a href="property-grid.html">
                                <div className="location-item bg-overlay-gradient bg-holder" style={{ backgroundImage: "url(images/location/01.jpg)" }}>
                                  <div className="location-item-info">
                                    {/* <h5 className="location-item-title">Mumbai</h5> */}
                                    <div><i className="fa fa-expand"></i></div>
                                    <div><i className="fa fa-trash-alt delete"></i></div>
                                  </div>
                                </div>
                              </a>
                            </div>

                            <div className="col-md-3 mb-4 mb-md-2">
                              <a href="property-grid.html">
                                <div className="location-item bg-overlay-gradient bg-holder" style={{ backgroundImage: "url(images/location/02.jpg)" }}>
                                </div>
                              </a>
                            </div>


                          </div>

                        </div>
                      </section>


                    </>
                    }
                    {/* ============= Photo Gallery Ends  =============  */}


                    {/* ============= Video Gallery Starts  =============  */}
                    {galleryType === "video" &&
                      <div className="input-group file-upload">
                        <input name="video" onChange={fileInputChangeHandler} type="file" className="form-control" id="customFile" />
                        <label className="input-group-text" htmlFor="customFile">Choose Video</label>
                      </div>
                    }
                    {/* ============= Video Gallery Ends  =============  */}
                  </div>
                  {/* ============================GALLERY ENDS ============================== */}

                  {/* ============================LOCATION STARTS ============================== */}
                  <div className="tab-pane fade" id="tab-03" role="tabpanel" aria-labelledby="tab-03-tab">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8351288872545!2d144.9556518!3d-37.8173306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1443621171568" style={{ border: 0, width: "100%", height: "250px" }}></iframe>
                    <form>
                      <div className="row mt-4">
                        <div className="mb-3 col-md-6">
                          <label className="form-label">Google Maps Address </label>
                          <input type="text" className="form-control" placeholder="Envato" />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label className="form-label">Friendly Address </label>
                          <input type="text" className="form-control" placeholder="Envato market" />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label className="form-label">Longitude </label>
                          <input type="text" className="form-control" placeholder="-102.243340" />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label className="form-label">Latitude </label>
                          <input type="text" className="form-control" placeholder="21.852270" />
                        </div>
                        <div className="mb-3 col-md-12 select-border">
                          <label className="form-label">Regions</label>
                          <select className="form-control search-form-select">
                            <option value="value 01" selected>Los angeles</option>
                            <option value="value 02">Miami</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* ============================ LOCATION ENDS ============================== */}


                  {/* ============================ DETAILED INFORMATION STARTS  ============================== */}
                  <div className="tab-pane fade" id="tab-04" role="tabpanel" aria-labelledby="tab-04-tab">
                    <form>
                      <div className="row mt-4">
                        <div className="mb-3 col-md-6 select-border">
                          <label className="form-label">Building age</label>
                          <select className="form-control search-form-select">
                            <option value="value 01" selected>10 to 18 years</option>
                            <option value="value 02">10 to 18 years</option>
                          </select>
                        </div>
                        <div className="mb-3 col-md-6 select-border">
                          <label className="form-label">Bedrooms</label>
                          <select className="form-control search-form-select">
                            <option value="value 01" selected>1</option>
                            <option value="value 02">2</option>
                          </select>
                        </div>
                        <div className="mb-3 col-md-6 select-border">
                          <label className="form-label">Bathrooms</label>
                          <select className="form-control search-form-select">
                            <option value="value 01" selected>1</option>
                            <option value="value 02">2</option>
                          </select>
                        </div>
                        <div className="mb-3 col-md-6">
                          <label className="form-label">Parking </label>
                          <input type="text" className="form-control" placeholder="Parking" />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label className="form-label">Cooling </label>
                          <input type="text" className="form-control" placeholder="Cooling" />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label className="form-label">Heating </label>
                          <input type="text" className="form-control" placeholder="Heating" />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label className="form-label">Sewer </label>
                          <input type="text" className="form-control" placeholder="Sewer" />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label className="form-label">Water </label>
                          <input type="text" className="form-control" placeholder="Water" />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label className="form-label">Exercise Room </label>
                          <input type="text" className="form-control" placeholder="Exercise Room" />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label className="form-label">Storage Room </label>
                          <input type="text" className="form-control" placeholder="Storage Room" />
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* ============================ DETAILED INFORMATION ENDS  ============================== */}


                  {/* ============================ FLOORPLAN STARTS  ============================== */}
                  <div className="tab-pane fade" id="tab-05" role="tabpanel" aria-labelledby="tab-05-tab">
                    <form>
                      <div className="row">
                        <div className="mb-3 col-md-6">
                          <label className="form-label">Browser file</label>
                          <div className="input-group file-upload">
                            <input type="file" className="form-control" id="customFile" />
                            <label className="input-group-text" htmlFor="customFile">Choose file</label>
                          </div>
                        </div>
                        <div className="mb-3 col-md-6">
                          <label className="form-label">Floorplan Title </label>
                          <input type="text" className="form-control" placeholder="Awesome family home" />
                        </div>
                        <div className="mb-3 col-md-12">
                          <label className="form-label">Area</label>
                          <input className="form-control" placeholder="Type (sq ft)" />
                        </div>
                        <div className="mb-3 col-md-12">
                          <label className="form-label">Description</label>
                          <textarea className="form-control" rows={4} placeholder="Description"></textarea>
                        </div>
                      </div>
                    </form>
                    <a className="btn btn-primary mt-3" href="#"><i className="fas fa-plus-circle"></i> Upload floorplans</a>
                  </div>
                </div>
                <button onClick={submitHandler} className="btn btn-primary mt-3 w-100 text-center">SUBMIT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!--=================================
Submit Property --> */}

  </>



}


export default SubmitEstatePage;