import { Link, useParams } from "react-router-dom"
import BreadCrumb from "../components/BreadCrumb"
export default function PhotoGalleryPage() {
    const { id } = useParams();
    return <>
        <BreadCrumb page="Photo Gallery" />

        <section className="space-pb mt-4">
            <div className="container">
                <div className="mb-3">
                    <Link to={`/property/${id}`}>
                        <button className="btn btn-outline-primary me-2"><i className="fa fa-home"></i> Property Details</button>
                    </Link>
                    <Link to={`/video-gallery/${id}`}>
                        <button className="btn btn-outline-primary"><i className="fa fa-video"></i> Videos</button>
                    </Link>
                </div>
                <div className="row">
                    <div className="col-md-3 mb-4 mb-lg-2">
                        <div className="location-item bg-overlay-gradient bg-holder" style={{ backgroundImage: "url(/images/property/grid/01.jpg)" }}> </div>
                    </div>

                    <div className="col-md-3 mb-4 mb-md-2">
                        <div className="location-item bg-overlay-gradient bg-holder" style={{ backgroundImage: "url(/images/property/grid/02.jpg)" }}></div>
                    </div>
                    <div className="col-md-3 mb-4 mb-md-2">
                        <div className="location-item bg-overlay-gradient bg-holder" style={{ backgroundImage: "url(/images/property/grid/03.jpg)" }}></div>
                    </div>
                    <div className="col-md-3 mb-4 mb-md-2">
                        <div className="location-item bg-overlay-gradient bg-holder" style={{ backgroundImage: "url(/images/property/grid/04.jpg)" }}></div>
                    </div>
                    <div className="col-md-3 mb-4 mb-md-2">
                        <div className="location-item bg-overlay-gradient bg-holder" style={{ backgroundImage: "url(/images/property/grid/05.jpg)" }}></div>
                    </div>
                    <div className="col-md-3 mb-4 mb-md-2">
                        <div className="location-item bg-overlay-gradient bg-holder" style={{ backgroundImage: "url(/images/property/grid/06.jpg)" }}></div>
                    </div>
                    <div className="col-md-3 mb-4 mb-md-2">
                        <div className="location-item bg-overlay-gradient bg-holder" style={{ backgroundImage: "url(/images/property/list/01.jpg)" }}></div>
                    </div>
                    <div className="col-md-3 mb-4 mb-md-2">
                        <div className="location-item bg-overlay-gradient bg-holder" style={{ backgroundImage: "url(/images/property/list/02.jpg)" }}></div>
                    </div>
                    <div className="col-md-3 mb-4 mb-md-2">
                        <div className="location-item bg-overlay-gradient bg-holder" style={{ backgroundImage: "url(/images/property/list/03.jpg)" }}></div>
                    </div>
                    <div className="col-md-3 mb-4 mb-md-2">
                        <div className="location-item bg-overlay-gradient bg-holder" style={{ backgroundImage: "url(/images/property/list/04.jpg)" }}></div>
                    </div>
                    <div className="col-md-3 mb-4 mb-md-2">
                        <div className="location-item bg-overlay-gradient bg-holder" style={{ backgroundImage: "url(/images/property/list/05.jpg)" }}></div>
                    </div>

                </div>
            </div>
        </section>

    </>
}