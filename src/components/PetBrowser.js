import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  renderPets = () => {
    const petArray = this.props.pets;
    return petArray.map(petObj => <Pet key={petObj.id} id={petObj.id} pet={petObj} isAdopted={petObj.isAdopted} onAdoptPet={this.props.onAdoptPet} />)


  }
  render() {
    return (
      <div className="ui cards">
        {this.renderPets()}
      </div>
    )
  }
}

export default PetBrowser
