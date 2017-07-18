// Code ThemedDecoration Component Here
import React from 'react';

class ThemedDecoration extends React.Component{
    render(){
        const modifiedChildren = React.Children.map(this.props.children, (child, index) => {
            return <div className={`${this.props.theme}`}>{child}</div>
        })
        return (
            <div>
                {modifiedChildren}
            </div>
        );       
    }
}

export default ThemedDecoration;