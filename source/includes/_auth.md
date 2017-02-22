# Authentication with JWT
We utilize JSON Web Tokens ([JWT](https://jwt.io/)) to authenticate and verify payloads sent between our partners and our REST API. Every API consumer will have a **Consumer Id** and an associated **API Key**.

## HTTP Headers
The partner API will expect the ***Authorization*** header to be present when accepting JSON web tokens. The header should contain Bearer and a generated token.

> Code Samples

````shell
# Pass auth header on each request
curl -X get https://api.gofundme.com/partner -H "Authorization: Bearer <token>"
````

````http
GET https://api.gofundme.com/partner HTTP/1.1
Host: api.gofundme.com
Content-Type: application/json
Accept: application/json
Authorization: Bearer <token>
````

### Recommended Headers

Header|Value
---|---|
*Authorization*|`Bearer <token>`|
*Content-Type*|`application/json`|

## JSON Web Token
As is standard with JWT our token can be broken into three parts. Conceptually this token is made up of the header, payload and signature each of which is separated by a period.

`
<header>.<payload>.<signature>
`

> JWT Header JSON

````json
{
  "alg": "HS256",
  "typ": "JWT"
}
````

### JWT Header

First we have the **header** which contains the algorithm and token type.

Property|Required|Description|Supported Values
---|---|---|---|
*alg*|true|Hashing algorithm used on signature|`HS256`
*typ*|true|Type of token used|`JWT`

<aside class="notice">
JWT signatures currently only support HS256 
</aside>

> JWT Payload JSON

````json
{
  "aud": "consumer",
  "sub": "y42LW46J9luq3Xq9XMly"
}
````

### JWT Payload

Second is the request **payload** which contains any *claims* being made about each request.

Property|Required|Description
---|---|---|
*aud*|true|Either "consumer" or "partner," depending on the access level a user has
*sub*|true|Contains the Id provided by the Partner API

> JWT Signature Creation

````
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret
)
````

### JWT Signature

The final portion of your token is the **signature**. The signature uses *HMAC SHA256* to generate a keyed hash value. The data that is fed into the hashing algorithm is made up of the header and payload which are both individually *base 64 encoded and URL safe*. These two pieces are then appended together and hashed using the secret key issued to your consumer.

