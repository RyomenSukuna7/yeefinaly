
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import ErrorMessage from "./errorMessage";
import Link from "next/link";
import { Button } from "@mui/base";
import Redirects from "./redirects";
export default async function Checking (){
    const {getUser}=getKindeServerSession();
    const user=await getUser();
        
    return(
        <>
           {

            // (!user)?<ErrorMessage/>:redirect("/checking/pay")
            (!user)?<ErrorMessage/>:<Redirects/>

            
           }

           
        </>
    )
}