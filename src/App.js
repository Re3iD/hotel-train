import React,{useState} from 'react'
import NumeralsTable from './numerals/NumeralsTable';
import InfoNum from './InfoNum/InfoNum';


function App() {
const [numerals,setStatus]=useState([{id:0,num:1,name: 'Only for reach',class:'VIP',src:'',status:true,info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"},
{id:1,num:24,name:'Mega econom' ,class:'Standart',src:'',status:true,info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"},
{id:2,num:5,name:'SuperVilla',class:'Deluxe',src:'',status:true,info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"}
])

const useStatus = (index)=>{
  let indx = index
  let result = numerals.map((el,i)=>{
    return indx===i?{...el,status:false}:el;
  })
  setStatus(result)
}

const [guests,setGuest] = useState({data:[]})

const useGuest = (value,indx) =>{
  if (!numerals[indx].status) return;
  let guest = {name: value.name,lastName: value.lastName,id: numerals[indx].num}
  let copy = guests.data.slice()
  copy.push(guest)
  setGuest({data:copy})
}

  const [index,setIndex] = useState('')
  const updateIndex = (value)=>{
    console.log(value)
    setIndex(value)
  }
  
  
  return (<div className="container">
    <NumeralsTable upData = {updateIndex} numerals={numerals}/>
    
    {(index || index===0)?(<div><InfoNum useGuest={useGuest} indx = {index} useStatus = {useStatus} item = {numerals[index]} />
    <button className = "btn btn-danger" style = {{position:'absolute',top:'185px',left:'740px'}} onClick={()=>updateIndex(undefined)}>X</button>
    </div>):(<div></div>)}
   {JSON.stringify(guests)}
    </div>
  );
}

export default App;
