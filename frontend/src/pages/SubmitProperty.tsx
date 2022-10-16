import React, { ChangeEvent, useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProperty } from "../api/PropertyApi";
import DashboardMenu from "../components/DashboardMenu";
import IPropertyInterface from "../interfaces/IPropertyInterface";
import Compressor from "compressorjs";
import axios from "axios";
import Swal from "sweetalert2";

const SubmitProperty: React.FC = () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    const [feature, setFeature] = useState<string>("");
    const [uploadingCoverPhoto, setUploadingCoverPhoto] = useState<boolean>(false);
    const [uploadedCoverPhoto, setUploadedCoverPhoto] = useState<boolean>(false);
    const [uploadingPhoto, setUploadingPhoto] = useState<boolean>(false);
    const [uploadedPhoto, setUploadedPhoto] = useState<boolean>(false);


    const navigate = useNavigate();

    const initialPropertyState = {
        _id: null, title: "", type: "", status: "", location: "", price: 0, cover: "", images: [], videos: [],
        description: "", bathrooms: 0, bedrooms: 0, garages: 0, features: [], details: [], period: ""
    }
    const [property, setProperty] = useState<IPropertyInterface>(initialPropertyState);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        handleChange(e)
    }
    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        handleChange(e);
    }
    const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        handleChange(e);
    }

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        if (name === "image")
            setProperty({ ...property, [name]: property.images.push(value) });

        if (name === "video") {
            setProperty({ ...property, [name]: property.videos.push(value) });
        }
        setProperty({ ...property, [name]: value });
    }


    const addFeature = () =>{
        setProperty({ ...property, features: [...property.features, feature] });
        setFeature("");
    }
    const resetFeatures = () =>{
        setProperty({ ...property, features: [] });
    }

    

    const submitHandler = async () => {
        try {
            const { data } = await createProperty(property);
            if (data.success) {
                alert("Property Submitted Successfully");
                navigate("/my-properties");

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

    return <div className="account-page">
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
        //  className="js-content-blocks"
        >
            <div className="submit-wrapper">
                <h1 className="account-header-top">Submit new property</h1>
                <div className="submit-content">
                    <div className="property-block">
                        <p className="property-type">Farm</p>
                        <p className="property-title">{property.title || "Title"}</p>
                        <div className="apartment-address">
                            <i className="material-icons">place</i>
                            <span className="address">{property.location || "Location"}</span>
                        </div>

                        <div className="apartment-image">
                            <img src={property.cover || "images/image.png"} alt="image" />
                            <div className="badges">
                                {/* <p className="featured">Featured</p> */}
                                <p className="rent">{property.status}</p>
                                {/* <p className="sale">For Sale</p> */}
                            </div>

                        </div>

                        <div className="apartment-values">
                            <span>Beds: {property.bedrooms || 0}</span>
                            <span>Bath: {property.bathrooms || 0} </span>
                            <span>Sq Ft: 2100</span>
                        </div>
                        <div className="apartment-info">
                            <div className="apartment-price">
                                {/* <p className="price-big">&#163;1.245.000</p> */}
                                <p className="price-small">&#163;{property.price}{property.period && `/${property.period}`}</p>
                            </div>
                            {/* <div className="icons">
                                <a href="#" className="clone"> <i className="material-icons icons-style"></i></a>
                                <a href="#" className="heart"><i className="material-icons icons-style"></i></a>
                            </div> */}
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
                        {/* <!--property img drag and drop start--> */}
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
                            {/* <div className="select-label">
                                <p className="input-header">Label</p>
                                <select name="label" className="label-select big-input select-input" data-placeholder="type">
                                    <option value="label1">label1</option>
                                    <option value="label2">label2</option>
                                    <option value="label3">label4</option>
                                    <option value="label4">label4</option>
                                    <option value="label5">label5</option>
                                </select>
                            </div> */}

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







                        {/* <!--property description textarea start--> */}
                        <div className="description-textarea">
                            <h2 className="submit-property__block-header">Description</h2>
                            <textarea id="editor" className="text-editor"  onChange={handleTextAreaChange}
                                placeholder="Description" ></textarea>

                        </div>



                        {/* <!--property details start--> */}

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
                                {/* <i className="material-icons">delete</i> */}
                                <input value={feature} type="text" name="feature" onChange={e => setFeature(e.target.value)} placeholder="Add Feature" />
                                {/* <input type="text" placeholder="Value" /> */}

                            </div>
                            <div style={{display :"flex", justifyContent : "space-between", margin :"1rem"}} >
                            <button onClick={addFeature}  className="button-secondary"> Add Feature</button>
                            <button  onClick={resetFeatures} className="button-secondary "> Reset</button>
                            </div>
                            

                        </div>
                        {/* <!--property details end--> */}

                        <div className="property-features-block">
                            {/* <h2 className="submit-property__block-header">Property features</h2> */}
                            <div className="checkboxes-block">
                                {property.features.map((feature, i) =>{
                                    return  <div key={i}>
                                    <input checked type="checkbox" name="conditioning" id="c-h1" className="css-checkbox" />
                                    <label htmlFor="c-h1" className="css-label css-checkbox">{feature}</label> <br />
                                </div>
                                })}
                               
                            </div>
                        </div>


                        {/* <!--property img drag and drop start--> */}
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

                        {/* <!--property img drag and drop end--> */}

                        <div className="submit-property-btns">
                            <div>
                                {/* <a href="#" className="button-link-normal button-link-normal__single-icon">
                                    <i className="material-icons">flag</i>
                                </a>

                                <a href="#" className="button-link-normal">
                                    Property page preview
                                </a> */}
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
    </div>







}


export default SubmitProperty;