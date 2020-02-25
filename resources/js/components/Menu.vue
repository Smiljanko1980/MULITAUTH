<template>
  <nav id="nav" class="navbar navbar-expand-md navbar-light navbar-laravel">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <!--UNLOGGED-->
          <li
            class="nav-item dropdown"
            v-if="!$auth.check()"
            v-for="(route, key) in routes.unlogged"
            v-bind:key="route.path"
          >
            <router-link class="nav-link" :to="{ name : route.path }" :key="key">{{route.name}}</router-link>
          </li>
          <!--LOGGED USER-->
          <li
            class="nav-item dropdown"
            v-if="$auth.check(1)"
            v-for="(route, key) in routes.user"
            v-bind:key="route.path"
          >
            <router-link class="nav-link" :to="{ name : route.path }" :key="key">{{route.name}}</router-link>
          </li>
          <!--LOGGED ADMIN-->
          <li
            class="nav-item dropdown"
            v-if="$auth.check(2)"
            v-for="(route, key) in routes.admin"
            v-bind:key="route.path"
          >
            <router-link class="nav-link" :to="{ name : route.path }" :key="key">{{route.name}}</router-link>
          </li>
          <!--LOGOUT-->
          <li class="nav-item" v-if="$auth.check()">
            <a href="#" class="nav-link" @click.prevent="$auth.logout()">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      routes: {
        // UNLOGGED
        unlogged: [
          {
            name: "Register",
            path: "register"
          },
          {
            name: "Login",
            path: "login"
          },
          {
            name: "Books",
            path: "/books"
          }
        ],

        // LOGGED USER
        user: [
          {
            name: "Dashboard",
            path: "dashboard"
          },
          {
            name: "Books",
            path: "books"
          }
        ],
        // LOGGED ADMIN
        admin: [
          {
            name: "Dashboard",
            path: "admin.dashboard"
          },
          {
            name: "Category",
            path: "category"
          },
          {
            name: "Author",
            path: "author"
          },
          {
            name: "User",
            path: "user"
          },
          {
            name: "Books",
            path: "books"
          },
          {
            name: "Borrows",
            path: "borrows"
          },
          {
            name: "Return",
            path: "return"
          }
        ]
      }
    };
  },
  mounted() {
    //
  }
};
</script>
