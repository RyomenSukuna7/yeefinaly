"use client"
import { useSelector } from "react-redux"
import Image from "next/image"
import { Alert, Button, TextField } from "@mui/material"
import { redirect, useRouter } from "next/navigation"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from "react"
import Link from "next/link"




export default function details({params}){
    const select=useSelector((data)=>data.user)
    const router=useRouter();
    const [open, setOpen] = useState(false);
    const [alertOpen, setAlertOpen] = useState(false); 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAlertClose = () => {
    setAlertOpen(false);
};
    return(
       <>
          <Button onClick={()=>router.push("/")} variant="contained" style={{backgroundColor:"black"}}>Back to home</Button>
            {
              
              
                select.map((datas)=>(
                    
                   
                  datas.id==params.productInfo?(
                    <>
                      <div id="imagesData" key={datas.id} style={{display:"flex",justifyContent:"center" ,flexWrap:"wrap",marginTop:"6vh"}}>
                          <Image src={`/${datas.name}`} width="500" height="500" alt="image not load"/>
                      </div>
                      <div id="rupess" style={{display:"flex",justifyContent:"center" ,flexWrap:"wrap"}}>
                             <h1>699</h1>
                      </div>
                      <div id="rupess" style={{display:"flex",justifyContent:"center" ,flexWrap:"wrap"}}>
                             <Button variant="contained" color="success" onClick={handleClickOpen}>Order Now</Button>
                             <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    PaperProps={{
                                      component: 'form',
                                      onSubmit: (event) => {
                                        event.preventDefault();
                                        const formData = new FormData(event.currentTarget);
                                        const formJson = Object.fromEntries(formData.entries());
                                        const email = formJson.email;
                                        console.log(email);
                                        handleClose();
                                      },
                                    }}
                                  >
                                    <DialogTitle>Thread Symphony</DialogTitle>
                                    <DialogContent>
                                      <DialogContentText>
                                        Please enter your Address and phone number
                                      </DialogContentText>
                                      <TextField
                                        autoFocus
                                        required
                                        margin="dense"
                                        id="name"
                                        name="address"
                                        label="Address"
                                        type="address"
                                        fullWidth
                                        variant="standard"
                                      />

                                     <TextField
                                        autoFocus
                                        required
                                        margin="dense"
                                        id="name"
                                        name="number"
                                        label="Number"
                                        type="number"
                                        fullWidth
                                        variant="standard"
                                      />
                                    </DialogContent>
                                    <DialogActions>
                                      <Button variant="contained"><Link href="/checking" style={{textDecoration:"none",color:"black"}}>Order</Link></Button>
                                    </DialogActions>
                                  </Dialog>
                      </div>
                    </>
                  ):(
                    <h1></h1>
                  )

                    
                   
                ))
            }

        
        
       </>
    )
}

