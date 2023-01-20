<template>
	<div class="card">
		<p v-if="call.name == 'Inconnu'">{{ call.number }}</p>
		<p v-else>{{ call.name }}</p>
		<div class="right">
			<p>{{ call.date}}</p>
			<PhoneCall @click="callAdd(call.name, call.number)"/>
		</div>
	</div>
</template>

<script>
import PhoneCall from '@/components/PhoneCall.vue'

export default {
	name: 'CardCall',
	components: {
	PhoneCall
	},
	props: [
		'call'
	],
	data() {
		return {
			phoneCall: {
				number: '',
				name: '',
				date: ''
			}
		}
	},
	methods: {
		callAdd(name, number) {
			const current = new Date();
			this.date = `le ${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} à${current.toLocaleString().slice(10,16).replace(':','h')}`

			this.phoneCall.name = name
			this.phoneCall.number = number
			this.phoneCall.date = this.date

			this.$store.commit('phoneCall', this.phoneCall)
    } 
	}
}
</script>

<style scoped>
	.card {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: #2c3e50 2px solid;
		color: #2c3e50;
		padding: 0.5rem;
	}

	.right {
		width: 60%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.card p:nth-child(1) {
		font-weight: bold;
	}
</style>