## API DOCUMENTATION

:rocket: API developed using Node.js and AdonisJS as framework. The database used was PostgreSQL

## Getting started

- Clone this repo
- \$ Run `npm install` in the root folder
- \$ If you've adonis-cli installed, run the command right bellow `adonis serve --dev`
- \$ If you does not have adonis cli installed, run `node ace start`

## AUTHENTICATION

`POST /session/startup`: Signin as **Startup**

#### Body example:

```json
{
	"email": "lawyer@uplaw.com",
	"password": "glauber"
}
```

`POST /session/lawyer`: Signin as **Lawyer**

#### Body example:

```json
{
	"email": "lawyer@uplaw.com",
	"password": "glauber"
}
```

## STARTUP

`GET /startups`: Return all users that are **Startup**

`POST /startups`: Create a new **Startup**

#### Body example:

```json
{
	"name": "Glauber Brack",
	"cpfcnpj": "11122233300",
	"position": "owner",
	"email": "glauber@brack.com.br",
	"city": "Bebedouro",
	"state": "São Paulo",
	"zipcode": "14700005",
  	"password": "glauber",
  	"phone":  "1798805220",
  	"birthdate": "1994-06-16"
}
```
#### :warning: To use the next routes, the user MUST be authenticated

`GET /startups/:id`: Show one **Startup** by ID

`PUT /startups/:id`: Update one **Startup** by ID

#### Body example:

```json
{
	"name": "Glauber Brack",
	"cpfcnpj": "11122233300",
	"position": "owner",
	"email": "glauber@brack.com.br",
	"city": "Bebedouro",
	"state": "São Paulo",
	"zipcode": "14700005",
  	"password": "glauber",
  	"phone":  "1798805220",
  	"birthdate": "1994-06-16"
}
```

## LAWYERS

`GET /lawyers`: Return all users that are **Lawyers**

`POST /lawyers`: Create a new **Lawyers**

#### Body example:

```json
{
	"name": "Glauber Brack",
  	"cpfcnpj": "11122233300",
  	"oab": "12345 SP",
	"position": "owner",
	"email": "glauber@brack.com.br",
	"city": "Bebedouro",
	"state": "São Paulo",
	"zipcode": "14700005",
  	"password": "glauber",
  	"phone":  "1798805220",
  	"birthdate": "1994-06-16",
  	"industry": "criminal"
}
```
#### :warning: To use the next routes, the user MUST be authenticated

`GET /lawyers/:id`: Show one **Lawyers** by ID

`PUT /lawyers/:id`: Update one **Lawyers** by ID

#### Body example:

```json
{
	"name": "Glauber Brack",
	"cpfcnpj": "11122233300",
  	"oab": "12345 SP",
	"position": "owner",
	"email": "glauber@brack.com.br",
	"city": "Bebedouro",
	"state": "São Paulo",
	"zipcode": "14700005",
  	"password": "glauber",
	"phone":  "1798805220",
  	"birthdate": "1994-06-16",
  	"industry": "criminal"
}
```

## PASSWORD RECOVERY

`GET /lawyers`: Return all users that are **Lawyers**

`POST /forgot`: Create a new request to recovery password. This endpoint will send an email to the registred email with a Token.

#### Body example:

```json
{
	"email": "glauber@brack.com.br"
}
```

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

## FIND LAWYERS

`GET /find/lawyers/industry=:industry`: Return all **Lawyers** that are for certain **Industry**

`GET /find/lawyers/uf=:uf`: Return all **Lawyers** that are for certain **UF**

`GET /find/lawyers/zipcode=:zipcode/industry=:industry`: Return all **Lawyers** that are for certain **Zipcode** and certain **Industry**
