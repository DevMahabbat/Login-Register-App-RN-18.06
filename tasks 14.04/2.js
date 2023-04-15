const url = "https://northwind.netcore.io/orders.json"

fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.results.filter((order) => order.order.customerID === 'WARTH'))
    })