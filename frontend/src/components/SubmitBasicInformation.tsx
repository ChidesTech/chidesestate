import { ChangeEventHandler } from "react"

interface PropsInterface{
   handleInputChange : ChangeEventHandler<HTMLInputElement>,
  fileInputChangeHandler : ChangeEventHandler<HTMLInputElement>,
  handleSelectChange: ChangeEventHandler<HTMLSelectElement>,
  uploadingCoverPhoto : boolean,
  uploadedCoverPhoto : boolean
}
export default function SubmitBasicInformation(props : PropsInterface){
    return <>
     <div className="tab-pane fade show active" id="tab-01" role="tabpanel" aria-labelledby="tab-01-tab">
                    <form>
                      <div className="row">
                        <div className="" style={{ marginBottom: "6rem" }} >
                        <div className="mt-4 text-center">
                        {props.uploadingCoverPhoto && <h2 style={{ fontSize: "1.2rem" }} className="">
                          Processing Image <span style={{ letterSpacing: "7px" }}>...</span>  </h2>}
                        {props.uploadedCoverPhoto && <h2 style={{ fontSize: "1.2rem" }} className="alert alert-success p-2">
                          Done</h2>}
                      </div>
                          <label className="form-label">Cover Photo</label>
                          <label style={{ textAlign: "center" }} className="input-group file-upload" >
                            <input name="cover-photo" onChange={props.fileInputChangeHandler} type="file" className="form-control pt-5 pb-5" id="customFile" />
                            <label style={{ height: "8rem", textAlign: "center", borderStyle: "dashed", borderRadius: "6px", borderColor: "grey" }} className="input-group-text" htmlFor="customFile">Drag And Drop Image Here Or Click To Browse</label>
                          </label>
                        </div>
                        <div className="mb-3 col-md-6" >
                          <label className="form-label">Property Title </label>
                          <input name="title" onChange={props.handleInputChange} type="text" className="form-control" placeholder="Property Title" />
                        </div>

                        <div className="mb-3 col-md-6 select-border">
                          <label className="form-label">Property Type</label>
                          <select name="type" onChange={props.handleSelectChange} className="form-control search-form-select">
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
                          <select name="status" onChange={props.handleSelectChange} className="form-control search-form-select">
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
                            <input name="price" onChange={props.handleInputChange} type="text" className="form-control" placeholder="Property Price" />
                          </div>
                        </div>

                        <div className="mb-3 col-md-6 select-border">
                          <label className="form-label">Purchase/Rental Period</label>
                          <select name="period" onChange={props.handleSelectChange} className="form-control search-form-select">
                            <option value="day" selected>Daily</option>
                            <option value="week">Weekly</option>
                            <option value="month">Monthly</option>
                            <option value="year">Yearly</option>
                          </select>
                        </div>




                        <div className="mb-3 col-md-6">
                          <label className="form-label">Bedrooms</label>
                          <input className="form-control" name="bedrooms" onChange={props.handleInputChange} type="number" placeholder="No. Of Bedrooms" />
                        </div>

                        <div className="mb-3 col-md-6">
                          <label className="form-label">Bathrooms</label>
                          <input className="form-control" name="bathrooms" onChange={props.handleInputChange} type="number" placeholder="No. Of Bathrooms" />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label className="form-label">Location</label>
                          <input className="form-control" name="location" onChange={props.handleInputChange} placeholder="Location" />
                        </div>

                      </div>
                    </form>
                  </div></>
}