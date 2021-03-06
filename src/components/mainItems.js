import React, { Component } from 'react';
import _ from 'lodash';

class Items extends Component {
    constructor() {
        super();
        this.state = {
            storyList: null,
        }
    }

    componentDidMount() {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
        .then(results => {
            return results.json();
        }).then(data => {
            let promises = data.slice(0, 30).map(url => fetch(`https://hacker-news.firebaseio.com/v0/item/${url}.json?print=pretty`).then(res => {
                return res.json();
            }));
            Promise.all(promises).then(results => {
                this.setState({
                    storyList: results
                })
            });
        }).catch(error => {
            console.log(error);
        })
    }
    render() {
        const storyList = this.state.storyList;
        if(this.state.storyList == null){
            return(
                <div>
                    Loading Data please wait a moment
                </div>
            )
        } else {
            console.log(this.state.storyList)
            return (
                <ol> Here is the list
                { storyList.map((itm,i) => <li key={itm.id}><a href={itm.url}> {itm.title} </a></li> )}
                </ol>
            // storyList.map(x => console.log(x));
            )
        }
    }
}

export default Items;
