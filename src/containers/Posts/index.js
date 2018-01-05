import React, { Component } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

class Posts extends Component {


    handleUpvote = (post, key) => {
        this.props.firebase.ref('posts/' + key).set({
            title: post.title,
            upvote: post.upvote ? post.upvote + 1 : 1,
            downvote: post.downvote ? post.downvote : 0
        });
    };
    handleDownvote = (post, key) => {
        this.props.firebase.ref('posts/' + key).set({
            title: post.title,
            upvote: post.upvote ? post.upvote : 0,
            downvote: post.downvote ? post.downvote + 1 : 1
        });
    };


    render() {
        let posts = this.props.posts;
        let _this = this;

        if (!posts) {
            return false;
        }


        if (this.props.loading) {
            return (
                <div>
                    Loading
                </div>
            )
        }

        return (
            <div className="Posts container">
                <div className="row">
                    <div className="col-sm">
                        <Link className="btn btn-primary float-right" to="add-post" role="button">Add Post</Link>
                    </div>
                </div>
                <div className="row">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Upvote</th>
                                <th scope="col">Downvote</th>
                                <th scope="col">Vote</th>
                            </tr>
                        </thead>
                        <tbody>
                        { Object.keys(this.props.posts).map((key) => {
                            return (
                                <tr key={key}>
                                    <th>
                                        { posts[key].title }
                                    </th>
                                    <td>Upvotes: { posts[key].upvote }</td>
                                    <td>Downvotes: { posts[key].downvote }</td>
                                    <td>
                                        <div className="col-sm">
                                            <button
                                                onClick={ _this.handleUpvote.bind(this, posts[key], key) }
                                                type="button"
                                                className="btn btn-success"
                                            >
                                                <FontAwesome
                                                    name="thumbs-up"
                                                />
                                            </button>&nbsp;
                                            <button
                                                onClick={ _this.handleDownvote.bind(this, posts[key], key) }
                                                type="button"
                                                className="btn btn-warning"
                                            >
                                                <FontAwesome
                                                    name="thumbs-down"
                                                />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };
}

export default Posts;