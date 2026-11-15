/**
 * CƯỜNG CHÂN CHẤT — v1.0 Main Script
 * Sống thật · Sống tử tế · Sống có ích
 */

// ==========================================
// 1. KHO DỮ LIỆU BÀI VIẾT TOÀN VĂN
// ==========================================
const ARTICLES_DATA = [
  {
    id: 1,
    tag: 'Sức khỏe · Thói quen',
    category: 'health',
    readTime: '4 phút đọc',
    title: 'Tài sản quý nhất nằm trong những nhịp thở đầu ngày',
    excerpt: 'Đôi khi, thay đổi không bắt đầu từ điều lớn lao. Nó bắt đầu từ lúc ta thức dậy, hít thở chậm và chịu vận động một chút.',
    fullContent: `
      <p>Sau những năm tháng đối diện với bệnh tật và từng có lúc thể trạng sụt giảm nghiêm trọng chỉ còn 39kg trước ca phẫu thuật, tôi ngộ ra một chân lý mộc mạc: <strong>sức khỏe không phải thứ để chúng ta đem ra thế chấp cho tham vọng hay bận rộn hằng ngày.</strong></p>
      
      <blockquote>“Khi có sức khỏe, người ta có ngàn ước mơ. Khi không còn sức khỏe, ước mơ duy nhất chỉ là được thở một cách nhẹ nhõm.”</blockquote>
      
      <p>Mỗi buổi sáng khi mở mắt, điều đầu tiên tôi làm không phải là với tay lấy chiếc điện thoại để xem tin tức hay mạng xã hội. Tôi nằm yên lặng 3 phút, đặt bàn tay lên ngực và cảm nhận từng nhịp đập, từng làn hơi thở đi vào đi ra qua cánh mũi. Tôi hít thật sâu vào bụng, giữ lại vài giây rồi thở ra thật chậm rãi.</p>
      
      <p>Sau đó, tôi uống một ly nước ấm, xỏ giày và bước ra đường. Không cần phải chạy ngay 10km hay 21km. Chỉ cần đi bộ nhanh 15–20 phút dưới ánh nắng sớm ban mai, để gió mát mơn man da thịt và mồ hôi rịn nhẹ trên trán. Nhịp thở sâu đầu ngày chính là liều thuốc bổ dưỡng nhất mà mẹ tự nhiên hào phóng ban tặng cho mỗi chúng ta.</p>
      
      <p>Nếu bạn đang cảm thấy mệt mỏi hay kiệt sức, ngày mai hãy thử thức dậy sớm hơn 20 phút, không vội vã, hít thở thật sâu và lắng nghe cơ thể mình lên tiếng.</p>
    `
  },
  {
    id: 2,
    tag: 'Gia đình · Lòng biết ơn',
    category: 'family',
    readTime: '5 phút đọc',
    title: 'Còn cha mẹ, xin đừng để lời hỏi thăm thành chuyện ngày mai',
    excerpt: 'Tiền có thể kiếm lại. Thời gian bên cha mẹ thì không. Một cuộc gọi hôm nay đôi khi quý hơn món quà lớn.',
    fullContent: `
      <p>Tuổi đời càng nhiều, tôi càng thấm thía quy luật vô thường của tạo hóa. Chúng ta mải miết lao ra ngoài đời để kiếm tiền, tìm kiếm danh vọng và những mối quan hệ xã giao, để rồi đôi khi quên mất rằng ở quê nhà, mái tóc của cha mẹ đang bạc thêm từng ngày.</p>
      
      <blockquote>“Tiền bạc mất đi còn có cơ hội làm lại. Nhưng bước chân cha mẹ ngày một chậm, ánh mắt ngày một mờ, thời gian trôi qua là vĩnh viễn không quay về.”</blockquote>
      
      <p>Nhiều người trẻ hay tự nhủ: <em>"Để khi nào rảnh, cuối tuần hay có tiền rồi về thăm bố mẹ."</em> Nhưng có những chuyện trong đời, nếu ta cứ hẹn "ngày mai", thì cái ngày mai ấy có thể sẽ không bao giờ đến nữa.</p>
      
      <p>Cha mẹ già không cần những món quà đắt tiền hay những bữa tiệc xa hoa. Điều họ mong mỏi nhất chỉ là một tiếng chuông điện thoại reo lúc chập tối, nghe tiếng con hỏi: <em>"Bố mẹ hôm nay ăn cơm có ngon không? Trời trở gió mẹ có bị đau khớp không?"</em>. Chỉ một câu nói ấy thôi cũng đủ sưởi ấm cả một mùa đông già nua.</p>
      
      <p>Nếu cha mẹ bạn vẫn còn trên đời, ngay hôm nay, hãy gọi điện về nhà bạn nhé. Đừng chần chừ!</p>
    `
  },
  {
    id: 3,
    tag: 'Học hỏi · Công nghệ & AI',
    category: 'learning',
    readTime: '6 phút đọc',
    title: 'Ở tuổi nào, ta cũng có quyền bắt đầu một điều mới',
    excerpt: 'Không biết thì học. Chưa làm được thì làm từng bước. Đừng để nỗi sợ bị chê cười quyết định phần đời còn lại.',
    fullContent: `
      <p>Khi tôi 55 tuổi, tôi bắt đầu ngồi vào bàn học cách dùng máy tính chuyên sâu, tìm hiểu về Trí tuệ nhân tạo (AI), học viết prompt, làm video và tự xây dựng góc chia sẻ này. Có người bạn trêu tôi: <em>"Già rồi, lo an dưỡng tuổi già đi, học mấy cái AI với công nghệ đó làm gì cho nhức đầu?"</em></p>
      
      <p>Tôi chỉ mỉm cười. Tôi học không phải để thi đua hay lấy bằng cấp, mà để giữ cho tâm hồn mình luôn tươi trẻ, để không bị bỏ lại phía sau và trên hết là để kết nối tốt hơn với con cháu và thế hệ trẻ.</p>
      
      <blockquote>“Bộ não của con người giống như một khu vườn. Nếu ta ngừng gieo hạt giống của sự tò mò và học hỏi, cỏ dại của sự trì trệ sẽ mọc đầy.”</blockquote>
      
      <p>Ban đầu cũng khó khăn lắm. Gõ bàn phím còn chậm, nhìn giao diện toàn tiếng Anh và thuật ngữ phức tạp đôi khi cũng toát mồ hôi. Nhưng tôi tự nhủ: mỗi ngày chỉ cần hiểu thêm một khái niệm, làm được một tính năng nhỏ, tích tiểu thành đại. Chậm cũng được, miễn là ta không dừng lại.</p>
      
      <p>Tuổi tác chỉ là một con số sinh học. Chừng nào trái tim bạn còn rung động trước cái mới, chừng đó bạn vẫn còn trẻ trung và đầy sức sống.</p>
    `
  },
  {
    id: 4,
    tag: 'Hôn nhân · Nghĩa tình',
    category: 'family',
    readTime: '4 phút đọc',
    title: 'Sau nhiều năm chung sống, điều quý nhất là còn thương nhau',
    excerpt: 'Tình nghĩa không chỉ nằm trong lời nói lớn. Nó ở bữa cơm, lúc chăm nhau mệt và những lần biết nhường một câu.',
    fullContent: `
      <p>Tình yêu thuở đôi mươi thì nồng nàn, lãng mạn như hoa nở mùa xuân. Nhưng đi qua mấy mươi năm sóng gió, cùng nhau chia ngọt sẻ bùi, cùng lo toan cơm áo gạo tiền, thứ giữ hai con người ở lại bên nhau không còn là cảm xúc bồng bột nữa, mà là chữ <strong>"Nghĩa"</strong> và chữ <strong>"Thương"</strong>.</p>
      
      <blockquote>“Vợ chồng thương nhau, không phải là nhìn nhau đắm đuối suốt ngày, mà là cùng nhìn về một hướng và biết cúi xuống nhặt giúp nhau những gánh nặng.”</blockquote>
      
      <p>Những lúc vợ ốm, tự tay nấu một bát cháo hoa rắc chút hành hoa tiêu sọ mang vào giường. Những lúc chồng bực bội chuyện công việc ngoài xã hội, vợ biết nín nhịn bớt một lời để nhà cửa không dậy sóng. Đó chính là chân tình sâu sắc nhất.</p>
      
      <p>Thắng thua trong một cuộc tranh cãi với người bạn đời không bao giờ mang lại hạnh phúc. Thắng một câu nói mà mất đi một nụ cười, tổn thương một tấm lòng, thì người thắng cuộc thực chất là kẻ thua cuộc đau đớn nhất.</p>
    `
  },
  {
    id: 5,
    tag: 'Triết lý sống · Nội tâm',
    category: 'philosophy',
    readTime: '5 phút đọc',
    title: 'Không có ánh sáng, ngay cả cái bóng cũng bỏ bạn mà đi',
    excerpt: 'Một câu ngắn để nhắc mình giữ lấy ánh sáng bên trong: lòng tử tế, sự tự trọng và khả năng đứng dậy sau khó khăn.',
    fullContent: `
      <p>Câu nói này đã đi theo tôi qua những thời điểm đen tối nhất của số phận. Khi ta ở trên đỉnh cao danh vọng hay dư dả tiền tài, xung quanh ta có biết bao nhiêu người vây quanh, tung hô và xu nịnh. Nhưng khi hoạn nạn ập đến, khi ta rơi xuống vực sâu của thất bại hoặc bệnh tật, số người còn ở lại chỉ đếm trên đầu ngón tay.</p>
      
      <blockquote>“Ngay cả cái bóng thân thiết nhất gắn liền với thân thể bạn, khi bước vào bóng tối, nó cũng rời bỏ bạn mà đi. Cho nên, bạn phải tự trở thành ánh sáng của chính cuộc đời mình.”</blockquote>
      
      <p>Ánh sáng ấy là gì? Đó là <strong>sự tự trọng</strong>, là <strong>lòng lương thiện kiên định</strong> và là <strong>ý chí bất khuất</strong> không cho phép mình gục ngã. Người khác có thể phụ bạc bạn, hoàn cảnh có thể nghiệt ngã với bạn, nhưng bạn tuyệt đối không được phép tự bỏ rơi bản thân mình.</p>
      
      <p>Hãy giữ cho ngọn nến trong tim luôn cháy sáng bằng lòng biết ơn và sự lạc quan. Rồi bóng tối nào cũng sẽ phải nhường chỗ cho bình minh.</p>
    `
  },
  {
    id: 6,
    tag: 'Về nguồn · Marathon',
    category: 'health',
    readTime: '6 phút đọc',
    title: 'Càng đi xa, càng cần biết đường trở về',
    excerpt: 'Trở về với gia đình, với những điều giản dị, với cơ thể mình và với câu hỏi: điều gì thật sự đáng để mình dành thời gian?',
    fullContent: `
      <p>Ngày 5 tháng 4 năm 2026, tôi đứng trước cổng Đền Hùng linh thiêng, hòa mình vào hàng nghìn vận động viên trong giải chạy mang tên <strong>“Về Nguồn”</strong>. Ở tuổi 55, trước mắt tôi là cung đường dốc dài 21 km – cự ly Half Marathon mà trước đây tôi chưa từng dám nghĩ mình có thể chạm tới.</p>
      
      <p>Từ km số 14, đôi chân bắt đầu nặng trĩu như đeo chì, hơi thở dồn dập và cơ bắp bắt đầu run rẩy. Có những khoảnh khắc não bộ gào thét: <em>"Hay là dừng lại đi, mình 55 tuổi rồi, có cần chứng minh điều gì đâu?"</em>.</p>
      
      <blockquote>“Nhưng tôi tự nhủ với từng nhịp chân: Mình không chạy để hơn ai cả. Mình chạy để trở về với chính mình, về với nguồn cội của sự kiên cường mà cha ông đã truyền lại.”</blockquote>
      
      <p>Và khi tôi bước chân qua vạch đích ở Đền Hùng, nhận tấm huy chương lấp lánh ánh đồng trên ngực, nước mắt tôi đã rơi. Không phải vì huy chương, mà vì một sự biết ơn vô hạn đối với cơ thể này, với tổ tiên và với những tháng ngày gian khó đã rèn giũa nên một Lăng Đình Cường chân chất hôm nay.</p>
      
      <p>Càng đi xa trong đường đời, hãy luôn nhớ con đường trở về: về với sức khỏe, về với gia đình và về với sự bình an nơi sâu thẳm tâm hồn.</p>
    `
  }
];

