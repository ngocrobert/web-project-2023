<template>
    <div class="m-checkbox">
            <input type="checkbox" :id="checkId" :name="checkName">
            <label :for="checkId">{{ checkValue }}</label>
            <!-- <slot name="titleCheck"></slot> -->
    </div>
</template>

<script>
    export default {
        name: "MCheckbox",
        props: ['checkId', 'checkValue', 'checkName']
    }
</script>

<style scoped>

</style>