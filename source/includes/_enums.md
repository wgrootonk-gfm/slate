# Enumerations 

The Partner API various enumerations that can be used to describe specific resource actions and/or states.


### Fund Categorization
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

### Resource Status
Several resources can expect to have a simple return property called `status`. Generally this field returns whether a resource is discoverable.

Value|Description
---|---|
`ACTIVE`| Resource is discoverable
`INACTIVE`| Resource is being reviewed or is simply not discoverable
