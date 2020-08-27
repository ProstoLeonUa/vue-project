<template>
  <form class="registration">
    <label v-for="(field, key) in fields" :key="key">
      {{key}}
      <input @input="onInput(key)" v-model="fields[key]" />
    </label>
  </form>
</template>
<script>
export default {
  data() {
    return {
      fields: {
        login: "",
        login: "",
        password: "",
        confirm: "",
        email: "",
      },
    };
  },
  methods: {
    onInput(key) {
      this.$store.commit("SET_REG_INFO", {
			[key]: this.fields[key]
		});
    },
  },
};
</script>
<style lang="sass">
.registration
	width: 100%
	label
		display: flex
		justify-content: space-between
		align-items: center
		width: 100%
		padding: 10px
		font-size: 18px
		font-weight: 600
	input
		padding: 10px
</style>