import React, { useState } from 'react'
// import { useState } from 'react';


export default function Tasks() {

let newjob;
const sjob=(e)=> {
    newjob=e.target.value;
}



  const [job,setjob]=useState([]);  
  const handleclick=()=> {
    setjob(j=>[...j,newjob]);
    document.querySelector("#inp").value="";
  }

  const up=(i)=> {
    let arr=[...job];
    let temp=arr[i];
    arr[i]=arr[i-1];
    arr[i-1]=temp;
    setjob(arr);
  }
  const down=(i)=> {
    let arr=[...job];
    let temp=arr[i];
    arr[i]=arr[i+1];
    arr[i+1]=temp;
    setjob(arr);
  }


  let jb=job.map((ele,index)=> {
    return <div className='maintask' key={index}>
          <p>{ele}</p> 
          <button id='removebtn' onClick={()=>remove(index)}>Remove</button>
          <button id='upbtn' onClick={()=>up(index)}>Move Up</button>
          <button id='upbtn' onClick={()=>down(index)}>Move Down</button>
        </div>
  });

  const remove =(index)=> {
    setjob(job.filter((elem,i)=> i!==index));
  }


  return (
    <>
        <div className="mainarea">
            <div className="inputarea">
              <input onChange={sjob} type="text" id='inp' placeholder='Enter a task'/>
              <button id='addbtn' onClick={handleclick}>Add Task</button>
            </div>
            <div className="taskarea">
                <div id="task">{jb}</div>
            </div>
        </div>
      
    </>
  )
}

