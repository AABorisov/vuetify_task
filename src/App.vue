<template>
<v-app>
    <v-container>
        <v-row justify="center">
            <v-col
                cols="6"
                class="py-12"
            >
                <links />
                <div class="views">
                    <router-view />
                </div>
            </v-col>
        </v-row>
    </v-container>
</v-app>
</template>
<script>
import Links from '@/components/Links.vue';

export default {
    components: { Links },
};
</script>
