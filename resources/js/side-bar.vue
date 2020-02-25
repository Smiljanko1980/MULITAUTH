<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="info">
          <h3>
            <a href="#" class="d-block">Book Store</a>
          </h3>
          <!--   <a v-if="$auth.check()" href="#" class="d-block">User : {{ data.users }}</a> -->
          <!--
                        <a href="#" class="d-block"> User :  {{ Auth::user()->name }}</a>
                        <a href="#" class="d-block"> Role :  {{ Auth::user()->role }}</a>
          -->
          <hr />
          <li v-if="!$auth.check()" v-for="(route, key) in routes.unlogged" v-bind:key="route.path">
            <router-link :to="{ name : route.path }" :key="key">{{route.name}}</router-link>
          </li>
          <div v-if="$auth.check()">
              <a href="#" class="d-block">User :</a>
            <a href="#" @click.prevent="$auth.logout()">Logout</a>


          </div>
        </div>
      </div>

      <div v-if="!$auth.check()">
        <nav class="mt-2">
          <ul
            class="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li class="nav-item has-treeview">
              <router-link to="/books" class="nav-link">
                <i class="nav-icon fa fa-dashboard"></i>
                <p>
                  Books
                  <i class="right fa fa-angle-left"></i>
                </p>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>

      <div v-if="$auth.check(1)">
        <nav class="mt-2">
          <ul
            class="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li class="nav-item has-treeview">
              <router-link to="/books" class="nav-link">
                <i class="nav-icon fa fa-dashboard"></i>
                <p>
                  Books
                  <i class="right fa fa-angle-left"></i>
                </p>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>

      <div v-if="$auth.check(2)">
        <nav class="mt-2">
          <ul
            class="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <!-- Add icons to the links using the .nav-icon class
            with font-awesome or any other icon font library-->
            <li class="nav-item has-treeview">
              <router-link to="/" class="nav-link">
                <i class="nav-icon fa fa-dashboard"></i>
                <p>
                  Dashboard
                  <i class="right fa fa-angle-left"></i>
                </p>
              </router-link>
            </li>
            <li class="nav-item has-treeview">
              <router-link to="/category" class="nav-link">
                <i class="nav-icon fa fa-dashboard"></i>
                <p>
                  Category
                  <i class="right fa fa-angle-left"></i>
                </p>
              </router-link>
            </li>
            <li class="nav-item has-treeview">
              <router-link to="/author" class="nav-link">
                <i class="nav-icon fa fa-dashboard"></i>
                <p>
                  Author
                  <i class="right fa fa-angle-left"></i>
                </p>
              </router-link>
            </li>
            <li class="nav-item has-treeview">
              <router-link to="/user" class="nav-link">
                <i class="nav-icon fa fa-dashboard"></i>
                <p>
                  User
                  <i class="right fa fa-angle-left"></i>
                </p>
              </router-link>
            </li>
            <li class="nav-item has-treeview">
              <router-link to="/books" class="nav-link">
                <i class="nav-icon fa fa-dashboard"></i>
                <p>
                  Book
                  <i class="right fa fa-angle-left"></i>
                </p>
              </router-link>
            </li>
            <li class="nav-item has-treeview">
              <router-link to="/borrows" class="nav-link">
                <i class="nav-icon fa fa-dashboard"></i>
                <p>
                  Borrow
                  <i class="right fa fa-angle-left"></i>
                </p>
              </router-link>
            </li>
            <li class="nav-item has-treeview">
              <router-link to="/return" class="nav-link">
                <i class="nav-icon fa fa-dashboard"></i>
                <p>
                  Return
                  <i class="right fa fa-angle-left"></i>
                </p>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
      <!-- Sidebar Menu -->

      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {
  data() {
    return {
      has_error: false,
      users: null,
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
          }
        ]
      }
    };
  },

  mounted() {
    this.getUsers();
  },

  methods: {
    getUsers() {
      this.$http({
        url: `users`,
        method: "GET"
      }).then(
        res => {
          this.users = res.data.users;
        },
        () => {
          this.has_error = true;
        }
      );
    }
  }
};
</script>
