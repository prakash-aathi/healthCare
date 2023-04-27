import React,{useState} from 'react'
import './Bmi.css'

function Bmi() {
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [result, setResult] = useState(null)
    const handleBMi = () => { 
        var bmi = weight / (height / 100 * height / 100);
        setResult(bmi.toFixed(2));
    }
    
  return (
    <div>
			<h2 className='my-4'>BMI Calculator</h2>
			<input className='my-4' type="text" value={height} onChange={(e) => setHeight(e.target.value) } placeholder='Height' id="h"/>
             <br />
			<input className='my-4' type="text" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder='Weight' id="w"/>
            <p id="result">{ result }</p>
			<button id="btn" onClick={handleBMi}>Calculate</button>
			<p id="info">Please enter height [cm] and weight [kg]</p>
	</div>
  )
}

export default Bmi