<template>
	<div class="index">
		<el-container>
			<el-aside width="200px">
				<el-menu
					default-active="2"
					class="el-menu-vertical-demo"
					background-color="#545c64"
					text-color="#fff"
					active-text-color="#ffd04b"
					:unique-opened="true"
					:router="true"
				>
					<!-- 用户管理 -->
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>用户管理</span>
						</template>
						<el-menu-item index="1-1">
							<i class="el-icon-user"></i>
							<span>用户列表</span>
						</el-menu-item>
					</el-submenu>
					<!-- 文章管理 -->
					<el-submenu index="2">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>文章管理</span>
						</template>
						<el-menu-item index="2-1">
							<i class="el-icon-user"></i>
							<span>文章列表</span>
						</el-menu-item>
						<el-menu-item index="2-2">
							<i class="el-icon-user"></i>
							<span>文章发布</span>
						</el-menu-item>
					</el-submenu>
					<!-- 栏目管理 -->
					<el-submenu index="3">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>栏目管理</span>
						</template>
						<el-menu-item index="3-1">
							<i class="el-icon-user"></i>
							<span>栏目列表</span>
						</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-aside>
			<el-container>
				<el-header>Header</el-header>
				<el-main>Main</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.index {
	height: 100%;

	.el-menu-admin:not(.el-menu--collapse) {
		width: 200px;
		min-height: 400px;
	}
	.el-container {
		height: 100%;
	}
	.el-aside {
		background-color: #545c64;
	}
	.el-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #545c64;
	}
	.logo {
		height: 60px;
		background: url(../assets/logo.png);
		background-size: cover;
		background-color: #fff;
	}
	.toggle-btn {
		padding: 0 15px;
		margin-left: -20px;
		font-size: 36px;
		color: white;
		cursor: pointer;
		line-height: 60px;
		&:hover {
			background-color: #4292cf;
		}
	}
	.system-title {
		font-size: 28px;
		color: white;
	}
	.welcome {
		color: white;
	}
}
</style>
