import React, {Component} from 'react';
import UserService from "../services/user-service";
import User from "./User";

class FindById extends Component {
    userApi = new UserService();

    state = {
        user: '',
    }


    async getUser (){
        this.setState({user: await this.userApi.getUserById(this._id.value)})

    };

    render() {
        return (
            <div>
                <input
                    type="number"
                    placeholder="input id of user"
                    ref={input => this._id = input}
                    onChange={this.getUser.bind(this)}/>
                {
                    this.state.user && (
                <User user={this.state.user}/>
                    )
                }
            </div>
        );
    }
}

export default FindById;
