require('dotenv').config()
const express = require('express')

//const app has all the functionalities of express package
const app = express()

//we can give any port number there are 65500 virtual ports available
const port = 3000

//getdata from API
const APIData = {
    "login": "hiteshchoudhary",
    "id": 11613311,
    "node_id": "MDQ6VXNlcjExNjEzMzEx",
    "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/hiteshchoudhary",
    "html_url": "https://github.com/hiteshchoudhary",
    "followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
    "following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
    "gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
    "organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
    "repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
    "events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
    "received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Hitesh Choudhary",
    "company": null,
    "blog": "https://www.youtube.com/c/HiteshChoudharydotcom",
    "location": "India",
    "email": null,
    "hireable": null,
    "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
    "twitter_username": "hiteshdotcom",
    "public_repos": 82,
    "public_gists": 4,
    "followers": 18179,
    "following": 0,
    "created_at": "2015-03-23T13:03:25Z",
    "updated_at": "2024-03-18T18:58:57Z"
  }

//request is received on the route '/'
app.get('/' , (req,res) =>{
    res.send("Hello World!")
})

app.get('/login' , (req , res)=>{
    res.send('<h1> Please login to your account </h1>')
})

app.get('/APIData', (req, res) =>{
    res.json(APIData)
})

//there need to be someone to listen to the request on the port, hence we write app.listen
app.listen(process.env.PORT , ()=>{
    console.log(`Example is listening on port ${port}`)
})