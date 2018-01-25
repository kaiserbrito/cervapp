import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import EditBeer from '@/components/EditBeer'
import EditRecipe from '@/components/EditRecipe'
import NewBeer from '@/components/NewBeer'
import NewRecipe from '@/components/NewRecipe'
import Recipes from '@/components/Recipes'
import Stock from '@/components/Stock'
import ViewBeer from '@/components/ViewBeer'
import ViewRecipe from '@/components/ViewRecipe'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/edit-beer/:beer_id',
      name: 'edit-beer',
      component: EditBeer
    },
    {
      path: '/edit-recipe/:recipe_id',
      name: 'edit-recipe',
      component: EditRecipe
    },
    {
      path: '/new-beer',
      name: 'new-beer',
      component: NewBeer
    },
    {
      path: '/new-recipe',
      name: 'new-recipe',
      component: NewRecipe
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: Recipes
    },
    {
      path: '/stock',
      name: 'stock',
      component: Stock
    },
    {
      path: '/view-beer/:beer_id',
      name: 'view-beer',
      component: ViewBeer
    },
    {
      path: '/view-recipe/:recipe_id',
      name: 'view-recipe',
      component: ViewRecipe
    }
  ]
})
