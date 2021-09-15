<template>
  <Navbar />
  <div class="bg-gray-50 min-h-screen pt-28 pb-12">
    <div class="flex flex-col items-center">
      <h1 class="text-center font-bold text-2xl">Cek Status Perbaikan</h1>
      <div class="max-w-3xl w-3/4 mx-auto">
        <form class="mt-12 flex gap-2">
          <input class="bg-white border border-gray-400 rounded  px-3 text-gray-300 py-3 flex-1" type="text" placeholder="Nomor Perbaikan/Serial Number...">
          <button class="px-3 py-2 w-32 text-white font-semibold shadow-md  rounded bg-turkis">Cek</button>
        </form>
      </div>


      <div class="flex flex-col gap-8 w-9/12 items-end my-8">
          <div class="mt-12 bg-white">
            <table class="border border-gray-500 w-full table-fixed">
                <thead>
                    <tr class="border bg-turkis text-white font-bold text-md border-turkis">
                        <th class="w-1/5 py-3">Nomor Perbaikan</th>
                        <th class="w-1/5">Kode Barang</th>
                        <th class="w-1/5">Serial Number</th>
                        <th class="w-1/5">Nama Barang</th>
                        <th class="w-1/5">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="even:bg-gray-200 border-gray-500 py-2" v-for="item in items" :key="item.id">
                        <td class="py-4">{{item.nomorPerbaikan}}</td>
                        <td>{{item.kodeBarang}}</td>
                        <td>{{item.serialNumber}}</td>
                        <td>{{item.namaBarang}}</td>
                        <td>{{item.status}}</td>
                    </tr>
                </tbody>
            </table>
        </div>    
        <button class="px-3 py-2 w-32 text-white font-semibold shadow-md  rounded bg-turkis"> Submit </button>
      </div>


  </div>
</div>
<Footer/>

 
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {Navbar, Footer},

  data() {
        return {
            items: [
                { nomorPerbaikan: '121121221222', serialNumber: '123456789', kodeBarang: 'SM-PR42', namaBarang: '3MP WIFI NETWORK CAMERA', masaGaransi: '21 Desember 2022', status: "Diagnosa" },
                { nomorPerbaikan: '121121221222', serialNumber: '123456789', kodeBarang: 'SM-PR42', namaBarang: '3MP WIFI NETWORK CAMERA', masaGaransi: '21 Desember 2022', status: "Sedang Request Part" },
                { nomorPerbaikan: '121121221222', serialNumber: '123456789', kodeBarang: 'SM-PR42', namaBarang: '3MP WIFI NETWORK CAMERA', masaGaransi: '21 Desember 2022', status: "Selesai Pengerjaan" },

            ]
        };
    },

    

}
</script>
