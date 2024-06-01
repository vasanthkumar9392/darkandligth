import ThemeContext from '../../context/ThemeContext'
import NavBar from '../Navbar'
import './index.css'

const darkImage = 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
const lightImage = 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      console.log(isDarkTheme, 'about')

      const backgroundColor = isDarkTheme ? 'dark-container' : 'light-container'
      const aboutImage = isDarkTheme ? lightImage : darkImage
      return (
        <div className="bg-container">
          <NavBar />
          <div className={`home-container ${backgroundColor}`}>
            <img className="home-image" src={aboutImage} alt="about" />
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
