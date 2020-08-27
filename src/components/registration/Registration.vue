<template>
  <popup>
    <template v-slot:title>
      <div class="title">Заполните форму регистрации</div>
    </template>
    <template v-slot:main>
      <app-content></app-content>
    </template>
    <template v-slot:footer>
      <button class="registration-btn" @click="onclick">Зарегистрироваться</button>
    </template>
  </popup>
</template>
<script>
import Popup from "@/components/Popup";
import RegistrationContent from "./RegistrationContent";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
	 }
  },
  computed: { ...mapGetters(["SET_REG_INFO"]),
  isValid(){
	  return (Object.keys(this.SET_REG_INFO).length == 4)
  }
 },
  methods: {
   async onclick() {
		const res = await this.$store.dispatch('SET_REG_INFO',this.SET_REG_INFO)
		if(!this.isValid) return;
		if(res.status == 200) {
			this.$store.commit("IS_REG", false);
			console.log('Created new acc - DONE!')
		}

    },
  },
  components: {
    Popup: Popup,
    appContent: RegistrationContent,
  },
};
</script>
<style lang="sass">
.title
	font-size: 24px
	font-weight: 600
.registration-btn
	padding: 10px
	font-weight: 600
</style>