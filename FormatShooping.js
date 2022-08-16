const ShoopingCart = {
    user: {
        id: 1,
        firstName: "Julio",
        lastName: "Nunes"
    },
    items: [
        {
            product: {
                id: 1,
                name: "Banana"
            },
            quantity: 1
        },
        {
            product: {
                id: 2,
                name: "Maça"
            },
            quantity: 10
        }
    ]
}

function FormatShoopingCart(ShoopingCart){
    const result = {
        user: {
            id: ShoopingCart.user.id,
            name: `${ShoopingCart.user.firstName} ${ShoopingCart.user.lastName} `
        },
        
    }
    result.items = ShoopingCart.items.map((item) =>{
        return {
            ...item,
            product: {id: item.product.id},
        };

    })


    return result;
}


console.log(FormatShoopingCart(ShoopingCart));
console.log('----');
console.log('----');
console.log(ShoopingCart);