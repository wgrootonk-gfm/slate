## consumer.collection.get

> Code samples

````shell
curl -X get https://api.gofundme.com/partner/v1/consumers \ 
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
````

````http
GET https://api.gofundme.com/partner/v1/consumers HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
````

`GET /consumers`

*Get consumers*

Get the consumers that belong to the current consumer

<aside class="notice">
This is a parent consumer-only endpoint. Please reference the <a href="#roles">roles documentation</a> for more information.
</aside>

### Parameters

Parameter|In|Description
---|---|---|
before|query|A cursor; retrieves the previous rows before this ID
after|query|A cursor; retrieves the next rows after this ID
limit|query|The maximum number of results in the result set (limit 100, default 20)

> Example response

````json
{
  "data": [
    {
      "id": "FUe9zttHXkaOag",
      "email": "person@example.org",
      "name": "Place Name",
      "description": "A place for all your needs",
      "url": "http://place.example.org/",
      "logo_small": "https://place.example.org/logo_small.png",
      "logo_big": "https://place.example.org/logo_big.png",
      "tax_id": "123456",
      "phone": "14085551234",
      "address": {
        "street_line1": "123 Main St.",
        "street_line2": "Apt 123",
        "city": "San Diego",
        "region": "CA",
        "postal_code": "92123",
        "country_code": "US"
      }
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

Dotted properties (eg. address.city) are sub-properties.

Parameter|Description
---|---|
id<br>*string*|Consumer ID
email<br>*string*|Email
name<br>*string*|Full name
description<br>*string*|Description
url<br>*string*|URL
logo_small<br>*string*|Campaign page logo URL
logo_big<br>*string*|Email logo URL
tax_id<br>*string*|Tax ID
phone<br>*string*|Phone number
address.street_line1<br>*string*|Street address, first line
address.street_line2<br>*string*|Street address, second line
address.city<br>*string*|City
address.region<br>*string*|State/province
address.postal_code<br>*string*|Postal/zip code
address.country_code<br>*string*|Country code ISO 3166-1 alpha-2

