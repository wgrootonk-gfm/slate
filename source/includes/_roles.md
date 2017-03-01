# Roles

The API token that is used to access the Partner API can be broken into two roles: parent and child consumers.

Parent consumers have full access rights; they can create consumers, funds, and beneficiaries.
They can also view fund information for funds created by their consumers.

Child consumers have curtailed access rights; 
they can only create funds and beneficiaries, and only view the funds that they 
themselves have created.

## Endpoint Access Reference

|Endpoint|Role|
|---|---|
|`beneficiary.create`|parent, child|
|`consumer.create`|parent|
|`consumer.edit`|parent|
|`consumer.get`|parent|
|`consumer.reissue`|parent|
|`consumer.funds`|parent, child|
|`fund.create`|parent, child|
|`fund.launch`|parent, child|
|`fund.collection.get`|parent, child|
|`fund.get`|parent, child|
|`fund.get.*`|parent, child|
