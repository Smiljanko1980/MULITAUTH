<template>
  <div>
    <section class="content">
      <div class="row justify-content-center">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Book List</h3>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <table id="example2" class="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>SN.</th>
                    <th>Book Title</th>
                    <th>Author Name</th>
                    <th>Category Name</th>
                    <th>ISBN</th>
                    <th>Publication Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(result,index, i) in printMyBook" :key="i">
                    <td>{{index+1}}</td>
                    <td>{{result.title|sortlenght(10,"..")}}</td>
                    <td>{{result.author.name}}</td>
                    <td>{{result.category.name}}</td>
                    <td>{{result.isbn}}</td>
                    <td>{{result.date_of_publication|timeFormat}}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th>SN.</th>
                    <th>Book Title</th>
                    <th>Author Name</th>
                    <th>Category Name</th>
                    <th>ISBN</th>
                    <th>Publication Date</th>
                  </tr>
                </tfoot>
              </table>
            </div>
            <!-- /.card-body -->
          </div>
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>
  </div>
</template>

<script>
export default {
  name: "index",

  mounted() {
    this.$store.dispatch("hitActionBook");
  },
  computed: {
    printMyBook() {
      return this.$store.getters.book;
    }
  },
  methods: {
    Book(id) {
      Swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "No, cancel!",
        cancelButtonColor: "#d33",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.dismiss === Swal.DismissReason.cancel) {
        } else {
          axios.get("/delete/" + id).then(() => {
            this.$store.dispatch("hitActionBook");
            if (result.value) {
              Swal("Deleted!", "Your book has been deleted.", "success");
            }
          });
        }
      });
    }
  }
};
</script>

<style scoped>
</style>
