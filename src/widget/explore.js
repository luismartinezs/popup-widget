import React, { Component } from 'react';

class Explore extends Component {
    render() {
        return(
            <div>
                <h2>You may also like</h2>
                <ItemList otherItems={this.props.otherItems}/>
            </div>
        );
    }
}

class ItemList extends Component {
    render() {

        let itemList = [];
        for (let i = 0; i < 6; i++) {
            itemList.push((<Item key={i} item={this.props.otherItems[i]}/>));
        }

        return(
            <div className='d-flex justify-center align-center wrap'>
                {itemList}
            </div>
        );
    }
}

class Item extends Component {

    render() {
        const {title, imgIndex} = this.props.item;

        return (
            <div>
                <div className='itemBox'>
                    <div className='thumbnailWrapper'>
                        <div className='thumbnailMask'>
                            <h2 className='itemTitle'>{title}</h2>
                        </div>
                        <img src={`https://picsum.photos/200/200/?image=${imgIndex}`} alt={title}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Explore;