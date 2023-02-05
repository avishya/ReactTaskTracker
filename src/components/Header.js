const Header = ({ title }) => {
  return (
    <header>
      <h1>Task Tracker {title}</h1>
    </header>
  )
}

Header.defaultProps = {
    title: 'AVISHYA'
}

export default Header
