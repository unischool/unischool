<template lang="pug">
div
  div(style="font-size: 30vh") 404
  .text-h2(style="opacity:.4") Oops. Nothing here...
  q-btn.q-mt-xl(color="white", text-color="blue", unelevated, to="/", label="Go Home", no-caps)
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorNotFound",
});
</script>
