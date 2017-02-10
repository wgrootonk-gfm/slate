---
title: GFM Partner API v0.5.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - html: JavaScript
  - javascript: Node.JS
  - python: Python
  - ruby: Ruby
  - java: Java
toc_footers:
  - '<a href="https://www.gofundme.com">Website</a>'
includes: []
search: true
highlight_theme: darkula
---

# GFM Partner API v0.5.0

Partner API integration for GoFundMe services

Base URL = http://api.gofundme.com/partner/v1





# Fund

Fund specific operations

## fund.create

> Code samples

````shell
# You can also use wget
curl -X post http://api.gofundme.com/partner/v1/funds
````

````http
POST http://api.gofundme.com/partner/v1/funds HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
````

````html
<script>
  $.ajax({
    url: 'http://api.gofundme.com/partner/v1/funds',
    method: 'post',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````

````javascript
const request = require('node-fetch');
fetch('http://api.gofundme.com/partner/v1/funds', { method: 'POST'})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

result = RestClient.post 'http://api.gofundme.com/partner/v1/funds', params:
  {
    # TODO
  }

p JSON.parse(result)
````

````python
import requests

r = requests.post('http://api.gofundme.com/partner/v1/funds', params={
  # TODO
})

print r.json()
````

````java
URL obj = new URL("http://api.gofundme.com/partner/v1/funds");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`POST /funds`

*Create Fund*

Creates a new GoFundMe fund

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
CreateFundBody|body|CreateFundBody|true| JSON request body for fund creation



> Body parameter

````json
{
  "user_id": "string",
  "name": "string",
  "description": "string",
  "goal": "string"
}
````
### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|JSON response body for fund creation
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error

> Example responses

````json
{
  "id": "string"
}
````
````json
{
  "error": {
    "domain": "string",
    "code": "string",
    "short_description": "string",
    "message": "string",
    "data": {}
  }
}
````
````json
{
  "error": {
    "domain": "string",
    "code": "string",
    "short_description": "string",
    "message": "string",
    "data": {}
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

## fund.get

> Code samples

````shell
# You can also use wget
curl -X get http://api.gofundme.com/partner/v1/funds/{fund_id}
````

````http
GET http://api.gofundme.com/partner/v1/funds/{fund_id} HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
````

````html
<script>
  $.ajax({
    url: 'http://api.gofundme.com/partner/v1/funds/{fund_id}',
    method: 'get',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````

````javascript
const request = require('node-fetch');
fetch('http://api.gofundme.com/partner/v1/funds/{fund_id}', { method: 'GET'})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://api.gofundme.com/partner/v1/funds/{fund_id}', params:
  {
    # TODO
  }

p JSON.parse(result)
````

````python
import requests

r = requests.get('http://api.gofundme.com/partner/v1/funds/{fund_id}', params={
  # TODO
})

print r.json()
````

````java
URL obj = new URL("http://api.gofundme.com/partner/v1/funds/{fund_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /funds/{fund_id}`

*Get Fund*

Get a single GoFundMe fund

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
fund_id|path|string|true|Fund Id



### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful Operation
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error

> Example responses

````json
{
  "id": "string"
}
````
````json
{
  "error": {
    "domain": "string",
    "code": "string",
    "short_description": "string",
    "message": "string",
    "data": {}
  }
}
````
````json
{
  "error": {
    "domain": "string",
    "code": "string",
    "short_description": "string",
    "message": "string",
    "data": {}
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

## fund.get.comments

> Code samples

````shell
# You can also use wget
curl -X get http://api.gofundme.com/partner/v1/funds/{fund_id}/comments
````

````http
GET http://api.gofundme.com/partner/v1/funds/{fund_id}/comments HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
````

````html
<script>
  $.ajax({
    url: 'http://api.gofundme.com/partner/v1/funds/{fund_id}/comments',
    method: 'get',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````

````javascript
const request = require('node-fetch');
fetch('http://api.gofundme.com/partner/v1/funds/{fund_id}/comments', { method: 'GET'})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://api.gofundme.com/partner/v1/funds/{fund_id}/comments', params:
  {
    # TODO
  }

p JSON.parse(result)
````

````python
import requests

r = requests.get('http://api.gofundme.com/partner/v1/funds/{fund_id}/comments', params={
  # TODO
})

print r.json()
````

````java
URL obj = new URL("http://api.gofundme.com/partner/v1/funds/{fund_id}/comments");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /funds/{fund_id}/comments`

*Get Fund Comments*

Get a comments for a given fund

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
fund_id|path|string|true|Fund Id
date|query|string|false|String representation of date with YYYY-MM-DD format
size|query|string|false|Max number of results expected from request



### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful Operation
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error

> Example responses

````json
{
  "scores": [
    {
      "id": "string"
    }
  ]
}
````
````json
{
  "error": {
    "domain": "string",
    "code": "string",
    "short_description": "string",
    "message": "string",
    "data": {}
  }
}
````
````json
{
  "error": {
    "domain": "string",
    "code": "string",
    "short_description": "string",
    "message": "string",
    "data": {}
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

## fund.get.donations

> Code samples

````shell
# You can also use wget
curl -X get http://api.gofundme.com/partner/v1/funds/{fund_id}/donations
````

````http
GET http://api.gofundme.com/partner/v1/funds/{fund_id}/donations HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
````

````html
<script>
  $.ajax({
    url: 'http://api.gofundme.com/partner/v1/funds/{fund_id}/donations',
    method: 'get',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````

````javascript
const request = require('node-fetch');
fetch('http://api.gofundme.com/partner/v1/funds/{fund_id}/donations', { method: 'GET'})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://api.gofundme.com/partner/v1/funds/{fund_id}/donations', params:
  {
    # TODO
  }

p JSON.parse(result)
````

````python
import requests

r = requests.get('http://api.gofundme.com/partner/v1/funds/{fund_id}/donations', params={
  # TODO
})

print r.json()
````

````java
URL obj = new URL("http://api.gofundme.com/partner/v1/funds/{fund_id}/donations");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /funds/{fund_id}/donations`

*Get Fund Donations*

Get a donations for a given fund

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
fund_id|path|string|true|Fund Id
date|query|string|false|String representation of date with YYYY-MM-DD format
size|query|string|false|Max number of results expected from request



### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful Operation
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error

> Example responses

````json
{
  "scores": [
    {
      "id": "string"
    }
  ]
}
````
````json
{
  "error": {
    "domain": "string",
    "code": "string",
    "short_description": "string",
    "message": "string",
    "data": {}
  }
}
````
````json
{
  "error": {
    "domain": "string",
    "code": "string",
    "short_description": "string",
    "message": "string",
    "data": {}
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

# User

User specific operations

## user.create

> Code samples

````shell
# You can also use wget
curl -X post http://api.gofundme.com/partner/v1/users
````

````http
POST http://api.gofundme.com/partner/v1/users HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
````

````html
<script>
  $.ajax({
    url: 'http://api.gofundme.com/partner/v1/users',
    method: 'post',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````

````javascript
const request = require('node-fetch');
fetch('http://api.gofundme.com/partner/v1/users', { method: 'POST'})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

result = RestClient.post 'http://api.gofundme.com/partner/v1/users', params:
  {
    # TODO
  }

p JSON.parse(result)
````

````python
import requests

r = requests.post('http://api.gofundme.com/partner/v1/users', params={
  # TODO
})

print r.json()
````

````java
URL obj = new URL("http://api.gofundme.com/partner/v1/users");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`POST /users`

*Create User*

Creates a new GoFundMe user account

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
CreateUserBody|body|CreateUserBody|true| JSON request body for user creation



> Body parameter

````json
{
  "email": "string",
  "name": "string",
  "password": "string"
}
````
### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|JSON response body for user creation
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error

> Example responses

````json
{
  "id": "string"
}
````
````json
{
  "error": {
    "domain": "string",
    "code": "string",
    "short_description": "string",
    "message": "string",
    "data": {}
  }
}
````
````json
{
  "error": {
    "domain": "string",
    "code": "string",
    "short_description": "string",
    "message": "string",
    "data": {}
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

## user.get

> Code samples

````shell
# You can also use wget
curl -X get http://api.gofundme.com/partner/v1/users/{user_id}
````

````http
GET http://api.gofundme.com/partner/v1/users/{user_id} HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
````

````html
<script>
  $.ajax({
    url: 'http://api.gofundme.com/partner/v1/users/{user_id}',
    method: 'get',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````

````javascript
const request = require('node-fetch');
fetch('http://api.gofundme.com/partner/v1/users/{user_id}', { method: 'GET'})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://api.gofundme.com/partner/v1/users/{user_id}', params:
  {
    # TODO
  }

p JSON.parse(result)
````

````python
import requests

r = requests.get('http://api.gofundme.com/partner/v1/users/{user_id}', params={
  # TODO
})

print r.json()
````

````java
URL obj = new URL("http://api.gofundme.com/partner/v1/users/{user_id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /users/{user_id}`

*Get User*

Get a single GoFundMe user account

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
user_id|path|string|true|User Id



### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful Operation
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error

> Example responses

````json
{
  "id": "string"
}
````
````json
{
  "error": {
    "domain": "string",
    "code": "string",
    "short_description": "string",
    "message": "string",
    "data": {}
  }
}
````
````json
{
  "error": {
    "domain": "string",
    "code": "string",
    "short_description": "string",
    "message": "string",
    "data": {}
  }
}
````
<aside class="success">
This operation does not require authentication
</aside>

