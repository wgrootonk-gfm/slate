# Authentication with JWT
We utilize JSON Web Tokens ([JWT](https://jwt.io/)) to authenticate and verify payloads sent between our partners and our REST API. Every API consumer will have a **Consumer Id** and an associated **API Key**.

## Authorization Header
The partner API will expect the **Authorization** header to be present when accepting JSON web tokens. 
> Auth Header

````
Authorization: Bearer <token>
````
As is standard with JWT our token can be broken into three parts. First we have the **header** which contains the algorithm and token type
> Header JSON

````json
{
  "alg": "HS256",
  "typ": "JWT"
}
````
Second is the request **payload** which contains your **consumer Id** as the *sub* claim.
> Payload JSON

````json
{
  "sub": "y42LW46J9luq3Xq9XMly"
}
````
The final portion of your token will contain the request **signature**.
> Signature creation

````
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret
)
````
Conceptually our token will contain each of the above parts separated by a period. 
> JWT Structure

````
<header>.<payloads>.<signature>
````
Finally each part in it's true form.
> JWT Token Example

````
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ5NDJMVzQ2SjlsdXEzWHE5WE1seSJ9.-iIOYeBAaRcnHBayv21eSBqo2ug-W0C0bgrP_6wkl88
````