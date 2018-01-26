<template>
  <div id="new_recipe">
    <div class="container">
      <h2>Nova Receita</h2>
      <form @submit.prevent="saveRecipe" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="name_recipe" required>
            <label>Nome da Receita</label>
          </div>
        </div>
          <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="type_recipe" required>
              <label>Tipo de Receita</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="ingredients" required>
              <label>Ingredientes</label>
            </div>
        </div>
          <div class="row">
            <div class="input-field col s12">
              <textarea id="textDescription" class="materialize-textarea" required></textarea>
              <label>Descrição</label>
            </div>
          </div>
          <button type="submit" class="btn green">Criar</button>
          <router-link to="/" class="btn grey">Cancelar</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import db from "./firebaseInit.js";

export default {
  name: "new_recipe",
  data() {
    return {
      name_recipe: null,
      type_recipe: null,
      ingredients: null,
      description: null
    };
  },
  methods: {
    saveRecipe() {
      db
        .collection("recipes")
        .add({
          name_recipe: this.name_recipe,
          type_recipe: this.type_recipe,
          ingredients: this.ingredients,
          description: this.description
        })
        .then(docRef => this.$router.push("/"))
        .catch(error => console.log(err));
    }
  }
};
</script>
