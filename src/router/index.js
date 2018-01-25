import Vue from "vue";
import Router from "vue-router";
import Dashboard from "@/components/Dashboard";
import ViewBeer from "@/components/ViewBeer";
import EditRecipe from "@/components/EditRecipe";
import NewBeer from "@/components/NewBeer";
import NewRecipe from "@/components/NewRecipe";
import Stock from "@/components/Stock";
import ViewRecipe from "@/components/ViewRecipe";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/view-beer/:id",
      name: "view-beer",
      component: ViewBeer
    },
    {
      path: "/edit-recipe/:id",
      name: "edit-recipe",
      component: EditRecipe
    },
    {
      path: "/new-beer",
      name: "new-beer",
      component: NewBeer
    },
    {
      path: "/new-recipe",
      name: "new-recipe",
      component: NewRecipe
    },
    {
      path: "/stock",
      name: "stock",
      component: Stock
    },
    {
      path: "/view-recipe/:id",
      name: "view-recipe",
      component: ViewRecipe
    }
  ]
});
