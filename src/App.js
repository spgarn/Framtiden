import React from 'react';
import './App.css';
import DropDown2 from './DropDown2.js'
import food from './dataset.json'

const fruit = food.filter(value => value.type === "Fruit")

const vegetable = food.filter(value => value.type === "Vegetable")

function monthsSince(date) {
  const then = new Date(date).getTime()
  const now = new Date().getTime()
  const months = (now - then) / 86400000
  return Math.floor(months)
}


class App extends React.Component {
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
    this.checkType = this.checkType.bind(this);
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
  checkType() {
    if (this.state.isFruits === true) {
      return fruit.map((value) => (
        <div className="vegtBox" key={value.id}><span>{value.name}</span><span>{`${monthsSince(value.stocked_at)} Days since stocked`}</span></div>
      ))
    }
    else if (this.state.isVegetable === true) {
      return vegetable.map((value) => (
        <div className="vegtBox" key={value.id}><span>{value.name}</span><span>{`${monthsSince(value.stocked_at)} Days since stocked`}</span></div>
      ))
    }
    else {
      return food.map((value) => (
        <div className="vegtBox" key={value.id}><span>{value.name}</span><span>{`${monthsSince(value.stocked_at)} Days since stocked`}</span></div>
      ))
    }
  }


  render() {
    return (
      <div className="bigContainer">
        <div className="titleContainer">
          Bosses frukt & grönt
        </div>
        <div className="smallContainer">
          <div className="filterBox">
            <div className="dropdown">
              <div className="button" onClick={this.showDropdownMenu}> Type </div>

              {this.state.displayMenu ? (
                <ul>
                  <li onClick={() => this.isAll()}>All</li>
                  <li onClick={() => this.isVegetable()}>Vegtables</li>
                  <li onClick={() => this.isFruits()}>Fruits</li>

                </ul>
              ) :
                (
                  null
                )
              }

            </div>


          </div>
          <div className="filterBox">
            <DropDown2 />
          </div>
        </div>
        <div className="mediumContainer" >
          {this.checkType()}
        </div>

      </div>

    )
  }
}

export default App;
