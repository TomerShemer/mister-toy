<template>
    <section class="toy-list">
        <h1>Toy list</h1>
        <ul class="toy-list-ul">
            <toy-preview @removeToy="removeToy" v-for="toy in toys" :toy="toy" :key="toy._id" />
        </ul>
    </section>
</template>

<script>
import toyPreview from './toy-preview.vue'

export default {
    props: {
        toys: {
            type: Array,
            required: true
        }
    },
    components: {
        toyPreview
    },
    methods: {
        removeToy(toyId) {
            this.$emit('removeToy', toyId)
        }
    },
    created() {
        console.log(this.toys);
    }
}
</script>

<style scoped>
.toy-list-ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}
</style>