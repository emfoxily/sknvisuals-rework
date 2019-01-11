<template>
    <div>
        <mq-layout mq="sm">
            <img src="../misc/heather.jpg" alt="heather" />
            <img src="../misc/tyler.jpg" alt="tyler" />
            <img src="../misc/tylerheather.jpg" alt="tyler and heather" /></mq-layout>
        <mq-layout mq="md+">
            <div class="row">
                <div class="column">
                    <img src="../misc/heather.jpg" alt="heather" />
                    <img src="../misc/tyler.jpg" alt="tyler" />
                    <img src="../misc/tylerheather.jpg" alt="tyler and heather" /></div>
            </div>
        </mq-layout>
    </div>
</template>

<script>
    export default {
        name: 'Images',
    }
</script>

<style>
    .row {
        display: flex;
        flex-wrap: wrap;
        padding: 0 4px;
        justify-content: center;
    }
    
    .column {
        flex: 25%;
        max-width: 25%;
        padding: 0 .5em;
    }
    
    .column img {
        margin-top: 8px;
        vertical-align: middle;
        width: 100%;
        border: .3em solid #000;
    }
</style>
