

const express = require('express');
const path = require('path')
const PORT = process.env.PORT || 7000
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');


const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'))
const resoleversArray = loadFilesSync(path.join(__dirname,'**/*.resolovers.js'))
// const schema = (`


// type Query{
//     products:[product]
//     Orders:[Order]
//   productByprice(min:Float!, max:Float!):[product]
// }

//   type product{
//     id: ID!
//     description:String!
//     review:[Review]
//     price:Float!
//   }

//   type Review{
//     rating:Int!
//     comment:String
//   }
// type Order{
//     date:String!
//     subtotal:Float
//     items:[OrderItem]
// }

// type OrderItem{
//     product:product
//     quantity:Int!
// }


// `)
// const schema = makeExecutableSchema({
//     typeDefs : typesArray
// })


// const product = [
//     {
//         id:'redshoe',
//         description:'red shoe',
//         price: 30.10
//     },
//     {
//         id:'bluejean',
//         description:' blue jeans',
//         price: 40.5
    
//     },
//    ]

   
//    const Order= [
//     {
//         date: '2005-05-05',
//         subtotal: 98.04,
//         items:[
//             {
//                 product:{
//                     id:'redshoe',
//                     description:'Old red shoe',
//                     price:45.11
//                 },
//                 quantity:3
//             }
//         ]
//     }
//    ]
 
   function productByPrice(min,max){
    return product.filter((product) => {
        return product.price >= min && product.price <= max
    })
}


//    const root = { 
//     productbyPrice:productByPrice,
//     products:require('./product/product.model'),
//     Orders:require('./orders/order.model'),

// }


const app = express();
app.use('/graphql', graphqlHTTP({
    schema:typesArray,
    rootValue:resoleversArray,
    graphiql:true
}))

app.listen(PORT, () =>{
    console.log(`server runing on port ${PORT}`)
})






