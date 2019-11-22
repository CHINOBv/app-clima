import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
          <nav>
            <div className="nav-wrapper ligth-blue darken-2">
              <a className="brand-logo">{this.props.titulo}</a>
            </div>
          </nav>
      </div>
    );
  }
}

export default Header;
