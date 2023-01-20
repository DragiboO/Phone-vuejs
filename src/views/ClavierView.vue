<template>
  <div class="clavier">
    <div class="numero">{{ number }}</div>
    <div class="name">{{ name }}</div>
    <div class="touche">
      <div @click="addNumber('1')">1</div>
      <div @click="addNumber('2')">2</div>
      <div @click="addNumber('3')">3</div>
      <div @click="addNumber('4')">4</div>
      <div @click="addNumber('5')">5</div>
      <div @click="addNumber('6')">6</div>
      <div @click="addNumber('7')">7</div>
      <div @click="addNumber('8')">8</div>
      <div @click="addNumber('9')">9</div>
      <div @click="addNumber('*')">*</div>
      <div @click="addNumber('0')">0</div>
      <div @click="addNumber('#')">#</div>
    </div>
    <PhoneCall @click="call"/>
  </div>
</template>

<script>
import PhoneCall from '@/components/PhoneCall.vue'

export default {
  name: 'ClavierView',
  components: {
    PhoneCall
  },
  computed: {
    name() {
      let exist = this.$store.state.contacts.find(contacts => contacts.number == this.number)

      if (exist) {
        return exist.name
      } else {
        return 'Inconnu'
      }
    }
  },
  data() {
    return {
      number: '',
      date: '',
      phoneCall: {
        number: '',
        name: '',
        date: ''
      }
    }
  },
  methods: {
    addNumber(string) {
      if(this.number.length == 14) return
      if (this.number.length == 2 ||this.number.length == 5 ||this.number.length == 8 ||this.number.length == 11) {
        this.number += ' '
      }
      this.number += string
    },
    call() {
      const current = new Date();
      this.date = `le ${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} à${current.toLocaleString().slice(10,16).replace(':','h')}`

      this.phoneCall.number = this.number
      this.phoneCall.name = this.name
      this.phoneCall.date = this.date

      this.$store.commit('phoneCall', this.phoneCall)
    } 
  }
}
</script>

<style scoped>
.clavier {
  border: #2c3e50 4px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.numero {
  border: #2c3e50 2px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 2rem;
  border-radius: 0.25rem;
}

.name {
  border-bottom: #2c3e50 2px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 1rem;
}

.touche {
  display: grid;
  gap: 0.25rem;
  grid-template-columns: repeat(3, 1fr);
}

.touche div {
  border: #2c3e50 2px solid;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
}
</style>
