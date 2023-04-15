const url = "https://northwind.netcore.io/orders.json"



fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let max = { quantity: 0 }
        data.results.forEach((order) => {
            const a = order.orderDetails.sort((orderDetail1, orderDetail2) => orderDetail2.quantity - orderDetail1.quantity)[0]
            if (a.quantity > max.quantity) {
                max = a
            }
        })
        console.log(max)
    })