import BreadCrumb from "../components/BreadCrumb";
import DashboardMenu from "../components/DashboardMenu";

export default function DashboardPage() {
    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}")
    return <>
        <BreadCrumb page="Dashboard" />


        <section className="space-ptb" style={{ marginTop: "-4rem" }}>
            <div className="container">
                <div className="row">
                    <DashboardMenu page="dashboard" />
                    <div className="submit-wrapper">
                        <div className="dashboard-items" >
                            <div className="dashboard-item">
                                <i className="fa fa-users"></i>
                                <p>6</p>
                                <div>Users</div>
                            </div>
                            <div className="dashboard-item">
                                <i className="fa fa-users"></i>
                                <p>6</p>
                                <div>Agents</div>
                            </div>
                            <div className="dashboard-item">
                                <i className="fa fa-home"></i>
                                <p>2,570</p>
                                <div>Properties</div>
                            </div>
                            <div className="dashboard-item">
                                <i className="fa fa-list"></i>
                                <p>2,570</p>
                                <div>Estates</div>
                            </div>
                            <div className="dashboard-item">
                                <i className="fa fa-paper-plane"></i>
                                <p>26</p>
                                <div>Messages</div>
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
        </section>








    </>





}