import React,{useState} from 'react'


function Reservation (props){
    const useLog = (initialValue)=>{
        const [value,setValue] = useState(initialValue)
        
    const onChange = (event)=>{
        setValue(event.target.value)
    }
    const cleanVal = ()=>{
        setValue('')
    }
        return ({value, onChange,cleanVal})
      }
      const user = {name: useLog(''), lastName: useLog('')}
return(
    <div className = "container"><form class="form-group">
    <h1>{(props.status)? ('Room is free'):('Room is occupied')}</h1>
        <input className = "mr-4" {...user.name} placeholder = {'Name'}/>
        <input className = "mr-4" {...user.lastName} placeholder = {'Last Name'}/>
        <button className = "btn btn-success" type = {(props.status)? 'submit':'button'} onClick = {(event)=>{
            props.useGuest(user,props.indx)
            user.name.cleanVal()
            user.lastName.cleanVal()
            props.useStatus(props.indx)
        }}
        >Reserv</button>
        
    </form></div>

)

}

export default Reservation