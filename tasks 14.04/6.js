const url = "https://northwind.netcore.io/orders.json"



fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let max = { discount: 0 }
        data.results.forEach((order) => {
            order.orderDetails.forEach((orderDetail) => {
                if (orderDetail.discount > max.discount) {
                    max = orderDetail
                }
            })
        })
        console.log(max)
    })