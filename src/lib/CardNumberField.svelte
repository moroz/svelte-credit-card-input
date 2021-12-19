<script lang="ts">
  import { maskValueToPlaceholder } from "../helpers/maskHelpers";

  export let mask = "0000 0000 0000 0000";
  export let id: string;

  export let value = "";
  let placeholder = mask;
  let input;

  function onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    value = target.value.replace(/[^\d]/g, "");
    input.value = maskValueToPlaceholder(value, placeholder);
  }
</script>

<div class="masked-input-field">
  <input name={id} hidden {value} />
  <label class="label" for={id}>Card number</label>
  <div class="masked-input-group">
    <input
      type="text"
      maxlength={placeholder.length}
      {id}
      inputmode="numeric"
      pattern="[\d\s]+"
      bind:this={input}
      on:change={onChange}
      on:input={onChange}
    />
    <span class="mask"
      ><span class="transparent">{input?.value}</span>{placeholder.substring(
        input?.value.length
      )}</span
    >
  </div>
</div>
