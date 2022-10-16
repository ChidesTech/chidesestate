import DashboardMenu from "../components/DashboardMenu";

export default function DashboardPage(){
    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}")
    return <div  className="account-page">
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



    <div id="submit" 
    //  className="js-content-blocks"
    

    >
        <div className="submit-wrapper">
            <h1 className="account-header-top">Dashboard</h1>
            <div className="dashboard-items" >
                <div className="dashboard-item">
                    <i className="fa fa-users"></i>
                    <p>6</p>
                    <div>Users</div>
               </div>
                <div className="dashboard-item">
                <i className="material-icons">view_module</i>
                    <p>2,570</p>
                    <div>Properties</div>
                </div>
                <div className="dashboard-item">
                <i className="fa fa-paper-plane"></i>
                    <p>26</p>
                    <div>Messages</div>
                </div>
            </div>
            
        </div>
    </div>
</div>










}