import React from 'react'

class Pet extends React.Component {

  adoptedOrNot = (isAdoptedProp) =>{
    if (isAdoptedProp === true){
      return (<button className="ui disabled button">Already adopted</button>)
    }
    else {
      return (<button  onClick={() => {this.props.onAdoptPet(this.props.id)}} className="ui primary button">Adopt pet</button>)
    }
  }

  render() {


    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender === 'male' ? '♂' : '♀'}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.adoptedOrNot(this.props.isAdopted)}
        </div>
      </div>
    )
  }
}

export default Pet
