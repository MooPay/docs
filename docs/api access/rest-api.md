---
sidebar_label: Rest API
sidebar_position: 2
---

# Rest API

All requests to the MooPay server require you to sign the request.
Only __POST__ requests are handled.


## Signing

For all api requests, the following headers should be sent with the request:

__MOO-KEY__: Your Account key

__MOO-TS__: Number of milliseconds since Unix epoch

__MOO-SIGN__: SHA256 HMAC of the following three strings, using your API secret

1. Request timestamp (e.g. 1635713520060)
2. Request path, including leading slash without any query parameters but not including the hostname (e.g. /v1/validate-payment)
3. Request body (JSON-encoded)

```js title='Example Node js signature calculation'
  const crypto = require('crypto');

  const postBody = {};
  postBody['transaction'] = '0x01c483d2deb658e7cd6beea753aad0e176ea508b517b01eab9b45bf8e03b3a15';
  const postBodyJson = JSON.stringify(postBody);

  // MOO-TS
  const ts = new Date().getTime();
  const requestPath = '/v1/validate-payment';

  //creating hmac object 
  const hmac = crypto.createHmac('sha256', 'YOUR_API_SECRET_HERE');

  const toSign = `${ts}${requestPath}${postBodyJson}`;
  // MOO-SIGN
  const signature = hmac.update(toSign).digest('hex');

```

## API

### /v1/validate-payment

Validate transaction details

```js title='request body'
{"transaction": "0x01c483d2deb658e7cd6beea753aad0e176ea508b517b01eab9b45bf8e03b3a15"}
```

```js title='response structure if valid transaction hash(formatted JSON response)'
{
    "success": true,
    "data": {
        "payer": {
            "name": "payer_name",
            "email": "payer_email_address",
            "wallet": "payer_account_address"
        },
        "product": {
            "code": "MooPay_Product_Code",
            "chain": chain_id, // number
            "amount": "paid_amount",
            "name": "product_name"
        },
        "transaction": "0x01c483d2deb658e7cd6beea753aad0e176ea508b517b01eab9b45bf8e03b3a15",
        "status": "validated", // *paid* if transaction is yet to be validated
        "paidAt": 1635645700000, // transaction paid at
        "validatedAt": 1635645710000 // transaction validated at
    }
}
```