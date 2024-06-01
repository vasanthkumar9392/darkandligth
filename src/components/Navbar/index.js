import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const darkLogoImage =
  'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
const lightLogoImage =
  'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
const themeDark = 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
const themeLight =
  'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
const NavBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      console.log(isDarkTheme, 'navbar')
      const logoImage = isDarkTheme ? darkLogoImage : lightLogoImage
      const themeImage = isDarkTheme ? themeLight : themeDark
      const textColor = isDarkTheme ? 'light-text' : 'dark-text'
      const backgroundColor = isDarkTheme
        ? 'nav-dark-container'
        : 'nav-light-container'
      const onChangeBackTheme = () => {
        toggleTheme()
      }
      return (
        <nav className={`nav-container ${backgroundColor}`}>
          <div className="nav-inner-container">
            <img className="logo-image" src={logoImage} alt="website logo" />
            <ul className="un-lists">
              <li>
                <Link to="/" className={`list-link ${textColor}`}>
                  <h1 className="link-heading">Home</h1>
                </Link>
              </li>
              <Link to="/about" className={`list-link ${textColor}`}>
                <h1 className="link-heading">About</h1>
              </Link>
            </ul>
            <button
              type="button"
              className="button-theme"
              onClick={onChangeBackTheme}
            >
              <img
                src={themeImage}
                alt="theme"
                className="theme-image"
                data-testid="theme"
              />
            </button>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default NavBar
