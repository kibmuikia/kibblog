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

				<v-form ref="formSignUp" class="px-3" enctype="multipart/form-data">

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
							name="email"
							label="E-mail Address"
							id="email"
							v-model="email"
						></v-text-field>

						<v-text-field
							name="username"
							label="Username"
							id="username"
							v-model="username"
							prepend-icon="person"
						></v-text-field>

						<v-text-field
							name="password"
							label="Password"
							id="password"
							v-model="password"
							prepend-icon="lock"
							type="password"
						></v-text-field>

						<v-layout column align-center>
							<v-flex xs12 md6 >
								<div class="pa-3">
									<input 
										type="file" 
										accept="image/*"
										name="userAvatar"
										id="userAvatar"
									@change="filesChange($event.target.name, $event.target.files[0])"
									/><!--v-model="userAvatar"-->
									<span v-if="fileStatus" class="pa-2">
										<p class="body-2 text-xs-center"> {{ fileStatus }} </p>
									</span>
								</div>
							</v-flex>
						</v-layout>

					</v-card-text>

					<v-card-actions>
						<v-layout row wrap justify-space-between>
							<v-flex xs12 sm5 md5>
								<v-btn flat color="success" 
									@click="submitRegDetails"
									:loading="loadFlag"> Submit Details </v-btn>
							</v-flex>
							<v-flex xs12 sm5 md5>
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
import { dbKibblog, profilePhotosRef } from '@/fireB'
	
export default {
	data(){
		return {
			fname: '',
			lname: '',
			email: '',
			username: '',
			password: '',
			userAvatarFile: null,
			statusMsg: '',
			fileStatus: '',
			loadFlag: false
		}
	},// END-data()
	methods: {
		reset() {
			this.$refs.formSignUp.reset()
		},// END-reset()
		submitRegDetails() {
			if ( this.$refs.formSignUp.validate() ) {
				this.loadFlag = true;

				const newuser = {
					nameFirst: this.fname,
					nameLast: this.lname,
					nameUser: this.username,
					email: this.email,
					password: this.password
				}
				//console.log( newuser );

				//db.collection( 'projects' ).add( project ).then( () => {
				dbKibblog.collection( 'users' ) //.doc( this.username )
					.add( newuser )
					.then( (docRef) => { //docRef

					// console.log("Document written with ID: ", docRef.id);
					var docId = docRef.id;

					this.statusmsg = 'Next: uploading your image';

					// upload file[image] logic
					let originalFileName = this.userAvatarFile.name;
					let originalFileNameSplit = originalFileName.split( '.' );
					let partOne = originalFileNameSplit[0];
					let partTwo = originalFileNameSplit[1];
					partOne = partOne.substring( 0,5 );
					let toUse = this.username.concat( '__',partOne,'.',partTwo );
					this.fileStatus = toUse;

					let userImageRef = profilePhotosRef.child( toUse );

					userImageRef.put( this.userAvatarFile ).then( () => {
						this.loadFlag = false;
						this.$refs.formSignUp.reset();
						this.userAvatarFile = null;
						this.statusMsg = `Successfully added you! [ ${docId} ]`;//[ ${docId} ]
						this.fileStatus = 'your choosen image has been uploaded!'
					} );
					// end
					
				} );

				// ....
			} else {
				this.statusMsg = 'Invalid Details';
			}
		},// END-submitRegDetails
		filesChange( fieldName, file ) {
			this.userAvatarFile = file
			//console.log( this.userAvatarFile );

			let jinaYaFile = this.userAvatarFile.name;
			let jinaSplit = jinaYaFile.split( '.' );
			this.fileStatus = `name of file[ ${jinaYaFile} ] .. ${jinaSplit[0]} .. ${jinaSplit[1]}`;
		},// END-filesChange
	},// END-methods
}// END-export

</script>

<style scoped></style>