<template>
    <div class="sidebar">
        <div class="nav">
            <router-link to="/" class="nav-item">
                <div class="nav__icon mi mi-sidebar-dashboard"></div>
                <div class="nav__text">{{ this.$resource['layout']['NavDashBoard'] }}</div>
            </router-link>
            <router-link to="/employee" class="nav-item">
                <div class="nav__icon mi mi-sidebar-cash"></div>
                <div class="nav__text">{{ this.$resource['layout']['NavCash'] }}</div>
            </router-link>
            <router-link to="/customer" class="nav-item">
                <div class="nav__icon mi mi-sidebar-bank"></div>
                <div class="nav__text">{{ this.$resource['layout']['NavBank'] }}</div>

            </router-link>
            <router-link to="/report" class="nav-item">
                <div class="nav__icon mi mi-sidebar-pu"></div>
                <div class="nav__text">{{ this.$resource['layout']['NavPU'] }}</div>

            </router-link>
            <div class="nav-item">
                <div class="nav__icon mi mi-sidebar-sale"></div>
                <div class="nav__text">{{ this.$resource['layout']['NavSale'] }}</div>
            </div>
            <div class="nav-item">
                <div class="nav__icon mi mi-sidebar-invoice"></div>
                <div class="nav__text">{{ this.$resource['layout']['NavInvoice'] }}</div>

            </div>
            <div class="nav-item">
                <div class="nav__icon mi mi-sidebar-stock"></div>
                <div class="nav__text">{{ this.$resource['layout']['NavStock'] }}</div>

            </div>
        </div>
        <div class="nav-action">
            <div class="nav-item">
                <div class="nav__icon mi-sidebar-action"></div>
                <div class="nav__text">{{ this.$resource['layout']['NavAction'] }}</div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TheMenu",
    }
</script>

<style scoped>

</style>