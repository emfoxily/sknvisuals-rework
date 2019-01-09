<template>
    <div>
        <mq-layout mq="sm">
            <header class="mobile-header">
                <img src="../assets/rainbowlogo.png" alt="sknvisuals" />

                <Camera />
            </header>
        </mq-layout>
    </div>
</template>

<script>
    import Camera from '../header/Camera.vue'
    
    export default {
        name: 'Header',
        components: {
            Camera
        }
    }
</script>

<style scope>
    header.mobile-header {
        margin: 30vw 0;
        z-index: -5;
    }
    header.mobile-header img {
        width: 100%;
    }
</style>

