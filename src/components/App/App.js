import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { fetchHouseData } from '../../utils/apiCalls'
import { connect } from 'react-redux';
import { setHouseData  } from '../../actions';
class App extends Component {

componentDidMount() {
  this.setHouseData()
}

setHouseData = async () => {
  const houseData = await fetchHouseData()
  this.state = ({
    houseData
  })
}

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          <button onClick={() => {
            this.props.fakeAction();
            alert(this.props.fake);
          }}> FAKE ACTION</button>
        </div>
        <div className='Display-info'>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func.isRequired
};

const mapStateToProps = (state) => ({ 
  houseData: state.houseData
});
const mapDispatchToProps = dispatch => ({ 
  setHouseData: (houseData) => dispatch(setHouseData())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
