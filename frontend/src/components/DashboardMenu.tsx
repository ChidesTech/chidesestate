import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


const DashboardMenu = () => {
   const navigate = useNavigate();
   const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    useEffect(() =>{
       !userInfo._id && navigate("/login") 
    }, []);

    return <>
        <div className="account_menu_categories">
            <Link to="/dashboard" className="js-menu-links" data-display-id="dashboard">
                <div className="category_item">
                    <div className="category_item__category-name">
                        <i className="material-icons">insert_chart</i>
                        <div className="new-notification"></div>
                        <span>Dashboard</span>
                    </div>
                </div>
            </Link>
            <Link to="/submit-property" className="js-menu-links" data-display-id="submit">
                <div className="category_item">
                    <div className="category_item__category-name">
                        <i className="material-icons">add_circle</i>
                        <div className="new-notification"></div>
                        <span>Submit property</span>
                    </div>
                </div>
            </Link>
            <Link to="/my-properties" className="js-menu-links new-notification__enabled" data-display-id="property">
                <div className="category_item">
                    <div className="category_item__category-name">
                        <i className="material-icons">view_module</i>
                        <div className="new-notification"></div>
                        <span>Properties </span>
                    </div>

                    <span className="category_item__item-counts">
                        12
                    </span>
                </div>
            </Link>
            <Link to="/my-properties" className="js-menu-links new-notification__enabled" data-display-id="property">
                <div className="category_item">
                    <div className="category_item__category-name">
                        <i className="material-icons fa fa-users "></i>
                        <div className="new-notification"></div>
                        <span>Users </span>
                    </div>

                    <span className="category_item__item-counts">
                        12
                    </span>
                </div>
            </Link>
           
           
            
            
            <a href="#settings" className="js-menu-links" data-display-id="settings">
                <div className="category_item">
                    <div className="category_item__category-name">
                        <i className="material-icons">settings</i>
                        <div className="new-notification"></div>
                        <span>Settings</span>
                    </div>
                </div>
            </a>

            <i className="material-icons js-test-toggle lg-visible"></i>
        </div>
    </>
}


export default DashboardMenu;