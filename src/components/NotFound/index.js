import ThemeContext from '../../context/ThemeContext'
import NavBar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const backgroundColor = isDarkTheme ? 'dark-container' : 'light-container'
      const specialText = isDarkTheme ? 'light-color' : 'dark-color'
      return (
        <div className="bg-container">
          <NavBar />
          <div className={`home-container ${backgroundColor}`}>
            <img
              className="home-image"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1 className={`heading ${specialText}`}>Lost Your Way?</h1>
            <p className={`para ${specialText}`}>
              We cannot seem to find the page your looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
