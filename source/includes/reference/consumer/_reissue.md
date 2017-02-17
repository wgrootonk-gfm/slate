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

### Parameters

Parameter|In|Description
---|---|---|
id<br>*required*|path|Consumer ID

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
