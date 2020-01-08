import React          from 'react'
import DataListOption from './DataListOption'
import DataListMenu from './DataListMenu'

export default class DataList extends React.Component {
    render() {
        let options = this.props.options.length ? this.props.options.map((option, index) => {
            return <DataListOption 
                        key={option+index}
                        option={option} 
                        index={index} 
                        useNative={this.props.useNative} 
                        selected={this.props.selected == index} 
                        select={this.props.select} />
        }): <div className="react-datalist-option">No result found</div>;
        let optionsMenu = this.props.optionsMenu ? <> <h3>{this.props.menuTitle}</h3> {this.props.optionsMenu.map((option, index) => {
            return <><DataListMenu 
                        key={option+index}
                        option={option} 
                        index={index} 
                        useNative={this.props.useNative} 
                        selected={this.props.menuSelected == index} 
                        select={this.props.select} /></>
        })}</>: "";
        var containerStyle = {}
        if (!this.props.useNative) {
            if (this.props.hide) containerStyle.display = 'none'
            else containerStyle.display = 'block'
        }
        if (this.props.useNative) return (
            <datalist id={this.props.id} className={"react-datalist"}>{options}</datalist>
        )
        return (
            <div>
            {
                optionsMenu
            }
                
                <div id={this.props.id} className="react-datalist" style={containerStyle}>{options}</div>
            </div>
        )
    }
}
