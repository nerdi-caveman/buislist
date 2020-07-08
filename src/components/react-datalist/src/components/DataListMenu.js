import React from 'react'

export default class DatalistMenu extends React.Component {
    render() {
        var classes = 'react-datalist-menu'
        if (this.props.selected) classes += ' react-datalist-menu-selected'
        if (this.props.useNative) return (
            <option value={this.props.option} />
        )
        return (
            <div className={classes} onClick={this.handleClick.bind(this)}>
                <span className ="react-datalist-menu-span"></span>
                <p>{this.props.option}</p>
            </div>
        )
    }
    handleClick(e) {
        this.props.select(this.props.index)
    }
}
