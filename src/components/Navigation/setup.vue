<template src="./template.html"></template>
<style src="./style.scss" lang="scss"></style>

<script lang ="ts">
import { defineComponent, ref, Ref } from "vue";

export default
  defineComponent({
    name: "Navigation",
    setup() {
      const mobile = ref(false);
      const mobileNav = ref(false);
      const windowWidth = ref(null) as unknown as Ref<number>;
      const scrollNav = ref(false);

      function toggleMobileNav() {
        mobileNav.value = !mobileNav.value;
        console.log('Jest click ' + mobileNav.value);
      }

      function checkWidth() {
        windowWidth.value = window.innerWidth;
        if (windowWidth.value <= 750) {
          mobile.value = true;
        } else {
          mobile.value = false;
          mobileNav.value = false;
        }
      }

      function updateScroll() {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 50) {
          scrollNav.value = true;
          return;
        }
        scrollNav.value = false;
      }

      window.addEventListener('resize', checkWidth);
      window.addEventListener('scroll', updateScroll);

      return {
        mobile,
        mobileNav,
        toggleMobileNav,
        scrollNav,
        updateScroll
      }
    }
  });
</script>
