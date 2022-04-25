---
sidebar_label: Create Order
sidebar_position: 3
---

# Create Order

### Basic Info

<table >
<tbody>
<tr><td>Base Url</td><td><strong>https://payments.testnet.moopay.live</strong></td></tr>
<tr><td>End point</td><td><strong>/v2/order</strong></td></tr>
<tr><td>Request method</td><td><strong>POST</strong></td></tr>
</tbody>
</table>


### Request Body
```
{
    "prefill": { 
        "name": "Annie Walker",
        "phone": "9901428764",
        "email": "kamal.nitj87@gmail.com"
    },
    "amount": ".05", 
    "fiat": "USD",
    "label": "Pay now",
    "merchant": {
        "desc": "Description for the product",
        "extra": "something here",
        "orderId": "some_order_id_here"
    }
}
```
Request body options
1. __prefill__ - prefill the payment form with information if available, allowed fields are
   
    a. __name__ 

    b. __phone__
    
    c. __email__
2. __fiat__ - Currently only fiat value supported is __USD__, if you specify __amount__ in token, then this parameter is not required.
3. __amount__ - Amount to be paid by end user, if __fiat__ is specified, end user pays equivalent tokens available for the merchants, else in the __token__ specified.
4. __token__ - e.g. __BNB__ all available chains where BNB or BNB contracts are available for merchant becomes available as payment options.
5. __preferredCurrency__ - specify token which should be first option for payment for user. Other tokens if possible'll still be available for payment.
6. __mandatoryCurrency__ - Ask user to make payment only in the mandatory currency, no other currency options are available.
7. __preferredChain__ - Preferred chain becomes default selected chain for payment
8. __mandatoryChain__ - Mandatory chain is the only chain available during payment.
9.  __label__ - Label to show on the payment button, defaults to __Pay now__
10. __merchant__ - Merchant fields, specified fields are returned during the webhook calls, You may use it to cross reference payment with your local order
    
     a. __desc__ - Description you want to show for the order

     b. __extra__ - String values, could be anything, generally a JSON encoded string that you can use later with webhook call

     c. __orderId__ - *Mandatory* field, order id mapped to your system.
11. __product__ - If you have created any product on moopay merchant dashboard, that you can use that here to fill in product details. Please note, if *amount* is specified, it ll override price for the product, else the product price ll be used.
    

### Response Sample
```
{
    "orderId": "6239b4e6dee99a8812d203c9",
    "createdAt": 1647949030637
}
```

Use the *orderId* returned from API call in the UI to initiate Payment workflow.
