import './App.css';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const history = useNavigate()
  const [play, setPlay] = useState(false)

  const handleClick = () => {
    history('/loading')
  }

  return (
    <div>
      <div className="typewriter">
        <h2 onAnimationEnd={() => setTimeout(() => setPlay(!play), 2000)}>Hi! I am Arjun, a developer from India.</h2>
      </div>
      <div className='buttonstyle'>
        <button onClick={handleClick}>Continue</button>
      </div>
    </div>
  );
}

export default Home;
