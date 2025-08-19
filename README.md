# 🎬 MovieApp — Discover & Search Movies

Modern bir film keşif uygulaması. TMDB verileriyle popüler, vizyondaki ve yakında gelecek filmleri gez; hızlı aramayla istediğini bul. Next.js 15 (App Router) + Tailwind CSS + next/image ile ışık hızında bir deneyim.

# ✨ Öne Çıkan Özellikler

Kategoriler: Popular · Now Playing · Upcoming · Top Rated

Akıllı Arama: /?query=... — kategori önemsiz, büyük/küçük harf duyarsız

Temiz Liste: Görseli olmayan sonuçlar otomatik elenir, kırık görseller gizlenir

Responsive Grid: Büyük ekranda 4 sütun, küçük ekranda 2 sütun (tam uyumlu)

Hızlı Yükleme: next/image optimizasyonu + ISR (revalidate: 10)

Tema Desteği: next-themes ile aydınlık/karanlık (opsiyonel)

# 🛠 Teknolojiler

Next.js 15 (App Router)

Tailwind CSS

next/image

next-themes

TMDB API

# 🚀 Hızlı Başlangıç

git clone https://github.com/<kullanici-adin>/movieapp.git
cd movieapp
npm install

.env.local dosyası (iki seçenekten biri yeterli):

# V3 anahtar (kolay)

API_KEY=TMDB_V3_KEYIN

# veya V4 token (önerilir)

TMDB_TOKEN=UZUN_V4_TOKEN

Geliştirme:

npm run dev

# http://localhost:3000 (port meşgulse 3001)

# 🧭 Kullanım

Kategoriler: / ?genre=popular | now_playing | upcoming | top_rated

Arama: / ?query=inception (kategori devre dışı kalır)

📸 Ekran Görüntüleri
![EkranKayd2025-08-1923 02 51-ezgif com-video-to-gif-converter (1)](https://github.com/user-attachments/assets/9dc8b525-59a8-48dc-9f7b-9b5e21ce2327)



⚖️ Yasal

This product uses the TMDB API but is not endorsed or certified by TMDB.
