const ordermodels = require('./order.model')

module.exports={
    Query:{
        Orders : () => {
            return ordermodels.getAllOrders();
        }
    }
}