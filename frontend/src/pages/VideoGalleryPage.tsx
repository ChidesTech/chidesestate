import { Link, useParams } from "react-router-dom"
import BreadCrumb from "../components/BreadCrumb"
export default function VideoGalleryPage() {
    const { id } = useParams();
    return <>
        <BreadCrumb page="Video Gallery" />

        <section className="space-pb mt-4">
            <div className="container">
            <div className="mb-3">
                    <Link to={`/property/${id}`}>
                        <button className="btn btn-outline-primary me-2"><i className="fa fa-home"></i> Property Details</button>
                    </Link>
                    <Link to={`/photo-gallery/${id}`}>
                        <button className="btn btn-outline-primary"><i className="fa fa-camera"></i> Photos</button>
                    </Link>
                </div>
                <div className="gallery-videos">
                    <div className="gallery-video">
                        <video className="" style={{ width: "100%" }} src="/videos/video.mp4" controls></video>
                    </div>
                    <div className="gallery-video">
                        <video className="" style={{ width: "100%" }} src="/videos/video.mp4" controls></video>
                    </div>
                    <div className="gallery-video">
                        <video className="" style={{ width: "100%" }} src="/videos/video.mp4" controls></video>
                    </div>
                    <div className="gallery-video">
                        <video className="" style={{ width: "100%" }} src="/videos/video.mp4" controls></video>
                    </div>
                </div>
            </div>
        </section>

    </>
}