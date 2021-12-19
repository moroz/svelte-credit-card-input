<script lang="ts">
  export let value = "";
  export let label;
  export let name;
</script>

<div class="input-field">
  <label class="label" for={name}>{label}</label>
  <input {name} id={name} bind:value />
</div>
