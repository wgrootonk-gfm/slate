## consumer.create

> Code samples

````shell
curl -X post https://api.gofundme.com/partner/v1/consumers \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
````

````http
POST https://api.gofundme.com/partner/v1/consumers HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
````

`POST /consumers`

*Create Consumer Account*

Creates a new GoFundMe consumer account.

<aside class="notice">
This is a parent consumer-only endpoint. Please reference the <a href="#roles">roles documentation</a> for more information.
</aside>

> Body parameter

````json
{
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
````

### Parameters

Dotted properties (eg. address.city) are sub-properties.

Parameter|In|Description
---|---|---|
email<br>*required*|body|Email
name<br>*required*|body|Full name
description<br>*required*|body|Description
url<br>*required*|body|URL
logo_small<br>*required*|body|Campaign page logo URL
logo_big<br>*required*|body|Email logo URL
tax_id|body|Tax ID
phone|body|Phone number
address.street_line1|body|Street address, first line
address.street_line2|body|Street address, second line
address.city|body|City
address.region|body|State/province
address.postal_code|body|Postal/zip code
address.country_code|body|Country code ISO 3166-1 alpha-2

> Example response

````json
{
  "id": "FUe9zttHXkaOag",
  "secret": "H9LcHVVvmTBrvx1jvNDATqlYRkDaXQCrg9Y/hiXeA6YDSv8Q",
  "email": "person@example.org",
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

### Response

Dotted properties (eg. address.city) are sub-properties.

Parameter|Description
---|---|
id<br>*string*|Consumer ID
secret<br>*string*|Consumer API secret
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
