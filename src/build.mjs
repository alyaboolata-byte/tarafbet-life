import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = path.join(root, 'src');
const dist = path.join(root, 'dist');
const affiliate = 'https://go.apswatchbracelet.com/tarafbet-life';
const site = 'https://tarafbet.life';
const indexNowKey = 'cfbe30ee4c8296a5b0aca4d46f7592d2';
const yandexVerificationId = 'ab44b370b3152592';
const sitemapLastmod = '2026-10-27';
const googleSiteVerification = '8xv9wD5H-7uboyT-GkJCxiPIF5YCHFFDkHcywlWYMB0';

const pages = [
  {
    slug: '',
    title: 'Tarafbet Giriş: Güncel Adres, Casino ve Spor Bahisleri',
    description: 'Tarafbet giriş, güncel adres, casino, canlı bahis, spor bahisleri, mobil erişim, üyelik ve ödeme seçenekleri tek sayfada.',
    h1: 'Tarafbet Giriş: Güncel Adres, Casino ve Spor Bahisleri',
    lead: 'Tarafbet hesabına erişim, yeni üyelik, casino, canlı casino ve spor bahisleri için Türkiye odaklı ana merkez.',
    image: 'screenshot-lobby.webp',
    sections: [
      ['Tarafbet güncel giriş ve erişim', 'Mevcut hesabınla giriş yapmak veya yeni üyelik açmak için üst menüdeki erişim düğmelerini kullan. Giriş ekranında kullanıcı bilgilerini kontrol et, adres değişikliği yaşanırsa aynı hesabın yeni erişim noktasında çalıştığını unutma. Güncel Giriş ve Yeni Adres sayfaları erişim kümesini birlikte tamamlar.'],
      ['Casino ve canlı casino seçenekleri', 'Slot kategorileri, masa oyunları, canlı krupiye masaları ve sağlayıcı filtreleri tek arayüzde toplanır. Oyun seçerken kategori, masa limiti ve oyun türüne göre ilerleyebilirsin. Ayrıntılı içerik için casino ve canlı casino sayfalarını aç.'],
      ['Spor bahisleri ve canlı bahis', 'Futbol, basketbol, tenis, voleybol ve e-spor karşılaşmaları maç öncesi ve canlı marketlerle sunulur. Kupon oluşturmadan önce etkinlik saatini, market adını ve oran değişimini birlikte kontrol et.'],
      ['Mobil erişim', 'Tarafbet mobil arayüzü tarayıcı üzerinden çalışır. Menü, bakiye, kupon ve oyun kategorileri küçük ekranlara uyarlanır. Telefon üzerinden erişim için mobil sayfasındaki kısa yolu takip et.'],
      ['Para yatırma ve para çekme', 'Hesabında aktif görünen yöntemler para yatırma, para çekme ve ödeme yöntemleri sayfalarında ayrı ayrı açıklanır. Banka transferi, hızlı ödeme, e-cüzdan ve kripto seçenekleri hesap durumuna göre listelenebilir. İşlem öncesinde ekrandaki alt ve üst limitleri kontrol et.']
    ],
    faq: [
      ['Tarafbet giriş nasıl yapılır?', 'Üst menüdeki Giriş Yap düğmesine bas, açılan erişim ekranında mevcut hesap bilgilerini kullan.'],
      ['Tarafbet yeni adres nereden açılır?', 'Güncel Giriş ve Yeni Adres sayfalarındaki ana erişim düğmesi aktif yönlendirmeyi kullanır.'],
      ['Tarafbet mobilde çalışır mı?', 'Evet. Mobil tarayıcıda menü, oyun alanı ve kupon ekranı küçük ekrana uyarlanır.'],
      ['Casino ve spor bahisleri aynı hesapta mı?', 'Erişim ekranı üzerinden açılan hesap menüsünde casino ve spor bölümleri birlikte kullanılabilir.'],
      ['Ödeme yöntemleri nerede görülür?', 'Hesaba giriş yaptıktan sonra finans alanında hesabına açık güncel yöntemler, limitler ve işlem adımları gösterilir.']
    ],
    home: true
  },
  {
    slug: 'guncel-giris',
    title: 'Tarafbet Güncel Giriş ve Aktif Erişim Adresi',
    description: 'Tarafbet güncel giriş adresine erişim, hesapla giriş, mobil bağlantı ve adres kontrol adımları.',
    h1: 'Tarafbet Güncel Giriş Adresi',
    lead: 'Mevcut Tarafbet hesabına hızlı erişim için güncel giriş akışı ve kontrol adımları.',
    image: 'screenshot-lobby.webp',
    sections: [
      ['Giriş bağlantısını kontrol et', 'Tarafbet giriş ekranını açtığında marka adı, güvenli bağlantı ve hesap alanının doğru yüklendiğini kontrol et. Erişim düğmesi bu alanın temel ticari bağlantısıdır.'],
      ['Mevcut hesapla giriş', 'Kullanıcı adını ve şifreni giriş formuna yaz. Şifre görünürlüğünü açmadan önce çevrendeki ekran güvenliğini kontrol et. Oturum açıldıktan sonra bakiye ve hesap menüsü üst bölümde görünür.'],
      ['Mobil giriş akışı', 'Telefon ekranında üst menü sadeleşir ve giriş düğmesi alt sabit panelde kalır. Böylece sayfanın hangi bölümünde olursan ol erişim adımına dönebilirsin.']
    ],
    faq: [
      ['Tarafbet güncel giriş linki değişir mi?', 'Erişim adresi değişebilir. Bu sayfadaki ana düğme güncel yönlendirme akışını kullanır.'],
      ['Eski hesabım yeni adreste çalışır mı?', 'Adres değişikliği yeni hesap gerektirmez. Mevcut kullanıcı bilgileriyle giriş yapılır.'],
      ['Giriş ekranı açılmazsa ne yapmalıyım?', 'Bağlantıyı yenile, farklı tarayıcı sekmesi kullan ve güncel giriş düğmesini yeniden aç.']
    ]
  },
  {
    slug: 'yeni-adres',
    title: 'Tarafbet Yeni Adres ve Güncel Bağlantı',
    description: 'Tarafbet yeni adres değişikliklerini takip etme, aktif bağlantıyı ayırt etme ve hesaba erişme adımları.',
    h1: 'Tarafbet Yeni Adres',
    lead: 'Adres değişikliğinde hesabı yeniden açmadan aktif erişim noktasına geçiş yap.',
    image: 'screenshot-support.webp',
    sections: [
      ['Adres değişikliğinde hesap durumu', 'Yeni adres yalnızca erişim noktasını değiştirir. Hesap bilgileri, bakiye ve geçmiş işlemler aynı kullanıcı hesabında kalır.'],
      ['Aktif bağlantıyı açma', 'Sayfadaki Giriş Yap düğmesi doğrudan tanımlı Tarafbet yönlendirmesine gider. Kopyalanmış veya eski bağlantılar yerine tek ana bağlantıyı kullan.'],
      ['Hızlı erişim', 'Bu sayfayı tarayıcı yer imlerine ekleyebilir, mobilde ana ekrana kısayol oluşturabilirsin. Böylece adres arama süresi azalır.']
    ],
    faq: [
      ['Tarafbet yeni adres için tekrar kayıt gerekir mi?', 'Hayır. Mevcut hesap bilgileri yeni erişim adresinde kullanılabilir.'],
      ['Yeni adresi nasıl doğrularım?', 'Bu sayfadaki ana erişim düğmesini kullan ve açılan ekrandaki marka ile hesap alanını kontrol et.'],
      ['Adres değişince bonus veya bakiye silinir mi?', 'Adres değişikliği tek başına hesap bakiyesini veya aktif hesabı değiştirmez.']
    ]
  },
  {
    slug: 'mobil',
    title: 'Tarafbet Mobil Giriş ve Telefon Kullanımı',
    description: 'Tarafbet mobil giriş, telefon ekranında kupon, casino, ödeme ve ana ekran kısayolu kullanımı.',
    h1: 'Tarafbet Mobil Giriş',
    lead: 'Tarafbet arayüzünü telefonda hızlı, temiz ve kesintisiz kullanmak için temel mobil akış.',
    image: 'screenshot-product-full.webp',
    sections: [
      ['Mobil tarayıcıdan erişim', 'Telefon tarayıcında güncel giriş düğmesini aç. Arayüz otomatik olarak küçük ekrana uyarlanır ve temel menüler alt veya üst sabit alanda görünür.'],
      ['Kupon ve oyun alanı', 'Canlı bahis kuponunda market seçimi, oran güncellemesi ve kupon tutarını aynı ekranda kontrol et. Casino tarafında oyun kartları iki sütunlu düzende açılır.'],
      ['Ana ekrana kısayol', 'Tarayıcı menüsündeki Ana Ekrana Ekle seçeneğiyle mobil erişim bağlantısını uygulama simgesi gibi kaydedebilirsin. Ayrı uygulama iddiası olmadan tarayıcı deneyimi korunur.']
    ],
    faq: [
      ['Tarafbet mobil için uygulama gerekli mi?', 'Hayır. Mobil tarayıcı üzerinden tüm temel alanlara erişebilirsin.'],
      ['Mobilde kupon paneli nerede açılır?', 'Spor ve canlı bahis ekranında kupon simgesi sabit menüden veya market seçiminden sonra açılır.'],
      ['Mobil girişte aynı hesap kullanılır mı?', 'Evet. Masaüstünde kullandığın hesap bilgileri mobil girişte de geçerlidir.']
    ]
  },
  {
    slug: 'uyelik',
    title: 'Tarafbet Üyelik ve Hesap Açma Bilgileri',
    description: 'Tarafbet üyelik süreci, hesap bilgileri, doğrulama ve ilk giriş adımları.',
    h1: 'Tarafbet Üyelik',
    lead: 'Yeni hesap oluştururken form alanlarını doğru doldur ve ilk giriş akışını tek seferde tamamla.',
    image: 'screenshot-lobby.webp',
    sections: [
      ['Üyelik formu', 'Kayıt Ol düğmesinden açılan formda istenen kimlik ve iletişim bilgilerini eksiksiz gir. Hesap güvenliği için farklı platformlarda kullanmadığın güçlü bir şifre seç.'],
      ['Hesap doğrulama', 'Telefon veya e-posta doğrulaması istenirse ekrandaki kod alanını kullan. Finans işlemlerinde ek hesap doğrulaması talep edilebilir.'],
      ['İlk giriş', 'Kayıt tamamlandıktan sonra kullanıcı bilgilerinle giriş yap. Hesap menüsünden profil ve finans alanlarını kontrol etmeden işlem başlatma.']
    ],
    faq: [
      ['Tarafbet üyelik ücretsiz mi?', 'Kayıt formunu açmak için ücret alınmaz. Finans işlemleri ayrı hesap alanından yönetilir.'],
      ['Üyelikte hangi bilgiler istenir?', 'Kayıt ekranında gösterilen kimlik, iletişim ve hesap güvenliği alanları doldurulur.'],
      ['Aynı telefonla birden fazla hesap açılır mı?', 'Hesap sınırları kayıt ekranındaki güncel üyelik koşullarına göre uygulanır.']
    ]
  },
  {
    slug: 'kayit',
    title: 'Tarafbet Kayıt Olma Adımları',
    description: 'Tarafbet kayıt formu, hesap oluşturma, doğrulama ve güvenli ilk oturum adımları.',
    h1: 'Tarafbet Kayıt Ol',
    lead: 'Kayıt formundan ilk oturuma kadar gereksiz adım olmadan ilerle.',
    image: 'screenshot-support.webp',
    sections: [
      ['Kayıt ekranını aç', 'Ana Kayıt Ol düğmesi tanımlı erişim bağlantısını açar. Form yüklenince alan adını ve marka görünümünü kontrol et.'],
      ['Bilgileri tamamla', 'Formda istenen alanları gerçek ve güncel bilgilerle doldur. Yanlış telefon veya e-posta bilgisi hesap doğrulamasını geciktirir.'],
      ['Hesabı etkinleştir', 'Doğrulama kodu geldiyse süre dolmadan gir. Ardından giriş yaparak profil alanında bilgilerin doğru kaydedildiğini kontrol et.']
    ],
    faq: [
      ['Tarafbet kayıt ne kadar sürer?', 'Form alanları hazır olduğunda kayıt birkaç kısa adımda tamamlanır.'],
      ['Kayıt sonrası hemen giriş yapılır mı?', 'Hesap etkinleştirme tamamlandığında aynı bilgilerle giriş yapılabilir.'],
      ['Kayıt formu mobilde açılır mı?', 'Evet. Form mobil ekrana uyumlu olarak açılır.']
    ]
  },
  {
    slug: 'bonuslar',
    title: 'Tarafbet Bonuslar ve Kampanya Koşulları',
    description: 'Tarafbet bonus kampanyaları, ilk yatırıma yüzde 500 teklif, GETMY500 promosyon kodu ve etkinleştirme adımları.',
    h1: 'Tarafbet Bonuslar',
    lead: 'İlk yatırıma yüzde 500 bonus teklifini GETMY500 promosyon koduyla aç ve işlemden önce güncel koşulları kontrol et.',
    image: 'screenshot-casino.webp',
    sections: [
      ['İlk yatırıma yüzde 500 bonus', 'Yeni üyelik akışında ilk yatırım bonusu için GETMY500 promosyon kodunu kullan. Kayıt Ol düğmesinden kampanya ekranını aç, kod alanına GETMY500 yaz ve yüzde 500 teklifin hesabında seçili olduğunu yatırım öncesinde kontrol et.'],
      ['Koşulları karşılaştır', 'Minimum yatırım, çevrim şartı, geçerli oyunlar, süre ve maksimum çekim maddelerini tek tek oku. Aynı isimli kampanyaların koşulları dönemsel olarak değişebilir.'],
      ['Bonusu etkinleştir', 'Kayıt veya kampanya ekranındaki promosyon kodu alanına GETMY500 gir. Teklif özeti görünür hale geldiğinde oranı, yatırma sınırını ve çevrim maddelerini okuyup ardından ilk para yatırma işlemini tamamla.']
    ],
    faq: [
      ['Tarafbet bonus kodu nedir?', 'İlk yatırıma yüzde 500 bonus teklifi için promosyon kodu GETMY500 olarak paylaşılmıştır.'],
      ['Bonus koşulları nerede görünür?', 'Kampanya kartını açtığında yatırım, çevrim, süre ve oyun koşulları listelenir.'],
      ['Bonus otomatik tanımlanır mı?', 'Bazı kampanyalar seçim veya aktivasyon isteyebilir. İşlemden önce kampanya durumunu kontrol et.']
    ]
  },
  {
    slug: 'bonus-kodu',
    title: 'Tarafbet Bonus Kodu GETMY500: İlk Yatırıma %500',
    description: 'Tarafbet bonus kodu GETMY500 ile ilk yatırıma yüzde 500 bonusu açma, kodu kullanma ve kampanya koşullarını kontrol etme adımları.',
    h1: 'Tarafbet Bonus Kodu GETMY500',
    lead: 'GETMY500 promosyon koduyla ilk yatırıma yüzde 500 bonus teklifini aç ve aktivasyon adımlarını doğru sırayla tamamla.',
    image: 'tarafbet-500-bonus-promokod-getmy500.webp',
    sections: [
      ['GETMY500 bonus kodu', 'Tarafbet kayıt veya kampanya ekranındaki promosyon kodu alanına GETMY500 yaz. Kod kabul edildiğinde ilk yatırıma yüzde 500 bonus teklifinin özetini hesap ekranında görmeden finans işlemine geçme.'],
      ['İlk yatırıma yüzde 500 bonus', 'Teklif ilk uygun yatırım işlemi için sunulur. Yatıracağın tutar ile bonus karşılığını kampanya kartında kontrol et, ardından hesabında aktif görünen ödeme yöntemlerinden birini seç.'],
      ['Kampanya koşullarını kontrol et', 'Minimum yatırım, çevrim oranı, geçerli oyunlar veya bahisler, kullanım süresi ve maksimum çekim maddeleri kampanya ekranındaki güncel metne göre uygulanır. Bu ayrıntılar görünmeden yalnızca yüzde oranına göre işlem yapma.'],
      ['Kod kullanma sırası', 'Önce üyelik formunu aç, promosyon alanına GETMY500 yaz, teklifin seçildiğini doğrula ve daha sonra ilk yatırımını tamamla. Kod sonradan eklenemiyorsa işlemi göndermeden hesap içi destekten kampanya durumunu sor.']
    ],
    faq: [
      ['Tarafbet yüzde 500 bonus kodu nedir?', 'İlk yatırım kampanyası için kullanılacak promosyon kodu GETMY500 şeklindedir.'],
      ['GETMY500 kodu nereye yazılır?', 'Kayıt formunda veya hesap içindeki kampanya alanında görünen promosyon kodu kutusuna yazılır.'],
      ['Yüzde 500 bonus otomatik gelir mi?', 'Kod girildikten sonra teklifin hesapta seçili ve aktif göründüğünü ilk yatırımdan önce kontrol etmek gerekir.'],
      ['GETMY500 mobilde kullanılabilir mi?', 'Evet. Mobil kayıt veya kampanya ekranında promosyon kodu alanı görünüyorsa aynı kod kullanılabilir.']
    ]
  },
  {
    slug: 'casino',
    title: 'Tarafbet Casino: Slot ve Masa Oyunları',
    description: 'Tarafbet casino oyunları, slot kategorileri, sağlayıcı filtreleri, masa oyunları ve mobil kullanım.',
    h1: 'Tarafbet Casino',
    lead: 'Slotlar, masa oyunları ve oyun sağlayıcıları için Tarafbet casino alanının net haritası.',
    image: 'screenshot-slots.webp',
    sections: [
      ['Slot kategorileri', 'Casino lobisinde popüler, yeni ve sağlayıcı bazlı oyun grupları bulunur. Arama alanını kullanarak oyun adına göre hızlı seçim yapabilirsin.'],
      ['Masa oyunları', 'Rulet, blackjack, baccarat ve poker türleri casino menüsünde ayrı filtrelerle açılır. Oyun kartına dokunmadan önce demo veya gerçek bakiye seçimini kontrol et.'],
      ['Mobil casino', 'Oyun kartları telefonda iki sütunlu düzene geçer. Filtreler açılır panelde, bakiye ve hesap menüsü sabit üst alanda kalır.']
    ],
    faq: [
      ['Tarafbet casino oyunları nasıl bulunur?', 'Casino menüsündeki arama ve sağlayıcı filtrelerini kullan.'],
      ['Casino mobilde tam ekran açılır mı?', 'Desteklenen oyunlar mobil tarayıcıda uygun ekran oranıyla açılır.'],
      ['Canlı casino ayrı bölüm mü?', 'Evet. Canlı krupiye masaları Canlı Casino bölümünde gruplanır.']
    ]
  },
  {
    slug: 'canli-casino',
    title: 'Tarafbet Canlı Casino ve Krupiye Masaları',
    description: 'Tarafbet canlı casino masaları, oyun seçimi, masa limitleri ve mobil canlı casino erişimi.',
    h1: 'Tarafbet Canlı Casino',
    lead: 'Canlı rulet, blackjack, baccarat ve stüdyo oyunlarında masa seçimini doğru yap.',
    image: 'screenshot-casino.webp',
    sections: [
      ['Canlı masa seçimi', 'Canlı casino lobisinde oyun türü, sağlayıcı, dil ve masa limiti filtrelerini kullan. Masaya girmeden önce minimum bahis bilgisini kontrol et.'],
      ['Krupiye ve yayın', 'Canlı yayın kalitesi bağlantı hızına göre ayarlanabilir. Telefon ekranında yatay kullanım masa ve bahis alanını birlikte görmeyi kolaylaştırır.'],
      ['Oyun geçmişi', 'Tamamlanan turlar hesap geçmişinde tur bilgisiyle listelenir. Bağlantı kesilirse oturum açtıktan sonra geçmiş alanını kontrol et.']
    ],
    faq: [
      ['Canlı casino masaları nasıl filtrelenir?', 'Oyun türü, sağlayıcı ve masa limiti filtrelerini birlikte kullan.'],
      ['Yayın kesilirse bahis ne olur?', 'Tur sunucu tarafında tamamlanır ve sonuç oyun geçmişinde görünür.'],
      ['Canlı casino telefonda çalışır mı?', 'Evet. Desteklenen masalar mobil tarayıcıda açılır.']
    ]
  },
  {
    slug: 'spor-bahisleri',
    title: 'Tarafbet Spor Bahisleri ve Bahis Marketleri',
    description: 'Tarafbet spor bahisleri, futbol, basketbol, tenis, e-spor, market seçimi ve kupon kullanımı.',
    h1: 'Tarafbet Spor Bahisleri',
    lead: 'Maç öncesi program, lig filtreleri ve kupon oluşturma akışını tek sayfada öğren.',
    image: 'screenshot-lobby.webp',
    sections: [
      ['Futbol ve ana marketler', 'Maç sonucu, çifte şans, toplam gol, karşılıklı gol, handikap ve oyuncu marketleri karşılaşma sayfasında gruplanır. Market adını kupona eklemeden önce kontrol et.'],
      ['Basketbol, tenis ve diğer sporlar', 'Basketbolda maç ve periyot, teniste set ve oyun marketleri ayrı başlıklarda açılır. Voleybol, hentbol, masa tenisi ve e-spor için lig filtresi kullanılabilir.'],
      ['Kupon kontrolü', 'Seçimleri ekledikten sonra oran, etkinlik saati ve kupon türünü son kez kontrol et. Canlıya yakın karşılaşmalarda oranlar hızla değişebilir.']
    ],
    faq: [
      ['Tarafbet spor bahislerinde hangi sporlar var?', 'Futbol, basketbol, tenis, voleybol, hentbol, masa tenisi ve e-spor ana kategoriler arasındadır.'],
      ['Kombine kupon nasıl yapılır?', 'Birden fazla karşılaşmadan seçim ekle ve kupon panelinde kombine türünü seç.'],
      ['Oran değişirse kupon ne olur?', 'Onay öncesinde güncel oran kupon panelinde gösterilir.']
    ]
  },
  {
    slug: 'canli-bahis',
    title: 'Tarafbet Canlı Bahis ve Anlık Oranlar',
    description: 'Tarafbet canlı bahis ekranı, anlık marketler, oran değişimi ve mobil kupon kullanımı.',
    h1: 'Tarafbet Canlı Bahis',
    lead: 'Devam eden karşılaşmalarda skor, süre, market durumu ve oran hareketini birlikte izle.',
    image: 'screenshot-winners.webp',
    sections: [
      ['Canlı karşılaşma listesi', 'Canlı bölümde devam eden etkinlikler spor ve lig bazında sıralanır. Skor ile maç saatini karıştırmamak için karşılaşma başlığını aç.'],
      ['Anlık oran değişimi', 'Oyun akışı değiştiğinde market kısa süre kilitlenebilir ve oran yeniden hesaplanabilir. Kupon onayında görünen son oran geçerlidir.'],
      ['Mobil canlı kupon', 'Telefon ekranında market seçimi ile kupon paneli arasında hızlı geçiş yapılır. Küçük ekranda açık kalan eski seçimleri kupondan temizle.']
    ],
    faq: [
      ['Canlı bahis marketi neden kilitlenir?', 'Gol, kart, mola veya inceleme anında oran hesaplaması için market geçici olarak kapanabilir.'],
      ['Canlı oran değişince bildirim gelir mi?', 'Kupon onayından önce güncel oran panelde gösterilir.'],
      ['Canlı bahis mobilde kullanılır mı?', 'Evet. Canlı liste ve kupon paneli mobil düzene uyarlanır.']
    ]
  },
  {
    slug: 'para-yatirma',
    title: 'Tarafbet Para Yatırma Yöntemleri',
    description: 'Tarafbet para yatırma ekranı, banka transferi, hızlı ödeme, e-cüzdan ve kripto işlem adımları.',
    h1: 'Tarafbet Para Yatırma',
    lead: 'Hesabına açık yatırım yöntemini seç, güncel limitleri kontrol et ve işlem sonucunu finans geçmişinden izle.',
    image: 'screenshot-support.webp',
    sections: [
      ['Yöntem seçimi', 'Finans menüsünde hesabına açık yöntemler listelenir. Havale veya EFT, hızlı transfer, e-cüzdan, kart ve kripto kategorileri dönemsel olarak değişebilir.'],
      ['Limit ve hesap bilgileri', 'Yatırım tutarını yazmadan önce yöntem kartındaki minimum ve maksimum değerleri kontrol et. Banka bilgileri açıldıysa alıcı ve açıklama alanlarını ekrandaki biçimde kullan.'],
      ['İşlem takibi', 'Onay sonrası finans geçmişinde işlemin durumu görünür. Beklemede kalan işlem için destek talebinde tutar, saat ve işlem referansını hazır bulundur.']
    ],
    faq: [
      ['Tarafbet para yatırma yöntemleri nelerdir?', 'Hesaba göre banka transferi, hızlı ödeme, e-cüzdan, kart veya kripto seçenekleri görülebilir.'],
      ['Minimum yatırım tutarı nedir?', 'Yönteme göre değişir ve işlem ekranındaki kart üzerinde gösterilir.'],
      ['Yatırım görünmezse ne yapmalıyım?', 'Finans geçmişini kontrol et ve işlem referansıyla destek alanını aç.']
    ]
  },
  {
    slug: 'para-cekme',
    title: 'Tarafbet Para Çekme İşlemleri',
    description: 'Tarafbet para çekme talebi, yöntem seçimi, hesap doğrulama, limit ve işlem takibi.',
    h1: 'Tarafbet Para Çekme',
    lead: 'Çekim yöntemini, hesap sahibini ve güncel limitleri talep öncesinde birlikte kontrol et.',
    image: 'screenshot-support.webp',
    sections: [
      ['Çekim yöntemi seçimi', 'Finans menüsündeki Para Çekme alanını aç ve hesabına sunulan yöntemi seç. Yatırım yönteminden farklı bir çekim seçeneği gösterilebilir.'],
      ['Hesap ve doğrulama', 'Alıcı adı ile hesap sahibinin uyumlu olduğundan emin ol. Sistem ek doğrulama isterse talebi göndermeden önce işlemi tamamla.'],
      ['Talep durumu', 'Gönderilen çekim talebi finans geçmişinde beklemede, onaylandı veya tamamlandı durumlarından biriyle görünür. Aynı işlem için art arda yeni talep oluşturma.']
    ],
    faq: [
      ['Tarafbet para çekme ne kadar sürer?', 'Süre seçilen yönteme, doğrulama durumuna ve işlem yoğunluğuna göre değişir.'],
      ['Çekim limiti nerede yazar?', 'Seçtiğin yöntemin işlem kartında minimum ve maksimum tutarlar gösterilir.'],
      ['Çekim talebi iptal edilir mi?', 'Bekleyen talebin yanında iptal seçeneği varsa finans geçmişinden yönetilebilir.']
    ]
  },
  {
    slug: 'odeme-yontemleri',
    title: 'Tarafbet Ödeme Yöntemleri ve Finans Menüsü',
    description: 'Tarafbet ödeme yöntemleri, banka transferi, hızlı ödeme, e-cüzdan, kart ve kripto seçenekleri.',
    h1: 'Tarafbet Ödeme Yöntemleri',
    lead: 'Hesabında görünen finans seçeneklerini hız, limit ve kullanım adımına göre karşılaştır.',
    image: 'screenshot-support.webp',
    table: [
      ['Yöntem grubu', 'Kullanım alanı', 'Kontrol noktası'],
      ['Havale ve EFT', 'Yatırma, uygun hesaplarda çekme', 'Alıcı, açıklama, banka saati'],
      ['Hızlı transfer', 'Yatırma ve çekme', 'Telefon, hesap adı, işlem limiti'],
      ['E-cüzdan', 'Yatırma ve çekme', 'Cüzdan hesabı ve onay kodu'],
      ['Kart', 'Hesaba göre yatırım', 'Kart doğrulama ve limit'],
      ['Kripto', 'Hesaba göre yatırım ve çekim', 'Ağ, adres ve işlem kodu']
    ],
    sections: [
      ['Dinamik yöntem listesi', 'Ödeme yöntemleri hesap, saat ve işlem yönüne göre değişebilir. Bu nedenle finans menüsünde görünmeyen yöntemi dışarıdan kullanma.'],
      ['Doğru ağı ve hesabı seç', 'Kripto işleminde ağ ile cüzdan adresini, banka işleminde alıcı ve açıklama bilgisini iki kez kontrol et. Yanlış ağ veya yanlış alıcı işlemi uzatır.'],
      ['Finans geçmişi', 'Tamamlanan ve bekleyen işlemler hesap geçmişinde tutulur. Destek talebi açarken işlem satırındaki referansı kullan.']
    ],
    faq: [
      ['Tüm ödeme yöntemleri herkeste aynı mı?', 'Hayır. Hesap durumu ve işlem yönüne göre seçenekler değişebilir.'],
      ['En hızlı yöntem hangisi?', 'Hız anlık yoğunluğa ve doğrulamaya bağlıdır. Ekrandaki tahmini süreyi esas al.'],
      ['Kripto ağını yanlış seçersem ne olur?', 'İşlem gecikebilir veya ek inceleme gerekebilir. Göndermeden önce ağ adını eşleştir.']
    ]
  },
  {
    slug: 'sikayet',
    title: 'Tarafbet Şikayet ve Sorun Çözüm Adımları',
    description: 'Tarafbet şikayet başlıkları, ödeme, bonus, hesap erişimi ve canlı destek için çözüm akışı.',
    h1: 'Tarafbet Şikayet ve Çözüm',
    lead: 'Sorunu doğru kategoriye ayır, işlem kanıtlarını hazırla ve destek talebini tek dosyada ilerlet.',
    image: 'screenshot-support.webp',
    sections: [
      ['Ödeme sorunu', 'İşlem tutarı, saat, yöntem ve referans kodunu finans geçmişinden al. Aynı işlem için birden fazla talep açmak yerine mevcut görüşmeye ek bilgi gönder.'],
      ['Bonus uyuşmazlığı', 'Kampanya adı, aktivasyon saati, yatırım işlemi ve çevrim durumunu birlikte belirt. Kampanya koşullarının ekran görüntüsünü sakla.'],
      ['Hesap erişimi', 'Kullanıcı adı, kayıtlı iletişim kanalı ve son başarılı giriş bilgisini hazırla. Şifreyi destek mesajına yazma.']
    ],
    faq: [
      ['Tarafbet şikayet nereye iletilir?', 'Hesap içindeki canlı destek veya Destek sayfasındaki erişim düğmesi kullanılır.'],
      ['Ödeme şikayetinde ne gerekir?', 'Tutar, saat, yöntem, işlem referansı ve finans geçmişi durumu gerekir.'],
      ['Aynı sorun için yeni talep açmalı mıyım?', 'Mevcut görüşmeye bilgi eklemek sürecin tek kayıt üzerinden ilerlemesini sağlar.']
    ]
  },
  {
    slug: 'destek',
    title: 'Tarafbet Destek ve Canlı Yardım',
    description: 'Tarafbet destek kanalı, hesap, ödeme, bonus ve teknik sorunlarda canlı yardım akışı.',
    h1: 'Tarafbet Destek',
    lead: 'Hesap, finans, bonus veya teknik konuyu doğru bilgilerle canlı destek ekibine aktar.',
    image: 'screenshot-support.webp',
    sections: [
      ['Canlı destek', 'Hesaba giriş yaptıktan sonra destek alanını aç. Konuyu kısa başlıkla yaz ve ilgili işlem referansını ilk mesajda belirt.'],
      ['Teknik sorun', 'Cihaz türü, tarayıcı, hata mesajı ve sorunun oluştuğu sayfayı belirt. Ekran görüntüsü eklemek tekrar soruları azaltır.'],
      ['Hesap güvenliği', 'Destek görüşmesinde şifreni paylaşma. Hesap doğrulaması için yalnızca ekranda istenen adımları uygula.']
    ],
    faq: [
      ['Tarafbet canlı destek nasıl açılır?', 'Giriş yaptıktan sonra hesap menüsündeki canlı destek alanını kullan.'],
      ['Destek için hangi bilgiler hazırlanmalı?', 'Konuya göre işlem referansı, saat, tutar, cihaz ve hata mesajı hazırlanmalı.'],
      ['Şifremi destekle paylaşmalı mıyım?', 'Hayır. Şifre hesap erişimi için gizli tutulmalıdır.']
    ]
  }
];

