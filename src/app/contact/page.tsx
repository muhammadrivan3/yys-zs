"use client";
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    studentGrade: '',
    contactMethod: 'email',
    newsletter: true
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleInputChange = (e : any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e :any) => {
    e.preventDefault();
    
    // Validasi sederhana
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Harap isi semua field yang diperlukan'
      });
      return;
    }

    // Simulasi pengiriman form
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Pesan Anda telah berhasil dikirim! Kami akan menghubungi Anda dalam 1-2 hari kerja.'
    });

    // Reset form setelah pengiriman
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        studentGrade: '',
        contactMethod: 'email',
        newsletter: true
      });
      setFormStatus({
        submitted: false,
        error: false,
        message: ''
      });
    }, 5000);
  };

  const contactInfo = [
    {
      title: "Alamat Sekolah",
      description: "Jl. Pendidikan No. 123, Kelurahan Cerdas, Kecamatan Maju, Kota Kita 12345",
      icon: "📍",
      details: [
        "Gedung A: Administrasi & Kantor",
        "Gedung B: Kelas & Laboratorium",
        "Gedung C: Perpustakaan & Aula",
        "Lapangan Olahraga & Parkir"
      ]
    },
    {
      title: "Jam Operasional",
      description: "Kami siap melayani Anda pada jam kerja berikut:",
      icon: "🕒",
      details: [
        "Senin - Kamis: 07:00 - 16:00 WIB",
        "Jumat: 07:00 - 15:00 WIB",
        "Sabtu: 08:00 - 12:00 WIB",
        "Minggu & Libur: Tutup"
      ]
    },
    {
      title: "Kontak Darurat",
      description: "Untuk keadaan darurat di luar jam kerja:",
      icon: "🚨",
      details: [
        "Kesehatan: (021) 1234-5679",
        "Keamanan: (021) 1234-5680",
        "Teknis: (021) 1234-5681"
      ]
    }
  ];

  const departments = [
    {
      name: "Penerimaan Siswa Baru (PPDB)",
      email: "ppdb@sekolahkita.ac.id",
      phone: "(021) 1234-5678 ext. 101",
      hours: "08:00 - 15:00",
      person: "Ibu Dian Permatasari"
    },
    {
      name: "Bagian Akademik",
      email: "akademik@sekolahkita.ac.id",
      phone: "(021) 1234-5678 ext. 102",
      hours: "07:30 - 15:30",
      person: "Budi Santoso, M.Pd."
    },
    {
      name: "Bagian Kesiswaan",
      email: "kesiswaan@sekolahkita.ac.id",
      phone: "(021) 1234-5678 ext. 103",
      hours: "08:00 - 16:00",
      person: "Siti Fatimah, S.Pd."
    },
    {
      name: "Bagian Keuangan",
      email: "keuangan@sekolahkita.ac.id",
      phone: "(021) 1234-5678 ext. 104",
      hours: "08:00 - 15:00",
      person: "Ahmad Rahman, S.E."
    }
  ];

  const faqItems = [
    {
      question: "Bagaimana cara mendaftar sebagai siswa baru?",
      answer: "Pendaftaran dapat dilakukan melalui website (halaman PPDB) atau datang langsung ke kantor penerimaan siswa baru. Pastikan membawa dokumen lengkap yang diperlukan."
    },
    {
      question: "Apakah sekolah menerima kunjungan orang tua calon siswa?",
      answer: "Ya, kami menerima kunjungan dengan perjanjian terlebih dahulu. Silakan hubungi bagian PPDB untuk menjadwalkan kunjungan dan tour sekolah."
    },
    {
      question: "Bagaimana prosedur pembayaran uang sekolah?",
      answer: "Pembayaran dapat dilakukan melalui transfer bank, virtual account, atau langsung di kantor keuangan. Informasi detail tersedia di bagian keuangan."
    },
    {
      question: "Apakah tersedia program beasiswa?",
      answer: "Ya, kami memiliki beberapa program beasiswa untuk siswa berprestasi dan kurang mampu. Informasi lengkap dapat dilihat di halaman PPDB atau hubungi bagian penerimaan."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        title="YAYASAN ZAHRATUL SYITHA"
        subtitle="Informasi Kontak & Layanan"
        sticky={true}
        variant="elevated"
      />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Hubungi Kami
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
                Kami siap membantu dan menjawab pertanyaan Anda. Hubungi kami melalui berbagai cara yang tersedia.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-6">{info.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                  <p className="text-gray-600 mb-6">{info.description}</p>
                  <ul className="space-y-3">
                    {info.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Departments */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12">
              {/* Contact Form */}
              <div>
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Kirim Pesan
                    </h2>
                    <p className="text-gray-600">
                      Isi form di bawah ini dan tim kami akan segera menghubungi Anda
                    </p>
                  </div>

                  {/* Status Message */}
                  {formStatus.message && (
                    <div className={`mb-6 p-4 rounded-lg ${
                      formStatus.error ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'
                    }`}>
                      {formStatus.message}
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nama Lengkap *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Nama Anda"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="email@contoh.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          No. Telepon
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="0812-3456-7890"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Jenjang Siswa
                        </label>
                        <select
                          name="studentGrade"
                          value={formData.studentGrade}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Pilih Jenjang</option>
                          <option value="playgroup">Play Group</option>
                          <option value="tk">TK</option>
                          <option value="sd">SD</option>
                          <option value="smp">SMP</option>
                          <option value="sma">SMA</option>
                          <option value="not-student">Bukan Siswa</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subjek *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Pilih Subjek</option>
                        <option value="ppdb">Penerimaan Siswa Baru</option>
                        <option value="academic">Masalah Akademik</option>
                        <option value="finance">Pembayaran & Keuangan</option>
                        <option value="facility">Fasilitas Sekolah</option>
                        <option value="other">Lainnya</option>
                      </select>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pesan Anda *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Tulis pesan Anda di sini..."
                      ></textarea>
                    </div>

                    <div className="mb-8">
                      <label className="block text-sm font-medium text-gray-700 mb-4">
                        Preferensi Kontak
                      </label>
                      <div className="flex flex-wrap gap-4">
                        {['email', 'phone', 'whatsapp'].map((method) => (
                          <label key={method} className="flex items-center">
                            <input
                              type="radio"
                              name="contactMethod"
                              value={method}
                              checked={formData.contactMethod === method}
                              onChange={handleInputChange}
                              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-gray-700 capitalize">
                              {method === 'whatsapp' ? 'WhatsApp' : method}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="newsletter"
                          checked={formData.newsletter}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-700">
                          Saya ingin menerima newsletter dan informasi dari sekolah
                        </span>
                      </label>
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                      >
                        Kirim Pesan
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Departments & Quick Contacts */}
              <div>
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Hubungi Bagian Terkait
                  </h2>
                  
                  <div className="space-y-6">
                    {departments.map((dept, index) => (
                      <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">{dept.name}</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-gray-700">{dept.email}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="text-gray-700">{dept.phone}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>{dept.hours}</span>
                            </div>
                            <span>Penanggung Jawab: {dept.person}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Contact Buttons */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-6">Kontak Cepat</h3>
                  <div className="space-y-4">
                    <a
                      href="https://wa.me/6281234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.507 14.307l-.009.075c-.203-2.649-1.167-4.345-3.704-4.345-1.166 0-1.896.589-2.231 1.093-.513.777-.715 1.831-.715 2.853 0 1.405.472 2.221 1.233 2.221.516 0 .903-.303 1.199-.735.198-.288.298-.648.298-1.057 0-.341-.055-.658-.173-.945l-.013-.031c-.172-.408-.5-.764-.938-.764-.561 0-.908.571-.908 1.319 0 .748.347 1.319.908 1.319.907 0 1.609-1.177 1.609-2.831 0-1.384-.721-2.278-1.832-2.278-1.323 0-2.145 1.169-2.195 2.832-.05 1.663.695 2.832 1.895 2.832.341 0 .682-.085.997-.256l.013.021c.226.392.721.784 1.279.784 1.279 0 2.247-1.251 2.247-3.044 0-1.794-.968-3.045-2.247-3.045-1.279 0-2.247 1.251-2.247 3.045 0 .341.043.682.128 1.011l-.021.011c-.087.33-.172.647-.172.945 0 .341.085.648.213.945l.021.043c.128.288.256.576.384.845l.021.043c.085.171.128.341.128.512 0 .341-.256.597-.597.597-.341 0-.597-.256-.597-.597 0-.341.256-.597.597-.597z"/>
                      </svg>
                      WhatsApp
                    </a>
                    <a
                      href="tel:02112345678"
                      className="flex items-center justify-center gap-3 bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Telepon Sekarang
                    </a>
                    <a
                      href="mailto:info@sekolahkita.ac.id"
                      className="flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Kirim Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pertanyaan Umum
              </h2>
              <p className="text-gray-600 text-lg">
                Temukan jawaban untuk pertanyaan yang sering diajukan
              </p>
            </div>

            <div className="space-y-6">
              {faqItems.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map & Directions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Lokasi & Akses
                </h2>
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  Sekolah Kita terletak di lokasi strategis dengan akses mudah dari berbagai arah. 
                  Tersedia area parkir yang luas untuk kendaraan roda dua dan empat.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Transportasi Umum</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Bus: Halte Pendidikan (300m dari sekolah)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Kereta: Stasiun Kota Kita (1.5km dari sekolah)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Angkot: Rute 05, 12, dan 17</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Fasilitas Parkir</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Area Parkir Mobil: 150 slot</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Area Parkir Motor: 300 slot</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Parkir Khusus Difabel: 10 slot</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Map Placeholder */}
                <div className="h-96 bg-gradient-to-br from-blue-400 to-blue-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-4xl mb-4">📍</div>
                      <p className="text-xl font-semibold">Peta Lokasi</p>
                      <p className="text-blue-100 mt-2">Jl. Pendidikan No. 123, Kota Kita</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Petunjuk Arah</h3>
                  <div className="space-y-3 text-gray-700">
                    <p>Dari pusat kota: Ikuti Jl. Utama ke arah barat, belok kiri di lampu merah ketiga.</p>
                    <p>Dari tol: Keluar di Gerbang Tol Pendidikan, lurus 2km sampai SMPN 1, belok kanan.</p>
                    <p>Koordinat GPS: -6.123456, 106.789012</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Response Time & Service Level */}
        <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Komitmen Layanan Kami
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Waktu Respon",
                    description: "Kami akan merespon pertanyaan Anda dalam waktu 24 jam kerja",
                    icon: "⚡"
                  },
                  {
                    title: "Jam Layanan",
                    description: "Tersedia layanan telepon dan email selama jam kerja sekolah",
                    icon: "🕒"
                  },
                  {
                    title: "Kualitas Layanan",
                    description: "Tim profesional kami siap memberikan solusi terbaik",
                    icon: "⭐"
                  }
                ].map((commitment, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                    <div className="text-4xl mb-6">{commitment.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{commitment.title}</h3>
                    <p className="text-blue-100">{commitment.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Links */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Terhubung dengan Kami
              </h2>
              <p className="text-gray-600">
                Ikuti update terbaru melalui media sosial kami
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { platform: "Facebook", handle: "@SekolahKita", icon: "👤", color: "bg-blue-600" },
                { platform: "Instagram", handle: "@sekolahkita", icon: "📷", color: "bg-pink-600" },
                { platform: "Twitter", handle: "@SekolahKita_ID", icon: "🐦", color: "bg-sky-500" },
                { platform: "YouTube", handle: "Sekolah Kita", icon: "🎬", color: "bg-red-600" }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="group"
                >
                  <div className={`h-2 ${social.color} rounded-t-lg`}></div>
                  <div className="bg-gray-50 rounded-b-lg p-6 hover:bg-gray-100 transition-colors">
                    <div className="text-3xl mb-4">{social.icon}</div>
                    <h3 className="font-bold text-gray-900 mb-1">{social.platform}</h3>
                    <p className="text-gray-600 text-sm">{social.handle}</p>
                  </div>
                </a>
              ))}
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

export default ContactPage;