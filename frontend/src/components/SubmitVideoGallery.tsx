import { ChangeEventHandler } from "react"
import IPropertyInterface from "../interfaces/IPropertyInterface"

interface PropsInterface{
    galleryType : string,
    uploadingPhoto : boolean,
    uploadedPhoto : boolean,
    property : IPropertyInterface,
    fileInputChangeHandler : ChangeEventHandler<HTMLInputElement> 
}

export default function SubmitVideoGallery(props : PropsInterface){
    
    return <>{props.galleryType === "video" && <>
    <div className="input-group file-upload">
      <input name="video" onChange={props.fileInputChangeHandler} type="file" className="form-control" id="customFile" />
      <label className="input-group-text" htmlFor="customFile">Choose Video</label>
    </div>
    <section className="space-pb mt-4">
      <div className="container">
        <div className="row">
          {props.property.images.map((image, i) => {
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
        </div>
        <div className="gallery-videos">
          <div className="gallery-video">
            <video className="" style={{ width: "100%" }} src="/videos/video.mp4" controls></video>
          </div>
          <div className="gallery-video">
            <video className="" style={{ width: "100%" }} src="/videos/video.mp4" controls></video>
          </div>
          <div className="gallery-video">
            <video className="" style={{ width: "100%" }} src="/videos/video.mp4" controls></video>
          </div>
          <div className="gallery-video">
            <video className="" style={{ width: "100%" }} src="/videos/video.mp4" controls></video>
          </div>
        </div>
      </div>
    </section>
  </>
  }
  </> 
}