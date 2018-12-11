class Item {
    constructor(title, description, director, producer, release_date, rt_score, imgIndex) {
        this.title = title;
        this.description = description;
        this.director = director;
        this.producer = producer;
        this.release_date = release_date;
        this.rt_score = rt_score;
        this.imgIndex = imgIndex;
    }
}


// @param {arr} array of objects with properties title, description, director, producer, release_date, rt_score, and image index
// 
function makeData(arr) {
    let dataArr = [];

    for (let i = 0; i < arr.length; i++) {
        dataArr.push(
            new Item(arr[i].title, arr[i].description, arr[i].director, arr[i].producer, arr[i].release_date, arr[i].rt_score, Math.floor(Math.random() * 50))
        );
    }

    return dataArr;
}


export { Item, makeData };