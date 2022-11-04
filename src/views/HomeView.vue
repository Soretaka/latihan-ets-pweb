<template>
  <div class="home">
    <div v-for="todo in todos" :key="todo.id">
      {{ todo.name }}
      {{ todo.description }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";
export default {
  data() {
    return {
      todos: [],
    };
  },
  mounted() {
    getDocs(collection(db, "todos")).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.todos.push(doc.data());
      });
    });
  },
};
</script>
