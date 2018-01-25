<template>
<nav>
<div class="nav-wrapper green lighten-2">
    <a href="/" class="brand-logo">CervApp</a>
    <a href="/" data-activates="mobile-demo" class="button-collapse">
    <i class="fa fa-bars" aria-hidden="true"></i>
    </a>
    <ul class="right hide-on-med-and-down">
      <li>
        <router-link to="/new-beer">
          <i class="fa fa-beer" aria-hidden="true"></i> Nova Cerveja</router-link>
      </li>
      <li>
        <router-link to="/new-recipe">
          <i class="fa fa-plus" aria-hidden="true"></i> Nova Receita</router-link>
      </li>
      <li>
        <router-link to="/stock">
          <i class="fa fa-archive" aria-hidden="true"></i> Estoque</router-link>
      </li>
    </ul>
    <ul class="side-nav" id="mobile-demo">
      <li>
        <router-link to="/new-beer">
          <i class="fa fa-beer" aria-hidden="true"></i> Nova Cerveja</router-link>
      </li>
      <li>
        <router-link to="/new-recipe">
          <i class="fa fa-plus" aria-hidden="true"></i> Nova Receita</router-link>
      </li>
      <li>
        <router-link to="/stock">
          <i class="fa fa-archive" aria-hidden="true"></i> Estoque</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {};
  }
};
</script>
