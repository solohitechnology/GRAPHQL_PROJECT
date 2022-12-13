const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000;
const { ApolloServer } = require('apollo-server-Express') 

const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema')

const typeArray = loadFilesSync( path.join(__dirname, "**/*.graphql"))
const resoleversArray = loadFilesSync( path.join(__dirname, "**/*.resolvers.js"));

async function startApolloserver(){
    const app = express()
    
const schema = makeExecutableSchema({
    typeDefs: typeArray,
    resolvers: resoleversArray
});

const server  = new ApolloServer({
    schema
});
await server.start()
server.applyMiddleware({ app, path: '/graphql'});

app.listen(PORT, () => console.log(`graphqlis serving on port ${PORT}`)) 
}

startApolloserver();
