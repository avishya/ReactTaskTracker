const Header = (props) => {
  return (
    <header>
      <h1>Task Tracker {props.title}</h1>
    </header>
  )
}

Header.defaultProps = {
    title: 'AVISHYA'
}

export default Header
