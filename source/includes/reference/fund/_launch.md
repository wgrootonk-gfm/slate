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
