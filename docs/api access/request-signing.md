---
sidebar_label: Request Signing
sidebar_position: 2
---

# Request Signing

All requests to the MooPay server require you to sign the request.
Only __POST__ requests are handled.

API Keys are available under `Settings > Accounts > API Keys` section of your dashboard

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

  // SORT postBody by keys in increasing order
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