<template lang="pug">
q-layout(view="lHh Lpr lFf")
  q-header(elevated)
    q-toolbar
      q-btn(flat, dense, round, icon="menu", aria-label="Menu", @click="toggleLeftDrawer")
      q-toolbar-title {{ $t(&quot;title&quot;) }}
      q-btn(flat, color="white", @click="openCart")
        q-icon(size="md", name="shopping_cart")
        q-badge.move-to-left(color="red", floating, size="lg") 0
      q-btn(color="white", flat, dense, round, size="xl", icon="account_circle", @click="tryLogin")
    q-toolbar(inset)
      q-breadcrumbs(active-color="white", style="font-size: 16px")
        q-breadcrumbs-el(label="Home", icon="home")
        q-breadcrumbs-el(v-if="tail(path)", :label="$t(trans(tail(path)))")
  q-drawer(v-model="leftDrawerOpen", show-if-above, bordered)
    q-list
      q-item(clickable, to="/")
        q-item-section(avatar)
          q-icon(name="home")
        q-item-section
          q-item-label Home
      q-item-label(header) 剛做好的動態路由
      q-item(clickable, v-for="c in Object.values(courseItems)", :key="c.id", :to="'/class/' + c.id")
        q-item-section(v-if="c.icon", avatar)
          q-icon(:name="c.icon")
        q-item-section
          q-item-label {{ $t(c.title) }}
          q-item-label(caption, v-if="c.caption")
            | {{
            | $t(c.caption)
            | }}
      q-item-label(header) Essential Links
      EssentialLink(v-for="link in essentialLinks", :key="link.title", v-bind="link")
  q-page-container
    router-view(:courseItems="courseItems")
  Login(v-if="showLoginComponent", @cancel-login="cancelLogin")
</template>

<script>
import { useRoute } from "vue-router";
import { defineComponent, ref, computed } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import Login from "components/Login.vue";
import { uid } from "quasar";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

const courseItems = ref({
  death_and_life: {
    id: "death_and_life",
    isOpen: true,
    title: "Death_And_Life",
    caption: "Death_And_Life_Caption",
    description: "Death_And_Life_Description",
    icon: "school",
    link: "/death_and_life",
    prices: {
      full: 450,
      half: 350,
      friend: 350,
      senior: 250,
      special: 1,
    },
  },
  nullity_13: {
    id: "nullity_13",
    isOpen: true,
    title: "Nullity_13",
    caption: "Nullity_13_Caption",
    useHTML: true,
    description: "Nullity_13_Description",
    icon: "school",
    link: "/nullity_13",
    prices: {
      full: 450,
      half: 350,
      friend: 350,
      senior: 250,
      special: 1,
    },
  },
  life_art_elem: {
    id: "life_art_elem",
    isOpen: false,
    title: "Life_Art_Elem",
    caption: "Life_Art_Elem_Caption",
    useHTML: true,
    description: "Life_Art_Elem_Description",
    icon: "school",
    link: "/life_art_elem",
    prices: {
      full: 450,
      half: 350,
      friend: 350,
      senior: 250,
      special: 1,
    },
  },
});

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    Login,
  },

  setup() {
    const route = useRoute();
    const path = computed(() => route.path);

    const leftDrawerOpen = ref(false);
    const showLoginComponent = ref(false);

    return {
      essentialLinks: linksList,
      courseItems: courseItems,
      uid: ref(""), // 如果uid存在，代表已登錄後
      leftDrawerOpen: ref(false),
      showLoginComponent: showLoginComponent, // 如果showLoginComponent為真，代表要顯示登錄組件
      route,
      path,
      trans(str) {
        let cid = str.replace(/class\//, "");
        // Regular Expression
        let ans = this.courseItems[cid];

        // console.log(this.$t(ans.title));
        return ans.title;
      },
      tail(str) {
        return str.slice(1);
      },
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      tryLogin() {
        showLoginComponent.value = true;
        window.scrollTo(0, 0);
      },
      cancelLogin() {
        console.log("cancelLogin");
        showLoginComponent.value = false;
      },
      openCart() {
        window.alert("建構中...");
      },
    };
  },
});
</script>
