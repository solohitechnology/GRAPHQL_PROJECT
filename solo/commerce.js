

const express = require('express');
const PORT = process.env.PORT || 3000
const { buildSchema } = require('graphql')
const { graphqlHTTP } = require('express-graphql');

const app = express();

const schema = buildSchema(`

type Query{
    products:[product]
    Orders:[Order]
  productByprice(min:Float!, max:Float!):[product]
}

  type product{
    id: ID!
    description:String!
    review:[Review]
    price:Float!
  }

  type Review{
    rating:Int!
    comment:String
  }
type Order{
    date:String!
    subtotal:Float
    items:[OrderItem]
}

type OrderItem{
    product:product
    quantity:Int!
}


`)

const product = [
    {
        id:'redshoe',
        description:'red shoe',
        price: 30.10
    },
    {
        id:'bluejean',
        description:' blue jeans',
        price: 40.5
    
    },
   ]

   
   const Order= [
    {
        date: '2005-05-05',
        subtotal: 98.04,
        items:[
            {
                product:{
                    id:'redshoe',
                    description:'Old red shoe',
                    price:45.11
                },
                quantity:3
            }
        ]
    }
   ]

   function productByPrice(min,max){
    return product.filter((product) => {
        return product.price >= min && product.price <= max
    })
}


   const root = { 
    productByPrice:productByPrice,
    products:product,
    Orders:Order

}



app.use('/graphql', graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true
}))

app.listen(PORT, () =>{
    console.log(`server runing on port ${PORT}`)
})






