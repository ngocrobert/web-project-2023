<template>
    <div class="loading">
        <div class="loading-wrapper">
            <div class="loading__icon"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MLoading',
    }
</script>

<style scoped>
    .loading {
        position: fixed;
        display: grid;
        place-items: center;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #00000025;
        z-index: 13;
    }
    .loading-wrapper {
       width: 100px;
       height: 100px;
       /* background-color: #000; */
       /* border-radius: 50%;
       border: 4px solid #000;
       border-top: 4px solid #fff;
       animation: spin 1s linear infinite; */
       background: transparent url(../../assets/img/Spin-1s-100px.svg) no-repeat;
    }

    @keyframes spin {
        0% { transform: rotate(0deg);}
        100% { transform: rotate(360deg);}
    }

</style>