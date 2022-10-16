import { ChangeEvent, FormEventHandler, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { createUser } from "../api/UserApi";
import IUserInterface from "../interfaces/IUserInterface"

export default function RegisterPage(){
    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    const initialUserState = {
        username : "", email : "", password : "", confirmPassword : ""
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
            if(user.password !== user.confirmPassword){
                setError("Passwords do not match");
                return;
            }
            const {data} = await createUser(user);
            if(data.success){
                alert("Registration Successful");
                navigate("/login");

            }
            if(data.error){
                setError(data.error)
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
            <h3>Register</h3>
        </div>
        <div className="left-wrap">
            {error ? <p style={{padding : ".7rem", color :"palevioletred"}} className="alert alert-danger">{error}</p> :
            <p>Use your email address and password  </p>

             }
            

            <input onChange={handleInputChange} name="email" type="email" placeholder="E-mail"/>
            <input onChange={handleInputChange} name="username" type="text" placeholder="Username"/>
            <input onChange={handleInputChange} name="password" type="password" placeholder="Password"/>
            <input style={{marginTop : "-1rem"}} onChange={handleInputChange} name="confirmPassword" type="password" placeholder="Confirm Password"/>
            <div className="buttons-wrap">
            <button type="submit" className="btn sign">Register</button>

                <Link to="/login" className="btn create">Sign In</Link>
            </div>
           
        </div>
        <div className="right-wrap">
            <img src="images/sign-in.png" alt="img"/>
        </div>
    </form>
</div>
    </>
}