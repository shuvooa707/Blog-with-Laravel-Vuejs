<template>
    <span>
        <section id="inner-headline">
            <div class="container">
                <div class="row">
                    <div class="span4">
                        <div class="inner-heading">
                            <h2>Blog Search Result for {{ this.keyword }}</h2>
                        </div>
                    </div>
                    <div class="span8">
                        <ul class="breadcrumb">
                            <li>
                                <a href="#"><i class="icon-home"></i></a
                                ><i class="icon-angle-right"></i>
                            </li>
                            <li>
                                <a href="#">Blog</a
                                ><i class="icon-angle-right"></i>
                            </li>
                            <li class="active">
                                Blog Search Result
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section id="content">
            <div class="container">
                <div class="row">
                    <div class="span8">
                        <article v-for="post in searchPosts" :key="post.id">
                            <div class="row">
                                <div class="span8">
                                    <div class="post-image">
                                        <div class="post-heading">
                                            <h3>
                                                <router-link
                                                    :to="`/blog/${post.id}`"
                                                    >{{
                                                        post.title
                                                    }}</router-link
                                                >
                                            </h3>
                                        </div>
                                        <img
                                            :src="postPhoto(post.photo)"
                                            alt=""
                                        />
                                    </div>
                                    <p>
                                        {{
                                            post.description | shortLength(500)
                                        }}
                                    </p>
                                    <div class="bottom-article">
                                        <ul class="meta-post">
                                            <li>
                                                <i class="icon-calendar"></i
                                                ><a href="#">
                                                    {{
                                                        post.created_at
                                                            | dateFormat
                                                    }}</a
                                                >
                                            </li>
                                            <li>
                                                <i class="icon-user"></i
                                                ><a href="#">
                                                    {{ post.user.name }}</a
                                                >
                                            </li>
                                            <li>
                                                <i class="icon-folder-open"></i
                                                ><a href="#">
                                                    {{ post.category.name }}</a
                                                >
                                            </li>
                                            <li>
                                                <i class="icon-comments"></i
                                                ><a href="#">4 Comments</a>
                                            </li>
                                        </ul>
                                        <router-link
                                            :to="`/blog/${post.id}`"
                                            class="pull-right"
                                            >Continue reading
                                            <i class="icon-angle-right"></i
                                        ></router-link>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <div id="pagination">
                            <span class="all">Page 1 of 3</span>
                            <span class="current">1</span>
                            <a href="#" class="inactive">2</a>
                            <a href="#" class="inactive">3</a>
                        </div>
                    </div>
                    <BlogSidebar></BlogSidebar>
                </div>
            </div>
        </section>
    </span>
</template>

<script>
import BlogSidebar from "./BlogSidebarComponent";
export default {
    data() {
        return {
            keyword: ""
        };
    },
    components: {
        BlogSidebar
    },
    mounted() {
        this.keyword = this.$route.query.keyword;
    },
    created() {},
    computed: {
        searchPosts() {
            return this.$store.getters.serachPosts;
        }
    },
    methods: {
        postPhoto(img) {
            return "/upload/" + img;
        }
    },
    watch: {
        $route(to, from) {
            this.keyword = this.$route.query.keyword;
        }
    }
};
</script>

<style></style>
