import * as React from 'react'
import { Grid, Box, Typography } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb'
import { works } from '../utils/dumydb'
import { themeBgColor } from '../utils/constant'

function Works() {
  return (
    <Grid
      mt={2}
      container
      spacing={3}
      style={{
        background: `radial-gradient(closest-side, #ffffffA8, ${themeBgColor}, ${themeBgColor})`,
      }}
    >
      {works.map(({ id, title, subtitle }) => (
        <Grid item xs={12} sm={6} md={4} key={id}>
          <Box
            bgcolor={'#231f34'}
            minHeight={240}
            p={4}
            borderRadius={2}
            style={{ height: '100%' }}
          >
            <Box
              maxWidth={42}
              display='flex'
              alignItems='center'
              justifyContent={'center'}
              borderRadius={1}
              p={1}
              bgcolor='#FFFFFF0E'
            >
              <AdbIcon sx={{ color: 'aliceblue', display: { md: 'flex' } }} />
            </Box>
            <Typography
              variant='h5'
              fontSize={'1.4em'}
              fontWeight={'600'}
              my={1}
              color='#FFFFFF'
            >
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
