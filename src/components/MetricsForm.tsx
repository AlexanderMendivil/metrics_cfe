import { Box, Button, Grid, TextField, Typography } from "@mui/material"

export const MetricsForm = () => {
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
                <TextField id="standard-basic" label="1/2" variant="standard" />
                <TextField id="standard-basic" label="1" variant="standard" />
                <TextField id="standard-basic" label="2" variant="standard" />
                <TextField id="standard-basic" label="3" variant="standard" />
                <TextField id="standard-basic" label="4" variant="standard" />
                <TextField id="standard-basic" label="5" variant="standard" />
                <TextField id="standard-basic" label="6" variant="standard" />
                <TextField id="standard-basic" label="7" variant="standard" />
                <TextField id="standard-basic" label="8" variant="standard" />
                <TextField id="standard-basic" label="9" variant="standard" />
                <TextField id="standard-basic" label="10" variant="standard" />
            </Grid>

      </Grid>
      <Box sx={{alignSelf: 'right', marginLeft: 35, marginTop: 1}} display="flex" alignItems="flex-end" justifyContent="center">
          <Button variant="outlined">SIGUIENTE</Button>
      </Box>
    </Box>
  )
}
