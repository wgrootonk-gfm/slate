## fund.get.beneficiary

> Code samples

````shell
# You can also use wget
curl -X get http://api.gofundme.com/partner/v1/funds/Q2aWYAXtQK8A/beneficiary \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
````

````http
GET http://api.gofundme.com/partner/v1/funds/Q2aWYAXtQK8A/beneficiary HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
````

`GET /funds/{id}/beneficiary`

*Get Fund Beneficiary*

Get a single GoFundMe fund beneficiary

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
  "invited_at": "2017-02-16T00:03:39Z",
  "accepted_at": "2017-02-17T00:12:16Z"
}
````

### Response

Dotted properties (eg. counts.comments) are sub-properties.

Parameter|Description
---|---|
id<br>*string*|User Id
email<br>*string*|User's email
name<br>*string*|User's name
invited_at<br>*timestamp*|When the beneficiary invite email was sent
accepted_at<br>*timestamp*|When beneficiary completed beneficiary claim flow 
