## fund.get.comments

> Code samples

````shell
curl -X get http://api.gofundme.com/partner/v1/funds/Q2aWYAXtQK8A/comments \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
````

````http
GET http://api.gofundme.com/partner/v1/funds/Q2aWYAXtQK8A/comments HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
````

`GET /funds/{id}/comments`

*Get Fund Comments*

Get comments for a given fund

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
      "id": "gVKZC7RFtJ",
      "name": "John Jin",
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
id<br>*string*|Comment ID
name<br>*string*|Commenter name
text<br>*string*|Comment text
created_at<br>*timestamp*|When the comment was created
