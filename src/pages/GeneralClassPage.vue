<template lang="pug">
q-page.flex.flex-center(padding)
  .text-h6.red {{ $t(classItems && classItems[cid] && classItems[cid].title) }}
  p(v-html="$t(classItems && classItems[cid] && classItems[cid].description)", v-if="classItems && classItems[cid].useHTML")
  p(v-else) {{ $t(classItems && classItems[cid] && classItems[cid].description) }}

</template>

<script>
import { defineComponent, ref, watch } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "GeneralClassPage",
  props: ["classItems"],
  setup(pros) {
    const cid = ref("");
    const classData = ref(null); // Additional ref to store geted data
    const route = useRoute();

    const getClass = async (cid) => {
      return pros.classItems[cid];
    };

    // get the class information when params change
    watch(
      () => route.params.cid,
      async (newId) => {
        try {
          console.log("newId", newId);
          cid.value = newId;
          classData.value = await getClass(newId); // Use a separate ref for geted data
        } catch (error) {
          console.error("Error geting class data:", error);
        }
      }
    );

    return {
      cid,
      classData,
    };
  },
});
</script>

<style scoped>
.red {
  color: red;
}
</style>
