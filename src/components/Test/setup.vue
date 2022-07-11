
<template src="./template.html"></template>

<script lang ="ts">
import { defineComponent, ref } from "vue";

export default
  defineComponent({
    name: "Test",
    setup() {
      const r = ref(99);
      return { r };
    }
  });
</script>
