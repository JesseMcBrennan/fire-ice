import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { fetchHouseData } from '../../utils/apiCalls'
import { houseDataCleaner } from '../../utils/dataCleaner'
import { connect } from 'react-redux';
import { setHouseData  } from '../../actions';
import { HouseContainer } from '../HouseContainer/HouseContainer'

class App extends Component {

componentDidMount() {
  fetchHouseData()
}

setHouseData = async () => {
  const houseData = await houseDataCleaner()
  this.props.setHouseData(houseData)
}

toggleHouse = () => {

}

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          <button onClick={() => {
            this.props.toggleHouse();
          }}> F</button>
        </div>
        <div className='Display-info'>
        <HouseContainer />
        </div>
      </div>
    );
  }
}

App.propTypes = {

};

const mapStateToProps = (state) => ({ 
  // houseData: state.houseData
});
const mapDispatchToProps = dispatch => ({ 
  setHouseData: (houseData) => dispatch(setHouseData(houseData))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
