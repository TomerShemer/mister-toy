<template>
    <article class="custom-preview">
        <header>
            <slot name="header"></slot>
        </header>
        <main>

        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </article>
</template>

<style scoped>
.custom-preview {
    justify-content: space-between;
    background: white;
    padding: 2em;
    border: 1px solid black;
    border-radius: 5px;
}

.custom-preview header {
    font-size: 1rem;
}

.custom-preview main {
    text-align: center;
}

.custom-card footer {
    font-size: 1rem;
    color: gray;
}
</style>