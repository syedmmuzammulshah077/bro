import express from 'express'
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  console.log(" hi broo my name Muzammil"+ req.ip);
  res.send('Hello hi broo my name Muzammil:'+ req.ip)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
