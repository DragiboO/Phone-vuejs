<template>
	<div class="addcontact">
		<form @submit.prevent="addContact">
			<input type="text" placeholder="Name..." v-model="contact.name">
			<input type="text" placeholder="Number..." maxlength="14" v-model="contact.number" @keypress="spacer()">
			<button type="submit">Ajouter</button>
		</form>
	</div>
</template>

<script>

export default {
	name: 'AddContactView',
	data() {
		return {
			contact: {
				name: '',
				number: ''
			}
		}
	},
	computed: {
		numberTaken() {
			let taken = this.$store.state.contacts.find(contacts => contacts.number == this.contact.number)

			if (taken) {
				return false
			} else {
				return true
			}
		}
	},
	methods: {
		spacer() {
			if (this.contact.number.length == 2 ||this.contact.number.length == 5 ||this.contact.number.length == 8 ||this.contact.number.length == 11) {
				this.contact.number += ' '
			}
		},
		addContact() {
			if(this.numberTaken) {
				if(this.contact.name == '' || this.contact.number.length != 14) return
				this.$store.commit('addContact', this.contact)
				this.contact = {
				name: '',
				number: ''
				}
			}
		}
	}
}
</script>

<style scoped>
	.addcontact {
		border: #2c3e50 4px solid;
		padding: 2rem 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
  }

	form {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}

	input {
		width: 50%;
		margin-bottom: 2rem;
		padding: 0.25rem;
		border: none;
		border-bottom: #2c3e50 1px solid;
	}

	button {
		border-radius: 0.25rem;
		border: none;
		padding: 0.5rem 2rem;
		background-color: #2c3e50;
		color: white;
	}
</style>