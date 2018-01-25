<template>
  <div id="dashboard" class="container">
    <h3>Lista de Cervejas</h3>
    <table class="bordered highlight">
      <thead>
        <th>Data</th>
        <th>Nome</th>
        <th>Tipo</th>
        <th>Quantidade (l)</th>
      </thead>
      <tbody>        
        <tr v-for="beer in beers" v-bind:key="beer.id">
          <td>{{ beer.time }}</td>
          <td>
          <router-link :to="{ name: 'view-beer', params: { id: beer.id } }">{{ beer.name_beer }}</router-link>
          </td>
          <td>{{ beer.type_beer }}</td>
          <td>{{ beer.quantity_beer }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import db from "./firebaseInit.js";

export default {
  name: "dashboard",
  data() {
    return {
      beers: []
    };
  },
  created() {
    db
      .collection("beers")
      .orderBy("time")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            name_beer: doc.data().name_beer,
            quantity_beer: doc.data().quantity_beer,
            type_beer: doc.data().type_beer,
            time: doc.data().time
          };
          this.beers.push(data);
        });
      });
  }
};
</script>
