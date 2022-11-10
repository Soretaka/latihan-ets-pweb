<template>
  <div class="home">
    <div v-for="todo in todos" :key="todo.id">
      <h2>{{ todo.name }}</h2>
      {{ todo.description }}
      <div v-for="category in todo.categories" :key="category">
        {{ category }}
      </div>
      <button @click="deleteTodo(todo.id)">delete task</button>
      <button @click="$router.push({ name: 'edit', params: { id: todo.id } })">
        edit task
      </button>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import db from "../firebase";
export default {
  data() {
    return {
      temp_params: "",
      params: "",
      todos: [],
    };
  },
  mounted() {
    this.getTodos2();
  },
  methods: {
    async getTodos1() {
      const querySnapshot = await getDocs(collection(db, "todos"));
      if (querySnapshot) {
        querySnapshot.forEach((doc) => {
          this.todos.push(doc.data());
        });
      }
    },
    getTodos2() {
      getDocs(collection(db, "todos")).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // console.log(doc);
          this.todos.push({ id: doc.id, ...doc.data() });
        });
      });
    },
    deleteTodo(todoID) {
      deleteDoc(doc(db, "todos", todoID));
    },
  },
};
</script>
