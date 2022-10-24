import { Link } from "react-router-dom"


export default function BreadCrumb(props : any){
    return  <div className="bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><Link to="/"> <i className="fas fa-home"></i> </Link></li>
                            <li className="breadcrumb-item"> <i className="fas fa-chevron-right"></i> <a >{props.page}</a></li>
                            {/* <li className="breadcrumb-item active"> <i className="fas fa-chevron-right"></i> <span> Property List </span></li> */}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
      
}