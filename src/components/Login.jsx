import React,{useState} from 'react'
import { Input, Button, Snackbar } from "@mui/material";
import { Details } from './Details';

export const Login = ({hobbies}) => {
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const [open, setOpen] = useState(false);
    const [userInfo,setUserInfo]=useState([])
    const [snackBar,setSnackBar]=useState(false)

     const handleClose = (event, reason) => {
       if (reason === "clickaway") {
         return;
       }
       setSnackBar(false);
     }

    const handleLoginForm=async(e)=>{
        e.preventDefault()
        
        const data=await fetch('http://localhost:3030/user')
        const res=await data.json()
        
        res.map(ele=>{
            setUserInfo([ele])
            if(ele.userName===userName && ele.password===password){
                setOpen(true)
            }else{
                setSnackBar(true)
            }
            return null
        })
    }

  return (
<>
    {open?<Details
    hobbies={hobbies}
    userInfo={userInfo}
    />:<div>
      <form onSubmit={handleLoginForm} className="loginForm">
        <Input
          id="userName"
          className="input"
          placeholder="User Name"
          type="text"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          required
        ></Input>
        <Input
          className="input"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        ></Input>
        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
      <Snackbar
        open={snackBar}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Invalid Username or Password"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      />
    </div>}

</>
    
  );
}
