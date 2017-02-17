# Beneficiary

Beneficiary specific operations

## beneficiary.create

> Code samples

````shell
curl -X post https://api.gofundme.com/partner/v1/beneficiaries \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
````

````http
POST https://api.gofundme.com/partner/v1/beneficiaries HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
````

`POST /beneficiaries`

*Create Beneficiary*

Creates a new GoFundMe beneficiary

> Body parameter

````json
{
  "fund_id": "rH29HDas09F",
  "email": "jjin@example.org",
  "name": "John Jin"
}
````

### Parameters

Parameter|In|Description
---|---|---|
fund\_id<br>*required*|body|Fund ID
email<br>*required*|body|Email
name<br>*required*|body|Full name

> Example response

````json
{
  "id": "hDZS98daF",
  "fund_id": "rH29HDas09F",
  "email": "jjin@example.com",
  "name": "John Jin",
  "invited_at": "2017-02-16T22:18:02Z",
  "accepted_at": "null"
}
````

### Response
Parameter|Description
---|---|
id<br>*string*|Beneficiary ID
fund\_id<br>*string*|Fund ID
email<br>*string*|Email
name<br>*string*|Full name
invited\_at<br>*timestamp*|When the beneficiary was invited
accepted\_at<br>*timestamp*|When the beneficiary accepted


# Consumer

Consumer specific operations

## consumer.create

> Code samples

````shell
curl -X post https://api.gofundme.com/partner/v1/consumers \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
````

````http
POST https://api.gofundme.com/partner/v1/consumers HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
````

`POST /consumers`

*Create Consumer Account*

Creates a new GoFundMe consumer account.

> Body parameter

````json
{
  "email": "funeralhome@example.org",
  "name": "Funeral Home",
  "description": "A funeral home for all your funeral needs",
  "url": "http://funeralhome.example.org/",
  "logo_small": "https://funeralhome.example.org/logo_small.png",
  "logo_big": "https://funeralhome.example.org/logo_big.png",
  "tax_id": "123456",
  "phone": "14085551234",
  "address": {
    "street_line1": "123 Main St.",
    "street_line2": "Apt 123",
    "city": "San Diego",
    "region": "CA",
    "postal_code": "92123",
    "country_code": "US"
  }
}
````

### Parameters

Dotted properties (eg. address.city) are subproperties.

Parameter|In|Description
---|---|---|
email<br>*required*|body|Email
name<br>*required*|body|Full name
description<br>*required*|body|Description
url<br>*required*|body|URL
logo_small<br>*required*|body|Campaign page logo URL
logo_big<br>*required*|body|Email logo URL
tax_id|body|Tax ID
phone|body|Phone number
address.street_line1|body|Street address, first line
address.street_line2|body|Street address, second line
address.city|body|City
address.region|body|State/province
address.postal_code|body|Postal/zip code
address.country_code|body|Country code ISO 3166-1 alpha-2

> Example response

````json
{
  "id": "FUe9zttHXkaOag",
  "secret": "H9LcHVVvmTBrvx1jvNDATqlYRkDaXQCrg9Y/hiXeA6YDSv8Q",
  "email": "funeralhome@example.org",
  "name": "Funeral Home",
  "description": "A funeral home for all your funeral needs",
  "url": "http://funeralhome.example.org/",
  "logo_small": "https://funeralhome.example.org/logo_small.png",
  "logo_big": "https://funeralhome.example.org/logo_big.png",
  "tax_id": "123456",
  "phone": "14085551234",
  "address": {
    "street_line1": "123 Main St.",
    "street_line2": "Apt 123",
    "city": "San Diego",
    "region": "CA",
    "postal_code": "92123",
    "country_code": "US"
  }
}
````

### Response

Dotted properties (eg. address.city) are subproperties.

Parameter|Description
---|---|
id<br>*string*|Consumer ID
secret<br>*string*|Consumer API secret
email<br>*string*|Email
name<br>*string*|Full name
description<br>*string*|Description
url<br>*string*|URL
logo_small<br>*string*|Campaign page logo URL
logo_big<br>*string*|Email logo URL
tax_id<br>*string*|Tax ID
phone<br>*string*|Phone number
address.street_line1<br>*string*|Street address, first line
address.street_line2<br>*string*|Street address, second line
address.city<br>*string*|City
address.region<br>*string*|State/province
address.postal_code<br>*string*|Postal/zip code
address.country_code<br>*string*|Country code ISO 3166-1 alpha-2


## consumer.get

> Code samples

````shell
curl -X get https://api.gofundme.com/partner/v1/consumers/FUe9zttHXkaOag \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
````

