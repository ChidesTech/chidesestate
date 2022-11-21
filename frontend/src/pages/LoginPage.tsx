import { ChangeEvent, FormEventHandler, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2";
import {  loginUser } from "../api/UserApi";
import BreadCrumb from "../components/BreadCrumb";
import IUserInterface from "../interfaces/IUserInterface"

export default function LoginPage(){
    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    const initialUserState = {
        username : "", email : "", password : ""
    }

    const [user, setUser] = useState<IUserInterface>(initialUserState);
    const [error, setError] = useState<string>("");

    const navigate = useNavigate()
    const handleInputChange = (e : ChangeEvent<HTMLInputElement> ) =>{
      const {name, value} = e.target;
      setUser({...user, [name] : value})
    }


    const submitHandler = async(e : any) =>{
            e.preventDefault();
            try {
                const {data} = await loginUser(user);
                if(data.error){
                    setError(data.error);
                }
                if(data.success){
                    Swal.fire("Done","Login Successful", "success");
                    localStorage.setItem("userInfo", JSON.stringify(data.user));
                    navigate("/");

                   

                }
            } catch (error : any) {
                error.response && error.response.data.message
                ? setError(error.response.data.message)
                : setError(error.message);
            }
           
            

    }
    

    useEffect(() =>{
        if(userInfo._id) {
            // navigate("/");
           
    }
     }, []);
    return <>
<BreadCrumb page="Login"/>
<section className="mt-5 login">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8 col-sm-10">
        <div className="section-title">
          <h2 className="text-center">SIGN IN</h2>
        </div>
        {error && <div className="alert alert-danger p-3">{error}</div> }
       
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="agent" role="tabpanel" aria-labelledby="agent-tab">
            <form className="row mt-4 align-items-center" onSubmit={submitHandler}>
              {/* <div className="mb-3 col-sm-12">
                <label className="form-label">Username:</label>
                <input type="text" className="form-control" placeholder=""/>
              </div> */}
              <div className="mb-3 col-sm-12">
                <label className="form-label">Email Address:</label>
                <input onChange={handleInputChange} name="email" type="email" className="form-control" placeholder=""/>
              </div>
              <div className="mb-3 col-sm-12">
                <label className="form-label">Password:</label>
                <input onChange={handleInputChange} name="password" type="Password" className="form-control" placeholder=""/>
              </div>
              {/* <div className="mb-3 col-sm-12">
                <label className="form-label">Confirm Password:</label>
                <input type="Password" className="form-control" placeholder=""/>
              </div> */}
              <div className="col-sm-6 d-grid">
                <button type="submit" className="btn btn-primary">Sign In</button>
              </div>
              <div className="col-sm-6">
                <ul className="list-unstyled d-flex mb-1 mt-sm-0 mt-3">
                  <li className="me-1"><Link to="/register">Don't have an account yet ? Register</Link></li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
}