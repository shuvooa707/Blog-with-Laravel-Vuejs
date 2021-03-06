// Steps: Actions -> State -> Mutations -> Getters

export default {
    state: {
        categories: [],
        posts: [],
        blogPosts: [],
        post: [],
        latestPosts: [],
        sidebarCategories: [],
        serachPosts: []
    },
    getters: {
        getCategory(state) {
            return state.categories;
        },
        getPosts(state) {
            return state.posts;
        },
        getBlogPosts(state) {
            return state.blogPosts;
        },
        getSinglePost(state) {
            return state.post;
        },
        sidebarCategories(state) {
            return state.sidebarCategories;
        },
        getLatestPosts(state) {
            return state.latestPosts;
        },
        serachPosts(state) {
            return state.serachPosts;
        }
    },
    mutations: {
        getCategory(state, payload) {
            return (state.categories = payload);
        },
        getPosts(state, payload) {
            return (state.posts = payload);
        },
        getBlogPosts(state, payload) {
            return (state.blogPosts = payload);
        },
        getSinglePost(state, payload) {
            return (state.post = payload);
        },
        sidebarCategories(state, payload) {
            return (state.sidebarCategories = payload);
        },
        getLatestPosts(state, payload) {
            return (state.latestPosts = payload);
        },
        getPostsByCategory(state, payload) {
            return (state.blogPosts = payload);
        },
        searchPosts(state, payload) {
            return (state.serachPosts = payload);
        }
    },
    actions: {
        getCategory(context) {
            axios.get("/api/category").then(response => {
                //console.log(response);
                context.commit("getCategory", response.data.categories);
            });
        },
        getPosts(context) {
            axios.get("/api/post").then(response => {
                // console.log(response);
                context.commit("getPosts", response.data.posts);
            });
        },
        getBlogPosts(context) {
            axios.get("/public/blog").then(response => {
                // console.log(response);
                context.commit("getBlogPosts", response.data.posts);
            });
        },
        getSinglePost(context, id) {
            axios.get("/public/blog/" + id).then(response => {
                // console.log(response.data.post);
                context.commit("getSinglePost", response.data.post);
            });
        },
        sidebarCategories(context) {
            axios.get("/public/category").then(response => {
                context.commit("sidebarCategories", response.data.categories);
            });
        },
        getLatestPosts(context) {
            axios.get("/public/latestPosts").then(response => {
                context.commit("getLatestPosts", response.data.posts);
            });
        },
        getPostsByCategory(context, id) {
            axios.get("/public/category/" + id).then(response => {
                console.log(response.data.posts);
                context.commit("getPostsByCategory", response.data.posts);
            });
        },
        searchPosts(context, keyword) {
            axios.get("/public/search?s=" + keyword).then(response => {
                console.log(response.data.posts);
                context.commit("searchPosts", response.data.posts);
            });
        }
    }
};
