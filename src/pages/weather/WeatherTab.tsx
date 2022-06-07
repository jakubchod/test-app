import { useState,useEffect } from "react"
import Box from '@mui/material/Box';
import { Grid} from '@material-ui/core';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import cityList from './../../city_list.json';
import axios from 'axios';


export const WeatherTab = () => {
  const [city, setCity] = useState(3094802);
  const [lat,setLat] = useState(50.083328);
  const [lon,setLon] = useState(19.91667);
  const [description,setDescription] = useState("change city");  

    const options = cityList.map((option) => {
        const firstLetter = option.name[0].toUpperCase();
        return {
          firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
          ...option,
        };
      });

    const handleInputChange = (event:any,value:any) => {
        console.log(value);
        setCity(value.id);
        setLat(value.coord.lat);
        setLon(value.coord.lon);
    }    

    useEffect(() => {
      console.log("api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid=1b8060e217911d83f31131ab7b0c6936");
      axios.get("http://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid=1b8060e217911d83f31131ab7b0c6936&units=metric&lang=pl")
      .then(res => {
        console.log(res.data.list[0].weather[0].description);
        setDescription(res.data.list[0].weather[0].description);       
      })
    }, [city])
    
      return (
        <Grid container justifyContent="center">
            <p> </p>
          <Box sx={{ m:2, width:"75%"}}>
          <Autocomplete
          onChange = {(event, value) => handleInputChange(event,value)}
          id="grouped-demo"
          options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
          groupBy={(option) => option.firstLetter}
          getOptionLabel={(option) => option.name}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="With categories" />}
        />
          </Box>
          <Box sx={{m:2}}>
            <h2>{description}</h2>
          </Box>
        </Grid>
        
      );
    
      }