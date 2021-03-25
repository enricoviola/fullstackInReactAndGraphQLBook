import React, { Component } from 'react';
import './assets/css/style.css';
import { Helmet } from 'react-helmet';

const posts = [{
    id: 2,
    text: 'Lorem ipsum',
    user: {
        avatar: '../img/avatar1.png',
        username: 'Test User'
    }
},
{
    id: 1,
    text: 'Lorem ipsum',
    user: {
        avatar: '../img/avatar2.png',
        username: 'Test User 2'
    }
}];

export default class App extends Component {
  state = {
      posts: posts,
      postContent: ''
  }

  handlePostContentChange = (event) => {
      this.setState({postContent: event.target.value})
  }
  handleSubmit = (event) => {
      
      console.log(2, event, this.state);
      event.preventDefault();
      const newPost = {
          id: this.state.posts.length + 1,
          text: this.state.postContent,
          user: {
              avatar: '../img/avatar1.png',
              username: 'Fake User'
          }
      };
      this.setState((prevState) => ({
          posts: [newPost, ...prevState.posts],
          postContent: ''
      }));
  }

  render() {
    const { posts, postContent } = this.state;
        console.log(1, this.state);

    return (
      <div className="container">
      <Helmet>
          <title>Graphbook - Feed</title>
          <meta name="description" content="Newsfeed of all your friends on Graphbook" />
      </Helmet>
        <div>CIao Enri 1</div>
        <div className="feed">
            {posts.map((post, i) => 
                <div key={post.id} className="post">
                    <div className="header">
                        <img src={post.user.avatar} />
                        <h2>{post.user.username}</h2>
                    </div>
                    <p className="content">
                        {post.text}
                    </p>
                </div>
            )}
        </div>
        <div className="postForm">
            <form onSubmit={this.handleSubmit}>                      
                <textarea value={postContent} onChange={this.handlePostContentChange} 
                placeholder="Scrivi pure your custom post!"/>
                <input type="submit" value="Submit" />
            </form>
        </div>
      </div>
    )
  }
}
