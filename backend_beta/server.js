const express = require('express')
const server = express();
const path = require('path');
const fs = require('fs')
const axios = require('axios');
const cors = require('cors')
const port = 3000;

let news;

server.use(cors());

fs.readFile('sample_news.json', 'utf8', function readFileCallback(err, data) {
    if (err) {
        console.log(err)
    } else {
        news = JSON.parse(data);
    }    
})

server.get("/news/tech/:pageNum", async (req, res) => {
    // azt is le kell kezelni ha 0 jön be pageNum-ként
    const pageNum = parseInt(req.params.pageNum);
    const maxPageNum = Math.ceil(news['totalResults'] / 10)
    const articles = {'maxPageNum': maxPageNum, 'articles':[]};
    const fromIndex = (pageNum - 1) * 10;
    let toIndex = (pageNum * 10);

    if(toIndex > news['articles'].length){
        toIndex = news['articles'].length
    }

    for(let i = fromIndex; i < toIndex; i++) {
        articles['articles'].push(news.articles[i])
    }

    res.send(JSON.stringify(articles))
    })

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
