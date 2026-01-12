export const encyclopediaData = {
  BIO: {
    id: "BIO",
    title: "MAKHLUK HIDUP",
    desc: "Analisis struktur biologis organisme purba.",
    color: "#00ff88",
    image:
      "https://geoenviron.wordpress.com/wp-content/uploads/2011/11/d047d-dinosaurus-7-p.jpg",
    subCategories: [
      {
        title: "INVERTEBRATA",
        desc: "Organisme lunak tanpa tulang belakang.",
        image:
          "https://image.idntimes.com/post/20250608/0.%20Restorasi%20arthropleura.jpg",
        items: [
          {
            name: "AMMONITE",
            modelPath: "/models/hewan/invertebrata/ammonite.glb",
            image:
              "https://lovelymeregis.co.uk/images/gallery/ammonite-creature.jpg",
            description: {
              short:
                "Moluska laut purba dengan cangkang spiral, kerabat cumi-cumi.",
              full: "Ammonite adalah kelompok hewan moluska laut yang punah di kelas Cephalopoda. Cangkang mereka biasanya berbentuk spiral planar. Mereka hidup di lautan terbuka dan berenang dengan cara menyemprotkan air (jet propulsion).",
              key: "Ammonite adalah fosil indeks yang sangat baik untuk menentukan umur lapisan batuan Mesozoikum.",
            },
          },
          {
            name: "TURRITELLA",
            modelPath:
              "/models/hewan/invertebrata/gastropods_turritella_terebralis.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/f/f2/Turritella_duplicata_01.jpg",
            description: {
              short: "Siput laut dengan cangkang memanjang seperti menara.",
              full: "Turritella adalah genus siput laut berukuran sedang dengan operkulum. Mereka memiliki cangkang yang melingkar rapat dan bentuk keseluruhan yang memanjang seperti kerucut yang tajam.",
              key: "Fosil ini sering ditemukan dalam jumlah massal, membentuk batuan yang disebut 'Batu Turritella' atau agate.",
            },
          },
          {
            name: "BRACHIOPODA",
            modelPath:
              "/models/hewan/invertebrata/modern_brachiopod_animation.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/e/ea/Liospiriferina_rostrata_Noir.jpg",
            description: {
              short: "Hewan laut bercangkang tangkup atas-bawah.",
              full: "Brakiopoda adalah hewan laut yang memiliki katup keras pada permukaan atas dan bawah, tidak seperti pengaturan kiri dan kanan di moluska bivalvia. Katup brakiopoda berengsel di bagian belakang.",
              key: "Mereka mendominasi dasar laut pada era Paleozoikum sebelum sebagian besar punah.",
            },
          },
          {
            name: "PORIFERA",
            modelPath: "/models/hewan/invertebrata/sponge.glb",
            image:
              "https://unsir.ac.id/wp-content/uploads/2024/01/WhatsApp-Image-2023-09-01-at-132835-2748392327.webp",
            description: {
              short: "Hewan berpori sederhana (Spons Laut).",
              full: "Porifera adalah filum hewan multiseluler paling sederhana yang dikenal sebagai spons laut. Memiliki tubuh berpori-pori untuk mengalirkan air guna mendapatkan makanan dan oksigen, serta tidak punya organ khusus.",
              key: "Porifera tidak memiliki sistem saraf, pencernaan, atau peredaran darah sejati.",
            },
          },
          {
            name: "STAR FISH",
            modelPath: "/models/hewan/invertebrata/starfish.glb",
            image:
              "https://www.thoughtco.com/thmb/PHXqLrrhvo1wVZGne0ddMCef9E0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-orange-starfish-on-sand-489010151-59847f7f22fa3a0010518acc.jpg",
            description: {
              short:
                "Echinodermata berbentuk bintang dengan kemampuan regenerasi.",
              full: "Bintang laut adalah hewan invertebrata laut dari filum Echinodermata. Memiliki tubuh simetri radial, kulit keras berlapis kalsium, dan bergerak menggunakan sistem vaskular air (kaki tabung).",
              key: "Jika satu lengan putus, bintang laut dapat menumbuhkan kembali lengan tersebut, bahkan individu baru.",
            },
          },
          {
            name: "TRILOBITE PROETIDA",
            modelPath: "/models/hewan/invertebrata/trilobite_proetida.glb",
            image:
              "https://alchetron.com/cdn/proetida-95e7880c-345a-4c53-98e4-3039e8fd566-resize-750.jpeg",
            description: {
              short: "Ordo trilobita terakhir yang bertahan hidup.",
              full: "Proetida adalah ordo trilobita yang bertahan paling lama, hidup dari Periode Ordovisium hingga Permian. Mereka memiliki cangkang khas dengan kepala (cephalon), tubuh (thorax), dan ekor (pygidium).",
              key: "Merupakan satu-satunya ordo trilobita yang selamat dari kepunahan massal Devon sebelum akhirnya punah di Permian.",
            },
          },
        ],
      },
      {
        title: "MIKROFOSIL",
        desc: "Sisa-sisa fosil kecil organisme purba.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Nanoplankton-fossil-sediment_hg.jpg/330px-Nanoplankton-fossil-sediment_hg.jpg",
        items: [
          {
            name: "GLOBIGERINELLA BULLODES",
            modelPath: "/models/hewan/mikrofosil/globigerina_bulloides.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/3/39/Gbulloides.jpg",
            description: {
              short: "Plankton purba penunjuk suhu laut.",
              full: "Globigerina bulloides adalah spesies foraminifera planktonik bersel satu yang hidup melayang di kolom air laut. Cangkangnya yang berkapur mengendap di dasar laut saat mati.",
              key: "Melimpah di perairan subpolar dan daerah upwelling, digunakan untuk merekonstruksi iklim masa lalu.",
            },
          },
          {
            name: "GLOBIGERINELLA CALIDA",
            modelPath:
              "/models/hewan/mikrofosil/foraminifera_-_globigerinella_calida.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/3/3f/Foraminifera_hg.jpg",
            description: {
              short: "Indikator penting geologi perairan tropis.",
              full: "Globigerinella calida adalah spesies foraminifera planktonik kecil. Fosilnya membantu menentukan usia sedimen laut dan kondisi iklim purba, terutama pada masa Kuarter.",
              key: "Sering ditemukan sebagai fosil penunjuk (index fossil) di perairan Indonesia.",
            },
          },
          {
            name: "RADIOLARIA",
            modelPath: "/models/hewan/mikrofosil/radiolarian_spumellaria.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/8/86/Haeckel_Radiolaria_31.jpg",
            description: {
              short: "Mikrofosil laut dengan kerangka silika rumit.",
              full: "Radiolaria adalah protozoa yang memproduksi kerangka mineral yang rumit, biasanya terbuat dari silika. Sisa-sisa kerangka mereka menutupi sebagian besar dasar laut dalam sebagai lumpur radiolaria.",
              key: "Kerangka mereka yang indah dan geometris sering disebut sebagai 'permata mikroskopis'.",
            },
          },
          {
            name: "COCCOLITHOPHORE",
            modelPath: "/models/hewan/mikrofosil/coccolithophore.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/8/86/Haeckel_Radiolaria_31.jpg",
            description: {
              short: "Fitoplankton penghasil kapur.",
              full: "Coccolithophore adalah ganggang bersel satu, protista fitoplankton yang memiliki ciri khas berupa pelat kalsium karbonat yang disebut coccolith.",
              key: "Akumulasi cangkang mereka membentuk lapisan kapur putih raksasa seperti Tebing Dover.",
            },
          },
        ],
      },
      {
        title: "VERTEBRATA",
        desc: "Hewan dengan struktur tulang belakang.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfAwvphvtkMHKKc2Wp0Biilz60lU6wLmH_IA&s",
        items: [
          {
            name: "ALLOSAURUS",
            modelPath: "/models/hewan/vertebrata/allosaurus.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/9/91/Allosaurus_SDNHM.jpg",
            description: {
              short: "Predator puncak zaman Jura.",
              full: "Allosaurus adalah dinosaurus theropoda karnivora besar yang hidup pada periode Jura Akhir. Ia memiliki tengkorak besar dengan gigi bergerigi tajam serta lengan kuat berujung tiga cakar.",
              key: "Sering disebut 'Singa Zaman Jura' karena posisinya sebagai predator puncak sebelum T-Rex muncul.",
            },
          },
          {
            name: "COELACANTH",
            modelPath: "/models/hewan/vertebrata/coelacanth.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/2/2a/Latimeria_chalumnae01.jpg",
            description: {
              short: "Ikan purba 'fosil hidup' legendaris.",
              full: "Coelacanth adalah ordo ikan purba yang sempat dianggap punah sejak akhir Zaman Kapur (66 juta tahun lalu), namun ditemukan kembali hidup-hidup pada tahun 1938.",
              key: "Memiliki sirip 'berdaging' yang merupakan transisi evolusi dari ikan ke hewan darat berkaki empat.",
            },
          },
          {
            name: "LATIMERIA",
            modelPath: "/models/hewan/vertebrata/dinorauls_latimeria_2.glb",
            image: "",
            description: {
              short: "Genus modern dari ikan Coelacanth.",
              full: "Latimeria adalah satu-satunya genus coelacanth yang masih hidup saat ini. Mereka adalah ikan laut dalam yang menghuni perairan curam berbatu.",
              key: "Salah satu spesiesnya, Latimeria menadoensis, ditemukan hidup di perairan Manado, Indonesia.",
            },
          },
          {
            name: "KOMODO",
            modelPath: "/models/hewan/vertebrata/komodo_dragon_lizard-v2.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/1/18/Komodo-dragon-3.jpg",
            description: {
              short: "Kadal terbesar di dunia, sisa megafauna.",
              full: "Komodo (Varanus komodoensis) adalah spesies biawak besar yang terdapat di pulau Komodo, Rinca, Flores, dan Gili Motang. Ia adalah kadal terbesar yang masih hidup di dunia.",
              key: "Komodo memiliki gigitan beracun dan air liur yang penuh bakteri mematikan.",
            },
          },
          {
            name: "PTERANODON",
            modelPath: "/models/hewan/vertebrata/pteranodon.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/1/1d/Pteranodon.jpg",
            description: {
              short: "Reptil terbang penguasa langit Kapur.",
              full: "Pteranodon adalah genus pterosaurus yang termasuk dalam reptil terbang terbesar yang pernah diketahui. Ia hidup di Amerika Utara selama periode Kapur Akhir.",
              key: "Meski sering disamakan dengan dinosaurus, Pteranodon sebenarnya adalah reptil terbang (bukan dinosaurus).",
            },
          },
          {
            name: "SPINOSAURUS",
            modelPath: "/models/hewan/vertebrata/spinosaurus.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/f/f0/Spinosaurus_aegyptiacus_recon.jpg",
            description: {
              short: "Predator semi-akuatik terbesar.",
              full: "Spinosaurus adalah dinosaurus karnivora terbesar, bahkan lebih besar dari T-Rex. Ciri khasnya adalah layar besar di punggungnya dan moncong panjang mirip buaya.",
              key: "Merupakan dinosaurus pertama yang diketahui mampu berenang dan berburu di dalam air.",
            },
          },
          {
            name: "TRICERATOPS",
            modelPath: "/models/hewan/vertebrata/triceratop.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/6/69/Tric1.JPG",
            description: {
              short: "Dinosaurus herbivora dengan tiga tanduk.",
              full: "Triceratops adalah genus dinosaurus ceratopsid herbivora yang hidup pada periode Kapur Akhir. Ia memiliki jumbai tulang leher yang besar dan tiga tanduk di wajahnya.",
              key: "Tanduk dan jumbainya kemungkinan digunakan untuk pertahanan diri dari T-Rex serta untuk menarik pasangan.",
            },
          },
        ],
      },
    ],
  },
  FOSSIL: {
    id: "FOSSIL",
    title: "JENIS FOSIL",
    desc: "Klasifikasi batuan & mineral.",
    color: "#ff4d4d",
    image:
      "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1634025439/01jatjq5vbdeervf2s8bj452nz.jpg",
    subCategories: [
      {
        title: "FOSIL JEJAK",
        desc: "Sisa aktivitas (Trace Fossils).",
        image:
          "https://cdn.grid.id//crop/0x0:0x0/360x240/photo/2018/09/21/1585206829.jpg",
        items: [
          {
            name: "JEJAK T-REX",
            modelPath: "/models/fosil/fosil_jejak/dinosaur_Trex_footprint.glb",
            image: "",
            description: {
              short: "Cetakan kaki fosil Tyrannosaurus Rex.",
              full: "Fosil jejak (ichnofosil) berupa cetakan kaki T-Rex yang membatu. Jejak ini memberikan informasi tentang cara berjalan, kecepatan, dan perilaku sosial dinosaurus tersebut.",
              key: "Ukuran jejak ini menunjukkan bahwa T-Rex memiliki bantalan kaki yang tebal untuk meredam berat tubuhnya.",
            },
          },
          {
            name: "JEJAK Velociraptor",
            modelPath: "/models/fosil/fosil_jejak/footprint_raptor.glb",
            image: "",
            description: {
              short: "Jejak kaki predator kecil berburu.",
              full: "Jejak kaki dinosaurus theropoda kecil (didactyl) yang hanya menunjukkan dua jari menapak tanah, karena jari kedua yang memiliki cakar sabit diangkat saat berjalan.",
              key: "Membuktikan hipotesis bahwa raptor mengangkat 'cakar pembunuh' mereka agar tidak tumpul saat berjalan.",
            },
          },
          {
            name: "JEJAK SAUROPODA",
            modelPath: "/models/fosil/fosil_jejak/sauropod_footprint.glb",
            image: "",
            description: {
              short: "Jejak migrasi dinosaurus leher panjang.",
              full: "Jejak kaki bulat besar yang ditinggalkan oleh sauropoda. Sering ditemukan dalam jalur yang panjang, mengindikasikan pola migrasi kawanan.",
              key: "Lubang jejak sauropoda bisa sedalam 1 meter dan terkadang menjadi perangkap bagi hewan kecil.",
            },
          },
        ],
      },
      {
        title: "TERAWETKAN",
        desc: "Organisme utuh dalam amber/es.",
        image:
          "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1634025439/01jatjwnnhdqartezvr6zbs9p6.jpg",
        items: [
          {
            name: "DAUN PAKIS",
            modelPath: "/models/fosil/fosil_terawetkan/eduf104_fern_leaves.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/8/8d/Neuropteris_ovata.jpg",
            description: {
              short: "Fosil daun tumbuhan paku karbon.",
              full: "Fosil daun pakis dari periode Karbon (Carboniferous). Tanaman ini mendominasi hutan purba yang kemudian tertimbun dan menjadi cadangan batu bara dunia.",
              key: "Pola tulang daunnya masih terlihat jelas karena proses karbonisasi.",
            },
          },
          {
            name: "KAYU MEMBATU",
            modelPath:
              "/models/fosil/fosil_terawetkan/eduf407_petrified_wood.glb",
            image: "",
            description: {
              short: "Batang pohon yang berubah menjadi mineral.",
              full: "Petrified wood adalah fosil kayu di mana seluruh materi organiknya telah digantikan oleh mineral (silika, kalsit, pirit) namun tetap mempertahankan struktur asli kayu.",
              key: "Proses permineralisasi ini terjadi di bawah tanah tanpa oksigen, mencegah pembusukan.",
            },
          },
          {
            name: "BAYI MAMMOTH LYUBA",
            modelPath:
              "/models/fosil/fosil_terawetkan/lyuba_the_woolly_mammoth_calf.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/b/b5/Lyuba_Mammoth_Museum.jpg",
            description: {
              short: "Mumi bayi Mammoth paling utuh.",
              full: "Lyuba adalah bayi Mammoth berbulu betina yang meninggal sekitar 40.000 tahun lalu. Ia ditemukan terawetkan dalam kondisi hampir sempurna di permafrost Siberia.",
              key: "Organ dalamnya, mata, dan bahkan sisa susu ibu di perutnya masih utuh.",
            },
          },
          {
            name: "NYAMUK AMBER",
            modelPath:
              "/models/fosil/fosil_terawetkan/real-time_refraction_demo_mosquito_in_amber.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/0/02/Ancient_mosquito.jpg",
            description: {
              short: "Serangga yang terperangkap dalam getah.",
              full: "Fosil serangga yang terperangkap dalam resin pohon yang kemudian mengeras menjadi amber. Metode ini mengawetkan detail tubuh hewan dengan sangat baik.",
              key: "Menjadi inspirasi ilmiah untuk film 'Jurassic Park', meskipun ekstraksi DNA dinosaurus dari amber sangatlah sulit.",
            },
          },
        ],
      },
      {
        title: "FOSIL TUBUH",
        desc: "Sisa tulang, gigi, dan cangkang.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUZmQmivoRDpHKjtsx_1RgqVpFs_M2N3kwkg&s",
        items: [
          {
            name: "CAKAR VELOCIRAPTOR",
            modelPath:
              "/models/fosil/fosil_tubuh/deinonychus_velociraptor_claw.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/a/a8/Deinonychus_claw.jpg",
            description: {
              short: "Cakar pembunuh berbentuk sabit.",
              full: "Fosil cakar kaki dari dinosaurus Dromaeosaurid (seperti Velociraptor). Cakar ini melengkung tajam dan digunakan untuk menusuk atau mencengkeram mangsa.",
              key: "Cakar ini bisa digerakkan ke atas dan ke bawah secara fleksibel.",
            },
          },
          {
            name: "BELEMNITE",
            modelPath:
              "/models/fosil/fosil_tubuh/eduf32_belemnite_phragmacone.glb",
            image: "",
            description: {
              short: "Bagian dalam cangkang cumi purba.",
              full: "Fosil rostrum (bagian pelindung internal) dari Belemnite, hewan cephalopoda purba yang mirip cumi-cumi modern.",
              key: "Sering ditemukan berbentuk seperti peluru di lapisan batuan Jura dan Kapur.",
            },
          },
          {
            name: "GIGI RUSA RAKSASA",
            modelPath:
              "/models/fosil/fosil_tubuh/giant_deer_teeth_115000_years_old.glb",
            image: "",
            description: {
              short: "Gigi geraham Megaloceros.",
              full: "Fosil gigi dari Rusa Raksasa Irlandia (Megaloceros giganteus). Gigi ini berukuran besar dan memiliki permukaan kasar untuk mengunyah vegetasi keras.",
              key: "Megaloceros adalah rusa terbesar yang pernah hidup, dengan bentang tanduk mencapai 3,6 meter.",
            },
          },
          {
            name: "GIGI MEGALODON",
            modelPath: "/models/fosil/fosil_tubuh/megalodon_teeth_fossil.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/3/3b/Megalodon_tooth_with_great_white_sharks_teeth-3-2.jpg",
            description: {
              short: "Gigi hiu terbesar sepanjang masa.",
              full: "Fosil gigi hiu prasejarah Megalodon. Gigi ini berbentuk segitiga, bergerigi tajam, dan bisa mencapai ukuran lebih dari 18 cm (seukuran telapak tangan manusia).",
              key: "Hiu tulang rawan tidak meninggalkan fosil tulang, jadi hanya gigi mereka yang tersisa.",
            },
          },
          {
            name: "TENGKORAK SMILODON",
            modelPath:
              "/models/fosil/fosil_tubuh/saber-toothed_tiger_cat_-_ice_age_smilodon.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/5/53/Smilodon_fatalis.jpg",
            description: {
              short: "Tengkorak macan gigi pedang.",
              full: "Fosil tengkorak Smilodon, terkenal dengan dua gigi taring atas yang sangat panjang. Tengkorak ini menunjukkan struktur rahang yang bisa membuka sangat lebar.",
              key: "Taringnya rapuh terhadap gaya samping, digunakan untuk memotong leher mangsa yang sudah terkunci.",
            },
          },
          {
            name: "TENGKORAK TRICERATOPS",
            modelPath: "/models/fosil/fosil_tubuh/triceratops_skull.glb",
            image: "",
            description: {
              short: "Tengkorak besar bertanduk tiga.",
              full: "Salah satu tengkorak terbesar dari hewan darat manapun. Terdiri dari paruh keras, tiga tanduk, dan jumbai leher (frill) yang solid.",
              key: "Jumbai lehernya berfungsi melindungi leher dari gigitan predator.",
            },
          },
          {
            name: "TENGKORAK T-REX",
            modelPath:
              "/models/fosil/fosil_tubuh/vertebrate_tyrannosaurus_rex_skull_mote.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/c/c2/Tyrannoskull.jpg",
            description: {
              short: "Tengkorak raja predator.",
              full: "Tengkorak T-Rex dirancang untuk kekuatan gigitan maksimal. Tulang-tulangnya tebal dan menyatu untuk menahan tekanan saat meremukkan tulang mangsa.",
              key: "Kekuatan gigitannya diperkirakan mencapai 57.000 Newton, setara dengan diduduki gajah dewasa.",
            },
          },
        ],
      },
    ],
  },
  ERA: {
    id: "ERA",
    title: "ERA ZAMAN",
    desc: "Timeline sejarah bumi.",
    color: "#00d2ff",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKJcJ0g7RSOhIRdbYDMswwF5OvWVdV9MFMVxn4LTqCJWu0DRMCdq1hS7q1VtiNc-YEN6B2FZIr5QI5jUwC-uFlbWqziccpYeI3-XlFge3XoNeqdJE7T_wRoYk1510uvHrQMNmrzDzU6z8/w1200-h630-p-k-no-nu/Deinosuchus+dinoanimals+com.jpg",
    subCategories: [
      {
        title: "PALEOZOIKUM",
        desc: "Ledakan kehidupan laut purba.",
        image:
          "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1608281832/sp4i8vlqmegorxozvxce.jpg",
        items: [
          {
            name: "ANOMALOCARIS",
            modelPath:
              "/models/geologi/era_paleozoikum/anomalocaris_3d_model.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/c/c3/Anomalocaris_canadensis.jpg",
            description: {
              short: "Predator puncak pertama di Bumi.",
              full: "Anomalocaris ('Udang Aneh') adalah arthropoda predator laut dari periode Kambrium. Ia memiliki dua lengan berduri di depan mulutnya untuk menangkap mangsa.",
              key: "Merupakan salah satu hewan terbesar di lautan Kambrium, mencapai panjang 1 meter.",
            },
          },
          {
            name: "DIMETRODON",
            modelPath: "/models/geologi/era_paleozoikum/dimetrodon.glb",
            image: "",
            description: {
              short: "Reptil bersirip punggung (bukan dinosaurus).",
              full: "Dimetrodon adalah predator puncak zaman Permian. Ia memiliki layar besar di punggungnya yang berfungsi untuk mengatur suhu tubuh (thermoregulasi).",
              key: "Sering dikira dinosaurus, padahal ia adalah Synapsida (lebih dekat kekerabatannya dengan mamalia).",
            },
          },
          {
            name: "ARTHROPLEURA",
            modelPath:
              "/models/geologi/era_paleozoikum/dinorauls_arthropleura.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/e/ea/Arthropleura_armata_reconstruction.jpg",
            description: {
              short: "Kelabang raksasa zaman Karbon.",
              full: "Arthropleura adalah invertebrata darat terbesar yang pernah hidup, menyerupai kelabang raksasa sepanjang 2,5 meter. Hidup di hutan rawa kaya oksigen.",
              key: "Ukurannya yang raksasa dimungkinkan karena kadar oksigen atmosfer saat itu jauh lebih tinggi dari sekarang.",
            },
          },
          {
            name: "DUNKLEOSTEUS",
            modelPath:
              "/models/geologi/era_paleozoikum/dinorauls_dunkleosteus_2.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/5/5e/Dunkleosteus_terrelli_2.jpg",
            description: {
              short: "Ikan purba raksasa berlapis baja.",
              full: "Dunkleosteus adalah ikan placoderm prasejarah yang hidup pada periode Devon. Kepalanya dilindungi pelat tulang keras dan memiliki rahang tajam seperti gunting.",
              key: "Gigitannya sangat kuat, mampu membelah hiu purba atau sesama placoderm.",
            },
          },
          {
            name: "MEGANEURA",
            modelPath: "/models/geologi/era_paleozoikum/meganeura.glb",
            image: "",
            description: {
              short: "Capung raksasa selebar elang.",
              full: "Meganeura adalah serangga mirip capung dari periode Karbon dengan bentang sayap mencapai 70 cm. Ia adalah predator udara yang memangsa serangga kecil.",
              key: "Merupakan serangga terbesar yang pernah diketahui menghuni Bumi.",
            },
          },
          {
            name: "MODEL TRILOBITE",
            modelPath:
              "/models/geologi/era_paleozoikum/model_of_a_trilobite.glb",
            image: "",
            description: {
              short: "Artropoda laut dominan Paleozoikum.",
              full: "Trilobita adalah kelompok artropoda laut yang sangat sukses, muncul di Kambrium dan bertahan hingga kepunahan Permian. Tubuhnya terbagi menjadi tiga lobus.",
              key: "Ada lebih dari 20.000 spesies trilobita yang telah diidentifikasi.",
            },
          },
          {
            name: "GORGONOPSID",
            modelPath:
              "/models/geologi/era_paleozoikum/primeval_-_gorgonopsid.glb",
            image: "",
            description: {
              short: "Reptil mirip mamalia bergigi saber.",
              full: "Gorgonopsid adalah predator therapsida yang hidup pada periode Permian Akhir. Mereka memiliki gigi taring besar dan merupakan penguasa daratan sebelum dinosaurus.",
              key: "Mereka punah dalam peristiwa kepunahan massal terbesar di Bumi (The Great Dying).",
            },
          },
        ],
      },
      {
        title: "MESOZOIKUM",
        desc: "Zaman kejayaan reptil raksasa.",
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4-f90I9kDih-MYUYrWd2v455oWs2jgyfDQzorbMVDMFESo_Mg515wcwZ4L-XmdqMAuKjtCwKITZnxD4UW9hhowELsPhgc1pOpqpzm3n33Bo4fx2POyFDpiJ51mvACxZ5C0TqveOhuwiNr/s1600/Pengertian+Zaman+Mesozoikum.jpg",
        items: [
          {
            name: "ALLOSAURUS",
            modelPath: "/models/geologi/era_mesozoikum/allosaurus.glb",
            image: "",
            description: {
              short: "Predator puncak zaman Jura.",
              full: "Allosaurus adalah predator bipedal besar dengan tengkorak kuat namun ringan. Ia berburu dinosaurus herbivora besar seperti Stegosaurus.",
              key: "Fosilnya adalah salah satu yang paling umum ditemukan di Formasi Morrison, AS.",
            },
          },
          {
            name: "BRACHIOSAURUS",
            modelPath:
              "/models/geologi/era_mesozoikum/brachiosaurus_altithorax.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/1/10/Brachiosaurus_DB.jpg",
            description: {
              short: "Sauropoda leher panjang yang menjulang.",
              full: "Brachiosaurus adalah dinosaurus sauropoda raksasa dengan kaki depan yang lebih panjang dari kaki belakang, memberinya postur seperti jerapah untuk memakan daun tinggi.",
              key: "Hidungnya terletak di bagian atas kepalanya, sebuah fitur yang unik.",
            },
          },
          {
            name: "DILOPHOSAURUS",
            modelPath:
              "/models/geologi/era_mesozoikum/dilophosaurus_wetherilli.glb",
            image: "",
            description: {
              short: "Karnivora dengan dua jambul.",
              full: "Dilophosaurus adalah theropoda awal dari periode Jura Awal. Ciri khasnya adalah sepasang jambul tulang berbentuk setengah lingkaran di atas kepalanya.",
              key: "Tidak seperti di film, tidak ada bukti ilmiah ia bisa menyemburkan racun atau memiliki jumbai leher.",
            },
          },
          {
            name: "ANKYLOSAURUS",
            modelPath: "/models/geologi/era_mesozoikum/dino_-_ankylosaurus.glb",
            image: "",
            description: {
              short: "Dinosaurus tank dengan ekor gada.",
              full: "Ankylosaurus adalah dinosaurus herbivora yang tubuhnya dilindungi pelat tulang (osteoderm) seperti tank baja. Ekornya memiliki ujung gada tulang yang berat.",
              key: "Gada ekornya cukup kuat untuk mematahkan tulang kaki T-Rex.",
            },
          },
          {
            name: "HERRERASAURUS",
            modelPath:
              "/models/geologi/era_mesozoikum/dinorauls_herrerasaurus.glb",
            image: "",
            description: {
              short: "Salah satu dinosaurus paling awal.",
              full: "Herrerasaurus adalah salah satu dinosaurus karnivora pertama yang muncul pada periode Trias Akhir. Ia merupakan predator lincah.",
              key: "Struktur pinggulnya unik, campuran antara ciri dinosaurus dan reptil non-dinosaurus.",
            },
          },
          {
            name: "ICHTHYOSAURUS",
            modelPath: "/models/geologi/era_mesozoikum/ichthyosaurus.glb",
            image: "",
            description: {
              short: "Reptil laut mirip lumba-lumba.",
              full: "Ichthyosaurus adalah reptil laut yang berevolusi menyerupai ikan atau lumba-lumba (evolusi konvergen). Ia melahirkan anak hidup-hidup di air.",
              key: "Memiliki mata yang sangat besar untuk melihat di kedalaman laut yang gelap.",
            },
          },
          {
            name: "QUETZALCOATLUS",
            modelPath:
              "/models/geologi/era_mesozoikum/jurassic_world_dominion_quetzalcoatlus.glb",
            image: "",
            description: {
              short: "Hewan terbang terbesar dalam sejarah.",
              full: "Quetzalcoatlus adalah pterosaurus raksasa dari periode Kapur Akhir. Saat berdiri di tanah, tingginya setara dengan jerapah dewasa.",
              key: "Bentang sayapnya bisa mencapai 10-11 meter, seluas pesawat kecil.",
            },
          },
          {
            name: "COELOPHYSIS",
            modelPath: "/models/geologi/era_mesozoikum/jwe2_coelophysis.glb",
            image: "",
            description: {
              short: "Dinosaurus kecil yang ramping.",
              full: "Coelophysis adalah dinosaurus theropoda kecil dan ringan dari periode Trias. Tulang-tulangnya berongga, membuatnya sangat lincah.",
              key: "Salah satu dinosaurus pertama yang diketahui hidup dalam kelompok besar.",
            },
          },
          {
            name: "MOSASAURUS",
            modelPath: "/models/geologi/era_mesozoikum/mosasaurus.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/a/a2/Mosasaurus_beaugei.jpg",
            description: {
              short: "Reptil laut raksasa penguasa Kapur.",
              full: "Mosasaurus adalah kadal laut raksasa (bukan dinosaurus) yang mendominasi lautan pada akhir periode Kapur. Memiliki rahang kuat dan gigi tajam.",
              key: "Memiliki baris gigi kedua di langit-langit mulutnya untuk menahan mangsa agar tidak lolos.",
            },
          },
          {
            name: "PARASAUROLOPHUS",
            modelPath:
              "/models/geologi/era_mesozoikum/parasaurolophus_walkeri.glb",
            image: "",
            description: {
              short: "Dinosaurus dengan jambul tabung.",
              full: "Parasaurolophus adalah hadrosaurida (dino paruh bebek) dengan jambul panjang berbentuk tabung yang menonjol ke belakang kepala.",
              key: "Jambulnya berfungsi seperti alat musik tiup untuk menghasilkan suara panggilan jarak jauh.",
            },
          },
          {
            name: "PTERANODON",
            modelPath: "/models/geologi/era_mesozoikum/pteranodon.glb",
            image: "",
            description: {
              short: "Reptil terbang ikonik.",
              full: "Pteranodon adalah pterosaurus besar yang hidup di pantai laut dalam Amerika Utara. Ia memakan ikan dengan paruhnya yang panjang dan tidak bergigi.",
              key: "Jambul di kepalanya mungkin digunakan sebagai kemudi saat terbang atau penyeimbang paruh.",
            },
          },
          {
            name: "SPINOSAURUS",
            modelPath: "/models/geologi/era_mesozoikum/spinosaurus.glb",
            image: "",
            description: {
              short: "Raja sungai purba.",
              full: "Spinosaurus adalah predator puncak yang menghuni sungai-sungai Afrika Utara. Ia memangsa ikan besar dan dinosaurus lainnya.",
              key: "Kaki pendek dan tulang padatnya menunjukkan adaptasi khusus untuk hidup di air.",
            },
          },
          {
            name: "STEGOSAURUS",
            modelPath: "/models/geologi/era_mesozoikum/stegosaurus_armatus.glb",
            image: "",
            description: {
              short: "Dinosaurus berpelat punggung.",
              full: "Stegosaurus adalah herbivora besar yang dikenal dengan barisan pelat tulang tegak di punggung dan empat duri tajam di ujung ekornya.",
              key: "Otaknya sangat kecil, hanya sebesar buah kenari atau jeruk nipis.",
            },
          },
          {
            name: "T-REX",
            modelPath: "/models/geologi/era_mesozoikum/t-rex.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/6/6f/Tyrannosaurus_rex_Reconstruction_by_Nobu_Tamura.jpg",
            description: {
              short: "Tyrannosaurus Rex, sang raja.",
              full: "T-Rex adalah salah satu karnivora darat terbesar sepanjang masa. Memiliki penglihatan binokular yang sangat baik dan indra penciuman tajam.",
              key: "Lengan kecilnya sebenarnya sangat kuat dan berotot, mampu mengangkat beban berat.",
            },
          },
          {
            name: "TRICERATOPS",
            modelPath: "/models/geologi/era_mesozoikum/triceratop.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/0/00/Triceratops_horridus_12.jpg",
            description: {
              short: "Herbivora bertanduk tiga.",
              full: "Triceratops adalah salah satu dinosaurus terakhir yang muncul sebelum kepunahan massal. Ia hidup berdampingan dan sering menjadi mangsa T-Rex.",
              key: "Paruhnya yang keras mirip paruh burung kakaktua, sangat efisien memotong tanaman keras.",
            },
          },
          {
            name: "VELOCIRAPTOR",
            modelPath: "/models/geologi/era_mesozoikum/velociraptor.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/a/a6/Velociraptor_mongoliensis.jpg",
            description: {
              short: "Predator kecil berbulu.",
              full: "Velociraptor adalah dromaeosaurid kecil seukuran kalkun yang lincah. Tidak seperti di film, aslinya mereka tertutup bulu lebat.",
              key: "Namanya berarti 'Pencuri Cepat' dalam bahasa Latin.",
            },
          },
        ],
      },
      {
        title: "KENOZOIKUM",
        desc: "Era mamalia dan manusia.",
        image:
          "https://sijai.com/wp-content/uploads/2017/05/Zaman-Neozoikum-perjuanganislami.blogspot.co_.id_.jpg",
        items: [
          {
            name: "PARACERATHERIUM",
            modelPath:
              "/models/geologi/era_kenozoikum/dinorauls_paraceratherium.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/9/9b/Paraceratherium_orgosensis.jpg",
            description: {
              short: "Mamalia darat terbesar dalam sejarah.",
              full: "Paraceratherium adalah kerabat badak raksasa tanpa cula yang hidup pada zaman Oligosen. Ia memiliki leher panjang untuk memakan daun pohon tinggi.",
              key: "Beratnya bisa mencapai 20 ton, setara dengan 3-4 gajah Afrika modern.",
            },
          },
          {
            name: "MAMMOTH",
            modelPath: "/models/geologi/era_kenozoikum/mammoth.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/b/b9/Mammuthus_primigenius_by_Charles_Knight.jpg",
            description: {
              short: "Gajah purba berbulu tebal.",
              full: "Mammoth Berbulu (Mammuthus primigenius) beradaptasi sempurna dengan iklim dingin Zaman Es. Memiliki gading melengkung panjang dan lapisan lemak tebal.",
              key: "Manusia purba sering memburu Mammoth dan melukisnya di dinding gua.",
            },
          },
          {
            name: "TERROR BIRD",
            modelPath:
              "/models/geologi/era_kenozoikum/phorusrhacos_longissimus_terror_bird.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/c/c2/Phorusrhacos.jpg",
            description: {
              short: "Burung pemangsa raksasa tak bisa terbang.",
              full: "Phorusrhacidae atau Terror Bird adalah predator puncak di Amerika Selatan selama jutaan tahun. Mereka mengejar mangsa dengan kecepatan tinggi dan mematuk dengan paruh kapak.",
              key: "Merupakan salah satu dinosaurus avian (burung) yang mendominasi kembali setelah kepunahan dinosaurus non-avian.",
            },
          },
          {
            name: "SMILODON",
            modelPath: "/models/geologi/era_kenozoikum/smilodon.glb",
            image: "",
            description: {
              short: "Macan gigi pedang (Saber-tooth).",
              full: "Smilodon adalah kucing besar prasejarah yang terkenal dengan sepasang gigi taring atas yang sangat panjang. Mereka berburu megafauna seperti bison dan unta purba.",
              key: "Mereka punah sekitar 10.000 tahun yang lalu, bersamaan dengan berakhirnya Zaman Es terakhir.",
            },
          },
        ],
      },
    ],
  },
};
