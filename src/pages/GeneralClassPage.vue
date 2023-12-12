<template>
  <q-page class="flex flex-center" padding>
    <div class="text-h6 red">
      {{
        $t(purify(courseItems && courseItems[cid] && courseItems[cid].title))
      }}
    </div>
  </q-page>
</template>

<script>
import { watch } from "vue";
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
console.log(route);

export default defineComponent({
  name: "IndexPage",
  props: ["courseItems"],
  setup() {
    watch(
      () => route.params.cid,
      async (newId) => {
        console.log(newId);
        cid.value = newId; // 這裡的 newId 是字串
      }
    );
    return {
      cid: ref(""),
    };
  },
  methods: {
    // 如果輸入的是字串就傳回它本身，如果不是就傳回空字串
    purify(str) {
      console.log(str);
      const ans = typeof str === "string" ? str : "";
    },
  },
});
</script>

<style scoped>
.red {
  color: red;
}
</style>