// ==========================================
// 2. TỔNG HỢP ÂM THANH THIÊN NHIÊN (AMBIENT AUDIO)
// Tạo âm thanh gió reo và chuông thiền qua Web Audio API (100% offline, không cần mp3)
// ==========================================
class AmbientAudioEngine {
  constructor() {
    this.isPlaying = false;
    this.ctx = null;
    this.noiseNode = null;
    this.gainNode = null;
    this.chimeTimer = null;
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.play();
    }
    return this.isPlaying;
  }

  play() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!this.ctx) {
        this.ctx = new AudioContext();
      }
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      // Tạo tiếng gió êm dịu (Pink Noise Generator)
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
        b6 = white * 0.115926;
      }

      this.noiseNode = this.ctx.createBufferSource();
      this.noiseNode.buffer = noiseBuffer;
      this.noiseNode.loop = true;

      // Filter tạo tiếng gió núi thông reo
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 400;

      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0.01, this.ctx.currentTime);
      this.gainNode.gain.exponentialRampToValueAtTime(0.2, this.ctx.currentTime + 2);

      this.noiseNode.connect(filter);
      filter.connect(this.gainNode);
      this.gainNode.connect(this.ctx.destination);

      this.noiseNode.start();
      this.isPlaying = true;

      // Định kỳ 8 giây gõ một tiếng chuông thiền thư thái
      this.playChime();
      this.chimeTimer = setInterval(() => {
        if (this.isPlaying) this.playChime();
      }, 9000);

    } catch (e) {
      console.warn('Web Audio API không khả dụng:', e);
      this.isPlaying = false;
    }
  }

  playChime() {
    if (!this.ctx || this.ctx.state !== 'running') return;
    try {
      const osc = this.ctx.createOscillator();
      const chimeGain = this.ctx.createGain();
      
      osc.type = 'sine';
      // Tần số chuông thanh tịnh (528 Hz - Solfeggio frequency hoặc 432 Hz)
      osc.frequency.setValueAtTime(528, this.ctx.currentTime);
      
      chimeGain.gain.setValueAtTime(0, this.ctx.currentTime);
      chimeGain.gain.linearRampToValueAtTime(0.08, this.ctx.currentTime + 0.1);
      chimeGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 4.5);

      osc.connect(chimeGain);
      chimeGain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 4.6);
    } catch (err) {}
  }

  stop() {
    if (this.gainNode && this.ctx) {
      this.gainNode.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.8);
      setTimeout(() => {
        try {
          this.noiseNode?.stop();
          this.noiseNode?.disconnect();
        } catch (e) {}
      }, 850);
    }
    if (this.chimeTimer) {
      clearInterval(this.chimeTimer);
      this.chimeTimer = null;
    }
    this.isPlaying = false;
  }
}

