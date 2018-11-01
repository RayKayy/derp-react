import React, { Component } from 'react';
import './styles/App.scss';
import 'react-vertical-timeline-component/style.min.css';
import TopNavbar from './TopNavbar';
import MainContainer from './MainContainer';
import axios from 'axios';
import moment from 'moment';

class App extends Component {
  constructor(props) {

    super(props);
    this.state = {
      userinfo: {},
      derping: false,
      showWelcome: true,
      showForm: true,
      location: {},
      events: [],
      filters: {},
      params: {
        skeleton: [],
        startTime: new Date(),
        endTime: moment(new Date()).add(1, 'd').toDate()
      }
    }
  }

  componentDidMount() {
    this._getLocation();
    this._checkLogin();
      // this._getItinerary(this.state.params)
  }

  _getLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=>{
      this.setState({params: {
        ...this.state.params,
        coords: {lng: position.coords.longitude, lat: position.coords.latitude}
      }});
    });
  }

  _handleLogout = () => {
    axios.get('/logout')
      .then((response) => {
        this.setState({
          userinfo: {},
          events: [],
          showForm: true,
        })
      })
  }

  _checkLogin = () => {
    axios.get('/loggedin')
    .then(res => {
      this.setState({
        userinfo: res.data,
        params: {
          skeleton: [],
          startTime: new Date(),
          endTime: moment(new Date()).add(1, 'd').toDate()
        }
      })
      this._getLocation()
    })
  }

  _generateItinerary = () => {
    console.log(this.state.params);
    this.setState({
      derping: true,
    })
    axios.post('/itineraries', { ...this.state.params })
      .then((res) => {
        console.log(res.data);
        this.setState({
          events: res.data.itinerary,
          route: res.data.google_directions,
          showForm: false,
          showWelcome: false,
          derping: false,
        });
      })
      .catch(err => {
        this.setState({ derping: false })
      })
  }

  _addSkeleton = (type) => {
    this.setState({ params: {...this.state.params, skeleton: [...this.state.params.skeleton, type] }});
  }

  _handleDate = (date) => {
    this.setState({ params: {...this.state.params, startTime: date}});
  }

  _handleEndTime = (date) => {
    this.setState({ params: {...this.state.params, endTime: date}});
  }

  _toggleForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  _removeSkeletonItem = (i) => () => {
    let newSkele = this.state.params.skeleton
    newSkele.splice(i, 1);
    this.setState({
      params: { ...this.state.params,
        skeleton: newSkele
      }
    });
  }

  _userInputedLocation = (latLng) => {
    this.setState({
      params: {
        ...this.state.params,
        coords: {
          lng: latLng.lng,
          lat: latLng.lat
        }
      }
    });
  }

  render() {
    return (
      <div className="App">
        <TopNavbar userinfo={this.state.userinfo} logout={this._handleLogout} checkLogin={this._checkLogin} />
        {this.state.showWelcome && <h1>Welcome! Plan your day with just a click of a button!</h1>}
        <MainContainer
          checkLogin={this._checkLogin}
          params={this.state.params}
          addSkeleton={this._addSkeleton}
          handleDate={this._handleDate}
          handleEndTime={this._handleEndTime}
          generateItinerary={this._generateItinerary}
          startTime={this.state.startTime}
          endTime={this.state.endTime}
          itinerary={this.state.events}
          showForm={this.state.showForm}
          toggleForm={this._toggleForm}
          removeSkeletonItem={this._removeSkeletonItem}
          userInputedLocation={this._userInputedLocation}
          userGivenLocation={this.state.params.coords}
          route={this.state.route}
          derping={this.state.derping}
          userinfo={this.state.userinfo}
        />
      </div>
    );
  }
}

export default App;
