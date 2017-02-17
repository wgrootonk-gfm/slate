# Response Handling

The Partner API will return specific HTTP status codes with each response returned. The below codes represent all the possible status codes that can be expected from this API.

### 2xx Success Responses
The partner API only accepts request methods `GET`, `POST` and `PUT`. Generally these methods return a specific HTTP status code when successful.

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Reserved for `GET` and `POST` requests and JSON in body is optional.
201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Reserved for `POST` requests and JSON in body is optional.
204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)| Reserved for `PUT` requests and no body is expected.

### 4xx and 5xx Error Responses
The Partner API does not reserve client errors or server errors for any particular request situation. Generally we rely on the error response send back to give us context around the specific error. 

Status|Meaning|Description
---|---|---|
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request
401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized
403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden
429|[Too Many Requests](https://tools.ietf.org/html/rfc6585#section-4)|Too Many Requests
500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error

## Error Responses

The system will attempt to gracefully catch the details of the error and the context in which they happen so that a predictable informative response can be provided to our API consumers.

> Error Response Format

````json
{  
   "error":{  
      "domain":"string",
      "code":"int",
      "short_description":"string",
      "message":"string",
      "data": {  

      }
   }
}
````
So let's break down this response:

Property|Type|Required|Description
---|---|---|---|
***domain***|string|true|The service in which returned the error (Partner)
***code***|integer|true|Numeric value representing a specific error
***short_description***|string|true|Short informative description 
***message***|string|false|Provides a human readable string
***data***|object|false|Data specific to the action taken

> Example JWT Authentication Failure

````json
{  
   "error":{  
      "domain":"partner",
      "code":2000,
      "short_description":"JWT Authentication failed",
      "message":"We were unable to validate the JWT token provided",
      "data": {  

      }
   }
}
````
In the second example we don't provide any data as the error is clearly around a problem with validating the JWT token and therefore has no context beyond just not being able to authenticate.

## Error Codes
The Partner API's error codes are broken down into groups each of which correspond with either a specific set of actions or a specific resource.

###**Generic Error Codes**###
Any errors that return with an error code in the **1000's** are generic application level error codes

  - **1000** - Application Fault: Unknown error occurred

###**Authentication Error Codes**###
Any errors that return with an error code in the **2000's** are typically reserved for authentication or permission errors. 

  - **2000** - JWT Authentication Failed: We were unable to validate the Auth token provided

###**Beneficiary Resource Error Codes**###
Any errors that return with an error code in the **3000's** are specific to the Beneficiary resource

###**Consumer Resource Error Codes**###
Any errors that return with an error code in the **4000's** are specific to the Consumer resource

###**Fund Resource Error Codes**###
Any errors that return with an error code in the **5000's** are specific to the Fund resource

<aside class="warning">
These error codes are subject to change in future versions
</aside>
