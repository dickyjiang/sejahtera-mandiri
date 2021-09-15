<template>
<div class="fixed  w-full bg-white border-b-2 px-8">
    <div class="flex justify-between text-md font-bold py-5 max-w-5xl items-center mx-auto ">
            <div class="flex gap-3">
                <div>
                    logo
                </div>
                <div>
                    RMA Sejahtera Mandiri Perkasa
                </div>
            </div>
            <div class="flex gap-3">

                    <router-link @click="scrollToTop" class="hover:text-turkis focus:text-turkis " to="/">Kirim Garansi</router-link>
                    <router-link @click="scrollToTop" class="hover:text-turkis focus:text-turkis " to="/CheckStatus">Check Status</router-link>

            </div>
    </div>
</div>

</template>

<script>
export default {
    methods: { 
           scrollToTop() {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                }
                );
           },
           
        }

}
</script>

<style>

</style>