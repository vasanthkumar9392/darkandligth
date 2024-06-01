import ThemeContext from '../../context/ThemeContext'
import NavBar from '../Navbar'
import './index.css'

const darkImage = 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
const lightImage = 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      console.log(isDarkTheme, 'home')

      const backgroundColor = isDarkTheme ? 'dark-container' : 'light-container'
      const homeImage = isDarkTheme ? lightImage : darkImage
      return (
        <div className="bg-container">
          <NavBar />
          <div className={`home-container ${backgroundColor}`}>
            <img className="home-image" src={homeImage} alt="home" />
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
