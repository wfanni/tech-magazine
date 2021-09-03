const express = require('express');
const server = express();
const fs = require('fs');
const axios = require('axios');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config()
const port = process.env.PORT;
const API_KEY = process.env.API_KEY;

let NEWS;

function getNews() {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=100&apiKey=${API_KEY}`)
    .then((response) => {
        NEWS = JSON.stringify(response.data)
        fs.writeFile('news.json', NEWS, 'utf8', () => {});
        NEWS = JSON.parse(NEWS)
        console.log("lekérve")
    });
}

getNews();

setInterval(function() {
    getNews();
    console.log(NEWS.articles[0])
}, 60 * (60 * 1000));

server.use(cors());

server.get("/news/tech/:pageNum", async (req, res) => {
    const pageNum = parseInt(req.params.pageNum);
    const maxPageNum = Math.ceil(NEWS['totalResults'] / 10)
    const articles = {'maxPageNum': maxPageNum, 'articles':[]};
    const fromIndex = (pageNum - 1) * 10;
    let toIndex = (pageNum * 10);

    if(toIndex > NEWS['articles'].length){
        toIndex = NEWS['articles'].length
    }

    for(let i = fromIndex; i < toIndex; i++) {
        articles['articles'].push(NEWS.articles[i])
    }
    res.send(JSON.stringify(articles))
    console.log("elküldve")
    })

server.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
