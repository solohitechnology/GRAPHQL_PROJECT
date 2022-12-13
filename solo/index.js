 const express = require('express');
const { buildSchema } = require('graphql')
const { graphqlHTTP } = require('express-graphql');
const app = express()
const PORT = process.env.PORT || 2000

const schema = buildSchema(`

type Query{
    description:String
    price:Float
}
`);

const root ={
    description:'red shoe',
    price:20.890
}

app.use('/graphql',graphqlHTTP({
    schema: schema,
    rootValue:root,
    graphiql:true
    
}))

app.listen(PORT,() =>{
    console.log(`server running on ${PORT}`)
})