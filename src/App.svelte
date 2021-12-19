<script lang="ts">
  import CardNumberField from "./lib/CardNumberField.svelte";
  import ExpirationDateField from "./lib/ExpirationDateField.svelte";
  import InputField from "./lib/InputField.svelte";
  import CardVisual from "./lib/CardVisual/CardVisual.svelte";
  import type { PaymentFormData } from "./interfaces/formData";

  let creditCardMask = "0000 0000 0000 0000";

  let formData: PaymentFormData = {
    creditCardNo: "",
    validThru: "",
    cardholderName: "",
    securityCode: ""
  };
</script>

<div class="layout">
  <h1>Payment information</h1>
  <main>
    <CardVisual {formData} {creditCardMask} />
    <form class="form">
      <InputField
        name="cardholderName"
        bind:value={formData.cardholderName}
        label="Name on card"
      />
      <CardNumberField
        id="creditCardNo"
        bind:value={formData.creditCardNo}
        mask={creditCardMask}
      />
      <div class="columns">
        <ExpirationDateField id="validThru" bind:value={formData.validThru} />
        <InputField
          name="securityCode"
          bind:value={formData.securityCode}
          label="Security code"
        />
      </div>
    </form>
  </main>
</div>
