<template>
    <section class="toy-app">
        <h1>Toy App</h1>
        <button @click="goToEdit">Add a new toy</button>
        <toy-filter @setFilter="setFilter" />
        <toy-list @removeToy="removeToy" v-if="toys" :toys="toys" />
    </section>
</template>

<script>
import toyFilter from '../components/toy-filter.vue'
import toyList from '../components/toy-list.vue'
export default {
    name: 'toy-app',
    props: [],
    data() {
        return {
        }
    },
    created() { },
    methods: {
        goToEdit() {
            this.$router.push('/toy/edit')
        },
        removeToy(toyId) {
            this.$store.dispatch({ type: 'removeToy', toyId })
        },
        setFilter(filterBy) {
            // this.filterBy = filterBy
            this.$store.dispatch({ type: 'setFilter', filterBy })
        }
    },
    computed: {
        toys() {
            return this.$store.getters.toys
        },
    },
    components: {
        toyList,
        toyFilter
    }
}
</script>

<style lang="scss" scoped>

</style>