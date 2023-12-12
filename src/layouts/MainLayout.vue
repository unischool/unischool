<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> {{ $t("title") }} </q-toolbar-title>

        <div>{{ $t("subtitle") }}</div>
      </q-toolbar>

      <q-toolbar inset>
        <q-breadcrumbs active-color="white" style="font-size: 16px">
          <q-breadcrumbs-el label="Home" icon="home" />
          <q-breadcrumbs-el v-if="tail(path)" :label="$t(trans(tail(path)))" />
        </q-breadcrumbs>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item clickable to="/">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>

        <q-item-label header> 剛做好的動態路由 </q-item-label>

        <q-item
          clickable
          v-for="c in Object.values(courseItems)"
          :key="c.id"
          :to="'/class/' + c.id"
        >
          <q-item-section v-if="c.icon" avatar>
            <q-icon :name="c.icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ $t(c.title) }}</q-item-label>
            <q-item-label caption v-if="c.caption">{{
              $t(c.caption)
            }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view :courseItems="courseItems" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { useRoute } from "vue-router";
import { defineComponent, ref, computed } from "vue";
import EssentialLink from "components/EssentialLink.vue";

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
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
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
  },

  setup() {
    const route = useRoute();
    const path = computed(() => route.path);
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      courseItems: courseItems,
      leftDrawerOpen,
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
    };
  },
});
</script>
