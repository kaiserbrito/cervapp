<template>
  <div id="stock" class="container">
    <h3>Estoque</h3>
    <table class="bordered highlight">
      <thead>
        <th>Quantidade</th>
        <th>Nome</th>        
      </thead>
      <tbody>        
        <tr v-for="supply in supplies" v-bind:key="supply.id">
          <td>{{ supply.quantity_supply }}</td> 
          <td>{{ supply.name_supply }}</td>                   
        </tr>
      </tbody>
    </table>
    <button data-target="modal1" class="btn modal-trigger"><i class="fa fa-plus" aria-hidden="true"></i>
 Adicionar</button>
    <!-- Modal Structure -->
    <div id="modal1" class="modal modal-fixed-footer">
      <div class="modal-content">
        <h4>Adicionar Suprimento</h4>
        <p>Nome</p>
        <p>Quantidade</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">Agree</a>
      </div>
    </div>
  </div>
</template>

<script>
import db from "./firebaseInit.js";

export default {
  name: "stock",
  data() {
    return {
      supplies: []
    };
  },
  created() {
    db
      .collection("supplies")
      .orderBy("quantity_supply")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            name_supply: doc.data().name_supply,
            quantity_supply: doc.data().quantity_supply
          };
          this.supplies.push(data);
        });
      });
  }
};
</script>
