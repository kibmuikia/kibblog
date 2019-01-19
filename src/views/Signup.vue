<template>
	
	<v-container>
		<v-layout column align-center>
			<v-flex xs12 md8>

				<v-card>
					<v-card-title class="">
						<v-layout column>
							<v-flex xs12 md6 class="text-xs-center">
								<h5 class="headline green--text text--accent-3" 
									@click="$router.push('/signup?msg=refreshed')">
									Sign Up
								</h5>
							</v-flex>
						</v-layout>
					</v-card-title>

				<v-form ref="formSignUp" class="px-3">

					<v-card-text>
						<v-layout row wrap justify-space-between>
							<v-flex xs12 md5>
								<v-text-field
									name="fname"
									label="First Name"
									id="fname"
									v-model="fname"
								></v-text-field>
							</v-flex>
							<v-flex xs12 md5>
								<v-text-field
									name="lname"
									label="Last Name"
									id="lname"
									v-model="lname"
								></v-text-field>
							</v-flex>
						</v-layout>
						<v-text-field
							name="username"
							label="Username"
							id="username"
							v-model="username"
							prepend-icon="person"
						></v-text-field>
						<v-text-field
							name="email"
							label="E-mail Address"
							id="email"
							v-model="email"
						></v-text-field>
					</v-card-text>

					<v-card-actions>
						<v-layout row wrap justify-space-between>
							<v-flex xs12 md5>
								<v-btn flat color="success" @click="submitRegDetails"> Submit Details </v-btn>
							</v-flex>
							<v-flex xs12 md5>
								<v-btn flat color="error" @click="reset"> Reset </v-btn>
							</v-flex>
							<v-flex xs12 md12 class="mt-1 pt-2 text-xs-center grey lighten-3" 
								v-if="statusMsg">
								<p class="body-2"> {{ statusMsg }} </p>
							</v-flex>
						</v-layout>
						<!--<br>
						<v-layout row wrap v-if="statusMsg">
							
						</v-layout>-->
					</v-card-actions>

				</v-form>

				</v-card>

			</v-flex>
		</v-layout>
	</v-container>

</template>

<script>

//import db from '@/fb'
import dbKibblog from '@/fireB'
	
export default {
	data(){
		return {
			fname: '',
			lname: '',
			username: '',
			email: '',
			statusMsg: '',
		}
	},// END-data()
	methods: {
		reset() {
			this.$refs.formSignUp.reset()
		},// END-reset()
		submitRegDetails() {
			if ( this.$refs.formSignUp.validate() ) {
				const newuser = {
					nameFirst: this.fname,
					nameLast: this.lname,
					nameUser: this.username,
					email: this.email
				}
				//console.log( newuser );

				//db.collection( 'projects' ).add( project ).then( () => {
				dbKibblog.collection( 'users' ).add( newuser ).then( () => {
					this.statusMsg = 'Successfully added you!';
					this.$refs.formSignUp.reset();
				} );

				// ....
			} else {
				this.statusMsg = 'Invalid Details';
			}
		},// END-submitRegDetails
	},// END-methods
}// END-export

</script>

<style scoped></style>