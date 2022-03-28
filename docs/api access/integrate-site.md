---
sidebar_label: Integrate on your site
sidebar_position: 4
---

# Integrate on site

There are two ways to start accepting payments on the site.
1. Static items, that you can create on your account dashboard. You can follow the instructions provided in (Product Setup).
2. Dynamic items, products that are hosted at your website, and need only payment options on Moopay.


### Embed script
Include the script hosted at ```https://pay.testnet.moopay.live/public/embed.js``` to your site to enable payments on the site.

### Trigger Payment flow
Following example show how to trigger a payment flow on your website.

```
<button id="pay_now">Pay now</button>
<script>
  document.querySelector('#pay_now').addEventListener('click', async () => {
    const generateOrder = await fetch(YOUR_ORDER_CREATION_URL);
    const { orderId } = generateOrder.json();

    const mp = new MooPay({
      order: orderId,
      mode: 'headless',
      environment: 'testnet', // testnet , production
    });
    mp.subscribe('payment-init', (ev) => {
      console.log('Got payment init')
      console.log(ev);
    });
    mp.subscribe('payment-validated', (ev) => {
      console.log('Got ')
      console.log(ev);
    });
    mp.subscribe('payment-failed', (ev) => {
      console.log('Got failed')
      console.log(ev);
    });
    mp.subscribe('payment-processed', (ev) => {
      console.log('Got processed')
      console.log(ev);
    });
    mp.init();
  })
</script>  
```

### Events

1. __payment-init__ : User has submitted the credentials form.
2. __payment-processed__ : User has made the transaction using their wallet.
3. __payment-validated__ : Payment has been successfully validated on moopay servers.
4. __payment-failed__ : Payment validation has failed on moopay servers.

### Config options
Following configurations are available for **MooPay* global object injected via embed script.
1. __order__ : _String_ Dynamic order id created using **Create order** api call.
2. __product__ : _String_ If you want to initiate a payment against static product from Moopay dashboard.
3. __environment__ : _enum_ Possible values are 'production' | 'test'
4. __mode__ : _enum_ Possible values are
   
    a. __headless__ : You are responsible for initiating the payment flow by calling *init()* method on MooPay object

    b. __button__ : Embed script renders a dynamic button which ll trigger the payment flow once activated.
4. __showNotificatons__: _Boolean_ , If you want to show payment notifications to user according to your site theme, instead of embed script showing default styled notifications. You'll need to subscribe to various _events_ to show that. Defaults to *true*
5. __amount__ : _String_ If you want to change the price of static product from dashboard. Works in conjuction with *product* and *signature* values. Please note, you can only update *amount* value and not the associated chains/tokens using this.
6. __signature__ : _String_ Calcuate signature as described in *signing* docs to allow amount change. 