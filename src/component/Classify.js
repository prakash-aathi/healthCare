import React, { useState, useRef } from 'react';
import { Db } from '../localstorage/Db';
import Disease from './Disease';
import Bmi from './Bmi';

const Classify = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef();
    const [data, SetData] = useState(null);
  
    const[home, SetHome] = useState({home: true, food: false, bmi: false});

    const onFileChange = (event) => {
      SetData(null)
      setSelectedFile(event.target.files[0]);
    };
  
    const onFileUpload = () => {
        SetData(null)
        console.log("onFileUpload");
        Db.forEach((item) => { 
            if(item.name === selectedFile.name){
                SetData(item);
                console.log(item);
            }
        })
    };

    const handlePage = () => {
        SetHome({home: true, food: false, bmi: false})
    }

    const handlePageFood = () => { 
        SetHome({home: false, food: true, bmi: false})
    }

    const handlePageBmi = () => { 
        SetHome({home: false, food: false, bmi: true})
    }


  
    const fileData = () => {
      if (selectedFile) {
        return (
          <div className='mt-2' >
            <h2 className='mb-2 text-xl font-semibold'>File Details:</h2>
            {/* <p>File Name: {selectedFile.name}</p> */}
            <p>File Type: {selectedFile.type}</p>
            <p>Last Modified: {selectedFile.lastModifiedDate.toDateString()}</p>
          </div>
        );
      } else {
        return (
          <div>
            <br />
            <h4>Choose before Pressing the Upload button</h4>
          </div>
        );
      }
    };

    const navBar = () => {
        return (
        <div className='flex justify-between items-center bg-blue-600 text-white py-4 px-4 pr-16 font-semibold'>
            <div className=' text-2xl  ' >Healthcare Companion</div>
            <div>
                <button onClick={handlePage} className='bg-gray-400 mx-2 px-2 py-2 rounded hover:bg-gray-600' >Nutrients Finder</button>
                <button onClick={handlePageFood} className='bg-gray-400 mx-2 px-2 py-2 rounded hover:bg-gray-600' >Food recommender</button>
                <button onClick={handlePageBmi} className='bg-gray-400 mx-2 px-2 py-2 rounded hover:bg-gray-600' >BMI </button>
            </div>
        </div>)
    }

    if (home.home) { 
        return (
            <div className=''>
                {navBar()}
                <div className='flex flex-col justify-center items-center mt-6'>
                    <div className='bg-gray-300 px-6 py-2 rounded '>
                        <h3 className='py-3 text-lg  '>Upload your image</h3>
                        <div>
                            <input type="file" onChange={onFileChange} ref={fileInputRef} />
                            <button onClick={() => fileInputRef.current.click()}>
                                
                            </button>
                            <button className='bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded' onClick={onFileUpload}>Classify</button>
                        </div> 
                            {selectedFile && fileData()}    
                    </div>
                
                        {data &&
                            <table class=" border-collapse">
                                <tbody>
                                    <tr class="border-b">
                                        <td class="py-2 px-4 text-left font-bold">Nutrient</td>
                                        <td class="py-2 px-4 text-left font-bold">Amount</td>
                                        <td class="py-2 px-4 text-left font-bold">Unit</td>
                                    </tr>
                                    <>
                                        <tr class="border-b">
                                            <td class="py-2 px-4">Carbohydrates</td>
                                            <td class="py-2 px-4">{data.nutrients[0]}</td>
                                            <td class="py-2 px-4">gram</td>
                                        </tr>
                                        <tr class="border-b">
                                            <td class="py-2 px-4">Proteins</td>
                                            <td class="py-2 px-4">{data.nutrients[1]}</td>
                                            <td class="py-2 px-4">gram</td>
                                        </tr>
                                        <tr class="border-b">
                                            <td class="py-2 px-4">Fiber</td>
                                            <td class="py-2 px-4">{data.nutrients[2]}</td>
                                            <td class="py-2 px-4">gram</td>
                                        </tr>
                                        <tr class="border-b">
                                            <td class="py-2 px-4">Fat</td>
                                            <td class="py-2 px-4">{data.nutrients[3]}</td>
                                            <td class="py-2 px-4">gram</td>
                                        </tr>
                                        <tr class="border-b">
                                            <td class="py-2 px-4">Calories</td>
                                            <td class="py-2 px-4">{data.nutrients[4]}</td>
                                            <td class="py-2 px-4">kCal</td>
                                        </tr>
                                        <tr class="border-b">
                                            <td class="py-2 px-4">Sodium</td>
                                            <td class="py-2 px-4">{data.nutrients[5]}</td>
                                            <td class="py-2 px-4">mg</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 px-4">Potassium</td>
                                            <td class="py-2 px-4">{data.nutrients[6]}</td>
                                            <td class="py-2 px-4">mg</td>
                                        </tr>
                                    </>
                    
                                </tbody>
                            </table>
                        }
                </div>    
            </div>
          )
    }

    if (home.food) {
        return (
            <>
            {navBar()}
            <Disease/>
            </>
        )
    }

    if (home.bmi) {
        return (
            <>
                {navBar()}
                <Bmi/>
            </>
        )
    }

}

export default Classify