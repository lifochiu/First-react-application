import { useState } from 'react'
import Home from './HomePage'
import PlayGround1 from './PlayGround1'
import PlayGround2 from './PlayGround2'
import { styleText } from 'util';


export default function Navigation() {
    const [page, setPage] = useState("Home page");


    const selector = () => {
        if (page == "Home page") {
            return (
                <Home pageInfo={page} />
            )
        } else if (page == "Playground 1") {
            return (
                <PlayGround1 pageInfo={page} />
            )    
        } else {
            return (
                <PlayGround2 />
            )
        }
    }

    return (
        <div>
            <a href=""
                style={{
                    marginRight:"20px"
                }}
                onClick={(e) => {
                e.preventDefault();
                setPage("Home page")
                
            }}>Home page</a>

            <a href=""
                style={{
                marginRight:"20px"
                }}    
                onClick={(e) => {
                e.preventDefault();
                setPage("Playground 1")
            }}> Playground 1</a>

            <a href="" onClick={(e) => {
                e.preventDefault();
                setPage("Playground 2")
            }}> Playground 2 </a>

            <div>{selector()}</div>
        </div>
    )
}