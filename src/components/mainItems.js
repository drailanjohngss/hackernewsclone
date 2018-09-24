import React, { Component } from 'react';
import _ from 'lodash';

class Items extends Component {
    constructor() {
        super();
        this.state = {
            newsList: null,
        }
    }

    componentDidMount() {
        let arr = [];
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
        .then(results => {
            return results.json();
        }).then(data => {
            for (let newsIds of data) {
                fetch(` https://hacker-news.firebaseio.com/v0/item/${newsIds}.json?print=pretty`).then(res => {
                    return res.json();
                }).then(data => {
                    arr.push(data);
                }).catch(e => {
                    console.log(e);
                })
            }
        }).catch(error => {
            console.log(error);
        })
        this.setState({
            newsList: arr,
        });
    }

    renderItems = (items) => {
        console.log('what');
        var rows = [];
        if(items === null) {
            console.log('wtf');
        } else {
            console.log('put a little more');
        }
        return (
            <div>
                dadasd
            </div>
        )
    }



    render() {
        console.log(this.state.newsList)
        return(
            <div>
                {this.renderItems(this.state.newsList)}
            </div>
        )
    }
}

export default Items;
