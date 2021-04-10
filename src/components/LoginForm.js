import React, {useState} from 'react'
import "./style-comp/loginForm.css"

function LoginForm() {

    const [form, setForm] = useState('login');
    const showRegister = ()=> setForm("regiser");

    if(form==="login"){
    return (
        <div className="loginContainer">
            <h2>Bienvenides!</h2>
            <form>
                <label for="email">Email</label>
                <br></br>
                <input></input>
                <br></br>
                <label for="Contraseña">Contraseña</label>
                <br></br>
                <input></input>
            </form>
            <div>
                <button onClick={showRegister} >crear cuenta</button>
                <button>submit</button>
            </div>    
        </div>
    )
    }
    return(
        <div className="loginContainer">
        <h2>Registrate!</h2>
        <form>
            <label for="email">Email</label>
            <br></br>
            <input></input>
            <br></br>
            <label for="Contraseña">Contraseña</label>
            <br></br>
            <input></input>
        </form>
        <div>
            <button onClick={showRegister} >crear cuenta</button>
            <button>submit</button>
        </div>    
    </div>
    )
}

export default LoginForm
