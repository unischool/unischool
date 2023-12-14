<template lang="pug">
q-page.flex.flex-start-center(padding)
  q-btn(color="positive", size="xl", icon="account_circle", @click="$emit('try-login')") Login
</template>

<script>
export default {
  // name: 'PageName',
};
</script>
