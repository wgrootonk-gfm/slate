# Enumerations 

The Partner API uses enumerations to describe specific resource actions and/or states.


## Fund Categorization
Our Fund resources will either expect or return, as part of a response, a `category` property. This property is important for determining how a fund is discovered.

Value|Description
---|---|
`EMERGENCIES`|Accidents & Emergencies|
`PETS`|Animals & Pets|
`FAMILY`|Babies, Kids & Family|
`BUSINESS`|Business & Entrepreneurs|
`EVENTS`|Celebrations & Events|
`COMMUNITY`|Community & Neighbors|
`COMPETITIONS`|Competitions & Pageants|
`CREATIVE`|Creative Arts, Music & Film|
`DREAMS`|Dreams, Hopes & Wishes|
`EDUCATION`|Education & Learning|
`FUNERALS`|Funerals & Memorials|
`MEDICAL`|Medical, Illness & Healing|
`RELIGION`|Missions, Faith & Church|
`CHARITY`|Non-Profits & Charities|
`OTHER`|Other|
`SPORTS`|Sports, Teams & Clubs|
`TRAVEL`|Travel & Adventure|
`VOLUNTEER`|Volunteer & Service|
`WEDDINGS`|Weddings & Honeymoons|

## Fund State
Fund resources can expect to have a simple return property called `state`. Generally this field returns a value that represents whether a fund is visible to the public or not.

Value|Description
---|---|
`ACTIVE`| Fund is discoverable
`PENDING`| Fund is pending claim completion and is not discoverable  
`INACTIVE`| Fund is not discoverable

## User State
The User sub resource, similar to it's parent Fund, has a `state` field. 

Value|Description
---|---|
`ACTIVE`| User is active
`PENDING`| User is pending claim completion
`INACTIVE`| User is inactive
