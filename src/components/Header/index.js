import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="navbar-container">
      <div>
        <Link to="/" className="link-item">
          <li>
            <img
              src="https://i.imgur.com/x5bL7F4.png"
              alt="website logo"
              className="website-logo"
            />
          </li>
        </Link>
      </div>
      <ul className="header-list-items">
        <Link to="/" className="link-item">
          <li className="home-heading home">Home</li>
        </Link>
        <Link to="/jobs" className="link-item">
          <li className="jon-heading home">Jobs</li>
        </Link>
      </ul>
      <div>
        <button type="button" className="logout-button" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)
