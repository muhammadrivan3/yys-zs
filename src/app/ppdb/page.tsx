"use client";
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const PPDBPage = () => {
  const [activeTab, setActiveTab] = useState('general');

  const admissionStages = [
    {
      stage: "Pendaftaran",
      date: "15 Jan - 15 Mar 2024",
      status: "open",
      description: "Pendaftaran online melalui website atau datang langsung"
    },
    {
      stage: "Tes Potensi Akademik",
      date: "20-25 Mar 2024",
      status: "upcoming",
      description: "Tes tertulis untuk mengukur kemampuan dasar"
    },
    {
      stage: "Wawancara",
      date: "27-30 Mar 2024",
      status: "upcoming",
      description: "Wawancara dengan tim penerimaan dan psikolog"
    },
    {
      stage: "Pengumuman Hasil",
      date: "5 April 2024",
      status: "upcoming",
      description: "Pengumuman melalui website dan email"
    },
    {
      stage: "Daftar Ulang",
      date: "6-12 April 2024",
      status: "upcoming",
      description: "Konfirmasi penerimaan dan administrasi"
    }
  ];

  const feeStructure = [
    {
      grade: "Play Group (2-3 tahun)",
      admission: "Rp 15.000.000",
      monthly: "Rp 2.500.000",
      description: "Program bermain sambil belajar"
    },
    {
      grade: "TK (4-6 tahun)",
      admission: "Rp 18.000.000",
      monthly: "Rp 2.800.000",
      description: "Persiapan masuk SD"
    },
    {
      grade: "SD (7-12 tahun)",
      admission: "Rp 25.000.000",
      monthly: "Rp 3.500.000",
      description: "Kurikulum nasional plus"
    },
    {
      grade: "SMP (13-15 tahun)",
      admission: "Rp 30.000.000",
      monthly: "Rp 4.200.000",
      description: "Program Cambridge IGCSE"
    },
    {
      grade: "SMA (16-18 tahun)",
      admission: "Rp 35.000.000",
      monthly: "Rp 5.000.000",
      description: "International Baccalaureate"
    }
  ];

  const scholarshipPrograms = [
    {
      name: "Beasiswa Prestasi Akademik",
      coverage: "100%",
      requirements: ["Nilai rata-rata ≥ 90", "Peringkat 1-3 sekolah", "Essay motivasi"],
      deadline: "28 Feb 2024"
    },
    {
      name: "Beasiswa Khusus (Yatim/Dhuafa)",
      coverage: "75% - 100%",
      requirements: ["Rekomendasi pemerintah", "Dokumen ekonomi", "Wawancara keluarga"],
      deadline: "28 Feb 2024"
    },
    {
      name: "Beasiswa Seni & Olahraga",
      coverage: "50% - 75%",
      requirements: ["Sertifikat prestasi", "Portfolio karya", "Audisi/penilaian"],
      deadline: "28 Feb 2024"
    },
    {
      name: "Beasiswa Sains & Teknologi",
      coverage: "50% - 100%",
      requirements: ["Proyek penelitian", "Kompetisi nasional", "Rekomendasi guru"],
      deadline: "28 Feb 2024"
    }
  ];

  const requiredDocuments = [
    { name: "Formulir Pendaftaran", format: "Online/Print", mandatory: true },
    { name: "Foto 3x4", format: "4 lembar", mandatory: true },
    { name: "Fotokopi Akta Kelahiran", format: "2 lembar", mandatory: true },
    { name: "Fotokopi Kartu Keluarga", format: "2 lembar", mandatory: true },
    { name: "Rapor 2 Tahun Terakhir", format: "Legalisir", mandatory: true },
    { name: "Sertifikat Prestasi", format: "Fotokopi", mandatory: false },
    { name: "Surat Rekomendasi", format: "Asli", mandatory: false },
    { name: "Foto Keluarga", format: "3x4/4x6", mandatory: true }
  ];

  const [formData, setFormData] = useState({
    fullName: '',
    birthDate: '',
    grade: '',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    previousSchool: '',
    address: '',
    specialNeeds: '',
    scholarshipInterest: false
  });

  const handleInputChange = (e: any) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert('Pendaftaran berhasil dikirim! Kami akan menghubungi Anda dalam 1x24 jam.');
    // Here you would typically send the data to your backend
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        title="YAYASAN ZAHRATUL SYITHA"
        subtitle="PPDB Tahun Ajaran 2024/2025"
        sticky={true}
        variant="elevated"
      />
      
      <main className="flex-1">
        {/* Hero Section with Countdown */}
        <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                PPDB 2024/2025
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100 mb-8">
                Pendaftaran Peserta Didik Baru Tahun Ajaran 2024/2025 telah dibuka!
              </p>
              
              {/* Countdown Timer */}
              <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold">45</div>
                  <div className="text-sm">Hari</div>
                </div>
                <div className="text-2xl">:</div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold">12</div>
                  <div className="text-sm">Jam</div>
                </div>
                <div className="text-2xl">:</div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold">30</div>
                  <div className="text-sm">Menit</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Daftar Sekarang
                </button>
                <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                  Download Brosur
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Timeline PPDB 2024/2025
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Ikuti tahapan penerimaan siswa baru dengan tepat waktu
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 right-0 top-8 h-1 bg-gray-200 hidden md:block"></div>
              
              <div className="grid md:grid-cols-5 gap-8">
                {admissionStages.map((stage, index) => (
                  <div key={index} className="relative">
                    <div className="flex flex-col items-center">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                        stage.status === 'open' ? 'bg-green-500' :
                        stage.status === 'upcoming' ? 'bg-blue-500' : 'bg-gray-300'
                      } text-white font-bold text-lg`}>
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 text-center mb-2">
                        {stage.stage}
                      </h3>
                      <p className="text-blue-600 font-semibold text-center mb-2">
                        {stage.date}
                      </p>
                      <p className="text-gray-600 text-sm text-center">
                        {stage.description}
                      </p>
                      <span className={`mt-3 px-3 py-1 rounded-full text-xs font-semibold ${
                        stage.status === 'open' ? 'bg-green-100 text-green-700' :
                        stage.status === 'upcoming' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {stage.status === 'open' ? 'BUKA' : 'SEGERA'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tabs Navigation */}
            <div className="flex flex-wrap gap-2 mb-12">
              {['general', 'fees', 'scholarship', 'documents'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    activeTab === tab
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {tab === 'general' && 'Informasi Umum'}
                  {tab === 'fees' && 'Biaya Pendidikan'}
                  {tab === 'scholarship' && 'Beasiswa'}
                  {tab === 'documents' && 'Dokumen Required'}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* General Information Tab */}
              {activeTab === 'general' && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Persyaratan Umum
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span>Usia sesuai jenjang pendidikan</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span>Lulus tes potensi akademik dan wawancara</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span>Memiliki minat dan bakat yang sesuai dengan program sekolah</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span>Orang tua mendukung sepenuhnya program pendidikan sekolah</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Kapasitas Kelas
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        { grade: 'Play Group & TK', capacity: '20 siswa/kelas', classes: '4 kelas' },
                        { grade: 'SD', capacity: '25 siswa/kelas', classes: '6 kelas' },
                        { grade: 'SMP & SMA', capacity: '28 siswa/kelas', classes: '4 kelas/jenjang' }
                      ].map((item, index) => (
                        <div key={index} className="bg-blue-50 rounded-xl p-6">
                          <h4 className="font-bold text-gray-900 mb-2">{item.grade}</h4>
                          <p className="text-blue-600 font-semibold">{item.capacity}</p>
                          <p className="text-gray-600 text-sm">{item.classes}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Fees Tab */}
              {activeTab === 'fees' && (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="py-3 px-4 text-left font-semibold text-gray-900">Jenjang</th>
                        <th className="py-3 px-4 text-left font-semibold text-gray-900">Biaya Masuk</th>
                        <th className="py-3 px-4 text-left font-semibold text-gray-900">SPP Bulanan</th>
                        <th className="py-3 px-4 text-left font-semibold text-gray-900">Keterangan</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {feeStructure.map((fee, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <div className="font-medium text-gray-900">{fee.grade}</div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="font-bold text-blue-700">{fee.admission}</div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="font-bold text-green-700">{fee.monthly}</div>
                          </td>
                          <td className="py-4 px-4 text-gray-600">{fee.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Catatan:</span> Biaya di atas sudah termasuk buku pelajaran, seragam, dan kegiatan ekstrakurikuler. 
                      Biaya tidak termasuk uang pangkal bangunan, makan siang, dan study tour.
                    </p>
                  </div>
                </div>
              )}

              {/* Scholarship Tab */}
              {activeTab === 'scholarship' && (
                <div className="grid md:grid-cols-2 gap-8">
                  {scholarshipPrograms.map((scholarship, index) => (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-100">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-xl font-bold text-gray-900">{scholarship.name}</h4>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                          {scholarship.coverage}
                        </span>
                      </div>
                      <div className="mb-6">
                        <h5 className="font-semibold text-gray-900 mb-2">Persyaratan:</h5>
                        <ul className="space-y-2">
                          {scholarship.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-gray-700">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Deadline: {scholarship.deadline}</span>
                        <button className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Documents Tab */}
              {activeTab === 'documents' && (
                <div>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Dokumen yang Diperlukan
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Pastikan semua dokumen dipersiapkan dengan lengkap sebelum proses pendaftaran
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {requiredDocuments.map((doc, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          doc.mandatory ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                        }`}>
                          {doc.mandatory ? '✓' : '○'}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{doc.name}</h4>
                          <p className="text-sm text-gray-600">Format: {doc.format}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          doc.mandatory ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'
                        }`}>
                          {doc.mandatory ? 'WAJIB' : 'OPTIONAL'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section id="registration-form" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Formulir Pendaftaran Online
              </h2>
              <p className="text-gray-600 text-lg">
                Isi data dengan lengkap dan benar. Tim kami akan menghubungi Anda untuk proses selanjutnya.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap Calon Siswa *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Nama lengkap sesuai akta"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tanggal Lahir *
                  </label>
                  <input
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Jenjang yang Dipilih *
                  </label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Pilih Jenjang</option>
                    <option value="playgroup">Play Group</option>
                    <option value="tk">TK</option>
                    <option value="sd">SD</option>
                    <option value="smp">SMP</option>
                    <option value="sma">SMA</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Orang Tua/Wali *
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Nama lengkap orang tua/wali"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    No. Telepon Orang Tua *
                  </label>
                  <input
                    type="tel"
                    name="parentPhone"
                    value={formData.parentPhone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="0812-3456-7890"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Orang Tua *
                  </label>
                  <input
                    type="email"
                    name="parentEmail"
                    value={formData.parentEmail}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="email@contoh.com"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Alamat Lengkap *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Alamat lengkap tempat tinggal"
                ></textarea>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sekolah Sebelumnya (Jika ada)
                </label>
                <input
                  type="text"
                  name="previousSchool"
                  value={formData.previousSchool}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Nama sekolah sebelumnya"
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kebutuhan Khusus (Jika ada)
                </label>
                <textarea
                  name="specialNeeds"
                  value={formData.specialNeeds}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Deskripsikan kebutuhan khusus jika ada"
                ></textarea>
              </div>

              <div className="mb-8">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="scholarshipInterest"
                    checked={formData.scholarshipInterest}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">
                    Saya tertarik untuk mengajukan beasiswa
                  </span>
                </label>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <h4 className="font-semibold text-gray-900 mb-2">Konfirmasi Data</h4>
                <p className="text-sm text-gray-700">
                  Pastikan data yang Anda masukkan sudah benar. Data yang sudah dikirim tidak dapat diubah.
                  Tim penerimaan akan menghubungi Anda dalam 1x24 jam setelah pendaftaran.
                </p>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Kirim Pendaftaran
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pertanyaan yang Sering Diajukan
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Apakah ada tes masuk untuk semua jenjang?",
                  answer: "Ya, semua calon siswa harus mengikuti tes potensi akademik dan wawancara sesuai jenjang pendidikan."
                },
                {
                  question: "Kapan jadwal tes masuk dilaksanakan?",
                  answer: "Tes masuk dilaksanakan sesuai timeline yang telah ditetapkan. Lihat bagian Timeline untuk detailnya."
                },
                {
                  question: "Bagaimana cara mengetahui hasil seleksi?",
                  answer: "Hasil seleksi akan diumumkan melalui website dan email orang tua/wali pada tanggal yang telah ditentukan."
                },
                {
                  question: "Apakah ada program cicilan untuk biaya masuk?",
                  answer: "Ya, tersedia program cicilan dengan ketentuan tertentu. Silakan hubungi bagian keuangan untuk informasi detail."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Butuh Bantuan?
                </h2>
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  Tim penerimaan siswa baru siap membantu Anda. Hubungi kami untuk informasi lebih lanjut atau konsultasi pendidikan.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Telepon</div>
                      <div className="font-semibold text-gray-900">(021) 1234-5678</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Email</div>
                      <div className="font-semibold text-gray-900">ppdb@sekolahkita.ac.id</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Alamat</div>
                      <div className="font-semibold text-gray-900">Jl. Pendidikan No. 123, Kota Kita</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Jam Operasional</h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-blue-400">
                    <span>Senin - Jumat</span>
                    <span className="font-semibold">08:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-blue-400">
                    <span>Sabtu</span>
                    <span className="font-semibold">08:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span>Minggu & Libur</span>
                    <span className="font-semibold">Tutup</span>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-white/10 rounded-lg">
                  <p className="text-sm">
                    Untuk kunjungan langsung, silakan membuat janji terlebih dahulu melalui telepon atau email.
                  </p>
                </div>
              </div>
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

export default PPDBPage;