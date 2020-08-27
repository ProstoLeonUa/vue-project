<template>
  <div>
    <div >
      <img />
      <div class="title">{{product.title}}</div>
      <div class="buy">
        <div class="all">
          <span class="all__price">{{product.price}}</span>
          <span class="all__sale">{{product.sale}}</span>
        </div>
        <button>buy</button>
      </div>
      <div class="description">{{product.description}}</div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
	name: 'Product',
  data() {
    return {
      product: null,
    };
  },
  methods: {
    async sort() {},
    filter() {
      const arr = this.GET_ITEMS;
      const id = this.$route.params.id;
      const item = arr.filter((product) => product.id == id);
      this.product = item[0];
    },
  },
  computed: {
    ...mapGetters(["GET_ITEMS"]),
   
    isTop() {
      const isTop = this.product.isTop;
      return isTop;
    },
    isLast() {
      const count = this.product.count;
      return count == 1 ? true : false;
    },
    isSaled() {
      const count = this.product.count;
      return count == 0 ? true : false;
    },
  },
  created() {
    this.filter();
  },
};
</script>