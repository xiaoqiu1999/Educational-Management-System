<template>
    <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-login">
        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
            <div class="logo">
                <img src="../../assets/images/login/xiyouName.png" alt="" />
                <span>教学管理信息服务平台</span>
            </div>
            <vx-card>
                <div slot="no-body" class="full-page-bg-color">
                    <div class="vx-row no-gutter justify-center items-center">
                        <div class="vx-col hidden lg:block lg:w-1/2">
                            <img src="@/assets/images/pages/login.png" alt="login" class="mx-auto" />
                        </div>

                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
                            <div class="p-8 login-tabs-container">
                                <div class="flex flex-wrap justify-between mb-3">
                                    <div class="vx-card__title mb-4">
                                        <h4 class="mb-4 font-bold">用户登录</h4>
                                        <p>欢迎回来，请登录你的账户</p>
                                    </div>
                                    <div class="flex flex-wrap justify-between mb-3">
                                        <img src="../../assets/images/login/QRcode.gif" class="w-24 h-24" alt="" />
                                    </div>
                                </div>
                                <div>
                                    <vs-input
                                        name="user"
                                        icon-no-border
                                        icon="icon icon-user"
                                        icon-pack="feather"
                                        v-model="email"
                                        class="w-full"
                                    />

                                    <vs-input
                                        type="password"
                                        name="password"
                                        icon-no-border
                                        icon="icon icon-lock"
                                        icon-pack="feather"
                                        v-model="password"
                                        class="w-full mt-6"
                                    />

                                    <div class="flex flex-wrap justify-between my-5">
                                        <vs-checkbox v-model="checkbox_remember_me" class="mb-3">记住我</vs-checkbox>
                                        <router-link to="">忘记密码?</router-link>
                                    </div>
                                    <vs-button type="border" @click="register">注册</vs-button>
                                    <vs-button class="float-right" @click="login">登录</vs-button>

                                    <vs-divider>OR</vs-divider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </vx-card>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            checkbox_remember_me: true,
        };
    },
    methods: {
        login() {
            this.$router.push('/');
        },
    },
};
</script>

<style lang="scss">
#page-login {
    .logo {
        font: normal 24px/45px 'microsoft YaHei';
        color: #1069a4;
        padding-bottom: 8px;
        img {
            vertical-align: middle;
            margin-right: 10px;
        }
    }
    .social-login-buttons {
        .bg-facebook {
            background-color: #1551b1;
        }
        .bg-twitter {
            background-color: #00aaff;
        }
        .bg-google {
            background-color: #4285f4;
        }
        .bg-github {
            background-color: #333;
        }
    }
}
</style>