// ==========================================
// 3. KHỞI TẠO ỨNG DỤNG CHÍNH
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initReadingProgress();
  initThemeAndFont();
  initMobileMenu();
  initBackToTop();
  initArticlesSystem();
  initGratitudeJournal();
  initContactForm();
  initAmbientAudio();
  updateCurrentYear();
});

// Thanh tiến trình cuộn trang
function initReadingProgress() {
  const bar = document.getElementById('readingProgress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = `${pct}%`;
  }, { passive: true });
}

// Cập nhật năm bản quyền
function updateCurrentYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

// Quản lý Theme (Sáng, Sepia, Tối) & Cỡ chữ (A-, Reset, A+)
function initThemeAndFont() {
  const root = document.documentElement;
  const themeBtn = document.getElementById('themeToggleBtn');
  const fontDecBtn = document.getElementById('fontDecBtn');
  const fontIncBtn = document.getElementById('fontIncBtn');

  const themes = ['light', 'sepia', 'dark'];
  const themeLabels = { light: '🌿 Mộc', sepia: '📖 Sách', dark: '🌙 Đêm' };
  
  let currentTheme = localStorage.getItem('ccc_theme') || 'light';
  applyTheme(currentTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const nextIndex = (themes.indexOf(currentTheme) + 1) % themes.length;
      currentTheme = themes[nextIndex];
      applyTheme(currentTheme);
      localStorage.setItem('ccc_theme', currentTheme);
    });
  }

  function applyTheme(theme) {
    if (theme === 'light') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', theme);
    }
    if (themeBtn) themeBtn.textContent = themeLabels[theme] || '🎨';
  }

  // Cỡ chữ
  let currentFontSize = parseInt(localStorage.getItem('ccc_font_size') || '16', 10);
  applyFontSize(currentFontSize);

  if (fontDecBtn) {
    fontDecBtn.addEventListener('click', () => {
      if (currentFontSize > 14) {
        currentFontSize -= 1;
        applyFontSize(currentFontSize);
      }
    });
  }

  if (fontIncBtn) {
    fontIncBtn.addEventListener('click', () => {
      if (currentFontSize < 21) {
        currentFontSize += 1;
        applyFontSize(currentFontSize);
      }
    });
  }

  function applyFontSize(size) {
    root.style.setProperty('--base-font-size', `${size}px`);
    localStorage.setItem('ccc_font_size', size);
  }
}

