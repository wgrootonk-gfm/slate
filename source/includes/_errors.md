# Error Handling


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
Our error codes are broken down into groups each of which corresponding to either a specific group of actions or resource.

###**Generic Error Codes**###
Any errors that return with an error code in the **1000's** are generic application level error codes

  - **1000** - Application Fault: Unknown error occurred

###**Authentication Error Codes**###
Any errors that return with an error code in the **2000's** are typically reserved for authentication or permission errors. 

  - **2000** - JWT Authentication Failed: We were unable to validate the Auth token provided

###**User Resource Error Codes**###
Any errors that return with an error code in the **3000's** are specific to the User resource

###**Fund Resource Error Codes**###
Any errors that return with an error code in the **3000's** are specific to the Fund resource

<aside class="warning">
These error codes are subject to change in future versions
</aside>
