<template>
	<div class="login">
		<el-form
			:model="loginForm"
			:rules="rules"
			ref="ruleForm"
			class="demo-ruleForm"
		>
			<el-form-item prop="username">
				<el-input
					prefix-icon="icon-user"
					placeholder="请输入用户名"
					v-model="loginForm.username"
				></el-input>
			</el-form-item>
			<el-form-item prop="password">
				<el-input
					prefix-icon="icon-key"
					placeholder="请输入密码"
					v-model="loginForm.password"
				></el-input>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			// 表单绑定登录数据对象(:model)
			// 输入框绑定对应的数据(v-model)
			loginForm: {
				username: '',
				password: '',
			},
			// 表单绑定规则对象(:rules)
			// 表单项绑定对应的规则(prop)
			rules: {
				username: [
					// 必填项 提示信息 触发器
					{ required: true, message: '请输入用户名', trigger: 'blur' },
					{ min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' },
				],
				password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
			},
		};
	},
};
</script>

<style lang="less" scoped></style>
