import React ,{component, Component} from 'react';

class Header extends Component{
    render(){
        return(
          <nav>
            <div className="nav-wrapper">
            <ul className = "left">
              <li><a  href = "/" className="left brand-logo">MassEmail</a></li>
            </ul>
              <ul className = "right">
                <li><a href="/auth/google">Login with google</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
              </ul>
            </div>
          </nav>
            
        );
    }

}
export default Header;