import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

interface MetricsFormProps{
    step: number;
}
export const MetricsForm = ({step}: MetricsFormProps) => {

const context = useContext(AppContext);   
const [ valueHalf, setValueHalf ] = useState<Number>()
const [ valueOne, setValueOne ] = useState<Number>()
const [ valueTwo, setValueTwo ] = useState<Number>()
const [ valueThree, setValueThree ] = useState<Number>()
const [ valueFour, setValueFour ] = useState<Number>()
const [ valueFive, setValueFive ] = useState<Number>()
const [ valueSix, setValueSix ] = useState<Number>()
const [ valueSeven, setValueSeven ] = useState<Number>()
const [ valueEight, setValueEight ] = useState<Number>()
const [ valueNine, setValueNine ] = useState<Number>()
const [ valueTen, setValueTen ] = useState<Number>()

useState()
const getValueHalf = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{if(Number(e.target.value)){
    setValueHalf(+e.target.value)
}}
const getValueOne = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {if(Number(e.target.value)){
    setValueOne(+e.target.value)
    
}}
const getValueTwo  = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {if(Number(e.target.value)){
    setValueTwo(+e.target.value)
    
}}
const getValueThree  = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {if(Number(e.target.value)){
    setValueThree(+e.target.value)
    
}}
const getValueFour  = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {if(Number(e.target.value)){
    setValueFour(+e.target.value)
    
}}
const getValueFive = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {if(Number(e.target.value)){
    setValueFive(+e.target.value)
    
}}
const getValueSix  = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {if(Number(e.target.value)){
    setValueSix(+e.target.value)
    
}}
const getValueSeven  = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {if(Number(e.target.value)){
    setValueSeven(+e.target.value)
    
}}
const getValueEight  = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {if(Number(e.target.value)){
    setValueEight(+e.target.value)
    
}}
const getValueNine = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {if(Number(e.target.value)){
    setValueNine(+e.target.value)
    
}}
const getValueTen  = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {if(Number(e.target.value)){
    setValueTen(+e.target.value)

}}
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant='h5' align='center'>Lectura</Typography>
      <Grid container>
            <Grid item xs={6} sx={{marginTop: 2}}>
                <Typography variant='body1' align='center'>Tiempo de la medición en min.</Typography>

                <Box sx={{marginTop: 3}}>

                    <Typography variant='body1' align='left'>1/2</Typography>
                </Box>

                <Box sx={{marginTop: 3}}>

                    <Typography variant='body1' align='left'>1</Typography>
                </Box>

                <Box sx={{marginTop: 3}}>

                    <Typography variant='body1' align='left'>2</Typography>
                </Box>

                <Box sx={{marginTop: 3}}>

                    <Typography variant='body1' align='left'>3</Typography>
                </Box>

                <Box sx={{marginTop: 3}}>

                    <Typography variant='body1' align='left'>4</Typography>
                </Box>

                <Box sx={{marginTop: 3}}>
                    <Typography variant='body1' align='left'>5</Typography>
                </Box>

                <Box sx={{marginTop: 3}}>
                    <Typography variant='body1' align='left'>6</Typography>
                </Box>

                <Box sx={{marginTop: 3}}>
                    <Typography variant='body1' align='left'>7</Typography>
                </Box>

                <Box sx={{marginTop: 3}}>
                    <Typography variant='body1' align='left'>8</Typography>
                </Box>

                <Box sx={{marginTop: 3}}>
                    <Typography variant='body1' align='left'>9</Typography>
                </Box>

                <Box sx={{marginTop: 3}}>
                    <Typography variant='body1' align='left'>10</Typography>
                </Box>
            </Grid>
            <Grid item xs={6} sx={{marginTop: 2}}>
                    <Typography variant='body1' align='left'>Medida</Typography>
                <TextField onChange={getValueHalf} id="standard-basic" label="1/2" variant="standard" />
                <TextField onChange={getValueOne} id="standard-basic" label="1" variant="standard" />
                <TextField onChange={getValueTwo} id="standard-basic" label="2" variant="standard" />
                <TextField onChange={getValueThree} id="standard-basic" label="3" variant="standard" />
                <TextField onChange={getValueFour} id="standard-basic" label="4" variant="standard" />
                <TextField onChange={getValueFive} id="standard-basic" label="5" variant="standard" />
                <TextField onChange={getValueSix} id="standard-basic" label="6" variant="standard" />
                <TextField onChange={getValueSeven} id="standard-basic" label="7" variant="standard" />
                <TextField onChange={getValueEight} id="standard-basic" label="8" variant="standard" />
                <TextField onChange={getValueNine} id="standard-basic" label="9" variant="standard" />
                <TextField onChange={getValueTen} id="standard-basic" label="10" variant="standard" />
            </Grid>

      </Grid>

    </Box>
  )
}