pages.push(
  {
    slug: 'slot-oyunlari',
    title: 'Tarafbet Slot Oyunları: Kategoriler ve Oyun Seçimi',
    description: 'Tarafbet slot oyunları, oyun arama, sağlayıcı filtreleri, özellikler, bahis aralığı ve mobil slot kullanımı.',
    h1: 'Tarafbet Slot Oyunları',
    lead: 'Slot lobisinde oyun türünü, sağlayıcıyı ve oyun özelliklerini doğru filtrelerle bul.',
    sections: [
      ['Slot lobisi nasıl kullanılır?', 'Tarafbet slot alanında oyunlar popüler, yeni, favori ve sağlayıcı başlıkları altında gruplanabilir. Belirli bir oyunu ararken başlığın tamamını yazmak yerine ayırt edici kelimeyi kullanmak daha hızlı sonuç verir. Aynı serinin farklı sürümlerini oyun adı, stüdyo ve görsel üzerinden karşılaştır.'],
      ['Oyun özelliklerini okumak', 'Bir slotu açmadan önce ödeme çizgisi, bahis aralığı, bonus turu, ücretsiz dönüş ve varsa özellik satın alma seçeneğini bilgi ekranından kontrol et. Benzer görseller kullanan oyunların mekanikleri aynı olmayabilir. Oyun içindeki yardım tablosu sembol değerlerini ve özel sembollerin işlevini açıklar.'],
      ['Sağlayıcı ve kategori filtreleri', 'Sağlayıcı filtresi aynı stüdyonun oyunlarını bir arada gösterir. Kategori filtresi ise klasik slot, video slot, jackpot veya farklı mekaniklere sahip başlıkları ayırır. Birden fazla filtre açık kaldığında sonuç listesi daralabilir, aradığın oyun görünmüyorsa filtreleri sıfırla.'],
      ['Mobil slot deneyimi', 'Telefon ekranında oyun listesini dikey kullan, oyun açıldığında destekleniyorsa yatay görünüme geç. Bağlantı zayıfladığında yeni tur başlatmadan önce bakiye ile oyun geçmişini kontrol et. Açık sekmelerin sayısını azaltmak yükleme süresini ve dokunma gecikmesini iyileştirir.'],
      ['Favoriler ve son oynananlar', 'Hesap açıkken sık kullandığın oyunları favorilere ekleyebilir, son oynananlar alanından önceki oturumlara dönebilirsin. Favori listesi hesapla ilişkilidir. Tarayıcı geçmişiyle karıştırmamak için oyun kartındaki favori işaretini kullan.'],
      ['Tur ve bakiye kontrolü', 'Her tur sonunda görünen sonuç ile hesap bakiyesindeki değişimi karşılaştır. Bağlantı kesintisi yaşanırsa oyunu tekrar tekrar açmak yerine oyun geçmişindeki tur kaydını bekle. Destek talebinde oyun adı, tur saati ve tur kimliği en yararlı bilgilerdir.']
    ],
    faq: [
      ['Tarafbet slot oyunları nereden açılır?', 'Casino menüsündeki Slotlar alanı veya oyun arama kutusu kullanılır.'],
      ['Slot sağlayıcısı nasıl seçilir?', 'Lobideki sağlayıcı filtresi açılır ve istenen stüdyo seçilir.'],
      ['Oyun görünmüyorsa ne yapılır?', 'Açık kategori ve sağlayıcı filtrelerini sıfırla, ardından oyun adını yeniden ara.'],
      ['Slot turu yarıda kalırsa sonuç nerede görülür?', 'Tamamlanan tur oyun geçmişinde tur kimliği ve sonuç bilgisiyle görünür.'],
      ['Slotlar mobilde çalışır mı?', 'Mobil uyumlu oyunlar telefon tarayıcında açılır ve ekran yönüne göre düzenlenir.']
    ]
  },
  {
    slug: 'masa-oyunlari',
    title: 'Tarafbet Masa Oyunları: Rulet, Blackjack ve Baccarat',
    description: 'Tarafbet masa oyunları, rulet, blackjack, baccarat, poker türleri, masa seçimi ve oyun geçmişi.',
    h1: 'Tarafbet Masa Oyunları',
    lead: 'Rulet, blackjack, baccarat ve poker türlerinde masa kurallarını ve limitleri oyun öncesinde karşılaştır.',
    sections: [
      ['Masa oyunu kategorileri', 'Casino menüsündeki masa oyunları alanı rulet, blackjack, baccarat ve poker türlerini ayrı gruplarda gösterebilir. Dijital masa ile canlı krupiye masası aynı kategori değildir. Oyun kartındaki tür, sağlayıcı ve masa adını kontrol ederek doğru sürümü aç.'],
      ['Rulet masası seçimi', 'Rulet oyunlarında masa düzeni ve kural seti farklılaşabilir. Avrupa ruleti, hızlı rulet veya stüdyo sürümleri aynı bahis alanını farklı tempoda sunar. Minimum bahis, maksimum bahis ve tur süresini oyunu açtıktan sonra bilgi alanından doğrula.'],
      ['Blackjack ve baccarat ekranı', 'Blackjack masasında deste sayısı, yan bahisler ve masa limiti önemlidir. Baccarat tarafında oyuncu, banker ve beraberlik alanları ayrı seçeneklerdir. Bahis göndermeden önce seçimin doğru masaya ve doğru tura eklendiğini sayaç üzerinden kontrol et.'],
      ['Poker türlerini ayırt etme', 'Casino pokeri ile oyuncuların birbirine karşı oynadığı poker odası aynı yapı değildir. Oyun kartında masa formatı, katılım biçimi ve bahis seçenekleri belirtilir. Kuralları bilmediğin bir sürümde önce yardım ekranını aç.'],
      ['Masa limitleri ve oturum', 'Bir masaya girişte bakiye ile minimum bahis arasındaki uyumu kontrol et. Canlı masalarda doluluk veya koltuk bilgisi gösterilebilir. Oturumu kapatmadan önce tamamlanmamış tur bulunmadığından ve sonucun geçmişe işlendiğinden emin ol.'],
      ['Mobil masa oyunları', 'Dar ekranda masa ve bahis paneli birlikte görünmüyorsa yatay görünüm daha kullanışlıdır. Tam ekran moduna geçmeden önce tarayıcının adres çubuğunu ve alt gezinme alanını kapatmak için sayfayı hafifçe kaydır.']
    ],
    faq: [
      ['Tarafbet rulet oyunları nerede bulunur?', 'Casino menüsündeki Masa Oyunları veya Rulet filtresi kullanılır.'],
      ['Canlı masa ile dijital masa arasındaki fark nedir?', 'Canlı masada yayın ve krupiye bulunur, dijital masa yazılım tarafından çalıştırılır.'],
      ['Masa limiti nereden kontrol edilir?', 'Oyun kartında veya masa açılışındaki bilgi alanında minimum ve maksimum tutarlar gösterilir.'],
      ['Blackjack yan bahisleri her masada var mı?', 'Yan bahis seçenekleri masanın kural setine göre değişir.'],
      ['Masa oyunu geçmişi nerede görülür?', 'Hesap menüsündeki oyun geçmişinde tamamlanan turlar listelenir.']
    ]
  },
  {
    slug: 'sanal-sporlar',
    title: 'Tarafbet Sanal Sporlar ve Hızlı Karşılaşmalar',
    description: 'Tarafbet sanal sporlar, sanal futbol, basketbol, yarışlar, market seçimi ve kupon kontrolü.',
    h1: 'Tarafbet Sanal Sporlar',
    lead: 'Kısa aralıklarla sonuçlanan sanal karşılaşmalarda etkinlik, market ve kupon zamanını birlikte kontrol et.',
    sections: [
      ['Sanal spor ekranı', 'Sanal sporlar önceden tanımlanmış kısa etkinliklerden oluşur. Sanal futbol, basketbol veya yarış başlıkları ayrı takvim ve marketlerle açılabilir. Gerçek spor karşılaşmalarıyla karıştırmamak için bölüm başlığını ve başlangıç sayacını kontrol et.'],
      ['Etkinlik takvimi', 'Bir tur sonuçlandığında sonraki etkinlik kısa süre içinde başlayabilir. Karşılaşma numarası, başlangıç saati ve lig adı kuponun doğru etkinliğe eklendiğini anlamanı sağlar. Eski sekmede kalan marketleri onaylamadan önce sayfayı yenile.'],
      ['Market ve oran kontrolü', 'Maç sonucu, toplam sayı veya yarış sıralaması gibi marketler sanal spor türüne göre değişir. Oran seçiminin yanında görünen etkinlik adını kupon panelindeki başlıkla eşleştir. Onay ekranındaki son oran geçerlidir.'],
      ['Tekli ve kombine kupon', 'Sanal etkinliklerden tek seçim veya izin verilen kombinasyonlarla kupon oluşturulabilir. Çok kısa süre kalan marketler onay sırasında kapanabilir. Kupon tutarı ile olası dönüş alanını göndermeden önce tekrar kontrol et.'],
      ['Sonuç ve geçmiş', 'Tamamlanan sanal etkinliklerin sonuçları ilgili bölümde ve kupon geçmişinde görünür. Kupon beklemede kalırsa etkinlik numarasını kaydet ve resmi sonuç akışının tamamlanmasını bekle.'],
      ['Mobil sanal spor kullanımı', 'Telefon ekranında lig listesi, market ve kupon paneli arasında geçiş yapılır. Aynı anda çok sayıda etkinlik açmak yerine izlediğin ligi sabitlemek seçim hatasını azaltır.']
    ],
    faq: [
      ['Tarafbet sanal sporlar gerçek maç mıdır?', 'Hayır. Sanal sporlar kısa süreli simüle edilmiş etkinliklerden oluşur.'],
      ['Sanal spor kuponu nasıl kontrol edilir?', 'Etkinlik numarası, market adı, oran ve kupon tutarı onay öncesinde eşleştirilir.'],
      ['Sanal futbol sonucu nerede görünür?', 'Etkinlik sonuçları sanal spor ekranında ve kupon geçmişinde listelenir.'],
      ['Sanal sporlarda kombine yapılır mı?', 'Kombine seçeneği açık market ve kupon kurallarına göre panelde görünür.'],
      ['Sanal sporlar mobilde açılır mı?', 'Mobil uyumlu sanal spor ekranı telefon tarayıcında kullanılabilir.']
    ]
  },
  {
    slug: 'bahis-kuponu',
    title: 'Tarafbet Bahis Kuponu: Tekli, Kombine ve Sistem',
    description: 'Tarafbet bahis kuponu oluşturma, tekli, kombine, sistem seçimi, oran değişimi ve kupon geçmişi.',
    h1: 'Tarafbet Bahis Kuponu',
    lead: 'Seçimleri kupona eklerken karşılaşma, market, oran ve kupon türünü son onaydan önce denetle.',
    sections: [
      ['Kupona seçim ekleme', 'Karşılaşma sayfasında istediğin marketin oranına dokunduğunda seçim kupon paneline eklenir. Aynı maçtan birbiriyle uyumsuz marketler birlikte kabul edilmeyebilir. Kupon panelinde her seçimin etkinlik ve market adı ayrı satırda görünmelidir.'],
      ['Tekli kupon', 'Tekli kupon yalnızca bir seçime bağlıdır. Tutar alanını doldurduktan sonra oran ile olası dönüşü kontrol et. Canlı karşılaşmalarda oran onay sırasında güncellenebileceği için değişiklik uyarısını görmeden kuponu yeniden göndermeme dikkat et.'],
      ['Kombine kupon', 'Kombine kupon iki veya daha fazla seçimi tek kuponda birleştirir. Toplam oran her seçimin kupona katkısıyla oluşur. İptal, iade veya sonuçlandırma kuralları toplam oranı etkileyebilir. Kuponu göndermeden önce tüm satırları tek tek aç.'],
      ['Sistem kuponu', 'Sistem seçeneği sunulduğunda kupondaki seçimlerden farklı kombinasyonlar oluşturulur. Kombinasyon sayısı ve toplam kupon bedeli panelde hesaplanır. Sadece sistem adını değil, kaç kolon oluşturulduğunu ve kolon başına tutarı da kontrol et.'],
      ['Oran değişimi', 'Özellikle canlı bahislerde oran seçim ile onay arasında değişebilir. Panel yeni oranı gösterdiğinde kabul tercihine göre işlem devam eder veya durur. Eski oran görüntüsüne bakarak ikinci bir kupon oluşturmadan önce geçmişi kontrol et.'],
      ['Kupon geçmişi ve durumlar', 'Onaylanan kuponlar açık, kazandı, kaybetti, iade veya sonuç bekliyor gibi durumlarla listelenir. Destek talebi için kupon numarası, etkinlik adı ve market sonucu birlikte hazırlanır.']
    ],
    faq: [
      ['Tarafbet kupon numarası nerede görülür?', 'Onaylanan kuponun ayrıntısında ve kupon geçmişinde referans numarası bulunur.'],
      ['Tekli ve kombine kupon farkı nedir?', 'Tekli bir seçimden, kombine birden fazla seçimin aynı kuponda birleşmesinden oluşur.'],
      ['Sistem kuponunda toplam bedel neden artar?', 'Seçilen sistem farklı kolon kombinasyonları oluşturduğu için toplam bedel kolon sayısına göre hesaplanır.'],
      ['Oran değişince kupon otomatik kabul edilir mi?', 'Davranış kupon panelindeki oran değişikliği tercihine göre belirlenir.'],
      ['Kupon beklemede kalırsa ne yapılır?', 'Karşılaşma sonucu doğrulanana kadar bekle, durum değişmezse kupon numarasıyla destek kaydı aç.']
    ]
  },
  {
    slug: 'hesap-guvenligi',
    title: 'Tarafbet Hesap Güvenliği ve Şifre Yenileme',
    description: 'Tarafbet hesap güvenliği, şifre yenileme, giriş sorunu, iletişim doğrulaması ve oturum kontrolü.',
    h1: 'Tarafbet Hesap Güvenliği',
    lead: 'Şifre, iletişim bilgileri ve aktif oturumları düzenli kontrol ederek hesap erişimini koru.',
    sections: [
      ['Güçlü ve benzersiz şifre', 'Tarafbet hesabı için başka hizmetlerde kullanmadığın bir şifre oluştur. Form destekliyorsa büyük harf, küçük harf, sayı ve özel karakter içeren uzun bir kombinasyon seç. Şifreyi mesajla, destek görüşmesinde veya ekran görüntüsünde paylaşma.'],
      ['Şifre yenileme', 'Giriş ekranındaki Şifremi Unuttum bağlantısı üzerinden kayıtlı telefon veya e-posta ile yenileme akışını başlat. Doğrulama bağlantısı gecikirse spam klasörünü ve telefon numarasının güncelliğini kontrol et. Arka arkaya çok sayıda kod isteme.'],
      ['İletişim bilgisi doğrulaması', 'Telefon ve e-posta hesabınla eşleşmelidir. Numara veya adres değiştiğinde finans işlemi başlatmadan önce profil alanını kontrol et. Kilitli alanlar için hesap içi destekten doğrulama sürecini başlat.'],
      ['Oturum güvenliği', 'Ortak cihazda otomatik giriş seçeneğini kullanma ve işlem bittiğinde hesaptan çık. Tarayıcı şifre kaydını yalnızca kişisel cihazında değerlendir. Tanımadığın bir oturum fark edersen şifreyi yenile ve destek kaydı aç.'],
      ['Hesap kilidi ve erişim sorunu', 'Çok sayıda hatalı giriş hesabı geçici olarak kilitleyebilir. Kullanıcı adını tahmin ederek denemek yerine kayıtlı iletişim bilgisiyle kurtarma akışını kullan. Giriş hatasının ekran metnini not etmek doğru destek kategorisini seçmeyi kolaylaştırır.'],
      ['Finans işlemlerinde güvenlik', 'Para yatırma veya çekme ekranında hesap sahibi, yöntem ve tutarı doğrula. Doğrulama kodunu üçüncü kişilerle paylaşma. İşlem geçmişinde tanımadığın bir hareket görürsen yeni işlem oluşturmadan destek üzerinden hesabı incelemeye aldır.']
    ],
    faq: [
      ['Tarafbet şifresi nasıl yenilenir?', 'Giriş ekranındaki Şifremi Unuttum bağlantısı ve kayıtlı iletişim bilgisi kullanılır.'],
      ['Doğrulama kodu gelmezse ne yapılır?', 'Telefon veya e-posta bilgisini, spam klasörünü ve bağlantıyı kontrol ettikten sonra yeni kod istenir.'],
      ['Destek şifre ister mi?', 'Şifre ve doğrulama kodu gizli tutulmalı, mesajla paylaşılmamalıdır.'],
      ['Hesap neden geçici kilitlenir?', 'Art arda hatalı giriş veya güvenlik kontrolü geçici erişim sınırı oluşturabilir.'],
      ['Ortak cihazda oturum açık bırakılır mı?', 'Hayır. İşlem tamamlandığında hesaptan çıkış yapılmalıdır.']
    ]
  },
  {
    slug: 'guvenilir-mi',
    title: 'Tarafbet Güvenilir mi? Hesap ve İşlem Kontrol Listesi',
    description: 'Tarafbet güvenilir mi araması için bağlantı, hesap, bonus, ödeme ve destek kontrollerini tek sayfada incele.',
    h1: 'Tarafbet Güvenilir mi?',
    lead: 'Bir erişim veya işlem kararında doğrulanabilir ekran bilgilerini ve hesap kayıtlarını birlikte kontrol et.',
    sections: [
      ['Bağlantı ve marka kontrolü', 'Giriş yapmadan önce açılan sayfadaki marka, hesap alanı ve bağlantı hedefini birlikte değerlendir. Farklı marka adına, dosya indirmeye veya şifre isteyen ara ekrana yönlendiren sayfalarda bilgi girme. Bu sitedeki ana erişim düğmesi tek tanımlı yönlendirmeyi kullanır.'],
      ['Hesap bilgilerinin korunması', 'Kullanıcı adı ve şifre yalnızca giriş formunda kullanılmalıdır. Destek görüşmesinde şifre, doğrulama kodu veya kartın tamamı paylaşılmaz. Kayıtlı telefon ile e-posta güncel tutulur ve ortak cihazda oturum kapatılır.'],
      ['Bonus koşullarını doğrulama', 'GETMY500 koduyla sunulan ilk yatırıma yüzde 500 bonusu değerlendirirken yalnızca görünen orana bakma. Minimum yatırım, çevrim hesabı, geçerli oyunlar, süre, maksimum çekim ve iptal koşulları aynı kampanya ekranından okunmalıdır.'],
      ['Ödeme ekranını kontrol etme', 'Finans menüsünde görünen yöntem, limit, alıcı ve işlem açıklaması işlem anında esas alınır. Daha önce kaydedilmiş banka veya cüzdan bilgisini güncel ekranla eşleştirmeden kullanma. Her işlemden sonra finans geçmişindeki referansı sakla.'],
      ['Şikayet ve destek kaydı', 'Sorun yaşandığında tarih, saat, tutar, yöntem ve referans kodunu tek talepte topla. Verilen talep numarası üzerinden ilerlemek süreci bölmeden takip etmeyi sağlar. Aynı işlem için farklı kanallarda çelişkili kayıt açma.'],
      ['Karar verirken bakılacak alanlar', 'Güncel erişim, hesap doğrulaması, bonus kuralları, para yatırma ve çekme limitleri, kupon geçmişi ve destek kaydı birbirinden ayrı kontrol edilmelidir. Bu başlıkların her biri sitede kendi ana URL altında ayrıntılı olarak açıklanır.']
    ],
    faq: [
      ['Tarafbet bağlantısı nasıl kontrol edilir?', 'Ana erişim düğmesinin açtığı sayfada marka, hesap alanı ve yönlendirme hedefi birlikte kontrol edilir.'],
      ['Ödeme yöntemi bilgisi nereden doğrulanır?', 'Hesap içindeki güncel finans ekranında görünen yöntem ve limitler esas alınır.'],
      ['Bonus bilgisi nasıl doğrulanır?', 'Kampanya ekranındaki yatırım, çevrim, süre ve çekim koşulları birlikte okunur.'],
      ['Şikayet kaydı için hangi bilgiler gerekir?', 'Tarih, saat, tutar, yöntem, işlem veya kupon referansı ve hata metni hazırlanır.'],
      ['Şifre destekle paylaşılır mı?', 'Hayır. Şifre ve doğrulama kodları gizli tutulur.']
    ]
  }
);

