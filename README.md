Author: Brian Ducca - 2020

# Challenge

## How to Run

```sh
node index.js
```
Listening on **localhost:3000**

## Endpoints

* /api/user/getById/:userId
    * Expects userId and returns the entire user data 
    * Requires: Role "admin" or "users"
    * Example `http://localhost:3000/api/user/getById/a0ece5db-cd14-4f21-812f-966633e7be86`
* /api/user/getByName/:name
    * Expects a name and returns the entire user data
    * Requires: Role "admin" or "users
    * Example `http://localhost:3000/api/user/getByName/Barnett`
* /api/user/getByPolicieNumber/:policieN
    * Expects a policie number and returns the entire user data
    * Requires: Role "admin" 
    * Example `http://localhost:3000/api/user/getByPolicieNumber/56b415d6-53ee-4481-994f-4bffa47b5239`
* /api/policie/getByUserName/:userName
    * Returns the list of policies linked to a username
    * Requires: Role "admin" 
    * Example `http://localhost:3000/api/policie/getByUserName/Manning`

## Authentication and authorization
The best way to achieve is with **JWT**, to simulate the token , the HTTP header will expect a key-value pair. In this challenge, we will send the "role" inside the header.
>For example: The key-value pair inside the header could be "role":"admin" or "role":"users"

(If we are using **JWT**, the token will be the key-value pair used in HTTP headers)


## Testing

```sh
npm run test
```
