<script lang="ts">
  export let placeholder = "0000 0000 0000 0000";
  export let id: string;

  let value = "";
  let maskedValue = "";

  function onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
    value = target.value.replace(/[^\d]/g, "");
    maskedValue = value.match(/.{1,4}/g).join(" ");
  }

  function maskText(value: string, placeholder: string) {
    if (maskedValue.length > placeholder.length) return "";
    return (
      " ".repeat(maskedValue.length) + placeholder.substring(maskedValue.length)
    );
  }
</script>

<div class="masked-input-field">
  <label class="label" for={id}>Credit card number</label>
  <div class="masked-input-group">
    <input name={id} hidden {value} />
    <input
      type="text"
      value={maskedValue}
      {placeholder}
      maxlength={placeholder.length}
      {id}
      on:change={onChange}
      on:input={onChange}
    />
    <span class="mask">{maskText(value, placeholder)}</span>
  </div>
</div>

<style lang="sass">
  @import "./css/_variables.sass"

  .label
    display: block

  .masked-input-group
    position: relative
    background: white
    border: 1px solid
    display: inline-flex

    .mask, input
      height: 2.5rem
      line-height: 2.5rem
      font-size: 1.2rem
      border: 0
      outline: 0
      padding: 0 .5rem
      font-weight: bold
      font-family: $font-monospace

    .mask
      position: absolute
      top: 0
      left: 0
      bottom: 0
      right: 0
      pointer-events: none
      white-space: pre
      color: #aaa

    input
      background: transparent
      width: min-content

      &::placeholder
        color: #aaa

      &:placeholder-shown + .mask
        opacity: 0
</style>
