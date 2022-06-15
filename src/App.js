import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './App.css';

//function app
function App() {
  const [date, setDate] = useState('');
  const[title,setTitle]=useState('');
  const[details,setDetails]=useState('');
  const[items,setItems]=useState([]);

  //funtion to add notes title and notes details
  
  const addItems=()=>{
    setItems([...items,[title,details,date]]);
    setTitle('');
    setDetails('');
  }
  
  return (
    <div className="App">
      {/* heading */}
      <div className='heading' >
        My notes
      </div>

      {/* date picker component */}

      <div>
        <DatePicker 
        selected={date} 
        onChange={(date) => setDate(date)} 
        excludeDates={[date]}
        placeholderText='Please add a date!!'  />
      </div>
      <div>
      {date&&(
          <>
          {/* input to enter notes title */}
          
          <div>
           <input 
           placeholder='Enter note title' 
           className='inputBox'
           value={title}
           onChange={(e)=>setTitle(e.target.value)}
           >
          </input>
          </div>

          {/* input box to enter details */}
          
          <div>
           <input 
           placeholder='Enter note details'
           className='inputBox'
           value={details}
           onChange={(e)=>setDetails(e.target.value)}>
           </input>
           </div>
          
          {/* add notes button */}

           <button 
           type='submit' 
           onClick={addItems} 
           className='buttonAdd'>
            Add note!!
            </button>
          </>
       )}
       
        <div>
         {
           //map function used to map notes data and display them individually
       items.map((data,index)=>{
         return(
           <>
           <div className='outerDiv'>
             <div className='innerDiv'>{`Note title: ${data[0]}`}</div>
             <div className='innerDiv'>{`Note content: ${data[1]}`}</div>
             <div className='innerDiv'>{`Note timespan: ${data[2].toDateString()}`}</div>
            </div>
           
           </>
         )
       })
     }
    </div>
  </div>
</div>
  );
}

export default App;
