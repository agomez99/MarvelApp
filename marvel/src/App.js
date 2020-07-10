import React,{Component} from 'react';
import './App.css';
var md5 = require('md5');

var publickey = '228a2cac6d893dce20244bdab584d41a';
var privatekey = '2a1031bac357948b9d36de0d59e6f2db649cc3f1';
var ts = new Date().getTime();
var stringToHash = ts + privatekey + publickey;
var hash = md5(stringToHash);
var baseUrl = 'https://gateway.marvel.com:443/v1/public/characters';
var limit = 100;
var url = baseUrl + '?limit=' + limit + '&ts=' + ts + '&apikey=' + publickey + '&hash=' + hash;


fetch(url)
.then((resp) => resp.json())
.then(function(mydata){
  console.log(mydata.data.results)

})

.catch(function(data){

});







const data = {
  "code": 200,
  "status": "Ok",
  "copyright": "© 2020 MARVEL",
  "attributionText": "Data provided by Marvel. © 2020 MARVEL",
  "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2020 MARVEL</a>",
  "etag": "791d563e62252f05660d24c630153799e1d3ac81",
  "data": {
    "offset": 0,
    "limit": 20,
    "total": 1,
    "count": 1,
    "results": [
      {
        "id": 14297,
        "digitalId": 7768,
        "title": "X-Men (1991) #113",
        "issueNumber": 113,
        "variantDescription": "",
        "description": null,
        "modified": "2020-02-28T12:57:42-0500",
        "isbn": "",
        "upc": "759606017721011311",
        "diamondCode": "FEB011586",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/14297",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/14297/x-men_1991_113?utm_campaign=apiRef&utm_source=228a2cac6d893dce20244bdab584d41a"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=7768&utm_campaign=apiRef&utm_source=228a2cac6d893dce20244bdab584d41a"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/2265",
          "name": "X-Men (1991 - 2001)"
        },
        "variants": [],
        "collections": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/1951",
            "name": "X-Men: Eve of Destruction (Trade Paperback)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/60",
            "name": "X-Statix Vol. 4: X-Statix Vs. the Avengers (Trade Paperback)"
          }
        ],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2001-06-01T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "-0001-11-30T00:00:00-0500"
          },
          {
            "type": "unlimitedDate",
            "date": "2010-05-26T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 0
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/20/4bb7b64d1d3b8",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/20/4bb7b64d1d3b8",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 7,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/14297/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/8542",
              "name": "Gerry Alanguilan",
              "role": "inker"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/430",
              "name": "Edgar Delgado",
              "role": "inker"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/471",
              "name": "Dexter Vines",
              "role": "inker"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/13348",
              "name": "Liquid! Color",
              "role": "colorist"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/3637",
              "name": "Scott Lobdell",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/350",
              "name": "Richard Starkings",
              "role": "letterer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/758",
              "name": "Leinil Francis Yu",
              "role": "penciler"
            }
          ],
          "returned": 7
        },
        "characters": {
          "available": 6,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/14297/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009257",
              "name": "Cyclops"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009267",
              "name": "Dazzler"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009417",
              "name": "Magneto"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009504",
              "name": "Professor X"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
              "name": "Wolverine"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009726",
              "name": "X-Men"
            }
          ],
          "returned": 6
        },
        "stories": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/14297/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/29146",
              "name": "X-MEN (1991) #113",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/29147",
              "name": "Eve of Destruction Conclusion",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/162486",
              "name": "story from X-Men (1991) #113",
              "type": "interiorStory"
            }
          ],
          "returned": 3
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/14297/events",
          "items": [],
          "returned": 0
        }
      }
    ]
  }
}

const {thumbnail } = data.data.results[0]
const {creators} = data.data.results[0]

const creator = creators.items.map(function (items, index) {
return <p key ={index}>{items.name}</p>
})






class App extends Component {
  render() {


    return (
      <div>
        <h1 className="header">Marvel</h1>
        <div>
          <p>{data.data.results[0].title}</p>
          <img className='thumb' src={`${thumbnail.path}.${thumbnail.extension}`} alt="" ></img>
          <h1>Creators</h1>
          <span>{creator}</span>
        </div>
      </div>

    );
  }
}
export default App;
