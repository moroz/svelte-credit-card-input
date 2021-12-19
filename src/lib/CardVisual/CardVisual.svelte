<script lang="ts">
  import {
    defaultValidThru,
    maskValueToPlaceholder
  } from "../../helpers/maskHelpers";

  import ChipImage from "../../assets/chip.svg";
  import type { PaymentFormData } from "src/interfaces/formData";

  export let formData: PaymentFormData;
  export let creditCardMask: string;

  const DEFAULT_CARD = "0123 4567 8910 1112";
  const VALID_THRU_PLACEHOLDER = defaultValidThru();
</script>

<div class="card-visual">
  <img src={ChipImage} class="chip" alt="" />
  <span class="card-no"
    >{formData.creditCardNo
      ? maskValueToPlaceholder(formData.creditCardNo, creditCardMask)
      : DEFAULT_CARD}</span
  >
  <span class="cardholder-name">
    {formData.cardholderName || "Cardholder Name"}
  </span>
  <span class="valid-thru">
    {maskValueToPlaceholder(formData.validThru, "MM/YY") ||
      VALID_THRU_PLACEHOLDER}
  </span>
</div>

<style lang="sass">
  @import "../../css/_variables"

  .card-visual
    --background: #262c3c

    width: $card-width
    background: var(--background)
    box-shadow: 0 0 15px rgba(0,0,0,.2)
    height: $card-width * $card-ratio
    border-radius: $card-radius
    position: relative
    font-family: $font-monospace
    text-transform: uppercase
    color: white

    border: 1px solid

  .chip, .card-no, .cardholder-name, .valid-thru
    position: absolute

  .chip
    width: $chip-width
    top: $chip-y
    left: $chip-x

  .card-no
    top: $cardholder-y
    left: $cardholder-x
    font-size: relative-to-card(6)

  .cardholder-name
    bottom: relative-to-card(6)
    left: $cardholder-x

  .valid-thru
    right: relative-to-card(8.5)
    bottom: relative-to-card(6)

  .cardholder-name, .valid-thru
    font-size: relative-to-card(4)
</style>
