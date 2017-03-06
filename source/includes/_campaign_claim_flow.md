# Campaign Claim Flow 

When you launch a fund through the [fund.launch](#fund-launch) endpoint, an email is sent to the user's email address with a special link allowing them to claim their campaign.

For security reasons, currently signed-in users will be signed out and asked to click the link in the claim email again to proceed.

The steps for claiming a campaign are slightly different based on whether the user is an existing GoFundMe user or a new user created through the API.

## New Users

Upon clicking the link sent to them, a new user will be directed to a page where they will be asked to choose a password for their account. After doing so, they will be asked to sign in with their email address and the password they just created. The campaign approval process will then begin, where the user can approve or adjust the various details of their campaign. Once the campaign is live the user will be encouraged to share it with their contacts. At this point the campaign will be ready to receive donations.

## Existing Users

Existing users can use the email link or sign in as normal, after which their dashboard will appear. A campaign created for them through the API will appear here amongst any "regular" campaigns; clicking it will start the approval process as above.

## Claiming on Mobile Devices

Claiming an account/campaign works similarly for users on mobile devices, albeit with a simpler, more mobile-friendly interface.
