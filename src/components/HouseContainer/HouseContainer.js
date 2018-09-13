import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHouseData } from '../../utils/apiCalls'

export const HouseContainer = ({ houses }) => {
  // debugger;
  // const displayHouses = houses.map(house => )
  return(
    <div>
    </div>
  )
} 

export const mapStateToProps = state => ({
  houses: state.houseData,
});


export default connect(mapStateToProps)(HouseContainer)