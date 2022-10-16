import { Link, useNavigate } from "react-router-dom"

export default function Header(){
    const userInfo =  JSON.parse(localStorage.getItem("userInfo") || "{}");
    const navigate = useNavigate()
    function signOut(){
        localStorage.removeItem("userInfo");
        navigate("/");
        window.location.reload();
    }
    return<>
     <div id="preloader">
    <div>
        <canvas id='circleback' height='100' width='100'></canvas>
        <canvas id='circlemain' height='100' width='100'></canvas>
    </div>
</div>
<div className="top-bar">
    <div className="container">
        <div className="contacts-wrapper">
            <span className="contacts">
                <span className="name">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>Call Us Now:</span>
                </span>
                <span className="info">
                    +2348141680547
                </span>
            </span>
        </div>  
    </div>
</div>

<div className="header">
    <div className="container">
        <div className="wrapper">
            <a href="/" className="logo">
                {/* <img src="images/logo.png" alt="logo"/> */}
                <h5 >Chides Estates</h5>
            </a>

            <button type="button" data-toggle="collapse" data-target="#header" aria-expanded="false"
                    className="navbar-toggle">
                <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
            <div className="menu-list">
                <div id="header" className="navbar-collapse collapse">
                    <ul>
                        <li>
                            <a href="/">
                                home
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                about
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                contact
                            </a>
                        </li>
                        
                       {userInfo._id &&
                        <li>
                        <a>
                           {userInfo.username && userInfo.username} <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="sub-menu small">
                            <li>
                                <ul>
                                    <li>
                                        Account pages
                                    </li>
                                    <li>
                                        <Link to="/dashboard">
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/submit-property">
                                            Submit property
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/my-properties">
                                            Properties
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="account.html#favorites">
                                            Favorites
                                        </a>
                                    </li>
                                    <li>
                                        <a href="account.html#messages">
                                            Messages
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/profile">
                                            Profile
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                       }
                        
                    </ul>
                </div>
            </div>
            <div className="subscribe-buttons">
               
                {userInfo._id ? 
                <Link to="/">
                <button className="registration" onClick={signOut}>
                    <i className="fa fa-sign-out-alt" aria-hidden="true"></i>
                    <span> Sign Out</span>
                </button>
                </Link> :
                 <Link to="/login">
                 <button className="registration">
                     <i className="fa fa-sign-in-alt" aria-hidden="true"></i>
                     <span> Sign In</span>
                 </button>
                 </Link>
                
            }
               

            </div>
        </div>
    </div>
</div>

    </>
}