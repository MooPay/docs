---
sidebar_label: Integrate into your site
sidebar_position: 3
---

# Integration details

## Embed Instructions

Copy the embed code shown in the *View Instructions* page for the product and copy it into the HTML code of your site.

![Copy Instructions](/setup/screen-copy-embed.png)

## Preview

You will be able to see the Payment button options like below once you serve your updated HTML code at your site.

:::caution

You need to verify your email address before you can accept payments, button will remain in disable state if email address is not verified.

:::
![Copy Instructions](/setup/screen-rendered-button.png)

## Payment notification

You can listen to payment success notification on your page in your Javascript code by listening to the dispatched Event.

```
document.body.addEventListener('MooPay.Payment.Success', (event) => {
  // code : Product code
  // hash : Transaction hash that you can validate onchain or with *moopay api*
  // frame : IFrame id for the button
  const {code, hash, frame} = event;
  // rest of the code ...
});
```