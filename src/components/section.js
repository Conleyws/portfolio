import React from 'react';

class Section extends React.Component {

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <div>{this.props.body}</div>
            </div>
        )
    }
}