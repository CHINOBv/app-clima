import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
          <nav>
            <div className="nav-wrapper ligth-blue darken-2">
              <p className="brand-logo">{this.props.titulo}</p>
            </div>
          </nav>
      </div>
    );
  }
}

export default Header;
