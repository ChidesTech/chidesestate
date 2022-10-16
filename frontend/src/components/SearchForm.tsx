import { ChangeEvent, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import IPropertyInterface from "../interfaces/IPropertyInterface";

export default function SearchForm() {
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


    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setProperty({ ...property, [name]: value });
    }


    const searchProperties = () => {
        navigate(`/listings?search=true${property.title && `&title=${property.title}`}${property.type && `&type=${property.type}`}${property.status && `&status=${property.status}`}${property.location && `&location=${property.location}`}${`&bedrooms=${property.bedrooms}`}${`&bathrooms=${property.bathrooms}`}`);
        window.location.reload();
    }

    return <div className="container js-home-1-search" style={{ marginTop: "31px" }}>

        {/* <!--PROPERTY SEARCH FORM 1 BEGIN--> */}

        <form id="search-form-1">
            <div className="property-search">
                <div className="main-apartment-search-options">
                    <div className="options-wrapper-main">
                        <div className="wrapper search-property">
                            <h3>Title or Key Word</h3>
                            <input onChange={handleInputChange} name="title" type="text" className="property-searchinput" placeholder="Title or Key Word" />
                        </div>
                        <div className="wrapper search-property">
                            <h3>Location</h3>
                            <input onChange={handleInputChange} name="location" type="text" className="property-searchinput" placeholder="Location" />
                        </div>


                        <div className="wrapper">
                            <h3>Property type</h3>
                            <select onChange={handleSelectChange} name="type" className="select-input big-input property-searchinput"
                                data-placeholder="type">
                                <option value="">Property Type</option>
                                <option value="apartment">Apartment</option>
                                <option value="farm">Farm</option>
                                <option value="condo">Condo</option>
                                <option value="multi-family-house">Multi Family House</option>
                                <option value="townhouse">Townhouse</option>
                            </select>
                        </div>

                        <div className="wrapper">
                            <h3>Status</h3>
                            <select onChange={handleSelectChange} name="status" className="select-input big-input badge-test"
                                data-placeholder="status">
                                <option value="" data-text="small-badge sale">Property Status</option>
                                <option value="sale" data-text="small-badge sale">For Sale</option>
                                <option value="rent" data-text="small-badge rent">For Rent</option>
                                <option value="new" data-text="small-badge new">New</option>
                                <option value="featured" data-text="small-badge featured">Featured</option>
                                <option value="reused" data-text="small-badge reused">Reused</option>
                                <option value="hot" data-text="small-badge hot">Hot Offer</option>
                            </select>
                        </div>

                        <div className="wrapper advanced-wrapper">
                            <h3>Advanced mode</h3>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                            <button onClick={searchProperties} className="property-button">Find Properties</button>
                        </div>
                    </div>

                </div>

                <div className="toggle-options">

                <div className="main-apartment-search-options">
                    <div className="options-wrapper-main">
                       
                        <div className="wrapper search-property">
                            <h3>Min. Price(NGN)</h3>
                            <input onChange={handleInputChange} name="min-price" type="number" className="property-searchinput" placeholder="Min. Price" />
                        </div>
                        <div className="wrapper search-property">
                            <h3>Max. Price(NGN)</h3>
                            <input onChange={handleInputChange} name="max-price" type="number" className="property-searchinput" placeholder="Max. Price" />
                        </div>
                        <div className="wrapper search-property">
                            <h3>Bedrooms</h3>
                            <input onChange={handleInputChange} name="bedrooms" type="number" className="property-searchinput" placeholder="Bedrooms" />
                        </div>
                        <div className="wrapper search-property">
                            <h3>Bathrooms</h3>
                            <input onChange={handleInputChange} name="bathrooms" type="number" className="property-searchinput" placeholder="Bathrooms" />
                        </div>


                        
                       
                    </div>

                </div>

                    <div style={{ display: "none" }} className="apartment-features">
                        <span>Other features:</span>

                        <span className="features-count">4</span>
                        <div className="checkboxes-block">
                            <div>
                                <input type="checkbox" name="conditioning" id="ch1" className="css-checkbox" />
                                <label htmlFor="ch1" className="css-label">Air Conditioning</label> <br />
                            </div>
                            <div>
                                <input type="checkbox" name="refrigerator" id="ch2" className="css-checkbox" />
                                <label htmlFor="ch2" className="css-label">Refrigerator</label> <br />
                            </div>


                            <div>
                                <input type="checkbox" name="barbeque" id="ch3" className="css-checkbox" />
                                <label htmlFor="ch3" className="css-label">Barbeque</label> <br />
                            </div>
                            <div>
                                <input type="checkbox" name="sauna" id="ch4" className="css-checkbox" />
                                <label htmlFor="ch4" className="css-label">Sauna</label> <br />
                            </div>


                            <div><input type="checkbox" name="dryer" id="ch5" className="css-checkbox" />
                                <label htmlFor="ch5" className="css-label">Dryer</label> <br />
                            </div>
                            <div><input type="checkbox" name="pool" id="ch6" className="css-checkbox" />
                                <label htmlFor="ch6" className="css-label">Swimming Pool</label> <br />
                            </div>


                            <div>
                                <input type="checkbox" name="gym" id="ch7" className="css-checkbox" />
                                <label htmlFor="ch7" className="css-label">Gym</label> <br />
                            </div>

                            <div>
                                <input type="checkbox" name="tv" id="ch8" className="css-checkbox" />
                                <label htmlFor="ch8" className="css-label">TV Cable</label> <br />
                            </div>


                            <div>
                                <input type="checkbox" name="laundry" id="ch9" className="css-checkbox" />
                                <label htmlFor="ch9" className="css-label">Laundry</label> <br />
                            </div>
                            <div><input type="checkbox" name="washer" id="ch10" className="css-checkbox" />
                                <label htmlFor="ch10" className="css-label">Washer</label> <br />
                            </div>


                            <div>
                                <input type="checkbox" name="microwave" id="ch11" className="css-checkbox" />
                                <label htmlFor="ch11" className="css-label">Microwave</label> <br />
                            </div>
                            <div>
                                <input type="checkbox" name="wifi" id="ch12" className="css-checkbox" />
                                <label htmlFor="ch12" className="css-label">WI FI</label> <br />
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </form>


        {/* <!--PROPERTY SEARCH FORM 1 END--> */}
    </div>
}