// eslint-disable-next-line no-unused-vars
import React, {useStae,useRef} from 'react'

const UncForm = () => {
    // const [name,setName]=useStae("");
      const nameRef=useRef(null);
      const ShowName =()=>{ 
        alert(nameRef.current.value);
        nameRef.current.value="";
      }
      console.log(nameRef);

  return (
    <div>
    <label htmlFor="">Name :</label>
    <input className='border-2 m-2 p-2' type="text" placeholder='Your name' ref={nameRef}/>
    <button onClick={ShowName}className='border-2 '>Submit</button>
    </div>
  )
}

export default UncForm