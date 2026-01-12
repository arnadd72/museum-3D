import React, { Suspense, Component, useState, useRef, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Html,
  Float,
  Sparkles,
  Center,
  Resize,
} from "@react-three/drei";
import "../App.css";
import "./ModelViewer.css";

// --- 1. ERROR BOUNDARY ---
class ModelErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Gagal memuat model:", error);
  }
  render() {
    if (this.state.hasError) {
      return <PlaceholderModel color={this.props.color} />;
    }
    return this.props.children;
  }
}

// --- 2. PLACEHOLDER (WIREFRAME) ---
const PlaceholderModel = ({ color }) => {
  const meshRef = useRef();
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.5;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} scale={1.8}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={color || "#00ff88"}
          wireframe={true}
          transparent
          opacity={0.8}
          emissive={color || "#00ff88"}
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
};

// --- 3. MODEL LOADER ---
const Model3D = ({ path }) => {
  const { scene } = useGLTF(path);
  // Clone scene agar aman saat navigasi
  const clonedScene = useMemo(() => scene.clone(), [scene]);
  return <primitive object={clonedScene} />;
};

// --- 4. LOADING ---
const Loader = () => {
  return (
    <Html center>
      <div className="loader-text">MEMUAT ASET...</div>
    </Html>
  );
};

