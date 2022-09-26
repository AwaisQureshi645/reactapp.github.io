import React, { useState } from 'react';
import './style.css'

export default function Calculator() {

    const [Result, setResult] = useState('');  
  

    const handler = (e) => {
        let a = e.target.name;
        setResult(Result?.concat(e.target?.name));
     
    }


    const calculate=()=>{
   
        try{

            setResult(Number(eval(Result).toString()).toFixed(1));
        }
        catch(error){
        setResult("invalid")
        }
    }
// change handler
const valueChange=(e)=>{
    setResult(e.target.value);
}

    return (

        <>




            <div className="container">
                <div className="row">

                    <div className="box">

                        <input type="text" id="inputNumber" value={Result} onChange={valueChange} className="form-control fs-1 fw-bolder" aria-describedby="passwordHelpBlock" />

                        <div className="container-fluid">
                            <div className="row">
                                <div className="col">
                                    <button type='number ' onClick={()=>{
                                        setResult("");
                                    }} name='C' className='mt-5  ms-1 fw-bolder ' id='Green' >C</button>
                                    <button type='number ' onClick={()=>{
                                                setResult(Result?.slice(0,-1));
                                    }}  className='mt-5 ms-3 fs-3' id='orange'>DEL</button>
                                    <button type='number ' onClick={handler} name=')' className='mt-5 ms-3 fs-3' id='orange' >%</button>
                                    <button type='number ' onClick={handler} name='/' className='mt-5 ms-3 fs-3' id='orange' >/</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <button type='number ' onClick={handler} name='9' className='mt-2  ms-1 fs-3' >9</button>
                                    <button type='number ' onClick={handler} name='8' className='mt-2 ms-3 fs-3' >8</button>
                                    <button type='number ' onClick={handler} name='7' className='mt-2 ms-3 fs-3' >7</button>
                                    <button type='number ' onClick={handler} name='*' className='mt-2 ms-3 fs-3' id='orange' >*</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <button type='number ' onClick={handler} name='6' className='mt-2  ms-1 fs-3' >6</button>
                                    <button type='number ' onClick={handler} name='5' className='mt-2 ms-3 fs-3' >5</button>
                                    <button type='number ' onClick={handler} name='4' className='mt-2 ms-3 fs-3' >4</button>
                                    <button type='number ' onClick={handler} name='+' className='mt-2 ms-3 fs-3' id='orange'>+</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <button type='number ' onClick={handler} name='1' className='mt-2  ms-1 fs-3' >1</button>
                                    <button type='number ' onClick={handler} name='2' className='mt-2 ms-3 fs-3' >2</button>
                                    <button type='number ' onClick={handler} name='3' className='mt-2 ms-3 fs-3' >3</button>
                                    <button type='number ' onClick={handler} name='-' className='mt-2 ms-3 fs-3' id='orange' >-</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <button type='number ' onClick={handler} name='0' className='mt-2  ms-1 fs-3' >0</button>
                                    <button type='number ' onClick={handler} name='.' className='mt-2 ms-3 fs-3' >.</button>
                                    <button type='number ' onClick={calculate} name='=' className='mt-2 ms-3 fs-3' id='equal' >=</button>
                                   
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </div>
        </>

    )
}
