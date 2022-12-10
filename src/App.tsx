import * as React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { Button, Grid, IconButton } from '@mui/material'
import { GitHub, GppGood } from '@mui/icons-material'
import { ButtonX, NavBar, Service, Works } from './component'
import { buttonBgColor } from './utils/constant'

function Title() {
  return (
    <>
      <Typography
        variant='h4'
        mt={12}
        fontWeight='900'
        color='#645af3'
        align='center'
      >
        Rewind <span style={{ color: 'white' }}>your screen</span>
      </Typography>
      <Typography variant='body2' mt={4} color='white' align='center'>
        Why double-back when you can capture the first time?
        <br />
        Playback and share exactly what happened with share exactly what
        happened.
      </Typography>
      <Typography variant='body2' mt={3} color='white' align='center'>
        We're currently in <span style={{ color: '#556cd6' }}> BETA</span>
      </Typography>
      <Typography mt={2} component='div' align='center'>
        <ButtonX label="Join Now" onClick={() => {}} />
      </Typography>
    </>
  )
}

function Title2() {
  return (
    <>
      <Typography
        variant='h4'
        fontSize={'1.6rem'}
        mt={4}
        color='white'
        fontWeight={'700'}
        align='center'
      >
        The
        <span style={{ marginRight: '0.2em', fontStyle: 'italic', color: '#645af3' }}> Fastest </span>
        way to add context
      </Typography>
      <Typography variant='body2' mt={1} color='white' align='center'>
        Don't stop record a screencast, schedule a meeting.
        <br />
        Replayable creates a library of what can share instantly.
      </Typography>
    </>
  )
}

function Title3() {
  return (
    <>
      <Typography variant='h4' fontWeight={'900'} mt={5} color='white' align='center'>
        Works 
        <span style={{ color: '#645af3' }}> everywhere </span> you do
      </Typography>
      <Typography variant='body2' mt={1.2} color='white' align='center'>
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
          sx={{ mr: 2, color: 'white', fontWeight: '700' }}
        >
          <GppGood sx={{ mr: 1 }} /> Jira Software
        </IconButton>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          sx={{ ml: 2, color: 'white', fontWeight: '700' }}
        >
          <GitHub sx={{ mr: 1 }} /> GitHub
        </IconButton>
      </Typography>
      <Typography mt={2} component='div' align='center'>
        <ButtonX label="Join Now" onClick={() => {}} />
      </Typography>
    </>
  )
}

export default function App() {
  return (
    <>
      <Container maxWidth='lg'>
        <NavBar />
        {/* Title */}
        <Title />
        <img
          src='https://raw.githubusercontent.com/j-rayhan/test-app-mui/main/src/assets/image/bg.png'
          alt='camera'
          style={{
            marginTop: '4rem',
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
