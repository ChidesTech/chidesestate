import { ChangeEvent, FormEventHandler, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {  loginUser } from "../api/UserApi";
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
                    alert(data.error);
                }
                if(data.success){
                    alert("Login Successful");
                    localStorage.setItem("userInfo", JSON.stringify(data.user));
                    navigate("/");

                    window.location.reload();

                }
            } catch (error : any) {
                error.response && error.response.data.message
                ? setError(error.response.data.message)
                : setError(error.message);
            }
           
            

    }
    

    useEffect(() =>{
        if(userInfo._id) {
            navigate("/");
            window.location.reload();
    }
     }, []);
    return <>
     <div id="signin-wrap" style={{display : "block"}}>
    <form className="sign-in-form" onSubmit={submitHandler}>
        <div className="wrap">
            <h3>Sign In</h3>
        </div>
        <div className="left-wrap">
            {error ? <p style={{padding : ".7rem", color :"palevioletred"}} className="alert text-danger alert-danger">{error}</p> :
            <p>Use your email address and password  </p>

             }
            

            <input onChange={handleInputChange} name="email" type="email" placeholder="E-mail"/>
            <input onChange={handleInputChange} name="password" type="password" placeholder="Password"/>
            <div className="buttons-wrap">
            <button type="submit" className="btn sign">Sign In</button>

                <Link to="/register" className="btn create">Register</Link>
            </div>
           
        </div>
        <div className="right-wrap">
            <img src="images/sign-in.png" alt="img"/>
        </div>
    </form>
</div>
    </>
}