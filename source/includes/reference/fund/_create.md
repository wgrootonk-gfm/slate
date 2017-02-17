## fund.create

> Code samples

````shell
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

Dotted properties (eg. user.email) are sub-properties.

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
  "goal": 0,
  "media": "https://example.org/test.jpg",
  "balance": 0,
  "counts": {
    "comments": 0,
    "donations": 0,
    "updates": 0
  },
  "comments_enabled": true,
  "donations_enabled": true,
  "status": "ACTIVE",
  "created_at": "2017-02-17T00:12:16Z",
  "launched_at": null
}
````

### Response

Dotted properties (eg. counts.comments) are sub-properties.

Parameter|Description
---|---|
id<br>*string*|Fund ID
email<br>*string*|Email
name<br>*string*|Full name
description<br>*string*|Description
category<br>*string, ENUM*|[Fund Category](#fund-categorization), How a fund is discovered 
currency_code<br>*string*|User's currency code ISO 4217 alpha-3
goal<br>*integer*|Goal amount in user's currency
media<br>*string*|Main image or video
balance<br>*integer*|Currently raised amount in user's currency
counts.comments<br>*integer*|How many comments the campaign has
counts.donations<br>*integer*|How many donations the campaign has
counts.updates<br>*integer*|How many updates the campaign has
comments_enabled<br>*boolean*|Whether comments are enabled or not
donations_enabled<br>*boolean*|Whether the fund is accepting donations or not
status<br>*string, ENUM*|[Fund Status](#fund-status), visibility to the public
created_at<br>*timestamp*|When the fund was created
