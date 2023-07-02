import { ChangeEvent, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import IPropertyInterface from "../interfaces/IPropertyInterface";
import "./FilterForm.css";
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
        // window.location.reload();
    }

    return <> 

     {/* SEARCH FORM STARTS */}
     <div className="property-search-field bg-white filterForm ">
            <div className="property-search-item">
                <form className="row basic-select-wrapper">
                    <div className="form-group col-lg-3 col-md-6">
                        <label className="form-label">Property type</label>
                        <select onChange={handleSelectChange} name="type" className="form-control search-form-select">
                            <option value="">--- Select Type --- </option>
                            <option>All Type</option>
                            <option>Villa</option>
                            <option>Apartment Building</option>
                            <option>Commercial</option>
                            <option>Office</option>
                            <option>Residential</option>
                            <option>Shop</option>
                            <option>Apartment</option>
                        </select>
                    </div>
                    <div className="form-group col-lg-3 col-md-6">
                        <label className="form-label">Property Status</label>
                        <select onChange={handleSelectChange} name="status" className="form-control search-form-select">
                            <option value="">--- Select Status --- </option>
                            <option value="rent">For Rent</option>
                            <option value="sale">For Sale</option>
                        </select>
                    </div>
                    <div className="form-group d-flex col-lg-4">
                        <div className="form-group-search">
                            <label className="form-label">Location</label>
                            <div className="d-flex align-items-center"><i className="far fa-compass me-1"></i>
                                <input onChange={handleInputChange} name="location" className="form-control search-form-select" type="search" placeholder="Search Location" /></div>
                        </div>
                        <span className="align-items-center ms-3 d-none d-lg-block"><button onClick={searchProperties} className="btn btn-primary d-flex align-items-center" type="submit"><i className="fas fa-search me-1"></i><span></span></button></span>
                    </div>
                    <div className="form-group text-center col-lg-2">
                        <div className="d-flex justify-content-center d-md-inline-block">
                            <a className="more-search p-0" data-bs-toggle="collapse" href="#advanced-search" role="button" aria-expanded="false" aria-controls="advanced-search"> <span className="d-block pe-2 mb-1">Advanced search</span>
                                <i className="fas fa-angle-double-down"></i></a>
                        </div>
                        <div className="d-flex justify-content-center d-md-inline-block mt-3">
                            <button type="button" className="btn-sm btn-primary">Reset Filter</button>
                        </div>
                    </div>
                    <div className="collapse advanced-search p-0 row mb-5" style={{backgroundColor : "white"}} id="advanced-search">
                        <div className="form-group col-lg-3 col-md-6">
                            <div className="form-group-search">
                                <label className="form-label">Bedrooms</label>
                                <div className="d-flex align-items-center"><i className="fa fa-bed me-1"></i>
                                    <input onChange={handleInputChange} name="bedrooms" type="number" className="form-control search-form-select" placeholder="No. Of Bedrooms" /></div>
                            </div>
                        </div>
                        <div className="form-group col-lg-3 col-md-6">
                            <div className="form-group-search">
                                <label className="form-label">Bathrooms</label>
                                <div className="d-flex align-items-center"><i className="fa fa-bath me-1"></i>
                                    <input onChange={handleInputChange} name="bathrooms" type="number" className="form-control search-form-select" placeholder="No. Of Bathrooms" /></div>
                            </div>
                        </div>
                        <div className="form-group d-flex col-lg-4">
                            <div className="form-group-search">
                                <label className="form-label">Minimum Price</label>
                                <div className="d-flex align-items-center"><i className="fa fa-minus me-1"></i>
                                    <input className="form-control search-form-select" type="number" placeholder="Min. Price" /></div>
                            </div>
                        </div>
                        <div className="form-group text-center col-lg-2">
                            <div className="form-group-search">
                                <label className="form-label">Maximum Price</label>
                                <div className="d-flex align-items-center"><i className="fa fa-plus me-1"></i>
                                    <input className="form-control search-form-select" type="number" placeholder="Max. Price" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="d-lg-none btn-mobile p-3 d-grid">
                        <button className="btn btn-primary align-items-center" type="submit"><i className="fas fa-search me-1"></i><span>Search</span></button>
                    </div>
                </form>
            </div>
        </div>
        {/* SEARCH FORM ENDS */}
    </>

}