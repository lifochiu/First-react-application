import { useState } from 'react'

interface pageInfoProps{
    pageInfo: String;
}


export default function HomePage({ pageInfo }: pageInfoProps) {
    
    const [baseNum, setBaseNum] = useState(0);
    const [exponentNum, setExponentNum] = useState(0);
    const [result, setResult] = useState<number | "">("");

    
    const getBaseNum = (e) => {
        setBaseNum(e.target.value);
    }
    const getExponentNum = (e) => {
        setExponentNum(e.target.value);
    }
    const getResult = (e) => {
        e.preventDefault();
        let result = Math.pow(baseNum, exponentNum);
        setResult(result);
    }

    return (
        <div
        style={{
            display: 'flex', 
            flexDirection: 'column',
            alignItems: "center",
        }}>
            <p>This is page {pageInfo}: Power Calculator</p>
            <div>
                <p>Base Number:</p>
                <input type="number" onChange={getBaseNum} />
            </div>
            <div>
                <p>Exponent Number: </p>
                <input type="number" onChange={getExponentNum}/>
            </div>
            <div>
                <button onClick={getResult}>Calculate!</button>
                <p>Result: {result}</p>
            </div>
        </div>
    )
}