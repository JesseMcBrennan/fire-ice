import React from 'react';
import './Card.css'
import { connect } from 'react-redux'

const Card = ({house}) => {
 
  return(
    <div className="Card">
      <h1>{house.name}</h1>
      <h4>{house.founded}</h4>
      <h4>{house.seats}</h4>
      <h4>{house.titles}</h4>
      <h4>{house.coatOfArms}</h4>
      <h4>{house.ancestralWeapons}</h4>
      <h4>{house.words}</h4>
    </div>
  )
}

export const mapStateToProps = state => ({
  toggleSworn: state.toggleSworn
});

const mapDispatchToProps = dispatch => ({ 
  
});

export default connect(null, mapDispatchToProps)(Card)