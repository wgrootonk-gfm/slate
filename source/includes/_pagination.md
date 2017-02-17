# Pagination
We use cursor pagination for paginated responses.

## Request parameters

When requesting a paginated collection, you are allowed to pass in the following additional query parameters.

Parameter|In|Description
---|---|---|---|---|
before|query|A cursor; retrieves the previous rows before this ID
after|query|A cursor; retrieves the next rows after this ID
limit|query|The maximum number of results in the result set (limit 100, default 20)

<aside class="notice">
If both `before` and `after` are passed in, only `before` will be used.
</aside>

## Response

The response for a paginated collection will come back with the following:

Parameter|Description
---|---|---|---|---|
data<br>*array*|The array of objects retrieved; empty if there are no objects
meta.has_more<br>*boolean*|Whether there are more results to be retrieved or not
