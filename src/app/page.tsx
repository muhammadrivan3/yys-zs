import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between  bg-gray-50">
      <Header
        title="YAYASAN ZAHRATUL SYITHA"
        subtitle="Pusat Kegiatan Belajar Masyarakat"
        sticky={true}
        variant="elevated"
      />

      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="py-12 md:py-20">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl mb-6">
                <span className="text-white font-bold text-3xl md:text-4xl">
                  S
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
                Selamat Datang di{" "}
                <span className="text-blue-700">Sekolah Kita</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Menjalin Tradisi Keunggulan, Membentuk Pemimpin Masa Depan
                melalui Pendidikan Berkarakter
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl">
                  Program PPDB 2024
                </button>
                <button className="px-8 py-3 border-2 border-blue-600 text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                  Virtual Tour
                </button>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">
                  98%
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  Kelulusan Siswa
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">
                  50+
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  Program Unggulan
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">
                  25
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  Tahun Pengalaman
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">
                  1500+
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  Alumni Berprestasi
                </div>
              </div>
            </div>
          </section>

          {/* Vision & Mission */}
          <section className="py-12 mb-16">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Visi Kami
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Menjadi institusi pendidikan terdepan yang menghasilkan
                  lulusan berkarakter, kompeten secara global, dan berkomitmen
                  pada pengembangan masyarakat berkelanjutan.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Misi Kami
                  </h2>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>
                      Menyelenggarakan pendidikan holistik berbasis karakter
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>
                      Mengembangkan kurikulum berstandar internasional
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>
                      Membina lingkungan belajar yang inovatif dan inspiratif
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Programs Highlight */}
          <section className="py-12 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Program Unggulan
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Kami menawarkan program pendidikan yang komprehensif untuk
                mengembangkan potensi terbaik setiap siswa
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "International Baccalaureate",
                  description:
                    "Program diploma internasional yang diakui secara global",
                  icon: "🌍",
                  color: "from-blue-500 to-blue-700",
                },
                {
                  title: "STEM Excellence",
                  description:
                    "Pendidikan terpadu sains, teknologi, engineering, dan matematika",
                  icon: "🔬",
                  color: "from-purple-500 to-purple-700",
                },
                {
                  title: "Leadership Academy",
                  description:
                    "Pengembangan kepemimpinan dan soft skills terstruktur",
                  icon: "👑",
                  color: "from-amber-500 to-amber-700",
                },
              ].map((program, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div
                    className={`absolute -top-6 left-8 w-14 h-14 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center text-white text-2xl shadow-lg`}
                  >
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800"
                  >
                    Pelajari Lebih Lanjut
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Announcements */}
          <section className="py-12 bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl text-white mb-16">
            <div className="px-8 py-12">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Pengumuman Penting
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Penerimaan Siswa Baru TA 2024/2025",
                      date: "15 Januari - 15 Maret 2024",
                      status: "Buka",
                    },
                    {
                      title: "Beasiswa Prestasi & Khusus",
                      date: "Deadline: 28 Februari 2024",
                      status: "Buka",
                    },
                    {
                      title: "Ujian Nasional Berbasis Komputer",
                      date: "20-25 Maret 2024",
                      status: "Akan Datang",
                    },
                  ].map((announcement, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-colors"
                    >
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          {announcement.title}
                        </h3>
                        <p className="text-blue-200">{announcement.date}</p>
                      </div>
                      <span
                        className={`px-4 py-1 rounded-full text-sm font-semibold ${announcement.status === "Buka" ? "bg-green-500" : "bg-amber-500"}`}
                      >
                        {announcement.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Leadership Message */}
          <section className="py-12 mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-white rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="relative">
                    <img
                      src="/images/headmaster.jpg"
                      alt="Kepala Sekolah"
                      className="rounded-2xl shadow-2xl w-full h-auto"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-blue-700 text-white px-6 py-3 rounded-xl">
                      <div className="text-sm">Kepala Sekolah</div>
                      <div className="font-bold">Dr. Ahmad Rahman, M.Pd.</div>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Sambutan Kepala Sekolah
                  </h2>
                  <blockquote className="text-gray-700 text-lg leading-relaxed italic mb-6">
                    "Di Sekolah Kita, kami percaya bahwa setiap anak adalah
                    pemimpin masa depan. Kami berkomitmen untuk menyediakan
                    lingkungan belajar yang tidak hanya mengembangkan kecerdasan
                    akademik, tetapi juga membangun karakter, integritas, dan
                    kepedulian sosial."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-0.5 bg-blue-600"></div>
                    <span className="text-gray-600 font-medium">
                      Terima kasih atas kepercayaan Anda
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
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
}
