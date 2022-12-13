const Order = [
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

   function getAllOrders(){
    return Order
   }


   module.exports={
    getAllOrders
   }