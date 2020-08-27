<template>
  <div>
    <headermenu></headermenu>
    <sidebar :class="{open: open}"></sidebar>
    <store v-if="route == undefined"></store>
    <product v-else></product>
  </div>
</template>

<script>
import headermenu from "@/components/main/HeaderMenu";
import sidebar from "@/components/main/Sidebar";
import store from "./Store";
import Product from "../components/product/Product";

export default {
  components: {
    headermenu: headermenu,
    sidebar: sidebar,
    store: store,
    product: Product,
  },
  computed: {
    open() {
      return this.$store.state.menuIsOpen;
    },
    route() {
      return this.$route.params.id;
    },
  },
};
</script>
<style lang="sass">
.open
	left: 0
</style>
