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
  "name": "string"
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
  "name": "string",
  "invited_at": "string",
  "accepted_at": "string"
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

`GET /consumers/{id}/funds`

*Get consumer funds*

Get the funds that belong to a consumer

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
id|path|string|true|Consumer Id
before|query|string|false|A cursor; retrieves the previous rows before this ID
after|query|string|false|A cursor; retrieves the next rows after this ID
limit|query|integer|false|The maximum number of results in the result set (limit 100, default 20)



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
      "created_at": "string"
    }
  ],
  "meta": {
    "has_more": true
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
  "created_at": "string"
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
  "created_at": "string"
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
  "name": "string",
  "fund_creation_enabled": true,
  "status": "string",
  "created_at": "string"
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
  "name": "string",
  "invited_at": "string",
  "accepted_at": "string"
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

`GET /funds/{id}/comments`

*Get Fund Comments*

Get comments for a given fund

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
id|path|string|true|Fund Id
before|query|string|false|A cursor; retrieves the previous rows before this ID
after|query|string|false|A cursor; retrieves the next rows after this ID
limit|query|integer|false|The maximum number of results in the result set (limit 100, default 20)



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
    "has_more": true
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

`GET /funds/{id}/updates`

*Get Fund Updates*

Get updates for a given fund

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
id|path|string|true|Fund Id
before|query|string|false|A cursor; retrieves the previous rows before this ID
after|query|string|false|A cursor; retrieves the next rows after this ID
limit|query|integer|false|The maximum number of results in the result set (limit 100, default 20)



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
      "created_at": "string"
    }
  ],
  "meta": {
    "has_more": true
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

`GET /funds/{id}/donations`

*Get Fund Donations*

Get donations for a given fund

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
id|path|string|true|Fund Id
before|query|string|false|A cursor; retrieves the previous rows before this ID
after|query|string|false|A cursor; retrieves the next rows after this ID
limit|query|integer|false|The maximum number of results in the result set (limit 100, default 20)



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
      "amount": "string",
      "name": "string",
      "text": "string",
      "created_at": "string"
    }
  ],
  "meta": {
    "has_more": true
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

