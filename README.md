# discord-profile-api
An API for websites to automatically update your Discord information.

# Installing
This API uses the npm packages express, requestify, and fs.

After getting the packages installed you need to host the API somewhere.

When you have the API hosted you can then use it like this: apiurl.com/YOUR_ID and it'll return json information about your profile.

Notice: the info updates every 15 minutes to avoid API spam!

# What profile information does it return?
When you use this API it'll get you your profiles id, username, tag, bio, avatar url, and banner url.

Discord's API does return more information than that, if you need more you'll have to edit the code to your needs.
