// Nanti jika Backend sudah siap, ganti ini dengan fetch() ke Flask
// Contoh: const BASE_URL = 'http://localhost:5000/api';

export const getArtifacts = async () => {
  // Simulasi delay jaringan
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Mahkota Raja",
          category: "Numismatik & Heraldik",
          description: "Simbol kekuasaan tertinggi kerajaan masa lampau.",
          // Minta 3D dev menyediakan file dummy dulu, misal 'box.glb' jika belum ada
          modelUrl: "/models/crown_placeholder.glb",
        },
        {
          id: 2,
          name: "Kujang Siliwangi",
          category: "Benda Bersejarah",
          description: "Senjata pusaka khas tatar Sunda.",
          modelUrl: "/models/kujang_placeholder.glb",
        },
        {
          id: 3,
          name: "Fosil Triceratops",
          category: "Spesimen Alam",
          description: "Ditemukan di lapisan tanah berumur 68 juta tahun.",
          modelUrl: "/models/fossil_placeholder.glb",
        },
      ]);
    }, 1000);
  });
};
