import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteProperty, getProperties } from "../api/PropertyApi";
import DashboardMenu from "../components/DashboardMenu";
import IPropertyInterface from "../interfaces/IPropertyInterface";

export default function MyPropertiesPage() {
    const [properties, setProperties] = useState<Array<IPropertyInterface>>([]);
    const [loading, setLoading] = useState(true);
    const userInfo =  JSON.parse(localStorage.getItem("userInfo") || "{}");


    async function getMyProperties() {
        setLoading(true);
        try {
            const { data } = await getProperties();
            setProperties(data);
            setLoading(false)
        } catch (error) {

        }

    }

    async function deleteHandler(id : string){
        if(!window.confirm("Are you sure you want to delete this property?")){
            return;
        }
        try {
            const {data} = await deleteProperty(id);
            if(data.success){
                Swal.fire("Done", "Property Deleted Successfully", "success");
                getMyProperties();
            }      
        } catch (error : any) {
            error.response && error.response.data.message
                ? Swal.fire(error.response.data.message)
                : Swal.fire(error.message);
        }
    }

    const navigate = useNavigate();
    useEffect(() =>{
       !userInfo._id && navigate("/login") 
    }, []);

    useEffect(() => {
        getMyProperties();
    },[])
    return <div className="account-page">
        <div className="account_menu account_menu__normal">
            <a href="#" className="js-toggle-menu">
                <div className="account_menu_agent">
                    <div className="agent-avatar">
                        <img src="images/userpic.png" alt="user" />
                        <div className="agent-status status-online"></div>
                    </div>
                    <h2 style={{textTransform : "uppercase"}}>{userInfo.username && userInfo.username}</h2>
                    <i className="material-icons js-test-toggle sm-visible"></i>

                </div>
            </a>
            <DashboardMenu />
        </div>

        <div id="property" >
            <h1 className="account-header-top">My Property</h1>
            <div className="row">
                <div className="col-md-12">

                    <div className="account-property m-b-30">
                        <div className="selector-wrap">
                            <div className="left wrap">
                                {/* <input type="checkbox" name="conditioning" id="ch1" className="css-checkbox" />
                                <label htmlFor="ch1" className="css-label">Select all property</label> */}
                            </div>
                            <div className="right wrap">
                                {/* <div className="wrapper">
                                    <select form="search-form-price" name="property-price" className="choose-option"
                                        data-placeholder="Remove selected">
                                        <option value="price">Sellect all</option>
                                        <option value="remove">Remove selected</option>
                                    </select>
                                </div> */}
                                <Link to="/submit-property" type="submit" className="apply-button">submit property</Link>
                            </div>
                        </div>
                        {loading ? <div>Getting Properties ...</div> : <div className="table-property-listing">
                            {properties.length === 0 ? <div>No Property Added</div> : 
                            properties.map(property =>{
                                return <div key={property._id} className="item">
                                {/* <div className="single-property-checkbox">
                                    <input type="checkbox" id={property._id}  className="css-checkbox" />
                                    <label htmlFor={property._id} className="css-label"></label>
                                </div> */}
                                <div className="apartment-image">
                                    <img style={{width : "100%"}} src={property.cover || "images/property-img.png"} alt="apartment" />
                                    <div className="badge-wrapper">
                                        <div className="small-badge rent">{property.status}</div>
                                    </div>
                                </div>
                                <div className="property-info-wrapper">
                                    <div className="name-wrap">
                                        <a href="#">Single Family Home</a>
                                        <h2>{property.title}</h2>
                                    </div>
                                    <div className="property-info body">
                                        <div className="bad">Bed.<span>{property.bedrooms}</span></div>
                                        <div className="bath">Bath.<span>{property.bathrooms}</span></div>
                                        <div className="sq">Sq.<span>4700</span></div>
                                        <div className="price">Price{property.period && `/${property.period}`}<span>{property.price}</span></div>
                                        {/* <div className="perweek">Per week<span>7.200</span></div> */}
                                    </div>
                                </div>
                                <div className="apartment-details-btn" style={{display : "flex"}}>
                                    {/* <a href="#" className="clone"><i className="material-icons icons-style"></i></a> */}
                                    <a style={{backgroundColor: "palevioletred", color: "white", cursor : "pointer"}} href="#" className="details-button first">
                                        EDIT
                                    </a>
                                    <span onClick={() => deleteHandler(property._id)} style={{backgroundColor: "red", color: "white", cursor : "pointer"}}  className="details-button ">
                                        DELETE
                                    </span>
                                </div>
                            </div>


                            })
                            
                            
                            }
                            
                        </div>
                        
                        }
                        
                    </div>

                </div>
                {/* <div className="col-md-3">
                    <div className="account_properties_counters_list">
                        <a href="#" className="item">
                            <span className="badge hot"></span> hot offer
                            <span className="count">21</span>
                        </a>
                        <a href="#" className="item">
                            <span className="badge featured"></span> featured
                            <span className="count">33</span>
                        </a>
                        <a href="#" className="item">
                            <span className="badge rent"></span> for rent
                            <span className="count">17</span>
                        </a>
                        <a href="#" className="item">
                            <span className="badge sale"></span> for sale
                            <span className="count">121</span>
                        </a>
                        <a href="#" className="item">
                            <span className="badge open"></span> open house
                            <span className="count">11</span>
                        </a>
                        <a href="#" className="item">
                            <span className="badge closures"></span> foreclosures
                            <span className="count">2</span>
                        </a>
                        <a href="#" className="item">
                            <span className="badge resale"></span> resale
                            <span className="count">121</span>
                        </a>
                        <a href="#" className="item">
                            <span className="badge new"></span> new building
                            <span className="count">8</span>
                        </a>
                        <a href="#" className="item">
                            <span className="badge reduced"></span> reduced price
                            <span className="count">85</span>
                        </a>
                        <a href="#" className="item">
                            <span className="badge sold"></span> sold
                            <span className="count">49</span>
                        </a>
                    </div>
                </div> */}
            </div>

        </div>
    </div>

}