<template>
	
	<v-container>
		<v-layout column wrap align-center>
			<v-flex xs12 md6>
			
				<v-card>
					
					<v-card-title class="text-xs-center">
						<div class="headline">Sign In</div>
					</v-card-title>

					<v-form ref="formSignin">
					
						<v-card-text>
							<v-text-field
								name="username"
								v-model="username"
								label="Username"
								prepend-icon="person"
								id="username"></v-text-field>
							<v-text-field 
								name="password"
								v-model="password"
								label="Password"
								type="password"
								prepend-icon="lock_open"
								id="password"></v-text-field>
						</v-card-text>

						<v-card-actions>
							<v-btn flat color="success" 
								@click="signin"
								:loading="loadflag" >Gain Access</v-btn>
							<v-btn flat color="error"
								@click="reset" > reset</v-btn>
						</v-card-actions>

					</v-form>

					<v-layout row wrap justify-space-between v-if="statusmsg">
						<v-flex xs12 md12 class="pa-3 ma-1">
							<p class="body-2"> {{ statusmsg }} </p>
						</v-flex>
					</v-layout>

				</v-card>

			</v-flex>
		</v-layout>
	</v-container>

</template>

<script>

import { dbKibblog } from '@/fireB'
	
export default {
	
	data() {
		return {
			username: '',
			password: '',
			statusmsg: '',
			loadflag: false
		}//end
	},// end-data
	methods: {
		reset() {
			this.$refs.formSignin.reset();
		},// end-reset
		signin() {
			if( this.$refs.formSignin.validate() ) {
				this.loadflag = true;

				let docRef = dbKibblog.collection('users');
				docRef.where( 'nameUser','==',this.username )
					.get()
					.then( (querySnapshot) => {
						if( querySnapshot.empty ){
							this.statusmsg = 'Empty!!';
							this.loadflag = false;
						} else{
							querySnapshot.docs.forEach( doc => {
								//console.log( doc.data() );
								this.statusmsg = `FOUND document with, user[ ${doc.data().nameUser} ]`;
								this.loadflag = false;
							} );
						}//...
					} )
					.catch( (error) => {
						this.statusmsg = error;
						this.loadflag = false;
					} );
				/*
				dbKibblog.collection( 'users' ).where( 'nameUser', '==', this.username ).get().then( (snapshot) => {
					
					if( snapshot.docs.exists ){
						snapshot.docs.forEach( doc => {
							this.statusmsg = `FOUND document with, user[ ${doc.data().nameUser} ]`;
							//console.log( doc.data() );
							this.loadflag = false;
							this.$refs.formSignin.reset();
						} );
					} else {
						this.statusmsg = 'No such document';
						this.loadflag = false;
						//this.$refs.formSignin.reset();
					}// end-if

					// ......
				} )
				*/
				// .....
			} else {
				this.statusmsg = 'Invalid Details'
			}// end-if-valid
		},// end-signin
	}// end-methods

}// END-export

</script>

<style scoped></style>