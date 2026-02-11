import { useState } from 'react'
import Navi from './Navigation'
import Login from './Login'

interface userNameProps{
    userName: String
}

export default function Header({ userName }: userNameProps) {    

    return (
        <div
        style={{
            display: 'flex', 
            flexDirection: 'column',
            alignItems: "center",
            }}          
        >
            <h1>Welcome! {userName}</h1>
             <Navi />
        </div>
    )
}