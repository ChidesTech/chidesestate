import React, { ChangeEvent, useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProperty } from "../api/PropertyApi";
import DashboardMenu from "../components/DashboardMenu";
import IPropertyInterface from "../interfaces/IPropertyInterface";
import Compressor from "compressorjs";
import axios from "axios";
import Swal from "sweetalert2";
import BreadCrumb from "../components/BreadCrumb";
import SubmitPhotoGallery from "../components/SubmitPhotoGallery";
import SubmitVideoGallery from "../components/SubmitVideoGallery";
import SubmitLocation from "../components/SubmitLocation";
import SubmitDetailedInformation from "../components/SubmitDetailedInformation";
import SubmitBasicInformation from "../components/SubmitBasicInformation";
import SubmitFloorPlan from "../components/SubmitFloorPlan";

const SubmitPropertyPage: React.FC = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
  const [feature, setFeature] = useState<string>("");
  const [uploadingCoverPhoto, setUploadingCoverPhoto] = useState<boolean>(false);
  const [uploadedCoverPhoto, setUploadedCoverPhoto] = useState<boolean>(false);
  const [uploadingPhoto, setUploadingPhoto] = useState<boolean>(false);
  const [uploadedPhoto, setUploadedPhoto] = useState<boolean>(false);
  const [galleryType, setGalleryType] = useState<string>("photo");

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


    {/* <!--========== Submit Property ========== --> */}
    <BreadCrumb page="Submit Property" />
    <section className="space-ptb">
      <div className="container">
        <div className="row">
          <DashboardMenu page="submit-property" />
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
                  <SubmitBasicInformation handleInputChange={handleInputChange}
                    fileInputChangeHandler={fileInputChangeHandler}
                    handleSelectChange={handleSelectChange}
                    uploadingCoverPhoto={uploadingCoverPhoto}
                    uploadedCoverPhoto={uploadedCoverPhoto}
                  />
                  {/* ============================ BASIC INFORMATION ENDS ============================== */}

                  {/* ============================GALLERY STARTS ============================== */}
                  <div className="tab-pane fade" id="tab-02" role="tabpanel" aria-labelledby="tab-02-tab">
                    <div className="switch">
                      <div onClick={() => setGalleryType("photo")} className={galleryType === "photo" ? "chosen-gallery-type" : ""}><i className="fa fa-camera"></i> Photo</div>
                      <div onClick={() => setGalleryType("video")} className={galleryType === "video" ? "chosen-gallery-type" : ""}><i className="fa fa-video"></i> Video</div>
                    </div>
                    {/* ============= Photo Gallery Starts  =============  */}
                    <SubmitPhotoGallery
                      fileInputChangeHandler={fileInputChangeHandler}
                      galleryType={galleryType}
                      uploadingPhoto={uploadingPhoto}
                      uploadedPhoto={uploadedPhoto}
                      property={property} />
                    {/* ============= Photo Gallery Ends  =============  */}

                    {/* ============= Video Gallery Starts  =============  */}
                    <SubmitVideoGallery fileInputChangeHandler={fileInputChangeHandler}
                      galleryType={galleryType}
                      uploadingPhoto={uploadingPhoto}
                      uploadedPhoto={uploadedPhoto}
                      property={property} />
                    {/* ============= Video Gallery Ends  =============  */}
                  </div>
                  {/* ============================GALLERY ENDS ============================== */}

                  {/* ============================LOCATION STARTS ============================== */}
                  <SubmitLocation />
                  {/* ============================ LOCATION ENDS ============================== */}


                  {/* ============================ DETAILED INFORMATION STARTS  ============================== */}
                  <SubmitDetailedInformation />
                  {/* ============================ DETAILED INFORMATION ENDS  ============================== */}


                  {/* ============================ FLOORPLAN STARTS  ============================== */}
                  <SubmitFloorPlan/>
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


export default SubmitPropertyPage;