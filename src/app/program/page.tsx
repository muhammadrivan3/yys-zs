import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

const ProgramsPage = () => {
  const programs = [
    {
      category: "Academic Excellence",
      icon: "🎓",
      color: "from-blue-500 to-blue-700",
      items: [
        {
          title: "International Baccalaureate (IB)",
          description: "Program diploma internasional yang diakui di lebih dari 140 negara",
          features: ["Kurikulum global", "Pengembangan berpikir kritis", "Persiapan universitas dunia"],
          duration: "2 Tahun",
          age: "16-19 Tahun"
        },
        {
          title: "Cambridge IGCSE",
          description: "Kurikulum internasional untuk siswa usia 14-16 tahun",
          features: ["Berbasis penelitian", "Penilaian komprehensif", "Pengakuan global"],
          duration: "2 Tahun",
          age: "14-16 Tahun"
        },
        {
          title: "National Plus Curriculum",
          description: "Kurikulum nasional diperkaya dengan standar internasional",
          features: ["Bilingual instruction", "Project-based learning", "Digital literacy"],
          duration: "12 Tahun",
          age: "6-18 Tahun"
        }
      ]
    },
    {
      category: "STEM Education",
      icon: "🔬",
      color: "from-purple-500 to-purple-700",
      items: [
        {
          title: "Robotics & AI Program",
          description: "Pengenalan dan pengembangan kecerdasan buatan dan robotika",
          features: ["Workshop robotics", "Coding & programming", "Competition preparation"],
          duration: "Per Semester",
          age: "10+ Tahun"
        },
        {
          title: "Science Research Center",
          description: "Fasilitas penelitian sains untuk proyek-proyek inovatif",
          features: ["Lab modern", "Mentor ahli", "Publikasi hasil"],
          duration: "Fleksibel",
          age: "13+ Tahun"
        },
        {
          title: "Math Olympiad Training",
          description: "Persiapan kompetisi matematika tingkat nasional dan internasional",
          features: ["Advanced concepts", "Problem solving", "Competition strategies"],
          duration: "1 Tahun",
          age: "12-18 Tahun"
        }
      ]
    },
    {
      category: "Arts & Humanities",
      icon: "🎨",
      color: "from-amber-500 to-amber-600",
      items: [
        {
          title: "Performing Arts Academy",
          description: "Pengembangan bakat dalam musik, teater, dan tari",
          features: ["Studio rekaman", "Teater profesional", "Masterclass"],
          duration: "Per Semester",
          age: "All Ages"
        },
        {
          title: "Visual Arts Program",
          description: "Eksplorasi seni visual dan desain kreatif",
          features: ["Digital art lab", "Traditional techniques", "Portfolio development"],
          duration: "Per Semester",
          age: "All Ages"
        },
        {
          title: "Language Excellence",
          description: "Penguasaan bahasa asing: Mandarin, Jepang, Arab, dan Perancis",
          features: ["Native speakers", "Cultural immersion", "Certification prep"],
          duration: "Per Level",
          age: "All Ages"
        }
      ]
    },
    {
      category: "Character Development",
      icon: "💖",
      color: "from-emerald-500 to-emerald-700",
      items: [
        {
          title: "Leadership Academy",
          description: "Pengembangan keterampilan kepemimpinan dan public speaking",
          features: ["Mentoring program", "Community projects", "Conference hosting"],
          duration: "1 Tahun",
          age: "15-18 Tahun"
        },
        {
          title: "Entrepreneurship Program",
          description: "Pembekalan jiwa wirausaha dan bisnis sejak dini",
          features: ["Business planning", "Market simulation", "Investor pitching"],
          duration: "6 Bulan",
          age: "16+ Tahun"
        },
        {
          title: "Community Service",
          description: "Program pengabdian masyarakat dan tanggung jawab sosial",
          features: ["Rural immersion", "Social projects", "Global awareness"],
          duration: "Kontinyu",
          age: "All Ages"
        }
      ]
    }
  ];

  const extracurriculars = [
    { name: "Debate Club", icon: "🗣️", level: "Competitive" },
    { name: "Science Club", icon: "🔭", level: "Advanced" },
    { name: "Sports Academy", icon: "⚽", level: "Elite" },
    { name: "Music Ensemble", icon: "🎵", level: "Performance" },
    { name: "Coding Club", icon: "💻", level: "Advanced" },
    { name: "Eco Warriors", icon: "🌱", level: "Community" },
    { name: "Drama Society", icon: "🎭", level: "Performance" },
    { name: "Math Circle", icon: "📐", level: "Competitive" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        title="YAYASAN ZAHRATUL SYITHA"
        subtitle="Kurikulum Unggulan dan Pengembangan Holistik"
        sticky={true}
        variant="elevated"
      />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Program Unggulan Kami
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
                Menawarkan pendidikan holistik yang mengintegrasikan keunggulan akademik, 
                pengembangan karakter, dan persiapan masa depan
              </p>
            </div>
          </div>
        </section>

        {/* Program Categories */}
        {programs.map((category, catIndex) => (
          <section 
            key={catIndex} 
            className={`py-16 ${catIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-12">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl text-white`}>
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {category.category}
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Program khusus untuk pengembangan kompetensi bidang ini
                  </p>
                </div>
              </div>

              {/* Program Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((program, progIndex) => (
                  <div 
                    key={progIndex} 
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                  >
                    {/* Card Header */}
                    <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {program.description}
                      </p>
                      
                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Fitur Utama:</h4>
                        <ul className="space-y-2">
                          {program.features.map((feature, featIndex) => (
                            <li key={featIndex} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Details */}
                      <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                        <div>
                          <div className="text-sm text-gray-500">Durasi</div>
                          <div className="font-semibold text-gray-900">{program.duration}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Usia</div>
                          <div className="font-semibold text-gray-900">{program.age}</div>
                        </div>
                        <button className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                          Detail
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Extracurricular Activities */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Kegiatan Ekstrakurikuler
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Mengembangkan bakat dan minat siswa di luar kelas melalui berbagai kegiatan menarik
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {extracurriculars.map((activity, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group hover:-translate-y-1 transition-transform"
                >
                  <div className="text-3xl mb-4">{activity.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{activity.name}</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    activity.level === 'Competitive' ? 'bg-blue-100 text-blue-700' :
                    activity.level === 'Advanced' ? 'bg-purple-100 text-purple-700' :
                    activity.level === 'Elite' ? 'bg-amber-100 text-amber-700' :
                    activity.level === 'Performance' ? 'bg-rose-100 text-rose-700' :
                    'bg-emerald-100 text-emerald-700'
                  }`}>
                    {activity.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Approach */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pendekatan Pembelajaran
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Personalized Learning",
                  description: "Setiap siswa mendapatkan pendekatan pembelajaran yang disesuaikan dengan gaya belajar dan kemampuan mereka",
                  icon: "🎯"
                },
                {
                  title: "Project-Based",
                  description: "Pembelajaran melalui proyek nyata yang mengembangkan keterampilan pemecahan masalah",
                  icon: "📊"
                },
                {
                  title: "Technology Integration",
                  description: "Pemanfaatan teknologi terkini untuk meningkatkan pengalaman belajar",
                  icon: "💻"
                }
              ].map((approach, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-3xl text-white mx-auto mb-6">
                    {approach.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{approach.title}</h3>
                  <p className="text-gray-600">{approach.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities for Learning */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Fasilitas Pendukung Pembelajaran
                </h2>
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  Didukung oleh fasilitas modern yang dirancang untuk mengoptimalkan proses 
                  belajar dan mengajar, serta mendukung berbagai aktivitas pengembangan siswa.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    "Laboratorium Sains Modern",
                    "Perpustakaan Digital",
                    "Studio Seni & Musik",
                    "Laboratorium Komputer",
                    "Lapangan Olahraga",
                    "Aula Serbaguna"
                  ].map((facility, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{facility}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-48 rounded-2xl"></div>
                  <div className="bg-gradient-to-br from-purple-400 to-purple-600 h-48 rounded-2xl mt-8"></div>
                  <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 h-48 rounded-2xl -mt-8"></div>
                  <div className="bg-gradient-to-br from-amber-400 to-amber-600 h-48 rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-700 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Temukan Program yang Tepat untuk Anak Anda
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Konsultasikan kebutuhan pendidikan anak Anda dengan tim ahli kami
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/ppdb"
                className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Daftar Sekarang
              </Link>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Jadwalkan Konsultasi
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer 
        sticky={false}
        variant="default"
        showQuickLinks={true}
        showContactInfo={true}
        showSocialMedia={true}
      />
    </div>
  );
};

export default ProgramsPage;