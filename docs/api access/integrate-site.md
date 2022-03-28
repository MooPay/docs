---
sidebar_label: Integrate on your site
sidebar_position: 4
---

# Integrate on site

```
<script src="https://pay.testnet.moopay.live/public/embed.js"></script>
<script>
  document.querySelector('#pay_now').addEventListener('click', () => {
    const mp = new MooPay({
      order: '6240e06144eb7ecef063bc9a',
      mode: 'headless',
      environment: 'testnet', // testnet , production
    });
    mp.subscribe('payment-init', (ev) => {
      console.log('Got init')
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