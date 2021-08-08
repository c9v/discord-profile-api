const express = require('express')
const app = express()
const requestify = require('requestify')
const fs = require('fs')
let cached = false

app.get('/', (req, res) => {
    res.send('hi')
})

app.get('/:id', (req, res) => {
  // this is so people can't make random requests and it's only for getting your own profile information.
    if (req.params.id !== "YOUR_USER_ID") return res.send(`request blocked`)
 
    if (cached == true) {
        let data = fs.readFileSync('data.txt');
        data = JSON.parse(data)

        return res.send(data)
    }

    requestify.get(`https://discord.com/api/v9/users/${req.params.id}/profile?with_mutual_guilds=false`, {
        headers: {
            'Authorization' : 'YOUR_ALT_TOKEN_HERE' // you need an alt with your account added as a friend or have a mutual server and use that token here
        },
    })
  .then(function(response) {
      let jsp = response.getBody()

      let newRes = `{"id":"${jsp["user"].id}","username":"${jsp["user"].username}", "tag":"${jsp["user"].username}#${jsp["user"].discriminator}", "bio": "${jsp["user"].bio}", "avatar": "https://cdn.discordapp.com/avatars/${jsp["user"].id}/${jsp["user"].avatar}.png?size=2048", "banner": "https://cdn.discordapp.com/avatars/${jsp["user"].id}/${jsp["user"].banner}.png?size=2048"}`

      res.send(JSON.parse(newRes));

      fs.writeFile('data.txt', newRes, function (err) {
        if (err) throw err;
      });

      cached = true;

      setTimeout(() => {
        cached = false;
      }, 900000)
  })
  .catch(function (err) { console.log(err) })
})

app.listen(3000, () => {
  console.log(`Listening at http://localhost:3000`)
})
