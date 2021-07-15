<template>
    <div class="total">
        Total: {{total}}
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Total',
    computed: {
        ...mapGetters({
            total: 'getTotal',
        }),
    },
};
</script>