````http
GET https://api.gofundme.com/partner/v1/consumers/FUe9zttHXkaOag HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
````

`GET /consumers/{id}`

*Get Consumer*

Get a single GoFundMe consumer

### Parameters

Parameter|Type|Description
---|---|---|
id<br>*required*|path|Consumer Id


> Example response

````json
{
  "id": "FUe9zttHXkaOag",
  "email": "funeralhome@example.org",
  "name": "Funeral Home",
  "description": "A funeral home for all your funeral needs",
  "url": "http://funeralhome.example.org/",
  "logo_small": "https://funeralhome.example.org/logo_small.png",
  "logo_big": "https://funeralhome.example.org/logo_big.png",
  "tax_id": "123456",
  "phone": "14085551234",
  "address": {
    "street_line1": "123 Main St.",
    "street_line2": "Apt 123",
    "city": "San Diego",
    "region": "CA",
    "postal_code": "92123",
    "country_code": "US"
  }
}
````

### Response

Dotted properties (eg. address.city) are subproperties.

Parameter|Description
---|---|
id<br>*string*|Consumer ID
email<br>*string*|Email
name<br>*string*|Full name
description<br>*string*|Description
url<br>*string*|URL
logo_small<br>*string*|Campaign page logo URL
logo_big<br>*string*|Email logo URL
tax_id<br>*string*|Tax ID
phone<br>*string*|Phone number
address.street_line1<br>*string*|Street address, first line
address.street_line2<br>*string*|Street address, second line
address.city<br>*string*|City
address.region<br>*string*|State/province
address.postal_code<br>*string*|Postal/zip code
address.country_code<br>*string*|Country code ISO 3166-1 alpha-2


## consumer.edit

> Code samples

````shell
# You can also use wget
curl -X put https://api.gofundme.com/partner/v1/consumers/FUe9zttHXkaOag \ 
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
````

````http
PUT https://api.gofundme.com/partner/v1/consumers/FUe9zttHXkaOag HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
````

`PUT /consumers/{id}`

*Edit Consumer Account*

Edits an existing GoFundMe consumer account

> Body parameter

````json
{
  "id": "FUe9zttHXkaOag",
  "email": "funeralhome@example.org",
  "name": "Funeral Home",
  "description": "A funeral home for all your funeral needs",
  "url": "http://funeralhome.example.org/",
  "logo_small": "https://funeralhome.example.org/logo_small.png",
  "logo_big": "https://funeralhome.example.org/logo_big.png",
  "tax_id": "123456",
  "phone": "14085551234",
  "address": {
    "street_line1": "123 Main St.",
    "street_line2": "Apt 123",
    "city": "San Diego",
    "region": "CA",
    "postal_code": "92123",
    "country_code": "US"
  }
}
````

### Parameters

Dotted properties (eg. address.city) are subproperties.

Parameter|In|Description
---|---|---|
id<br>*required*|body|Consumer ID
email|body|Email
name|body|Full name
description|body|Description
url|body|URL
logo_small|body|Campaign page logo URL
logo_big|body|Email logo URL
tax_id|body|Tax ID
phone|body|Phone number
address.street_line1|body|Street address, first line
address.street_line2|body|Street address, second line
address.city|body|City
address.region|body|State/province
address.postal_code|body|Postal/zip code
address.country_code|body|Country code ISO 3166-1 alpha-2

<aside class="success">
This operation does not return a response body.
</aside>

## consumer.reissue

> Code samples

````shell
curl -X post https://api.gofundme.com/partner/v1/consumers/FUe9zttHXkaOag/reissue \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
````

````http
POST https://api.gofundme.com/partner/v1/consumers/FUe9zttHXkaOag/reissue HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
````

`POST /consumers/{id}/reissue`

*Reissue Consumer Secret*

Reissue a GoFundMe consumer secret

> Body parameter

````json
{
  "id": "FUe9zttHXkaOag"
}
````

### Parameters

Parameter|In|Description
---|---|---|
id<br>*required*|body|Consumer ID

> Example response

````json
{
  "id": "FUe9zttHXkaOag",
  "secret": "H9LcHVVvmTBrvx1jvNDATqlYRkDaXQCrg9Y/hiXeA6YDSv8Q"
}
````

### Response

Parameter|Description
---|---|
id<br>*string*|Consumer ID
secret<br>*string*|Consumer API secret

## consumer.funds

> Code samples

````shell
curl -X get https://api.gofundme.com/partner/v1/consumers/FUe9zttHXkaOag/funds \ 
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
````

````http
GET https://api.gofundme.com/partner/v1/consumers/FUe9zttHXkaOag/funds HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
````

`GET /consumers/{id}/funds`

*Get consumer funds*