const expansions = {
  '': {
    sections: [
      ['Tarafbet üyelik ve kayıt akışı', 'Yeni kullanıcı akışı Kayıt Ol düğmesiyle başlar. Formda istenen hesap ve iletişim bilgileri tamamlandıktan sonra doğrulama adımı açılabilir. Üyelik ve Kayıt sayfaları form alanlarını, ilk oturumu ve hesap menüsünü ayrı ayrıntılarla açıklar.'],
      ['Bonus ve kampanya kontrolü', 'Tarafbet bonus seçenekleri hesap içindeki kampanya alanında görülür. GETMY500 promosyon koduyla ilk yatırıma yüzde 500 teklifini seçtikten sonra yatırım alt limiti, çevrim oranı, geçerli oyunlar, süre ve çekim sınırı birlikte kontrol edilmelidir.'],
      ['Yeni adres ile hesap ilişkisi', 'Tarafbet yeni adres yalnızca erişim noktasını değiştirir. Mevcut üyelik, kullanıcı adı ve hesap bakiyesi aynı hesapta kalır. Güncel Giriş sayfasındaki ana bağlantı masaüstü ve mobil için tek erişim akışı sunar.'],
      ['Destek ve şikayet çözümü', 'Giriş, ödeme, bonus veya teknik hata için konu başlığı, işlem saati ve referans bilgisi hazırlanır. Destek ve Şikayet sayfaları sorunun doğru kategoriye ayrılmasını ve aynı talep üzerinden takip edilmesini açıklar.']
    ],
    faq: [
      ['Tarafbet hesabıma hangi sayfadan ulaşırım?', 'Güncel Giriş sayfasındaki Giriş Yap düğmesi mevcut hesap erişimi için ana bağlantıdır.'],
      ['Tarafbet giriş, casino ve bahis bölümleri ayrı hesap mı kullanır?', 'Hayır. Hesap menüsü üzerinden casino, canlı casino, spor bahisleri ve finans alanlarına aynı üyelikle geçilir.']
    ]
  },
  'guncel-giris': {
    sections: [
      ['Giriş sorunu için hızlı kontrol', 'Sayfa açılmıyorsa bağlantıyı yeni sekmede dene, tarayıcı önbelleğini yenile ve özel DNS ya da reklam engelleyici kaynaklı yönlendirme sorununu kontrol et. Hesap şifresini değiştirmeden önce erişim adresinin doğru açıldığından emin ol.'],
      ['Şifre ve kullanıcı adı işlemleri', 'Giriş formundaki Şifremi Unuttum seçeneği görünüyorsa kayıtlı iletişim bilgisiyle sıfırlama akışını başlat. Kullanıcı adını tahmin ederek art arda denemek yerine hesap içi destek akışını kullan.'],
      ['Giriş sonrası kontrol listesi', 'Oturum açıldığında kullanıcı adı, bakiye, bonus durumu ve finans geçmişini kontrol et. Eski sekmede açık kalan bir kupon veya oyun oturumu varsa yeni işlemden önce sayfayı yenile.']
    ],
    faq: [
      ['Tarafbet giriş sayfası beyaz ekranda kalırsa ne yapılır?', 'Sekmeyi kapatıp güncel bağlantıyı yeniden aç, tarayıcı önbelleğini temizle ve farklı bir bağlantı türüyle tekrar dene.'],
      ['Güncel girişte yeni şifre gerekir mi?', 'Adres değişikliği şifre değişikliği gerektirmez. Mevcut hesap bilgileri kullanılmaya devam eder.']
    ]
  },
  'yeni-adres': {
    sections: [
      ['Eski bağlantı neden açılmaz', 'Erişim alanı değiştiğinde eski yer imi, geçmiş kaydı veya açık sekme artık çalışmayabilir. Yeni Adres sayfasındaki ana düğme üzerinden oturumu yeniden başlatmak gerekir.'],
      ['Sahte sayfayı ayırt etme', 'Açılan sayfada Tarafbet marka görünümünü, giriş formunu ve bağlantı hedefini birlikte kontrol et. Şifre isteyen ara sayfalar ile farklı marka adına yönlendiren bağlantıları kullanma.'],
      ['Yeni adresi kaydetme', 'Aktif erişim açıldıktan sonra sayfayı yer imlerine ekleyebilir veya telefon ana ekranına kısayol oluşturabilirsin. Eski kısayolu kaldırarak iki farklı adresin karışmasını önle.']
    ],
    faq: [
      ['Tarafbet yeni adres telefonda ve bilgisayarda aynı mı?', 'Ana erişim bağlantısı her iki cihazda da kullanılabilir, arayüz ekran genişliğine göre düzenlenir.'],
      ['Yeni adrese geçince geçmiş kuponlar görünür mü?', 'Aynı hesapla giriş yapıldığında hesap ve işlem geçmişi üyeliğe bağlı olarak açılır.']
    ]
  },
  'mobil': {
    sections: [
      ['Android ve iPhone erişimi', 'Tarafbet mobil sayfası güncel Chrome, Safari ve benzeri tarayıcılarda açılır. Ayrı uygulama doğrulanmadığı için bu sayfa indirme dosyası sunmaz ve mobil web akışını esas alır.'],
      ['Dikey ve yatay ekran kullanımı', 'Liste, finans ve hesap ekranlarında dikey görünüm daha pratiktir. Canlı casino masası veya geniş bahis marketinde yatay görünüm daha fazla alan gösterir.'],
      ['Mobil bağlantı ve hız', 'Oyun görselleri yavaş yükleniyorsa açık sekmeleri kapat, veri tasarrufu ayarını kontrol et ve sayfayı yenile. Kuponu onaylamadan önce oranın güncel kaldığını tekrar gör.']
    ],
    faq: [
      ['Tarafbet mobil giriş için APK gerekir mi?', 'Hayır. Doğrulanmış bir uygulama sunulmadığı için mobil tarayıcı erişimi kullanılır.'],
      ['Telefon ana ekranına Tarafbet kısayolu eklenir mi?', 'Evet. Tarayıcı paylaşım veya menü alanındaki Ana Ekrana Ekle seçeneği kullanılabilir.']
    ]
  },
  'uyelik': {
    sections: [
      ['Hesap bilgilerinin uyumu', 'Ad, iletişim bilgisi ve ödeme hesabı aynı kullanıcıya ait olmalıdır. Finans aşamasında hesap sahibi uyuşmazlığı ek doğrulama veya işlem gecikmesi doğurabilir.'],
      ['Profil ve iletişim ayarları', 'Üyelik açıldıktan sonra profil bölümünde telefon ve e-posta alanlarını kontrol et. Değişiklik gerekiyorsa finans işlemi başlatmadan önce hesap içi destekten güncelleme akışını aç.'],
      ['Üyelik ile kayıt farkı', 'Kayıt sayfası formun nasıl tamamlanacağını anlatır. Üyelik sayfası ise aktif hesabın doğrulama, profil, ilk giriş ve hesap yönetimi adımlarını kapsar.']
    ],
    faq: [
      ['Tarafbet üyelik bilgileri sonradan değiştirilebilir mi?', 'Değiştirilebilen alanlar profil ekranında görünür, kilitli alanlar için hesap içi destek gerekir.'],
      ['Üyelik açarken para yatırmak gerekir mi?', 'Kayıt formu ile finans işlemi ayrı adımlardır. Yatırım seçilen ödeme yöntemi üzerinden daha sonra yapılır.']
    ]
  },
  'kayit': {
    sections: [
      ['Kayıt formunda hata çözümü', 'Telefon veya e-posta alanı kabul edilmiyorsa ülke kodunu, boşlukları ve yazım biçimini kontrol et. Aynı iletişim bilgisiyle daha önce hesap açıldıysa yeni form yerine giriş veya hesap kurtarma adımını kullan.'],
      ['Güçlü şifre oluşturma', 'Şifreyi başka hizmetlerde kullandığın seçeneklerden ayır. Büyük ve küçük harf, sayı ve özel karakter desteği varsa form kurallarına uygun bir kombinasyon seç.'],
      ['Kayıt sonrası ilk ayarlar', 'İlk oturumda profil, hesap para birimi, iletişim bilgileri ve finans menüsünü kontrol et. Kampanya seçimi gerekiyorsa para yatırmadan önce bonus koşullarını aç.']
    ],
    faq: [
      ['Tarafbet kayıt formu neden kabul edilmiyor?', 'Eksik alan, hatalı telefon biçimi veya daha önce kullanılan iletişim bilgisi formu durdurabilir. Ekrandaki alan uyarısını kontrol et.'],
      ['Kayıt sırasında bonus seçilir mi?', 'Kampanya seçimi sunuluyorsa koşulları yatırım işleminden önce açıp incelemek gerekir.']
    ]
  },
  'bonuslar': {
    sections: [
      ['Çevrim şartını okuma', 'Çevrim oranının yalnızca bonus tutarına mı yoksa bonus ile yatırıma birlikte mi uygulandığını kontrol et. Geçerli oran aralığı ve katkı yüzdesi çevrimi doğrudan etkiler.'],
      ['Geçerli oyunlar ve marketler', 'Casino kampanyalarında bazı oyunlar çevrime düşük katkı verebilir veya hiç sayılmayabilir. Spor bonusunda minimum oran, kupon türü ve karşılaşma sayısı şartı bulunabilir.'],
      ['Süre ve çekim sınırı', 'Bonusun bitiş süresini, maksimum kazanç veya çekim sınırını ve iptal işleminin bakiyeye etkisini kontrol et. GETMY500 kodu teklifin kapısını açar, diğer koşullar hesapta görünen güncel kampanya metnine göre uygulanır.']
    ],
    faq: [
      ['Tarafbet bonus çevrimi nasıl hesaplanır?', 'Kampanya ayrıntısındaki çevrim oranı, uygulandığı bakiye ve oyun katkı oranı birlikte değerlendirilir.'],
      ['Bonus aktifken para çekilebilir mi?', 'Çekim uygunluğu aktif kampanyanın çevrim ve bakiye kurallarına göre hesap ekranında gösterilir.']
    ]
  },
  'bonus-kodu': {
    sections: [
      ['Promosyon alanını doğru doldurma', 'Kodu boşluk bırakmadan GETMY500 biçiminde yaz. Form teklifi hemen göstermiyorsa sayfayı yenileyip kodu tekrar göndermek yerine promosyon alanındaki uyarıyı oku ve kampanya menüsünde teklifin durumunu kontrol et.'],
      ['Bonus bakiyesi ve nakit bakiye', 'Aktivasyon sonrasında bonus bakiyesi ile yatırılan nakit bakiye ayrı satırlarda görünebilir. Oyun veya bahis seçmeden önce hangi bakiyenin kullanıldığını ve çevrim sayacının hangi işlemleri dahil ettiğini kampanya ayrıntısından doğrula.']
    ],
    faq: [
      ['GETMY500 büyük harfle mi yazılmalı?', 'Kodu ekranda paylaşıldığı biçimiyle GETMY500 olarak yazmak en açık kullanım yöntemidir.'],
      ['Kod kabul edilmezse ne yapılır?', 'Yatırım göndermeden önce kampanya alanındaki hata metnini kontrol et ve hesap içi destekten teklif uygunluğunu sor.']
    ]
  },
  'casino': {
    sections: [
      ['Oyun sağlayıcısı ve arama', 'Oyun adını biliyorsan lobi aramasını, belirli bir stüdyo arıyorsan sağlayıcı filtresini kullan. Aynı seriye ait farklı sürümleri oyun adı ve üretici bilgisiyle ayırt et.'],
      ['Slot ve jackpot kategorileri', 'Klasik slotlar, megaways türleri, bonus satın alma özelliği olan oyunlar ve jackpot seçenekleri farklı mekaniklerle çalışır. Oyun bilgi ekranında ödeme çizgisi, özellikler ve bahis aralığı bulunur.'],
      ['Oyun geçmişi ve favoriler', 'Sık kullandığın oyunları favorilere eklemek tekrar aramayı azaltır. Tamamlanan turlar, bahis tutarı ve sonuç bilgisi hesap geçmişinden kontrol edilir.']
    ],
    faq: [
      ['Tarafbet casino bölümünde oyun araması var mı?', 'Lobi arama alanı oyun adına göre sonuçları daraltır, sağlayıcı filtresi stüdyo bazında liste oluşturur.'],
      ['Favori casino oyunları nerede görülür?', 'Hesap açıkken favoriye eklenen oyunlar lobi içindeki Favoriler alanında toplanır.']
    ]
  },
  'canli-casino': {
    sections: [
      ['Rulet, blackjack ve baccarat', 'Canlı casino ana kategorileri masa adı, dil, stüdyo ve limit bilgisiyle listelenir. Aynı oyunun farklı masalarında bahis aralığı ve masa hızı değişebilir.'],
      ['Masa doluluk ve limit bilgisi', 'Masaya girmeden önce açık koltuk, minimum bahis ve maksimum limit alanlarını kontrol et. Bazı oyunlarda fiziksel koltuk seçimi gerekmez ve bahis süresi sayaçla gösterilir.'],
      ['Bağlantı kesintisi ve tur sonucu', 'Yayın görüntüsü donarsa arka arkaya yeni bahis göndermek yerine tur kimliğini ve oyun geçmişini kontrol et. Sonuç sunucu tarafındaki tamamlanan tur kaydına göre hesaba işlenir.']
    ],
    faq: [
      ['Tarafbet canlı casino masa limiti nerede yazar?', 'Masa kartında veya oyun açılış ekranında minimum ve maksimum bahis değerleri gösterilir.'],
      ['Canlı casino oyunu donarsa geçmiş nereden kontrol edilir?', 'Hesap menüsündeki oyun geçmişinde ilgili tur ve sonuç kaydı aranır.']
    ]
  },
  'spor-bahisleri': {
    sections: [
      ['Maç sonucu ve gol marketleri', 'Futbolda maç sonucu, çifte şans, toplam gol, karşılıklı gol, handikap, korner ve kart marketleri karşılaşma altında gruplanır. Uzatma ve penaltı kapsamı market kuralına göre değişebilir.'],
      ['Tekli, kombine ve sistem kuponu', 'Tekli kupon bir seçimi, kombine kupon birden fazla seçimi aynı kuponda toplar. Sistem seçeneği görünüyorsa farklı kombinasyonların toplam bedeli kupon panelinde hesaplanır.'],
      ['Bahis sonucu ve kupon geçmişi', 'Tamamlanan seçimlerin sonucu kupon geçmişinde kazandı, kaybetti, iade veya bekliyor durumuyla gösterilir. İptal edilen etkinliklerde uygulanacak oran ilgili spor kuralına göre işlenir.']
    ],
    faq: [
      ['Tarafbet futbol bahislerinde hangi marketler bulunur?', 'Maç sonucu, toplam gol, karşılıklı gol, handikap, korner, kart ve oyuncu marketleri karşılaşmaya göre açılabilir.'],
      ['İptal edilen maç kuponu nasıl sonuçlanır?', 'Sonuçlandırma süresi ve uygulanacak iade oranı ilgili spor ile market kuralına göre kupon geçmişine işlenir.']
    ]
  },
  'canli-bahis': {
    sections: [
      ['Skor, süre ve istatistik alanı', 'Canlı karşılaşma kartında skor, oyun süresi ve açık marketler birlikte izlenir. Yayın veya skor verisi gecikirse kupon onayındaki market durumu esas alınır.'],
      ['Gol ve kritik anlarda market durumu', 'Gol, kart, mola veya video incelemesi sırasında market geçici olarak askıya alınabilir. Yeniden açıldığında oran ile çizgi güncellenebileceği için eski seçimi tekrar kontrol et.'],
      ['Canlı kuponun sonuçlanması', 'Onaylanan seçim kupon geçmişine düşer. Karşılaşma bittiğinde resmi veri akışı tamamlanana kadar sonuç kısa süre beklemede kalabilir.']
    ],
    faq: [
      ['Canlı bahis oranı kuponda neden değişir?', 'Karşılaşma akışı değiştikçe oran yeniden hesaplanır ve onay öncesinde son değer kupon panelinde gösterilir.'],
      ['Canlı maç bittiği halde kupon neden bekliyor?', 'Resmi sonuç ve market verisi doğrulanana kadar kupon geçici olarak beklemede görünebilir.']
    ]
  },
  'para-yatirma': {
    sections: [
      ['Banka transferi ve hızlı ödeme', 'Banka veya hızlı transfer seçildiğinde ekrandaki alıcı, açıklama ve tutar bilgisini işlem anında kullan. Daha önce kaydedilen banka bilgisini güncel finans ekranıyla eşleştirmeden gönderim yapma.'],
      ['E-cüzdan ve kripto yatırımı', 'E-cüzdanda hesap sahibi bilgisini, kriptoda ağ ile adresi kontrol et. Farklı ağ seçimi veya eksik açıklama işlemin otomatik eşleşmesini engelleyebilir.'],
      ['Bekleyen yatırım işlemi', 'Finans geçmişindeki durum güncellenmediyse yeni yatırım oluşturmadan önce işlem referansını kontrol et. Destek görüşmesinde tutar, saat, yöntem ve referans kodunu tek mesajda ilet.']
    ],
    faq: [
      ['Para yatırırken açıklama alanı gerekli mi?', 'Ekranda özel açıklama veya referans gösteriliyorsa banka işlemine aynı biçimde eklenmelidir.'],
      ['Kripto yatırımında hangi ağ seçilir?', 'Finans ekranında seçilen para birimi için gösterilen ağ ile gönderici cüzdandaki ağ birebir eşleşmelidir.']
    ]
  },
  'para-cekme': {
    sections: [
      ['Çekim öncesi bakiye kontrolü', 'Nakit ve bonus bakiyesini ayrı kontrol et. Aktif çevrim veya açık kupon bulunuyorsa çekilebilir tutar toplam bakiyeden farklı görünebilir.'],
      ['Belge ve hesap doğrulaması', 'İlk çekim veya hesap bilgisi değişikliğinde kimlik ya da ödeme hesabı doğrulaması istenebilir. İstenen alanları tek talep içinde tamamlamak tekrar incelemeyi azaltır.'],
      ['Reddedilen çekim talebi', 'Talep reddedildiyse finans geçmişindeki açıklamayı kontrol et. Hesap sahibi uyuşmazlığı, limit, aktif bonus veya eksik doğrulama gibi nedenler düzeltilmeden aynı talebi tekrar göndermek sonucu değiştirmez.']
    ],
    faq: [
      ['Tarafbet çekilebilir bakiye neden toplam bakiyeden düşük?', 'Bonus çevrimi, açık kupon veya henüz sonuçlanmamış işlem çekilebilir tutarı etkileyebilir.'],
      ['Reddedilen para çekme talebi tekrar gönderilir mi?', 'Önce finans geçmişindeki neden düzeltilir, ardından uygun yöntem ve tutarla yeni talep oluşturulur.']
    ]
  },
  'odeme-yontemleri': {
    sections: [
      ['Yöntemleri karşılaştırma', 'Seçim yaparken yalnızca hıza değil minimum tutar, maksimum limit, hesap doğrulaması ve çekimde aynı yöntemin kullanılıp kullanılmadığına da bak.'],
      ['İşlem ücretleri ve kur farkı', 'Varsa işlem ücreti veya kripto ağ maliyeti onay ekranında görülür. TRY dışındaki para birimlerinde cüzdan veya banka tarafındaki dönüşüm kuru nihai tutarı etkileyebilir.'],
      ['Hesaba özel kullanılabilirlik', 'Finans menüsündeki liste cihazdan değil hesaptan gelen güncel seçenekleri gösterir. Geçici olarak görünmeyen yöntemin yerine ekranda aktif olan alternatif seçilir.']
    ],
    faq: [
      ['Aynı ödeme yöntemi yatırma ve çekmede kullanılır mı?', 'Yöntemin iki işlem yönünü destekleyip desteklemediği finans kartında gösterilir.'],
      ['Ödeme yönteminde isim uyuşmazlığı sorun olur mu?', 'Hesap sahibi ile ödeme hesabı uyuşmazlığı doğrulama veya işlem reddine yol açabilir.']
    ]
  },
  'sikayet': {
    sections: [
      ['Talep metnini hazırlama', 'Sorunu tek cümlede özetle, ardından tarih, saat, tutar, yöntem ve işlem referansını ekle. Birbiriyle ilgisiz konuları aynı görüşmede birleştirme.'],
      ['Ekran görüntüsü ve işlem kaydı', 'Hata mesajı, kupon numarası veya finans durumu görünüyorsa okunabilir ekran görüntüsü al. Şifre, kartın tamamı ve doğrulama kodu gibi giriş bilgilerini görsele dahil etme.'],
      ['Çözüm takibi', 'Destek yanıtındaki talep numarasını sakla ve yeni bilgi geldikçe aynı görüşmeye ekle. Durum değişmeden art arda farklı talepler açmak kayıtların ayrılmasına neden olur.']
    ],
    faq: [
      ['Tarafbet şikayet talebinde ekran görüntüsü eklenir mi?', 'İşlem durumu veya hata mesajı görünüyorsa okunabilir görsel çözüm sürecini hızlandırabilir.'],
      ['Şikayet için işlem numarası nerede bulunur?', 'Kupon geçmişi veya finans geçmişindeki ilgili satırda referans ve zaman bilgisi yer alır.']
    ]
  },
  'destek': {
    sections: [
      ['Doğru destek kategorisi', 'Giriş, üyelik, bonus, para yatırma, para çekme, kupon ve teknik hata başlıklarından soruna en yakın olanı seç. Doğru kategori talebin ilgili ekrana ve işlem kaydına daha hızlı bağlanmasını sağlar.'],
      ['Destek görüşmesini takip etme', 'Temsilci ek bilgi isterse aynı pencere veya talep üzerinden yanıt ver. Görüşme kapanmadan önce talep numarası ve verilen işlem adımını kaydet.'],
      ['Teknik hata bilgileri', 'Cihaz modeli, işletim sistemi, tarayıcı adı, sayfa bölümü ve görünen hata metnini belirt. Sorun yalnızca Wi-Fi veya mobil veride oluşuyorsa bunu da ekle.']
    ],
    faq: [
      ['Canlı destek için hesaba giriş gerekir mi?', 'Hesap ve finans kayıtlarının incelenmesi için oturum açılması gerekebilir. Giriş sorunu varsa erişim kategorisi kullanılır.'],
      ['Destek talebi için hangi teknik bilgiler gerekir?', 'Cihaz, işletim sistemi, tarayıcı, bağlantı türü, hata metni ve sorunun oluştuğu bölüm yeterli başlangıç bilgisidir.']
    ]
  }
};

