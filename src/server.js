const app = require('./app')
// Declaração que qual porta será utilizada
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})