const url = "https://northwind.netcore.io/orders.json"

fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.results.reduce((a, b) => a.orderDetails.length > b.orderDetails.length ? a : b).order.customerId)
    })