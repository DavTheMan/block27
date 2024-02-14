import { useState } from "react";

export default function SignUpForm({token, setToken}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    async function handleSubmit(event){
        event.preventDefault();
        //console.log("Hello");
        if(password.length !== 8){
            setPasswordError("Make it at least 8 characters long");
            return;
        }else{
            setPasswordError(null);
        }
        fetch("https://fsa-jwt-practice.herokuapp.com/signup", {method: "POST"});
        try{
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",{
            method: "POST",
            body: JSON.stringify({username, password}),
            headers: {
                "Content-Type": "application/json",},
            });
            const result = await response.json();
            console.log(result);
            setToken(result.token);
        }catch(error){
            setError(error.messge);
        }
    }
    return (
        <>
        <h2>Sign Up!</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
            <label>
                Username: <input type='usernsme' value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Password: <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                {passwordError && <span style={{color: "red"}}>{passwordError}</span>}
            </label>
            <button>Submit</button>
        </form>
        </>
    );
    
  }