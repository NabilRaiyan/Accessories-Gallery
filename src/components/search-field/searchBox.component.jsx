import { Component } from "react";

class SearchBox extends Component{
    render(){
        return(
            <input className={this.props.class_Name} type='search' placeholder={this.props.placeholder} onChange={this.props.onChangeHandler} />

        )
    }
}

export default SearchBox;