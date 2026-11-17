import { useState, type FormEvent, type ReactNode } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Building2,
  ClipboardList,
  GraduationCap,
  Heart,
  Menu,
  Monitor,
  School,
  Star,
  X,
} from 'lucide-react'
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'
import classroomPhoto from './assets/classroom.jpg'
import gardenPhoto from './assets/school-garden.jpg'
import readingPhoto from './assets/reading-together.jpg'
import creativityPhoto from './assets/student-creativity.jpg'
import './App.css'

function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link className={`brand${light ? ' brand-light' : ''}`} to="/" aria-label="Sekolah Dasar, beranda">
      <span className="brand-mark"><BookOpen size={23} strokeWidth={1.8} /></span>
      <span className="brand-copy">
        <strong>Sekolah Dasar</strong>
        <span>Belajar dengan hati</span>
      </span>
    </Link>
  )
}

function VisitorHome() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="public-site">
      <div className="announcement">
        <div className="public-container announcement-inner">
          <span>Selamat datang di portal informasi sekolah</span>
          <span>Untuk orang tua, calon siswa, dan masyarakat</span>
        </div>
      </div>

      <header className="public-header">
        <div className="public-container nav-inner">
          <Brand />
          <button
            className="mobile-menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <nav className={`public-nav${menuOpen ? ' public-nav-open' : ''}`} aria-label="Navigasi utama">
            <a className="nav-active" href="#beranda" onClick={closeMenu}>Beranda</a>
            <a href="#profil" onClick={closeMenu}>Profil sekolah</a>
            <a href="#program" onClick={closeMenu}>Program</a>
            <a href="#fasilitas" onClick={closeMenu}>Fasilitas</a>
            <a href="#berita" onClick={closeMenu}>Berita</a>
          </nav>
          <Link className="button button-primary nav-cta" to="/login">
            Masuk <ArrowUpRight size={16} />
          </Link>
        </div>
      </header>

      <main>
        <section className="home-hero" id="beranda">
          <div className="public-container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow-pill">BELAJAR · BERTUMBUH · BERPRESTASI</span>
              <h1>Langkah kecil hari ini,<br />masa depan gemilang.</h1>
              <p>
                Kenali lingkungan belajar yang hangat, program yang inspiratif,
                dan ruang bagi setiap anak untuk menemukan potensinya.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#profil">
                  Kenali sekolah kami <ArrowRight size={16} />
                </a>
                <a className="button button-secondary" href="#program">Lihat program</a>
              </div>
              <span className="hero-note">Informasi sekolah, terbuka untuk semua.</span>
            </div>
            <div className="hero-visual">
              <img src={classroomPhoto} alt="Guru dan siswa belajar bersama di dalam kelas" />
              <div className="hero-caption">
                <span className="caption-icon"><BookOpen size={22} /></span>
                <span><strong>Tempat rasa ingin tahu tumbuh.</strong><small>Bersama belajar, bersama menjadi lebih baik.</small></span>
              </div>
            </div>
          </div>
        </section>

        <section className="quick-links public-container" aria-label="Informasi sekolah">
          <a className="quick-link" href="#profil">
            <span className="quick-icon"><BookOpen size={22} /></span>
            <span><strong>Profil sekolah</strong><small>Visi, misi, dan cerita kami</small></span>
            <ArrowUpRight className="quick-arrow" size={17} />
          </a>
          <a className="quick-link" href="#program">
            <span className="quick-icon"><GraduationCap size={22} /></span>
            <span><strong>Program belajar</strong><small>Pengalaman belajar bermakna</small></span>
            <ArrowUpRight className="quick-arrow" size={17} />
          </a>
          <a className="quick-link" href="#fasilitas">
            <span className="quick-icon"><Building2 size={21} /></span>
            <span><strong>Fasilitas</strong><small>Jelajahi lingkungan sekolah</small></span>
            <ArrowUpRight className="quick-arrow" size={17} />
          </a>
          <a className="quick-link" href="#pendaftaran">
            <span className="quick-icon"><ClipboardList size={21} /></span>
            <span><strong>Pendaftaran</strong><small>Panduan untuk calon siswa</small></span>
            <ArrowUpRight className="quick-arrow" size={17} />
          </a>
        </section>

        <section className="about-section public-container" id="profil">
          <div className="about-copy">
            <span className="section-kicker">TENTANG SEKOLAH</span>
            <h2>Ruang aman untuk belajar.<br />Ruang luas untuk bertumbuh.</h2>
            <p>
              Pendidikan dasar bukan hanya tentang pelajaran. Kami merancang
              pengalaman yang menumbuhkan rasa ingin tahu, kemandirian, dan
              kepedulian kepada sesama.
            </p>
            <a className="text-link" href="#fasilitas">Baca profil lengkap <ArrowRight size={15} /></a>
          </div>
          <div className="environment-card" id="fasilitas">
            <h3>Lingkungan yang mendukung</h3>
            <div className="environment-item">
              <Monitor size={21} />
              <span><strong>Ruang kelas</strong><small>Nyaman untuk belajar dan berkolaborasi.</small></span>
            </div>
            <div className="environment-item">
              <BookOpen size={21} />
              <span><strong>Perpustakaan</strong><small>Menjelajah dunia lewat cerita dan bacaan.</small></span>
            </div>
            <div className="environment-item">
              <School size={21} />
              <span><strong>Area bermain</strong><small>Aktif bergerak, bersahabat, dan bereksplorasi.</small></span>
            </div>
          </div>
        </section>

        <section className="program-section" id="program">
          <div className="public-container">
            <div className="section-heading">
              <div>
                <h2>Setiap anak punya cara untuk bersinar.</h2>
                <p>Pengalaman belajar yang seimbang, di dalam dan di luar kelas.</p>
              </div>
              <a className="text-link" href="#berita">Semua program <ArrowRight size={15} /></a>
            </div>
            <div className="program-grid">
              <article className="program-card">
                <span className="program-icon icon-blue"><BookOpen size={21} /></span>
                <div><h3>Literasi &amp; numerasi</h3><p>Membangun fondasi membaca, menulis, dan berpikir logis dengan menyenangkan.</p></div>
                <ArrowUpRight className="program-arrow" size={17} />
              </article>
              <article className="program-card">
                <span className="program-icon icon-amber"><Heart size={21} /></span>
                <div><h3>Karakter &amp; kebiasaan baik</h3><p>Belajar mandiri, saling menghargai, dan peduli pada lingkungan sekitar.</p></div>
                <ArrowUpRight className="program-arrow" size={17} />
              </article>
              <article className="program-card">
                <span className="program-icon icon-green"><Star size={21} /></span>
                <div><h3>Minat &amp; kreativitas</h3><p>Ruang untuk mencoba seni, olahraga, dan beragam kegiatan eksplorasi.</p></div>
                <ArrowUpRight className="program-arrow" size={17} />
              </article>
            </div>
          </div>
        </section>

        <section className="news-section public-container" id="berita">
          <div className="section-heading">
            <div>
              <h2>Cerita dari sekolah</h2>
              <p>Intip keseruan belajar dan kebersamaan di lingkungan sekolah.</p>
            </div>
            <a className="text-link" href="#pendaftaran">Semua berita <ArrowRight size={15} /></a>
          </div>
          <div className="news-grid">
            <article className="news-card">
              <img src={readingPhoto} alt="Siswa membaca buku bersama di perpustakaan" />
              <div><span className="news-category">LITERASI</span><h3>Menumbuhkan cinta membaca lewat cerita bersama</h3><ArrowUpRight className="news-arrow" size={17} /></div>
            </article>
            <article className="news-card">
              <img src={gardenPhoto} alt="Siswa belajar merawat tanaman di kebun sekolah" />
              <div><span className="news-category">LINGKUNGAN</span><h3>Belajar peduli bumi dari kebun kecil sekolah</h3><ArrowUpRight className="news-arrow" size={17} /></div>
            </article>
            <article className="news-card">
              <img src={creativityPhoto} alt="Siswa menunjukkan karya seni mereka di kelas" />
              <div><span className="news-category">KREATIVITAS</span><h3>Warna, imajinasi, dan karya dari tangan kecil</h3><ArrowUpRight className="news-arrow" size={17} /></div>
            </article>
          </div>
        </section>

        <section className="enrollment-section public-container" id="pendaftaran">
          <div>
            <span>UNTUK ORANG TUA &amp; CALON SISWA</span>
            <h2>Awali perjalanan belajar bersama kami.</h2>
            <p>Kenali alur pendaftaran, persyaratan, dan informasi penerimaan siswa baru.</p>
            <small>Masih ingin tahu lebih banyak? Tim sekolah siap membantu.</small>
          </div>
          <div className="enrollment-actions">
            <a className="button button-light" href="mailto:info@sekolahdasar.sch.id">Panduan pendaftaran <ArrowRight size={16} /></a>
            <a className="button button-translucent" href="mailto:info@sekolahdasar.sch.id">Hubungi sekolah</a>
          </div>
        </section>
      </main>

      <footer className="public-footer">
        <div className="public-container footer-main">
          <div className="footer-brand">
            <Brand />
            <p>Belajar dengan hati, bertumbuh bersama.</p>
            <small>Portal informasi untuk keluarga dan masyarakat.</small>
          </div>
          <div className="footer-column"><strong>Jelajahi sekolah</strong><a href="#profil">Profil sekolah</a><a href="#program">Program belajar</a><a href="#fasilitas">Fasilitas</a></div>
          <div className="footer-column"><strong>Informasi &amp; bantuan</strong><a href="#pendaftaran">Pendaftaran</a><a href="mailto:info@sekolahdasar.sch.id">Hubungi sekolah</a><Link to="/login">Masuk untuk staf</Link></div>
        </div>
        <div className="public-container footer-bottom">
          <span>© 2026 Sekolah Dasar. Semua hak dilindungi.</span>
          <span>Pratinjau profil · nama, konten, dan foto contoh</span>
        </div>
      </footer>
    </div>
  )
}

