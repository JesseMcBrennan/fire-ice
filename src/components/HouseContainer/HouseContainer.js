import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHouseData } from '../../utils/apiCalls'
import Card from '../Card/Card'

const HouseContainer = ({ houses,  }) => {
  console.log(houses)
  const displayHouses = houses.map(house => (
    <Card 
      {...house}
      house={house}
    />
  ))
  return (
    <div className="Container">
      {displayHouses}
    </div>
  )
} 

export const mapStateToProps = state => ({
  houses: state.houseData
});


export default connect(mapStateToProps)(HouseContainer)