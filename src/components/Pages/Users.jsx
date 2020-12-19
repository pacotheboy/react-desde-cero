import React, { Component } from 'react';
import axios from 'axios';
import UsersGrid from '../Organisms/UsersGrid';

class Users extends Component {

    constructor (props){
        super(props);
    
        this.state={
            users : []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(resp => {
            const users = resp.data;
            this.setState({
                users
            })
        })
        
    }


    render() {

        const { users } =  this.state;

        return (
            <UsersGrid users = { users } />
        )
    }
}

export default Users;