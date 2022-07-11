<template>

  <p>APP VIEW start: {{ authenticationRequired }}</p>

  <router-view></router-view>
  <router-view name="navigation"></router-view>

  <p>APP VIEW end</p>
</template>

<script lang="ts">
import Navigation from '@/components/Navigation/setup.vue'
import { createApp, ref, defineComponent, watch, Ref } from 'vue'
import router from "@/router/router";
import { RouteLocationNormalized } from 'vue-router';


export default
  defineComponent({
    name: "App",
    setup() {
      let authenticationRequired = ref(router.currentRoute.value.meta ? true : router.currentRoute.value.meta);

      watch(router.currentRoute, (currentValue) => {
        console.log(isAuthenticationRequired(currentValue));
      })
      return { authenticationRequired }
    },
    components: {
    }
  });

function isAuthenticationRequired(metaRef: RouteLocationNormalized): boolean {
  const key = "authenticationRequired";
  if (!metaRef ||
    !metaRef.meta ||
    Object.prototype.hasOwnProperty.call(metaRef.meta, key)) {
    return true;
  }
  return metaRef.meta[key] as boolean;
}
</script>