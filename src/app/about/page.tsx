import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        title="YAYASAN ZAHRATUL SYITHA"
        subtitle="Profil & Sejarah"
        sticky={true}
        variant="elevated"
      />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Tentang Kami</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
                Membangun Tradisi Keunggulan Sejak 1999. Komitmen Kami terhadap Pendidikan Berkarakter dan Berprestasi.
              </p>
            </div>
          </div>
        </section>

        {/* History & Milestones */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Jejak Sejarah Keunggulan
                </h2>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  Didirikan pada tahun 1999, Sekolah Kita telah berkembang menjadi institusi pendidikan terkemuka 
                  yang dikenal dengan komitmennya terhadap pendidikan holistik. Dari awal yang sederhana, 
                  kami telah membangun reputasi sebagai sekolah yang menghasilkan lulusan berkualitas.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Selama lebih dari dua dekade, kami terus berinovasi dalam metode pengajaran, mengembangkan 
                  fasilitas modern, dan membangun jaringan alumni yang sukses di berbagai bidang.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Milestone Penting</h3>
                  <div className="space-y-6">
                    {[
                      { year: '1999', event: 'Pendirian Sekolah Kita' },
                      { year: '2005', event: 'Akreditasi A dari BAN-SM' },
                      { year: '2010', event: 'Kerjasama Internasional Pertama' },
                      { year: '2015', event: 'Penghargaan Sekolah Adiwiyata' },
                      { year: '2020', event: 'Digital Transformation Complete' },
                    ].map((milestone, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                          {milestone.year}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{milestone.event}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Filosofi Pendidikan Kami
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Pendekatan holistik yang memadukan kecerdasan akademik, karakter, dan keterampilan hidup
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Academic Excellence",
                  description: "Kurikulum berstandar nasional dan internasional dengan pengajar berkualifikasi tinggi",
                  icon: "🎓",
                  color: "bg-blue-100 text-blue-700"
                },
                {
                  title: "Character Building",
                  description: "Pembentukan karakter melalui nilai-nilai integritas, tanggung jawab, dan empati",
                  icon: "💖",
                  color: "bg-purple-100 text-purple-700"
                },
                {
                  title: "Global Competence",
                  description: "Penguasaan bahasa asing dan pemahaman budaya global untuk persaingan internasional",
                  icon: "🌏",
                  color: "bg-green-100 text-green-700"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`w-16 h-16 rounded-xl ${item.color} flex items-center justify-center text-3xl mb-6`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Fasilitas Unggulan
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Laboratorium Sains Modern",
                  description: "Lab fisika, kimia, biologi dengan peralatan terkini",
                  imageColor: "bg-blue-200"
                },
                {
                  name: "Perpustakaan Digital",
                  description: "Koleksi 10.000+ buku fisik dan digital",
                  imageColor: "bg-purple-200"
                },
                {
                  name: "Lapangan Olahraga",
                  description: "Lapangan futsal, basket, dan atletik standar nasional",
                  imageColor: "bg-green-200"
                },
                {
                  name: "Studio Seni & Musik",
                  description: "Ruangan khusus untuk pengembangan kreativitas",
                  imageColor: "bg-yellow-200"
                },
                {
                  name: "Laboratorium Komputer",
                  description: "Komputer spesifikasi tinggi dengan software terupdate",
                  imageColor: "bg-red-200"
                },
                {
                  name: "Aula Serbaguna",
                  description: "Kapasitas 500 orang untuk berbagai kegiatan",
                  imageColor: "bg-indigo-200"
                }
              ].map((facility, index) => (
                <div key={index} className="group">
                  <div className={`h-48 ${facility.imageColor} rounded-2xl mb-4 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.name}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tim Kepemimpinan
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Dipimpin oleh profesional pendidikan dengan pengalaman dan dedikasi tinggi
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Dr. Ahmad Rahman, M.Pd.",
                  position: "Kepala Sekolah",
                  education: "S3 Pendidikan, Universitas Indonesia",
                  experience: "25 tahun"
                },
                {
                  name: "Drs. Budi Santoso, M.Si.",
                  position: "Wakil Kepala Sekolah",
                  education: "S2 Manajemen Pendidikan",
                  experience: "20 tahun"
                },
                {
                  name: "Prof. Dr. Siti Fatimah, M.Pd.",
                  position: "Kepala Kurikulum",
                  education: "S3 Kurikulum & Pengajaran",
                  experience: "22 tahun"
                },
                {
                  name: "Dian Permatasari, S.Pd., M.Pd.",
                  position: "Kepala Kesiswaan",
                  education: "S2 Bimbingan Konseling",
                  experience: "18 tahun"
                }
              ].map((leader, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mb-4"></div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{leader.position}</p>
                  <p className="text-sm text-gray-600 mb-2">{leader.education}</p>
                  <p className="text-sm text-gray-500">Pengalaman: {leader.experience}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accreditation & Partnerships */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Akreditasi & Kemitraan
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-center">
              {[
                { name: "BAN-SM", description: "Akreditasi A", color: "from-blue-500 to-blue-700" },
                { name: "ISO 9001:2015", description: "Sistem Manajemen Mutu", color: "from-green-500 to-green-700" },
                { name: "Cambridge", description: "Partner Internasional", color: "from-red-500 to-red-700" },
                { name: "Adiwiyata", description: "Sekolah Berwawasan Lingkungan", color: "from-emerald-500 to-emerald-700" }
              ].map((partner, index) => (
                <div key={index} className="text-center">
                  <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${partner.color} mx-auto flex items-center justify-center text-white text-2xl font-bold mb-4`}>
                    {partner.name.split(' ')[0]}
                  </div>
                  <h3 className="font-bold text-gray-900">{partner.name}</h3>
                  <p className="text-gray-600 text-sm">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bergabunglah dengan Komunitas Kami
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Jadilah bagian dari tradisi keunggulan dan pengembangan karakter bersama Sekolah Kita
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                Daftar Sekarang
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Jadwalkan Kunjungan
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

export default AboutPage;