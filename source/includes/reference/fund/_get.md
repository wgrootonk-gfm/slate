## fund.get

> Code samples

````shell
curl -X get https://api.gofundme.com/partner/v1/funds/Q2aWYAXtQK8A \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
````

````http
GET https://api.gofundme.com/partner/v1/funds/Q2aWYAXtQK8A HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
````

`GET /funds/{id}`

*Get Fund*

Get a single GoFundMe fund

Parameter|In|Description
---|---|---|---|---|
id<br>*required*|path|Fund Id

> Example response

````json
{
  "id": "Q2aWYAXtQK8A",
  "url": "example-fund",
  "title": "Example Fund",
  "description": "This is an example fund",
  "category": "OTHER",
  "currency_code": "USD",
  "goal": 500,
  "media": "https://place.example.org/media.png",
  "balance": 100,
  "counts": {
    "comments": 2,
    "donations": 22,
    "updates": 1
  },
  "comments_enabled": true,
  "donations_enabled": true,
  "state": "ACTIVE",
  "created_at": "2017-02-17T00:12:16Z"
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
