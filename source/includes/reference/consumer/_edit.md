## consumer.edit

> Code samples

````shell
curl -X put https://api.gofundme.com/partner/v1/consumers/FUe9zttHXkaOag \ 
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
````

````http
PUT https://api.gofundme.com/partner/v1/consumers/FUe9zttHXkaOag HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
````

`PUT /consumers/{id}`

*Edit Consumer Account*

Edits an existing GoFundMe consumer account

> Body parameter

````json
{
  "email": "funeralhome@example.org",
  "name": "Funeral Home",
  "description": "A funeral home for all your funeral needs",
  "url": "http://funeralhome.example.org/",
  "logo_small": "https://funeralhome.example.org/logo_small.png",
  "logo_big": "https://funeralhome.example.org/logo_big.png",
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
````

### Parameters

Dotted properties (eg. address.city) are sub-properties.

Parameter|In|Description
---|---|---|
id<br>*required*|path|Consumer ID
email|body|Email
name|body|Full name
description|body|Description
url|body|URL
logo_small|body|Campaign page logo URL
logo_big|body|Email logo URL
tax_id|body|Tax ID
phone|body|Phone number
address.street_line1|body|Street address, first line
address.street_line2|body|Street address, second line
address.city|body|City
address.region|body|State/province
address.postal_code|body|Postal/zip code
address.country_code|body|Country code ISO 3166-1 alpha-2

<aside class="success">
This operation does not return a response body.
</aside>