// Menu Mobile
function initMobileMenu() {
  const btn = document.getElementById('menuBtn');
  const links = document.getElementById('navLinks');
  if (!btn || !links) return;

  btn.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
}

// Nút cuộn mượt lên đầu trang
function initBackToTop() {
  const topBtn = document.getElementById('topBtn');
  if (!topBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      topBtn.classList.add('visible');
    } else {
      topBtn.classList.remove('visible');
    }
  }, { passive: true });

  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ==========================================
// 4. HỆ THỐNG BÀI VIẾT, TÌM KIẾM & MODAL TOÀN VĂN
// ==========================================
function initArticlesSystem() {
  const grid = document.getElementById('postsGrid');
  const searchInput = document.getElementById('postSearch');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const modal = document.getElementById('articleModal');
  const modalClose = document.getElementById('modalClose');
  const modalBody = document.getElementById('modalBody');
  const modalSpeakBtn = document.getElementById('modalSpeakBtn');
  const modalAskAIBtn = document.getElementById('modalAskAIBtn');

  let activeCategory = 'all';
  let searchQuery = '';
  let activeArticle = null;

  // Lấy lượt thích từ LocalStorage
  const likesData = JSON.parse(localStorage.getItem('ccc_post_likes') || '{}');

  function renderPosts() {
    if (!grid) return;
    grid.innerHTML = '';

    const filtered = ARTICLES_DATA.filter(post => {
      const matchCat = activeCategory === 'all' || post.category === activeCategory;
      const matchSearch = searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery) || 
        post.excerpt.toLowerCase().includes(searchQuery) ||
        post.tag.toLowerCase().includes(searchQuery);
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px; color: var(--muted);">
          <p style="font-size: 20px;">🌿 Không tìm thấy bài viết nào phù hợp với từ khóa "${searchQuery}".</p>
          <button class="btn btn-outline" style="margin-top: 15px; color: var(--forest); border-color: var(--line);" onclick="document.getElementById('postSearch').value=''; document.getElementById('postSearch').dispatchEvent(new Event('input'));">Xem tất cả bài viết</button>
        </div>
      `;
      return;
    }

    filtered.forEach(post => {
      const postCard = document.createElement('article');
      postCard.className = 'post';
      const likeCount = likesData[post.id] || 0;

      postCard.innerHTML = `
        <div class="tag-meta">
          <span class="tag">${post.tag}</span>
          <span class="read-time">${post.readTime}</span>
        </div>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <div class="post-footer">
          <button class="read-btn" data-read-id="${post.id}">
            Đọc toàn văn <span>↗</span>
          </button>
          <button class="like-btn ${likeCount > 0 ? 'liked' : ''}" data-like-id="${post.id}" title="Yêu thích bài viết">
            ❤️ <span>${likeCount}</span>
          </button>
        </div>
      `;
      grid.appendChild(postCard);
    });

    // Gắn sự kiện đọc
    grid.querySelectorAll('[data-read-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.getAttribute('data-read-id'), 10);
        openArticle(id);
      });
    });

    // Gắn sự kiện like
    grid.querySelectorAll('[data-like-id]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(btn.getAttribute('data-like-id'), 10);
        likesData[id] = (likesData[id] || 0) + 1;
        localStorage.setItem('ccc_post_likes', JSON.stringify(likesData));
        btn.querySelector('span').textContent = likesData[id];
        btn.classList.add('liked');
      });
    });
  }

  // Mở modal bài viết
  function openArticle(id) {
    const post = ARTICLES_DATA.find(p => p.id === id);
    if (!post || !modal || !modalBody) return;
    activeArticle = post;

    modalBody.innerHTML = `
      <div class="meta-bar">
        <span>${post.tag}</span>
        <span>•</span>
        <span>${post.readTime}</span>
        <span>•</span>
        <span>Tác giả: Lăng Đình Cường</span>
      </div>
      <h2>${post.title}</h2>
      ${post.fullContent}
    `;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Đọc bài viết bằng giọng đọc
  if (modalSpeakBtn) {
    modalSpeakBtn.addEventListener('click', () => {
      if (!activeArticle) return;
      if (!('speechSynthesis' in window)) {
        alert('Trình duyệt của bạn chưa hỗ trợ đọc giọng nói tự động.');
        return;
      }
      window.speechSynthesis.cancel();
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = activeArticle.fullContent;
      const textToRead = `${activeArticle.title}. ${tempDiv.textContent}`;
      const utter = new SpeechSynthesisUtterance(textToRead);
      utter.lang = 'vi-VN';
      utter.rate = 0.95;
      window.speechSynthesis.speak(utter);
    });
  }

  // Hỏi AI về bài viết này
  if (modalAskAIBtn) {
    modalAskAIBtn.addEventListener('click', () => {
      if (!activeArticle) return;
      closeModal();
      if (window.cuongChanChatAI) {
        window.cuongChanChatAI.toggleWindow(true);
        setTimeout(() => {
          window.cuongChanChatAI.sendMessage(`Chú Cường ơi, cháu vừa đọc bài viết "${activeArticle.title}", chú có thể chia sẻ thêm cho cháu một lời khuyên sâu sắc hơn về chủ đề này không?`);
        }, 350);
      }
    });
  }

  // Lọc danh mục
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category') || 'all';
      renderPosts();
    });
  });

  // Tìm kiếm theo thời gian thực
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderPosts();
    });
  }

  renderPosts();
}

// ==========================================
// 5. SỔ TAY BIẾT ƠN TƯƠNG TÁC (GRATITUDE JOURNAL)
// ==========================================
function initGratitudeJournal() {
  const form = document.getElementById('gratitudeForm');
  const input = document.getElementById('gratitudeInput');
  const list = document.getElementById('gratitudeList');
  if (!form || !input || !list) return;

  const storageKey = 'ccc_gratitude_entries_v1';
  let entries = JSON.parse(localStorage.getItem(storageKey) || '[]');

  // Nếu chưa có, thêm vài điều biết ơn mẫu của chú Cường
  if (entries.length === 0) {
    entries = [
      { id: 1, text: 'Biết ơn mỗi sớm mai thức dậy vẫn còn được hít thở bầu không khí trong lành.', date: 'Hôm nay' },
      { id: 2, text: 'Biết ơn những giọt mồ hôi và bước chân kiên trì đã giúp mình về đích 21km Đền Hùng.', date: 'Hôm qua' },
      { id: 3, text: 'Biết ơn bữa cơm đạm bạc cùng người thân và một giấc ngủ bình an.', date: 'Hôm kia' }
    ];
    localStorage.setItem(storageKey, JSON.stringify(entries));
  }

  function renderList() {
    list.innerHTML = '';
    entries.forEach(item => {
      const div = document.createElement('div');
      div.className = 'gratitude-item';
      div.innerHTML = `
        <div>
          <span>🌿 ${item.text}</span>
          <span class="time">(${item.date})</span>
        </div>
        <button class="delete-btn" data-delete-id="${item.id}" title="Xóa điều này">✕</button>
      `;
      list.appendChild(div);
    });

    list.querySelectorAll('[data-delete-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.getAttribute('data-delete-id'), 10);
        entries = entries.filter(e => e.id !== id);
        localStorage.setItem(storageKey, JSON.stringify(entries));
        renderList();
      });
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    const now = new Date();
    const dateStr = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')} - ${now.getDate()}/${now.getMonth() + 1}`;
    entries.unshift({ id: Date.now(), text, date: dateStr });
    localStorage.setItem(storageKey, JSON.stringify(entries));
    input.value = '';
    renderList();
  });

  renderList();
}

