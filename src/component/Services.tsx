import * as React from 'react'
import { Grid, Box, Typography } from '@mui/material'
import { supports } from '../utils/dumydb'

function Service() {
  return (
    <Grid mt={3} container spacing={3}>
      {supports.map(({ id, title, length, alias }) => (
        <Grid item xs key={id}>
          <Box bgcolor={'aliceblue'} minHeight={120} p={1}>
            <Typography variant='h5' color='#556cd6'>
              {title}
            </Typography>
            <Typography variant='h4' color='text.secondary'>
              {length}{' '}
              <span style={{ fontSize: '0.8rem', alignItems: 'center' }}>
                {alias}
              </span>
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  )
}

export default Service
