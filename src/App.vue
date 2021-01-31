<template>
	<div id="app">
		<!-- `keep-alive`实现页面缓存 路由切换时 页面保存原始状态 -->
		<!-- 无特殊情况 都是添加`router-view` -->
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
export default {};
</script>

<style lang="less"></style>
