import React from 'react'
import Reservation from './Reservation'
function InfoNum({item,useStatus,indx,useGuest}){

    return(<div className = "container">
        <div style={
            (item.src)? {backgroundImage:`url(${item.src})`}:{backgroundColor:'grey'}}>
            <h1>{item.name}</h1>
            <h2>{item.class}</h2>
            <span>{item.status}</span>
        </div>
        <p>{item.info}</p>
        <Reservation useGuest={useGuest} indx = {indx} useStatus={useStatus} status = {item.status}/>
    </div>)
}

export default InfoNum;