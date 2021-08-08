# discord-profile-api
An API for websites to automatically update your Discord information.

# Installing
This API uses the npm packages express, requestify, and fs.

After installing the required packages you need to edit the index.js file. 
The first edit you need to make is on line 13 where it says "YOUR_USER_ID" you need to put that as your ID.

The second edit you need to make is on line 24 where it says "YOUR_ALT_TOKEN_HERE" put a token of an ALT account here that has you friended.

The third (optional) edit is to change the port on line 47 where it says 3000 to 8080 so you don't have to specify the port in the URL.

After getting the packages installed and editing index.js you need to host the API somewhere.

When you have the API hosted you can then use it like this: apiurl.com/YOUR_ID and it'll return json information about your profile.

Notice: the info updates every 15 minutes to avoid API spam!

# What profile information does it return?
When you use this API it'll get you your profiles id, username, tag, bio, avatar url, and banner url.

Discord's API does return more information than that, if you need more you'll have to edit the code to your needs.
