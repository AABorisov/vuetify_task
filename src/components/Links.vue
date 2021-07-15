<template>
    <div class="links mb-4">
        <router-link to="/products">Products</router-link>
        <router-link to="/total" class="ml-3">Total</router-link>
    </div>
</template>

<style lang="scss" scoped>
.links a {
    color: var(--link-color);

    &.router-link-active {
        color: var(--active-link-color);
    }
}
</style>
