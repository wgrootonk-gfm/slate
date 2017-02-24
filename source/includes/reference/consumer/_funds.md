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
state<br>*string, ACTIVE or INACTIVE*|Fund status, visibility to the public
created_at<br>*timestamp*|When the fund was created
