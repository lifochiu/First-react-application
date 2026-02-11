import { useState } from 'react'
import Header from '@/components/Header'


export default function Login() {
    const [login, setLogin] = useState(false);
    const [userName, setUserName] = useState("");

    const getUserName = (e) => {
        setUserName(e.target.value);
    }
    const loginVerify = (e) => {
        if (userName != "") {
            e.preventDefault();
            console.log(userName);
            setUserName(userName);
            setLogin(true);
        } else {
            alert("Please input user name")
            setLogin(false);
        }
    }
    
    const loginPage = () => {
        if (login) {
            return (
                <Header userName={userName} />
            )
        } else {
            return (
                <div
                    style={{
                        display: 'flex', 
                        flexDirection: 'column',
                        alignItems: "center",
                    }}
                >
                    <p>Input your user name:</p>
                    <input type="text"
                        value={userName}
                        onChange={getUserName}
                    />
                    <button onClick={loginVerify}>Login</button>
                </div>
            )
        }
    }

    return (
        <div>
            <div>
                {loginPage()}
            </div>
        </div>
    )
}