import './App.css'
import { useState } from 'react'
export const Verify = ({ title, text }) => {
    const [count, setcount] = useState(0)
    const clickverify = () => {
        if (count < 3) {
            setcount(count + 1)
        } else {
            setcount(1)
        }
    }
    return (
        <div>
            <div className="flex container">
                {(count === 0) &&
                    <>
                        <img src={process.env.PUBLIC_URL+'./Check Icon.png'} alt='#' onClick={clickverify}></img>
                        <div style={{ marginLeft: "15px" }}>
                            <div className='title'>{title}</div>
                            <div className='text'>{text}</div>
                        </div>
                    </>
                }
                {count === 1 &&
                    <><img src={process.env.PUBLIC_URL+'./Check Icon.png'} alt='#' className='clickedone' onClick={clickverify}></img>
                        <div style={{ marginLeft: "15px" }}>
                            <div className='title'>{title}</div>
                            <div className='text'>Awaiting</div>
                        </div>
                    </>}
                {count === 2 &&
                    <>
                        <img src={process.env.PUBLIC_URL+'./Check Icon.png'} alt='#' className='clickedtwo' onClick={clickverify}></img>
                        <div style={{ marginLeft: "15px" }}>
                            <div className='title'>{title}</div>
                            <div className='text'>Applied</div>
                        </div>
                    </>}
                {(count === 3) &&
                    <>
                        <img src={process.env.PUBLIC_URL+'./Check Icon.png'} alt='#' onClick={clickverify}></img>
                        <div style={{ marginLeft: "15px" }}>
                            <div className='title'>{title}</div>
                            <div className='text'>{text}</div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}