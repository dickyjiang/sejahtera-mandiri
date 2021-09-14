<template>
  <Navbar />
  <div class="bg-gray-300 h-screen min-h-screen pt-28">
    <div class="flex justify-center items-center bg-red-500 max-w-3xl mx-auto">
      <h1 class="text-center font-bold text-2xl">Input Serial Number </h1>

      <form class="appearance-none mt-12">
        <input type="text">
      </form>
    </div>
  </div>
 
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>
