<template>
  <div class="popup">
    <div class="popup__body">
      <div class="popup__content">
			<a href="/" class="popup__close">X</a>
			<router-link to="/">X</router-link>
        <div class="popup__title">
          <slot name="title"></slot>
        </div>
        <div class="popup__main">
          <slot name="main"></slot>
        </div>
        <div class="popup__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="sass">
.popup
	position: fixed
	left: 0
	top: 0
	width: 100%
	height: 100%
	background-color: rgba(0,0 ,0 ,0.9 )
	&__body
		display: flex
		flex-direction: column
		justify-content: center
		align-items: center
		min-height: 100%
		padding: 30px 10px
	&__close
		position: absolute
		right: 10px
		top: 10px
		font-size: 20px
		text-decoration: none
	&__content
		position: relative
		background-color: #fff
		color: #000
		max-width: 400px
		padding: 30px
		display: flex
		flex-direction: column
	&__main
		display: flex
		flex-direction: column
		align-items: flex-start
		margin: 10px 0
</style>