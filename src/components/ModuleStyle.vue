<script setup>

</script>
<template>
    <div>
        <h1 :class="$style['kebab-case']">This is Kebab case</h1>
        <h1 :class="$style.camelCase">This is Camel case</h1>
    </div>
</template>

<style module>
.kebab-case{
background-color: firebrick;
}
.camelCase{
    background-color: seagreen;
}

</style>