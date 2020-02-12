import React, {Component} from 'react';
import './App.css';
import axios from "axios"
import UserCard from "./Components/UserCard"


export default class App extends Component {
  state = {
    user: [],
    follower: []
  }
  

  //fetching User Data from api
  componentDidMount(){
    axios.get('https://api.github.com/users/aliciapetgrave')
    .then(response => {
      console.log(response.data)
      this.setState({
        user: response.data
      })
    })
    .catch(error => {
      console.log(error)
    })

    //fetching user followers data
    axios.get('https://api.github.com/users/aliciapetgrave/followers')
    .then(response => {
      console.log(response.data)
      this.setState({
        follower: response.data
      })
    })
    .catch(error => {
      console.log(error)
    })
  }





  render() {
    return (
      <div className="App">
        <h1>My GitHub Card</h1>
        <UserCard 
        name={this.state.user.name} 
        location={this.state.user.location} 
        avatar={this.state.user.avatar_url} 
        followers={this.state.user.followers} 
        following={this.state.user.following}/>
        <div className="line"></div>
        <br/>
        <h2>Followers</h2>
  {/* mapping through followers and displaying data from each */}
        {this.state.follower.map(person => {
          return (
            <div className="all-cards">
              <div className="follower-card">
                <div className="info">
                  <img src={person.avatar_url}/>
                  <h2>{person.login}</h2>
                  <a href={person.html_url}>GitHub Profile</a>
                </div>  
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}



