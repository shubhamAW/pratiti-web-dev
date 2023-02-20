import './LuckyNumber.css';

import {useState} from 'react';

function LuckyNumber(){
    const[luckyNumber ,setLuckyNumber] = useState(0); // 0 is the initial value
     function generate(){
         setLuckyNumber(Math.ceil(Math.random() * 10) + 1);
    }
    return (
        <div class="main__container">
            <button class="btn btn__click" onClick={generate} disabled={luckyNumber >0}>Click Here</button>
           {luckyNumber > 0 && <h1>Your Lucky Number is {luckyNumber}</h1>}
         </div>
    );
}

export default LuckyNumber;