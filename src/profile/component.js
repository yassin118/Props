import React from "react"

const Profile=({props})=>{

    const AlertMyInput = name => alert(name);
const styleObject = { color : "red" , textAlign: 'center'}
 return(
    <div style={styleObject} >
      <h1>{props.name}</h1>

     <h1>{props.bio}</h1>
     <h1>{props.profession}</h1>
     <h1 className="profilephoto" >  Profile photo :  </h1> 
     < img width="620" height="340"  src="/enfant.jpg" />
 

 <button onClick={() => props.alertMyInput(`My name is Yassin Hafi `)}>
     ClickMe
   </button>
   
   
    </div>
 )
    
}
export default Profile