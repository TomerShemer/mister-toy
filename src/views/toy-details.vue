<template>
    <section v-if="toy" class="toy-details">
        <section class="toy-info">
            <button @click="goBack">Go back</button>
            <h1>Toy Details</h1>
            <small>ID: {{ toy._id }}</small>
            <p>Name: {{ toy.name }}</p>
            <p>Price: {{ toy.price }}</p>
            <p>Labels: {{ getLabels }}</p>
            <p>Created: {{ getDate }}</p>
        </section>
        <section class="toy-reviews">
            <h2>Toy reviews</h2>
            <review-list :reviews="this.toy.reviews" />
        </section>
    </section>
</template>

<script>
import toyService from '../services/toy.service';
import reviewList from '../components/review-list.vue';

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
            console.log(toy);
        })
    },
    computed: {
        getDate() {
            const d = new Date(this.toy.createdAt)
            return d.toLocaleDateString('he-IL')
        },
        getLabels() {
            return this.toy.labels.map(label => label).join(', ')
        }
    },
    methods: {
        goBack() {
            this.$router.push('/toy')
        }
    },
    components: {
        reviewList
    }
}
</script>
