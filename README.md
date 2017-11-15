# Slam Dunk
* View All the latest NBA Highlights uploaded to Reddit's /r/nba
* Search an ever-expanding archive highlights for something specific
* View live site [here](https://slam-dunk.herokuapp.com) (please be patient while Heroku wakes up)
* Relies on Rails API backend ([repo](https://github.com/jtynerbryan/slam-dunk-api))
## Features
* Watch embedded NBA highlights, sorted in chronological order by date
* Includes direct links to embed source and the [/r/nba](https://reddit.com/r/nba) post for every highlight
* [React Lazy Load](https://www.npmjs.com/package/react-lazy-load) allows higlights to be loaded on demand, improving page load time
* Search to find highlights by title (multiple terms allowed)
## Architecture
* This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)
* Deployed to Heroku using [create-react-app-buildpack](https://github.com/mars/create-react-app-buildpack)
