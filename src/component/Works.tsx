import * as React from 'react'
import { Grid, Box, Typography } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb'
import { works } from '../utils/dumydb'

function Works() {
  return (
    <Grid mt={2} container spacing={3}>
          {works.map(({ id, title, subtitle }) => (
            <Grid item xs={6} sm={4} key={id}>
              <Box
                bgcolor={'#556cd6'}
                minHeight={240}
                p={4}
                paddingBottom={1}
                borderRadius={2}
              >
                <Box maxWidth={42} borderRadius={1} p={1} bgcolor='#FFFFFF0E'>
                  <AdbIcon
                    sx={{ color: 'aliceblue', display: { md: 'flex' } }}
                  />
                </Box>
                <Typography variant='h5' color='#FFFFFF'>
                  {title}
                </Typography>
                <Typography variant='body1' color='aliceblue'>
                  {subtitle}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
  )
}

export default Works
