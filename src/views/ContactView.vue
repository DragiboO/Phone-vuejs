<template>
	<div class="contact">
		<div class="btn-add">
			<router-link to="/addcontact"><button>+</button></router-link>
		</div>
		<div class="contact-list">
			<div class="card-container" v-for="contact in contacts" :key="contact.name">
				<CardContact :contact="contact"/>
			</div>
		</div>
	</div>
</template>

<script>
import CardContact from '@/components/CardContact.vue'

export default {
	name: 'ContactView',
	components: {
		CardContact
	},
	computed: {
		contacts() {
			return this.$store.state.contacts
		}
	}
}
</script>

<style scoped>

.contact {
	border: #2c3e50 4px solid;
	padding: 2rem 2rem;
}

.btn-add {
	height: 2rem;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin-bottom: 2rem;
}

button {
	background-color: #2c3e50;
	color: #FFFFFF;
	border: none;
	height: 1.5rem;
	width: 1.5rem;
	border-radius: 0.25rem;
}
.contact-list {
	max-height: 11rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	overflow-y: scroll;
}

.card-container {
	width: 75%;
}
</style>