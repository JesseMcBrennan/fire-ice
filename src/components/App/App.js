import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { fetchSwornMembers } from '../../utils/apiCalls'
import { houseDataCleaner } from '../../utils/dataCleaner'
import { connect } from 'react-redux';
import { setHouseData, toggleSworn  } from '../../actions';
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

toggleSworn = async (id) => {
  const swornMembers = fetchSwornMembers(id)
  // this.props.toggleSworn(id)
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
          <button onClick={() => {
            this.toggleSworn();
          }}> F</button>
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
    
});

const mapDispatchToProps = dispatch => ({ 
  setHouseData: (houseData) => dispatch(setHouseData(houseData)),
  toggleSworn: (swornMember) => dispatch(toggleSworn(swornMember))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
