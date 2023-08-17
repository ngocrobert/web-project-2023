<template>
    <div class="m-row">
        <div class="m-toast-box">
            <div class="m-toast-item">
                <div class="m-toast-icon">
                    <slot name="toast-icon"></slot>
                </div>
                <div class="m-toast-text">
                    <span 
                        :class="toastClass"
                    >{{ toastTitle }}! </span>
                    <slot name="toast-text"></slot>
                </div>
                <div class="m-toast-close">
                    <i class="fas fa-times" style="color: #898d94;"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MToast',
        props: ['toastClass', 'toastTitle'],
        data() {
            return {
            }
        },
        
    }
</script>

<style scoped>

</style>