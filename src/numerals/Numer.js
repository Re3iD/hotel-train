
import React from 'react'


function Numer(props){
    
    return(<tr onClick = {()=>props.checkInd(props.indx)} style = {{cursor: 'pointer'}}><td>{props.id}</td><td>{props.class}</td><td style = {{
        backgroundColor:(props.status)? 'green':'red'
    }}>{(props.status)? 'Free':'Occupied'}</td></tr>)
}

export default Numer