import React from 'react'
import { useState } from 'react'
import { DiseaseList } from '../localstorage/Disease'

function Disease() {

    const [value, setValue] = useState('');
    const [show, setShow] = useState(false);

    const handleChange = (event) => {
        setShow(false)
        setValue(event.target.value);
    };
    
    const handleFood = () => {
        if (value === ''){
            alert("please choose the disease")
        }
        else {
            setShow(true);
        }
     }

  return (
      <>
        <div className='flex justify-center items-center my-4'> 
            <label>
                <p className='text-xl font-medium mb-4'>Choose the disease from the list:</p>
                    <div className='flex justify-center text-lg'>
                        <select className='' value={value} onChange={handleChange}>
                          <option value="">Choose the disease</option>
                          {DiseaseList.map(d => 
                              <option key={d.id} value={d.name} >{ d.name}</option>
                                )}
                        </select>  
                </div>
            </label>
        </div>

          {/* btn */}
          <div className='text-center'>
              <button onClick={handleFood} className='bg-blue-600 text-white px-4 rounded py-2 hover:bg-blue-700'>Submit</button>
          </div>
          {/* display */}
          {
              show && <div className='text-center mt-4'>
                  <p className='text-lg my-4'>Disease Name: {value}</p>
                  <div className='grid gap-4 grid-cols-2 grid-rows-1'>
                      <div className='text-right font-semibold'>Nutrients requirements:</div>
                      <div className='text-left'>
                          {DiseaseList.map(l => 
                              l.name === value ?
                                  l.nutrients.map(n =>
                                      <div key={n} className="text-lg" >{n}</div>
                                  ) : null
                             )}
                        
                      </div>
                  </div>
                  <div className='mt-4 grid gap-4 grid-cols-2 grid-rows-2'>
                      <div className='text-right font-semibold'>Food requirements:</div>
                      <div className='text-left'>
                          {DiseaseList.map(l =>
                              l.name === value ?
                                  l.food.map(f =>
                                      <div key={f} className="text-lg">{f}</div>
                                  ):null
                            )}
                      </div>
                  </div>
                     </div>
          }
      </>
  )
}

export default Disease