// ==========================================
// 6. FORM KẾT NỐI & TẢI LỜI NHẮN
// ==========================================
function initContactForm() {
  const form = document.getElementById('messageForm');
  const note = document.getElementById('formNote');
  if (!form || !note) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const output = `LỜI NHẮN GỬI CƯỜNG CHÂN CHẤT\nThời gian: ${new Date().toLocaleString('vi-VN')}\nHọ tên: ${name}\nEmail: ${email || '(Chưa cung cấp)'}\nNội dung chia sẻ:\n${message}\n-----------------------------------\nChúc bạn luôn an nhiên và vững vàng!`;

    note.style.color = 'var(--forest)';
    note.innerHTML = `<strong>Đã tạo lời nhắn thành công!</strong> Cảm ơn <strong>${name}</strong> đã gửi gắm tâm tình.`;

    // Nút tải file
    const blob = new Blob([output], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `loi-nhan-${name.toLowerCase().replace(/\s+/g, '-')}.txt`;
    link.textContent = '📥 Tải bản sao lời nhắn về máy (.txt)';
    link.className = 'btn btn-gold';
    link.style.display = 'inline-block';
    link.style.marginTop = '12px';

    note.appendChild(document.createElement('br'));
    note.appendChild(link);

    // Gợi ý trò chuyện với AI
    const aiSuggest = document.createElement('button');
    aiSuggest.className = 'btn btn-ai';
    aiSuggest.style.display = 'inline-block';
    aiSuggest.style.marginTop = '12px';
    aiSuggest.style.marginLeft = '8px';
    aiSuggest.textContent = '🤖 Chia sẻ ngay với AI Chú Cường';
    aiSuggest.addEventListener('click', () => {
      if (window.cuongChanChatAI) {
        window.cuongChanChatAI.toggleWindow(true);
        setTimeout(() => window.cuongChanChatAI.sendMessage(`Chào chú Cường, cháu là ${name}. ${message}`), 300);
      }
    });
    note.appendChild(aiSuggest);
  });
}

// ==========================================
// 7. ÂM THANH THIÊN NHIÊN (AMBIENT ENGINE)
// ==========================================
function initAmbientAudio() {
  const btn = document.getElementById('ambientToggleBtn');
  if (!btn) return;

  const engine = new AmbientAudioEngine();
  btn.addEventListener('click', () => {
    const isPlaying = engine.toggle();
    if (isPlaying) {
      btn.classList.add('active');
      btn.title = 'Đang phát tiếng gió thiền thiên nhiên (Bấm để tắt)';
    } else {
      btn.classList.remove('active');
      btn.title = 'Bật âm thanh thiên nhiên thư thái';
    }
  });
}
