<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersページにいく</button>
    <p>{{doubleCount}}</p>
    <p>{{tripleCount}}</p>
    <input 
      type="text" 
      v-model="message"
    >
    <p>{{message}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("count", ["doubleCount", "tripleCount"]),
    message: {
      get() {
        return this.$store.getters.message
      },
      set(value) {
        this.$store.dispatch("updateMessage", value);
      }
    }
  },
  methods: {
    toUsers() {
      this.$router.push({
        name: "users-id-profile",
        params: { id: 1 }
      });
    }
  }
}
</script>
