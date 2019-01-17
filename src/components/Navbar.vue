<template>
	
<nav id="mainNavigationBar">
	
	<!-- code -->
	<v-toolbar app class="green lighten-4">
		<v-toolbar-title class="headline text-uppercase logo" @click="$router.push('/')">
			<span>Kib</span>
			<span class="font-weight-light">BLOG 1.0</span>
		</v-toolbar-title>

		<v-spacer></v-spacer>

		<v-menu offset-y bottom>
			<v-btn slot="activator" fab color="green darken-2" flat>
				<v-icon>account_circle</v-icon>
			</v-btn>
			<v-list>
				<v-list-tile v-for="link in accountLinks" :key="link.title" router :to="link.route">
					<v-list-tile-title> {{ link.title }} </v-list-tile-title>
				</v-list-tile>
			</v-list>
		</v-menu>

		<v-btn router to="/about" color="green darken-2" flat>About</v-btn>

	</v-toolbar>

</nav>

</template>

<script>
	
export default {
	data(){
		return {
			accountLinks: [
				{ title: 'Sign In', route: '/signin' },
				{ title: 'Sign Up', route: '/signup' },
			]
		}
	},// END-data
}// END-export

</script>

<style scoped>

.logo {
	cursor: pointer;
}

</style>