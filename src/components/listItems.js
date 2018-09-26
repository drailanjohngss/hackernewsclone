import React, { Component } from "react";

class ListItems extends Component {

    createList(item) {
        return <li key={item.key}>{item.text}</li>
    }

    render() {
        var getItems = this.props.items;
        var listItems = getItems.map(this.createList);
        return(
            <ul>
                {listItems}
            </ul>
        );

    }
}

export default ListItems;
