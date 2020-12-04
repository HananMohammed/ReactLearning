import React, { Component } from 'react';
import axios from 'axios';

class Blog extends Component {

    state = {

        users : []
    }
    componentDidMount() {
        console.log(this.props.match.path)
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            this.setState({ users : res.data})
        })
    }
    render(){
        const { users } = this.state
        return(
            <div>
                <div>Blog</div>
                <p>This is Blog</p>
                <div>{
                    users.map(user => {
                        return(
                            <div key={user.id}>
                                <div className="content">
                                    <p>Name: {user.name}</p>
                                    <p>Username: {user.username}</p>
                                </div>
                            </div>
                        )
                        
                    })
                }</div>
            </div>
        )
    }
}

export default Blog ;