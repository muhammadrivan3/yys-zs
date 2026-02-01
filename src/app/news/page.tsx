"use client";
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

const NewsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const newsCategories = [
    { id: 'all', name: 'Semua Berita', count: 24 },
    { id: 'academic', name: 'Prestasi Akademik', count: 8 },
    { id: 'sports', name: 'Olahraga', count: 5 },
    { id: 'events', name: 'Kegiatan Sekolah', count: 7 },
    { id: 'announcements', name: 'Pengumuman', count: 4 }
  ];

  const newsArticles = [
    {
      id: 1,
      title: "Siswa Sekolah Kita Juara Olimpiade Matematika Nasional 2024",
      excerpt: "Tim matematika sekolah berhasil meraih medali emas dalam Olimpiade Matematika Nasional yang diselenggarakan di Jakarta.",
      category: "academic",
      date: "15 Maret 2024",
      readTime: "3 min read",
      imageColor: "from-blue-500 to-blue-700",
      featured: true,
      views: 1245,
      tags: ["Olimpiade", "Matematika", "Prestasi"]
    },
    {
      id: 2,
      title: "Grand Opening Laboratorium Sains Modern",
      excerpt: "Sekolah Kita secara resmi membuka laboratorium sains baru dengan teknologi terkini untuk mendukung pembelajaran STEM.",
      category: "events",
      date: "12 Maret 2024",
      readTime: "4 min read",
      imageColor: "from-purple-500 to-purple-700",
      featured: true,
      views: 987,
      tags: ["Fasilitas", "Sains", "STEM"]
    },
    {
      id: 3,
      title: "Tim Basket Putra Juara Turnamen Antar Sekolah",
      excerpt: "Tim basket putra berhasil menjadi juara dalam turnamen tahunan yang diikuti oleh 32 sekolah se-kota.",
      category: "sports",
      date: "10 Maret 2024",
      readTime: "2 min read",
      imageColor: "from-green-500 to-green-700",
      featured: false,
      views: 654,
      tags: ["Basket", "Olahraga", "Juara"]
    },
    {
      id: 4,
      title: "Workshop Parenting: Mendampingi Anak di Era Digital",
      excerpt: "Sekolah menyelenggarakan workshop untuk orang tua tentang pentingnya pendampingan anak dalam penggunaan teknologi.",
      category: "events",
      date: "8 Maret 2024",
      readTime: "5 min read",
      imageColor: "from-amber-500 to-amber-700",
      featured: false,
      views: 789,
      tags: ["Parenting", "Workshop", "Digital"]
    },
    {
      id: 5,
      title: "Pengumuman Libur Semester Genap 2023/2024",
      excerpt: "Informasi jadwal libur semester genap dan persiapan penerimaan siswa baru tahun ajaran 2024/2025.",
      category: "announcements",
      date: "5 Maret 2024",
      readTime: "2 min read",
      imageColor: "from-red-500 to-red-700",
      featured: false,
      views: 1567,
      tags: ["Pengumuman", "Libur", "Kalender"]
    },
    {
      id: 6,
      title: "Siswa Berprestasi di Kompetisi Robotics Internasional",
      excerpt: "Tim robotics sekolah berhasil meraih peringkat 3 dalam kompetisi robotics tingkat internasional di Singapura.",
      category: "academic",
      date: "3 Maret 2024",
      readTime: "4 min read",
      imageColor: "from-indigo-500 to-indigo-700",
      featured: false,
      views: 832,
      tags: ["Robotics", "Internasional", "Teknologi"]
    },
    {
      id: 7,
      title: "Festival Seni dan Budaya Tahun 2024",
      excerpt: "Acara tahunan yang menampilkan berbagai pertunjukan seni dan budaya dari seluruh Indonesia.",
      category: "events",
      date: "28 Februari 2024",
      readTime: "3 min read",
      imageColor: "from-pink-500 to-pink-700",
      featured: false,
      views: 543,
      tags: ["Seni", "Budaya", "Festival"]
    },
    {
      id: 8,
      title: "Beasiswa Prestasi untuk Siswa Berprestasi",
      excerpt: "Pembukaan pendaftaran beasiswa prestasi untuk siswa berprestasi di bidang akademik dan non-akademik.",
      category: "announcements",
      date: "25 Februari 2024",
      readTime: "3 min read",
      imageColor: "from-teal-500 to-teal-700",
      featured: false,
      views: 2109,
      tags: ["Beasiswa", "Prestasi", "Pendaftaran"]
    }
  ];

  const featuredNews = newsArticles.filter(article => article.featured);
  const filteredNews = activeCategory === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === activeCategory);

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedNews = filteredNews.slice(startIndex, startIndex + itemsPerPage);

  const popularNews = [...newsArticles]
    .sort((a, b) => b.views - a.views)
    .slice(0, 5);

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        title="YAYASAN ZAHRATUL SYITHA"
        subtitle="Update Terkini dari Sekolah Kita"
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
                Berita & Informasi
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
                Ikuti perkembangan terbaru, prestasi, dan kegiatan di Sekolah Kita
              </p>
            </div>
          </div>
        </section>

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Berita Unggulan
                </h2>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {featuredNews.map((article) => (
                  <div key={article.id} className="group">
                    <div className={`h-64 rounded-2xl bg-gradient-to-br ${article.imageColor} mb-6 relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-900">
                          {article.category === 'academic' ? 'Prestasi Akademik' : 
                           article.category === 'sports' ? 'Olahraga' :
                           article.category === 'events' ? 'Kegiatan' : 'Pengumuman'}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                        <span>•</span>
                        <span>{article.views} views</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          {article.tags.map((tag, index) => (
                            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <Link 
                          href={`/news/${article.id}`}
                          className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2"
                        >
                          Baca Selengkapnya
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* News Categories & Content */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-4 lg:gap-12">
              {/* Sidebar - Categories & Popular News */}
              <div className="lg:col-span-1 mb-12 lg:mb-0">
                {/* Categories Filter */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Kategori Berita</h3>
                  <div className="space-y-2">
                    {newsCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => {
                          setActiveCategory(category.id);
                          setCurrentPage(1);
                        }}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                          activeCategory === category.id
                            ? 'bg-blue-50 text-blue-700'
                            : 'hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        <span className="font-medium">{category.name}</span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Popular News */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Trending</h3>
                  <div className="space-y-6">
                    {popularNews.map((article, index) => (
                      <div key={article.id} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-700 rounded-lg font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">
                            {article.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span>{article.date}</span>
                            <span>•</span>
                            <span>{article.views} views</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Newsletter Subscription */}
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-6 mt-8 text-white">
                  <h3 className="text-lg font-bold mb-3">Newsletter</h3>
                  <p className="text-sm text-blue-100 mb-4">
                    Dapatkan update berita langsung ke email Anda
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Email Anda"
                      className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <button
                      type="submit"
                      className="w-full bg-white text-blue-700 font-semibold py-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>

              {/* Main Content - News Grid */}
              <div className="lg:col-span-3">
                {/* Category Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {activeCategory === 'all' ? 'Semua Berita' : 
                       newsCategories.find(c => c.id === activeCategory)?.name}
                    </h2>
                    <p className="text-gray-600">
                      {filteredNews.length} artikel ditemukan
                    </p>
                  </div>
                  <div className="relative">
                    <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option>Terbaru</option>
                      <option>Terpopuler</option>
                      <option>A-Z</option>
                    </select>
                    <div className="absolute right-3 top-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* News Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {paginatedNews.map((article) => (
                    <div key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                      {/* Image */}
                      <div className={`h-48 bg-gradient-to-br ${article.imageColor} relative`}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-900">
                            {article.category === 'academic' ? 'Prestasi' : 
                             article.category === 'sports' ? 'Olahraga' :
                             article.category === 'events' ? 'Kegiatan' : 'Pengumuman'}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                          <span>{article.date}</span>
                          <span>•</span>
                          <span>{article.readTime}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {article.excerpt}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {article.tags.slice(0, 2).map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <span>{article.views}</span>
                          </div>
                          <Link 
                            href={`/news/${article.id}`}
                            className="text-blue-600 text-sm font-semibold hover:text-blue-700 flex items-center gap-1"
                          >
                            Baca
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-12">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className={`p-2 rounded-lg ${
                        currentPage === 1 
                          ? 'text-gray-400 cursor-not-allowed' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 rounded-lg font-semibold ${
                          currentPage === page
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {page}
                      </button>
                    ))}

                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className={`p-2 rounded-lg ${
                        currentPage === totalPages 
                          ? 'text-gray-400 cursor-not-allowed' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Kalender Kegiatan
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Jadwal kegiatan dan event penting di Sekolah Kita
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  month: "Maret 2024",
                  events: [
                    { date: "15 Mar", title: "Olimpiade Matematika", type: "academic" },
                    { date: "20 Mar", title: "Parent-Teacher Meeting", type: "event" },
                    { date: "25 Mar", title: "Ujian Mid Semester", type: "academic" }
                  ]
                },
                {
                  month: "April 2024",
                  events: [
                    { date: "5 Apr", title: "Pengumuman PPDB", type: "announcement" },
                    { date: "12 Apr", title: "Field Trip", type: "event" },
                    { date: "20 Apr", title: "Festival Seni", type: "cultural" }
                  ]
                },
                {
                  month: "Mei 2024",
                  events: [
                    { date: "2 Mei", title: "Hari Pendidikan", type: "event" },
                    { date: "10 Mei", title: "Turnamen Basket", type: "sports" },
                    { date: "25 Mei", title: "Study Tour", type: "event" }
                  ]
                }
              ].map((monthData, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">{monthData.month}</h3>
                  <div className="space-y-4">
                    {monthData.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-14 h-14 bg-white rounded-xl border border-gray-200 flex flex-col items-center justify-center">
                          <div className="text-lg font-bold text-blue-600">{event.date.split(' ')[0]}</div>
                          <div className="text-xs text-gray-500">{event.date.split(' ')[1]}</div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{event.title}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            event.type === 'academic' ? 'bg-blue-100 text-blue-700' :
                            event.type === 'event' ? 'bg-green-100 text-green-700' :
                            event.type === 'announcement' ? 'bg-yellow-100 text-yellow-700' :
                            event.type === 'sports' ? 'bg-red-100 text-red-700' :
                            'bg-purple-100 text-purple-700'
                          }`}>
                            {event.type === 'academic' ? 'Akademik' :
                             event.type === 'event' ? 'Kegiatan' :
                             event.type === 'announcement' ? 'Pengumuman' :
                             event.type === 'sports' ? 'Olahraga' : 'Budaya'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Archive & Search */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Cari Berita & Arsip
                </h2>
                <p className="text-gray-600">
                  Temukan berita yang Anda cari berdasarkan kata kunci atau tanggal
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Cari berita..."
                    className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <svg className="absolute right-4 top-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  Cari
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {['2024', '2023', '2022', '2021'].map((year) => (
                  <button
                    key={year}
                    className="px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium rounded-lg transition-colors"
                  >
                    Arsip {year}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Links */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ikuti Kami di Media Sosial
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Dapatkan update real-time dan konten eksklusif di platform sosial media kami
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { platform: "Facebook", icon: "👤", followers: "12.5K", color: "bg-blue-100 text-blue-700" },
                { platform: "Instagram", icon: "📷", followers: "25.3K", color: "bg-pink-100 text-pink-700" },
                { platform: "Twitter", icon: "🐦", followers: "8.7K", color: "bg-sky-100 text-sky-700" },
                { platform: "YouTube", icon: "🎬", followers: "15.2K", color: "bg-red-100 text-red-700" }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
                >
                  <div className={`w-16 h-16 rounded-xl ${social.color} flex items-center justify-center text-3xl mb-6`}>
                    {social.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{social.platform}</h3>
                  <p className="text-gray-600 mb-4">{social.followers} Followers</p>
                  <span className="text-blue-600 font-semibold group-hover:text-blue-700">
                    Follow →
                  </span>
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

export default NewsPage;