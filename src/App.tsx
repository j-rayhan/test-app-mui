import * as React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import {
  Button,
  Grid,
  IconButton,
} from '@mui/material'
import { GitHub, GppGood } from '@mui/icons-material'
import {NavBar, Service, Works} from './component'

function Title() {
  return (
    <>
      <Typography variant='h4' mt={12} color='#556cd6' align='center'>
        Rewind <span style={{ color: 'black' }}>your screen</span>
      </Typography>
      <Typography variant='body2' mt={2} color='text.primary' align='center'>
        Why double-back when you can capture the first time?
        <br />
        Playback and share exactly what happened with share exactly what
        happened.
      </Typography>
      <Typography variant='body2' mt={2} color='text.secondary' align='center'>
        We're currently in <span style={{ color: '#556cd6' }}> BETA</span>
      </Typography>
      <Typography mt={2} component='div' align='center'>
        <Button
          variant='contained'
          style={{ padding: '8px 50px', borderRadius: 18 }}
        >
          Join Now
        </Button>
      </Typography>
    </>
  )
}

function Title2() {
  return (
    <>
      <Typography variant='h4' mt={3} color='#556cd6' align='center'>
        <span style={{ color: 'black' }}>The </span>{' '}
        <span style={{ fontStyle: 'italic' }}> Fastest </span>
        <span style={{ color: 'black' }}>way to add context</span>
      </Typography>
      <Typography variant='body2' mt={2} color='text.primary' align='center'>
        Don't stop when you can capture the first time a meeting.
        <br />
        Playback and share exactly what happened exactly what happened.
      </Typography>
    </>
  )
}

function Title3() {
  return (
    <>
      <Typography variant='h4' mt={4} color='#556cd6' align='center'>
        <span style={{ color: 'black' }}>Works </span> everywhere
        <span style={{ color: 'black' }}> you do</span>
      </Typography>
      <Typography variant='body2' mt={2} color='text.primary' align='center'>
        It does no't get faster than this Instantly embed replays within
        <br />
        the development tools you already use.
      </Typography>
      <Typography
        variant='h5'
        component={'div'}
        mt={2}
        color='text.secondary'
        align='center'
      >
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          sx={{ mr: 2 }}
        >
          <GppGood sx={{ mr: 1 }} /> Jira Software
        </IconButton>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          sx={{ ml: 2 }}
        >
          <GitHub sx={{ mr: 1 }} /> GitHub
        </IconButton>
      </Typography>
      <Typography mt={2} component='div' align='center'>
        <Button
          variant='contained'
          style={{ padding: '8px 50px', borderRadius: 18 }}
        >
          Join Now
        </Button>
      </Typography>
    </>
  )
}

export default function App() {
  return (
    <>
      <Container maxWidth='lg'>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <NavBar />
          </Grid>
          <Grid item xs={2} />
        </Grid>
        {/* Title */}
        <Title />
        <img
          src='https://images.unsplash.com/photo-1522770179533-24471fcdba45'
          alt='camera'
          style={{
            marginTop: 28,
            width: '100%',
            height: '70vh',
          }}
        />
        {/* Title Second*/}
        <Title2 />
        {/* Service */}
        <Service />
        {/* Works */}
        <Works />
        {/* Title Three*/}
        <Title3 />
        <Typography
          variant='body2'
          mt={20}
          color='text.secondary'
          align='center'
        >
          {'Copyright © '}
          <Link color='inherit' href='https://mui.com/'>
            Your Website
          </Link>{' '}
          {new Date().getFullYear()}.
        </Typography>
      </Container>
    </>
  )
}
