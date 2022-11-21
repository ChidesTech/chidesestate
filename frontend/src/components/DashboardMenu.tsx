import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


const DashboardMenu = (props : any) => {
   const navigate = useNavigate();
   const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    useEffect(() =>{
       !userInfo._id && navigate("/login") 
    }, []);

    return <>
            <div className="col-12 mb-5">
                        <div className="profile-sidebar bg-holder bg-overlay-black-70" style={{backgroundImage: "url(images/banner-01.jpg)"}}>
                            <div className="d-sm-flex align-items-center position-relative">
                                <div className="profile-avatar">
                                    <img className="img-fluid  rounded-circle" src="/images/profile.png" alt=""/>
                                </div>
                                <div className="ms-sm-4">
                                    <h4 className="text-white">{userInfo && userInfo.username }</h4>
                                    <b className="text-white">{userInfo && userInfo.email}</b>
                                </div>
                                {props.page === "properties-management" ?  <div className="ms-auto my-4 mt-sm-0">
                                    <Link className="btn btn-white btn-md" to="/submit-property"> <i className="fa fa-plus-circle"></i>Add Property </Link>
                                </div> : props.page === "estates-management" ? 
                                 <div className="ms-auto my-4 mt-sm-0">
                                    <Link className="btn btn-white btn-md" to="/submit-estate"> <i className="fa fa-plus-circle"></i>Add Estate </Link>
                                </div> :  null
                                }
                               
                            </div>
                            <div className="profile-nav">
                                <ul className="nav">
                                   
                                    <li className="nav-item">
                                        <Link className={props.page === "dashboard" ? "nav-link nav-link-active" : "nav-link nav-link-inactive"} to="/dashboard">
                                            <i className="far fa-clipboard"></i>Dashboard</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={props.page === "estates-management" ? "nav-link nav-link-active" : "nav-link nav-link-inactive"} to="/estates-management">
                                            <i className="far fa-edit"></i>Estates Management</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={props.page === "submit-estate" ? "nav-link nav-link-active" : "nav-link nav-link-inactive"} to="/submit-estate"><i className="fas fa-plus-square"></i>Add Estate</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={props.page === "properties-management" ? "nav-link nav-link-active" : "nav-link nav-link-inactive"} to="/properties-management">
                                            <i className="fa fa-list"></i>Properties Management</Link>
                                    </li>
                                   
                                    <li className="nav-item">
                                        <Link className={props.page === "submit-property" ? "nav-link nav-link-active" : "nav-link nav-link-inactive"} to="/submit-property"><i className="fa fa-home"></i>Submit Property</Link>
                                    </li>
                                  
                                    <li className="nav-item">
                                        <Link className="nav-link nav-link-inactive" to="/profile"><i className="fas fa-user"></i>Edit Profile</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
    </>
}


export default DashboardMenu;