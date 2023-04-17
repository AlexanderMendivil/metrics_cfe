import { Box, Grid, Typography } from '@mui/material'
interface IndicationsProps{
    title: string;
    line: string;
    guard: string;
    land: string;
}

export const Indications = ({ title, line, guard, land }: IndicationsProps) => {
  return (
    <Box sx={{ flexGrow: 1, marginLeft: 10 }}>
        <Typography variant='body1' align='center'>{title}</Typography>
        <Grid container sx={{marginTop: 8}}>
            <Grid item xs={4}>
                <p>Línea</p>
                <p>Guarda</p>
                <p>Tierra</p>
            </Grid> 
            <Grid item xs={4}>
                <p>{'------------------->'}</p>
                <p>{'------------------->'}</p>
                <p>{'------------------->'}</p>
            </Grid> 
            <Grid item xs={4}>
                <p>{line}</p>
                <p>{guard}</p>
                <p>{land}</p>
            </Grid> 
        </Grid>
    </Box>
  )
}