const deepDives = {
  'guncel-giris': [
    ['Masaüstü giriş akışı', 'Bilgisayarda açılan giriş ekranında adres çubuğu, marka alanı ve form aynı anda görülebilir. Kayıtlı şifre yöneticisi eski adresi işaret ediyorsa otomatik doldurma bilgisini doğrudan kabul etme. Kullanıcı adını kontrol ettikten sonra oturumu aç, hesap menüsü ve bakiye yüklendiğinde bağlantının tamamlandığını doğrula. Tarayıcıda birden fazla eski giriş sekmesi açıksa işlem karışmasını önlemek için bunları kapat.'],
    ['Hesap erişimi ile kayıt ayrımı', 'Giriş Yap mevcut üyelik içindir, Kayıt Ol yeni hesap formunu açar. Adres değiştiğinde yeniden üyelik oluşturmak gerekmez. Aynı telefon veya e-posta ile ikinci kayıt denemek yerine mevcut hesabın şifre yenileme seçeneği kullanılmalıdır. Böylece bakiye, kupon geçmişi, favoriler ve finans kayıtları aynı üyelik altında kalır.']
  ],
  'yeni-adres': [
    ['Adres değişikliğinde yapılmaması gerekenler', 'Arama sonuçlarındaki her sayfaya kullanıcı bilgisi yazmak, bilinmeyen dosya indirmek veya farklı marka adıyla açılan forma devam etmek doğru değildir. Yeni adres aramasının amacı yeni hesap kurmak değil, mevcut hesabın aktif erişim noktasını bulmaktır. Bu nedenle girişten önce bağlantı hedefini, marka görünümünü ve hesap formunu aynı ekranda kontrol et.'],
    ['Yer imi ve mobil kısayol yönetimi', 'Yeni erişim açıldıktan sonra çalışan sayfayı yer imlerine ekle ve eski kaydı kaldır. Telefonda ana ekran kısayolu kullanıyorsan simgeyi güncel bağlantıyla yeniden oluştur. Aynı isimli iki kısayol bırakmak yanlış sekmeye dönmene neden olabilir. Düzenli kullanım için bu sitedeki Yeni Adres sayfasını sabit referans olarak kaydetmek daha anlaşılır bir akış sağlar.']
  ],
  'mobil': [
    ['Mobil menü ve sabit işlemler', 'Küçük ekranda ana menü tek düğmeyle açılır, giriş ve kayıt işlemleri ise sayfanın altındaki sabit panelde görünür kalır. Casino, spor bahisleri ve ödeme içeriklerine geçerken tarayıcının geri düğmesi yerine site içi bağlantıları kullanmak gezinme durumunu korur. Uzun tablolarda yatay kaydırma yerine her yöntem ayrı kart olarak gösterilir.'],
    ['Mobil sorun çözme adımları', 'Sayfa eksik yüklenirse önce ekranı yenile, ardından Wi-Fi ile mobil veri arasında geçiş yap. Tarayıcı önbelleği eski görselleri tutuyorsa site verisini temizlemek yardımcı olabilir. Canlı oyun veya kupon sırasında bağlantı değiştirirken yeni işlem göndermeden önce hesap geçmişini kontrol et. Aynı butona arka arkaya basmak yinelenen talep oluşturabilir.']
  ],
  'uyelik': [
    ['Üyelik bilgileri neden doğru olmalı?', 'Profildeki ad, telefon, e-posta ve ödeme hesabı aynı kullanıcıya ait olmalıdır. İletişim bilgileri şifre yenileme ve hesap doğrulama adımlarında kullanılır. Finans ekranındaki hesap sahibi uyuşmazlığı ek inceleme gerektirebilir. Formu tamamlamadan önce yazım hatalarını düzeltmek daha sonra destek üzerinden değişiklik istemekten daha hızlıdır.'],
    ['Üyelik sonrası hesap haritası', 'İlk girişte profil, bonus, finans, kupon geçmişi, oyun geçmişi ve destek alanlarını ayrı ayrı tanı. Para yatırmadan önce hesap para birimini ve kampanya seçimini kontrol et. Casino ile spor bahisleri aynı üyelikten açılır, ancak işlem kayıtları kendi geçmiş bölümlerinde tutulur. Her başlık için bu sitedeki ilgili sayfaya geçebilirsin.']
  ],
  'kayit': [
    ['Kayıt öncesi hazırlık', 'Formu açmadan önce erişebildiğin güncel telefon numarasını ve e-posta adresini hazırla. Geçici iletişim bilgileri şifre yenileme ve hesap doğrulama sırasında sorun çıkarabilir. Formda ülke kodu veya para birimi seçimi bulunuyorsa Türkiye ve TRY tercihlerini ekrandaki seçeneklerden kontrol et.'],
    ['Kayıt tamamlandıktan sonra', 'Başarılı kayıt mesajı görüldüğünde aynı sekmeden ilk oturumu aç. Profildeki iletişim alanlarını ve kullanıcı adını kontrol et, ardından bonuslar ile finans menüsünü incele. Kampanya aktivasyonu gerekiyorsa para yatırma işleminden önce koşulları oku. Kayıt formunu ikinci kez göndermek yerine oluşturulan hesabı kullan.']
  ],
  'bonuslar': [
    ['Bonus türlerini karşılaştırma', 'Yeni üyelik, ilk yatırım, yeniden yatırım, kayıp iadesi, ücretsiz dönüş veya spor kuponu kampanyaları farklı kurallarla çalışabilir. Aynı yüzdeyi sunan iki kampanya bile çevrim hesabı ve geçerli ürün bakımından aynı değildir. Karşılaştırmayı kampanya adı üzerinden değil, minimum işlem, çevrim tabanı, süre, katkı oranı ve çekim sınırı üzerinden yap.'],
    ['Kampanya durumunu izleme', 'Aktivasyondan sonra bonus bakiyesi ile nakit bakiyeyi ayrı izle. Çevrim ilerlemesi için hesapta özel bir sayaç varsa tamamlanma oranını buradan kontrol et. Kampanya süresi dolmadan para çekme veya bonus iptali yapmak bakiyeyi etkileyebilir. Emin olmadığın durumda işlem başlatmadan kampanya ayrıntısını ve destek yanıtını aynı oturumda doğrula.']
  ],
  'bonus-kodu': [
    ['GETMY500 aktivasyon kontrolü', 'Promosyon kodu girildikten sonra kampanya adında ilk yatırım ve yüzde 500 ifadelerinin birlikte göründüğünü kontrol et. Kod alanını doldurmak tek başına aktivasyonun tamamlandığı anlamına gelmeyebilir. Seçim düğmesi veya onay kutusu sunuluyorsa yatırımı göndermeden önce bu adımı tamamla.'],
    ['İlk yatırım öncesi kısa kontrol listesi', 'Hesap doğrulaması tamamlanmış mı, GETMY500 kodu seçili mi, minimum yatırım karşılanıyor mu, ödeme yöntemi kampanyaya dahil mi ve çevrim süresi ne zaman başlıyor sorularını tek ekranda kontrol et. Böylece kampanya ile finans işlemi aynı sırada ilerler.']
  ],
  'casino': [
    ['Casino lobisinde doğru oyunu bulma', 'Casino ana sayfası çok sayıda oyun kartı gösterebilir. Oyun adına göre arama, sağlayıcı filtresi, yeni oyunlar ve favoriler aynı listeyi farklı ölçütlerle daraltır. Arama sonucunda aynı isme benzeyen sürümler çıktığında stüdyo bilgisini ve oyun görselini birlikte kontrol et. Canlı krupiye masaları için ayrı Canlı Casino sayfasına geç.'],
    ['Oyun oturumu ve geçmiş', 'Oyunu açmadan önce bakiye türünü, bahis aralığını ve varsa bonus katkısını kontrol et. Bağlantı kesilirse aynı turu yeniden başlatmaya çalışma. Hesap menüsündeki oyun geçmişi tamamlanan turun saatini, tutarını ve sonucunu gösterir. Bir uyuşmazlıkta oyun adı ile tur kimliğini destek talebine eklemek incelemeyi kolaylaştırır.']
  ],
  'canli-casino': [
    ['Canlı stüdyo seçimi', 'Aynı oyun adı farklı stüdyolarda, dillerde ve masa limitlerinde sunulabilir. Masa kartındaki sağlayıcı, dil, minimum bahis ve masa hızını birlikte değerlendir. Mobilde yayın kalitesini bağlantına göre ayarla. Görüntü gecikmesi ile bahis süresini karıştırmamak için ekrandaki resmi sayacı esas al.'],
    ['Tur kimliği ve sonuç kontrolü', 'Canlı masada her el veya dönüş ayrı tur kimliğiyle kaydedilir. Yayın kesildiğinde ekranda görülen son kare kesin sonuç olmayabilir. Oyuna yeniden bağlandıktan sonra geçmiş bölümündeki tur kaydını kontrol et. Destek görüşmesinde masa adı, tur kimliği, saat ve bahis tutarını tek mesajda ilet.']
  ],
  'spor-bahisleri': [
    ['Lig ve karşılaşma filtreleri', 'Spor menüsünden branşı seçtikten sonra ülke, lig ve tarih filtreleriyle programı daralt. Takım adı benzer olan genç, kadın veya rezerv karşılaşmalarını başlıktan ayırt et. Maç saati ile etkinlik numarasını kupon panelindeki satırla eşleştirmek yanlış karşılaşma seçimini önler.'],
    ['Market kurallarını okumak', 'Maç sonucu, toplam gol, handikap, korner, kart ve oyuncu marketlerinin sonuçlandırma kapsamı farklıdır. Uzatma, penaltı veya ertelenme durumunun dahil olup olmadığı market kuralında belirtilir. Kuponu göndermeden önce yalnızca orana değil, seçimin tam adına ve dönem bilgisine de bak.']
  ],
  'canli-bahis': [
    ['Canlı veri ile yayın arasındaki fark', 'Skor tablosu, istatistik akışı ve video yayını aynı hızda güncellenmeyebilir. Bahis marketi platformun resmi veri akışına göre açılır veya kapanır. Ekrandaki yayın birkaç saniye geride olsa bile kupon onayında görünen skor, süre ve market durumu işlem için esas alınır.'],
    ['Hızlı seçimlerde hata önleme', 'Canlı listede etkinlikler hızla değiştiği için eski sekmede kalan oranı doğrudan onaylama. Market adına, takım sırasına ve canlı skora yeniden bak. Oran değişikliği bildirimi çıkarsa yeni değeri okuyup karar ver. Kupon gönderildikten sonra aynı seçimi tekrar eklemeden önce kupon geçmişini kontrol et.']
  ],
  'para-yatirma': [
    ['Yatırım talebi oluşturmadan önce', 'Finans menüsünde yalnızca hesabına açık yöntemler görünür. Yöntemi seçtikten sonra minimum ve maksimum tutarı, alıcı bilgisini, açıklama kodunu ve işlem süresini ekrandan kontrol et. Daha önceki yatırımda kullanılan hesap bilgisi değişmiş olabilir, bu nedenle eski banka kaydını otomatik olarak tekrar kullanma.'],
    ['İşlem kanıtı ve takip', 'Banka, cüzdan veya kripto transferi tamamlandığında işlem referansını sakla. Finans geçmişinde kayıt oluşmadan aynı tutarı yeniden göndermek iki ayrı işlem yaratabilir. Bekleyen yatırım için destek kaydı açarken yöntem, tutar, saat, gönderici adı ve referans numarasını tek mesajda belirt, hassas giriş bilgilerini paylaşma.']
  ],
  'para-cekme': [
    ['Çekilebilir tutarı anlama', 'Hesapta görünen toplam bakiye ile çekilebilir bakiye aynı olmayabilir. Açık kupon, sonuç bekleyen oyun turu, aktif bonus veya tamamlanmamış çevrim kullanılabilir tutarı etkileyebilir. Talep oluşturmadan önce nakit ve bonus bakiyeyi ayır, varsa bekleyen işlemleri tamamla ve yöntemin alt limitini kontrol et.'],
    ['Çekim talebini izleme', 'Talep gönderildikten sonra finans geçmişindeki durumu takip et. Beklemede, onaylandı, tamamlandı veya reddedildi kayıtları farklı aşamaları gösterir. Reddedilen talebin açıklamasını düzeltmeden aynı bilgileri tekrar göndermek çözüm sağlamaz. Destek için talep numarası, yöntem, tutar ve saat bilgisini hazırla.']
  ],
  'odeme-yontemleri': [
    ['Yöntem seçerken dört kontrol', 'Bir ödeme yöntemini hızına göre seçmek yeterli değildir. Alt ve üst limit, işlem yönü, hesap sahibi doğrulaması ve olası ücret birlikte değerlendirilmelidir. Yatırımda görünen bir yöntemin çekimde de açık olduğu varsayılmamalı, her iki finans ekranı ayrı kontrol edilmelidir.'],
    ['Banka, cüzdan ve kripto farkı', 'Banka işlemlerinde alıcı ile açıklama, e-cüzdanda hesap kimliği, kriptoda ağ ile adres kritik bilgidir. Para birimi dönüşümü veya ağ maliyeti nihai tutarı etkileyebilir. İşlemi onaylamadan önce yöntem kartındaki güncel metni oku ve finans geçmişindeki referansı daha sonra kullanmak üzere sakla.']
  ],
  'sikayet': [
    ['Şikayet başlıklarını ayırma', 'Giriş, hesap doğrulama, bonus, kupon, oyun turu, para yatırma ve para çekme farklı kayıtlarla incelenir. Sorunun ana başlığını ilk cümlede belirt, ardından kronolojik bilgileri ekle. Birden fazla bağımsız işlemi tek metinde toplamak yerine her referansı açık biçimde ayır.'],
    ['Çözüm için gerekli kanıt', 'Okunabilir ekran görüntüsü, işlem veya kupon numarası, tarih, saat, tutar ve hata metni sorunun yeniden oluşturulmasını kolaylaştırır. Görselde şifre, doğrulama kodu, kartın tamamı veya kişisel belge gibi gizli bilgiler bulunmamalıdır. Yanıt geldikçe aynı talep numarası üzerinden ilerle.']
  ],
  'destek': [
    ['Destek mesajı nasıl yazılır?', 'İlk satırda sorunu ve ilgili bölümü belirt. Sonraki satırlarda kullanıcı adını paylaşmadan işlem referansı, tarih, saat, tutar, yöntem ve görünen hata metnini ekle. Temsilcinin sorusuna aynı görüşmede yanıt vermek kayıtların dağılmasını önler. Şifre ve tek kullanımlık doğrulama kodu mesaja yazılmaz.'],
    ['Teknik sorunu yeniden tanımlama', 'Cihaz modeli, işletim sistemi, tarayıcı, bağlantı türü ve sorunlu sayfa belirtilmelidir. Hata yalnızca mobil veride, Wi-Fi bağlantısında veya belirli ekran yönünde oluşuyorsa bunu da ekle. Sorunu anlatmadan önce sayfayı bir kez yenile ve aynı işlemi tekrar tekrar göndermekten kaçın.']
  ],
  'slot-oyunlari': [
    ['Slot seçimini daraltan ölçütler', 'Oyun adı dışında sağlayıcı, tema, mekanik, bahis aralığı ve özellik türü de seçimde kullanılabilir. Popüler listesi herkese aynı sonucu garanti etmez, yalnızca lobide öne çıkan oyunları gösterir. Kendi favori listen ve son oynananlar alanı daha hızlı bir kişisel gezinme sağlar.']
  ],
  'masa-oyunlari': [
    ['Kural ekranını neden açmalısın?', 'Aynı kategori içindeki iki masa farklı deste sayısı, bahis limiti, yan bahis veya sonuçlandırma kuralı kullanabilir. Oyun başlığının tanıdık olması kuralların aynı olduğu anlamına gelmez. İlk turdan önce yardım ve ödeme tablosunu açmak, özellikle hızlı sürümlerde yanlış seçim riskini azaltır.']
  ],
  'sanal-sporlar': [
    ['Gerçek spor ile sanal etkinliği ayırma', 'Sanal etkinlikler kısa sayaçlarla art arda sonuçlanır ve kendi lig adlarını kullanır. Gerçek maç programındaki takım adlarına benzeyen başlıklar görülebilir. Kupon satırında sanal spor etiketi, etkinlik numarası ve başlangıç saatini kontrol etmek iki ürünün karışmasını önler.']
  ],
  'bahis-kuponu': [
    ['Kupon onayından önce son kontrol', 'Karşılaşma adı, market, dönem, oran, kupon türü, toplam bedel ve olası dönüş aynı panelde okunmalıdır. Sistem kuponunda kolon sayısı ayrıca kontrol edilir. Canlı seçimlerde skor ve süre değişebileceği için onay düğmesine basmadan hemen önce satırları yeniden gözden geçir.']
  ],
  'hesap-guvenligi': [
    ['Şüpheli hareket kontrolü', 'Tanımadığın bir oturum, değişen profil bilgisi veya beklenmeyen finans hareketi fark edersen yeni işlem oluşturma. Şifreyi yenile, açık oturumları kapat ve işlem referanslarıyla hesap içi destek kaydı aç. Şifre veya doğrulama kodunu paylaşmadan yalnızca kayıtların incelenmesini iste.']
  ],
  'guvenilir-mi': [
    ['Tek bir iddia yerine kayıtları kontrol et', 'Güven değerlendirmesi yalnızca bir tanıtım cümlesine dayandırılmamalıdır. Erişim bağlantısı, hesap doğrulaması, kampanya koşulları, finans limitleri, işlem geçmişi ve destek kaydı ayrı ayrı incelenebilir alanlardır. Kararı doğrulanabilir hesap ekranlarına ve kendi işlem kayıtlarına göre vermek daha sağlıklı bir kontrol yöntemi oluşturur.']
  ]
};

