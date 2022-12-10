import { Button } from '@mui/material'
import * as React from 'react'
import { buttonBgColor } from '../utils/constant'

interface Props {
  label: string;
  onClick: () => void;
  style?: React.CSSProperties;
}

function ButtonX(props: Props) {
  return (
    <Button
      variant='contained'
      style={{
        padding: '8px 5rem',
        borderRadius: 28,
        background: `linear-gradient(90deg, ${buttonBgColor} 30%, #F9F9F9 100%)`,
        ...props.style,
      }}
      onClick={props.onClick}
    >
      {props.label}
    </Button>
  )
}

export default ButtonX
