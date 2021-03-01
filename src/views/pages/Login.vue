<template>
    <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-login">
        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
            <vx-card>
                <div slot="no-body" class="full-page-bg-color">
                    <div class="vx-row no-gutter justify-center items-center">
                        <div class="vx-col hidden lg:block lg:w-1/2">
                            <img src="@/assets/images/pages/login.png" alt="login" class="mx-auto" />
                        </div>

                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
                            <div class="p-8 login-tabs-container">
                                <div class="vx-card__title mb-4">
                                    <h4 class="mb-4">用户登录</h4>
                                    <p>欢迎回来，请登录你的账户</p>
                                </div>

                                <div>
                                    <vs-input
                                        name="email"
                                        icon-no-border
                                        icon="icon icon-user"
                                        icon-pack="feather"
                                        label-placeholder="Email"
                                        v-model="email"
                                        class="w-full"
                                    />

                                    <vs-input
                                        type="password"
                                        name="password"
                                        icon-no-border
                                        icon="icon icon-lock"
                                        icon-pack="feather"
                                        label-placeholder="Password"
                                        v-model="password"
                                        class="w-full mt-6"
                                    />

                                    <div class="flex flex-wrap justify-between my-5">
                                        <vs-checkbox v-model="checkbox_remember_me" class="mb-3"
                                            >Remember Me</vs-checkbox
                                        >
                                        <router-link to="">忘记密码?</router-link>
                                    </div>
                                    <vs-button type="border" @click="login">Register</vs-button>
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
            checkbox_remember_me: false,
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
