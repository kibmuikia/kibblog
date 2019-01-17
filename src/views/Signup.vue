<template>
	
	<v-container>
		<v-layout column align-center>
			<v-flex xs12 md8>

				<v-card>
					<v-card-title class="">
						<h5 class="headline" right>Sign In</h5>
					</v-card-title>

				<v-form ref="formSignUp">

					<v-card-text>
						<v-layout row wrap justify-space-between>
							<v-flex xs12 md5>
								<v-text-field
									name="fname"
									label="First Name"
									id="fname"
								></v-text-field>
							</v-flex>
							<v-flex xs12 md5>
								<v-text-field
									name="lname"
									label="Last Name"
									id="lname"
								></v-text-field>
							</v-flex>
						</v-layout>
						<v-text-field
							name="username"
							label="Username"
							id="username"
						></v-text-field>
						<v-text-field
							name="email"
							label="E-mail Address"
							id="email"
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
						</v-layout>
					</v-card-actions>

				</v-form>

				</v-card>

			</v-flex>
		</v-layout>
	</v-container>

</template>

<script>
	
export default {
	methods: {
		reset() {
			this.$refs.formSignUp.reset()
		},// END-reset()
		submitRegDetails() {
			if ( this.$refs.formSignUp.validate() ) {
				alert( 'Valid, Submiting & Processing Next' );
			} else {
				alert( 'Invalid Details' );
			}
		},// END-submitRegDetails
	},// END-methods
}// END-export

</script>

<style scoped></style>