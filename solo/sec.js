const express = require('express');
const PORT = process.env.PORT || 6000;
const { buildSchema } = require('graphql')
const {graphqlHTTP} = require('express-graphql')


const schema = buildSchema(`
type Query{
    massage:String!
}

`)

const root = {
    massage: () => 'solohitechology'
}

const app = express()
app.use('/graphql', graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true
}))

app.listen(PORT,()=> console.log(`graphql qery is running o localhost:${PORT}`))