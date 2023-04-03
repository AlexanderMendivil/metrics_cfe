import { Box, Grid, Typography } from '@mui/material'

export const Indications = () => {
  return (
    <Box sx={{ flexGrow: 1, marginLeft: 10 }}>
        <Typography variant='body1' align='center'>RHX</Typography>
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
                <p>HX</p>
                <p>Y</p>
                <p>Tanque</p>
            </Grid> 
        </Grid>
    </Box>
  )
}
