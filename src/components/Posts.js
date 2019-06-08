import React, { Component } from 'react'
import axios from 'axios'

export default class Posts extends Component {

    state = {
        posts: []
    }

    async componentDidMount() {
       const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
       this.setState({posts: res.data})
    }

    render() {
        console.log(this.state.posts)
        return (
            <React.Fragment>
                {
                    this.state.posts.map(post => {
                        return <div key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    })
                }                
            </React.Fragment>
        )
    }
}
