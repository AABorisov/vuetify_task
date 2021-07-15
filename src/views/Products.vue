<template>
    <div class="products-page">
        <products-table />
    </div>
</template>
<script>
import ProductsTable from '@/components/ProductsTable.vue';

export default {
    name: 'ProductsPage',
    components: { ProductsTable },
};
</script>
