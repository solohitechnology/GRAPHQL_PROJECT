const product = [
    {
        id: 'redshoe',
        description: 'red shoe',
        price: 30.10,
        reviews: [],
    },
    {
        id: 'bluejean',
        description: ' blue jeans',
        price: 2.5,
        reviews: [],

    },
]

function getAllproduct() {
    return product
}


function getproductByPrice(min, max) {
    return product.filter((product) => {
        return product.price <= min && product.price >= max
    })
}
function getproductById(id) {
    return product.find((product) => {
        return product.id === id;
    })
}

function addNewProduct(id, description, price) {
    const newProduct = {
        id,
        description,
        price,
        reviews: []
    }

    product.push(newProduct);
    return newProduct
}

function addNewProductReview(id, rating, comment) {
    const matchProduct = getproductById(id);

    if (matchProduct) {
        const newProductReview = {
            rating,
            comment
        }

        matchProduct.reviews.push(newProductReview);

        return newProductReview;
    }

}


module.exports = {
    getAllproduct,
    getproductByPrice,
    getproductById,
    addNewProduct,
    addNewProductReview,
}


