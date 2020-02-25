import VueRouter from "vue-router";

// Pages
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/user/Dashboard";
import AdminDashboard from './components/admin/dashboard.vue'

import categoryIndex from "./components/category/index";
import createCategory from "./components/category/create";
import CatEdit from "./components/category/edit";

//author
import authorIndex from "./components/author/index";
import createAuthor from "./components/author/create";
import AuthorEdit from "./components/author/edit";

//user
import userIndex from "./components/user/index";
import addUser from "./components/user/create";
import UserEdit from "./components/user/edit";

//books
import bookIndex from "./components/book/index";
import bookGuestIndex from "./components/book/guest-index.vue";
import bookMemberIndex from "./components/book/member-index.vue";
import addBook from "./components/book/create";
import BookEdit from "./components/book/edit";

//Borrows
import borrowIndex from "./components/borrow/index";
import addBorrow from "./components/borrow/create";
import editBorrow from "./components/borrow/edit";

//Return
import returnIndex from "./components/return/index";

// Routes
const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        meta: {
            auth: undefined
        }
    },
    {
        path: "/register",
        name: "register",
        component: Register,
        meta: {
            auth: false
        }
    },
    {
        path: "/login",
        name: "login",
        component: Login,
        meta: {
            auth: false
        }
    },
    // USER ROUTES
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
        meta: {
            auth: true
        }
    },
    // ADMIN ROUTES
    {
        path: "/admin",
        name: "admin.dashboard",
        component: AdminDashboard,
        meta: {
            auth: {
                roles: 2,
                redirect: { name: "login" },
                forbiddenRedirect: "/403"
            }
        }
    },
    //category
    {
        path: "/category",
        component: categoryIndex,
        meta: {
            auth: {
                roles: 2,
                redirect: { name: "login" },
                forbiddenRedirect: "/403"
            }
        }},
    {
        path: "/create-category",
        component: createCategory,
        meta: {
            auth: {
                roles: 2,
                redirect: { name: "login" },
                forbiddenRedirect: "/403"
            }
        }
    },
    {
        path: "/cat-edit/:id",
        component: CatEdit,
        meta: {
            auth: {
                roles: 2,
                redirect: { name: "login" },
                forbiddenRedirect: "/403"
            }
        }
    },

    //author
    {
        path: "/author",
        component: authorIndex,
        meta: {
            auth: {
                roles: 2,
                redirect: { name: "login" },
                forbiddenRedirect: "/403"
            }
        }
    },
    {
        path: "/add-author",
        component: createAuthor.AdminDashboard,
        meta: {
            auth: {
                roles: 2,
                redirect: { name: "login" },
                forbiddenRedirect: "/403"
            }
        }
    },
    {
        path: "/author-edit/:id",
        component: AuthorEdit,
        meta: {
            auth: {
                roles: 2,
                redirect: { name: "login" },
                forbiddenRedirect: "/403"
            }
        }
    },

    //user
    {
        path: "/user",
        component: userIndex,
        meta: {
            auth: {
                roles: 2,
                redirect: { name: "login" },
                forbiddenRedirect: "/403"
            }
        }
    },
    {
        path: "/add-user",
        component: addUser,
        meta: {
            auth: {
                roles: 2,
                redirect: { name: "login" },
                forbiddenRedirect: "/403"
            }
        }
    },
    {
        path: "/user-edit/:id",
        component: UserEdit
    },

    //books
    {
        path: "/books",
        component: bookIndex
    },
    {
        path: "/books-guest",
        component: bookGuestIndex
    },
    {
        path: "/books-member",
        component: bookMemberIndex
    },
    {
        path: "/add-book",
        component: addBook
    },
    {
        path: "/book-edit/:id",
        component: BookEdit
    },

    //Borrow
    {
        path: "/borrows",
        component: borrowIndex
    },
    {
        path: "/add-borrow",
        component: addBorrow
    },
    {
        path: "/borrow-edit/:id",
        component: editBorrow
    },

    //return
    {
        path: "/return",
        component: returnIndex
    }
];

 const router = new VueRouter({
    history: true,
    mode: "history",
    routes
});

export default router;
