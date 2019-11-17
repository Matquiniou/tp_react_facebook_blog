import React from 'react';
import '../App.css';


class Comment extends React.Component {
    render() {
        return(
            <div className="card">
                <a>{this.props.comment}</a>
                <button onClick={this.props.onClick} > 👍 {this.props.nbThumb}</button>
            </div>
        );
    }
}

export default Comment;
