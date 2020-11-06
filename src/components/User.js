import React, {Component} from 'react';
import './User.css'

class User extends Component {

    render() {
       const {user} = this.props
        return (
            <div className="card">
                <h2>{user.name}</h2>
                <p>Id:{user.id}</p>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
            </div>
        );
    }
}

export default User;
