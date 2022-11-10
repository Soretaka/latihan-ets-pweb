<template>
  <div class="create">
    <h1>Create TODO</h1>
    <form @submit.prevent="addTodo">
      <input v-model="todo.name" placeholder="Name" />
      <input v-model="todo.description" placeholder="Description" />
      <form @submit.prevent="addCategory">
        <input v-model="category" placeholder="category" />
        <button type="submit">Add Category</button>
      </form>
      <div v-for="category in todo.categories" :key="category">
        {{ category }}
        <button @click="deleteCategory(category)">delete</button>
      </div>
      <button type="submit">save</button>
    </form>
  </div>
</template>

<script>
import { setDoc, doc, collection, getDoc } from "firebase/firestore";
import db from "../firebase";

export default {
  data() {
    return {
      todo: {
        name: "",
        description: "",
        categories: [],
      },
      category: "",
    };
  },
  mounted() {
    if (this.$route.name === "edit") {
      (async () => {
        const tempTodo = await getDoc(doc(db, "todos", this.$route.params.id));
        console.log(this.tempTodo);
        this.todo = tempTodo.data();
        console.log(this.todo);
      })();
    }
  },
  methods: {
    addCategory() {
      this.todo.categories.push(this.category);
      this.category = "";
    },
    addTodo() {
      if (this.$route.name === "edit") {
        setDoc(doc(db, "todos", this.$route.params.id), this.todo);
        console.log("jalanbs");
      } else {
        setDoc(doc(collection(db, "todos")), this.todo);
      }
      // (async () => {
      //   await setDoc(doc(collection(db, "todos")), this.todo);
      // })();
      // this.todo = {
      //   name: "",
      //   description: "",
      //   categories: [],
      // };
    },
    deleteCategory(category) {
      this.todo.categories = this.todo.categories.filter(
        (cat) => cat !== category
      );
    },
  },
};
</script>
