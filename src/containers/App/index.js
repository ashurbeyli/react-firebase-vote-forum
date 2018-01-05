import React, { Component } from 'react';
import * as firebase from 'firebase';
import config from './firebase-config';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../styles/styles.css';

class App extends Component {
    constructor() {
        super();

        // Initialize Firebase
        firebase.initializeApp(config);

        this.state = {
            posts: [],
            loading: false
        }
    };

    componentWillMount() {
        let postsRef = firebase.database().ref('posts');
        
        let _this = this;
        
        postsRef.on('value', function (snapshot) {
           console.log(snapshot.val());
           _this.setState({
               posts: snapshot.val(),
               loading: false
           });
        });
    }

    render() {
        return (
            <div className="App">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Real-Time Vote</h1>
                        <p className="lead">This is Real-Time Voting Forum created by using React, Firebase.</p>
                    </div>
                </div>
                {this.props.children && React.cloneElement(this.props.children, {
                        firebase: firebase.database(),
                        posts: this.state.posts,
                        loading: this.state.loading
                    }
                )}
            </div>
        );
    };
}

export default App;