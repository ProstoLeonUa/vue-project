<template>
  <div>
    <login></login>
    <registration v-if="regis"></registration>
  </div>
</template>

<script>
import Login from "@/components/Login";
import Registration from "@/components/registration/Registration";

export default {
  components: {
	 Login: Login,
	  Registration: Registration
  },
  computed: {
    regis() {
      return this.$store.state.isReg;
    },
  },
};
</script>