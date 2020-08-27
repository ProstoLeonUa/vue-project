<template>
  <div class="auth">
    <form @submit.prevent v-show="!GET_AUTH_ENTER()">
      <label>
        Введите логин:
        <input v-model="auth.login" />
      </label>
      <label>
        Введите пароль:
        <input v-model="auth.password" />
      </label>
      <div class="auth__btn">
        <button @click="postAuth">Войти</button>
        <button @click="registration">Регистрация</button>
      </div>
    </form>
    <button v-show="GET_AUTH_ENTER()" @click="out">Выйти</button>
  </div>
</template>

<script>
import Popup from "@/components/Popup";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      auth: {
        login: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapGetters(["GET_AUTH_ENTER"]),
    postAuth() {
      this.$store
        .dispatch("AUTH", this.auth)
        .then((resp) => {
          this.$store.commit("AUTH_ENTER", resp.data);
          this.GET_AUTH_ENTER() ? this.$router.push("/") : "";
        })
        .catch((e) => console.log("введите правильно логин или пароль"));
    },
    out() {
		delete localStorage.isAuthorized;
		this.$router.go('/auth')
    },
    registration() {
      this.$store.commit("IS_REG", true);
    },
  },
};
</script>

<style lang="sass">
.auth
	display: flex
	flex-direction: column
	margin: 0 auto
	width: 300px
	label
		width: 100%
		display: flex
		margin-top: 10px
		justify-content: space-between
	&__btn
		margin: 10px
		button
			padding: 10px
		button:first-child
			margin-right: 10px
</style>