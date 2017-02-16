---
title: GFM Partner API
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
includes: 
  - auth
  - errors
search: true
---

# GFM Partner API

Partner API integration for GoFundMe services

Base URL = http://api.gofundme.com/partner/v1





# Beneficiary

Beneficiary specific operations

## beneficiary.create

> Code samples

````shell
# You can also use wget
curl -X post http://api.gofundme.com/partner/v1/beneficiaries
````

````http
POST http://api.gofundme.com/partner/v1/beneficiaries HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
````

````html
<script>
  $.ajax({
    url: 'http://api.gofundme.com/partner/v1/beneficiaries',
    method: 'post',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````

````javascript
const request = require('node-fetch');
fetch('http://api.gofundme.com/partner/v1/beneficiaries', { method: 'POST'})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

result = RestClient.post 'http://api.gofundme.com/partner/v1/beneficiaries', params:
  {
    # TODO
  }

p JSON.parse(result)
````

````python
import requests

r = requests.post('http://api.gofundme.com/partner/v1/beneficiaries', params={
  # TODO
})

print r.json()
````

````java
URL obj = new URL("http://api.gofundme.com/partner/v1/beneficiaries");
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

`POST /beneficiaries`

*Create Beneficiary*

Creates a new GoFundMe beneficiary

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
CreateBeneficiaryBody|body|CreateBeneficiaryBody|true|JSON request body for beneficiary creation



> Body parameter

````json
{
  "fund_id": "string",
  "email": "string",
  "first_name": "string",
  "last_name": "string"
}
````
### Responses

Status|Meaning|Description
---|---|---|
201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|JSON response body for beneficiary creation
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized
403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden
429|[Too Many Requests](https://tools.ietf.org/html/rfc6585#section-4)|Too Many Requests
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error

> Example responses

````json
{
  "id": "string",
  "email": "string",
  "first_name": "string",
  "last_name": "string",
  "invited_at": 0,
  "accepted_at": 0
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

# Consumer

Consumer specific operations

## consumer.create

> Code samples

````shell
# You can also use wget
curl -X post http://api.gofundme.com/partner/v1/consumers
````

````http
POST http://api.gofundme.com/partner/v1/consumers HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
````

````html
<script>
  $.ajax({
    url: 'http://api.gofundme.com/partner/v1/consumers',
    method: 'post',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````

````javascript
const request = require('node-fetch');
fetch('http://api.gofundme.com/partner/v1/consumers', { method: 'POST'})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

result = RestClient.post 'http://api.gofundme.com/partner/v1/consumers', params:
  {
    # TODO
  }

p JSON.parse(result)
````

````python
import requests

r = requests.post('http://api.gofundme.com/partner/v1/consumers', params={
  # TODO
})

print r.json()
````

````java
URL obj = new URL("http://api.gofundme.com/partner/v1/consumers");
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

`POST /consumers`

*Create Consumer Account*

Creates a new GoFundMe consumer account

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
CreateConsumerBody|body|CreateConsumerBody|true|JSON request body for consumer creation



> Body parameter

````json
{
  "email": "string",
  "name": "string",
  "description": "string",
  "url": "string",
  "logo_small": "string",
  "logo_big": "string",
  "tax_id": "string",
  "phone": "string",
  "address": {
    "street_line1": "string",
    "street_line2": "string",
    "city": "string",
    "region": "string",
    "postal_code": "string",
    "country_code": "string"
  }
}
````
### Responses

Status|Meaning|Description
---|---|---|
201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|JSON response body for consumer creation
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized
403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden
429|[Too Many Requests](https://tools.ietf.org/html/rfc6585#section-4)|Too Many Requests
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error

> Example responses

````json
{
  "id": "string",
  "secret": "string",
  "email": "string",
  "name": "string",
  "description": "string",
  "url": "string",
  "logo_small": "string",
  "logo_big": "string",
  "tax_id": "string",
  "phone": "string",
  "address": {
    "street_line1": "string",
    "street_line2": "string",
    "city": "string",
    "region": "string",
    "postal_code": "string",
    "country_code": "string"
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

## consumer.get

> Code samples

````shell
# You can also use wget
curl -X get http://api.gofundme.com/partner/v1/consumers/{id}
````

````http
GET http://api.gofundme.com/partner/v1/consumers/{id} HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
````

````html
<script>
  $.ajax({
    url: 'http://api.gofundme.com/partner/v1/consumers/{id}',
    method: 'get',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````

````javascript
const request = require('node-fetch');
fetch('http://api.gofundme.com/partner/v1/consumers/{id}', { method: 'GET'})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://api.gofundme.com/partner/v1/consumers/{id}', params:
  {
    # TODO
  }

p JSON.parse(result)
````

````python
import requests

r = requests.get('http://api.gofundme.com/partner/v1/consumers/{id}', params={
  # TODO
})

print r.json()
````

````java
URL obj = new URL("http://api.gofundme.com/partner/v1/consumers/{id}");
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

`GET /consumers/{id}`

*Get Consumer*

Get a single GoFundMe consumer

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
id|path|string|true|Consumer Id



### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful Operation
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized
403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden
429|[Too Many Requests](https://tools.ietf.org/html/rfc6585#section-4)|Too Many Requests
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error

> Example responses

````json
{
  "id": "string",
  "email": "string",
  "name": "string",
  "description": "string",
  "url": "string",
  "logo_small": "string",
  "logo_big": "string",
  "tax_id": "string",
  "phone": "string",
  "address": {
    "street_line1": "string",
    "street_line2": "string",
    "city": "string",
    "region": "string",
    "postal_code": "string",
    "country_code": "string"
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

## consumer.edit

> Code samples

````shell
# You can also use wget
curl -X put http://api.gofundme.com/partner/v1/consumers/{id}
````

````http
PUT http://api.gofundme.com/partner/v1/consumers/{id} HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
````

````html
<script>
  $.ajax({
    url: 'http://api.gofundme.com/partner/v1/consumers/{id}',
    method: 'put',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````

````javascript
const request = require('node-fetch');
fetch('http://api.gofundme.com/partner/v1/consumers/{id}', { method: 'PUT'})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

result = RestClient.put 'http://api.gofundme.com/partner/v1/consumers/{id}', params:
  {
    # TODO
  }

p JSON.parse(result)
````

````python
import requests

r = requests.put('http://api.gofundme.com/partner/v1/consumers/{id}', params={
  # TODO
})

print r.json()
````

````java
URL obj = new URL("http://api.gofundme.com/partner/v1/consumers/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
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

`PUT /consumers/{id}`

*Edit Consumer Account*

Edits an existing GoFundMe consumer account

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
id|path|string|true|Consumer Id
EditConsumerBody|body|EditConsumerBody|true|JSON request body for consumer editing



> Body parameter

````json
{
  "email": "string",
  "name": "string",
  "description": "string",
  "url": "string",
  "logo_small": "string",
  "logo_big": "string",
  "tax_id": "string",
  "phone": "string",
  "address": {
    "street_line1": "string",
    "street_line2": "string",
    "city": "string",
    "region": "string",
    "postal_code": "string",
    "country_code": "string"
  }
}
````
### Responses

Status|Meaning|Description
---|---|---|
204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|No Content
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized
403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden
429|[Too Many Requests](https://tools.ietf.org/html/rfc6585#section-4)|Too Many Requests
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error

> Example responses

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

## consumer.reissue

> Code samples

````shell
# You can also use wget
curl -X post http://api.gofundme.com/partner/v1/consumers/{id}/reissue
````

````http
POST http://api.gofundme.com/partner/v1/consumers/{id}/reissue HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
````

````html
<script>
  $.ajax({
    url: 'http://api.gofundme.com/partner/v1/consumers/{id}/reissue',
    method: 'post',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````

````javascript
const request = require('node-fetch');
fetch('http://api.gofundme.com/partner/v1/consumers/{id}/reissue', { method: 'POST'})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

result = RestClient.post 'http://api.gofundme.com/partner/v1/consumers/{id}/reissue', params:
  {
    # TODO
  }

p JSON.parse(result)
````

````python
import requests

r = requests.post('http://api.gofundme.com/partner/v1/consumers/{id}/reissue', params={
  # TODO
})

print r.json()
````

````java
URL obj = new URL("http://api.gofundme.com/partner/v1/consumers/{id}/reissue");
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

`POST /consumers/{id}/reissue`

*Reissue Consumer Secret*

Reissue a GoFundMe consumer secret

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
id|path|string|true|Consumer Id



### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful Operation
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized
403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden
429|[Too Many Requests](https://tools.ietf.org/html/rfc6585#section-4)|Too Many Requests
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error

> Example responses

````json
{
  "id": "string",
  "secret": "string"
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

## consumer.funds

> Code samples

````shell
# You can also use wget
curl -X get http://api.gofundme.com/partner/v1/consumers/{id}/funds
````

````http
GET http://api.gofundme.com/partner/v1/consumers/{id}/funds HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
````

````html
<script>
  $.ajax({
    url: 'http://api.gofundme.com/partner/v1/consumers/{id}/funds',
    method: 'get',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````

````javascript
const request = require('node-fetch');
fetch('http://api.gofundme.com/partner/v1/consumers/{id}/funds', { method: 'GET'})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://api.gofundme.com/partner/v1/consumers/{id}/funds', params:
  {
    # TODO
  }

p JSON.parse(result)
````

````python
import requests

r = requests.get('http://api.gofundme.com/partner/v1/consumers/{id}/funds', params={
  # TODO
})

print r.json()
````

````java
URL obj = new URL("http://api.gofundme.com/partner/v1/consumers/{id}/funds");
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

`GET /consumers/{id}/funds`

*Get consumer funds*

Get the funds that belong to a consumer

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
id|path|string|true|Consumer Id
cursor|query|integer|false|What index to retrieve the result from
limit|query|integer|false|The number of results per page (limit 100, default 20)



### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful Operation
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized
403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden
429|[Too Many Requests](https://tools.ietf.org/html/rfc6585#section-4)|Too Many Requests
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error

> Example responses

````json
{
  "data": [
    {
      "id": "string",
      "url": "string",
      "title": "string",
      "description": "string",
      "goal": 0,
      "balance": 0,
      "counts": {
        "comments": 0,
        "donations": 0,
        "updates": 0
      },
      "comments_enabled": true,
      "donations_enabled": true,
      "status": "string",
      "created_at": 0
    }
  ],
  "meta": {
    "cursor": {
      "previous": 0,
      "current": 0,
      "next": 0,
      "count": 0
    }
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
  "category": "string",
  "postal_code": "string",
  "country_code": "string",
  "currency_code": "string",
  "title": "string",
  "description": "string",
  "goal": "string",
  "media": "string",
  "user": {
    "email": "string",
    "name": "string"
  }
}
````
### Responses

Status|Meaning|Description
---|---|---|
201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|JSON response body for fund creation
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized
403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden
429|[Too Many Requests](https://tools.ietf.org/html/rfc6585#section-4)|Too Many Requests
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

## fund.launch

> Code samples

````shell
# You can also use wget
curl -X post http://api.gofundme.com/partner/v1/funds/{id}/launch
````

````http
POST http://api.gofundme.com/partner/v1/funds/{id}/launch HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
````

````html
<script>
  $.ajax({
    url: 'http://api.gofundme.com/partner/v1/funds/{id}/launch',
    method: 'post',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````

````javascript
const request = require('node-fetch');
fetch('http://api.gofundme.com/partner/v1/funds/{id}/launch', { method: 'POST'})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

result = RestClient.post 'http://api.gofundme.com/partner/v1/funds/{id}/launch', params:
  {
    # TODO
  }

p JSON.parse(result)
````

````python
import requests

r = requests.post('http://api.gofundme.com/partner/v1/funds/{id}/launch', params={
  # TODO
})

print r.json()
````

````java
URL obj = new URL("http://api.gofundme.com/partner/v1/funds/{id}/launch");
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

`POST /funds/{id}/launch`

*Launch a Fund*

Launch a newly created GoFundMe fund and send user claim email

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
id|path|string|true|Fund Id



### Responses

Status|Meaning|Description
---|---|---|
204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Successful Operation
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized
403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden
429|[Too Many Requests](https://tools.ietf.org/html/rfc6585#section-4)|Too Many Requests
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error

> Example responses

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
curl -X get http://api.gofundme.com/partner/v1/funds/{id}
````

````http
GET http://api.gofundme.com/partner/v1/funds/{id} HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
````

````html
<script>
  $.ajax({
    url: 'http://api.gofundme.com/partner/v1/funds/{id}',
    method: 'get',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````

````javascript
const request = require('node-fetch');
fetch('http://api.gofundme.com/partner/v1/funds/{id}', { method: 'GET'})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://api.gofundme.com/partner/v1/funds/{id}', params:
  {
    # TODO
  }

p JSON.parse(result)
````

````python
import requests

r = requests.get('http://api.gofundme.com/partner/v1/funds/{id}', params={
  # TODO
})

print r.json()
````

````java
URL obj = new URL("http://api.gofundme.com/partner/v1/funds/{id}");
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

`GET /funds/{id}`

*Get Fund*

Get a single GoFundMe fund

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
id|path|string|true|Fund Id



### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful Operation
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized
403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden
429|[Too Many Requests](https://tools.ietf.org/html/rfc6585#section-4)|Too Many Requests
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error

> Example responses

````json
{
  "id": "string",
  "url": "string",
  "title": "string",
  "description": "string",
  "goal": 0,
  "balance": 0,
  "counts": {
    "comments": 0,
    "donations": 0,
    "updates": 0
  },
  "comments_enabled": true,
  "donations_enabled": true,
  "status": "string",
  "created_at": 0
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

## fund.get.user

> Code samples

````shell
# You can also use wget
curl -X get http://api.gofundme.com/partner/v1/funds/{id}/user
````

````http
GET http://api.gofundme.com/partner/v1/funds/{id}/user HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
````

````html
<script>
  $.ajax({
    url: 'http://api.gofundme.com/partner/v1/funds/{id}/user',
    method: 'get',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````

````javascript
const request = require('node-fetch');
fetch('http://api.gofundme.com/partner/v1/funds/{id}/user', { method: 'GET'})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://api.gofundme.com/partner/v1/funds/{id}/user', params:
  {
    # TODO
  }

p JSON.parse(result)
````

````python
import requests

r = requests.get('http://api.gofundme.com/partner/v1/funds/{id}/user', params={
  # TODO
})

print r.json()
````

````java
URL obj = new URL("http://api.gofundme.com/partner/v1/funds/{id}/user");
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

`GET /funds/{id}/user`

*Get Fund User*

Get a single GoFundMe fund user

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
id|path|string|true|Fund Id



### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful Operation
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized
403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden
429|[Too Many Requests](https://tools.ietf.org/html/rfc6585#section-4)|Too Many Requests
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error

> Example responses

````json
{
  "id": "string",
  "email": "string",
  "first_name": "string",
  "last_name": "string",
  "fund_creation_enabled": true,
  "status": "string",
  "created_at": 0
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

## fund.get.beneficiary

> Code samples

````shell
# You can also use wget
curl -X get http://api.gofundme.com/partner/v1/funds/{id}/beneficiary
````

````http
GET http://api.gofundme.com/partner/v1/funds/{id}/beneficiary HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
````

````html
<script>
  $.ajax({
    url: 'http://api.gofundme.com/partner/v1/funds/{id}/beneficiary',
    method: 'get',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````

````javascript
const request = require('node-fetch');
fetch('http://api.gofundme.com/partner/v1/funds/{id}/beneficiary', { method: 'GET'})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://api.gofundme.com/partner/v1/funds/{id}/beneficiary', params:
  {
    # TODO
  }

p JSON.parse(result)
````

````python
import requests

r = requests.get('http://api.gofundme.com/partner/v1/funds/{id}/beneficiary', params={
  # TODO
})

print r.json()
````

````java
URL obj = new URL("http://api.gofundme.com/partner/v1/funds/{id}/beneficiary");
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

`GET /funds/{id}/beneficiary`

*Get Fund Beneficiary*

Get a single GoFundMe fund beneficiary

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
id|path|string|true|Fund Id



### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful Operation
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized
403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden
429|[Too Many Requests](https://tools.ietf.org/html/rfc6585#section-4)|Too Many Requests
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error

> Example responses

````json
{
  "id": "string",
  "email": "string",
  "first_name": "string",
  "last_name": "string",
  "invited_at": 0,
  "accepted_at": 0
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
curl -X get http://api.gofundme.com/partner/v1/funds/{id}/comments
````

````http
GET http://api.gofundme.com/partner/v1/funds/{id}/comments HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
````

````html
<script>
  $.ajax({
    url: 'http://api.gofundme.com/partner/v1/funds/{id}/comments',
    method: 'get',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````

````javascript
const request = require('node-fetch');
fetch('http://api.gofundme.com/partner/v1/funds/{id}/comments', { method: 'GET'})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://api.gofundme.com/partner/v1/funds/{id}/comments', params:
  {
    # TODO
  }

p JSON.parse(result)
````

````python
import requests

r = requests.get('http://api.gofundme.com/partner/v1/funds/{id}/comments', params={
  # TODO
})

print r.json()
````

````java
URL obj = new URL("http://api.gofundme.com/partner/v1/funds/{id}/comments");
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

`GET /funds/{id}/comments`

*Get Fund Comments*

Get comments for a given fund

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
id|path|string|true|Fund Id
page|query|integer|false|The page number to retrieve
page_size|query|integer|false|The number of results per page (limit 100, default 20)



### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful Operation
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized
403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden
429|[Too Many Requests](https://tools.ietf.org/html/rfc6585#section-4)|Too Many Requests
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error

> Example responses

````json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "text": "string",
      "created_at": "string"
    }
  ],
  "meta": {
    "cursor": {
      "previous": 0,
      "current": 0,
      "next": 0,
      "count": 0
    }
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

## fund.get.updates

> Code samples

````shell
# You can also use wget
curl -X get http://api.gofundme.com/partner/v1/funds/{id}/updates
````

````http
GET http://api.gofundme.com/partner/v1/funds/{id}/updates HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
````

````html
<script>
  $.ajax({
    url: 'http://api.gofundme.com/partner/v1/funds/{id}/updates',
    method: 'get',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````

````javascript
const request = require('node-fetch');
fetch('http://api.gofundme.com/partner/v1/funds/{id}/updates', { method: 'GET'})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://api.gofundme.com/partner/v1/funds/{id}/updates', params:
  {
    # TODO
  }

p JSON.parse(result)
````

````python
import requests

r = requests.get('http://api.gofundme.com/partner/v1/funds/{id}/updates', params={
  # TODO
})

print r.json()
````

````java
URL obj = new URL("http://api.gofundme.com/partner/v1/funds/{id}/updates");
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

`GET /funds/{id}/updates`

*Get Fund Updates*

Get updates for a given fund

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
id|path|string|true|Fund Id
page|query|integer|false|The page number to retrieve
page_size|query|integer|false|The number of results per page (limit 100, default 20)



### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful Operation
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized
403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden
429|[Too Many Requests](https://tools.ietf.org/html/rfc6585#section-4)|Too Many Requests
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error

> Example responses

````json
{
  "data": [
    {
      "id": "string",
      "text": "string",
      "media_link": "string",
      "created_at": "string"
    }
  ],
  "meta": {
    "cursor": {
      "previous": 0,
      "current": 0,
      "next": 0,
      "count": 0
    }
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
curl -X get http://api.gofundme.com/partner/v1/funds/{id}/donations
````

````http
GET http://api.gofundme.com/partner/v1/funds/{id}/donations HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
````

````html
<script>
  $.ajax({
    url: 'http://api.gofundme.com/partner/v1/funds/{id}/donations',
    method: 'get',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````

````javascript
const request = require('node-fetch');
fetch('http://api.gofundme.com/partner/v1/funds/{id}/donations', { method: 'GET'})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://api.gofundme.com/partner/v1/funds/{id}/donations', params:
  {
    # TODO
  }

p JSON.parse(result)
````

````python
import requests

r = requests.get('http://api.gofundme.com/partner/v1/funds/{id}/donations', params={
  # TODO
})

print r.json()
````

````java
URL obj = new URL("http://api.gofundme.com/partner/v1/funds/{id}/donations");
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

`GET /funds/{id}/donations`

*Get Fund Donations*

Get donations for a given fund

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
id|path|string|true|Fund Id
page|query|integer|false|The page number to retrieve
page_size|query|integer|false|The number of results per page (limit 100, default 20)



### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful Operation
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized
403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden
429|[Too Many Requests](https://tools.ietf.org/html/rfc6585#section-4)|Too Many Requests
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error

> Example responses

````json
{
  "donations": [
    {
      "id": "string",
      "amount": "string",
      "name": "string",
      "text": "string",
      "created_at": "string"
    }
  ],
  "meta": {
    "cursor": {
      "previous": 0,
      "current": 0,
      "next": 0,
      "count": 0
    }
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