// --- MAIN COMPONENT ---
const ModelViewer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("OVERVIEW");

  const data = location.state?.itemData;

  // --- 5. SMART DATA GENERATOR (CUSTOMIZABLE) ---
  const extendedData = useMemo(() => {
    if (!data) return null;

    const dbDesc = data.description || {};
    const name = data.name.toUpperCase();

    // Default Values (Bisa Anda ganti default-nya di sini)
    let info = {
      // TAB 1: RINGKASAN
      scientificName:
        data.name.charAt(0) + data.name.slice(1).toLowerCase() + " sp.",
      category: data.category || "Unknown Class",
      taxonomy: "Kingdom Animalia",
      location: "Global / Tersebar Luas",
      status: "PUNAH",

      // TAB 2: DATA FISIK
      diet: "Tidak Diketahui",
      size: "Bervariasi",
      weight: "Tidak Diketahui",
      lifespan: "Tidak Diketahui", // Tambahan baru yang simpel
      sizeCompare: 50, // 0-100% relative to human

      // TAB 3: EDUKASI
      period: "Zaman Prasejarah",
      funFact:
        dbDesc.key || "Spesies ini memiliki peran unik dalam ekosistem purba.",
      discoveryYear: "Abad ke-19", // Tambahan baru
    };

    // --- LOGIKA KUSTOMISASI DATA BERDASARKAN NAMA ---
    // Anda bisa menambahkan 'else if' baru untuk model lain di sini.

    if (name.includes("REX")) {
      info.scientificName = "Tyrannosaurus rex";
      info.category = "Theropoda";
      info.taxonomy = "Dinosauria > Saurischia";
      info.location = "Amerika Utara";
      info.diet = "Karnivora (Daging)";
      info.size = "Panjang: 12-13 Meter";
      info.weight = "8.000 - 14.000 kg";
      info.lifespan = "~30 Tahun";
      info.sizeCompare = 100; // Sangat Besar
      info.period = "Kapur Akhir (68-66 Juta thn)";
      info.discoveryYear = "1902 (Barnum Brown)";
    } else if (name.includes("TRILOBITE")) {
      info.scientificName = "Trilobita classis";
      info.category = "Arthropoda";
      info.taxonomy = "Arthropoda > Trilobita";
      info.location = "Lautan Seluruh Dunia";
      info.diet = "Detritivora (Sisa Organik)";
      info.size = "3 - 70 cm";
      info.weight = "< 1 kg";
      info.lifespan = "3 - 5 Tahun";
      info.sizeCompare = 10; // Kecil
      info.period = "Kambrium - Permian";
      info.discoveryYear = "Sejak Awal Paleontologi";
    } else if (name.includes("AMMONITE")) {
      info.scientificName = "Ammonoidea";
      info.category = "Cephalopoda";
      info.taxonomy = "Mollusca > Cephalopoda";
      info.location = "Lautan Terbuka";
      info.diet = "Karnivora (Plankton/Krustasea)";
      info.size = "Diameter: 20cm - 2m";
      info.weight = "1 - 100 kg";
      info.lifespan = "Singkat (Reproduksi Cepat)";
      info.sizeCompare = 25;
      info.period = "Devon - Kapur Akhir";
      info.discoveryYear = "Zaman Kuno (Disebut 'Ular Batu')";
    }
    // ... Tambahkan else if lain untuk model Anda ...

    return info;
  }, [data]);

  if (!data) {
    return (
      <div className="viewer-error">
        <h1>AKSES DITOLAK</h1>
        <button onClick={() => navigate("/gallery")}>KEMBALI KE GALERI</button>
      </div>
    );
  }

  const themeColor = data.color || "#00ff88";
  const hologramCyan = "#00d2ff";

  return (
    <div className="viewer-container">
      {/* BACKGROUND 3D */}
      <div className="canvas-wrapper">
        <div className="hologram-overlay"></div>
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 2, 8], fov: 40 }}>
          <fog attach="fog" args={["#000000", 5, 30]} />
          <Sparkles
            count={100}
            scale={5}
            size={2}
            speed={0.5}
            color={hologramCyan}
            position={[0, 0, 0]}
          />

          <ambientLight intensity={2.5} color="#ffffff" />
          <directionalLight
            position={[10, 10, 5]}
            intensity={3.5}
            color="#ffffff"
            castShadow
          />
          <directionalLight
            position={[-10, 5, -10]}
            intensity={2.0}
            color="#b0e0ff"
          />
          <pointLight
            position={[0, -2, 0]}
            intensity={1.5}
            color="#ffffff"
            distance={10}
          />

          <Suspense fallback={<Loader />}>
            <Float
              speed={1.5}
              rotationIntensity={0.2}
              floatIntensity={0.5}
              position={[0, -0.5, 0]}
            >
              <group scale={1.5}>
                <ModelErrorBoundary color={themeColor}>
                  <Center>
                    <Resize scale={3}>
                      <Model3D path={data.modelPath} />
                    </Resize>
                  </Center>
                </ModelErrorBoundary>
              </group>
            </Float>
          </Suspense>

          <OrbitControls
            autoRotate
            autoRotateSpeed={0.5}
            makeDefault
            minDistance={3}
            maxDistance={15}
          />
        </Canvas>
      </div>

      {/* UI LAYER */}
      <div className="ui-top-left">
        <button onClick={() => navigate(-1)} className="back-btn">
          ← KEMBALI
        </button>
      </div>

      <div className="ui-bottom-left">
        <div className="item-id" style={{ color: themeColor }}>
          /// ID: {data.name.substring(0, 3)}-{Math.floor(Math.random() * 9999)}
        </div>
        <h1
          className="main-title"
          style={{ WebkitTextStroke: `1px ${themeColor}` }}
        >
          {data.name}
        </h1>
        <div
          style={{
            color: "#aaa",
            letterSpacing: "2px",
            marginTop: "10px",
            fontStyle: "italic",
            fontSize: "1.1rem",
          }}
        >
          {extendedData.scientificName}
        </div>
      </div>

      <div className="ui-right-panel">
        <div className="panel-tabs">
          <button
            className={activeTab === "OVERVIEW" ? "tab active" : "tab"}
            onClick={() => setActiveTab("OVERVIEW")}
            style={
              activeTab === "OVERVIEW"
                ? { borderBottom: `2px solid ${themeColor}`, color: themeColor }
                : {}
            }
          >
            RINGKASAN
          </button>
          <button
            className={activeTab === "ANATOMY" ? "tab active" : "tab"}
            onClick={() => setActiveTab("ANATOMY")}
            style={
              activeTab === "ANATOMY"
                ? { borderBottom: `2px solid ${themeColor}`, color: themeColor }
                : {}
            }
          >
            DATA FISIK
          </button>
          <button
            className={activeTab === "FUNFACT" ? "tab active" : "tab"}
            onClick={() => setActiveTab("FUNFACT")}
            style={
              activeTab === "FUNFACT"
                ? { borderBottom: `2px solid ${themeColor}`, color: themeColor }
                : {}
            }
          >
            EDUKASI
          </button>
        </div>

        <div className="panel-content">
          {/* === TAB 1: RINGKASAN (Simple & Informatif) === */}
          {activeTab === "OVERVIEW" && (
            <>
              <h3 className="panel-heading">KLASIFIKASI & ASAL</h3>
              <p className="panel-desc">
                {data.description ? data.description.short : data.desc}
              </p>

              <div className="info-grid">
                <div className="info-item">
                  <label style={{ color: themeColor }}>KELOMPOK</label>
                  <span>{extendedData.category}</span>
                </div>
                <div className="info-item">
                  <label style={{ color: themeColor }}>TAKSONOMI</label>
                  <span style={{ fontSize: "0.8rem" }}>
                    {extendedData.taxonomy}
                  </span>
                </div>
                <div className="info-item">
                  <label style={{ color: themeColor }}>HABITAT</label>
                  <span>{extendedData.location}</span>
                </div>
                <div className="info-item">
                  <label style={{ color: themeColor }}>STATUS</label>
                  <span style={{ color: "#ff3333", fontWeight: "bold" }}>
                    {extendedData.status}
                  </span>
                </div>
              </div>
            </>
          )}

          {/* === TAB 2: DATA FISIK (Simple & To-The-Point) === */}
          {activeTab === "ANATOMY" && (
            <>
              <h3 className="panel-heading">KARAKTERISTIK FISIK</h3>

              <div className="info-grid">
                <div className="info-item">
                  <label style={{ color: themeColor }}>DIET (MAKANAN)</label>
                  <span>{extendedData.diet}</span>
                </div>
                <div className="info-item">
                  <label style={{ color: themeColor }}>ESTIMASI UMUR</label>
                  <span>{extendedData.lifespan}</span>
                </div>
                <div className="info-item">
                  <label style={{ color: themeColor }}>UKURAN TUBUH</label>
                  <span>{extendedData.size}</span>
                </div>
                <div className="info-item">
                  <label style={{ color: themeColor }}>BERAT (PERKIRAAN)</label>
                  <span>{extendedData.weight}</span>
                </div>
              </div>

              {/* Visualisasi Size Bar Sederhana */}
              <div
                style={{
                  marginTop: "30px",
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                  paddingTop: "20px",
                }}
              >
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: themeColor,
                    fontWeight: "bold",
                    marginBottom: "10px",
                    letterSpacing: "1px",
                  }}
                >
                  SKALA UKURAN (VS MANUSIA)
                </div>

                {/* Bar Manusia (Fixed) */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <div
                    style={{ width: "80px", fontSize: "0.7rem", color: "#888" }}
                  >
                    MANUSIA (1.7m)
                  </div>
                  <div
                    style={{
                      flex: 1,
                      background: "#333",
                      height: "6px",
                      borderRadius: "3px",
                    }}
                  >
                    <div
                      style={{
                        width: "30%",
                        height: "100%",
                        background: "#fff",
                        borderRadius: "3px",
                      }}
                    ></div>
                  </div>
                </div>

                {/* Bar Spesimen (Dynamic) */}
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      width: "80px",
                      fontSize: "0.7rem",
                      color: themeColor,
                    }}
                  >
                    SPESIMEN
                  </div>
                  <div
                    style={{
                      flex: 1,
                      background: "#333",
                      height: "6px",
                      borderRadius: "3px",
                    }}
                  >
                    <div
                      style={{
                        width: `${extendedData.sizeCompare}%`,
                        height: "100%",
                        background: themeColor,
                        borderRadius: "3px",
                        boxShadow: `0 0 10px ${themeColor}`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* === TAB 3: EDUKASI (Fakta & Sejarah) === */}
          {activeTab === "FUNFACT" && (
            <>
              <h3 className="panel-heading">WAWASAN & SEJARAH</h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {/* Periode Waktu */}
                <div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: themeColor,
                      fontWeight: "bold",
                      marginBottom: "5px",
                    }}
                  >
                    PERIODE HIDUP
                  </div>
                  <div
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      padding: "10px",
                      borderRadius: "4px",
                      textAlign: "center",
                      color: "#fff",
                      fontWeight: "bold",
                      border: `1px solid ${themeColor}`,
                    }}
                  >
                    {extendedData.period}
                  </div>
                </div>

                {/* Tahun Penemuan (Info Baru) */}
                <div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: themeColor,
                      fontWeight: "bold",
                      marginBottom: "5px",
                    }}
                  >
                    SEJARAH PENEMUAN
                  </div>
                  <div style={{ color: "#ccc", fontSize: "0.9rem" }}>
                    Pertama kali diidentifikasi atau dipelajari secara luas
                    pada:{" "}
                    <strong style={{ color: "#fff" }}>
                      {extendedData.discoveryYear}
                    </strong>
                  </div>
                </div>

                {/* Fakta Unik (Key Description) */}
                <div
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    padding: "15px",
                    borderLeft: `3px solid ${themeColor}`,
                    marginTop: "5px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: "#fff",
                      fontWeight: "bold",
                      marginBottom: "5px",
                    }}
                  >
                    TAHUKAH KAMU?
                  </div>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      color: "#ccc",
                      fontStyle: "italic",
                      lineHeight: "1.6",
                    }}
                  >
                    "{extendedData.funFact}"
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "10px",
                    fontSize: "0.7rem",
                    color: "#555",
                  }}
                >
                  Database v3.0 // Asset Path: {data.modelPath}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModelViewer;
