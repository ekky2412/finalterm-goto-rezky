# Midterm API Assignment

Creating a backend for the Midterm GoTo Impact Foundation

## i. Database Structure
Here's ER Diagram to show database structure in this repo
![alt text](https://i.imgur.com/oJHXe3N.png)

## ii. API Structure
Here's the API Structure to show what to response when it requested
![alt text](https://i.imgur.com/mDD9tFO.png)

## iii. List API Request and Response

### Video Thumbnails
- Video Object
```js
{
 videoID: string,
 urlThumbnail: string,
 urlVideo: string
}
```

## GET /api/v1/videos/thumbnail
Return all videos thumbnail
- URL Params

None
- Body Params

None
- Headers

Content-Type: application/json
- Code 200 Response :
```js
[
  {
    {<video_object>},
    {<video_object>},
    {<video_object>},
  }
]
```
---
### Products
- Product Object
```js
{
 productID: string,
 title: string,
 linkProduct: string,
 price: number
}
```
## GET /api/v1/products/{videoID}
Return products with given videoID
- URL Params

Required: ```videoID = [string]```
- Body Params

None
- Headers

Content-Type: application/json
- Code 200 
Response :
```js
[
  {
    {<product_object>},
    {<product_object>},
    {<product_object>},
  }
]
```
- Error Response :
    - Code 400 Response : ```{ message: "Video does not exist!" }```

---

- Comment Object
```js
{
 username: string
 comment: string
 timestamp: date(iso 8601)
}
```
## GET /api/v1/comments/{videoID}
Return comments with given videoID
- URL Params

Required: ```videoID = [string]```
- Body Params

None
- Headers

Content-Type: application/json
- Code 200 
Response :
```js
[
  {
    {<comment_object>},
    {<comment_object>},
    {<comment_object>},
  }
]
```
- Error Response :
    - Code 400 Response : ```{ message: "Comment does not exist!" }```


## POST /api/v1/products/{videoID}
Add comment data to given videoID and return response message
- URL Params

Required: ```videoID = [string]```
- Body Params

```js
{
  username: string,
  comment: string
}
```
- Headers

Content-Type: application/json
- Code 200 
Response :
```js
[
  {
    {<comment_object>},
    {<comment_object>},
    {<comment_object>},
  }
]
```
- Error Response :
    - Code 400 Response : ```{ message: "Video does not exist!" }```

---

## iv. How to Run

### Installation

Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or [yarn](https://yarnpkg.com/getting-started/install) to install.

```bash
npm install
```
or
```bash
yarn install
```

After that create an .env extension files with inside like this :
```
PORT = ****
DB_URL = mongodb://{your_server_ip}/{database_name}
```
Change the port and then change {your_server_ip} and {database_name} based on your mongodb server.
After that, run ```yarn database``` or ```npm database``` to insert the data into database.

### Running the server
Run ```npm start``` or ```yarn start``` into the terminal

## Author
Rezky Putratama Raharjo
