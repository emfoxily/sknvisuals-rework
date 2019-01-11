<template>
    <div>
        <mq-layout mq="md+">
            <div class="row">
                <div class="column">
                    <img src="../cosplay/groupshot1.png" alt=" group shot" />
                    <img src="../cosplay/camie1.png" alt="camie" />
                    <img src="../cosplay/ochaco1.png" alt="ochaco" />
                    <img src="../cosplay/toga2.png" alt="toga" />
                    <img src="../cosplay/togaochaco3.png" alt="toga and ochaco" />
                </div>
    
                <div class="column">
                    <img src="../cosplay/ochacomain.png" alt="group shot" />
                    <img src="../cosplay/ochaco5.png" alt="ochaco" />
                    <img src="../cosplay/mera1.png" alt="mera" />
                    <img src="../cosplay/mera4.png" alt="mera" />
                    <img src="../cosplay/mera6.png" alt="mera" />
                </div>
            </div>
        </mq-layout>
        <mq-layout mq="sm">
            <img src="../cosplay/groupshot1.png" alt=" group shot" />
            <img src="../cosplay/camie1.png" alt="camie" />
            <img src="../cosplay/ochaco1.png" alt="ochaco" />
            <img src="../cosplay/toga2.png" alt="toga" />
            <img src="../cosplay/togaochaco3.png" alt="toga and ochaco" />
            <img src="../cosplay/ochacomain.png" alt="group shot" />
            <img src="../cosplay/ochaco5.png" alt="ochaco" />
            <img src="../cosplay/mera1.png" alt="mera" />
            <img src="../cosplay/mera4.png" alt="mera" />
            <img src="../cosplay/mera6.png" alt="mera" />
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
        margin-top: -20vw;
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


