<template>
	<div class="index">
		<el-container>
			<el-aside width="200px">Aside</el-aside>
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