for (const page of pages) {
  const extra = expansions[page.slug];
  if (extra) {
    page.sections.push(...extra.sections);
    page.faq.push(...extra.faq);
  }
  const depth = deepDives[page.slug];
  if (depth) page.sections.push(...depth);
}

const nav = [
  ['Güncel Giriş', '/guncel-giris/'],
  ['Casino', '/casino/'],
  ['Slotlar', '/slot-oyunlari/'],
  ['Spor Bahisleri', '/spor-bahisleri/'],
  ['Bonuslar', '/bonuslar/'],
  ['Ödemeler', '/odeme-yontemleri/']
];

const linkGrid = [
  ['Güncel Giriş', '/guncel-giris/', 'Aktif erişim ve hesap girişi'],
  ['Yeni Adres', '/yeni-adres/', 'Adres değişikliği ve bağlantı kontrolü'],
  ['Mobil', '/mobil/', 'Telefon ve mobil tarayıcı kullanımı'],
  ['Üyelik', '/uyelik/', 'Hesap bilgileri ve doğrulama'],
  ['Kayıt Ol', '/kayit/', 'Yeni hesap açma adımları'],
  ['Bonuslar', '/bonuslar/', 'Güncel kampanya koşulları'],
  ['Bonus Kodu', '/bonus-kodu/', 'GETMY500 ve ilk yatırıma yüzde 500'],
  ['Casino', '/casino/', 'Slotlar ve masa oyunları'],
  ['Slot Oyunları', '/slot-oyunlari/', 'Oyun arama, sağlayıcı ve özellikler'],
  ['Masa Oyunları', '/masa-oyunlari/', 'Rulet, blackjack, baccarat ve poker'],
  ['Canlı Casino', '/canli-casino/', 'Canlı krupiye masaları'],
  ['Spor Bahisleri', '/spor-bahisleri/', 'Ligler, marketler ve kupon'],
  ['Canlı Bahis', '/canli-bahis/', 'Anlık oranlar ve maç akışı'],
  ['Sanal Sporlar', '/sanal-sporlar/', 'Kısa etkinlikler ve marketler'],
  ['Bahis Kuponu', '/bahis-kuponu/', 'Tekli, kombine ve sistem kuponu'],
  ['Para Yatırma', '/para-yatirma/', 'Yatırım yöntemleri ve takip'],
  ['Para Çekme', '/para-cekme/', 'Çekim talebi ve durum kontrolü'],
  ['Ödeme Yöntemleri', '/odeme-yontemleri/', 'Finans seçeneklerinin tamamı'],
  ['Hesap Güvenliği', '/hesap-guvenligi/', 'Şifre, doğrulama ve oturum kontrolü'],
  ['Güvenilir mi?', '/guvenilir-mi/', 'Bağlantı ve işlem kontrol listesi'],
  ['Şikayet', '/sikayet/', 'Sorun sınıflandırma ve çözüm'],
  ['Destek', '/destek/', 'Canlı yardım akışı']
];

