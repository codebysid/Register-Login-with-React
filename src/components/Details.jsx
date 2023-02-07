import React from 'react'
import { Button } from "@mui/material";

export const Details = ({hobbies,userInfo}) => {
  return (
    <div>
        {userInfo && userInfo.map((ele,key)=>{
            return (
              <div className="details" key={key}>
                <p>
                  <span className="title">Name:</span>
                  {ele.name}
                </p>
                <p>
                  <span className="title">Hobby:</span>
                  {
                    ele.checkBoxes.map((ele,key)=>{
                        return ele===true?<span key={key} id='hobby'>{hobbies[key]},</span>:null
                        
                    })
                  }
                </p>
                <p>
                  <span className="title">Gender:</span>
                  {ele.gender}
                </p>
                <Button variant="contained" type="submit"
                onClick={()=>{
                    window.location.reload()                    
                }}
                >
                  LogOut
                </Button>
              </div>
            );
        })}
    </div>
  )
}
