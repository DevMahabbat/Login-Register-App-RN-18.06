const url = "https://northwind.netcore.io/orders.json"



fetch(url)
    .then((res) => res.json())
    .then((data) => {
        const arr = data.results.map((order) => {
            const shipCountry = order.order.shipCountry
            const totalPrice = order.orderDetails.reduce((a, b) => a + b.unitPrice * b.quantity, 0)
            const quantity = order.orderDetails.reduce((a, b) => a + b.quantity, 0)
            return { shipCountry, totalPrice, quantity }
        })
        console.log(arr)
    })