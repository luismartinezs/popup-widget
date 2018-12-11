import React, { Component } from 'react';

class Explore extends Component {
    render() {
        return(
            <div>
                <h2>You may also like</h2>
                <ItemList />
            </div>
        );
    }
}

class ItemList extends Component {
    render() {

        let itemList = [];
        for (let i = 0; i < 6; i++) {
            itemList.push((<Item img={Math.floor(Math.random()*500)}/>));
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
        return (
            <div>
                <div className='itemBox'>
                    <div className='thumbnailWrapper'>
                        <div className='thumbnailMask'>
                            <h2 className='itemTitle'>Title</h2>
                            <p className='itemSubtitle'>Subtitle</p>
                            {/* <button className='btn btnCircle btnSeeMore'>+</button> */}
                        </div>
                        <img src={`https://picsum.photos/200/200/?image=${this.props.img}`} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Explore;