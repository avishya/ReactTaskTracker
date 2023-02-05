import PropTypes from 'prop-types'


const Header = ({ title, id }) => {
  return (
    <header>
      <h1>Task Tracker {title} {id}</h1>
    </header>
  )
}

Header.defaultProps = {
    title: 'AVISHYA',
    id: 123
}

Header.propTypes = {
    title: PropTypes.string,
    id: PropTypes.number.isRequired
}


export default Header
