import React from 'react'

function Tabs({menu, children, ButtonContainer = 'menu', ...props}) {
    console.log("this is tab");
  return (
    <>
      <ButtonContainer {...props}>{menu}</ButtonContainer>
      {children}
    </>
  )
}

export default Tabs
