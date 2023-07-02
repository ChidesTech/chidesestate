import { ChangeEventHandler } from "react"
import IPropertyInterface from "../interfaces/IPropertyInterface"

interface PropsInterface{
    galleryType : string,
    uploadingPhoto : boolean,
    uploadedPhoto : boolean,
    property : IPropertyInterface,
    fileInputChangeHandler : ChangeEventHandler<HTMLInputElement> 
}

export default function SubmitPhotoGallery(props : PropsInterface){
    return <>
                      {props.galleryType === "photo" && <>
                      <div className="input-group file-upload">
                        <input name="photo" onChange={props.fileInputChangeHandler} type="file" accept="image/*" className="form-control" id="customFile" />
                        <label className="input-group-text" htmlFor="customFile">Choose Photo</label>
                      </div>

                      <div className="mt-4 text-center">
                        {props.uploadingPhoto && <h2 style={{ fontSize: "1.2rem" }} className="">
                          Processing Image <span style={{ letterSpacing: "7px" }}>...</span>  </h2>}
                        {props.uploadedPhoto && <h2 style={{ fontSize: "1.2rem" }} className="alert alert-success p-2">
                          Done</h2>}
                      </div>


                      <section className="space-pb mt-4">
                        <div className="container">
                          <div className="row">
                            {props.property.images.map((image , i ) => {
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
                    {/* ============= Photo Gallery Ends  =============  */}</>
}