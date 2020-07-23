## API DOCUMENTATION

:rocket: API developed using Node.js and AdonisJS as framework. The database used was PostgreSQL

## Getting started

- Clone this repo
- \$ Run `npm install` in the root folder
- \$ If you've adonis-cli installed, run the command right bellow `adonis serve --dev`
- \$ If you does not have adonis cli installed, run `node ace start`


## AUTHENTICATION

`POST /sessions/user`: Signin as **User**

#### Body example:

```json
{
	"email": "glauber@brack.com.br",
	"password": "glauber"
}
```

`POST /sessions/admins`: Signin as **Admin**

#### Body example:

```json
{
	"email": "glauber@brack.com.br",
	"password": "glauber"
}
```

## USERS

`GET /users`: Return all users that are **Users**

`POST /users`: Create a new **User**

#### Body example:

```json
{
	"username": "glauber",
  "email": "glauber@brack.com.br",
  "password": "glauber"
}
```
#### :warning: To use the next routes, the user MUST be authenticated

`GET /users/:id`: Show one **User** by ID

`PUT /users/:id`: Update one **User** by ID

#### Body example:

```json
{
	"username": "glauber1",
  "email": "glauber1@brack.com.br",
  "password": "glauber1"
}
```

## PASSWORD RECOVERY

`GET /forgot`: Verify if the token exists.

#### Body example:

```json
{
	"token": "3ecefdb0"
}
```

`PUT /forgot/:token`: Update the password by the Token provided

#### Body example:

```json
{
	"password": "newpassword"
}
```

## JOBS

`GET /jobs`: Return all **Jobs** 
