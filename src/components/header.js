import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { MenuItem, StyledHeader } from '../styles/components';

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Link to='/'>
      <img src='https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/124153609_150745530115719_8559592919235498583_n.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGCizdApGx1OMwR1wI6bBr6DWVwFjphRnUNZXAWOmFGdfLkeF4hMQhNLE640k8EFNY&_nc_ohc=mVOMSBorpDYAX_cYgfj&_nc_ht=scontent-qro1-1.xx&oh=4f1d318fba66e108b73e09ba433fc93d&oe=5FF375AE' alt='logo' />
    </Link>  
    <nav>
        <ul>
          <MenuItem margin>
            <Link to='/'>Productos</Link>
          </MenuItem>
          <MenuItem>
            <a href='https://www.facebook.com/Dibujando-sonrisas-106269437896662'>Visitanos</a>
          </MenuItem>
          <MenuItem margin>
            <Link to='/cart'>
              <span>
                <img src='https://i.postimg.cc/L6wpMxLt/cart.png' alt='cart-img' />
              </span>
            </Link>
          </MenuItem>
        </ul>
    </nav>
    <div>
      <h1>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
