<template>
    <div class="products">
        <v-simple-table>
            <template v-slot:default>
                <tbody>
                <product-row
                    v-for="product in products"
                    :key="product.name"
                    :product="product"
                    @changeNum="onUpdateNum"
                />
                </tbody>
            </template>
        </v-simple-table>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ProductRow from '@/components/ProductRow.vue';

export default {
    name: 'ProductsTable',
    components: { ProductRow },
    computed: {
        ...mapGetters({
            products: 'getProducts',
        }),
    },
    methods: {
        ...mapActions([
            'setProductNum',
        ]),
        onUpdateNum(name, eventNum) {
            let newNum = Number.parseInt(eventNum, 10);
            if (Number.isNaN(newNum)) {
                newNum = 0;
            } else if (newNum < 0) {
                newNum *= -1;
            }
            this.setProductNum({ name, num: newNum });
        },
    },
};
</script>
