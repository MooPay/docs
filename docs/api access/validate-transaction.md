---
sidebar_label: Validate Transaction
sidebar_position: 4
---

# Transaction validation
You can validate the transaction information from our server, by passing the transaction hash in the request body

### Basic Info
<table >
<tbody>
<tr><td>Base Url</td><td><strong>https://api.testnet.moopay.live</strong></td></tr>
<tr><td>End point</td><td><strong>/api/v2/validate-payment</strong></td></tr>
<tr><td>Request method</td><td><strong>POST</strong></td></tr>
</tbody>
</table>

### Request body
```
{"transaction": "0x01c483d2deb658e7cd6beea753aad0e176ea508b517b01eab9b45bf8e03b3a15"}
```

### Response body
```
{
    "success": true,
    "data": {
        "payer": {
            "name": "payer_name",
            "email": "payer_email_address",
            "wallet": "payer_account_address"
        },
        "product": { // if a product was used to create the order
            "code": "MooPay_Product_Code",
            "chain": chain_id, // number
            "amount": "paid_amount",
            "name": "product_name"
        },
        "order": "order_id_moopay*,
        "transaction": "0x01c483d2deb658e7cd6beea753aad0e176ea508b517b01eab9b45bf8e03b3a15",
        "status": "validated", // *paid* if transaction is yet to be validated, or *failed*
        "paidAt": 1635645700000, // transaction paid at
        "validatedAt": 1635645710000 // transaction validated at
        "merchantExtra": "merchant_field data in Order create*,
        "payment": {
            fiat: "",
            rate: "",
            token: "",
            address: "",
        }
    }
}
```