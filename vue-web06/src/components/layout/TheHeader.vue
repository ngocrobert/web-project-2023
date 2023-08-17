<template>
   <div class="header">
        <div class="header__left">
            <div class="toggle"></div>
            <div class="logo"></div>
        </div>
        <div class="header__right">
            <div class="right-branch flex">
                <div class="mi mi-24 mi-three-stripes"></div>
                <div class="header-branch">
                    <div class="branch-title">{{ this.$resource['layout']['BranchTitle'] }}</div>
                    <div class="branch-icon mi mi-16 mi-arrow-down"></div>
                </div>
            </div>
            <div class="right-account flex">
                <div class="notify mi mi-24 mi-bell__nav"></div>
                <div class="account-info">
                    <div class="user-ava"></div>
                    <div class="user-name">
                        <div class="display-name">{{ this.$resource['layout']['DisplayName'] }}</div>
                    </div>
                    <div class="mi mi-16 mi-arrow-down"></div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TheHeader",
    }
</script>

<style scoped>

</style>