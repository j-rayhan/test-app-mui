import * as React from 'react'
import { Grid, Box, Typography } from '@mui/material'
import { supports } from '../utils/dumydb'

function Service() {
  return (
    <Grid mt={3} container spacing={3}>
      {supports.map(({ id, title, length, alias }) => (
        <Grid item xs key={id}>
          <Box minHeight={120} p={1}>
            <Typography variant='h5' fontSize={'1.2em'} color='#645af3'>
              {title}
            </Typography>
            <Typography variant='h4' my={1} fontWeight={'900'} color='white' style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: id === 5 ? '3.7rem' : '2rem',
            }}>
              {length}
              <span style={{ marginLeft: 4, fontWeight: '400', fontSize: '0.8rem' }}>
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