function AuthIllustration() {
  return (
    <aside className="auth-illustration" aria-label="Ilustrasi semangat belajar">
      <div className="auth-art-copy">
        <span>SISTEM INFORMASI SEKOLAH</span>
        <p>Belajar hari ini.<br />Bertumbuh setiap hari.</p>
      </div>
      <div className="school-emblem" aria-hidden="true">
        <div className="emblem-ring ring-outer"><div className="emblem-ring ring-middle"><div className="emblem-ring ring-inner">
          <div className="emblem-door"><span /></div>
        </div></div></div>
        <div className="emblem-base" />
        <div className="emblem-ground" />
      </div>
      <div className="auth-art-footer">
        <h2>Ruang untuk tumbuh.</h2>
        <p>Belajar bersama, melangkah lebih jauh.</p>
      </div>
    </aside>
  )
}

function AuthLayout({ children, page }: { children: ReactNode; page: 'login' | 'forgot' }) {
  return (
    <main className="auth-page">
      <section className={`auth-form-panel auth-form-${page}`}>
        <div className="auth-mobile-brand"><Brand /></div>
        <div className="auth-form-content">{children}</div>
        <footer className="auth-footer">
          <span>© 2026 Sekolah Dasar. Semua hak dilindungi.</span>
          <span><a href="mailto:info@sekolahdasar.sch.id">Bantuan</a></span>
        </footer>
      </section>
      <AuthIllustration />
    </main>
  )
}

