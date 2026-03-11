"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronLeft, ChevronRight, ShieldCheck, Target, TrendingUp, Cpu,
    LayoutDashboard, Database, Smartphone, MessageSquare, Building2,
    Share2, CloudCog, FileText, Globe, Landmark, Network, Lightbulb,
    AlertTriangle, Camera, CheckCircle2, ShieldAlert, Users, Map, Clock, HeartHandshake,
    Stethoscope, Lock, Heart, Cloud, ChevronDown, Wifi, Activity
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
                    <div className="grid md:grid-cols-12 gap-8 h-full items-center max-w-7xl mx-auto pb-10">
                        <div className="md:col-span-5 space-y-6">
                            <Card title="Satu Arsitektur Nasional" icon={Network} delay={0.1}>
                                <p className="mb-6 text-slate-600 leading-relaxed font-medium">
                                    Birokrasi digital tidak lagi berbasis &quot;keinginan sektoral&quot;. Wajib mematuhi <strong>Peta Jalan Arsitektur SPBE Nasional</strong> Kemenpan-RB.
                                </p>
                                <div className="p-5 bg-slate-50/80 rounded-2xl border-l-[6px] border-amber-500 relative group overflow-hidden">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2"><Lock size={12}/> Mandat Penganggaran</p>
                                    <p className="text-sm font-bold text-slate-800 leading-relaxed">
                                        &quot;Setiap Rupiah APBD untuk IT harus terjustifikasi dalam dokumen arsitektur digital yang terintegrasi.&quot;
                                    </p>
                                </div>
                            </Card>
                        </div>
                        <div className="md:col-span-7">
                            <motion.div 
                                className="bg-slate-950 rounded-[3rem] p-8 md:p-12 border-[12px] border-slate-900 shadow-2xl relative overflow-hidden"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-transparent to-transparent" />
                                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                                    <div className="w-32 h-32 rounded-full bg-emerald-500/20 border-4 border-emerald-500/50 flex flex-col items-center justify-center shrink-0 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                                        <TrendingUp size={40} className="text-emerald-400 mb-2" />
                                        <div className="font-black text-white text-2xl">98.5</div>
                                    </div>
                                    <div className="text-center md:text-left">
                                        <div className="inline-block px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full font-black text-[10px] uppercase tracking-widest mb-4 border border-emerald-500/30">
                                            Indikator Kinerja Wali Kota
                                        </div>
                                        <h4 className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-tight mb-4">
                                            Skor Kematangan SPBE <span className="text-emerald-500">Nasional</span>
                                        </h4>
                                        <p className="text-slate-400 font-medium leading-relaxed italic text-sm md:text-base">
                                            Skor kematangan SPBE bukan sebatas rapor teknis, melainkan barometer utama kecakapan Pimpinan Daerah dalam mengorkestrasi tata kelola pemerintahan yang bersih dan lincah.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </SlideWrapper>
            )
        },
        // Slide 4: Janji Politik & Visi Cirebon (SETARA)
        {
            content: (
                <SlideWrapper title="Janji Politik & Visi Cirebon" subtitle="Menerjemahkan SETARA 2024-2029 ke dalam Sistem" icon={Lightbulb}>
                    <div className="flex flex-col gap-6 h-full max-w-7xl mx-auto pb-10">
                        <div className="p-10 md:p-14 bg-gradient-to-br from-slate-950 to-slate-900 rounded-[3rem] text-white relative overflow-hidden shadow-2xl border-b-[8px] md:border-b-[14px] border-amber-500 group">
                            <div className="absolute right-0 top-0 opacity-[0.04] scale-150 transform -translate-y-1/4 translate-x-1/4 group-hover:scale-125 transition-transform duration-[3s] pointer-events-none">
                                <Target size={600} />
                            </div>
                            <Tag color="amber">Visi Cirebon SETARA</Tag>
                            <h3 className="text-4xl md:text-6xl font-black mb-4 mt-8 relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 tracking-tighter leading-tight drop-shadow-lg">
                                Sinergi Aspiratif, Tertib, & Juara
                            </h3>
                            <div className="grid md:grid-cols-2 gap-8 relative z-10 mt-6 md:mt-10">
                                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-2.5 bg-amber-500/20 rounded-xl text-amber-400"><HeartHandshake size={24} /></div>
                                        <h4 className="font-bold text-xl">Kartu Kasih Sayang</h4>
                                    </div>
                                    <p className="text-slate-300 font-medium text-sm leading-relaxed">
                                        Mewujudkan mitigasi kemiskinan dan kesejahteraan sosial yang tepat sasaran dengan bersandar murni pada fondasi "Satu Data Cirebon" yang akurat.
                                    </p>
                                </div>
                                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-2.5 bg-emerald-500/20 rounded-xl text-emerald-400"><MessageSquare size={24} /></div>
                                        <h4 className="font-bold text-xl">Respons Cepat Warga</h4>
                                    </div>
                                    <p className="text-slate-300 font-medium text-sm leading-relaxed">
                                        Sistem aduan real-time terintegrasi yang memastikan setiap aspirasi dan keluhan warga dijawab dan diselesaikan dalam tempo waktu yang terukur (SLA).
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-6">
                            <Card title="Akurasi Data Bansos" icon={Database} delay={0.2}>
                                <p className="text-sm font-medium text-slate-700 leading-relaxed">Algoritma cerdas yang mencegah <em>double-funding</em> dan salah sasaran dengan mencocokkan NIK, Data DTKS, dan profil pajak daerah secara otomatis.</p>
                            </Card>
                            <Card title="Birokrasi Melayani" icon={Users} delay={0.3} variant="blue">
                                <p className="text-sm font-medium text-slate-700 leading-relaxed">Mengubah paradigma ASN dari administratir murni menjadi pelayan publik yang responsif lewat modul <i>Citizen Care</i>.</p>
                            </Card>
                            <Card title="Efisiensi Anggaran" icon={TrendingUp} delay={0.4} variant="highlight">
                                <p className="text-sm font-medium text-slate-700 leading-relaxed">Penghematan APBD lewat konsolidasi infrastruktur digital, memungkinkan dana TIK dialihkan untuk program pro-rakyat.</p>
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
                    <div className="grid md:grid-cols-12 gap-10 h-full items-center max-w-7xl mx-auto pb-10">
                        <div className="md:col-span-5 space-y-8">
                            <div className="space-y-4">
                                <h3 className="text-4xl md:text-5xl font-black text-emerald-900 leading-none tracking-tighter underline decoration-amber-500 decoration-[8px] underline-offset-8 drop-shadow-sm">Bukan Sekadar Tim Teknis.</h3>
                                <p className="text-xl md:text-2xl text-slate-500 font-bold leading-tight">Melainkan <strong>Dirijen (Orkestrator)</strong> utama seluruh aliran data strategis kota Cirebon.</p>
                            </div>
                            <div className="grid grid-cols-1 gap-5">
                                <div className="flex items-center gap-5 p-5 bg-white border border-slate-200 rounded-3xl shadow-lg shadow-slate-200/50 group hover:-translate-y-1 transition-transform">
                                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-500">
                                        <LayoutDashboard size={28} />
                                    </div>
                                    <div>
                                        <div className="font-black text-slate-900 text-lg">Command Center 24/7</div>
                                        <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-0.5">Mata & Telinga Kota</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-5 p-5 bg-white border border-slate-200 rounded-3xl shadow-lg shadow-slate-200/50 group hover:-translate-y-1 transition-transform">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                                        <Database size={28} />
                                    </div>
                                    <div>
                                        <div className="font-black text-slate-900 text-lg">Intranet Fiber Optik</div>
                                        <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-0.5">Tulang Punggung OPD</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-7 relative group">
                            <motion.div 
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1 }}
                                className="aspect-[4/3] bg-slate-950 rounded-[3rem] p-2 shadow-2xl relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-slate-900/80 to-slate-950 z-10" />
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 z-0" />
                                
                                <div className="relative z-20 h-full flex flex-col p-6 md:p-10">
                                    <div className="flex justify-between items-center mb-auto">
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 rounded-full bg-rose-500 animate-pulse" />
                                            <span className="text-rose-500 font-mono text-xs font-bold tracking-widest uppercase">Live System</span>
                                        </div>
                                        <div className="px-3 py-1 border border-slate-700 rounded-full text-slate-500 font-mono text-[10px]">C4ISR DASHBOARD</div>
                                    </div>
                                    
                                    <div className="flex flex-col items-center justify-center text-center my-auto">
                                        <div className="p-8 md:p-10 rounded-full bg-emerald-900/40 shadow-[0_0_50px_rgba(16,185,129,0.3)] mb-8 border-[2px] border-emerald-500/30 backdrop-blur-md relative">
                                            <div className="absolute inset-0 rounded-full border border-emerald-400/50 animate-ping" style={{ animationDuration: '3s' }} />
                                            <Cpu size={64} className="text-emerald-400" />
                                        </div>
                                        <h4 className="text-white text-3xl md:text-5xl font-black tracking-tighter mb-4">INTEGRATED <span className="text-emerald-400">IOC</span></h4>
                                        <p className="text-slate-300 text-xs md:text-sm font-medium tracking-widest uppercase opacity-80 max-w-sm">
                                            Pemantauan CCTV, Traffic, Sensor IoT, dan Alert Kedauratan Kota secara terpusat.
                                        </p>
                                    </div>

                                    {/* Mock UI elements */}
                                    <div className="mt-auto grid grid-cols-3 gap-4">
                                        {[65, 82, 43].map((val, idx) => (
                                            <div key={idx} className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
                                                <div className="text-slate-500 text-[10px] font-mono mb-2">SYSTEM 0{idx+1}</div>
                                                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                                    <div className="h-full bg-emerald-500" style={{ width: `${val}%` }} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </SlideWrapper>
            )
        },
        // Slide 6: Peta Ekosistem Kelembagaan
        {
            content: (
                <SlideWrapper title="Peta Ekosistem Kelembagaan" subtitle="Tantangan Penyatuan Antar Instansi Daerah" icon={Building2}>
                    <div className="flex flex-col h-full gap-8 max-w-7xl mx-auto pb-10">
                        {/* Node Architecture Visualization */}
                        <div className="bg-slate-50 border border-slate-200 rounded-[3rem] p-8 md:p-12 relative overflow-hidden flex-1 shadow-sm">
                            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 h-full">
                                <div className="flex-1 space-y-4 w-full">
                                    <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm relative z-20 hover:scale-105 transition-transform origin-left">
                                        <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center shrink-0"><Building2 size={24} /></div>
                                        <div>
                                            <p className="font-black text-slate-800 text-lg">18 Dinas</p>
                                            <p className="text-xs text-slate-500 font-medium">Kesehatan, Pendidikan, PUPR, dll.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm relative z-20 hover:scale-105 transition-transform origin-left">
                                        <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center shrink-0"><Landmark size={24} /></div>
                                        <div>
                                            <p className="font-black text-slate-800 text-lg">5+ Badan/Setda</p>
                                            <p className="text-xs text-slate-500 font-medium">Bappelitbangda, BKD, Setda.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm relative z-20 hover:scale-105 transition-transform origin-left">
                                        <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center shrink-0"><TrendingUp size={24} /></div>
                                        <div>
                                            <p className="font-black text-slate-800 text-lg">5 BUMD</p>
                                            <p className="text-xs text-slate-500 font-medium">Perumda Air Minum, Pasar, BPR.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:flex flex-col gap-4 text-slate-300">
                                    <ChevronRight size={32} />
                                    <ChevronRight size={32} />
                                    <ChevronRight size={32} />
                                </div>
                                <div className="flex-1 w-full flex justify-center mt-6 md:mt-0 relative z-20">
                                    <div className="w-full max-w-[280px] aspect-square rounded-full bg-slate-900 border-8 border-white shadow-2xl flex flex-col items-center justify-center text-center p-8 relative">
                                        <div className="absolute inset-0 rounded-full border border-emerald-500/30 animate-ping" style={{ animationDuration: '4s' }} />
                                        <Database size={48} className="text-emerald-400 mb-4" />
                                        <p className="font-black text-white text-xl leading-tight">Satu Data<br/>Kota Cirebon</p>
                                        <p className="text-[9px] text-slate-400 tracking-widest uppercase mt-2">Pusat Konsolidasi</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Connecting Lines for Desktop */}
                            <svg className="absolute inset-0 w-full h-full z-10 hidden md:block" style={{ strokeDasharray: '4', animation: 'dash 20s linear infinite' }}>
                                <style>{`@keyframes dash { to { stroke-dashoffset: -1000; } }`}</style>
                                <path d="M 300 120 C 450 120, 500 250, 700 250" fill="none" stroke="#94A3B8" strokeWidth="2" opacity="0.4" />
                                <path d="M 300 220 C 500 220, 500 250, 700 250" fill="none" stroke="#94A3B8" strokeWidth="2" opacity="0.4" />
                                <path d="M 300 320 C 450 320, 500 250, 700 250" fill="none" stroke="#94A3B8" strokeWidth="2" opacity="0.4" />
                            </svg>
                        </div>

                        <div className="mt-2">
                            <Card title="Tantangan Transformasi: Mengikis Silo Mentality" icon={ShieldAlert} delay={0.4} variant="warning">
                                <div className="flex flex-col md:flex-row items-center gap-8 p-2 md:p-4">
                                    <div className="flex-1">
                                        <p className="text-xl md:text-2xl font-black text-rose-950 mb-3 tracking-tighter leading-tight italic border-l-4 border-rose-500 pl-4">
                                            &quot;Menyatukan 27 'Kepala' instansi dengan ego sektoral yang berbeda adalah tantangan birokrasi terbesar.&quot;
                                        </p>
                                        <p className="text-sm md:text-base text-rose-800/80 font-bold leading-relaxed">
                                            Kegagalan digitalisasi pemerintahan jarang disebabkan oleh teknologi, melainkan keengganan instansi untuk <strong>berbagi data</strong>. Kepemimpinan Kepala Daerah mutlak diperlukan untuk memaksa integrasi ini.
                                        </p>
                                    </div>
                                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-rose-600/10 border border-rose-500/20 flex items-center justify-center text-rose-600 shrink-0 transform -rotate-3 hover:rotate-0 transition-transform">
                                        <ShieldAlert size={48} strokeWidth={2.5} className="md:w-16 md:h-16" />
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
                    <div className="flex flex-col gap-8 h-full max-w-7xl mx-auto pb-10 pt-2">
                        <div className="grid md:grid-cols-3 gap-6 mb-4">
                            <Card title="Cirebon Siaga 112" icon={ShieldCheck} delay={0.1} variant="blue">
                                <p className="text-sm font-bold text-slate-600">Success Story: Layanan kedaruratan terpadu bebas pulsa.</p>
                                <div className="mt-4 flex gap-2"><Tag color="blue">Aktif</Tag><Tag color="slate">Terpusat</Tag></div>
                            </Card>
                            <Card title="Portal I-Cirebon" icon={Share2} delay={0.2} variant="blue">
                                <p className="text-sm font-bold text-slate-600">Literasi Digital: Akses perpustakaan daerah dalam genggaman.</p>
                                <div className="mt-4 flex gap-2"><Tag color="blue">Aktif</Tag><Tag color="slate">Informasi</Tag></div>
                            </Card>
                            <Card title="Brojol Aja Klalen" icon={FileText} delay={0.3} variant="blue">
                                <p className="text-sm font-bold text-slate-600">Efficiency: Percepatan Adminduk instan dari Disdukcapil.</p>
                                <div className="mt-4 flex gap-2"><Tag color="blue">Aktif</Tag><Tag color="slate">Layanan Dasar</Tag></div>
                            </Card>
                        </div>
                        
                        {/* App Fatigue Warning Banner */}
                        <motion.div 
                            className="bg-rose-950 p-8 md:p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-10 border-l-[16px] border-rose-500 flex-1"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10" />
                            <div className="relative z-10 flex-1 space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="px-4 py-1.5 bg-rose-500/20 text-rose-300 rounded-full font-black text-xs uppercase tracking-widest border border-rose-500/30 flex items-center gap-2">
                                        <AlertTriangle size={14} /> Critical Diagnosis
                                    </div>
                                </div>
                                <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none drop-shadow-lg">
                                    Fenomena <span className="text-rose-400">App Fatigue.</span>
                                </h3>
                                <p className="text-rose-100/90 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                                    Warga jenuh mendaftar akun berulang kali di puluhan aplikasi dinas yang terpisah. Menghasilkan redundansi akun dan keengganan menggunakan layanan digital pemerintah.
                                </p>
                                <div className="flex flex-wrap gap-4 pt-4">
                                    <div className="px-5 py-3 bg-rose-900/50 rounded-2xl border border-rose-500/30 backdrop-blur-md">
                                        <div className="text-rose-300 text-xs font-black uppercase tracking-widest mb-1">Total Aplikasi Sektoral</div>
                                        <div className="text-white text-3xl font-black">27+ <span className="text-lg font-medium text-rose-400">Aktif</span></div>
                                    </div>
                                    <div className="px-5 py-3 bg-rose-900/50 rounded-2xl border border-rose-500/30 backdrop-blur-md">
                                        <div className="text-rose-300 text-xs font-black uppercase tracking-widest mb-1">Status Keamanan Identitas</div>
                                        <div className="text-white text-xl md:text-2xl font-black mt-2">Terfragmentasi</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="relative z-10 w-full md:w-auto flex shrink-0 justify-center">
                                <div className="relative">
                                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-[3rem] bg-rose-600/20 border-4 border-rose-500/30 flex items-center justify-center p-8 backdrop-blur-xl shadow-[0_0_50px_rgba(244,63,94,0.3)] transform rotate-6">
                                        <div className="grid grid-cols-3 gap-3 w-full h-full opacity-60">
                                            {[...Array(9)].map((_, i) => (
                                                <div key={i} className="bg-rose-500/30 rounded-xl" />
                                            ))}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <AlertTriangle size={80} className="text-rose-400 drop-shadow-[0_0_15px_rgba(244,63,94,0.8)]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-emerald-500 text-white p-6 rounded-[2rem] shadow-2xl border-4 border-slate-900 transform -rotate-12 hover:rotate-0 transition-transform cursor-default">
                                        <div className="text-[10px] font-black uppercase tracking-widest mb-1">Masa Depan</div>
                                        <div className="text-2xl font-black leading-none">1 App</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </SlideWrapper>
            )
        },
        // Slide 8: Data Lake Architecture
        {
            content: (
                <SlideWrapper title="Ekosistem Penyatuan Data" subtitle="The Data Lake Funnel: Single Source of Truth" icon={Database}>
                    <div className="flex flex-col gap-6 h-full max-w-7xl mx-auto pb-10 pt-2">
                        <div className="grid md:grid-cols-4 gap-6 relative z-10">
                            <Card title="Raw Data Sektoral" icon={FileText} delay={0.1}>
                                <div className="h-full flex flex-col justify-between">
                                    <p className="text-xs font-bold text-slate-600 leading-relaxed mb-4">Integrasi 27 OPD & 5 BUMD Cirebon.</p>
                                    <div className="flex flex-wrap gap-2"><Tag color="slate">NIK</Tag><Tag color="slate">Medis</Tag><Tag color="slate">Pajak</Tag></div>
                                </div>
                            </Card>
                            <Card title="Sensor IoT Fisik" icon={Cpu} delay={0.2}>
                                <div className="h-full flex flex-col justify-between">
                                    <p className="text-xs font-bold text-slate-600 leading-relaxed mb-4">Streaming CCTV & sensor tata ruang 24/7.</p>
                                    <div className="flex flex-wrap gap-2"><Tag color="slate">ATCS</Tag><Tag color="slate">Banjir</Tag><Tag color="slate">ISPU</Tag></div>
                                </div>
                            </Card>
                            <Card title="Sentimen Publik" icon={MessageSquare} delay={0.3}>
                                <div className="h-full flex flex-col justify-between">
                                    <p className="text-xs font-bold text-slate-600 leading-relaxed mb-4">Screping NLP opini warga & media lokal.</p>
                                    <div className="flex flex-wrap gap-2"><Tag color="slate">Sosmed</Tag><Tag color="slate">Aduan</Tag><Tag color="slate">Berita</Tag></div>
                                </div>
                            </Card>
                            <Card title="Data Spasial GIS" icon={Map} delay={0.4}>
                                <div className="h-full flex flex-col justify-between">
                                    <p className="text-xs font-bold text-slate-600 leading-relaxed mb-4">Titik kemiskinan dan pemetaan aset.</p>
                                    <div className="flex flex-wrap gap-2"><Tag color="slate">RTRW</Tag><Tag color="slate">Aset</Tag><Tag color="slate">Zonasi</Tag></div>
                                </div>
                            </Card>
                        </div>
                        
                        {/* The Funnel and Data Lake */}
                        <div className="flex-1 flex flex-col items-center mt-2 relative">
                            {/* Funnel Arrows */}
                            <div className="hidden md:flex w-full justify-between px-32 mb-4 text-emerald-300 opacity-50 relative z-0">
                                <ChevronDown size={40} className="transform translate-x-12" />
                                <ChevronDown size={40} className="transform translate-x-4" />
                                <ChevronDown size={40} className="transform -translate-x-4" />
                                <ChevronDown size={40} className="transform -translate-x-12" />
                            </div>
                            
                            {/* Data Lake Core */}
                            <motion.div 
                                className="w-full h-full bg-gradient-to-br from-emerald-950 via-slate-900 to-blue-950 rounded-[3.5rem] p-10 md:p-14 shadow-[0_30px_60px_-15px_rgba(16,185,129,0.3)] relative overflow-hidden border-t-[8px] border-emerald-500 flex flex-col justify-center"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent" />
                                
                                <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16">
                                    <div className="relative shrink-0 flex items-center justify-center">
                                        <div className="w-32 h-32 md:w-48 md:h-48 rounded-[2.5rem] bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center backdrop-blur-md z-10 transform rotate-45">
                                            <Database size={64} className="text-emerald-400 transform -rotate-45" strokeWidth={1.5} />
                                        </div>
                                        {/* Orbital Rings */}
                                        <div className="absolute inset-[-40%] border-2 border-dashed border-emerald-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
                                        <div className="absolute inset-[-20%] border border-blue-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                                    </div>
                                    <div className="flex-1 text-center md:text-left">
                                        <h3 className="text-4xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-blue-400 tracking-tighter leading-none">
                                            DATA LAKE CIREBON
                                        </h3>
                                        <p className="text-slate-300 text-lg md:text-2xl font-bold leading-relaxed mb-6">
                                            Integrasi <i>Single Source of Truth</i> yang menghapus batas sektoral.
                                        </p>
                                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                            <span className="px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-black text-[10px] uppercase tracking-widest">
                                                Decision Support System (DSS)
                                            </span>
                                            <span className="px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-black text-[10px] uppercase tracking-widest">
                                                Foundation of AI
                                            </span>
                                        </div>
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
                    <div className="grid md:grid-cols-12 gap-6 pt-2 max-w-7xl mx-auto pb-10 h-full">
                        <div className="md:col-span-5 h-full flex">
                            <Card title="Pusat Kognisi Kota" icon={Cpu} delay={0.1}>
                                <div className="flex flex-col h-full space-y-6">
                                    <p className="text-slate-600 font-bold leading-relaxed">Penerapan AI bukan sekadar gimik teknologi, melainkan pisau bedah analitik untuk mengurai kompleksitas tata otonomi daerah Cirebon secara presisi.</p>
                                    <div className="bg-slate-950 rounded-3xl p-6 mt-auto border border-slate-800 relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/30 to-blue-900/30" />
                                        <div className="relative z-10 flex flex-col items-center text-center">
                                            <div className="p-4 rounded-2xl bg-slate-800/80 backdrop-blur border border-slate-700 mb-4 group-hover:rotate-180 transition-transform duration-1000">
                                                <Cpu size={32} className="text-emerald-400" />
                                            </div>
                                            <h4 className="text-white font-black text-2xl tracking-tight mb-2">Smart Brain Engine</h4>
                                            <p className="text-slate-400 text-xs font-mono uppercase tracking-widest">Powered by Data Lake</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="md:col-span-7 h-full">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full content-start overflow-y-auto custom-scrollbar pr-2 pb-4">
                                <motion.div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600"><Camera size={20} /></div>
                                        <h4 className="font-black text-slate-800">Traffic Brain (ATCS)</h4>
                                    </div>
                                    <p className="text-xs text-slate-600 font-semibold leading-relaxed">Otomasi Computer Vision YOLOv8 mengurai kemacetan eks-Terminal Gunung Sari secara otonom.</p>
                                </motion.div>
                                <motion.div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="p-2.5 bg-rose-50 rounded-xl text-rose-600"><CloudCog size={20} /></div>
                                        <h4 className="font-black text-slate-800">EWS Desa Rawan</h4>
                                    </div>
                                    <p className="text-xs text-slate-600 font-semibold leading-relaxed">Prediksi presisi luapan air 48 jam sebelum bencana memicu push-alert evakuasi RT/RW.</p>
                                </motion.div>
                                <motion.div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600"><MessageSquare size={20} /></div>
                                        <h4 className="font-black text-slate-800">WargiBot LLM</h4>
                                    </div>
                                    <p className="text-xs text-slate-600 font-semibold leading-relaxed">Ajudan digital berbasis dokumen Perwali. Menjawab birokrasi dalam 1 detik berakurasi tinggi.</p>
                                </motion.div>
                                <motion.div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="p-2.5 bg-amber-50 rounded-xl text-amber-600"><TrendingUp size={20} /></div>
                                        <h4 className="font-black text-slate-800">Inflation Sentinel</h4>
                                    </div>
                                    <p className="text-xs text-slate-600 font-semibold leading-relaxed">Mendeteksi anomali suplai sembako TPID dengan sentimen kegelisahan warganet di Sosmed.</p>
                                </motion.div>
                                <motion.div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="p-2.5 bg-purple-50 rounded-xl text-purple-600"><Stethoscope size={20} /></div>
                                        <h4 className="font-black text-slate-800">Precision Healthcare</h4>
                                    </div>
                                    <p className="text-xs text-slate-600 font-semibold leading-relaxed">Clustering spasial sebaran balita gizi buruk guna memandu intervensi tepat sasaran.</p>
                                </motion.div>
                                <motion.div className="bg-emerald-50 p-5 rounded-3xl border border-emerald-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
                                    <div className="absolute right-0 top-0 w-16 h-16 bg-emerald-200/50 rounded-bl-[100px] -z-0" />
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="p-2.5 bg-emerald-100 rounded-xl text-emerald-700"><ShieldCheck size={20} /></div>
                                            <h4 className="font-black text-emerald-950">Fiscal Leakage Audit</h4>
                                        </div>
                                        <p className="text-xs text-emerald-800 font-bold leading-relaxed">Menambal kebocoran PAD dengan automasi deteksi properti komersial yang membayar pajak hunian.</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </SlideWrapper>
            )
        },
        // Slide 10: Zero Blank Spot
        {
            content: (
                <SlideWrapper title="Infrastruktur Inklusif Daerah" subtitle="Pemerataan Akses Keadilan Digital" icon={Network}>
                    <div className="flex flex-col gap-6 h-full max-w-7xl mx-auto pb-10">
                        <div className="p-10 md:p-14 bg-gradient-to-br from-blue-950 to-slate-900 rounded-[3.5rem] text-white relative overflow-hidden shadow-2xl border-l-[10px] md:border-l-[16px] border-blue-500 group flex-1 flex flex-col justify-center">
                            <div className="absolute right-0 top-0 opacity-[0.05] scale-150 transform -translate-y-1/4 translate-x-1/4 group-hover:rotate-12 transition-transform duration-[4s] pointer-events-none">
                                <Globe size={600} />
                            </div>
                            <Tag color="blue">Zero Blank Spot 2029</Tag>
                            <h3 className="text-3xl md:text-5xl font-black mb-6 mt-6 relative z-10 tracking-tight leading-tight max-w-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-emerald-300">
                                &quot;Super App sehebat apa pun akan mati, jika warga miskin tak mampu membeli kuota.&quot;
                            </h3>
                            <p className="text-slate-300 text-lg md:text-xl relative z-10 max-w-4xl font-medium leading-relaxed italic pr-4">
                                Target memerdekakan warga dari kesenjangan digital (*digital divide*). Menginterkoneksikan permukiman padat dan pesisir lewat Jaringan WiFi Publik gratis.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-6 mt-10 relative z-10">
                                <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-[2rem] flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                                        <Wifi size={32} />
                                    </div>
                                    <div>
                                        <div className="text-slate-400 text-[10px] uppercase font-black tracking-widest mb-1">Cakupan Area Ruang Hijau</div>
                                        <div className="font-bold text-white text-xl">Taman Kota & Alun-Alun</div>
                                    </div>
                                </div>
                                <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-[2rem] flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                                        <Network size={32} />
                                    </div>
                                    <div>
                                        <div className="text-slate-400 text-[10px] uppercase font-black tracking-widest mb-1">Cakupan Biokrasi Mikro</div>
                                        <div className="font-bold text-white text-xl">Balai Kelurahan & Balai RW</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SlideWrapper>
            )
        },
        // Slide 11: 6 Pilar Smart City
        {
            content: (
                <SlideWrapper title="6 Pilar Utama Smart City" subtitle="Dimensi Keberhasilan Gerakan Menuju 100 Smart City Nasional" icon={Target}>
                    <div className="flex flex-col gap-6 pt-2 h-full max-w-7xl mx-auto pb-10">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <motion.div className="bg-emerald-50 relative overflow-hidden p-6 rounded-[2.5rem] border border-emerald-200 group hover:-translate-y-2 transition-transform duration-500" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full -z-0 group-hover:scale-125 transition-transform duration-700" />
                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mb-6"><Landmark size={28} /></div>
                                    <h4 className="font-black text-2xl text-emerald-950 mb-3 tracking-tight">Smart Governance</h4>
                                    <p className="text-sm font-bold text-emerald-800/70 leading-relaxed mb-6">Layanan publik terpadu (Super App), efisiensi birokrasi, SIPD, & Open Data.</p>
                                    <div className="flex items-end justify-between border-t border-emerald-200/50 pt-4 mt-auto">
                                        <div className="text-[10px] font-black uppercase tracking-widest text-emerald-600/60">Digitalisasi Layanan</div>
                                        <div className="font-black text-2xl text-emerald-700 font-mono">100%</div>
                                    </div>
                                </div>
                            </motion.div>
                            
                            <motion.div className="bg-blue-50 relative overflow-hidden p-6 rounded-[2.5rem] border border-blue-200 group hover:-translate-y-2 transition-transform duration-500" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -z-0 group-hover:scale-125 transition-transform duration-700" />
                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center mb-6"><Share2 size={28} /></div>
                                    <h4 className="font-black text-2xl text-blue-950 mb-3 tracking-tight">Smart Branding</h4>
                                    <p className="text-sm font-bold text-blue-800/70 leading-relaxed mb-6">Wajah digital kota, promosi pariwisata Keraton, & UMKM lokal ke level global.</p>
                                    <div className="flex items-end justify-between border-t border-blue-200/50 pt-4 mt-auto">
                                        <div className="text-[10px] font-black uppercase tracking-widest text-blue-600/60">Visibilitas Pariwisata</div>
                                        <div className="font-black text-2xl text-blue-700 font-mono">Global</div>
                                    </div>
                                </div>
                            </motion.div>
                            
                            <motion.div className="bg-amber-50 relative overflow-hidden p-6 rounded-[2.5rem] border border-amber-200 group hover:-translate-y-2 transition-transform duration-500" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full -z-0 group-hover:scale-125 transition-transform duration-700" />
                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mb-6"><TrendingUp size={28} /></div>
                                    <h4 className="font-black text-2xl text-amber-950 mb-3 tracking-tight">Smart Economy</h4>
                                    <p className="text-sm font-bold text-amber-800/70 leading-relaxed mb-6">Transaksi non-tunai (QRIS) terpusat & efisiensi elektronifikasi pajak daerah (P2DD).</p>
                                    <div className="flex items-end justify-between border-t border-amber-200/50 pt-4 mt-auto">
                                        <div className="text-[10px] font-black uppercase tracking-widest text-amber-600/60">Elektronifikasi Transaksi</div>
                                        <div className="font-black text-2xl text-amber-700 font-mono">Q-RIS</div>
                                    </div>
                                </div>
                            </motion.div>
                            
                            <motion.div className="bg-rose-50 relative overflow-hidden p-6 rounded-[2.5rem] border border-rose-200 group hover:-translate-y-2 transition-transform duration-500" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-bl-full -z-0 group-hover:scale-125 transition-transform duration-700" />
                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-rose-100 text-rose-700 rounded-2xl flex items-center justify-center mb-6"><Heart size={28} /></div>
                                    <h4 className="font-black text-2xl text-rose-950 mb-3 tracking-tight">Smart Living</h4>
                                    <p className="text-sm font-bold text-rose-800/70 leading-relaxed mb-6">Transportasi ATCS, keamanan Siaga 112, & fasilitas kesehatan telemedicine yang andal.</p>
                                    <div className="flex items-end justify-between border-t border-rose-200/50 pt-4 mt-auto">
                                        <div className="text-[10px] font-black uppercase tracking-widest text-rose-600/60">Respons Kedaruratan</div>
                                        <div className="font-black text-2xl text-rose-700 font-mono">24/7</div>
                                    </div>
                                </div>
                            </motion.div>
                            
                            <motion.div className="bg-indigo-50 relative overflow-hidden p-6 rounded-[2.5rem] border border-indigo-200 group hover:-translate-y-2 transition-transform duration-500" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-bl-full -z-0 group-hover:scale-125 transition-transform duration-700" />
                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-indigo-100 text-indigo-700 rounded-2xl flex items-center justify-center mb-6"><Users size={28} /></div>
                                    <h4 className="font-black text-2xl text-indigo-950 mb-3 tracking-tight">Smart Society</h4>
                                    <p className="text-sm font-bold text-indigo-800/70 leading-relaxed mb-6">Literasi digital warga via I-Cirebon & partisipasi publik dalam E-Musrenbang.</p>
                                    <div className="flex items-end justify-between border-t border-indigo-200/50 pt-4 mt-auto">
                                        <div className="text-[10px] font-black uppercase tracking-widest text-indigo-600/60">Partisipasi Publik</div>
                                        <div className="font-black text-2xl text-indigo-700 font-mono">Aktif</div>
                                    </div>
                                </div>
                            </motion.div>
                            
                            <motion.div className="bg-teal-50 relative overflow-hidden p-6 rounded-[2.5rem] border border-teal-200 group hover:-translate-y-2 transition-transform duration-500" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-bl-full -z-0 group-hover:scale-125 transition-transform duration-700" />
                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-teal-100 text-teal-700 rounded-2xl flex items-center justify-center mb-6"><Cloud size={28} /></div>
                                    <h4 className="font-black text-2xl text-teal-950 mb-3 tracking-tight">Smart Environment</h4>
                                    <p className="text-sm font-bold text-teal-800/70 leading-relaxed mb-6">Manajemen persampahan DLH, sensor IoT lingkungan, & otomatisasi distribusi air PDAM.</p>
                                    <div className="flex items-end justify-between border-t border-teal-200/50 pt-4 mt-auto">
                                        <div className="text-[10px] font-black uppercase tracking-widest text-teal-600/60">Pemantauan Lingkungan</div>
                                        <div className="font-black text-2xl text-teal-700 font-mono">Real-Time</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </SlideWrapper>
            )
        },
        // Slide 12: Cybersecurity
        {
            content: (
                <SlideWrapper title="Keamanan Siber & Privasi" subtitle="Benteng Pertahanan Digital & Privasi Warga" icon={ShieldCheck}>
                    <div className="grid md:grid-cols-2 gap-10 h-full items-center max-w-7xl mx-auto pb-10 pt-4">
                        <div className="space-y-6">
                            <motion.div className="flex items-start gap-6 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 border border-blue-100">
                                    <Lock size={32} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-slate-900 mb-2">Proteksi Data Pribadi (PDP)</h4>
                                    <p className="text-sm text-slate-600 font-bold leading-relaxed mb-3">Enkripsi End-to-End untuk seluruh data kependudukan dan rekam medis warga Cirebon, menjamin kerahasiaan absolut.</p>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 font-black text-[10px] uppercase tracking-widest rounded-full border border-blue-200">
                                        <ShieldCheck size={12} /> Standar BSSN v3.0
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div className="flex items-start gap-6 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                                <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center shrink-0 border border-amber-100">
                                    <CheckCircle2 size={32} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-slate-900 mb-2">Tanda Tangan Elektronik (TTE)</h4>
                                    <p className="text-sm text-slate-600 font-bold leading-relaxed mb-3">Otentikasi resmi BSrE BSSN di seluruh naskah dinas untuk mencegah pemalsuan dokumen surat menyurat pemerintahan.</p>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-700 font-black text-[10px] uppercase tracking-widest rounded-full border border-amber-200">
                                        <ShieldCheck size={12} /> BSRE Certified
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div className="relative group flex justify-center h-full">
                            <motion.div 
                                className="w-full bg-slate-950 rounded-[4rem] p-10 border-[12px] border-slate-900 shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center isolate"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 -z-10" />
                                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 via-slate-900/40 to-emerald-900/40 -z-10 mix-blend-overlay" />
                                
                                <div className="relative mb-10 mt-6">
                                    {/* Shield Graphic */}
                                    <div className="w-40 h-48 sm:w-48 sm:h-56 bg-slate-800/80 rounded-t-full rounded-b-[4rem] border-8 border-slate-700 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.2)] overflow-hidden relative">
                                        <div className="absolute top-0 w-full h-1/2 bg-white/5" />
                                        {/* Lock Core */}
                                        <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center shadow-xl z-10 animate-pulse border-4 border-emerald-950/50">
                                            <Lock size={36} className="text-white drop-shadow-md" />
                                        </div>
                                        <div className="mt-4 flex flex-col items-center">
                                            <div className="w-16 h-1.5 bg-rose-500 rounded-full mb-1 border border-rose-900" />
                                            <div className="w-12 h-1.5 bg-rose-500 rounded-full border border-rose-900" />
                                        </div>
                                        {/* Scanning Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-400/20 to-transparent h-4 animate-[scan_3s_linear_infinite]" />
                                    </div>
                                    <style>{`@keyframes scan { 0% { top: -10%; } 100% { top: 110%; } }`}</style>
                                </div>

                                <h4 className="text-white text-3xl font-black tracking-tight mb-4 drop-shadow-md">INTRANET TERISOLASI</h4>
                                <p className="text-slate-300 font-bold leading-relaxed italic max-w-sm drop-shadow-md">
                                    Seluruh komunikasi data antar dinas berjalan di atas <span className="text-emerald-400">VPN tertutup</span>, memutus celah Ransomware dari internet publik.
                                </p>
                                <div className="mt-auto pt-8">
                                    <div className="px-6 py-2.5 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 font-black text-xs uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(34,197,94,0.2)] backdrop-blur-md">
                                        <ShieldAlert size={14} className="inline mr-2 -translate-y-[1px]" /> Anti-Ransomware Shield
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
                <SlideWrapper title="Ekosistem SIPD Terpadu" subtitle="Sistem Informasi Pemerintahan Daerah (Arsitektur Keuangan APBD)" icon={Landmark}>
                    <div className="flex flex-col gap-10 pt-4 max-w-7xl mx-auto pb-10">
                        <div className="bg-white p-8 md:p-12 rounded-[3.5rem] border border-slate-200 shadow-xl relative overflow-hidden">
                            <div className="absolute right-[-10%] top-[-10%] opacity-10 rotate-12 -z-0">
                                <Landmark size={400} />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-3xl font-black text-slate-900 mb-2">Arsitektur Siklus Tertutup <span className="text-emerald-600">(Closed-Loop)</span></h3>
                                <p className="text-slate-500 font-bold mb-10 max-w-2xl">Visualisasi rantai nilai perencanaan pembangunan daerah terintegrasi yang dikawal ketat oleh SIPD untuk mencegah korupsi dan inefisiensi anggaran.</p>
                                
                                {/* Linear Flow Diagram */}
                                <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch gap-6 md:gap-4 w-full relative">
                                    {/* Connecting Line */}
                                    <div className="hidden md:block absolute top-[45%] left-10 right-10 h-2 bg-slate-100 -z-10 rounded-full" />
                                    
                                    {[
                                        { t: "MUSRENBANG", l: "E-Planning", p: "Partisipasi", c: "border-blue-200 bg-blue-50 text-blue-700", icon: Users },
                                        { t: "STANDARISASI", l: "E-Budgeting", p: "Penganggaran", c: "border-amber-200 bg-amber-50 text-amber-700", icon: FileText },
                                        { t: "PENATAUSAHAAN", l: "E-Implementasi", p: "Pelaksanaan", c: "border-emerald-200 bg-emerald-50 text-emerald-700", icon: CheckCircle2 },
                                        { t: "AUDIT RISET", l: "E-Monev", p: "Evaluasi", c: "border-rose-200 bg-rose-50 text-rose-700", icon: Target },
                                    ].map((step, idx) => (
                                        <motion.div key={step.t} className="flex-1 flex flex-col items-center w-full" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * idx }}>
                                            <div className={`w-20 h-20 rounded-t-[2rem] rounded-b-[0.5rem] border-[6px] ${step.c} flex items-center justify-center bg-white shadow-lg mb-4 relative hover:-translate-y-2 transition-transform duration-300 z-10`}>
                                                <step.icon size={28} />
                                                <div className="absolute -bottom-8 w-1 h-8 bg-slate-200" />
                                            </div>
                                            <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm text-center w-full relative z-10 hover:shadow-md transition-shadow">
                                                <div className="text-[10px] font-black uppercase text-slate-400 mb-1 tracking-widest">{step.t}</div>
                                                <div className="font-black text-slate-800 text-lg mb-1">{step.l}</div>
                                                <div className="text-xs font-bold text-slate-500 italic">{step.p}</div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                                
                                <div className="mt-12 p-6 bg-slate-950 text-white rounded-[2rem] border-l-[12px] border-emerald-500 shadow-2xl max-w-4xl mx-auto flex items-center gap-6 transform hover:scale-[1.02] transition-transform">
                                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                                        <Lock size={32} />
                                    </div>
                                    <p className="text-lg md:text-xl font-medium leading-relaxed italic pr-4">
                                        &quot;SIPD mengunci usulan Musrenbang sampai menjadi RKPD. Meniadakan kemungkinan <strong>program siluman</strong> menyelinap di tengah proses alokasi anggaran.&quot;
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.div className="bg-emerald-600 p-8 md:p-10 rounded-[3rem] text-white flex flex-col justify-center items-start relative overflow-hidden shadow-[0_20px_40px_-15px_rgba(5,150,105,0.4)]" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                                <div className="absolute right-[-10%] top-[-50%] w-64 h-64 bg-emerald-500 blur-3xl rounded-full opacity-50 mix-blend-screen" />
                                <h4 className="text-xl font-black text-emerald-100 mb-4 tracking-tight">Zero Local Hosting Cost</h4>
                                <p className="text-3xl md:text-4xl font-black leading-tight tracking-tighter mb-6 relative z-10">
                                    Fasilitasi Pusat Data Nasional menghemat APBD senilai miliaran Rupiah setiap tahunnya.
                                </p>
                                <div className="px-5 py-2 bg-emerald-950/40 border border-emerald-400/30 rounded-full font-black text-xs uppercase tracking-widest backdrop-blur-md">Efisiensi Mutlak</div>
                            </motion.div>
                            <motion.div className="bg-slate-50 p-8 md:p-10 rounded-[3rem] border border-slate-200 shadow-sm flex flex-col justify-center" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center"><Activity size={24} /></div>
                                    <h4 className="text-xl font-black text-slate-800">Transparansi Real-Time</h4>
                                </div>
                                <p className="text-slate-600 font-bold leading-relaxed mb-6">
                                    Pimpinan dapat memantau serapan anggaran (realisasi) dari masing-masing OPD setiap saat secara aktual (real-time) melalui Executive Dashboard.
                                </p>
                                <div className="flex gap-4">
                                    <div className="flex-1 h-3 bg-slate-200 rounded-full overflow-hidden">
                                        <motion.div className="h-full bg-orange-500 rounded-full" initial={{ width: 0 }} animate={{ width: '75%' }} transition={{ duration: 1.5, delay: 0.5 }} />
                                    </div>
                                    <span className="text-xs font-black text-orange-600 font-mono tracking-tighter">75% Serapan</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </SlideWrapper>
            )
        },
        // Slide 14: Executive Dashboard
        {
            content: (
                <SlideWrapper title="Executive Dashboard" subtitle="Cockpit View Pimpinan: Kendali Data Real-Time" icon={LayoutDashboard}>
                    <div className="grid lg:grid-cols-12 gap-10 h-full pt-4 max-w-7xl mx-auto pb-10">
                        <div className="lg:col-span-5 h-full flex flex-col gap-6">
                            <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-200 shadow-sm flex-1">
                                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Keputusan Berbasis Fakta</h3>
                                <p className="text-slate-600 font-bold leading-relaxed mb-8">Executive Dashboard mentransformasi lautan raw data dari Data Lake menjadi analitik cerdas yang dapat diakses Kepala Daerah secara instan dari genggaman (mobile-ready).</p>
                                
                                <div className="space-y-4">
                                    {[
                                        { t: "Radar PAD", d: "Realisasi harian per sektor Pajak & Retribusi.", i: Landmark, delay: 0.1 },
                                        { t: "EWS Banjir", d: "Status tinggi muka air pintu air secara aktual.", i: AlertTriangle, delay: 0.2 },
                                        { t: "Stunting Map", d: "Peta titik balita risiko tinggi berdasarkan geo-tagging.", i: Stethoscope, delay: 0.3 },
                                        { t: "Publik Opini", d: "Sentimen warga dari analitik aduan & sosial media.", i: MessageSquare, delay: 0.4 },
                                    ].map((item) => (
                                        <motion.div key={item.t} className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: item.delay }}>
                                            <div className="p-2.5 bg-slate-100 rounded-xl text-slate-700 shrink-0"><item.i size={20} /></div>
                                            <div>
                                                <h5 className="font-black text-slate-800 text-sm">{item.t}</h5>
                                                <p className="text-[11px] font-semibold text-slate-500 leading-tight mt-0.5">{item.d}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                            
                            <motion.div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-8 rounded-[3rem] text-white shadow-xl relative overflow-hidden" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                                <div className="absolute right-[-10%] top-[-20%] opacity-20"><Clock size={160} /></div>
                                <div className="relative z-10">
                                    <div className="text-emerald-100 font-black text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-white animate-pulse" /> Live SLA Metrics
                                    </div>
                                    <p className="font-medium text-emerald-50 text-sm italic mb-4 max-w-[80%]">Rata-rata kecepatan respons seluruh Instansi terhadap laporan kedaruratan warga.</p>
                                    <div className="flex items-end gap-3">
                                        <div className="text-5xl font-black tracking-tighter">98.2<span className="text-3xl opacity-70">%</span></div>
                                        <div className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-black uppercase mb-1">Cepat & Tepat</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        
                        <div className="lg:col-span-7 h-full hidden lg:block relative">
                            {/* Dashboard Mockup - Palantir/Bloomberg Style */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="bg-slate-950 rounded-[3rem] p-4 h-full border-[12px] border-slate-900 shadow-2xl relative overflow-hidden flex flex-col"
                            >
                                {/* Dashboard Top Bar */}
                                <div className="flex justify-between items-center px-4 py-3 border-b border-slate-800 shrink-0">
                                    <div className="flex items-center gap-4">
                                        <div className="w-3 h-3 rounded-full bg-rose-500 animate-pulse" />
                                        <div className="text-slate-400 font-mono text-[10px] font-black tracking-[0.3em] uppercase">Executive Command</div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden"><div className="w-[80%] h-full bg-blue-500" /></div>
                                        <div className="w-8 h-1.5 bg-slate-800 rounded-full overflow-hidden"><div className="w-[40%] h-full bg-emerald-500" /></div>
                                    </div>
                                </div>

                                {/* Dashboard Content */}
                                <div className="flex-1 p-6 grid grid-cols-12 grid-rows-6 gap-4 custom-scrollbar overflow-y-auto">
                                    {/* PAD Widget */}
                                    <div className="col-span-12 row-span-2 bg-slate-900/50 border border-slate-800/80 rounded-3xl p-6 flex flex-col justify-center relative overflow-hidden group">
                                        <div className="absolute right-0 top-0 w-32 h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] pointer-events-none" />
                                        <div className="text-emerald-500/80 font-mono text-[10px] font-black uppercase tracking-widest mb-1 flex items-center justify-between">
                                            <span>Target PAD 2029</span>
                                            <TrendingUp size={14} className="text-emerald-400" />
                                        </div>
                                        <div className="text-white text-5xl font-black tabular-nums tracking-tighter decoration-emerald-500/50 underline decoration-4 underline-offset-8 mt-2">Rp 2.45<span className="text-3xl text-slate-500 font-bold ml-1">Triliun</span></div>
                                        {/* Mock Graph */}
                                        <div className="absolute bottom-0 left-0 w-full h-10 flex items-end opacity-30 gap-[2px] px-6">
                                            {[...Array(30)].map((_, i) => (
                                                <motion.div key={i} className="flex-1 bg-emerald-500 rounded-t-sm" initial={{ height: 0 }} animate={{ height: `${20 + Math.random() * 80}%` }} transition={{ delay: i * 0.05 }} />
                                            ))}
                                        </div>
                                    </div>

                                    {/* EWS Alerts */}
                                    <div className="col-span-5 row-span-4 bg-rose-950/20 border border-rose-900/30 rounded-3xl p-6 flex flex-col">
                                        <div className="text-rose-500/80 font-mono text-[10px] font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                                            <AlertTriangle size={14} /> EWS Alerts <span className="px-1.5 py-0.5 bg-rose-500/20 rounded text-rose-400">3 Aktif</span>
                                        </div>
                                        <div className="space-y-3 flex-1">
                                            {[
                                                { m: "TMA Sungai Kriyan Naik", l: "Siaga 2", t: "10m ago" },
                                                { m: "Kepadatan Simpang Plered", l: "CCTV-04", t: "12m ago" },
                                                { m: "Aduan Jalan Berlubang", l: "Harjamukti", t: "1h ago" },
                                            ].map((a, i) => (
                                                <div key={i} className="bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
                                                    <div className="text-rose-400 font-bold text-xs mb-1">{a.m}</div>
                                                    <div className="flex justify-between items-center">
                                                        <div className="text-slate-500 text-[9px] font-mono tracking-wider">{a.l}</div>
                                                        <div className="text-slate-600 text-[9px] font-mono">{a.t}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Geospatial Map Mock */}
                                    <div className="col-span-7 row-span-4 bg-slate-900/50 border border-slate-800/80 rounded-3xl p-6 relative overflow-hidden flex flex-col items-center justify-center">
                                        <div className="absolute left-6 top-6 text-blue-500/80 font-mono text-[10px] font-black uppercase tracking-widest z-10 flex items-center gap-2">
                                            <Map size={14} /> Geospatial (GIS) <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                                        </div>
                                        <div className="w-48 h-48 border-[6px] border-slate-800 rounded-full relative bg-slate-900/50 flex flex-col items-center justify-center shadow-inner">
                                            {/* Radar Sweep Effect */}
                                            <div className="absolute inset-2 rounded-full border border-blue-500/20 border-t-blue-500 animate-spin" style={{ animationDuration: '3s' }} />
                                            {/* Grid */}
                                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] rounded-full opacity-20" />
                                            <div className="w-1 h-1 bg-rose-500 rounded-full relative z-10 animate-ping" />
                                            <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,1)]" />
                                            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,1)]" />
                                            
                                            <p className="text-[8px] font-mono text-slate-500 mt-4 uppercase tracking-[0.2em] relative z-10">Cirebon Grid</p>
                                        </div>
                                    </div>
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
                                <h3 className="text-4xl md:text-5xl font-black text-slate-950 leading-tight tracking-tight underline decoration-emerald-500 decoration-[14px] underline-offset-10 mb-6 drop-shadow-sm">The Single Digital Portal for All.</h3>
                                <p className="text-xl md:text-2xl text-slate-500 font-bold leading-relaxed mb-10">Satu identitas digital untuk mengurai benang kusut birokrasi dan melayani seluruh kebutuhan warga Cirebon.</p>
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                                <motion.div className="flex bg-white p-6 rounded-3xl border border-slate-200 shadow-sm gap-6 group hover:border-blue-300 transition-colors" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                                    <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex justify-center items-center shrink-0 group-hover:scale-110 transition-transform"><Lock size={32} /></div>
                                    <div>
                                        <h4 className="text-xl font-black text-slate-800 mb-2">Identitas Tunggal (IKD)</h4>
                                        <p className="text-slate-600 font-bold leading-relaxed text-sm">Verifikasi biometrik IKD Kemendagri. Daftar satu kali (<span className="text-blue-600 italic">Single Sign-On</span>) untuk akses ratusan layanan publik tanpa fotokopi KTP berulang.</p>
                                    </div>
                                </motion.div>
                                <motion.div className="flex bg-white p-6 rounded-3xl border border-slate-200 shadow-sm gap-6 group hover:border-emerald-300 transition-colors" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                                    <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex justify-center items-center shrink-0 group-hover:scale-110 transition-transform"><TrendingUp size={32} /></div>
                                    <div>
                                        <h4 className="text-xl font-black text-slate-800 mb-2">Seamless Payment Gateway</h4>
                                        <p className="text-slate-600 font-bold leading-relaxed text-sm">Terintegrasi BJB Aggregator QRIS untuk melunasi PBB, Retribusi Sampah, & Tagihan PDAM hanya dalam 3 kali tap tanpa calo.</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                        <div className="relative flex justify-center group scale-75 sm:scale-90 md:scale-100 origin-top h-full">
                            {/* Super App Mockup Base */}
                            <motion.div 
                                className="w-[340px] h-[680px] bg-slate-900 rounded-[3.5rem] border-[14px] border-slate-950 shadow-2xl relative overflow-hidden flex flex-col pt-12 shrink-0 z-10"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                {/* Hardware Notch & Buttons */}
                                <div className="absolute top-0 w-full flex justify-center h-7 z-30">
                                    <div className="w-28 h-7 bg-slate-950 rounded-b-3xl"></div>
                                </div>
                                <div className="absolute top-32 -left-[14px] w-1.5 h-12 bg-slate-800 rounded-l-md" />
                                <div className="absolute top-48 -left-[14px] w-1.5 h-12 bg-slate-800 rounded-l-md" />
                                <div className="absolute top-36 -right-[14px] w-1.5 h-16 bg-slate-800 rounded-r-md" />

                                {/* Header & Welcome */}
                                <div className="px-6 py-8 border-b border-white/10 bg-gradient-to-br from-emerald-600 via-teal-600 to-blue-700 relative overflow-hidden">
                                    <div className="absolute right-[-20%] top-[-20%] opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] w-full h-full mix-blend-overlay" />
                                    <div className="flex justify-between items-center mb-6 relative z-10">
                                        <Image src="/Logo_Cirebon.png" alt="Logo Cirebon" width={32} height={32} className="brightness-0 invert opacity-90" />
                                        <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white/50 flex items-center justify-center p-0.5"><div className="w-full h-full bg-slate-200 rounded-full overflow-hidden flex items-center justify-center bg-[url('https://i.pravatar.cc/100')] bg-cover" /></div>
                                    </div>
                                    <h4 className="text-white font-black text-2xl tracking-tight relative z-10">Hi, Warga!</h4>
                                    <p className="text-emerald-100/90 text-[11px] font-bold uppercase tracking-widest relative z-10 flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-300" /> IKD Verified</p>
                                </div>

                                {/* App Content */}
                                <div className="flex-1 p-5 space-y-6 bg-slate-50 relative custom-scrollbar overflow-y-auto">
                                    {/* E-Wallet Mock */}
                                    <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-5 rounded-3xl shadow-lg border border-slate-700/50 flex flex-col justify-between h-32 relative overflow-hidden group-hover:-translate-y-1 transition-transform">
                                        <div className="absolute right-0 top-0 w-24 h-full bg-white/5 skew-x-12 translate-x-12" />
                                        <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Saldo Q-RIS</div>
                                        <div className="text-white text-3xl font-black tabular-nums tracking-tighter mix-blend-screen">Rp 2.450.000</div>
                                        <div className="flex justify-between items-end mt-2">
                                            <div className="text-slate-500 font-mono text-[9px]">**** **** **** 3920</div>
                                            <div className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded-md text-[9px] font-black uppercase">Top Up</div>
                                        </div>
                                    </div>

                                    {/* Quick Amenities */}
                                    <div>
                                        <div className="flex justify-between items-end mb-3 px-1">
                                            <div className="text-slate-800 font-black text-sm">Layanan Esensial</div>
                                            <div className="text-blue-600 font-bold text-[10px] uppercase">Lihat Semua</div>
                                        </div>
                                        <div className="grid grid-cols-4 gap-3">
                                            {[
                                                { icon: FileText, c: "text-blue-600 bg-blue-50" },
                                                { icon: Stethoscope, c: "text-emerald-600 bg-emerald-50" },
                                                { icon: AlertTriangle, c: "text-amber-600 bg-amber-50" },
                                                { icon: HeartHandshake, c: "text-rose-600 bg-rose-50" },
                                                { icon: Building2, c: "text-indigo-600 bg-indigo-50" },
                                                { icon: Map, c: "text-teal-600 bg-teal-50" },
                                                { icon: MessageSquare, c: "text-purple-600 bg-purple-50" },
                                                { icon: Smartphone, c: "text-slate-600 bg-slate-100" },
                                            ].map((m, i) => (
                                                <div key={i} className="flex flex-col items-center gap-1.5 cursor-pointer">
                                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm border border-black/5 hover:scale-105 transition-transform ${m.c}`}>
                                                        <m.icon size={20} />
                                                    </div>
                                                    <div className="w-8 h-1 bg-slate-200 rounded-full" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Citizen Report Mock */}
                                    <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-200 relative overflow-hidden">
                                        <div className="absolute left-0 top-0 w-1.5 h-full bg-rose-500" />
                                        <div className="flex justify-between items-start mb-2">
                                            <h5 className="font-black text-slate-800 text-sm">Peringatan Dini (EWS)</h5>
                                            <span className="text-[9px] font-black uppercase text-rose-500 bg-rose-50 px-2 py-0.5 rounded-full">Siaga</span>
                                        </div>
                                        <p className="text-xs text-slate-500 font-bold leading-tight line-clamp-2 mb-3">Peningkatan genangan air di Jalan Siliwangi terdeteksi sensor IoT. Harap hindari rute ini.</p>
                                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden"><div className="w-[80%] h-full bg-rose-500" /></div>
                                    </div>
                                    
                                     {/* Mock Bottom Nav Space */}
                                     <div className="h-6" /> 
                                </div>
                                {/* Bottom Navigation Bar */}
                                <div className="absolute bottom-0 w-full h-20 bg-white/90 backdrop-blur-md border-t border-slate-200 px-6 pb-2 pt-4 flex justify-between items-center">
                                    <Smartphone size={24} className="text-slate-400" />
                                    <FileText size={24} className="text-slate-400" />
                                    <div className="w-14 h-14 bg-emerald-500 rounded-full text-white flex justify-center items-center shadow-lg -translate-y-4 shadow-emerald-500/30">
                                        <div className="w-6 h-6 border-4 border-white border-t-transparent border-l-transparent rounded-sm rotate-45" /> {/* QR Mock */}
                                    </div>
                                    <MessageSquare size={24} className="text-slate-400" />
                                    <div className="w-6 h-6 rounded-full bg-slate-300" />
                                </div>
                            </motion.div>
                            
                            {/* Decorative background elements behind the phone */}
                            <motion.div className="absolute top-10 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -z-10" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }} />
                            <motion.div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl -z-10" animate={{ scale: [1.2, 1, 1.2] }} transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }} />
                        </div>
                    </div>
                </SlideWrapper>
            )
        },
        // Slide 16: Closing Coda
        {
            content: (
                <div className="flex flex-col items-center justify-center h-full text-center p-8 md:p-12 relative overflow-hidden bg-slate-950 text-white isolate">
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 -z-10 mix-blend-overlay" />
                    <div className="absolute -top-[20%] -right-[10%] w-[80%] h-[80%] bg-emerald-500/20 blur-[120px] rounded-full mix-blend-screen -z-10 pointer-events-none" />
                    <div className="absolute -bottom-[20%] -left-[10%] w-[80%] h-[80%] bg-blue-500/20 blur-[120px] rounded-full mix-blend-screen -z-10 pointer-events-none" />
                    
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="z-10 w-full max-w-6xl flex flex-col items-center"
                    >
                        <motion.div 
                            className="w-40 h-2 bg-gradient-to-r from-emerald-500 to-blue-500 mb-12 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.5)]"
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: 160, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1.5 }}
                        />
                        <h2 className="text-4xl md:text-7xl lg:text-8xl font-black mb-16 tracking-tighter leading-[0.9] text-white selection:bg-emerald-500 selection:text-white">
                            Cirebon Strategic Pledge:<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 drop-shadow-[0_0_30px_rgba(52,211,153,0.3)]">Legacy Modernisasi.</span>
                        </h2>

                        <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-12 md:p-20 rounded-[4rem] shadow-2xl relative mb-20 max-w-5xl group overflow-hidden">
                             <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                            <div className="absolute top-[-20px] md:top-[-40px] left-6 md:left-12 text-[8rem] md:text-[14rem] text-emerald-500/10 font-black pointer-events-none select-none italic leading-none">&ldquo;</div>
                            <p className="text-emerald-50/90 text-2xl md:text-4xl lg:text-5xl font-black leading-[1.4] italic relative z-10 tracking-tight">
                                Memanusiakan pelayanan, <span className="text-white underline decoration-emerald-500 decoration-8 underline-offset-8">memartabatkan waktu warga</span>, dan mencintai masyarakat Kota Cirebon.
                            </p>
                            <div className="absolute bottom-[-20px] md:bottom-[-40px] right-6 md:right-12 text-[8rem] md:text-[14rem] text-blue-500/10 font-black pointer-events-none select-none italic leading-none">&rdquo;</div>
                        </div>

                        <div className="flex flex-col items-center gap-6">
                            <div className="px-12 py-5 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-full font-black text-sm md:text-base uppercase tracking-[0.4em] shadow-[0_10px_30px_rgba(5,150,105,0.4)] hover:scale-105 transition-transform duration-500 cursor-default border border-emerald-400/30">
                                Smart City Cirebon 2029
                            </div>
                            <div className="text-slate-400 font-black text-[10px] md:text-sm tracking-widest mt-2 bg-slate-900/50 px-6 py-2 rounded-full border border-slate-800">TRANSFORMASI DIGITAL • INKLUSIF • BERKELANJUTAN</div>
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
