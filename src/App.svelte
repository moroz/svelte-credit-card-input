<script lang="ts">
  import CardNumberField from "./lib/CardNumberField.svelte";
  import ExpirationDateField from "./lib/ExpirationDateField.svelte";
  import InputField from "./lib/InputField.svelte";
  import CardVisual from "./lib/CardVisual/CardVisual.svelte";

  let creditCardMask = "0000 0000 0000 0000";

  let formData = {
    creditCardNo: "",
    validThru: "",
    cardholderName: "",
    securityCode: ""
  };
</script>

<div class="layout">
  <CardVisual {formData} {creditCardMask} />
  <form class="form">
    <InputField
      name="cardholderName"
      bind:value={formData.cardholderName}
      label="Cardholder name"
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
        bind:value={formData.validThru}
        label="Security code"
      />
    </div>
  </form>
</div>
