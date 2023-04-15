const url = "https://northwind.netcore.io/orders.json"



fetch(url)
    .then((res) => res.json())
    .then((data) => {
        data.results.forEach((order) => {
            console.log(
                order.orderDetails.reduce((a, b) => a + b.unitPrice * b.quantity, 0)
            )
        })
    })