<template>
  <div class="journal">
    <div class="list-journal">
      <CardCall v-for="call in calls" :key="call.number" :call="call"/>
    </div>
  </div>
</template>

<script>
import CardCall from '@/components/CardCall.vue'

export default {
  name: 'JournalView',
  components: {
    CardCall
  },
  computed: {
    calls() {
      return this.$store.state.calls
    }
  }
}

</script>

<style scoped>
.journal {
  border: #2c3e50 4px solid;
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.list-journal {
  width: 75%;
  max-height: 15rem;
  overflow-y: scroll;
}
</style>