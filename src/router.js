import HomeView from './views/HomeView';
import {createRouter, createWebHashHistory} from "vue-router";
import PostView from './views/PostView';
import AddPostView from './views/AddPostView';
const routes = [
    {
        name: 'Home',
        path: '/',
        component: HomeView
    },
    {
        name: 'Post',
        path: '/post/:rowKey',
        component: PostView
    },
    {
        name: 'AddPost',
        path: '/post/add',
        component: AddPostView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;