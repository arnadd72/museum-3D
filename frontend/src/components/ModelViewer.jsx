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
  // Clone scene agar aman saat navigasi bolak-balik
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  // --- PERBAIKAN: HAPUS BAGIAN TRAVERSE EMISSIVE ---
  // Kode traverse sebelumnya dihapus karena membuat model bertekstur jadi hitam.
  // Kita mengandalkan cahaya manual yang sudah terang.

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

  // --- 5. SMART DATA GENERATOR ---
  const extendedData = useMemo(() => {
    if (!data) return null;

    // Ambil deskripsi dari database jika ada
    const dbDesc = data.description || {};

    let info = {
      scientificName:
        data.name.charAt(0) + data.name.slice(1).toLowerCase() + " sp.",
      location: "Tidak Diketahui",
      period: "Prasejarah",
      size: "Bervariasi",
      weight: "Tidak Diketahui",
      taxonomy: "Animalia > Chordata",
      // LOGIKA: Gunakan deskripsi KUNCI (Key) untuk Edukasi
      funFact:
        dbDesc.key ||
        "Spesimen ini merupakan bagian penting dari sejarah evolusi bumi.",
      diet: "Omnivora",
      sizeCompare: 50,
    };

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
          {/* EFEK HOLOGRAM (HANYA PARTIKEL & FOG) */}
          <fog attach="fog" args={["#000000", 5, 30]} />

          <Sparkles
            count={100}
            scale={5}
            size={2}
            speed={0.5}
            color={hologramCyan}
            position={[0, 0, 0]}
          />

          {/* --- PENCAHAYAAN MANUAL (AGAR MODEL JELAS) --- */}
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
                  {/* UPDATE: Gunakan Center (tanpa prop top) agar pas di tengah */}
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

      {/* --- UI LAYER --- */}

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
          {/* TAB 1: RINGKASAN */}
          {activeTab === "OVERVIEW" && (
            <>
              <h3 className="panel-heading">KLASIFIKASI & ASAL</h3>

              {/* --- GUNAKAN DESKRIPSI SINGKAT (SHORT) --- */}
              <p className="panel-desc">
                {data.description ? data.description.short : data.desc}
              </p>

              <div className="info-grid">
                <div className="info-item">
                  <label style={{ color: themeColor }}>KATEGORI</label>
                  <span>{data.category}</span>
                </div>
                <div className="info-item">
                  <label style={{ color: themeColor }}>TAKSONOMI</label>
                  <span style={{ fontSize: "0.8rem", textTransform: "none" }}>
                    {extendedData.taxonomy}
                  </span>
                </div>
                <div className="info-item">
                  <label style={{ color: themeColor }}>LOKASI TEMUAN</label>
                  <span style={{ fontSize: "0.9rem" }}>
                    {extendedData.location}
                  </span>
                </div>
                <div className="info-item">
                  <label style={{ color: themeColor }}>STATUS</label>
                  <span style={{ color: "#ff3333" }}>PUNAH</span>
                </div>
              </div>
            </>
          )}

          {/* TAB 2: DATA FISIK */}
          {activeTab === "ANATOMY" && (
            <>
              <h3 className="panel-heading">STATISTIK BIOLOGIS</h3>

              <div className="info-grid">
                <div className="info-item">
                  <label style={{ color: themeColor }}>MAKANAN</label>
                  <span>{extendedData.diet}</span>
                </div>
                <div className="info-item">
                  <label style={{ color: themeColor }}>DIMENSI</label>
                  <span style={{ fontSize: "0.9rem" }}>
                    {extendedData.size}
                  </span>
                </div>
                <div className="info-item">
                  <label style={{ color: themeColor }}>BERAT</label>
                  <span>{extendedData.weight}</span>
                </div>
              </div>

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
                  PERBANDINGAN UKURAN
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <div
                    style={{ width: "60px", fontSize: "0.7rem", color: "#888" }}
                  >
                    MANUSIA
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
                        width: "20%",
                        height: "100%",
                        background: "#fff",
                        borderRadius: "3px",
                      }}
                    ></div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      width: "60px",
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
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: "#666",
                    marginTop: "5px",
                    fontStyle: "italic",
                  }}
                >
                  *Skala aproksimasi visual
                </div>
              </div>
            </>
          )}

          {/* TAB 3: EDUKASI */}
          {activeTab === "FUNFACT" && (
            <>
              <h3 className="panel-heading">WAWASAN & SEJARAH</h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "25px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: themeColor,
                      fontWeight: "bold",
                      marginBottom: "5px",
                      letterSpacing: "1px",
                    }}
                  >
                    PERIODE WAKTU
                  </div>
                  <div
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      padding: "8px",
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
                    Tahukah Kamu?
                  </div>

                  {/* --- OTOMATIS MENGGUNAKAN KEY DESCRIPTION --- */}
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
                  Database v2.4 // {data.modelPath || "No Asset"}
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
