import { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components';    

const fadeInOut = keyframes`
  from{
    opacity: 0;
  }
  10% {
    opacity: 100;
  }
  90%{
    opacity:100;
  }
  to{
    opacity:0;
  }
`

const StyledDialog = styled.dialog`
  position: fixed;
  z-index: 3;

  margin-top: 5px;
  padding: .2rem .5rem;
  height: 1rem;
  

  border-radius: 18px;
  border: 2px solid #525252;
  background-color: #f5f5f5e6;

  font-size: .8rem;
  line-height: 1rem;
  color: #525252;

  animation: ${fadeInOut} 3s forwards;
`

function Message({ show , setShow }) {

  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false)
    }, 3000)

    return () => {
      clearTimeout(timeId)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!show) {
    return null;
  } else {
    return (
    <StyledDialog open={true}>
      Item added to cart
    </StyledDialog>
  )
  }

  
}

Message.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired
} 

export default Message;