<template>
    <tr>
        <td>{{product.name}}</td>
        <td>{{product.price}}</td>
        <td>
            <v-text-field
                type="number"
                :min="0"
                :step="1"
                :value="product.num"
                @change="$emit('changeNum', product.name, $event)"
                @keypress="onlyNumberKeyPress"
                class="ma-2"
                hide-details
                solo
            ></v-text-field>
        </td>
    </tr>
</template>

<script>
export default {
    name: 'ProductRow',
    props: {
        product: {
            type: Object,
        },
    },
    methods: {
        onlyNumberKeyPress(keyEvent) {
            const { keyCode } = keyEvent;
            if (keyCode < 48 || keyCode > 57) {
                keyEvent.preventDefault();
            }
        },
    },
};
</script>
