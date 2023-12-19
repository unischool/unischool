<template lang="pug">
q-layout(view="lHh Lpr lFf")
  q-header(elevated)
    q-toolbar
      q-btn(flat, dense, round, icon="menu", aria-label="Menu", @click="toggleLeftDrawer")
      q-toolbar-title {{ $t(&quot;title&quot;) }}
      q-btn(flat, color="white", @click="openCart")
        q-icon(size="md", name="shopping_cart")
        q-badge.move-to-left(color="red", floating, size="lg") {{ countAllCounts(cartItems) }}
    q-breadcrumbs.padding(active-color="white", style="font-size: 16px")
      q-breadcrumbs-el(label="Home", icon="home" to="/")
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
  q-page-container
    // 冒號傳遞資料到子元件
    router-view(
      :courseItems="courseItems",
      :cartItems="cartItems",
      @try-login="tryLogin",
      @add_to_cart="add_to_cart",
      )
  Login(v-if="showLoginComponent", @cancel-login="cancelLogin")
  q-footer
    q-toolbar.text-center
      q-toolbar-title
        // | {{ $t('service_email:') }} &nbsp;&nbsp;
        a.text-white(href="mailto:" + serviceEmail) {{ serviceEmail }}
        | &nbsp;&nbsp; {{ $t('course_team') }}

</template>

<script>
// 引入 vue-router 的 useRoute 函數，用於獲取當前路由信息
import { useRoute } from "vue-router";

// 引入 Vue 的核心功能
import { defineComponent, ref, computed } from "vue";

// 引入 Login 組件
import Login from "components/Login.vue";

// 引入 Quasar 框架的 useMeta 函數，用於設置頁面元數據
import { useMeta } from "quasar";

// 定義一個常量，用於存儲服務郵箱地址
const serviceEmail = "service@chihching.org";

// 使用 ref 創建一個響應式數據 cartItems，用於存儲購物車項目
const cartItems = ref([]); // [ {cid: "death_and_life", count: 1}, ...

// 使用 ref 創建一個響應式數據 courseItems，用於存儲課程項目
const courseItems = ref({
  death_and_life: {
    id: "death_and_life",
    isOpen: true,
    title: "Death_And_Life",
    caption: "Death_And_Life_Caption",
    description: "Death_And_Life_Description",
    icon: "school",
    link: "/death_and_life",
    max_price: 450,
    min_price: 250,
    specialPrice: 1,
    hasSpecialPrice: true,
  },
  nullity_13: {
    id: "nullity_13",
    isOpen: true,
    title: "Nullity_13",
    caption: "Nullity_13_Caption",
    description: "Nullity_13_Description",
    icon: "school",
    link: "/nullity_13",
    max_price: 450,
    min_price: 250,
    specialPrice: 1,
    hasSpecialPrice: true,
  },
  life_art_elem: {
    id: "life_art_elem",
    isOpen: false,
    title: "Life_Art_Elem",
    caption: "Life_Art_Elem_Caption",
    description: "Life_Art_Elem_Description",
    icon: "school",
    link: "/life_art_elem",
    max_price: 450,
    min_price: 250,
    hasSpecialPrice: false,
  },
});

export default defineComponent({
  name: "MainLayout",

  components: {
    Login,
  },

  setup() {
    const route = useRoute();
    const path = computed(() => route.path);

    const leftDrawerOpen = ref(false);
    const showLoginComponent = ref(false);

    // essentially acting as a computed property
    useMeta(() => {
      // compute or reference other stuff
      // in your component
      // then return:
      return {
        title: "至青宇宙学校",
        /* meta config */
      };
    });

    return {
      serviceEmail: serviceEmail,
      courseItems: courseItems,
      cartItems: cartItems,
      uid: ref(""), // 如果uid存在，代表已登錄後
      leftDrawerOpen: leftDrawerOpen,
      showLoginComponent: showLoginComponent, // 如果showLoginComponent為真，代表要顯示登錄組件
      route,
      path,
      countAllCounts(items) {
        let ans = 0;
        for (let i = 0; i < items.length; i++) {
          ans += items[i].count;
        }
        return ans;
      },
      trans(str) {
        if (str.match(/class\//)) {
          let cid = str.replace(/class\//, "");
          // Regular Expression
          let ans = this.courseItems[cid];
          // console.log(this.$t(ans.title));
          return ans.title;
        } else {
          return str;
        }
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
        showLoginComponent.value = false; // 不能寫this, 要改成寫.value
      },
      add_to_cart(cid) {
        // onsole.log(cid);
        //...複製array
        var ans = [...cartItems.value];
        //將資料推到array後方
        ans.push({ cid: cid, count: 1 });
        // console.log(ans);
        cartItems.value = ans;
        localStorage.setItem("cartItems", JSON.stringify(ans));
        console.log(localStorage.getItem("cartItems"));
        window.alert("已加入購物車");
        console.log(JSON.parse(localStorage.getItem("cartItems"))); // 這裡的localStorage是瀏覽器的localStorage
      },
      openCart() {
        window.alert("建構中...");
      },
    };
  },
  mounted() {
    console.log("mounted");
    console.log(localStorage.getItem("cartItems"));
    if (localStorage.getItem("cartItems")) {
      cartItems.value = JSON.parse(localStorage.getItem("cartItems"));
    }
  },
});
</script>
