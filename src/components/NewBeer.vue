<template>
  <div id="new-beer">
    <div class="container">
      <h2>Nova Cerveja</h2>
      <form @submit.prevent="saveBeer" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="time" required>
            <label>Data</label>
          </div>
        </div>
          <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="name_beer" required>
              <label>Nome da Cerveja</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="type_beer" required>
              <label>Tipo da Cerveja</label>
            </div>
        </div>
          <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="quantity_beer" required>
              <label>Quantidade (l)</label>
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
  name: "new-beer",
  data() {
    return {
      time: null,
      name_beer: null,
      type_beer: null,
      quantity_beer: null
    };
  },
  methods: {
    saveBeer() {
      db
        .collection("beers")
        .add({
          time: this.time,
          name_beer: this.name_beer,
          type_beer: this.type_beer,
          quantity_beer: this.quantity_beer
        })
        .then(docRef => this.$router.push("/"))
        .catch(error => console.log(err));
    }
  }
};
</script>
