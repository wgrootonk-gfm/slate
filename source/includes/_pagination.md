# Pagination

We use cursor pagination for paginated responses.

## Request parameters

> Code samples

````shell
curl -X get https://api.gofundme.com/partner/v1/funds/Q2aWYAXtQK8A/updates?before=SGoXQkhfl&limit=3 \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
````

````http
GET https://api.gofundme.com/partner/v1/funds/Q2aWYAXtQK8A/updates?before=SGoXQkhfl&limit=3 HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
````

When requesting a paginated collection, you are allowed to pass in the following additional query parameters.

Parameter|In|Description
---|---|---|
before|query|A cursor; retrieves the previous rows before this ID
after|query|A cursor; retrieves the next rows after this ID
limit|query|The maximum number of results in the result set (limit 100, default 20)

<aside class="notice">
If both `before` and `after` are passed in, only `before` will be used.
</aside>

## Response

> Example response

````json
{
  "data": [
    {
      "id": "SGoXQkhfl",
      "text": "You say goodbye",
      "created_at": "2017-02-17T00:12:16Z"
    },
    {
      "id": "LGt0U9I9",
      "text": "I say hello",
      "created_at": "2017-02-17T00:12:19Z"
    },
    {
      "id": "A1IXv0JB",
      "text": "Hello, hello, hello",
      "created_at": "2017-02-17T00:12:30Z"
    }
  ],
  "meta": {
    "has_more": true
  }
}
````

The response for a paginated collection will come back with the following:

Parameter|Description
---|---|
data<br>*array*|The array of objects retrieved; empty if there are no objects
meta.has_more<br>*boolean*|Whether there are more results to be retrieved or not

