<script lang="ts">
  import { maskValueToPlaceholder } from "../helpers/maskHelpers";

  export let initialPlaceholder = "0000 0000 0000 0000";
  export let id: string;

  let placeholder = initialPlaceholder;
  let value = "";
  let maskedValue = "";

  function onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    value = target.value.replace(/[^\d]/g, "");
    maskedValue = maskValueToPlaceholder(value, placeholder);
    if (!value) placeholder = initialPlaceholder;
  }
</script>

<div class="masked-input-field">
  <label class="label" for={id}>Credit card number</label>
  <div class="masked-input-group">
    <input name={id} hidden {value} />
    <input
      type="text"
      value={maskedValue}
      maxlength={placeholder.length}
      {id}
      on:change={onChange}
      on:input={onChange}
    />
    <span class="mask"
      ><span class="transparent">{maskedValue}</span>{placeholder.substring(
        maskedValue.length
      )}</span
    >
  </div>
</div>

<style lang="sass">
  @import "../css/_variables.sass"

  .label
    display: block

  .masked-input-group
    position: relative
    background: white
    display: inline-flex
    border: 1px solid black
    border-radius: 3px

    .mask, input
      height: 2.5rem
      line-height: 2.5rem
      font-size: 1.2rem
      padding: 0 .5rem
      font-weight: bold
      font-family: $font-monospace
      border-radius: 3px
      border: 0

    .mask
      position: absolute
      top: 0
      left: 0
      bottom: 0
      right: 0
      pointer-events: none
      white-space: pre
      color: #aaa

    .transparent
      opacity: 0

    input
      background: transparent
      width: min-content
</style>