function esc(value) {
  return String(value).replace(/[&<>\"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
}

function breadcrumb(page) {
  const items = [{name: 'Ana Sayfa', url: site + '/'}];
  if (page.slug) items.push({name: page.h1, url: `${site}/${page.slug}/`});
  return items;
}

function schemas(page) {
  const crumb = breadcrumb(page).map((x, i) => ({'@type':'ListItem', position:i + 1, name:x.name, item:x.url}));
  const faq = page.faq.map(([name, text]) => ({'@type':'Question', name, acceptedAnswer:{'@type':'Answer', text}}));
  const data = [
    {'@context':'https://schema.org','@type':'WebSite', name:'Tarafbet', url:site, inLanguage:'tr-TR'},
    {'@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:crumb},
    page.home
      ? {'@context':'https://schema.org','@type':'WebPage', name:page.h1, description:page.description, inLanguage:'tr-TR', url:site, primaryImageOfPage:`${site}/assets/og-tarafbet-v4.jpg`}
      : {'@context':'https://schema.org','@type':'Article', headline:page.h1, description:page.description, inLanguage:'tr-TR', dateModified:'2026-10-26', mainEntityOfPage:`${site}/${page.slug ? page.slug + '/' : ''}`, image:`${site}/assets/og-tarafbet-v4.jpg`},
    {'@context':'https://schema.org','@type':'FAQPage', mainEntity:faq}
  ];
  if (page.home) {
    data.push(
      {'@context':'https://schema.org','@type':'ImageObject', name:'Tarafbet mobil ana sayfa arayüzü', contentUrl:`${site}/assets/tarafbet-mobil-ana-sayfa-giris.webp`, description:'Tarafbet mobil giriş, spor bahisleri ve casino ana sayfa arayüzü.'},
      {'@context':'https://schema.org','@type':'ImageObject', name:'Tarafbet casino ve canlı casino mobil arayüzü', contentUrl:`${site}/assets/tarafbet-casino-slot-canli-casino-mobil.webp`, description:'Tarafbet slot oyunları, canlı casino ve tüm oyunlar mobil lobi arayüzü.'},
      {'@context':'https://schema.org','@type':'ImageObject', name:'Tarafbet yüzde 500 bonus bannerı', contentUrl:`${site}/assets/tarafbet-500-bonus-promokod-getmy500.webp`, description:'GETMY500 promosyon koduyla ilk yatırıma yüzde 500 Tarafbet bonus teklifi.'}
    );
  }
  return data.map(x => `<script type="application/ld+json">${JSON.stringify(x)}</script>`).join('\n');
}

function header() {
  return `<header class="site-header">
    <a class="brand" href="/" aria-label="Tarafbet ana sayfa"><img src="/assets/logo-transparent-exact-v5.png" width="601" height="98" alt="Tarafbet"></a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav">Menü</button>
    <nav id="primary-nav" class="primary-nav" aria-label="Ana menü">${nav.map(([name,url]) => `<a href="${url}">${name}</a>`).join('')}</nav>
    <div class="header-actions"><span class="locale">TR Türkiye</span><a class="button button-ghost" href="${affiliate}" rel="nofollow sponsored">Giriş Yap</a><a class="button" href="${affiliate}" rel="nofollow sponsored">Kayıt Ol</a></div>
  </header>`;
}

function cta(title = 'Tarafbet hesabını aç') {
  return `<section class="cta-band"><div><p class="eyebrow">Hızlı erişim</p><h2>${esc(title)}</h2><p>Giriş ve kayıt işlemlerini tek bağlantı üzerinden devam ettir.</p></div><div class="cta-actions"><a class="button button-ghost" href="${affiliate}" rel="nofollow sponsored">Giriş Yap</a><a class="button" href="${affiliate}" rel="nofollow sponsored">Kayıt Ol</a></div></section>`;
}

function tableHtml(table) {
  if (!table) return '';
  const [head, ...rows] = table;
  return `<div class="table-wrap" id="odeme-karsilastirma"><table><thead><tr>${head.map(x=>`<th>${esc(x)}</th>`).join('')}</tr></thead><tbody>${rows.map(row=>`<tr>${row.map((x,column)=>`<td data-label="${esc(head[column])}">${esc(x)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}

function productShowcase() {
  return `<section class="section product-showcase" id="urun-ekrani"><div class="product-copy"><p class="eyebrow">Gerçek mobil arayüz</p><h2>Tarafbet mobil ana sayfa ve casino lobisi</h2><p>İlk ekran bakiye, kampanya, futbol oranları ve casino kısayollarını; ikinci ekran slot, canlı casino ve tüm oyunlar listelerini gösterir. Görseller doğal ekran oranında sunulur, gerilmez ve her biri tanımlı Tarafbet erişimine açılır.</p><div class="inline-links"><a href="/mobil/">Mobil erişimi incele</a><a href="/slot-oyunlari/">Slot seçeneklerini aç</a><a href="/canli-casino/">Canlı casino</a></div></div><div class="interface-gallery"><a class="device-shot" href="${affiliate}" rel="nofollow sponsored" aria-label="Tarafbet mobil ana sayfa arayüzünü aç"><img src="/assets/tarafbet-mobil-ana-sayfa-giris.webp" width="1286" height="2618" loading="lazy" alt="Tarafbet mobil ana sayfa giriş, spor bahisleri ve casino arayüzü"></a><a class="device-shot" href="${affiliate}" rel="nofollow sponsored" aria-label="Tarafbet mobil casino arayüzünü aç"><img src="/assets/tarafbet-casino-slot-canli-casino-mobil.webp" width="1320" height="2511" loading="lazy" alt="Tarafbet mobil casino, slot oyunları ve canlı casino arayüzü"></a></div></section>`;
}

function bonusBanner() {
  return `<section class="section bonus-section" id="getmy500"><div class="section-head"><p class="eyebrow">İlk yatırım kampanyası</p><h2>GETMY500 ile yüzde 500 bonus</h2><p>Promosyon kodunu kayıt veya kampanya alanına gir, teklifin seçildiğini kontrol et ve ilk yatırımından önce güncel çevrim koşullarını oku.</p></div><div class="bonus-banner-wrap"><a class="bonus-banner" href="${affiliate}" rel="nofollow sponsored" aria-label="GETMY500 promosyon koduyla Tarafbet yüzde 500 bonusunu aç"><img class="bonus-bg" src="/assets/tarafbet-500-bonus-promokod-getmy500.webp" width="1672" height="941" loading="lazy" alt="Tarafbet GETMY500 promosyon kodu ilk yatırıma yüzde 500 bonus bannerı"><span class="bonus-overlay"><img class="bonus-logo" src="/assets/logo-transparent-exact-v5.png" width="601" height="98" alt="Tarafbet"><span class="bonus-kicker">Promosyon kodu</span><strong class="bonus-offer">İlk yatırıma<br>%500 BONUS</strong><span class="bonus-code-label">Kodu şimdi kullan</span><code class="bonus-code">GETMY500</code><span class="bonus-cta">Bonusu Aç</span></span></a><button class="promo-copy" type="button" data-copy-code="GETMY500">Kodu Kopyala</button></div></section>`;
}

function gameGallery() {
  const games = [
    ['Lucky Jaguar 500','Tada Gaming','/assets/tarafbet-slot-lucky-jaguar-500.webp','Renkli klasik slot yapısı ve jaguar temalı oyun kartı.','/slot-oyunlari/'],
    ['Jungle Volcano','3 Oaks Gaming','/assets/tarafbet-slot-jungle-volcano.webp','Volkan temalı slot kartı, oyun lobisinde sağlayıcı etiketiyle ayrılır.','/slot-oyunlari/'],
    ['Sweet Bonanza 2500','Pragmatic Play','/assets/tarafbet-slot-sweet-bonanza-2500.webp','Şeker temalı slot serisinin 2500 sürümü, oyun adına göre aranabilir.','/slot-oyunlari/'],
    ['Turkish Blackjack X1','Pragmatic Play','/assets/tarafbet-canli-casino-turkish-blackjack.webp','Türkçe canlı blackjack masası, lobi kartından canlı bölüme açılır.','/canli-casino/'],
    ['Turkish Mega Roulette','Pragmatic Play','/assets/tarafbet-canli-casino-turkish-mega-roulette.webp','Türkçe sunumlu canlı rulet seçeneği, masa koşulları açılış ekranında görülür.','/canli-casino/'],
    ['Turkish VIP Blackjack 1','Pragmatic Play','/assets/tarafbet-canli-casino-turkish-vip-blackjack.webp','VIP blackjack kartı, bahis aralığı ve masa durumu kontrol edilerek açılır.','/canli-casino/']
  ];
  return `<section class="section game-section"><div class="section-head"><p class="eyebrow">Tarafbet oyun vitrini</p><h2>Slot ve Türkçe canlı casino seçenekleri</h2><p>Gerçek mobil casino ekranındaki oyunlar ayrı, net ve tıklanabilir kartlarla gösterilir. Oyun görseli erişim bağlantısını, açıklama bağlantısı ise ilgili içerik kümesini açar.</p></div><div class="game-grid">${games.map(([name,provider,image,copy,internal])=>`<article class="game-card"><a class="game-image" href="${affiliate}" rel="nofollow sponsored" aria-label="${esc(name)} oyununu Tarafbet üzerinde aç"><img src="${image}" width="400" height="${name.startsWith('Turkish') ? '548' : '545'}" loading="lazy" alt="Tarafbet ${esc(name)} ${esc(provider)} oyun görseli"></a><div class="game-copy"><p class="game-provider">${esc(provider)}</p><h3>${esc(name)}</h3><p>${esc(copy)}</p><a class="text-link" href="${internal}">Ayrıntıları incele</a></div></article>`).join('')}</div></section>`;
}

function homeHeroBanner() {
  return `<a class="hero-banner" href="${affiliate}" rel="nofollow sponsored" aria-label="Tarafbet erişimini aç"><picture><source media="(max-width: 780px)" srcset="/assets/tarafbet-turkiye-casino-hero.webp"><img src="/assets/tarafbet-casino-desktop-banner.webp" width="1140" height="600" alt="Tarafbet Türkiye casino ve spor bahisleri bannerı" fetchpriority="high"></picture><span class="hero-logo-overlay"><img src="/assets/logo-transparent-exact-v5.png" width="601" height="98" alt=""></span></a>`;
}

const relatedBySlug = {
  'guncel-giris':['/yeni-adres/','/mobil/','/hesap-guvenligi/','/destek/'],
  'yeni-adres':['/guncel-giris/','/mobil/','/hesap-guvenligi/','/guvenilir-mi/'],
  'mobil':['/guncel-giris/','/casino/','/canli-bahis/','/odeme-yontemleri/'],
  'uyelik':['/kayit/','/hesap-guvenligi/','/bonuslar/','/guncel-giris/'],
  'kayit':['/uyelik/','/bonuslar/','/hesap-guvenligi/','/guncel-giris/'],
  'bonuslar':['/bonus-kodu/','/kayit/','/casino/','/para-yatirma/'],
  'bonus-kodu':['/bonuslar/','/kayit/','/para-yatirma/','/casino/'],
  'casino':['/slot-oyunlari/','/masa-oyunlari/','/canli-casino/','/mobil/'],
  'slot-oyunlari':['/casino/','/masa-oyunlari/','/canli-casino/','/bonuslar/'],
  'masa-oyunlari':['/casino/','/slot-oyunlari/','/canli-casino/','/mobil/'],
  'canli-casino':['/casino/','/masa-oyunlari/','/slot-oyunlari/','/mobil/'],
  'spor-bahisleri':['/canli-bahis/','/sanal-sporlar/','/bahis-kuponu/','/mobil/'],
  'canli-bahis':['/spor-bahisleri/','/bahis-kuponu/','/sanal-sporlar/','/mobil/'],
  'sanal-sporlar':['/spor-bahisleri/','/canli-bahis/','/bahis-kuponu/','/mobil/'],
  'bahis-kuponu':['/spor-bahisleri/','/canli-bahis/','/sanal-sporlar/','/destek/'],
  'para-yatirma':['/odeme-yontemleri/','/para-cekme/','/bonuslar/','/destek/'],
  'para-cekme':['/odeme-yontemleri/','/para-yatirma/','/hesap-guvenligi/','/destek/'],
  'odeme-yontemleri':['/para-yatirma/','/para-cekme/','/hesap-guvenligi/','/destek/'],
  'hesap-guvenligi':['/guncel-giris/','/uyelik/','/para-cekme/','/destek/'],
  'guvenilir-mi':['/guncel-giris/','/bonuslar/','/odeme-yontemleri/','/sikayet/'],
  'sikayet':['/destek/','/para-yatirma/','/para-cekme/','/hesap-guvenligi/'],
  'destek':['/sikayet/','/guncel-giris/','/odeme-yontemleri/','/hesap-guvenligi/']
};

function heroPanel(page) {
  const preferred = page.home
    ? ['/guncel-giris/','/casino/','/spor-bahisleri/','/odeme-yontemleri/']
    : (relatedBySlug[page.slug] || linkGrid.filter(([,url]) => url !== `/${page.slug}/`).slice(0,4).map(([,url]) => url));
  const items = preferred.map(url => linkGrid.find(([,candidate]) => candidate === url)).filter(Boolean);
  return `<div class="hero-panel"><p class="panel-label">Tarafbet konu haritası</p>${items.map(([name,url,text])=>`<a href="${url}"><span>${esc(name)}</span><small>${esc(text)}</small></a>`).join('')}</div>`;
}

function homeExtra() {
  return `${bonusBanner()}${productShowcase()}${gameGallery()}
  <section class="section"><div class="section-head"><p class="eyebrow">Tüm konular</p><h2>Tarafbet bilgi merkezi</h2><p>Güncel girişten casino ve spor bahislerine, üyelikten ödeme işlemlerine kadar aradığın ana bölüme doğrudan geç.</p></div><div class="link-grid">${linkGrid.map(([name,url,text])=>`<a class="link-card" href="${url}"><strong>${name}</strong><span>${text}</span></a>`).join('')}</div></section>
  <section class="section split"><div><p class="eyebrow">Casino kapsamı</p><h2>Slot, masa oyunları ve canlı casino</h2><p>Casino ana sayfası geniş oyun keşfini açıklar. Slot Oyunları sayfası arama, sağlayıcı, mekanik ve oyun geçmişine odaklanır. Masa Oyunları sayfası rulet, blackjack, baccarat ve poker türlerini toplar. Canlı Casino ise yayın, masa limiti, krupiye ve tur kimliği konularını ayrı bir bölümde tamamlar.</p><p>Aradığın oyun türüne göre ilgili bölüme geçebilir, hesap veya tur kaydı sorularında Destek sayfasındaki işlem listesini kullanabilirsin.</p><div class="inline-links"><a href="/casino/">Casino</a><a href="/slot-oyunlari/">Slot oyunları</a><a href="/canli-casino/">Canlı casino</a></div></div><div class="topic-stack"><a href="/slot-oyunlari/"><strong>Slot lobisi</strong><span>Arama, sağlayıcı, özellik ve tur geçmişi</span></a><a href="/masa-oyunlari/"><strong>Masa oyunları</strong><span>Rulet, blackjack, baccarat ve poker</span></a><a href="/canli-casino/"><strong>Canlı masalar</strong><span>Stüdyo, limit, yayın ve tur sonucu</span></a></div></section>
  <section class="section split reverse"><div><p class="eyebrow">Spor bahisleri</p><h2>Maç öncesi, canlı, sanal spor ve kupon yapısı</h2><p>Futbol, basketbol, tenis, voleybol, hentbol, masa tenisi ve e-spor programları Spor Bahisleri sayfasında branş, lig ve market mantığıyla anlatılır. Canlı Bahis sayfası skor, süre, market kilidi ve oran değişimine odaklanır. Sanal Sporlar gerçek maçtan farklı hızlı etkinlikleri ayırır.</p><p>Bahis Kuponu sayfası tekli, kombine ve sistem kuponlarını; seçim satırı, kolon sayısı, toplam bedel, olası dönüş ve sonuç durumlarıyla açıklar. Böylece genel bahis niyetiyle işlem odaklı kupon niyeti birbirine karışmaz.</p><div class="inline-links"><a href="/spor-bahisleri/">Spor bahisleri</a><a href="/canli-bahis/">Canlı bahis</a><a href="/bahis-kuponu/">Bahis kuponu</a></div></div><div class="sport-list"><span>Futbol</span><span>Basketbol</span><span>Tenis</span><span>Voleybol</span><span>E-spor</span><span>Masa tenisi</span></div></section>
  <section class="section knowledge-grid"><article><p class="eyebrow">Erişim</p><h2>Güncel giriş ve yeni adres</h2><p>Güncel Giriş mevcut hesapla oturum açmayı, Yeni Adres ise değişen erişim noktasında bağlantıyı ve marka görünümünü kontrol etmeyi açıklar. Mobil sayfası telefon tarayıcısı, ekran yönü, ana ekran kısayolu ve sabit işlem panelini kapsar.</p><a class="text-link" href="/guncel-giris/">Giriş ayrıntıları</a></article><article><p class="eyebrow">Hesap</p><h2>Kayıt, üyelik ve güvenlik</h2><p>Kayıt sayfası formun tamamlanmasına, Üyelik sayfası aktif hesabın profil ve doğrulama alanlarına odaklanır. Hesap Güvenliği şifre yenileme, iletişim doğrulaması, oturum kontrolü ve şüpheli hareket adımlarını tek başlıkta toplar.</p><a class="text-link" href="/hesap-guvenligi/">Hesap güvenliği</a></article><article><p class="eyebrow">Finans</p><h2>Yatırma, çekme ve ödeme yöntemleri</h2><p>Para Yatırma ve Para Çekme farklı işlem akışlarıdır. Ödeme Yöntemleri sayfası banka, hızlı transfer, e-cüzdan, kart ve kripto seçeneklerinde limit, hesap sahibi, işlem yönü, ağ ve referans kontrolünü karşılaştırır.</p><a class="text-link" href="/odeme-yontemleri/">Ödemeleri karşılaştır</a></article><article><p class="eyebrow">Çözüm</p><h2>Destek ve şikayet takibi</h2><p>Destek sayfası doğru kategori ve teknik bilgileri, Şikayet sayfası işlem kanıtı ile talep numarasını düzenler. Güvenilir mi sayfası bağlantı, bonus, ödeme ve destek kayıtlarının nasıl doğrulanacağını ayrı bir kontrol listesinde birleştirir.</p><a class="text-link" href="/sikayet/">Sorun çözümü</a></article></section>`;
}

function pageHtml(page) {
  const canonical = `${site}/${page.slug ? page.slug + '/' : ''}`;
  const crumbs = breadcrumb(page);
  const mainSections = page.sections.map(([heading,body],i)=>`${i===2 ? cta('Giriş veya kayıt işlemine devam et') : ''}<section class="content-block"><h2>${esc(heading)}</h2><p>${esc(body)}</p>${i===0 && page.slug ? `<a class="text-link" href="${affiliate}" rel="nofollow sponsored">Tarafbet erişimini aç</a>` : ''}</section>`).join('');
  const faq = `<section class="section faq"><div class="section-head"><p class="eyebrow">Sık sorulan sorular</p><h2>${esc(page.h1)} hakkında sorular</h2></div><div class="faq-list">${page.faq.map(([q,a])=>`<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div></section>`;
  return `<!doctype html>
<html lang="tr-TR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(page.description)}">
  ${page.slug === '404' ? '<meta name="robots" content="noindex,follow">' : ''}
  <meta name="google-site-verification" content="${googleSiteVerification}">
  <meta name="yandex-verification" content="${yandexVerificationId}">
  <link rel="canonical" href="${canonical}">
  <link rel="icon" href="/assets/favicon.png" type="image/png">
  <meta property="og:locale" content="tr_TR"><meta property="og:type" content="${page.home ? 'website' : 'article'}"><meta property="og:site_name" content="Tarafbet"><meta property="og:title" content="${esc(page.title)}"><meta property="og:description" content="${esc(page.description)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${site}/assets/og-tarafbet-v4.jpg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(page.title)}"><meta name="twitter:description" content="${esc(page.description)}"><meta name="twitter:image" content="${site}/assets/og-tarafbet-v4.jpg">
  <link rel="stylesheet" href="/styles.css">
  ${schemas(page)}
  <script>(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","z3xumb2fem");</script>
</head>
<body>
  ${header()}
  <main>
    <section class="hero ${page.home ? 'hero-home' : ''}">
      ${page.home ? homeHeroBanner() : ''}
      <div class="hero-grid"><div class="hero-copy">${page.home ? '' : `<div class="breadcrumbs">${crumbs.map((x,i)=> i < crumbs.length-1 ? `<a href="${x.url.replace(site,'') || '/'}">${esc(x.name)}</a><span>/</span>` : `<span>${esc(x.name)}</span>`).join('')}</div>`}<p class="eyebrow">Türkiye tr-TR</p><h1>${esc(page.h1)}</h1><p class="hero-lead">${esc(page.lead)}</p><div class="hero-actions"><a class="button" href="${affiliate}" rel="nofollow sponsored">Kayıt Ol</a><a class="button button-ghost" href="${affiliate}" rel="nofollow sponsored">Giriş Yap</a></div></div>${heroPanel(page)}</div>
    </section>
    <section class="quick-nav" aria-label="Hızlı bağlantılar"><a href="/guncel-giris/">Güncel Giriş</a><a href="/casino/">Casino</a><a href="/canli-bahis/">Canlı Bahis</a><a href="/mobil/">Mobil</a><a href="/odeme-yontemleri/">Ödemeler</a></section>
    ${['bonuslar','bonus-kodu'].includes(page.slug) ? bonusBanner() : ''}
    ${page.home ? homeExtra() : ''}
    <section class="section article"><div class="article-content">${mainSections}${tableHtml(page.table)}</div></section>
    ${cta('Tarafbet erişimini aç')}
    ${faq}
  </main>
  <footer><a class="footer-brand" href="/"><img src="/assets/logo-transparent-exact-v5.png" width="601" height="98" alt="Tarafbet"></a><div class="footer-links">${nav.map(([n,u])=>`<a href="${u}">${n}</a>`).join('')}<a href="/sikayet/">Şikayet</a></div><p>Tarafbet giriş, casino ve spor bahisleri.</p></footer>
  <div class="mobile-sticky"><a class="button button-ghost" href="${affiliate}" rel="nofollow sponsored">Giriş Yap</a><a class="button" href="${affiliate}" rel="nofollow sponsored">Kayıt Ol</a></div>
  <script src="/app.js" defer></script>
</body>
</html>`;
}

fs.rmSync(dist, {recursive:true, force:true});
fs.mkdirSync(dist, {recursive:true});
fs.mkdirSync(path.join(dist, 'assets'), {recursive:true});
for (const asset of [
  'favicon.png',
  'logo-transparent-exact-v5.png',
  'og-tarafbet-v4.jpg',
  'tarafbet-casino-desktop-banner.webp',
  'tarafbet-turkiye-casino-hero.webp',
  'tarafbet-mobil-ana-sayfa-giris.webp',
  'tarafbet-casino-slot-canli-casino-mobil.webp',
  'tarafbet-500-bonus-promokod-getmy500.webp',
  'tarafbet-slot-lucky-jaguar-500.webp',
  'tarafbet-slot-jungle-volcano.webp',
  'tarafbet-slot-sweet-bonanza-2500.webp',
  'tarafbet-canli-casino-turkish-blackjack.webp',
  'tarafbet-canli-casino-turkish-mega-roulette.webp',
  'tarafbet-canli-casino-turkish-vip-blackjack.webp'
]) fs.copyFileSync(path.join(src, 'assets', asset), path.join(dist, 'assets', asset));
fs.copyFileSync(path.join(src, 'styles.css'), path.join(dist, 'styles.css'));
fs.copyFileSync(path.join(src, 'app.js'), path.join(dist, 'app.js'));

for (const page of pages) {
  const dir = page.slug ? path.join(dist, page.slug) : dist;
  fs.mkdirSync(dir, {recursive:true});
  fs.writeFileSync(path.join(dir, 'index.html'), pageHtml(page));
}

const homeImages = [
  'tarafbet-turkiye-casino-hero.webp',
  'tarafbet-500-bonus-promokod-getmy500.webp',
  'tarafbet-mobil-ana-sayfa-giris.webp',
  'tarafbet-casino-slot-canli-casino-mobil.webp',
  'tarafbet-slot-lucky-jaguar-500.webp',
  'tarafbet-slot-jungle-volcano.webp',
  'tarafbet-slot-sweet-bonanza-2500.webp',
  'tarafbet-canli-casino-turkish-blackjack.webp',
  'tarafbet-canli-casino-turkish-mega-roulette.webp',
  'tarafbet-canli-casino-turkish-vip-blackjack.webp'
];
const imageEntries = homeImages.map(name => `<image:image><image:loc>${site}/assets/${name}</image:loc></image:image>`).join('');
const urls = pages.map(p => `<url><loc>${site}/${p.slug ? p.slug + '/' : ''}</loc><lastmod>${sitemapLastmod}</lastmod><changefreq>${p.home ? 'daily' : 'weekly'}</changefreq><priority>${p.home ? '1.0' : '0.8'}</priority>${p.home ? imageEntries : ''}</url>`).join('');
fs.writeFileSync(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${urls}</urlset>`);
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${site}/sitemap.xml\n`);
fs.writeFileSync(path.join(dist, `${indexNowKey}.txt`), indexNowKey);
fs.writeFileSync(path.join(dist, `yandex_${yandexVerificationId}.html`), `<html>\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n</head>\n<body>Verification: ${yandexVerificationId}</body>\n</html>`);
fs.writeFileSync(path.join(dist, '404.html'), pageHtml({
  slug: '404', title:'Sayfa Bulunamadı | Tarafbet', description:'Aradığın Tarafbet sayfası bulunamadı.', h1:'Sayfa Bulunamadı', lead:'Ana sayfaya dön veya güncel giriş bağlantısını aç.', image:'screenshot-lobby.webp', sections:[['Ana sayfaya dön','Aradığın bağlantı kaldırılmış veya adresi değişmiş olabilir. Ana sayfadan güncel bölümlere ulaşabilirsin.']], faq:[['Ana sayfaya nasıl dönerim?','Üst bölümdeki Tarafbet logosuna veya ana sayfa bağlantısına bas.']]
}));

console.log(`Built ${pages.length} pages in ${dist}`);
