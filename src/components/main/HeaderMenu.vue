<template>
  <div class="header">
    <div>LOGO</div>
    <div @click="open">Menu</div>
    <div>Account</div>
    <router-link to="/">Home</router-link>
    <router-link to="/auth">auth</router-link>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      const open = this.$store.state.menuIsOpen;
      this.$store.state.menuIsOpen = open == false ? true : false;
    },
  },
};
</script>
<style lang="sass">
.header
	display: flex
	justify-content: space-between
	max-width: 100%
	background-color: #d2d2d2
	padding: 20px
	cursor: pointer
	&:target
		color: red
</style>