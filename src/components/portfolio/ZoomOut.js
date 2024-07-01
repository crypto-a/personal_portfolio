import React, { useEffect } from 'react'
import { Zoom } from 'react-awesome-reveal'

function ZoomOut({ children, category, data, ...rest }) {

  useEffect(() => {

  }, [category]);

  return (
    <Zoom triggerOnce {...rest}>
      {children}
    </Zoom>
  )
}

export default ZoomOut;