function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage('Layanan masuk belum terhubung ke server.')
  }

  return (
    <AuthLayout page="login">
      <div className="auth-heading">
        <h1>Selamat datang kembali.</h1>
        <p>Masuk untuk melanjutkan ke sistem informasi sekolah.</p>
      </div>
      <div className="auth-divider"><span />atau masuk dengan email<span /></div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label htmlFor="login-email">Alamat email</label>
        <input id="login-email" name="email" type="email" placeholder="nama@contoh.com" autoComplete="username" required />
        <label htmlFor="login-password">Kata sandi</label>
        <div className="password-field">
          <input id="login-password" name="password" type={passwordVisible ? 'text' : 'password'} placeholder="Masukkan kata sandi" autoComplete="current-password" required />
          <button type="button" className="password-toggle" onClick={() => setPasswordVisible(!passwordVisible)} aria-label={passwordVisible ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}>
            {passwordVisible ? <span className="eye-off-icon">×</span> : <span className="eye-icon" />}
          </button>
        </div>
        <div className="auth-options">
          <label className="remember-option"><input type="checkbox" name="remember" /><span>Ingat saya</span></label>
          <Link to="/forgot-password">Lupa kata sandi?</Link>
        </div>
        <button className="button button-primary auth-submit" type="submit">Masuk</button>
        {message && <p className="auth-message" role="status">{message}</p>}
      </form>
    </AuthLayout>
  )
}

function ForgotPasswordPage() {
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage('Layanan pemulihan kata sandi belum terhubung ke server.')
  }

  return (
    <AuthLayout page="forgot">
      <div className="auth-heading">
        <span className="section-kicker">PEMULIHAN AKUN</span>
        <h1>Lupa kata sandi?</h1>
        <p>Tidak apa-apa. Masukkan alamat email akun Anda untuk memulai pemulihan kata sandi.</p>
      </div>
      <form className="auth-form forgot-form" onSubmit={handleSubmit}>
        <label htmlFor="recovery-email">Alamat email</label>
        <input id="recovery-email" name="email" type="email" placeholder="nama@contoh.com" autoComplete="email" required />
        <button className="button button-primary auth-submit" type="submit">Kirim tautan pemulihan</button>
        {message && <p className="auth-message" role="status">{message}</p>}
      </form>
      <Link className="back-to-login" to="/login"><ArrowRight size={15} className="back-arrow" />Kembali ke halaman masuk</Link>
      <p className="support-note">Butuh bantuan? <a href="mailto:info@sekolahdasar.sch.id">Hubungi sekolah</a></p>
    </AuthLayout>
  )
}

function AppRoutes() {
  const location = useLocation()
  const isAuthPage = location.pathname === '/login' || location.pathname === '/forgot-password'

  return (
    <div className={isAuthPage ? 'app-shell auth-shell' : 'app-shell'}>
      <Routes>
        <Route path="/" element={<VisitorHome />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="*" element={<VisitorHome />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
