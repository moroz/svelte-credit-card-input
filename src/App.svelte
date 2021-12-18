<script lang="ts">
  import CardNumberField from "./lib/CardNumberField.svelte";
  import ExpirationDateField from "./lib/ExpirationDateField.svelte";

  let formData = {
    creditCardNo: "",
    validThru: ""
  };
</script>

<div class="layout">
  <form>
    <CardNumberField id="credit_card_no" bind:value={formData.creditCardNo} />
    <ExpirationDateField id="valid_thru" bind:value={formData.validThru} />
    <p>{formData.creditCardNo}</p>
  </form>
</div>
