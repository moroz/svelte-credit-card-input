<script lang="ts">
  import { maskValueToPlaceholder } from "../../helpers/maskHelpers";

  import ChipImage from "../../assets/chip.svg";

  export let formData: any;
  export let creditCardMask: string;

  const DEFAULT_CARD = "0123 4567 8910 1112";
</script>

<div class="card-visual">
  <img src={ChipImage} class="chip" />
  <span class="cardholder-name"
    >{formData.creditCardNo
      ? maskValueToPlaceholder(formData.creditCardNo, creditCardMask)
      : DEFAULT_CARD}</span
  >
</div>

<style lang="sass">
  @import "../../css/_variables"

  .card-visual
    --background: #666

    width: $card-width
    background: var(--background)
    box-shadow: 0 0 15px rgba(0,0,0,.2)
    height: $card-width * $card-ratio
    border-radius: $card-radius
    position: relative
    font-family: $font-monospace
    text-transform: uppercase
    color: white

  .chip
    width: $chip-width
    position: absolute
    top: $chip-y
    left: $chip-x

  .cardholder-name
    position: absolute
    top: $cardholder-y
    left: $cardholder-x
    font-size: relative-to-card(6)

</style>
