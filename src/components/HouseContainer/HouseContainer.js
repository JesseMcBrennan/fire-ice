import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHouseData } from '../../utils/apiCalls'

export const mapStateToProps = state => ({
  houses: state.houseData
})