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
  "email": "person@example.org",
  "name": "Full Name"
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
  "email": "person@example.com",
  "name": "Full Name",
  "invited_at": "2017-02-16T22:18:02Z",
  "accepted_at": null
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
