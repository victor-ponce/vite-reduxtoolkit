import React from 'react'
import Button from '@mui/material/Button'

const commonButton = ({children}) => {
  return (
    <Button>
      {children}
    </Button>
  )
}

export default commonButton