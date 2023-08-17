<template>
        <!-- <div class="m-row"> -->
            <button 
                class="m-btn"
                :disabled="disabled"
            >
                <div class="m-btn__text">
                   <slot></slot>
                </div>
                <!-- <slot ></slot> -->
            </button>
        <!-- </div> -->
</template>

<script>
export default {
    name: 'MButton',
    //props: ["btnIcon"],
    props: {
        disabled: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            
        }
    },

}
</script>

<style scoped>

</style>