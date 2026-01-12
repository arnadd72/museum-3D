export const encyclopediaData = {
  BIO: {
    id: "BIO",
    title: "MAKHLUK HIDUP",
    desc: "Analisis struktur biologis organisme purba.",
    color: "#00ff88",
    // Link Pilihan Anda
    image:
      "https://geoenviron.wordpress.com/wp-content/uploads/2011/11/d047d-dinosaurus-7-p.jpg",
    subCategories: [
      {
        title: "INVERTEBRATA",
        desc: "Organisme lunak tanpa tulang belakang.",
        // Link Pilihan Anda
        image:
          "https://image.idntimes.com/post/20250608/0.%20Restorasi%20arthropleura.jpg",
        items: [
          {
            name: "AMMONITE",
            modelPath: "/models/hewan/invertebrata/ammonite.glb",
            // Link Perbaikan (Direct Link)
            image:
              "https://lovelymeregis.co.uk/images/gallery/ammonite-creature.jpg",
            desc: "Moluska laut purba dengan cangkang spiral yang indah, kerabat dekat cumi-cumi modern.",
          },
          {
            name: "TURRITELLA",
            modelPath: "/models/hewan/invertebrata/gastropods_turritella_terebralis.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/f/f2/Turritella_duplicata_01.jpg",
            desc: "Siput laut dengan cangkang memanjang seperti menara yang hidup di dasar laut berlumpur.",
          },
          {
            name: "TRILOBITE",
            modelPath: "/models/hewan/invertebrata/trilobite_proetida.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/4/4d/Phacops_rana.jpg",
            desc: "Arthropoda laut ikonik yang mendominasi lautan Paleozoikum dengan tubuh bersegmen.",
          },
          {
            name: "SPONS LAUT",
            modelPath: "/models/hewan/invertebrata/sponge.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/d/d6/Porifera_01.jpg",
            desc: "Hewan multiseluler paling sederhana yang menyaring makanan dari air laut.",
          },
          {
            name: "BINTANG LAUT",
            modelPath: "/models/hewan/invertebrata/starfish.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/2/26/Starfish_01.jpg",
            desc: "Echinodermata berbentuk bintang yang memiliki kemampuan regenerasi luar biasa.",
          },
        ],
      },
      {
        title: "VERTEBRATA",
        desc: "Hewan dengan struktur tulang belakang.",
        // Link Pilihan Anda
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfAwvphvtkMHKKc2Wp0Biilz60lU6wLmH_IA&s",
        items: [
          {
            name: "KOMODO",
            modelPath: "/models/hewan/vertebrata/komodo_dragon_lizard-v2.glb",
            // Link Perbaikan (Direct Link)
            image:
              "https://upload.wikimedia.org/wikipedia/commons/1/18/Komodo-dragon-3.jpg",
            desc: "Kadal terbesar di dunia yang masih hidup, spesies asli kebanggaan Indonesia.",
          },
          {
            name: "COELACANTH",
            modelPath: "/models/hewan/vertebrata/coelacanth.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/2/2a/Latimeria_chalumnae01.jpg",
            desc: "Ikan purba 'fosil hidup' yang sempat dianggap punah bersama dinosaurus.",
          },
          {
            name: "PTERANODON",
            modelPath: "/models/hewan/vertebrata/pteranodon.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/1/1d/Pteranodon.jpg",
            desc: "Reptil terbang penguasa langit zaman Kapur dengan bentang sayap lebar.",
          },
          {
            name: "SPINOSAURUS",
            modelPath: "/models/hewan/vertebrata/spinosaurus.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/f/f0/Spinosaurus_aegyptiacus_recon.jpg",
            desc: "Predator terbesar yang pernah ada, karnivora semi-akuatik dengan layar punggung.",
          },
          {
            name: "ALLOSAURUS",
            modelPath: "/models/hewan/vertebrata/allosaurus.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/9/91/Allosaurus_SDNHM.jpg",
            desc: "Predator puncak zaman Jura, pemburu ganas sebelum masa T-Rex.",
          },
        ],
      },
      {
        title: "MIKROFOSIL",
        desc: "Sisa-sisa fosil kecil organisme purba.",
        // Link Pilihan Anda
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Nanoplankton-fossil-sediment_hg.jpg/330px-Nanoplankton-fossil-sediment_hg.jpg",
        items: [
          {
            name: "FORAMINIFERA",
            modelPath: "/models/hewan/mikrofosil/foraminifera_-_globigerinella_calida.glb",
            // Link Perbaikan (Direct Link)
            image:
              "https://upload.wikimedia.org/wikipedia/commons/3/3f/Foraminifera_hg.jpg",
            desc: "Plankton bercangkang kapur yang menjadi penunjuk penting iklim masa lalu.",
          },
          {
            name: "RADIOLARIA",
            modelPath: "/models/hewan/mikrofosil/radiolarian_spumellaria.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/8/86/Haeckel_Radiolaria_31.jpg",
            desc: "Mikrofosil laut dengan kerangka silika rumit yang menyerupai kaca.",
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
    // Link Pilihan Anda
    image:
      "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1634025439/01jatjq5vbdeervf2s8bj452nz.jpg",
    subCategories: [
      {
        title: "FOSIL JEJAK",
        desc: "Sisa aktivitas (Trace Fossils).",
        // Link Pilihan Anda
        image:
          "https://cdn.grid.id//crop/0x0:0x0/360x240/photo/2018/09/21/1585206829.jpg",
        items: [
          {
            name: "TRILOBITE",
            modelPath: "/models/hewan/vertebrata/komodo_dragon_lizard-v2.glb",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQljOpkz5Or31nutRIesJGJQ2ZB2uTjIOogDg&s",
            desc: "Arthropoda laut yang punah, salah satu kelompok hewan paling awal yang diketahui. Memiliki eksoskeleton keras dan tubuh bersegmen.",
          },
          {
            name: "TRILOBITE",
            modelPath: "/models/hewan/vertebrata/komodo_dragon_lizard-v2.glb",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQljOpkz5Or31nutRIesJGJQ2ZB2uTjIOogDg&s",
            desc: "Arthropoda laut yang punah, salah satu kelompok hewan paling awal yang diketahui. Memiliki eksoskeleton keras dan tubuh bersegmen.",
          },
          {
            name: "TRILOBITE",
            modelPath: "/models/hewan/vertebrata/komodo_dragon_lizard-v2.glb",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQljOpkz5Or31nutRIesJGJQ2ZB2uTjIOogDg&s",
            desc: "Arthropoda laut yang punah, salah satu kelompok hewan paling awal yang diketahui. Memiliki eksoskeleton keras dan tubuh bersegmen.",
          },
          {
            name: "TRILOBITE",
            modelPath: "/models/hewan/vertebrata/komodo_dragon_lizard-v2.glb",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQljOpkz5Or31nutRIesJGJQ2ZB2uTjIOogDg&s",
            desc: "Arthropoda laut yang punah, salah satu kelompok hewan paling awal yang diketahui. Memiliki eksoskeleton keras dan tubuh bersegmen.",
          },
          {
            name: "TRILOBITE",
            modelPath: "/models/hewan/vertebrata/komodo_dragon_lizard-v2.glb",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQljOpkz5Or31nutRIesJGJQ2ZB2uTjIOogDg&s",
            desc: "Arthropoda laut yang punah, salah satu kelompok hewan paling awal yang diketahui. Memiliki eksoskeleton keras dan tubuh bersegmen.",
          },
        ],
      },
      {
        title: "TERAWETKAN",
        desc: "Organisme utuh dalam amber/es.",
        // Link Pilihan Anda
        image:
          "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1634025439/01jatjwnnhdqartezvr6zbs9p6.jpg",
        items: [
          {
            name: "TRILOBITE",
            modelPath: "/models/hewan/vertebrata/komodo_dragon_lizard-v2.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/0/02/Ancient_mosquito.jpg",
            desc: "Serangga purba yang terperangkap utuh dalam getah pohon yang mengeras jutaan tahun.",
          },
          {
            name: "TRILOBITE",
            modelPath: "/models/hewan/vertebrata/komodo_dragon_lizard-v2.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/b/b5/Lyuba_Mammoth_Museum.jpg",
            desc: "Bayi mammoth yang terawetkan sempurna oleh es abadi di Siberia.",
          },
          {
            name: "TRILOBITE",
            modelPath: "/models/hewan/vertebrata/komodo_dragon_lizard-v2.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/8/8d/Neuropteris_ovata.jpg",
            desc: "Cetakan karbon dari daun tanaman purba yang mendominasi hutan Paleozoikum.",
          },
          {
            name: "TRILOBITE",
            modelPath: "/models/hewan/vertebrata/komodo_dragon_lizard-v2.glb",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQljOpkz5Or31nutRIesJGJQ2ZB2uTjIOogDg&s",
            desc: "Arthropoda laut yang punah, salah satu kelompok hewan paling awal yang diketahui. Memiliki eksoskeleton keras dan tubuh bersegmen.",
          },
          {
            name: "TRILOBITE",
            modelPath: "/models/hewan/vertebrata/komodo_dragon_lizard-v2.glb",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQljOpkz5Or31nutRIesJGJQ2ZB2uTjIOogDg&s",
            desc: "Arthropoda laut yang punah, salah satu kelompok hewan paling awal yang diketahui. Memiliki eksoskeleton keras dan tubuh bersegmen.",
          },
        ],
      },
      {
        title: "FOSIL TUBUH",
        desc: "Sisa tulang, gigi, dan cangkang.",
        // Link Pilihan Anda
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUZmQmivoRDpHKjtsx_1RgqVpFs_M2N3kwkg&s",
        items: [
          {
            name: "TRILOBITE",
            modelPath: "/models/hewan/vertebrata/komodo_dragon_lizard-v2.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/c/c2/Tyrannoskull.jpg",
            desc: "Tengkorak raja dinosaurus dengan rahang kuat penghancur tulang.",
          },
          {
            name: "TRILOBITE",
            modelPath: "/models/hewan/vertebrata/komodo_dragon_lizard-v2.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/3/3b/Megalodon_tooth_with_great_white_sharks_teeth-3-2.jpg",
            desc: "Gigi hiu raksasa purba yang ukurannya sebesar telapak tangan manusia.",
          },
          {
            name: "TRILOBITE",
            modelPath: "/models/hewan/vertebrata/komodo_dragon_lizard-v2.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/5/53/Smilodon_fatalis.jpg",
            desc: "Tengkorak macan gigi pedang dengan taring ikonik yang mematikan.",
          },
          {
            name: "TRILOBITE",
            modelPath: "/models/hewan/vertebrata/komodo_dragon_lizard-v2.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/6/69/Tric1.JPG",
            desc: "Tengkorak dinosaurus herbivora dengan tiga tanduk pelindung yang khas.",
          },
          {
            name: "TRILOBITE",
            modelPath: "/models/hewan/vertebrata/komodo_dragon_lizard-v2.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/a/a8/Deinonychus_claw.jpg",
            desc: "Cakar kaki melengkung tajam milik predator gesit Velociraptor.",
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
    // Link Pilihan Anda
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKJcJ0g7RSOhIRdbYDMswwF5OvWVdV9MFMVxn4LTqCJWu0DRMCdq1hS7q1VtiNc-YEN6B2FZIr5QI5jUwC-uFlbWqziccpYeI3-XlFge3XoNeqdJE7T_wRoYk1510uvHrQMNmrzDzU6z8/w1200-h630-p-k-no-nu/Deinosuchus+dinoanimals+com.jpg",
    subCategories: [
      {
        title: "PALEOZOIKUM",
        desc: "Ledakan kehidupan laut purba.",
        // Link Pilihan Anda
        image:
          "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1608281832/sp4i8vlqmegorxozvxce.jpg",
        items: [
          {
            name: "TRILOBITE",
            modelPath: "/models/hewan/vertebrata/komodo_dragon_lizard-v2.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/5/5e/Dunkleosteus_terrelli_2.jpg",
            desc: "Ikan purba raksasa berlapis baja, predator puncak lautan Paleozoikum.",
          },
          {
            name: "TRILOBITE",
            modelPath: "/models/hewan/vertebrata/komodo_dragon_lizard-v2.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/c/c3/Anomalocaris_canadensis.jpg",
            desc: "Predator pertama di Bumi dari periode Kambrium dengan bentuk tubuh alien.",
          },
          {
            name: "TRILOBITE",
            modelPath: "/models/hewan/vertebrata/komodo_dragon_lizard-v2.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/e/ea/Arthropleura_armata_reconstruction.jpg",
            desc: "Kelabang raksasa seukuran mobil, invertebrata darat terbesar dalam sejarah.",
          },
          {
            name: "TRILOBITE",
            modelPath: "/models/hewan/vertebrata/komodo_dragon_lizard-v2.glb",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQljOpkz5Or31nutRIesJGJQ2ZB2uTjIOogDg&s",
            desc: "Arthropoda laut yang punah, salah satu kelompok hewan paling awal yang diketahui. Memiliki eksoskeleton keras dan tubuh bersegmen.",
          },
          {
            name: "TRILOBITE",
            modelPath: "/models/hewan/vertebrata/komodo_dragon_lizard-v2.glb",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQljOpkz5Or31nutRIesJGJQ2ZB2uTjIOogDg&s",
            desc: "Arthropoda laut yang punah, salah satu kelompok hewan paling awal yang diketahui. Memiliki eksoskeleton keras dan tubuh bersegmen.",
          },
        ],
      },
      {
        title: "MESOZOIKUM",
        desc: "Zaman kejayaan reptil raksasa.",
        // Link Pilihan Anda
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4-f90I9kDih-MYUYrWd2v455oWs2jgyfDQzorbMVDMFESo_Mg515wcwZ4L-XmdqMAuKjtCwKITZnxD4UW9hhowELsPhgc1pOpqpzm3n33Bo4fx2POyFDpiJ51mvACxZ5C0TqveOhuwiNr/s1600/Pengertian+Zaman+Mesozoikum.jpg",
        items: [
          {
            name: "T-REX",
            modelPath: "/models/geologi/era_mesozoikum/t-rex.glb",
            // Link Perbaikan (Direct Link)
            image:
              "https://upload.wikimedia.org/wikipedia/commons/6/6f/Tyrannosaurus_rex_Reconstruction_by_Nobu_Tamura.jpg",
            desc: "Raja dinosaurus karnivora paling terkenal di dunia dengan gigitan mematikan.",
          },
          {
            name: "BRACHIOSAURUS",
            modelPath: "/models/geologi/era_mesozoikum/brachiosaurus_altithorax.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/1/10/Brachiosaurus_DB.jpg",
            desc: "Sauropoda leher panjang raksasa yang mampu menjangkau pohon tertinggi.",
          },
          {
            name: "TRICERATOPS",
            modelPath: "/models/geologi/era_mesozoikum/triceratop.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/0/00/Triceratops_horridus_12.jpg",
            desc: "Musuh bebuyutan T-Rex dengan pertahanan tanduk dan tameng leher yang kuat.",
          },
          {
            name: "VELOCIRAPTOR",
            modelPath: "/models/geologi/era_mesozoikum/velociraptor.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/a/a6/Velociraptor_mongoliensis.jpg",
            desc: "Predator kecil yang cerdas dan berburu secara berkelompok.",
          },
          {
            name: "MOSASAURUS",
            modelPath: "/models/geologi/era_mesozoikum/mosasaurus.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/a/a2/Mosasaurus_beaugei.jpg",
            desc: "Reptil laut raksasa penguasa lautan Cretaceous.",
          },
        ],
      },
      {
        title: "KENOZOIKUM",
        desc: "Era mamalia dan manusia.",
        // Link Pilihan Anda
        image:
          "https://sijai.com/wp-content/uploads/2017/05/Zaman-Neozoikum-perjuanganislami.blogspot.co_.id_.jpg",
        items: [
          {
            name: "MAMMOTH",
            modelPath: "/models/geologi/era_kenozoikum/mammoth.glb",
            // Link Perbaikan (Direct Link)
            image:
              "https://upload.wikimedia.org/wikipedia/commons/b/b9/Mammuthus_primigenius_by_Charles_Knight.jpg",
            desc: "Gajah purba berbulu tebal, ikon utama Zaman Es.",
          },
          {
            name: "SMILODON",
            modelPath: "/models/geologi/era_kenozoikum/smilodon.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/5/53/Smilodon_fatalis.jpg",
            desc: "Macan gigi pedang, predator puncak zaman mamalia.",
          },
          {
            name: "PARACERATHERIUM",
            modelPath: "/models/geologi/era_kenozoikum/dinorauls_paraceratherium.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/9/9b/Paraceratherium_orgosensis.jpg",
            desc: "Mamalia darat terbesar sepanjang sejarah, kerabat badak tanpa cula.",
          },
          {
            name: "TERROR BIRD",
            modelPath: "/models/geologi/era_kenozoikum/phorusrhacos_longissimus_terror_bird.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/c/c2/Phorusrhacos.jpg",
            desc: "Burung pemangsa raksasa yang tidak bisa terbang.",
          },
        ],
      },
    ],
  },
};