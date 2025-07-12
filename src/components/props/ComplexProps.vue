<template>
  <div>
    <h1>Complex props</h1>
    <ul>
      <li v-for="(friend, index) in friends" :key="index">
        {{ friend }}
      </li>
    </ul>

    <ul>
      <li v-for="(info,key,i) in userInfo" :key="i">
         {{ key + " : " + info}}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  friends: Array,
  userInfo: Object,
});
</script>
