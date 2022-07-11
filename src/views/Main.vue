<template>
  <p>MAIN VIEW start</p>
  <div>
    <!--router-view name="navigation-panel"></router-view-->
    <router-view name="content-panel"></router-view>
  </div>
  <p>MAIN VIEW end</p>
</template>

<script lang="ts">

import { defineComponent, } from "vue";


export default
  defineComponent({

  });

</script>
