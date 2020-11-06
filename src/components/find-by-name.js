import React, {Component} from 'react';
import User from "./User";
import UserService from "../services/user-service";

class FindByName extends Component {
    state = {
        users: [],
        filteredUsers: []
    }
    userApi = new UserService();

    async componentDidMount() {
        this.setState({users: await this.userApi.getUsers()})
    }

    filterUsers(e) {
        if (e.target.value) {

            let users = [...this.state.users]

            let filteredUsers = users.filter(user => {
                return user.name.toLowerCase().includes(e.target.value.toLowerCase())
            })
            this.setState({filteredUsers})

        }   else this.setState({filteredUsers: []})


    };

    render() {
        return (
            <div>
                <input onChange={this.filterUsers.bind(this)} placeholder='input name'/>
                {
                    this.state.filteredUsers.map(user => <User user={user} key={user.id}/>)
                }
            </div>
        );
    }
}

export default FindByName;
