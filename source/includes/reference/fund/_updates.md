## fund.get.updates

> Code samples

````shell
curl -X get https://api.gofundme.com/partner/v1/funds/Q2aWYAXtQK8A/updates \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
````

````http
GET https://api.gofundme.com/partner/v1/funds/Q2aWYAXtQK8A/updates HTTP/1.1
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
