import { useEffect } from 'react'
import PropTypes from 'prop-types'
    
function Message({ show , setShow }) {

  // On componentDidMount set the timer
  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setShow(false)
    }, 3000)

    return () => {
      clearTimeout(timeId)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // If show is false the component will return null and stop here
  if (!show) {
    return null;
  }

  // If show is true this will be returned
  return (
    <dialog open={true}>
      Item added to cart.
    </dialog>
  )
}

Message.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired
} 

export default Message;