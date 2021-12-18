<script lang="ts">
  import { maskValueToPlaceholder } from "../helpers/maskHelpers";

  export let id: string;
  export let value = "";
  let placeholder = "MM/YY";
  let input;
  let maskedValue = "";

  function onChange(e: Event) {
    const target = e.target as HTMLInputElement;
    value = target.value.replace(/[^\d]/g, "");
    if (!value.match(/^[01]/)) {
      value = "";
    }
    if (
      value.length >= 2 &&
      value.charAt(0) === "1" &&
      Number(value.substring(0, 2)) > 12
    ) {
      value = "1";
    }
    input.value = maskValueToPlaceholder(value, placeholder);
    maskedValue = maskValueToPlaceholder(value, placeholder);
  }
</script>

<div class="masked-input-field">
  <label class="label" for={id}>Valid thru</label>
  <div class="masked-input-group">
    <input name={id} hidden {value} />
    <input
      type="text"
      {id}
      inputmode="numeric"
      pattern="^(0[1-9]|1[12])([23]\d+)$"
      maxlength={placeholder.length}
      bind:this={input}
      on:input={onChange}
      on:change={onChange}
      value={maskedValue}
    />
    <span class="mask"
      ><span class="transparent">{maskedValue}</span>{placeholder.substring(
        maskedValue.length
      )}</span
    >
  </div>
</div>
