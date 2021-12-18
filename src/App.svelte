<script lang="ts">
  import CardNumberField from "./lib/CardNumberField.svelte";
  import ExpirationDateField from "./lib/ExpirationDateField.svelte";
  import InputField from "./lib/InputField.svelte";

  let formData = {
    creditCardNo: "",
    validThru: "",
    cardholderName: "",
    securityCode: ""
  };
</script>

<div class="layout">
  <form class="form">
    <InputField
      name="cardholderName"
      bind:value={formData.cardholderName}
      label="Cardholder name"
    />
    <CardNumberField id="creditCardNo" bind:value={formData.creditCardNo} />
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
