## fund.get.user

> Code samples

````shell
curl -X get https://api.gofundme.com/partner/v1/funds/Q2aWYAXtQK8A/user \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
````

````http
GET https://api.gofundme.com/partner/v1/funds/Q2aWYAXtQK8A/user HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
````

`GET /funds/{id}/user`

*Get Fund User*

Get a single GoFundMe fund user

### Parameters

Parameter|In|Description
---|---|---|
id<br>*required*|path|Fund Id

> Example responses

````json
{
  "id": "Q2aWYAXtQK8A",
  "email": "jjin@example.org",
  "name": "John Jin",
  "fund_creation_enabled": true,
  "status": "ACTIVE",
  "created_at": "2017-02-17T00:12:16Z"
}
````

### Response

Dotted properties (eg. counts.comments) are sub-properties.

Parameter|Description
---|---|
id<br>*string*|User Id
email<br>*string*|User's email
name<br>*string*|User's name
fund_creation_enabled<br>*boolean*|User can create new funds
status<br>*string, ENUM*|[User Status](#user-status), active or not
created_at<br>*timestamp*|When the user was created
