<template>
	<RouterView />
	<transition name="msg">
		<userMsg />
	</transition>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import userMsg from './components/user-msg.vue'

export default {
	name: 'app',
	created() {
		this.$store.dispatch({ type: 'loadLoggedInUser' })
	},
	components: {
		userMsg,
	},
}
</script>
