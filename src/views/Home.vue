<template>
  <Navbar />
  <div class="bg-gray-50 h-screen min-h-screen pt-28">
    <div class="flex flex-col bg-yellow-400 justify-center items-center  max-w-3xl mx-auto">
      <h1 class="text-center font-bold text-2xl">Input Serial Number </h1>
      <div class="max-w-3xl w-3/4">
        <form class="mt-12 flex flex-col gap-4">
          <input class="bg-white border px-3 text-gray-300 py-2" type="text" placeholder="Serial Number">
          <button class="px-3 py-2 w-32 text-white font-semibold shadow-md  rounded bg-turkis">Tambah</button>
        </form>
      </div>
      <div class="mt-12 bg-gray-100">

        <table class="table table-striped table-bordered border-collapse border-2 border-gray-500">
            <thead>
                <tr>
                    <th class="w-1/3">Serial Number</th>
                    <th class="w-1/4">Kode Barang</th>
                    <th class="w-1/4">Nama Barang</th>
                    <th class="w-1/4">Masa Garansi</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <td>{{item.serialNumber}}</td>
                    <td>{{item.kodeBarang}}</td>
                    <td>{{item.namaBarang}}</td>
                    <td>{{item.masaGaransi}}</td>
                </tr>
            </tbody>
        </table>
    </div>    

  </div>
</div>

 
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Home',
  components: {Navbar},

  data() {
        return {
            items: [
                { serialNumber: '123456789', kodeBarang: 'SM-PR42', namaBarang: '3MP WIFI NETWORK CAMERA', masaGaransi: '21 Desember 2022' },
                { serialNumber: '123456789', kodeBarang: 'SM-PR42', namaBarang: '3MP WIFI NETWORK CAMERA', masaGaransi: '21 Desember 2022' },
                { serialNumber: '123456789', kodeBarang: 'SM-PR42', namaBarang: '3MP WIFI NETWORK CAMERA', masaGaransi: '21 Desember 2022' },
                { serialNumber: '123456789', kodeBarang: 'SM-PR42', namaBarang: '3MP WIFI NETWORK CAMERA', masaGaransi: '21 Desember 2022' }
            ]
        };
    }

}
</script>
