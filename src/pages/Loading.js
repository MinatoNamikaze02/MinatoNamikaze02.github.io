import './App.css'
import rr from '../videos/rr.mp4'
import { useState } from 'react'
function Loading() {
    const [start, setStart] = useState(true)
    const [type, setType] = useState(false)
    const handleEnd = () => {
        setStart(false)
    }
    const handlePlay = () => {
        setType(true)
    }

    return (
        <>
            <div className='mid'>
                {start ?
                    <div onAnimationStart={() => setTimeout(handleEnd, 2000)} className="lds-spinner">
                        <div>
                        </div>
                        <div>
                        </div>
                        <div>
                        </div>
                        <div>
                        </div>
                        <div>
                        </div>
                        <div>
                        </div>
                        <div>
                        </div>
                        <div>
                        </div>
                        <div>
                        </div>
                        <div>
                        </div>
                        <div>
                        </div>
                        <div>
                        </div>
                    </div> :
                    <div className='rr'>
                        <video onPlaying={handlePlay} src={rr} autoPlay={true} loop={true}></video>
                    </div>}
            </div>
            <br/>
            <br/>
            {type ?
                <div className="typewriter">
                    <h2>Sorry I was really out of Ideas. Ping me if you have any! Thanks.</h2>
                </div> : <></>
            }
        </>
    )
}

export default Loading