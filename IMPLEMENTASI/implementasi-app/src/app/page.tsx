"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronLeft, ChevronRight, ShieldCheck, Target, TrendingUp, Cpu,
    LayoutDashboard, Database, Smartphone, MessageSquare, Building2,
    Share2, CloudCog, FileText, Globe, Landmark, Network, Lightbulb,
    AlertTriangle, Camera, CheckCircle2, ShieldAlert, Users, Map, Clock, HeartHandshake,
    Stethoscope, Lock, Heart, Cloud
} from "lucide-react";

// --- Reusable Components ---

const SlideWrapper = ({ children, title, subtitle, icon: Icon }: { children: React.ReactNode, title: string, subtitle: string, icon?: React.ElementType }) => (
    <div className="flex flex-col h-full p-4 sm:p-8 md:p-14 relative overflow-hidden bg-transparent text-slate-900">
        {/* Decorative background elements for each slide */}
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] glow-orb" style={{ '--orb-color': '#0A5C36' } as React.CSSProperties} />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] glow-orb" style={{ '--orb-color': '#1E3A8A' } as React.CSSProperties} />

        <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 relative z-10 border-l-[6px] border-emerald-600 pl-8"
        >
            <div className="flex items-center gap-5">
                {Icon && (
                    <motion.div 
                        initial={{ scale: 0.8, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        className="p-3 bg-white/60 backdrop-blur-xl rounded-2xl text-emerald-700 border border-white/40 shadow-xl"
                    >
                        <Icon size={32} strokeWidth={2.5} />
                    </motion.div>
                )}
                <div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                        {title}
                    </h2>
                    <div className="text-[11px] font-black text-emerald-600/60 mt-2 tracking-[0.3em] uppercase flex items-center gap-2">
                        <span className="h-px w-8 bg-emerald-600/30"></span>
                        {subtitle}
                    </div>
                </div>
            </div>
        </motion.div>

        <div className="flex-1 relative z-10 overflow-y-auto pr-6 pb-24 custom-scrollbar">
            {children}
        </div>
    </div>
);

const Card = ({ title, children, icon: Icon, delay = 0, variant = "default" }: { title: string, children: React.ReactNode, icon?: React.ElementType, delay?: number, variant?: "default" | "highlight" | "warning" | "blue" }) => {
    const variants = {
        default: "premium-card p-8",
        highlight: "premium-card p-8 border-emerald-200/50 bg-white/80 transition-all duration-700",
        warning: "premium-card p-8 border-rose-200/40 bg-white/80",
        blue: "premium-card p-8 border-blue-200/40 bg-white/80 shadow-blue-900/5"
    };

    const iconColors = {
        default: "bg-slate-100/80 text-slate-600 shadow-inner",
        highlight: "bg-emerald-600 text-white shadow-emerald-900/10",
        warning: "bg-rose-600 text-white shadow-rose-900/10",
        blue: "bg-blue-600 text-white shadow-blue-900/10"
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`${variants[variant]} group relative flex flex-col`}
        >
            <div className="flex items-start gap-5 mb-6">
                {Icon && (
                    <div className={`p-3.5 rounded-2xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-3 ${iconColors[variant]}`}>
                        <Icon size={24} strokeWidth={2.5} />
                    </div>
                )}
                <div>
                    <h3 className="font-black text-xl text-slate-900 leading-tight group-hover:text-emerald-800 transition-colors">
                        {title}
                    </h3>
                    <div className="h-0.5 w-8 bg-slate-200 mt-2 group-hover:w-16 group-hover:bg-emerald-500 transition-all duration-700"></div>
                </div>
            </div>
            <div className="text-slate-600/90 text-[15px] leading-relaxed font-medium flex-1">
                {children}
            </div>
            {/* Shimmer element on hover */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-1000 shimmer" />
        </motion.div>
    );
};

const Tag = ({ children, color = "blue" }: { children: React.ReactNode, color?: "blue" | "green" | "red" | "amber" | "slate" }) => {
    const colors = {
        blue: "bg-blue-600 text-white border-blue-400",
        green: "bg-emerald-600 text-white border-emerald-400",
        red: "bg-rose-600 text-white border-rose-400",
        amber: "bg-amber-500 text-white border-amber-300",
        slate: "bg-slate-900 text-white border-slate-700",
    };
    return <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] border shadow-lg shadow-black/5 ${colors[color]}`}>{children}</span>;
};

// --- Main Presentation Component ---

export default function Presentation() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        // Slide 1: Executive Cover
        {
            content: (
                <div className="flex flex-col items-center justify-center h-full text-center p-8 relative overflow-hidden">
                    {/* Unique cover background elements */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                    <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] glow-orb opacity-30" style={{ '--orb-color': '#0A5C36' } as React.CSSProperties} />
                    <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] glow-orb opacity-30" style={{ '--orb-color': '#1E3A8A' } as React.CSSProperties} />
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10 w-full max-w-7xl"
                    >
                        <div className="flex justify-center gap-4 mb-12 overflow-hidden">
                            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                                <Tag color="amber">Executive Strategic Proposal</Tag>
                            </motion.div>
                            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                                <Tag color="slate">Pemerintah Kota Cirebon</Tag>
                            </motion.div>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 xl:gap-24 mb-12 text-center lg:text-left">
                            <motion.div 
                                className="flex justify-center gap-4 md:gap-6 flex-shrink-0 relative scale-100 sm:scale-110 lg:scale-125 xl:scale-150 py-8 md:py-12"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 1 }}
                            >
                                <div className="w-32 h-44 sm:w-40 sm:h-56 md:w-48 md:h-64 rounded-[2.5rem] bg-white border-[6px] border-white shadow-2xl relative overflow-hidden flex items-center justify-center z-10 rotate-[-4deg] hover:rotate-0 transition-transform duration-700">
                                    <Image src="/Walikota.png" alt="Wali Kota Cirebon" fill className="object-cover" />
                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-emerald-950/95 via-emerald-950/70 to-transparent p-4 flex flex-col items-center">
                                        <div className="text-white font-black text-[9px] tracking-widest uppercase text-center leading-tight">Pimpinan Daerah 01</div>
                                    </div>
                                </div>
                                <div className="w-32 h-44 sm:w-40 sm:h-56 md:w-48 md:h-64 rounded-[2.5rem] bg-white border-[6px] border-white shadow-2xl relative overflow-hidden flex items-center justify-center mt-8 md:mt-12 -ml-8 md:-ml-12 rotate-[4deg] hover:rotate-0 transition-transform duration-700 hover:z-20">
                                    <Image src="/Wakil_Walikota.png" alt="Wakil Wali Kota Cirebon" fill className="object-cover" />
                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-emerald-950/95 via-emerald-950/70 to-transparent p-4 flex flex-col items-center">
                                        <div className="text-white font-black text-[9px] tracking-widest uppercase">Pimpinan Daerah 02</div>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="max-w-2xl lg:pl-16">
                                <motion.h1 
                                    className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-slate-950 tracking-tighter mb-6 md:mb-8 leading-[0.85]"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6, duration: 0.8 }}
                                >
                                    SMART CITY <br />
                                    <span className="text-gradient-premium drop-shadow-xl">CIREBON 2029</span>
                                </motion.h1>
                                <motion.p 
                                    className="text-xl md:text-3xl text-slate-500 font-bold leading-relaxed tracking-tight mb-12 max-w-xl mx-auto lg:mx-0"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    Arsitektur Masa Depan Tata Kelola Digital Berlandaskan <i>Integritas & Kemanusiaan.</i>
                                </motion.p>
                                <motion.div 
                                    className="flex gap-4 items-center justify-center lg:justify-start"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 1, duration: 0.8 }}
                                >
                                    <div className="h-2.5 w-32 bg-emerald-600 rounded-full shadow-[0_0_20px_rgba(10,92,54,0.3)]"></div>
                                    <div className="h-2.5 w-10 bg-amber-500 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.2)]"></div>
                                    <div className="h-2.5 w-10 bg-blue-600 rounded-full shadow-[0_0_20px_rgba(30,58,138,0.2)]"></div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )
        },
        // Slide 2: Instruksi Presiden
        {
            content: (
                <SlideWrapper title="Mandat Nasional & Arahan Tertinggi" subtitle="Penegakan SPBE & Reformasi Birokrasi" icon={ShieldCheck}>
                    <div className="flex flex-col gap-6 max-w-7xl mx-auto pb-10">
                        {/* Top Header Banner for Perpres */}
                        <motion.div 
                            className="bg-slate-950 rounded-[2.5rem] p-8 md:p-10 border-l-[12px] border-amber-500 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="absolute right-0 top-0 opacity-[0.05] group-hover:scale-110 transition-transform duration-1000 pointer-events-none">
                                <Landmark size={300} />
                            </div>
                            <div className="relative z-10 flex-1">
                                <div className="flex flex-wrap items-center gap-4 mb-4">
                                    <Tag color="amber">Regulasi Pengikat</Tag>
                                    <div className="text-slate-400 font-bold text-sm tracking-widest uppercase">Perpres No. 82 Tahun 2023</div>
                                </div>
                                <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                                    Percepatan Transformasi Digital <span className="text-amber-500">Keterpaduan Layanan Nasional.</span>
                                </h3>
                                <p className="text-slate-300 text-base md:text-lg font-medium leading-relaxed italic border-l-4 border-slate-700 pl-4">
                                    &quot;Pemerintah Daerah dilarang keras membangun aplikasi baru yang parsial dan tumpang tindih.&quot;
                                </p>
                            </div>
                            <div className="relative z-10 w-full md:w-auto shrink-0 flex justify-center">
                                <div className="w-24 h-24 md:w-40 md:h-40 rounded-[2rem] bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                                    <Landmark size={64} className="scale-75 md:scale-100" />
                                </div>
                            </div>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <Card title="Urgensi: Moratorium Aplikasi" icon={ShieldAlert} delay={0.2} variant="warning">
                                <div className="flex flex-col h-full space-y-6">
                                    <p className="text-lg font-bold text-slate-800 leading-snug">
                                        Instruksi Presiden RI untuk menebas <i>Silo Mentality</i> birokrasi digital daerah.
                                    </p>
                                    <ul className="space-y-4 text-[14px] font-semibold text-slate-600 flex-1">
                                        <li className="flex gap-4 items-start"><CheckCircle2 className="text-rose-500 shrink-0 mt-0.5" size={20} /> <span className="leading-relaxed">Stop pembuatan aplikasi pemda baru yang spesifik pada satu dinas.</span></li>
                                        <li className="flex gap-4 items-start"><CheckCircle2 className="text-rose-500 shrink-0 mt-0.5" size={20} /> <span className="leading-relaxed">Konsolidasi 27.000 aplikasi nasional yang redundan dan membagi fokus layanan.</span></li>
                                    </ul>
                                    <div className="bg-rose-50/80 rounded-2xl p-4 border border-rose-100 flex items-center gap-4 mt-auto">
                                        <ShieldAlert className="text-rose-500 shrink-0" size={28} />
                                        <div>
                                            <div className="text-rose-900 font-black text-[10px] tracking-widest uppercase mb-1">Status Nasional</div>
                                            <div className="text-rose-700 font-bold text-sm leading-none">Fase Reduksi Aplikasi Aktif</div>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            <Card title="Solusi: INA Digital (GovTech)" icon={Globe} delay={0.3} variant="blue">
                                <div className="flex flex-col h-full space-y-6">
                                    <p className="text-lg font-bold text-slate-800 leading-snug">
                                        Pembentukan Satu Portal Nasional terintegrasi. Wajib terkoneksi dengan portal daerah.
                                    </p>
                                    <ul className="space-y-4 text-[14px] font-semibold text-slate-600 flex-1">
                                        <li className="flex gap-4 items-start"><CheckCircle2 className="text-blue-500 shrink-0 mt-0.5" size={20} /> <span className="leading-relaxed">Sektor Prioritas Integrasi: Kesehatan, Pendidikan, Adminduk & Bantuan Sosial.</span></li>
                                        <li className="flex gap-4 items-start"><CheckCircle2 className="text-blue-500 shrink-0 mt-0.5" size={20} /> <span className="leading-relaxed">Penerapan Ekosistem Identitas Digital Tunggal (IKD) untuk Single Sign-On (SSO).</span></li>
                                    </ul>
                                    <div className="bg-blue-50/80 rounded-2xl p-4 border border-blue-100 flex items-center gap-4 mt-auto">
                                        <Globe className="text-blue-500 shrink-0" size={28} />
                                        <div>
                                            <div className="text-blue-900 font-black text-[10px] tracking-widest uppercase mb-1">Target Sinkronisasi Daerah</div>
                                            <div className="text-blue-700 font-bold text-sm leading-none">Batas Akhir Berjalan: Agustus 2025</div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </SlideWrapper>
            )
        },
        // Slide 3: Arsitektur SPBE & Kinerja
        {
            content: (
                <SlideWrapper title="Pedoman Strategis Kemendagri" subtitle="Sinkronisasi Arsitektur SPBE & Kinerja Eksekutif" icon={Landmark}>
                    <div className="grid md:grid-cols-2 gap-12 h-full items-center max-w-7xl mx-auto pb-10">
                        <Card title="Satu Arsitektur Nasional" icon={Network} delay={0.1}>
                            <p className="mb-8 text-slate-600 leading-relaxed font-medium">Birokrasi digital tidak lagi berbasis &quot;keinginan sektoral&quot;. Wajib mematuhi <strong>Peta Jalan Arsitektur SPBE Nasional</strong> Kemenpan-RB.</p>
                            <div className="p-6 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200 relative group overflow-hidden">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Mandat Penganggaran:</p>
                                <p className="text-base italic font-bold text-slate-700 leading-relaxed relative z-10">
                                    &quot;Setiap Rupiah APBD untuk IT harus terjustifikasi dalam dokumen arsitektur digital yang terintegrasi.&quot;
                                </p>
                            </div>
                        </Card>
                        <Card title="Indikator Kinerja Wali Kota" icon={Target} delay={0.2} variant="highlight">
                            <p className="mb-8 text-slate-600 leading-relaxed font-medium">Skor kematangan SPBE bukan sebatas rapor teknis, melainkan barometer utama kecakapan dalam mengorkestrasi tata kelola.</p>
                            <div className="flex items-center gap-8 p-8 bg-emerald-600 text-white rounded-[2.5rem] shadow-2xl shadow-emerald-900/10 group overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                                <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                                    <TrendingUp size={36} />
                                </div>
                                <div className="relative z-10">
                                    <h4 className="font-black text-3xl tracking-tighter leading-none mb-2">KEY KPI 2029</h4>
                                    <p className="text-emerald-100/70 text-[10px] font-black uppercase tracking-[0.3em]">Indikator Utama Keberhasilan</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </SlideWrapper>
            )
        },
        // Slide 4: Janji Politik & Visi Cirebon (SETARA)
        {
            content: (
                <SlideWrapper title="Janji Politik & Visi Cirebon" subtitle="Menerjemahkan SETARA 2024-2029 ke dalam Sistem" icon={Lightbulb}>
                    <div className="flex flex-col gap-10 h-full max-w-7xl mx-auto pb-10">
                        <div className="p-14 bg-slate-950 rounded-[3.5rem] text-white relative overflow-hidden shadow-2xl border-b-[14px] border-amber-500 group">
                            <div className="absolute right-0 top-0 opacity-[0.04] scale-150 transform -translate-y-1/4 translate-x-1/4 group-hover:scale-125 transition-transform duration-[3s]">
                                <Target size={600} />
                            </div>
                            <Tag color="amber">Visi Strategis</Tag>
                            <h3 className="text-5xl md:text-6xl font-black mb-6 mt-6 relative z-10 text-amber-500 tracking-tighter leading-none">Sinergi Aspiratif & Profesional</h3>
                            <p className="text-slate-300 text-2xl md:text-3xl relative z-10 max-w-5xl font-medium leading-relaxed italic">
                                Mewujudkan kesejahteraan melalui <strong>Kartu Kasih Sayang</strong> yang didukung oleh kepastian integritas Satu Data Cirebon.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-10">
                            <Card title="Aduan Real-Time" icon={MessageSquare} delay={0.2}>
                                <p className="text-lg font-medium text-slate-700">Setiap suara warga ditangkap, diklarifikasi, dan diselesaikan dalam modul <i>Citizen Care</i> yang profesional dan transparan.</p>
                            </Card>
                            <Card title="Intervensi Tepat Sasaran" icon={HeartHandshake} delay={0.3} variant="highlight">
                                <p className="text-lg font-medium text-slate-700">Algoritma pencegahan <em>double-funding</em> bantuan sosial lewat rekonsiliasi database lintas instansi Pemkot secara otomatis.</p>
                            </Card>
                        </div>
                    </div>
                </SlideWrapper>
            )
        },
        // Slide 5: Peran Sentral DKIS
        {
            content: (
                <SlideWrapper title="Peran Sentral DKIS Cirebon" subtitle="Orkestrator Utama Arus Data Smart City" icon={Network}>
                    <div className="grid md:grid-cols-2 gap-12 h-full items-center max-w-7xl mx-auto pb-10">
                        <div className="space-y-10">
                            <div className="space-y-4">
                                <h3 className="text-5xl font-black text-emerald-900 leading-none tracking-tighter underline decoration-amber-500 decoration-[10px] underline-offset-10 drop-shadow-sm">Bukan Sekadar Teknikus.</h3>
                                <p className="text-2xl text-slate-500 font-bold leading-tight">Melainkan <strong>Dirijen (Orkestrator)</strong> utama seluruh aliran data strategis kota.</p>
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                                <div className="flex items-center gap-6 p-6 bg-white border border-slate-100 rounded-3xl shadow-xl shadow-slate-200/20 group">
                                    <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-500">
                                        <LayoutDashboard size={32} />
                                    </div>
                                    <div>
                                        <div className="font-black text-slate-900 text-xl">Command Center 24/7</div>
                                        <div className="text-slate-400 text-sm font-bold uppercase tracking-widest">Mata & Telinga Kota</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 p-6 bg-white border border-slate-100 rounded-3xl shadow-xl shadow-slate-200/20 group">
                                    <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                                        <Database size={32} />
                                    </div>
                                    <div>
                                        <div className="font-black text-slate-900 text-xl">Intranet Fiber Optik</div>
                                        <div className="text-slate-400 text-sm font-bold uppercase tracking-widest">Infrastruktur Inti OPD</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <motion.div 
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1 }}
                                className="aspect-[4/3] bg-slate-950 rounded-[3.5rem] p-1 shadow-2xl overflow-hidden relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent z-10" />
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                                <div className="flex flex-col h-full items-center justify-center text-center p-12 relative z-20">
                                    <div className="p-8 rounded-full bg-emerald-600 shadow-2xl shadow-emerald-500/20 mb-8 border-[6px] border-white/20">
                                        <LayoutDashboard size={80} className="text-white animate-pulse" />
                                    </div>
                                    <h4 className="text-white text-3xl font-black tracking-tight mb-2">LIVE MONITORING</h4>
                                    <p className="text-emerald-400 text-xs font-black uppercase tracking-[0.4em]">Integrated Operation Center</p>
                                </div>
                                {/* Floating elements for "tech" feel */}
                                <div className="absolute top-10 right-10 w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                                <div className="absolute bottom-10 left-10 w-2 h-2 rounded-full bg-blue-500 animate-ping delay-700" />
                            </motion.div>
                        </div>
                    </div>
                </SlideWrapper>
            )
        },
        // Slide 6: Peta Ekosistem Kelembagaan
        {
            content: (
                <SlideWrapper title="Peta Ekosistem Kelembagaan" subtitle="Tantangan Penyatuan OPD & BUMD" icon={Building2}>
                    <div className="flex flex-col h-full gap-10 max-w-7xl mx-auto pb-10">
                        <div className="grid md:grid-cols-3 gap-8">
                            <Card title="18 Dinas Daerah" icon={Building2} delay={0.1}>
                                <p className="text-base font-bold text-slate-700 mb-4 leading-snug">Pelaksana urusan wajib pelayanan dasar utama kota.</p>
                                <div className="h-1.5 w-full bg-emerald-100 rounded-full overflow-hidden">
                                    <div className="h-full w-2/3 bg-emerald-600" />
                                </div>
                            </Card>
                            <Card title="5+ Badan & Setda" icon={Landmark} delay={0.2}>
                                <p className="text-base font-bold text-slate-700 mb-4 leading-snug">Lembaga teknis penunjang perencanaan dan anggaran.</p>
                                <div className="h-1.5 w-full bg-blue-100 rounded-full overflow-hidden">
                                    <div className="h-full w-1/2 bg-blue-600" />
                                </div>
                            </Card>
                            <Card title="5 BUMD Cirebon" icon={TrendingUp} delay={0.3}>
                                <p className="text-base font-bold text-slate-700 mb-4 leading-snug">Perumda Air Minum, Pasar, & BPR pendukung ekonomi.</p>
                                <div className="h-1.5 w-full bg-amber-100 rounded-full overflow-hidden">
                                    <div className="h-full w-1/3 bg-amber-500" />
                                </div>
                            </Card>
                        </div>
                        <div className="mt-auto">
                            <Card title="Tantangan Utama: Mengikis Silo Mentality" icon={ShieldAlert} delay={0.4} variant="warning">
                                <div className="flex flex-col md:flex-row items-center gap-12 p-4">
                                    <div className="flex-1">
                                        <p className="text-3xl font-black text-rose-950 mb-4 tracking-tighter leading-tight italic">
                                            &quot;Menyatukan 27 &apos;Kepala&apos; instansi dengan ego sektoral yang berbeda adalah tantangan birokrasi terbesar.&quot;
                                        </p>
                                        <p className="text-lg text-rose-800/80 font-bold leading-relaxed">
                                            Transformasi digital tersendat bukan karena kekurangan gawai, melainkan karena platform yang terfragmentasi. Satu payung ekosistem digital adalah harga mati.
                                        </p>
                                    </div>
                                    <div className="w-40 h-40 rounded-[2.5rem] bg-rose-600/10 border-2 border-rose-500/20 flex items-center justify-center text-rose-600 shrink-0 transform -rotate-3">
                                        <ShieldAlert size={80} strokeWidth={2.5} />
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </SlideWrapper>
            )
        },
        // Slide 7: App Fatigue
        {
            content: (
                <SlideWrapper title="Maturitas Aplikasi Eksisting" subtitle="Evaluasi & Kritik Konstruktif: Mencegah Kelelahan Digital" icon={Smartphone}>
                    <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
                        <Card title="Cirebon Siaga 112" icon={ShieldCheck} delay={0.1} variant="blue"><p className="text-sm font-bold opacity-70">Success Story: Layanan kedaruratan terpadu bebas pulsa.</p></Card>
                        <Card title="Portal I-Cirebon" icon={Share2} delay={0.2} variant="blue"><p className="text-sm font-bold opacity-70">Literasi Digital: Akses perpustakaan daerah dalam genggaman.</p></Card>
                        <Card title="Brojol Aja Klalen" icon={FileText} delay={0.3} variant="blue"><p className="text-sm font-bold opacity-70">Efficiency: Percepatan Adminduk instan dari Disdukcapil.</p></Card>
                    </div>
                    <div className="max-w-6xl mx-auto mt-auto pb-10">
                        <Card title="Diagnosa: App Fatigue (Kelelahan Aplikasi)" icon={AlertTriangle} delay={0.4} variant="warning">
                            <div className="flex flex-col md:flex-row items-center gap-12 p-4">
                                <div className="flex-1">
                                    <p className="text-3xl font-black text-rose-950 mb-6 tracking-tight leading-tight">
                                        Warga jenuh mendaftar akun berulang kali di 27+ aplikasi dinas yang berbeda.
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        <span className="px-5 py-2.5 bg-rose-100/50 rounded-2xl text-rose-900 font-bold border border-rose-200 flex items-center gap-3"><AlertTriangle size={18} /> Redundansi Akun</span>
                                        <span className="px-5 py-2.5 bg-rose-100/50 rounded-2xl text-rose-900 font-bold border border-rose-200 flex items-center gap-3"><AlertTriangle size={18} /> Pemborosan Memori Gawai</span>
                                    </div>
                                </div>
                                <div className="px-12 py-10 bg-emerald-700 text-white rounded-[3rem] shadow-2xl flex items-center justify-center text-center font-black text-2xl tracking-tighter italic border-b-[12px] border-emerald-950 transform rotate-2 max-w-sm">
                                    SOLUSI: KONSOLIDASI TOTAL DALAM SATU SUPER APP.
                                </div>
                            </div>
                        </Card>
                    </div>
                </SlideWrapper>
            )
        },
        // Slide 8: Data Lake Architecture
        {
            content: (
                <SlideWrapper title="Ekosistem Penyatuan Data" subtitle="The Data Lake Funnel: Single Source of Truth" icon={Database}>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 h-full max-w-7xl mx-auto pb-10 pt-4">
                        <Card title="Raw Data Sektoral" icon={FileText} delay={0.1} variant="blue">
                            <p className="text-sm font-bold text-slate-600 leading-relaxed mb-6">Penyatuan pangkalan data strategis 27 OPD & 5 BUMD Cirebon secara mutlak.</p>
                            <div className="flex flex-wrap gap-2 opacity-60">
                                <Tag color="slate">NIK</Tag><Tag color="slate">Rekam Medis</Tag><Tag color="slate">Pajak</Tag>
                            </div>
                        </Card>
                        <Card title="Sensor IoT Fisik" icon={Cpu} delay={0.2} variant="warning">
                            <p className="text-sm font-bold text-slate-600 leading-relaxed mb-6">Streaming logs 24/7 dari infrastruktur fisik tata ruang kota.</p>
                            <div className="flex flex-wrap gap-2 opacity-60">
                                <Tag color="red">Traffic</Tag><Tag color="red">Banjir</Tag><Tag color="red">ISPU</Tag>
                            </div>
                        </Card>
                        <Card title="Sentimen Publik" icon={MessageSquare} delay={0.3} variant="highlight">
                            <p className="text-sm font-bold text-slate-600 leading-relaxed mb-6">Analisis opini warga dari X/IG & Media Lokal CIAYUMAJAKUNING.</p>
                            <div className="flex flex-wrap gap-2 opacity-60">
                                <Tag color="amber">NLP</Tag><Tag color="amber">Opini</Tag><Tag color="amber">Viral</Tag>
                            </div>
                        </Card>
                        <Card title="Data Spasial GIS" icon={Map} delay={0.4}>
                            <p className="text-sm font-bold text-slate-600 leading-relaxed mb-6">Pemetaan aset, zonasi rawan bencana, hingga titik kemiskinan.</p>
                            <div className="flex flex-wrap gap-2 opacity-60">
                                <Tag color="blue">RTRW</Tag><Tag color="blue">Aset</Tag><Tag color="blue">3D Map</Tag>
                            </div>
                        </Card>
                        <div className="md:col-span-4 mt-auto">
                            <motion.div 
                                className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-blue-900 p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden group"
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20" />
                                <div className="flex flex-col md:flex-row items-center justify-between relative z-10 gap-12">
                                    <div className="flex items-center gap-10">
                                        <div className="w-28 h-28 rounded-[2.5rem] bg-amber-500/20 backdrop-blur-xl border border-amber-500/40 flex items-center justify-center text-amber-500 shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700">
                                            <Database size={56} strokeWidth={2.5} />
                                        </div>
                                        <div>
                                            <h3 className="text-white text-4xl font-black tracking-tighter leading-none mb-4 underline decoration-amber-500 decoration-[10px] underline-offset-[16px]">DATA LAKE CIREBON</h3>
                                            <p className="text-emerald-100/50 font-black uppercase tracking-[0.4em] text-xs">Puncak Visi Digitalisasi Pemerintahan</p>
                                        </div>
                                    </div>
                                    <div className="text-center md:text-right">
                                        <div className="inline-block px-8 py-3 bg-white/10 border border-white/20 rounded-full text-white font-black text-xs uppercase tracking-widest mb-6">Foundation of Integrity</div>
                                        <div className="text-amber-500 font-black text-3xl tracking-tighter italic drop-shadow-lg">DECISION SUPPORT SYSTEM (DSS)</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </SlideWrapper>
            )
        },
        // Slide 9: The Smart Brain Engine (AI)
        {
            content: (
                <SlideWrapper title="Kecerdasan Buatan Terintegrasi" subtitle="The Smart Brain Engine & Inovasi RAG-NLP" icon={Cpu}>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4 max-w-7xl mx-auto pb-10 h-full overflow-y-auto custom-scrollbar pr-4">
                        <Card title="Traffic Brain (ATCS)" icon={Camera} delay={0.1}>
                            <div className="p-4 bg-slate-50 rounded-2xl text-[14px] font-bold text-slate-700 leading-snug">Otomasi Computer Vision YOLOv8 mengurai macet Gunung Sari secara otonom tanpa operator manual.</div>
                        </Card>
                        <Card title="EWS Disaster Model" icon={CloudCog} delay={0.2} variant="warning">
                            <div className="p-4 bg-rose-50/50 rounded-2xl text-[14px] font-bold text-rose-900 leading-snug">Prediksi presisi luapan Sungai Kriyan 48 jam sebelum banjir, memicu push-alert evakuasi RT/RW.</div>
                        </Card>
                        <Card title="WargiBot RAG (LLM)" icon={MessageSquare} delay={0.3} variant="blue">
                            <div className="p-4 bg-blue-50/50 rounded-2xl text-[14px] font-bold text-blue-900 leading-snug">Ajudan digital berbasis dokumen Perwali. Menjawab birokrasi dalam 1 detik dengan akurasi 100%.</div>
                        </Card>
                        <Card title="Inflation Sentinel" icon={TrendingUp} delay={0.4}>
                            <div className="p-4 bg-slate-50 rounded-2xl text-[14px] font-bold text-slate-700 leading-snug">Mendeteksi anomali suplai sembako TPID dengan cross-check sentimen kegelisahan warganet di X/TikTok.</div>
                        </Card>
                        <Card title="Precision Healthcare" icon={Stethoscope} delay={0.5}>
                            <div className="p-4 bg-slate-50 rounded-2xl text-[14px] font-bold text-slate-700 leading-snug">Clustering Stunting: Memandu kader Posyandu untuk intervensi tepat rumah bagi balita gizi buruk.</div>
                        </Card>
                        <Card title="Fiscal Leakage Audit" icon={ShieldCheck} delay={0.6} variant="highlight">
                            <div className="p-4 bg-emerald-50/50 rounded-2xl text-[14px] font-black italic text-emerald-900 leading-snug underline decoration-amber-400 decoration-2 underline-offset-4">Menambal kebocoran PAD dengan mendeteksi anomali ruko besar yang membayar PBB kategori rumah petak.</div>
                        </Card>
                    </div>
                </SlideWrapper>
            )
        },
        // Slide 10: Zero Blank Spot
        {
            content: (
                <SlideWrapper title="Infrastruktur Inklusif Daerah" subtitle="Pemerataan Akses (Zero Blank Spot)" icon={Network}>
                    <div className="flex flex-col gap-10 pt-4 max-w-7xl mx-auto pb-10">
                        <div className="p-12 bg-slate-950 rounded-[3rem] text-white relative overflow-hidden shadow-2xl border-b-[12px] border-blue-500 group">
                            <div className="absolute right-0 top-0 opacity-[0.03] scale-150 transform -translate-y-1/4 translate-x-1/4 group-hover:rotate-12 transition-transform duration-1000">
                                <Globe size={500} />
                            </div>
                            <Tag color="blue">Keadilan Digital</Tag>
                            <h3 className="text-4xl md:text-5xl font-black mb-6 mt-6 relative z-10 text-blue-400 tracking-tight leading-tight">
                                &quot;Aplikasi sehebat apa pun tidak berguna jika warga tidak memiliki akses internet.&quot;
                            </h3>
                            <p className="text-slate-400 text-xl relative z-10 max-w-5xl font-medium leading-relaxed italic">
                                Kota Cirebon menargetkan interkoneksi di seluruh wilayah permukiman padat dan pinggiran pesisir laut untuk menghapus kesenjangan digital (*digital divide*).
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-10">
                            <Card title="WiFi Publik Kecepatan Tinggi" icon={Globe} delay={0.2} variant="blue">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                        <span className="font-bold text-slate-700">Taman Kota & Alun-Alun</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                        <span className="font-bold text-slate-700">Balai Kelurahan & Puskesmas</span>
                                    </div>
                                </div>
                            </Card>
                            <Card title="Jaringan Intranet Terluas" icon={Network} delay={0.3}>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        <span className="font-bold text-slate-700">Penarikan Fiber Optik hingga RW</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        <span className="font-bold text-slate-700">Sentralisasi Server di DKIS</span>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </SlideWrapper>
            )
        },
        // Slide 11: 6 Pilar Smart City
        {
            content: (
                <SlideWrapper title="6 Pilar Utama Smart City" subtitle="Dimensi Keberhasilan Gerakan Menuju 100 Smart City Nasional" icon={Target}>
                    <div className="grid md:grid-cols-3 gap-8 pt-4 h-full max-w-7xl mx-auto pb-10">
                        <Card title="Smart Governance" icon={Landmark} delay={0.1}>
                            <p className="text-sm font-bold text-slate-500 leading-relaxed mb-4">Layanan publik terpadu (Super App), efisiensi birokrasi, SIPD, & Open Data.</p>
                            <div className="h-1 bg-emerald-500 w-1/2 rounded-full" />
                        </Card>
                        <Card title="Smart Branding" icon={Share2} delay={0.2}>
                            <p className="text-sm font-bold text-slate-500 leading-relaxed mb-4">Wajah digital kota, promosi pariwisata Keraton, & UMKM lokal global.</p>
                            <div className="h-1 bg-blue-500 w-1/2 rounded-full" />
                        </Card>
                        <Card title="Smart Economy" icon={TrendingUp} delay={0.3}>
                            <p className="text-sm font-bold text-slate-500 leading-relaxed mb-4">Transaksi non-tunai (QRIS) & efisiensi pajak daerah (P2DD).</p>
                            <div className="h-1 bg-amber-500 w-1/2 rounded-full" />
                        </Card>
                        <Card title="Smart Living" icon={Heart} delay={0.4}>
                            <p className="text-sm font-bold text-slate-500 leading-relaxed mb-4">Transportasi ATCS, keamanan Siaga 112, & Telemedicine medis.</p>
                            <div className="h-1 bg-rose-500 w-1/2 rounded-full" />
                        </Card>
                        <Card title="Smart Society" icon={Users} delay={0.5} variant="blue">
                            <p className="text-sm font-bold text-slate-500 leading-relaxed mb-4">Literasi digital warga via I-Cirebon & partisipasi E-Musrenbang.</p>
                            <div className="h-1 bg-blue-700 w-1/2 rounded-full" />
                        </Card>
                        <Card title="Smart Environment" icon={Cloud} delay={0.6} variant="highlight">
                            <p className="text-sm font-bold text-slate-500 leading-relaxed mb-4">Manajemen sampah DLH, sensor IoT lingkungan, & air PDAM.</p>
                            <div className="h-1 bg-emerald-700 w-1/2 rounded-full" />
                        </Card>
                    </div>
                </SlideWrapper>
            )
        },
        // Slide 12: Cybersecurity
        {
            content: (
                <SlideWrapper title="Keamanan Siber & Privasi" subtitle="Benteng Pertahanan Digital & Privasi Warga" icon={ShieldCheck}>
                    <div className="grid md:grid-cols-2 gap-12 h-full items-center max-w-7xl mx-auto pb-10">
                        <div className="space-y-8">
                            <Card title="Proteksi Data Pribadi (PDP)" icon={Lock} delay={0.1} variant="blue">
                                <p className="text-slate-600 font-bold leading-relaxed mb-4">Enkripsi End-to-End untuk seluruh data kependudukan dan rekam medis warga Cirebon.</p>
                                <div className="flex items-center gap-3 text-blue-600 font-black text-xs uppercase tracking-widest">
                                    <ShieldCheck size={16} /> Standar BSSN v3.0
                                </div>
                            </Card>
                            <Card title="Tanda Tangan Elektronik (TTE)" icon={CheckCircle2} delay={0.2}>
                                <p className="text-slate-600 font-bold leading-relaxed mb-4">Otentikasi resmi BSrE BSSN di seluruh naskah dinas untuk mencegah pemalsuan dokumen.</p>
                                <div className="flex items-center gap-3 text-slate-400 font-black text-xs uppercase tracking-widest">
                                    <ShieldCheck size={16} /> BSRE Certified
                                </div>
                            </Card>
                        </div>
                        <div className="relative group">
                            <motion.div 
                                className="bg-slate-950 rounded-[3.5rem] p-12 border-[10px] border-slate-900 shadow-2xl relative overflow-hidden"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-rose-900/20 via-transparent to-emerald-900/20" />
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className="w-24 h-24 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500 mb-8 animate-pulse">
                                        <Lock size={48} />
                                    </div>
                                    <h4 className="text-white text-3xl font-black tracking-tight mb-4">INTRANET TERISOLASI</h4>
                                    <p className="text-slate-400 font-bold leading-relaxed italic">
                                        Seluruh komunikasi data antar dinas berjalan di atas VPN tertutup, memutus celah Ransomware dari internet publik.
                                    </p>
                                    <div className="mt-10 px-6 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 font-black text-[10px] uppercase tracking-[0.3em]">
                                        Anti-Ransomware Shield
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </SlideWrapper>
            )
        },
        // Slide 13: SIPD
        {
            content: (
                <SlideWrapper title="Ekosistem SIPD Terpadu" subtitle="Arsitektur Keuangan APBD Nasional" icon={Landmark}>
                    <div className="flex flex-col gap-10 pt-4 max-w-7xl mx-auto pb-10">
                        <Card title="Arsitektur Siklus Tertutup (Closed-Loop)" icon={Lock} delay={0.1} variant="blue">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-2 py-4">
                                {[
                                    { t: "MUSRENBANG", l: "E-Planning", c: "bg-blue-50 text-blue-700" },
                                    { t: "STANDARISASI", l: "E-Budgeting", c: "bg-amber-50 text-amber-700" },
                                    { t: "PENATAUSAHAAN", l: "E-Implementation", c: "bg-emerald-50 text-emerald-700" },
                                    { t: "AUDIT RISET", l: "E-Monev", c: "bg-rose-50 text-rose-700" },
                                ].map((step) => (
                                    <div key={step.t} className={`p-6 rounded-3xl border border-slate-100 flex flex-col items-center text-center group hover:scale-105 transition-transform duration-500`}>
                                        <div className="text-[10px] font-black uppercase text-slate-400 mb-2">{step.t}</div>
                                        <div className={`text-base font-black px-4 py-1 rounded-full ${step.c}`}>{step.l}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 p-8 bg-slate-50 rounded-[2.5rem] border-2 border-dashed border-slate-200">
                                <p className="text-xl text-slate-600 font-bold leading-relaxed italic text-center">
                                    &quot;SIPD mengunci usulan Musrenbang sampai menjadi RKPD. Meniadakan kemungkinan program siluman menyelinap di anggaran.&quot;
                                </p>
                            </div>
                        </Card>
                        <Card title="Zero Local Hosting Cost (Efisiensi Mutlak)" icon={CloudCog} delay={0.2} variant="highlight">
                            <div className="flex flex-col md:flex-row items-center gap-12 p-4">
                                <div className="flex-1">
                                    <p className="text-2xl text-emerald-950 font-black mb-4 tracking-tighter leading-tight italic">
                                        &quot;Fasilitasi Pusat Data Nasional menghemat APBD senilai miliaran Rupiah setiap tahunnya.&quot;
                                    </p>
                                </div>
                                <div className="px-14 py-10 bg-emerald-600 rounded-[3.5rem] shadow-2xl text-white font-black text-4xl italic tracking-tighter shrink-0 border-b-[12px] border-emerald-950 transform -rotate-2">
                                    SAVE MILIARAN RP.
                                </div>
                            </div>
                        </Card>
                    </div>
                </SlideWrapper>
            )
        },
        // Slide 14: Executive Dashboard
        {
            content: (
                <SlideWrapper title="Executive Dashboard" subtitle="Cockpit View Pimpinan: Kendali Data Real-Time" icon={LayoutDashboard}>
                    <div className="grid lg:grid-cols-12 gap-10 h-full pt-4 max-w-7xl mx-auto pb-10">
                        <div className="lg:col-span-7 grid grid-cols-2 gap-6 h-fit">
                            {[
                                { t: "Radar PAD", i: Landmark, delay: 0.1, v: "default" },
                                { t: "EWS Banjir", i: AlertTriangle, delay: 0.2, v: "warning" },
                                { t: "Stunting Map", i: Stethoscope, delay: 0.3, v: "default" },
                                { t: "Publik Opini", i: MessageSquare, delay: 0.4, v: "highlight" },
                            ].map((item) => (
                                <Card key={item.t} title={item.t} icon={item.i} delay={item.delay} variant={item.v as "default" | "highlight" | "warning" | "blue"}>
                                    <p className="text-[12px] opacity-70 font-bold leading-tight">Insight strategis dari pangkalan Data Lake Cirebon.</p>
                                </Card>
                            ))}
                            <div className="col-span-full">
                                <Card title="CRM Responsiveness SLA" icon={Clock} delay={0.5} variant="highlight">
                                    <div className="flex justify-between items-center bg-white/50 p-6 rounded-[2rem] border border-emerald-100">
                                        <p className="font-bold text-slate-800 text-lg italic">Rata-rata kecepatan respons OPD terhadap aduan warga.</p>
                                        <div className="text-emerald-700 font-black text-4xl tracking-tighter">98.2%</div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                        <div className="lg:col-span-5 h-full hidden lg:block">
                            <motion.div 
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                className="bg-slate-950 rounded-[4rem] p-12 h-full border-[14px] border-slate-900 shadow-2xl relative overflow-hidden flex flex-col group justify-between"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-transparent to-blue-900/40 opacity-50" />
                                <div className="relative z-10">
                                    <div className="flex justify-between items-center mb-12">
                                        <div className="text-amber-500 font-black text-[10px] uppercase tracking-[0.5em]">Live Dashboard v3.0</div>
                                        <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                                    </div>
                                    <div className="space-y-10">
                                        <div className="p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10">
                                            <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Total PAD Daily</div>
                                            <div className="text-white text-5xl font-black tabular-nums tracking-tighter decoration-emerald-500 underline decoration-4 underline-offset-8">Rp 24,5M</div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="p-6 bg-white/5 rounded-3xl">
                                                <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Alerts</div>
                                                <div className="text-rose-500 text-3xl font-black tracking-tighter font-mono">00</div>
                                            </div>
                                            <div className="p-6 bg-white/5 rounded-3xl">
                                                <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Issues</div>
                                                <div className="text-emerald-400 text-3xl font-black tracking-tighter font-mono">12</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-auto h-40 w-full flex items-end gap-2.5 opacity-40 group-hover:opacity-100 transition-opacity duration-1000">
                                    {[40, 20, 60, 30, 80, 50, 90, 60, 40].map((h, i) => (
                                        <motion.div 
                                            key={i} 
                                            className="bg-emerald-500 w-full rounded-t-2xl shadow-[0_0_15px_rgba(16,185,129,0.3)]" 
                                            initial={{ height: 0 }} 
                                            animate={{ height: `${h}%` }}
                                            transition={{ delay: 0.5 + i * 0.1, duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </SlideWrapper>
            )
        },
        // Slide 15: Super App
        {
            content: (
                <SlideWrapper title="Cirebon Super App" subtitle="Single Identity & Integrated Citizen Gateway" icon={Smartphone}>
                    <div className="grid md:grid-cols-2 gap-12 items-center h-full pt-4 max-w-7xl mx-auto pb-10">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h3 className="text-4xl font-black text-slate-950 leading-tight tracking-tight underline decoration-emerald-500 decoration-[14px] underline-offset-10 mb-6 drop-shadow-sm">The Single Digital Portal for All.</h3>
                                <p className="text-xl text-slate-500 font-bold leading-relaxed mb-10">Satu identitas digital untuk seluruh kebutuhan warga Kota Cirebon.</p>
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                                <Card title="Identitas Tunggal (IKD)" icon={Lock} delay={0.1} variant="blue">
                                    <p className="text-slate-600 font-bold leading-relaxed mb-4 text-[14px]">Verifikasi biometrik IKD Kemendagri. Daftar satu kali untuk akses ratusan layanan.</p>
                                </Card>
                                <Card title="Seamless Payment Gateway" icon={TrendingUp} delay={0.2} variant="highlight">
                                    <p className="text-slate-600 font-bold leading-relaxed mb-4 text-[14px]">BJB Aggregator QRIS untuk melunasi PBB, Sampah, & PDAM tanpa calo.</p>
                                </Card>
                            </div>
                        </div>
                        <div className="relative flex justify-center group scale-75 sm:scale-90 md:scale-100 origin-top">
                            <motion.div 
                                className="w-[320px] h-[640px] bg-slate-900 rounded-[3.5rem] border-[12px] border-slate-950 shadow-2xl relative overflow-hidden flex flex-col pt-12 shrink-0"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-950 rounded-b-2xl z-20" />
                                <div className="px-6 py-6 border-b border-white/10 bg-gradient-to-br from-emerald-600 to-blue-700">
                                    <h4 className="text-white font-black text-xl tracking-tighter">Super App Cirebon</h4>
                                    <p className="text-white/60 text-[9px] font-bold uppercase tracking-widest">Digital Citizen Hub</p>
                                </div>
                                <div className="flex-1 p-6 space-y-4 bg-slate-100 dark:bg-slate-900">
                                    <div className="h-24 bg-white rounded-2xl shadow-sm border border-slate-200"></div>
                                    <div className="grid grid-cols-4 gap-4">
                                        {[1,2,3,4,5,6,7,8].map(i => (
                                            <div key={i} className="aspect-square bg-white rounded-xl shadow-sm border border-slate-200"></div>
                                        ))}
                                    </div>
                                    <div className="h-40 bg-white rounded-2xl shadow-sm border border-slate-200"></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </SlideWrapper>
            )
        },
        // Slide 16: Closing Coda
        {
            content: (
                <div className="flex flex-col items-center justify-center h-full text-center p-8 relative overflow-hidden animated-mesh bg-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="z-10 w-full max-w-6xl flex flex-col items-center"
                    >
                        <motion.div 
                            className="w-40 h-2.5 bg-gradient-to-r from-emerald-600 to-blue-600 mb-16 rounded-full shadow-[0_10px_40px_rgba(16,185,129,0.3)]"
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: 160, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1.5 }}
                        />
                        <h2 className="text-5xl md:text-9xl font-black mb-16 tracking-tighter leading-[0.9] text-slate-950">
                            Cirebon Strategic Pledge:<br />
                            <span className="text-gradient-premium drop-shadow-2xl">Legacy Modernisasi.</span>
                        </h2>

                        <div className="bg-white/40 backdrop-blur-2xl border border-white p-20 rounded-[5rem] shadow-[0_40px_100px_rgba(0,0,0,0.05)] relative mb-24 max-w-5xl group overflow-hidden">
                             <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                            <div className="absolute top-[-40px] left-12 text-[14rem] text-emerald-600/[0.03] font-black pointer-events-none select-none italic">&ldquo;</div>
                            <p className="text-slate-900 text-3xl md:text-5xl font-black leading-[1.3] italic relative z-10 tracking-tighter">
                                Memanusiakan pelayanan, memartabatkan waktu warga, dan mencintai masyarakat Kota Cirebon.
                            </p>
                            <div className="absolute bottom-[-40px] right-12 text-[14rem] text-emerald-600/[0.03] font-black pointer-events-none select-none italic">&rdquo;</div>
                        </div>

                        <div className="flex flex-col items-center gap-6">
                            <div className="px-10 py-4 bg-slate-950 text-white rounded-full font-black text-sm uppercase tracking-[0.5em] shadow-2xl hover:scale-105 transition-transform duration-500 cursor-default">
                                Smart City Cirebon 2029
                            </div>
                            <div className="text-slate-400 font-bold text-base tracking-widest mt-2">TRANSFORMASI DIGITAL • INKLUSIF • BERKELANJUTAN</div>
                        </div>
                    </motion.div>
                </div>
            )
        }
    ];

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) setCurrentSlide(prev => prev + 1);
    };

    const prevSlide = () => {
        if (currentSlide > 0) setCurrentSlide(prev => prev - 1);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight" || e.key === " ") nextSlide();
            if (e.key === "ArrowLeft") prevSlide();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSlide]);

    return (
        <div className="proposal-container animated-mesh selection:bg-emerald-100 selection:text-emerald-900 relative">
            {/* Global Logo Overlay */}
            <motion.div 
                className="fixed top-4 right-4 md:top-8 md:right-12 z-[100] pointer-events-none"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
            >
                <div className="p-2 md:p-3 bg-white/40 backdrop-blur-xl rounded-2xl border border-white/40 shadow-xl">
                    <Image src="/Logo_Cirebon.png" alt="Logo Cirebon" width={100} height={100} className="h-10 md:h-16 w-auto drop-shadow-md" priority />
                </div>
            </motion.div>

            {/* Slide Navigation Progress */}
            <div className="fixed top-4 left-4 md:top-8 md:left-12 z-[100] flex items-center gap-4">
                <div className="h-10 md:h-14 flex items-center px-4 md:px-6 bg-white/40 backdrop-blur-xl rounded-2xl border border-white/40 shadow-xl text-emerald-950 font-black text-lg md:text-xl tracking-tighter">
                    {String(currentSlide + 1).padStart(2, '0')}
                    <span className="mx-2 text-slate-300 font-normal">/</span>
                    <span className="text-slate-400 text-xs md:text-sm">{String(slides.length).padStart(2, '0')}</span>
                </div>
            </div>

            {/* Page Number (Bottom Right) */}
            <div className="fixed bottom-4 right-4 md:bottom-8 md:right-12 z-[100] pointer-events-none">
                <div className="text-slate-400 font-black text-xs md:text-sm tracking-widest uppercase">
                    Page <span className="text-emerald-700">{currentSlide + 1}</span> / {slides.length}
                </div>
            </div>

            {/* Main Slide Content - FIX: Using flex-1 to fill horizontal space and height properly */}
            <main className="z-10 w-full flex-1 relative flex flex-col overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, scale: 1.02, filter: 'blur(10px)' }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0"
                    >
                        {slides[currentSlide].content}
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Floating Premium Nav-bar */}
            <nav className="nav-bar-floating flex items-center gap-4 md:gap-10">
                <button
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className="btn-nav-premium group"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={28} className="md:w-8 md:h-8 group-active:scale-75 transition-transform" />
                </button>

                <div className="flex items-center gap-2 md:gap-4 overflow-x-auto max-w-[50vw] md:max-w-none hide-scrollbar px-2">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentSlide(i)}
                            className={`dot shrink-0 ${currentSlide === i ? 'active' : 'hover:bg-slate-300'}`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    disabled={currentSlide === slides.length - 1}
                    className="btn-nav-premium group"
                    aria-label="Next slide"
                >
                    <ChevronRight size={28} className="md:w-8 md:h-8 group-active:scale-75 transition-transform" />
                </button>
            </nav>
        </div>
    );
}
