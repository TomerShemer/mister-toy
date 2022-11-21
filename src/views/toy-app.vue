<template>
    <section class="toy-app">
        <h1>Toy App</h1>
        <button @click="goToEdit">Add a new toy</button>
        <toy-list @removeToy="removeToy" v-if="toys" :toys="toysToShow" />
    </section>
</template>

<script>
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
        }
    },
    computed: {
        toys() {
            return this.$store.getters.toys
        },
        toysToShow() {
            return this.toys
        }
    },
    components: {
        toyList
    }
}
</script>

<style lang="scss" scoped>

</style>