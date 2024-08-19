import { useState } from "react";
function Todo(){
    const [Task,setTask]=useState("");
    const [listTsk,setlistTsk]=useState(["crat content SM","creat web tempe","look new work"]);

    function handelAdd(e){
        setTask(e.target.value);
    }
     function handelsubit(e){
        e.preventDefault();
        Task.trim() !=="" ? setlistTsk([...listTsk,Task]) : alert("please kteb chi l3iba") 
        setTask("")
     }
     function rhandeleove(i){
        const removeTSK= listTsk.filter((_,index)=> i !== index );
        // console.log(removeTSK)
        setlistTsk(removeTSK)
     }
     function handelup(i){
        if( i > 0){
        const uplist=[...listTsk];
        [uplist[i],uplist[i-1]]=[uplist[i-1],uplist[i]]
        setlistTsk(uplist)
        }else{
            alert("sir lhih ol3eb ")
        }

     }
     function handeldown(i){
        if( i < listTsk.length){
            const uplist=[...listTsk];
            [uplist[i],uplist[i+1]]=[uplist[i+1],uplist[i]]
            setlistTsk(uplist)
            }else{
                alert(listTsk.length)
            }
    
     }

        return(
             <div className="container">
                <h1>TO DO LOST </h1>
                <form onSubmit={handelsubit}>
                    <input type="text" name="task" value={Task} onChange={handelAdd}/>
                    <button type="submit">Submit</button>
                </form> 
                <ol>
                {listTsk.map((taske,i)=>(
                   
                    <li key={i}>
                    {taske}
                    <button onClick={()=>rhandeleove(i)}> Delet </button>
                    <button onClick={()=>handelup(i)}> 👆 </button>
                    <button onClick={()=>handeldown(i)}> 👇 </button>
                    </li>
                    
                ))}
                </ol>
             </div>
        )
}
export default Todo;