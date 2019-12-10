import React from 'react';



class DropDown1 extends React.Component {
    constructor() {
        super();


        this.state = {
            displayMenu: false,
            isFruits: false,
            isVegetable: false,
        };

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
        this.isAll = this.isAll.bind(this);
        this.isFruits = this.isFruits.bind(this);
        this.isVegetable = this.isVegetable.bind(this);
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

    isAll() {
        this.setState({ displayMenu: false, isFruits: false, isVegetable: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });

    }

    isFruits() {
        this.setState({ displayMenu: false, isFruits: true, isVegetable: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });

    }

    isVegetable() {
        this.setState({ displayMenu: false, isFruits: false, isVegetable: true }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });

    }



    render() {
        return (
            <div className="dropdown">
                <div className="button" onClick={this.showDropdownMenu}> Type </div>

                {this.state.displayMenu ? (
                    <ul>
                        <li onClick={() => this.isAll}>All</li>
                        <li onClick={() => this.isVegetable}>Vegtables</li>
                        <li onClick={() => this.isFruits}>Fruits</li>

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

export default DropDown1;