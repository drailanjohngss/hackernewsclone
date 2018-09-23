import React, { Component } from 'react';
import _ from 'lodash';

class Items extends Component {
    constructor() {
        super();
        this.state = {
            newsList: [],
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
        })
    }


    render() {

        console.log(this.state.newsList);
        let newsListArr = this.state.newsList;
            if(newsListArr.length === 0){
                return (
                    <div>blah</div>
                )
            } else {
            return(
                <h1>dasds</h1>
            )
        }
    }
}

export default Items;
