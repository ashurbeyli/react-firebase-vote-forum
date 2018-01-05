import React, { Component } from 'react';

class AddPost extends Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        title: ''
    };

    handleChange = (e) => {
        this.setState({
            title: e.target.value
        });
    };

    handleSubmit = (e) => {
      e.preventDefault();

      this.props.firebase.ref('posts').push({
          title: this.state.title
      });

      this.setState({
          title: ''
      });
    };

    render() {
        return (
            <div className="AddPost container">
                <form>
                    <div className="form-group">
                        <label htmlFor="post-title">Post Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="post-title"
                            placeholder="Write the title of your post"
                            onChange={ this.handleChange }
                            value={ this.state.title }
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={ this.handleSubmit }
                        className="btn btn-primary"
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default AddPost;