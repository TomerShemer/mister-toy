<template>
    <section v-if="toy" class="toy-details">
        <button @click="goBack">Go back</button>
        <h1>Toy Details</h1>
        <small>ID: {{ toy._id }}</small>
        <p>Name: {{ toy.name }}</p>
        <p>Price: {{ toy.price }}</p>
        <p>Labels: {{ toy.labels }}</p>
        <p>Created: {{ getDate }}</p>
    </section>
</template>

<script>
import toyService from '../services/toy.service';

export default {
    name: 'toy-details',
    data() {
        return {
            toy: null
        }
    },
    created() {
        const { id } = this.$route.params
        toyService.getById(id).then(toy => {
            this.toy = toy
        })
    },
    computed: {
        getDate() {
            const d = new Date(this.toy.createdAt)
            return d.toLocaleDateString('he-IL')
        }
    },
    methods: {
        goBack() {
            this.$router.push('/toy')
        }
    }
}
</script>
