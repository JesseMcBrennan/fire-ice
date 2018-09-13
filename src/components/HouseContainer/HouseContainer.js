import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHouseData } from '../../utils/apiCalls'
import { Card } from '../Card/Card'

export const HouseContainer = ({ houses }) => {
  const displayHouses = houses.map(house => 
      <Card 
        {...house}
      />)
  return(
    <div>
    </div>
  )
} 

export const mapStateToProps = state => ({
  houses: state.houseData
});


export default connect(mapStateToProps)(HouseContainer)