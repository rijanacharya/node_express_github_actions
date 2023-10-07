var express = require('express')

var app = express()

const SERVER_PORT = 3000
const SERVER_HOST = "localhost"

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


//http://localhost:3000/
app.get('/', function (req, res) {
  const responseHtml = `
  <h2><a href="https://c0871943-node-express-github-actions.azurewebsites.net//name">Go to name page</a></h2>
  <h2><a href="https://c0871943-node-express-github-actions.azurewebsites.net//admin">Go to admin page</a></h2>
  <h2><a href="https://c0871943-node-express-github-actions.azurewebsites.net//user/100">Go to user ID</a></h2>
  <h2><a href="https://github.com/rijanacharya/node_express_github_actions">Go to my repo page</a></h2>
`;
  res.send(responseHtml);
})

app.get('/name', (req, res) => (
  res.send("<h1> C0871943 Rijan Acharya</h1>")
))

//http://localhost:3000/profile
app.post('/profile', (req, res) => {
  console.log(req.body)
  res.json(req.body)
})

//http://localhost:3000/admin
app.get('/admin', (req, res) => {
  res.send('Admin Homepage')
})

//http://localhost:3000/user/100
app.get("/user/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}`);
}
)

//http://localhost:3000/valueofday/1980-01-24
app.get("/valueofday/:year(\\d{4})-:month(\\d{2})-:day(\\d{2})", (req, res) => {
  console.log(req.params)
  res.send(req.params)
});

app.listen(process.env.PORT || SERVER_PORT, () => {
  console.log(`Server running at http://${SERVER_HOST}:${SERVER_PORT}/`);
})
