import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../redux/action';


class PostForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            initial: true
        }
    }

    changeInput = e => {
        this.setState(state => {
            return {
                ...state, 
               [e.target.name]: e.target.value
            }
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const {title} = this.state;

        if(!title.trim()) {
            return;
        }

        const newPost = {
            title,
            id: Date.now()
        }

        this.props.createPost(newPost);
        this.setState({title: ''})
    }

    render () {
        return (
            <form onSubmit={this.onSubmit}>

                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input id="title" className="form-comntrol" name="title" value={this.state.title} onChange={this.changeInput}></input>
                </div>
                 <button type="submit" className="btn btn-success">SUBMIT</button>
                
            </form>
        )
    }
}

const mapDispatchToProps = {
  createPost: createPost
}



export default connect(null, mapDispatchToProps) (PostForm);