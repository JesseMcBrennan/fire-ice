import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { fetchSwornMembers } from '../../utils/apiCalls'
import { houseDataCleaner } from '../../utils/dataCleaner'
import { connect } from 'react-redux';
import { setHouseData } from '../../actions';
import HouseContainer from '../HouseContainer/HouseContainer'

class App extends Component {
  constructor() {
    super()
    this.state=({
      isLoading:false
    })
  }

componentDidMount() {
  this.setHouseData()
}

setHouseData = async () => {
  const houseData = await this.fetchHouseData()
  this.props.setHouseData(houseData)
}

fetchHouseData = async () => {
  try{
  this.setState({isLoading: true})
  const url = 'http://localhost:3001/api/v1/houses'
  const response = await fetch(url)
  this.setState({isLoading: false})
  const result = await response.json()
  return result
  } catch (error) {
    this.setState({})
  } 
}

getSwornMembers = () => {
  const { houses } = this.props
  const swornMembers = houses.map(house => house.swornMembers)
  const swornUrls = swornMembers.map(member => {
    const urlId = member.map(url => {

      const id = url
      return url
    })
    return member
  })
  debugger;

  return swornMembers
}

fetchSwornMembers = async (id) => {
  const url = `http://localhost:3001/api/v1/character/:${id}`
  const response = await fetch(url)
  const result = await response.json()
  return Promise.all(result)
}

  render() {
    if(this.state.isLoading) {
    return(
      <div>
        <img id='wolf' src='wolf.gif' /> 
      </div>
      )
    } else {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          <button onClick={() => this.getSwornMembers()}/>
        </div>
        <div className='Display-info'>
        <HouseContainer />
        </div>
      </div>
    );
  }
}
}


const mapStateToProps = (state) => ({ 
  houses: state.houseData
});

const mapDispatchToProps = dispatch => ({ 
  setHouseData: (houseData) => dispatch(setHouseData(houseData)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
