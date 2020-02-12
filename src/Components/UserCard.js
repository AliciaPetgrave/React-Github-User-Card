import React from 'react'

const UserCard = props => {
    
        return (
            <div>
                <img src= {props.avatar}/>
                <h2>{props.name}</h2>
                <p>Location: {props.location}</p>
                <p>Followers: {props.followers}</p>
                <p>Following: {props.following}</p>
            </div>
        )
}

export default UserCard
