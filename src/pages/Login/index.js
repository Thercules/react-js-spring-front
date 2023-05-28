import React, {useState} from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './styles.css';
import logo from '../../assets/LogoVB.png'
import UXart from '../../assets/UXart-login-page.svg'

//Importacao api
import api from "../../services/api";

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function login(e){
        e.preventDefault();

        const data = {
            username,
            password,
        };

        try {
            const response = await api.post('/auth/signin', data);
            localStorage.setItem('username', username);
            localStorage.setItem('accessToken', response.data.token);

            history.push('/books')
        } catch (error) {
            alert('Login failed!');
        }
    };

    return (
       <div className="login-container">
            <section className="form">
                    <img src={logo} alt="logo-login" />
                    <form onSubmit={login}>
                        <h1>Acesse a sua conta:</h1>
                        
                        <input 
                            placeholder="Username"
                            value={username}
                            onChange ={e => setUsername(e.target.value)}
                        />

                        <input 
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange ={e => setPassword(e.target.value)}
                            
                        />

                        <button className="button" type="submit">Login</button>
                    </form>
            </section>
            <img src={UXart} width="500" alt="uxart" />
           
       </div>
    )
}