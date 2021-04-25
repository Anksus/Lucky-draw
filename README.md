# Lucky Draw

Backend system for organizing and participating in a Lucky Draw event. Users can participate in a running event. After the event is over, winner is computed automatically by running a scheduled job, which computes the winner.

## Techstack

```
NodeJs
ExpressJs
Mongodb
ReactJs
```

## Deployed links

- **Website** : https://lucky-draw-grofers.netlify.app/
- **Web API** : https://lucky-draw-grofers.herokuapp.com/

## Development

### For starting frontend React server

- `$ cd _frontend`

* `$ npm install`
* `$ npm start`

- Visit `http://localhost:3000/` from the browser

### For running express server

from the root directory

* `$ npm install`

* make a .env file and store database URI string there.

* `$ npm run dev`

# API documentation for local development

```
POST : http://localhost:9000/api/get-ticket
POST : http://localhost:9000/api/add-user
POST : http://localhost:9000/api/participate
POST : http://localhost:9000/api/add-event
GET  : http://localhost:9000/api/next-event
GET  : http://localhost:9000/api/last-week-winners
GET  : http://localhost:9000/api/users
GET  : http://localhost:9000/api/running-event
```

## Get Raffle tickets

- **URL:**

```
http://localhost:9000/api/get-ticket
```

- **Method:** -

```
POST
```

- **URL PARAMS:**

```
{
    "email":"johnwick@gmail.com"
}
```

- **Success Response:**

```
Code:201
Content: {ticket added successfully}
```

- **Error Response:**

```
Code: 404 NOT FOUND
Content: { error : "User doesn't exist" }

OR

Code: 401 UNAUTHORIZED
Content: { error : "You are unauthorized to make this request." }
```

## Get Next-Upcoming event

- **URL:**

```
http://localhost:9000/api/next-event
```

- **Method:** -

```
GET
```

- **URL PARAMS:**

```
None
```

- **Success Response:**

```
Code:200
Content: {
    "date": "23 April 2021",
    "reward": "lappy",
    "time": "10:59:00 am",
    "eventName": "test-event-9"
}
```

- **Error Response:**

```
Code: 400 Bad Request
Content: { error : "Bad request" }

OR

Code: 401 UNAUTHORIZED
Content: { error : "There's no Lucky Draw Event" }
```

## Participate in an Event

- **URL:**

```
http://localhost:9000/api/participate
```

- **Method:** -

```
POST
```

- **URL PARAMS:**

```
{
    "email":"naruto@gmail.com",
    "event":"test-event-8"
}
```

- **Success Response:**

```
Code:201
Content: {"You participated successfully"}
```

- **Error Response:**

```
Code: 400 Bad Request
Content: { "You dont have enough tickets to participate" }

OR

Code: 400 Bad Request
Content: { error : "Event not running right now" }

OR

Code: 400 Bad Request
Content: { error : "You already participated, can't participate again" }
```

## Last week event's winner

- **URL:**

```
http://localhost:9000/api/last-week-winners
```

- **Method:** -

```
GET
```

- **URL PARAMS:**

```
None
```

- **Success Response:**

```
Code:200
Content: [
    {
        winner:"eren@gmail.com",
        eventName: "Grofers event"
    }
]
```

- **Error Response:**

```
Code: 400 Bad Request
Content: { "No Events in the last week"" }

OR


Code: 401 Unauthorized
Content: { error : "Bad request" }
```

## API to add events

- **URL:**

```
http://localhost:9000/api/add-event
```

- **Method:** -

```
POST
```

- **URL PARAMS:**
  duration (in mins)

```
{
    "eventName": "test-event-9",
    "startsAt" : "2021/04/23 10:59:00",
    "duration": 1,
    "reward" : "iPad"
}
```

- **Success Response:**

```
Code:201
Content: {"Event registered successfully"}
```

- **Error Response:**

```
Code: 400 Bad Request
Content: { "Event already registered! Can't register again" }

OR

Code: 401 Unauthorized
Content: { error : "Bad request" }
```

## API for getting all the users

- **URL:**

```
http://localhost:9000/api/users
```

- **Method:** -

```
GET
```

- **URL PARAMS:**

```
None
```

- **Success Response:**

```
Code:201
Content: [
    "ronak@gmail.com",
    "susne@gmail.com",
    "eren@gmail.com",
    "naruto@gmail.com"
]
```

- **Error Response:**

```
Code: 401 Unthorized
Content: { error : "Bad request" }
```

## API to get the running event

- **URL:**

```
http://localhost:9000/api/running-event
```

- **Method:** -

```
GET
```

- **URL PARAMS:**
  NONE

- **Success Response:**

```
Code:201
Content: [{
    "eventName": "test-1",
    "reward": "Laptop",
    "startsAt": "25 April 2021",
    "time": "2:30:00 am"
}]
```

- **Error Response:**

```
Code: 400 Bad Request
Content: { "There's no running Lucky Draw Event" }

OR

Code: 401 Unauthorized
Content: { error : "Bad request" }
```

## API to add new user

- **URL:**

```
http://localhost:9000/api/add-user
```

- **Method:** -

```
POST
```

- **URL PARAMS:**

```
{

"username":"ankit",
"email":"ankit@gmail.com"

}
```

- **Success Response:**

```
Code:201
Content: User saved
```

- **Error Response:**

```
Code: 401 Unauthorized
Content: { error : "Bad request" }
```
