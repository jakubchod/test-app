import { useState,useEffect } from "react"
import Box from '@mui/material/Box';
import { Grid , Button} from '@material-ui/core';


interface InputFormProps{

}

const storageFormKey = "inputValue";

export const InputForm = (props?: InputFormProps) => {
    
    const [displayError,setDisplayError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>();
    
    const [inputValue,setInputValue] = useState<string>();
    const allowSubmit = !(displayError || !inputValue);

    const handleInputChange = (event:any) => {
        const inputLength = event.target.value.length;
        setInputValue(event.target.value);
        if(inputLength <3){
            setDisplayError(true);
            setErrorMessage("Too short!");
        } else if (inputLength>20){
            setDisplayError(true);
            setErrorMessage("Too long!");
        } else {    
            setDisplayError(false);
        }
    }

    const handleSubmit = ()=>{
        if(allowSubmit){
            localStorage.setItem(storageFormKey,inputValue);
        }
    }

    useEffect (() =>{
        const localStorageData = localStorage.getItem(storageFormKey);
        if (!!localStorageData){
            setInputValue(localStorageData);
        }
    }, [])

    return (
        <Grid container justifyContent="center">
    
          <Box sx={{ width:"75%"}}>
            <div style={{display:"flex", flexDirection:"column"}}> 
              {displayError && <div style={{color:"red"}}>{errorMessage}</div>}
              <input onInput= {handleInputChange} value= {inputValue} type="text"/>
              <button onClick= {handleSubmit} disabled={!allowSubmit} >Submit</button>
             
            </div>
          </Box>
        </Grid>
    )
}