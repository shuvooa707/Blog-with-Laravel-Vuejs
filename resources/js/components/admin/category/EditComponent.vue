<template>
    <div class="container-fluid mt-5">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Edit Category</h3>
                    </div>
                    <!-- /.card-header -->
                    <!-- form start -->
                    <form @submit.prevent="updateCategory">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="exampleInputEmail1"
                                    >Category Name</label
                                >
                                <input
                                    type="text"
                                    name="name"
                                    class="form-control"
                                    placeholder="Enter Category Name"
                                    v-model="form.name"
                                    :class="{
                                        'is-invalid': form.errors.has('name')
                                    }"
                                />
                                <has-error
                                    :form="form"
                                    field="name"
                                ></has-error>
                            </div>
                        </div>
                        <!-- /.card-body -->

                        <div class="card-footer">
                            <button type="submit" class="btn btn-primary">
                                Update
                            </button>
                        </div>
                    </form>
                </div>
                <!-- /.card -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: new Form({
                name: ""
            })
        };
    },
    mounted() {
        axios
            .get(`/api/category/${this.$route.params.id}/edit`)
            .then(response => {
                this.form.fill(response.data.category);
            });
    },
    methods: {
        updateCategory() {
            this.form
                .put(`/api/category/${this.$route.params.id}`, this.form)
                .then(result => {
                    this.form.name = "";
                    this.$router.push("/category");
                    Toast.fire({
                        icon: "success",
                        title: "Category Updated Successfully"
                    });
                })
                .catch(err => {
                    Toast.fire({
                        icon: "error",
                        title: "Category Not Updated"
                    });
                });
        }
    }
};
</script>

<style scoped></style>
