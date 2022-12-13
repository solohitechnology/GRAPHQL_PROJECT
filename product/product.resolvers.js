const productModel = require('./product.model')

module.exports={
    Query:{
        products : () => {
            return productModel.getAllproduct();
        },
        productsByprice: (_, args) =>{
         return productModel.getproductByPrice(args.min, args.max)
        },
        product: (_, args) => {
            return productModel.getproductById(args.id)
        }
    },
   Mutation: {
    addNewProduct: (_, args) => {
        return productModel.addNewProduct(args.id, args.description, args.price);
    },
    addNewProductReview: (_, args) => {
        return productModel.addNewProductReview(args.id, args.rating, args.comment);
    }
}

}