<template>
  <div class="sidebar">
    <ul>
      <li>Топ продаж</li>
      <li>Последние модели</li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style lang="sass">
.sidebar
	display: flex
	height: 100%
	position: absolute
	left: -320px
	background-color: #90d8b4
	width: 320px
	transition: .5s all
	z-index: 99
	ul
		display: flex
		flex-direction: column
		list-style: none
		align-items: flex-start
		width: 100%
		li
			background-color: antiquewhite
			width: 100%
			padding: 10px 20px
			margin-top: 5px
			cursor: pointer
			font-weight: bold
			&:hover
				color: red
</style>