Get the funds that belong to a consumer

### Parameters

Parameter|In|Description
---|---|---|
id<br>*required*|path|Consumer Id
before|query|A cursor; retrieves the previous rows before this ID
after|query|A cursor; retrieves the next rows after this ID
limit|query|The maximum number of results in the result set (limit 100, default 20)

> Example response

````json
{
  "data": [
    {
      "id": "Q2aWYAXtQK8A",
      "url": "example-fund",
      "title": "Example Fund",
      "description": "This is an example fund",
      "category": "MEMORIALS",
      "currency_code": "USD",
      "goal": 500,
      "media": "https://example.org/test.jpg",
      "balance": 100,
      "counts": {
        "comments": 2,
        "donations": 22,
        "updates": 1
      },
      "comments_enabled": true,
      "donations_enabled": true,
      "status": "ACTIVE",
      "created_at": "2017-02-17T00:12:16Z"
    }
  ],
  "meta": {
    "has_more": true
  }
}
````

### Response

This is a [paginated collection](#pagination).
Responses will be contained inside a `data` array, while metadata will be contained inside a `meta` object.

Dotted properties (eg. counts.comments) are subproperties.

Parameter|Description
---|---|
id<br>*string*|Fund ID
email<br>*string*|Email
name<br>*string*|Full name
description<br>*string*|Description
category<br>*string*|Category
currency_code<br>*string*|User's currency code ISO 4217 alpha-3
goal<br>*integer*|Goal amount in user's currency
media<br>*string*|Main image or video
balance<br>*integer*|Currently raised amount in user's currency
counts.comments<br>*integer*|How many comments the campaign has
counts.donations<br>*integer*|How many donations the campaign has
counts.updates<br>*integer*|How many updates the campaign has
comments_enabled<br>*boolean*|Whether comments are enabled or not
donations_enabled<br>*boolean*|Whether the fund is accepting donations or not
status<br>*string, ACTIVE or INACTIVE*|Fund status, visibility to the public
created_at<br>*timestamp*|When the fund was created

# Fund

Fund specific operations

## fund.create

> Code samples

````shell
# You can also use wget
curl -X post https://api.gofundme.com/partner/v1/funds \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
````

````http
POST https://api.gofundme.com/partner/v1/funds HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
````

`POST /funds`

*Create Fund*

Creates a new GoFundMe fund

> Body parameter

````json
{
  "user": {
    "email": "jjin@example.org",
    "name": "John Jin"
  },
  "category": "MEMORIALS",
  "postal_code": "92123",
  "country_code": "US",
  "currency_code": "USD",
  "title": "Example Campaign",
  "description": "This is an example campaign.",
  "goal": 500,
  "media": "https://example.org/test-image.png"
}
````

### Parameters

Dotted properties (eg. user.email) are subproperties.

Parameter|In|Description
---|---|---|
user.email<br>*required*|body|User's email
user.name<br>*required*|body|User's name
category<br>*required*|body|Category name
postal_code<br>*required*|body|User's postal address code
country_code<br>*required*|body|User's country code ISO 3166-1 alpha-2
currency_code<br>*required*|body|User's currency code ISO 4217 alpha-3
title<br>*required*|body|Fund title
description|body|Fund description
goal|body|Amount that is wished to be raised
media|body|Main image or video

> Example response

````json
{
  "id": "Q2aWYAXtQK8A",
  "url": "example-fund",
  "title": "Example Fund",
  "description": "This is an example fund",
  "category": "MEMORIALS",
  "currency_code": "USD",
  "goal": 500,
  "media": "https://example.org/test.jpg",
  "balance": 100,
  "counts": {
    "comments": 2,
    "donations": 22,
    "updates": 1
  },
  "comments_enabled": true,
  "donations_enabled": true,
  "status": "ACTIVE",
  "created_at": "2017-02-17T00:12:16Z"
}
````

### Response

Dotted properties (eg. counts.comments) are subproperties.

Parameter|Description
---|---|
id<br>*string*|Fund ID
email<br>*string*|Email
name<br>*string*|Full name
description<br>*string*|Description
category<br>*string*|Category
currency_code<br>*string*|User's currency code ISO 4217 alpha-3
goal<br>*integer*|Goal amount in user's currency
media<br>*string*|Main image or video
balance<br>*integer*|Currently raised amount in user's currency
counts.comments<br>*integer*|How many comments the campaign has
counts.donations<br>*integer*|How many donations the campaign has
counts.updates<br>*integer*|How many updates the campaign has
comments_enabled<br>*boolean*|Whether comments are enabled or not
donations_enabled<br>*boolean*|Whether the fund is accepting donations or not
status<br>*string, ACTIVE or INACTIVE*|Fund status, visibility to the public
created_at<br>*timestamp*|When the fund was created

## fund.launch

> Code samples

````shell
curl -X post http://api.gofundme.com/partner/v1/funds/Q2aWYAXtQK8A/launch \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
````

````http
POST http://api.gofundme.com/partner/v1/funds/Q2aWYAXtQK8A/launch HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
````

`POST /funds/{id}/launch`

*Launch a Fund*

Launch a newly created GoFundMe fund and send user claim email

### Parameters

Parameter|In|Description
---|---|---|
id<br>*required*|path|Fund Id

<aside class="success">
This operation does not return a response body.
</aside>

## fund.get

> Code samples

````shell
curl -X get http://api.gofundme.com/partner/v1/funds/Q2aWYAXtQK8A \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
````

````http
GET http://api.gofundme.com/partner/v1/funds/Q2aWYAXtQK8A HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
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
curl -X get http://api.gofundme.com/partner/v1/funds/Q2aWYAXtQK8A/comments \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
````

````http
GET http://api.gofundme.com/partner/v1/funds/Q2aWYAXtQK8A/comments HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
````

`GET /funds/{id}/comments`

*Get Fund Comments*

Get comments for a given fund

### Parameters

Parameter|In|Description
---|---|---|
id<br>*required*|path|Fund Id
before|query|A cursor; retrieves the previous rows before this ID
after|query|A cursor; retrieves the next rows after this ID
limit|query|The maximum number of results in the result set (limit 100, default 20)

> Example response

````json
{
  "data": [
    {
      "id": "gVKZC7RFtJ",
      "name": "John Jin",
      "text": "Hello!",
      "created_at": "2017-02-17T00:12:16Z"
    }
  ],
  "meta": {
    "has_more": true
  }
}
````

### Response

This is a [paginated collection](#pagination).
Responses will be contained inside a `data` array, while metadata will be contained inside a `meta` object.

Parameter|Description
---|---|
id<br>*string*|Comment ID
name<br>*string*|Commenter name
text<br>*string*|Comment text
created_at<br>*timestamp*|When the comment was created

## fund.get.updates

> Code samples

````shell
curl -X get http://api.gofundme.com/partner/v1/funds/Q2aWYAXtQK8A/updates \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
````

````http
GET http://api.gofundme.com/partner/v1/funds/Q2aWYAXtQK8A/updates HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
````

`GET /funds/{id}/updates`

*Get Fund Updates*

Get updates for a given fund

### Parameters

Parameter|In|Description
---|---|---|
id<br>*required*|path|Fund Id
before|query|A cursor; retrieves the previous rows before this ID
after|query|A cursor; retrieves the next rows after this ID
limit|query|The maximum number of results in the result set (limit 100, default 20)

> Example response

````json
{
  "data": [
    {
      "id": "SGoXQkhfl",
      "text": "Hello!",
      "created_at": "2017-02-17T00:12:16Z"
    }
  ],
  "meta": {
    "has_more": true
  }
}
````

### Response

This is a [paginated collection](#pagination).
Responses will be contained inside a `data` array, while metadata will be contained inside a `meta` object.

Parameter|Description
---|---|
id<br>*string*|Update ID
text<br>*string*|Update text (HTML)
created_at<br>*timestamp*|When the update was created


## fund.get.donations

> Code samples

````shell
curl -X get http://api.gofundme.com/partner/v1/funds/Q2aWYAXtQK8A/donations \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
````

````http
GET http://api.gofundme.com/partner/v1/funds/Q2aWYAXtQK8A/donations HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
````

`GET /funds/{id}/donations`

*Get Fund Donations*

Get donations for a given fund

### Parameters

Parameter|In|Description
---|---|---|
id<br>*required*|path|Fund Id
before|query|A cursor; retrieves the previous rows before this ID
after|query|A cursor; retrieves the next rows after this ID
limit|query|The maximum number of results in the result set (limit 100, default 20)

> Example response

````json
{
  "data": [
    {
      "id": "3bHUuvLML",
      "amount": 50,
      "name": "John Jin",
      "text": "Get well soon!",
      "created_at": "2017-02-17T00:12:16Z"
    }
  ],
  "meta": {
    "has_more": true
  }
}
````

### Response

This is a [paginated collection](#pagination).
Responses will be contained inside a `data` array, while metadata will be contained inside a `meta` object.

Parameter|Description
---|---|
id<br>*string*|Donation ID
amount<br>*integer*|Donation amount in the fund's currency
name<br>*string*|Name of the person who donated
text<br>*string*|Donation comment text
created_at<br>*timestamp*|When the donation was made
