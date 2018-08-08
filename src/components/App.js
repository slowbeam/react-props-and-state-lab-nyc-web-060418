import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (event) => {
    this.setState({
      ...this.state,
      filters: {
        ...this.state.filters,
        type: event.target.value
      }
    })
  }

  onFindPetsClick = (event) => {
    if (this.state.filters.type === 'all'){

      fetch('/api/pets').then(resp => resp.json()).then(resp => this.setState({pets: resp}))
    }
    else if (this.state.filters.type === 'cat'){

      fetch('/api/pets?type=cat').then(resp => resp.json()).then(resp => this.setState({pets: resp}))

    }
    else if (this.state.filters.type === 'dog'){

      fetch('/api/pets?type=dog').then(resp => resp.json()).then(resp => this.setState({pets: resp}))
    }
    else if (this.state.filters.type === 'micropig'){

     fetch('/api/pets?type=micropig').then(resp => resp.json()).then(resp => this.setState({pets: resp}))
    }
  }

  onAdoptPet = (id) => {

    const pets = this.state.pets.map(p => {
      return p.id === id ? {...p, isAdopted: true} : p;
    })

    this.setState({pets})
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
