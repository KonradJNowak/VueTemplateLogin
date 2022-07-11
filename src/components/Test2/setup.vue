<template>
  <div class="Testowy 2">
    <h1>A tu drugi komenent testowy</h1>
  </div>
</template>

<script lang ="ts">
import { defineComponent, ref } from "vue";

export default
  defineComponent({
    name: "Test2",
    setup() {
      const r = ref(99);
      return { r };
    }
  });
</script>
