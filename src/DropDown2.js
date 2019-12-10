import React from 'react';


class DropDown2 extends React.Component {
    constructor() {
        super();

        this.state = {
            displayMenu: false,
        };

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

    };

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });

    }

    render() {
        return (
            <div className="dropdown">
                <div className="button" onClick={this.showDropdownMenu}> Date </div>

                {this.state.displayMenu ? (
                    <ul>
                        <li>Latest</li>
                        <li>Longest in stock</li>
                    </ul>
                ) :
                    (
                        null
                    )
                }

            </div>

        );
    }
}

export default DropDown2;