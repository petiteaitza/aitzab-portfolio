
import React, { Component } from 'react';
import './DropDownBar.css';

class DropDownBar extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {
    if(!this.dropdownMenu.contains(event.target)){
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }
}

  render() {
    return (
      <div>
        <button onClick={this.showMenu}>
          Show menu
        </button>

        {
          this.state.showMenu
            ? (
              <div className="menu"
              ref={(element)=>{
             this.dropdownMenu =element;
            }}
            >
                <button> thing 1 </button>
                <button> thing 2 </button>
                <button> thing 3 </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}
export default DropDownBar;
