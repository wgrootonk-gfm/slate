# Versioning

The Partner API is versioned, so developers can expect the API behavior they see to remain constant
(e.g. properties seen in responses, parameters sent in requests, etc.). When we change the API in a 
backwards-incompatible way, we release a new version. Old API versions will be disabled after their 
end of life date.

When sending queries to the API, versions are placed after the `https://api.gofundme.com/partner/` base URL.

## API versions

|Version|Description|Release date|End of life|
|---|---|---|---|
|v1|Initial release|||

## Backward compatibility charter

For a given API version, we promise to only make backwards-compatible changes.

The following are considered backwards-compatible:

* Adding new API resources.
* Adding new optional request parameters to existing API methods.
* Adding new properties to existing API responses.
* Changing the order of properties in existing API responses.
* Changing the length or format of object IDs or other opaque strings. 
You can safely assume object IDs we generate will never exceed 255 characters.
