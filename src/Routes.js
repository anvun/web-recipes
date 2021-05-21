import AllRecipes from "./pages/AllRecipes";
import Favourites from "./pages/Favourites";
import MyRecipes from "./pages/MyRecipes";
import Login from "./components/Login";

export const publicRoutes = [
    {
        path: '/all-recipes',
        Component: AllRecipes,
        title: "Все рецепты", 
        icon: "fas fa-hamburger"      
    }
]

export const privateRoutes = [
    {
        path: '/my-recipes',
        Component: MyRecipes,
        title: "Мои рецепты",
        icon: "fas fa-clipboard-list"
    },
    {
        path: '/favourites',
        Component: Favourites,
        title: "Избранное",
        icon: "fa fa-bookmark"
    }
]

export const accounRoutes = [
    {
        path: '/login',
        Component: Login,
        icon: "fas fa-user"
    }
]
