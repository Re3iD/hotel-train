import React from 'react'
import Numer from './Numer'




function NumeralsTable({numerals,upData}){
    return(
        <div className = "container">
        <table className = "table table-dark">
        <tbody>
            <tr><th>№</th><th>Class</th><th>Status</th></tr>
            {numerals.map((item,indx)=>{
                return <Numer checkInd = {upData} onClick={()=>console.log(indx)} id = {item.num} class = {item.class}
                status={item.status} key={indx} indx={indx}/>
            })}
            </tbody>
        </table>
        </div>
    )
}

export default NumeralsTable