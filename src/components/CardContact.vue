<template>
    <div class="card">
        <p>{{ contact.name }}</p>
        <div class="right">
            <p>{{ contact.number }}</p>
            <PhoneCall @click="call(contact.name, contact.number)"/>
        </div>
    </div>
</template>

<script>
import PhoneCall from '@/components/PhoneCall.vue'

export default {
	name: 'CardContact',
    components: {
    PhoneCall
    },
    props: [
        'contact'
    ],
	data() {
		return {
			phoneCall: {
				name: '',
				number: '',
				date: ''
			}
		}
	},
	methods: {
		call(name, number) {
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
        padding-bottom: 0.5rem;
    }

    .right {
        width: 45%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .card p:nth-child(1) {
        font-weight: bold;
    }
</style>