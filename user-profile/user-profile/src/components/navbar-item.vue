<template>
    <div>
        <v-navigation-drawer
        class="grey darken-4"
        dark
        permanent
        absolute
        expand-on-hover
        right
        >
            <v-list>
                <v-list-item class="px-2">
                    <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
                    </v-list-item-avatar>
                </v-list-item>

                <v-list-item link>
                    <v-list-item-content>
                        <v-list-item-title 
                            class="text-h6 white--text">
                            Sandra Adams
                        </v-list-item-title>
                        <v-list-item-subtitle
                            class="white--text">
                            sandra_a88@gmail.com
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list nav
            dense
            >
                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-monitor-dashboard</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>داشبورد</v-list-item-title>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-account-edit-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>ویرایش پروفایل</v-list-item-title>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-bookmark-multiple</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>نشانک ها</v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-form-select</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>ثبت آگهی</v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-arrow-u-up-right-bold</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>ارتقای حساب</v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-ticket-confirmation-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>ارسال تیکت</v-list-item-title>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list>
                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-exit-to-app</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>خروج</v-list-item-title>
                </v-list-item>
                <!-- fix this light mode -->
                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-brightness-4</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>light mode</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: 'navbar-item',
}
</script>