<template>
    <div>
        <ExplorerOverviewSample :key="('ExplorerOverviewSampleContainer' + sampleKey)" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ExplorerOverviewSample from './ExplorerOverviewSample.vue';



export default {
    name: 'ExplorerOverviewSampleContainer',
    components: {
        ExplorerOverviewSample
    },
    data() {
        return {
            sampleKey: 1
        };
    },
    created() {
        this.getSamples().onUpdate(this.name, this.rerender);
    },
    methods: {
        rerender() {
            this.sampleKey++;
        }
    },
    computed: {
        ...mapGetters([
            'getSamples'
        ])
    }
}
</script>

<style scoped lang="scss">
@import './../style/variables.scss';


</style>
