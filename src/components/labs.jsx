import React from 'react'

const labs =(props)=> {
    const labs = ["Bejing Changping","Contract - IIlumina","Contract KBiosciences",
    "Enkhuizen","Ghant","Gilroy","Landskrona","Novartis","Plant Analysis Group SBI","Santiago",
   "Sarrians","Singapore","Slater","Stanton","Toulouse","Uberlandia"]
   return (
    <div className="row">
    <label className="col-sm-2">{props.label}</label>
       <select required className="col-sm-2">
       <option value="" disabled selected>Choose a drink</option>
           {labs.map((item)=><option key={item}> {item}</option>)}
       </select>
       </div>
   )
}

export default labs
