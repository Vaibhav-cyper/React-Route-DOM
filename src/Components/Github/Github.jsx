import React, { useEffect, useState } from 'react' 
function Github(){
    const [data , setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/Vaibhav-cyper')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])

    return(
        <div >
            Github Followers: {data.followers}
            <img src={data.avatar_url} alt="github pfp" width='300px'/>
        </div>
  )
}
export default Github;