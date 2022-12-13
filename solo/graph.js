const path = require('path')
const express = require('express');

const PORT = process.env.PORT || 4000; 
const { graphqlHTTP } = require('express-graphql');
const { loadFilesSync } = require('@graphql-tools/load-files')
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'))
const resoleversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));

const schema = makeExecutableSchema({
    typeDefs:typesArray,
    resolvers:resoleversArray
})

const app = express();

app.use('/graphql', graphqlHTTP({
    schema:schema,
    graphiql:true
}))

app.listen(PORT, () =>{
    console.log(`server runing on port ${PORT}`)
})