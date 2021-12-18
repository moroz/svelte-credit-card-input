<script lang="ts">
  import { maskValueToPlaceholder } from "../helpers/maskHelpers";

  export let initialPlaceholder = "0000 0000 0000 0000";
  export let id: string;

  export let value = "";
  let placeholder = initialPlaceholder;
  let input;

  // Explicitly refresh masked value; otherwise Svelte would not trigger
  // reactivity if we assign state to the same value again;
  function refresh() {
    input.value = maskValueToPlaceholder(value, placeholder);
  }

  function onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    value = target.value.replace(/[^\d]/g, "");
    refresh();
  }

  function onPaste(event: ClipboardEvent) {
    event.preventDefault();
    value = event.clipboardData.getData("text").replace(/[^\d]/g, "");
    refresh();
  }

  $: placeholder = initialPlaceholder;
</script>

<div class="masked-input-field">
  <label class="label" for={id}>Credit card number</label>
  <div class="masked-input-group">
    <input name={id} hidden {value} />
    <input
      type="text"
      maxlength={placeholder.length}
      {id}
      inputmode="numeric"
      pattern="[\d\s]+"
      bind:this={input}
      on:change={onChange}
      on:input={onChange}
      on:paste={onPaste}
    />
    <span class="mask"
      ><span class="transparent">{input?.value}</span>{placeholder.substring(
        input?.value.length
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
    border-radius: 3px

    .mask, input
      height: 2.5rem
      line-height: 2.5rem
      font-size: 1.2rem
      padding: 0 .5rem
      font-family: $font-monospace
      border-radius: 3px
      border: 0

    .mask
      position: absolute
      top: 0
      left: 1px
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
      border: 1px solid

  @media not all and (min-resolution: .001dpcm)
    @supports (-webkit-appearance: none)
      .mask
        left: 3px !important
</style>
