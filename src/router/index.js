
// 安装路由
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 配置路由
const router = new VueRouter({
	routes: [
		{
			name: 'login',
			path: '/login',
			component: () => import('@/views/Login.vue'),
		},
		{
			name: 'index',
			path: '/index',
			component: () => import('@/views/index.vue'),
		},
	],
});

// 配置导航守卫
router.beforeEach((to, from, next) => {
	if (to.path === '/login') {
		next();
	} else {
		let token = localStorage.getItem('heima_toutiao_admin_token');
		if (token) {
			next();
		} else {
			next({ path: '/login' });
		}
	}
});

// 暴露路由
export default router;
