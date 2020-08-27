<template>
  <div class="wrapper">
    <ul>
      <store-item v-for="(item, $index) in GET_ITEMS" :key="$index" :payload="item"></store-item>
    </ul>
  </div>
 
</template>
<script>
import StoreItem from "./StoreItem";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["GET_ITEMS"]),
  },
  created() {
    if (this.GET_ITEMS.length == 0)
      this.$store.dispatch("SET_ITEM", "http://localhost:3005/");
  },
  components: {
    StoreItem: StoreItem,
  },
};
</script>
<style lang="sass">
.wrapper
	max-width: 100%
	margin-top: 10px
	ul
		list-style: none
		display: flex
		justify-content: space-around
</style>