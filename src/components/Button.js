import PropTypes from 'prop-types'

const Button = ({ color, text }) => {
    const onClickAction = () => {
        console.log('Clicked')
    }

  return (
    <button className='btn' 
    style={{ backgroundColor:color }}
    onClick={onClickAction}>
        {text}
    </button>
  )
}

Button.defaultProps = {
    color: 'blue'
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string
}

export default Button
