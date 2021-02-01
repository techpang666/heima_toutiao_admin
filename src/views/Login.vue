<template>
	<div class="login">
		<div class="container">
			<img src="../assets/money.jpg" class="avatar" alt="" />
			<el-form
				:model="loginForm"
				:rules="rules"
				ref="loginForm"
				class="demo-ruleForm"
			>
				<el-form-item prop="username">
					<el-input
						@focus="handlerFocus('username')"
						prefix-icon="icon-user"
						placeholder="请输入用户名"
						v-model="loginForm.username"
					></el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input
						@focus="handlerFocus('password')"
						prefix-icon="icon-key"
						placeholder="请输入密码"
						v-model="loginForm.password"
					></el-input>
				</el-form-item>
				<el-button type="primary" class="login-btn" @click="login"
					>登陆</el-button
				>
			</el-form>
		</div>
	</div>
</template>

<script>
// 引入登录方法
import { login } from '@/apis/user';
// 引入Message组件
import { Message } from 'element-ui';

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
					// { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' },
				],
				password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
			},
		};
	},
	methods: {
		// 发起登录请求(async await)
		login() {
			// 通过validate方法验证是否成功及未通过验证的字段
			// async要在await的直接父级函数中
			this.$refs.loginForm.validate(async (valid, obj) => {
				console.log(valid, obj);
				if (valid) {
					// 上面的login是点击事件调用的方法
					// 这个login是axios的login方法
					let res = await login(this.loginForm);
					console.log(res);
					// 对登录数据进行相关提示
					if (res.data.statusCode == 401) {
						Message({
							message: res.data.message,
							type: 'warning',
						});
					} else {
						Message({
							message: res.data.message,
							type: 'success',
						});
					}
				} else {
					// alert('数据不合法');
					Message({
						message: '数据不合法',
						type: 'warning',
					});
					// 养成好习惯 不然如果后面还有请求 会照发不误
					return false;
				}
			});
		},
		// 处理输入框的焦点事件
		handlerFocus(propName) {
			// 移出表单项的验证结果(clearValidate)
			// 如果不传参会移出整个表单结果(propName)
			this.$refs.loginForm.clearValidate(propName);
		},
	},
};
</script>

<style lang="less" scoped>
.login {
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: #2f4050;

	.container {
		position: absolute;
		left: 0;
		right: 0;
		width: 400px;
		padding: 0px 40px 15px 40px;
		margin: 200px auto;
		background: white;
		.avatar {
			position: relative;
			left: 50%;
			width: 120px;
			height: 120px;
			margin-left: -60px;
			margin-top: -60px;
			box-sizing: border-box;
			border-radius: 50%;
			border: 10px solid #fff;
			box-shadow: 0 1px 5px #ccc;
			overflow: hidden;
		}
		.login-btn {
			width: 100%;
		}
	}
}
</style>
