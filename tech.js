const path = require('path')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const { graphqlHTTP } = require('express-graphql');
const { loadFilesSync } = require('@graphql-tools/load-files')
const { makeExecutableSchema } = require('@graphql-tools/schema')

const typeArray = loadFilesSync(path.join(__dirname, '**/*.graphql'))
const resoleversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'))

const schema = makeExecutableSchema({
    typeDefs: typeArray,
    resolvers: resoleversArray,
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}))

app.listen(PORT, () => {
    console.log(`server runing on port ${PORT}`)
})

