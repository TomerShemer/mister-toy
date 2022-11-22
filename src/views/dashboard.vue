<template>
    <section v-if="toys" class="dashboard-page">
        <h1>Dashboard</h1>
        <section class="average-per-label">
            <label>Average price per label ($)</label>
            <doughnut-chart :testData="testDataAvg" />
        </section>
        <section class="inventory-per-label">
            <label>Toys in stock by label (%)</label>
            <doughnut-chart :testData="testDataStock" />
        </section>
    </section>
</template>

<script>
import doughnutChart from '../components/doughnut-chart.vue';
export default {
    data() {
        return {
            labelColors: ['#2146C7', '#77D970', '#FF8D29', '#FFD6EC', '#FFCD38', '#30E3CA', '#8E9FE6', '#A2D5F2']
        }
    },
    created() {
        this.$store.dispatch({ type: 'loadToys' })
    },
    computed: {
        toys() {
            return this.$store.getters.toys
        },
        testDataAvg() {
            return {
                labels: this.$store.getters.getLabels,
                datasets: [
                    {
                        data: this.$store.getters.getPricePerLabel,
                        backgroundColor: this.labelColors,
                    },
                ],
            }
        },
        testDataStock() {
            return {
                labels: this.$store.getters.getLabels,
                datasets: [
                    {
                        data: this.$store.getters.getToysInStockByLabel,
                        backgroundColor: this.labelColors,
                    },
                ],
            }
        }
    },
    components: {
        doughnutChart
    }
}
</script>

<style lang="scss" scoped>

</style>