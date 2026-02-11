import { useState } from 'react'
import Header from '@/components/Header'


export default function Login() {
    const [login, setLogin] = useState(false);
    const [userName, setUserName] = useState("");

    const getUserName = (e) => { //get input element value as userName
        setUserName(e.target.value);
    }
    const loginVerify = (e) => { //check user input text or not if yes save it to userName
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
        if (login) { //Rerender page to another page
            return (
                <Header userName={userName} />
            )
        } else { //if user not input text keep this page
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