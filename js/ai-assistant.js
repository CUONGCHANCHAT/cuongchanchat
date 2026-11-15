/**
 * CƯỜNG CHÂN CHẤT — AI TÂM TÌNH (v1.0)
 * Trợ lý ảo đối thoại thông minh mô phỏng tư tưởng và văn phong chú Lăng Đình Cường
 */

class CuongChanChatAI {
  constructor() {
    this.historyKey = 'ccc_chat_history_v1';
    this.speechEnabled = true;
    this.isResponding = false;
    
    // Knowledge Base phong phú dựa trên trải nghiệm đời thực của chú Lăng Đình Cường
    this.knowledge = [
      {
        keywords: ['chào', 'hello', 'hi', 'bác', 'chú', 'alo', 'chào chú', 'chào bạn'],
        response: `Chào bạn! Chú là Lăng Đình Cường đây. Rất vui được gặp bạn ở góc nhỏ Chân Chất này. Hôm nay sức khỏe và tinh thần của bạn thế nào? Cứ tự nhiên tâm sự cùng chú nhé!`
      },
      {
        keywords: ['21km', 'chạy', 'marathon', 'đền hùng', 'chạy bộ', 'về nguồn', 'huy chương'],
        response: `Ngày 05/04/2026 là một ngày chú nhớ mãi: hoàn thành 21 km tại Đền Hùng Marathon – "Về Nguồn" ở tuổi 55. Tấm huy chương ấy không phải để khoe thành tích, mà là lời nhắc nhở rằng: cơ thể này, nếu ta biết trân trọng và kiên trì từng bước nhỏ mỗi ngày, ta hoàn toàn có thể vượt qua giới hạn của tuổi tác. Bạn cũng vậy, hãy bắt đầu từ 500m, 1km, đừng vội vã!`
      },
      {
        keywords: ['học ai', 'công nghệ', '55 tuổi', 'tuổi tác', 'trí tuệ nhân tạo', 'già', 'học cái mới'],
        response: `Nhiều người hỏi chú 55 tuổi rồi còn học AI, làm công nghệ làm gì cho mệt đầu. Chú chỉ cười và bảo: "Tuổi tác không đóng cánh cửa lại, nó chỉ nhắc ta chọn điều đáng làm hơn." Không biết thì học, chưa làm được thì làm từng chút một. Đừng bao giờ để nỗi sợ bị chê cười cản trở sự tò mò và ham học của mình, bạn nhé!`
      },
      {
        keywords: ['39kg', 'phẫu thuật', 'sức khỏe', 'ốm', 'bệnh', 'hồi phục', 'yếu'],
        response: `Trước một ca phẫu thuật lớn, chú từng sụt cân chỉ còn 39 kg, người gầy rộc và yếu ớt. Đi qua lằn ranh ấy, chú thấu hiểu một điều tận đáy lòng: sức khỏe không phải thứ ta có thể đem ra mặc cả với cuộc đời. Từ đó, chú tập thở sâu mỗi sáng, ăn uống thanh đạm điều độ, giữ tâm an và trân quý từng nhịp thở.`
      },
      {
        keywords: ['cha mẹ', 'gia đình', 'hiếu', 'bố mẹ', 'con cái', 'nhà'],
        response: `Có câu này chú luôn tự nhắc mình: "Tiền bạc mất đi còn kiếm lại được, nhưng thời gian bên cha mẹ thì không." Đừng để lời hỏi thăm thành chuyện ngày mai. Hôm nay, nếu rảnh dù chỉ 5 phút, hãy bấm máy gọi về hỏi mẹ ăn cơm chưa, bố khỏe không. Sự hiện diện và lòng hiếu thảo chính là phúc đức lớn nhất của đời người.`
      },
      {
        keywords: ['vợ chồng', 'hôn nhân', 'tình nghĩa', 'bạn đời', 'cãi nhau', 'ly hôn'],
        response: `Đi cùng nhau qua năm tháng, điều quý nhất ở nghĩa vợ chồng không phải lời hứa cao sang, mà là chữ "Thương". Thương những lúc chăm nhau ốm, nhường nhau một câu lúc giận hờn, chia sẻ cùng nhau bát canh nóng. Sống với nhau bằng cái tình, cái nghĩa thì sóng gió nào cũng nhẹ nhàng vượt qua.`
      },
      {
        keywords: ['biết đủ', 'tham', 'tiền', 'giàu', 'áp lực', 'stress', 'bình an'],
        response: `Cổ nhân dạy không sai: "Biết đủ là giàu tối thượng." Phấn đấu làm ăn lương thiện là đúng, nhưng đừng để lòng tham và sự so đo với thiên hạ cướp mất giấc ngủ ngon và sự bình an trong tâm hồn. Cơm ngày ba bữa, tối ngủ không lo nghĩ, người thân khỏe mạnh – đó đã là đại phú quý rồi bạn à.`
      },
      {
        keywords: ['tử tế', 'sống thật', 'lừa dối', 'giả tạo', 'đạo đức'],
        response: `Tôn chỉ cả đời của chú gói gọn trong 6 chữ: "Sống thật - Sống tử tế - Sống có ích." Ở đời, khôn lỏi có thể thắng trước mắt, nhưng chỉ có sự chân thành, giữ lời hứa và lòng tử tế mới giúp ta đi đường dài mà không hổ thẹn với lòng mình.`
      },
      {
        keywords: ['buồn', 'mệt', 'thất bại', 'chán', 'tuyệt vọng', 'bế tắc', 'cô đơn'],
        response: `Chú hiểu, ai trong đời cũng có những ngày giông bão, thấy mình cô độc và kiệt sức. Chú xin tặng bạn câu này: "Không có ánh sáng, ngay cả cái bóng cũng bỏ bạn mà đi." Những lúc tối tăm nhất, hãy thắp sáng ngọn lửa bên trong mình: giữ tự trọng, hít một hơi thật sâu, nghỉ ngơi một chút rồi kiên cường bước tiếp. Chú luôn tin ở bạn!`
      },
      {
        keywords: ['biết ơn', 'cảm ơn', 'sổ tay', 'lòng biết ơn'],
        response: `Lòng biết ơn là liều thuốc chữa lành tuyệt diệu nhất. Khi ta biết ơn từng hạt cơm, từng giọt nước, biết ơn người đã nâng đỡ mình lúc hoạn nạn, tâm ta sẽ tự khắc rộng mở và tràn đầy bình an. Bạn hãy thử viết 3 điều bạn biết ơn vào "Sổ tay biết ơn" trên trang nhé!`
      },
      {
        keywords: ['5 giá trị', 'giá trị sống', 'triết lý'],
        response: `Năm điều làm gốc cho đời sống bình an của chú là: 1. Biết đủ (không tham lam), 2. Biết ơn (trân trọng cuộc đời), 3. Thuận tự nhiên (không cưỡng ép), 4. Sống tử tế (chân thành nâng đỡ nhau), và 5. An nhiên (tĩnh tại trước biến cố).`
      }
    ];

    this.defaultResponses = [
      `Cảm ơn bạn đã trải lòng. Cuộc đời là một dòng chảy, mỗi trải nghiệm dù vui hay buồn đều để lại cho ta một bài học quý. Bạn hãy hít một hơi thật sâu, giữ tâm bình thản nhé!`,
      `Chú lắng nghe điều bạn vừa chia sẻ. Sống ở đời, đôi khi buông bớt một chút kỳ vọng, tập trung làm tốt việc trước mắt với lòng tử tế, tự nhiên mọi sự sẽ thông suốt.`,
      `Một góc nhìn rất thú vị! Chú tin rằng khi ta đối diện với cuộc sống bằng sự chân thật và lòng biết ơn, ta sẽ luôn tìm thấy con đường sáng để bước tiếp.`
    ];

    this.init();
  }

  init() {
    this.setupDOM();
    this.loadHistory();
    this.setupEvents();
  }

  setupDOM() {
    this.launcher = document.getElementById('aiLauncherBtn');
    this.chatWindow = document.getElementById('aiChatWindow');
    this.chatBody = document.getElementById('aiChatBody');
    this.input = document.getElementById('aiChatInput');
    this.sendBtn = document.getElementById('aiSendBtn');
    this.closeBtn = document.getElementById('aiCloseBtn');
    this.clearBtn = document.getElementById('aiClearBtn');
    this.speechBtn = document.getElementById('aiSpeechToggle');
  }

  setupEvents() {
    if (this.launcher) {
      this.launcher.addEventListener('click', () => this.toggleWindow());
    }

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.toggleWindow(false));
    }

    if (this.clearBtn) {
      this.clearBtn.addEventListener('click', () => this.clearHistory());
    }

    if (this.speechBtn) {
      this.speechBtn.addEventListener('click', () => {
        this.speechEnabled = !this.speechEnabled;
        this.speechBtn.textContent = this.speechEnabled ? '🔊' : '🔇';
        this.speechBtn.title = this.speechEnabled ? 'Đang bật đọc tiếng' : 'Đã tắt đọc tiếng';
      });
    }

    if (this.sendBtn) {
      this.sendBtn.addEventListener('click', () => this.handleSend());
    }

    if (this.input) {
      this.input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.handleSend();
        }
      });
    }

    // Quick chips
    document.querySelectorAll('.quick-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        const text = e.target.getAttribute('data-prompt') || e.target.textContent;
        this.sendMessage(text);
      });
    });

    // Global trigger buttons (ví dụ: nút "Trò chuyện cùng AI Chân Chất" ở Hero)
    document.querySelectorAll('[data-open-ai]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleWindow(true);
        const prompt = btn.getAttribute('data-open-ai');
        if (prompt && prompt !== 'true') {
          setTimeout(() => this.sendMessage(prompt), 300);
        }
      });
    });
  }

  toggleWindow(open = null) {
    if (!this.chatWindow) return;
    const isOpen = open !== null ? open : !this.chatWindow.classList.contains('open');
    if (isOpen) {
      this.chatWindow.classList.add('open');
      this.input?.focus();
      this.scrollToBottom();
    } else {
      this.chatWindow.classList.remove('open');
    }
  }

  handleSend() {
    if (!this.input || this.isResponding) return;
    const text = this.input.value.trim();
    if (!text) return;
    this.input.value = '';
    this.sendMessage(text);
  }

  sendMessage(text) {
    this.appendMessage('user', text);
    this.saveMessage('user', text);

    this.isResponding = true;
    this.showTypingIndicator();

    setTimeout(() => {
      this.hideTypingIndicator();
      const reply = this.generateResponse(text);
      this.appendMessage('bot', reply);
      this.saveMessage('bot', reply);
      this.isResponding = false;
      this.scrollToBottom();

      if (this.speechEnabled) {
        this.speak(reply);
      }
    }, 650);
  }

  generateResponse(input) {
    const lower = input.toLowerCase().trim();

    // Check knowledge base
    for (const item of this.knowledge) {
      const match = item.keywords.some(k => lower.includes(k));
      if (match) {
        return item.response;
      }
    }

    // Randomized warm default response
    const randIndex = Math.floor(Math.random() * this.defaultResponses.length);
    return this.defaultResponses[randIndex];
  }

  appendMessage(sender, text) {
    if (!this.chatBody) return;
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${sender}`;
    bubble.textContent = text;
    this.chatBody.appendChild(bubble);
    this.scrollToBottom();
  }

  showTypingIndicator() {
    if (!this.chatBody) return;
    const ind = document.createElement('div');
    ind.className = 'chat-bubble bot typing-indicator';
    ind.id = 'aiTypingInd';
    ind.innerHTML = '<span>•</span> <span>•</span> <span>•</span>';
    this.chatBody.appendChild(ind);
    this.scrollToBottom();
  }

  hideTypingIndicator() {
    const ind = document.getElementById('aiTypingInd');
    if (ind) ind.remove();
  }

  scrollToBottom() {
    if (!this.chatBody) return;
    this.chatBody.scrollTop = this.chatBody.scrollHeight;
  }

  saveMessage(sender, text) {
    try {
      const history = JSON.parse(localStorage.getItem(this.historyKey) || '[]');
      history.push({ sender, text, timestamp: new Date().toISOString() });
      if (history.length > 50) history.shift();
      localStorage.setItem(this.historyKey, JSON.stringify(history));
    } catch (e) {
      console.warn('Lỗi lưu lịch sử chat:', e);
    }
  }

  loadHistory() {
    try {
      const history = JSON.parse(localStorage.getItem(this.historyKey) || '[]');
      if (history.length > 0) {
        history.forEach(item => {
          this.appendMessage(item.sender, item.text);
        });
      } else {
        // Welcome message
        this.appendMessage('bot', 'Chào bạn, chú là Lăng Đình Cường. Chú lập góc nhỏ này để chia sẻ về sức khỏe, marathon, gia đình và hành trình học hỏi ở tuổi 55. Bạn có điều gì muốn tâm tình cùng chú hôm nay không?');
      }
    } catch (e) {
      this.appendMessage('bot', 'Chào bạn, chú là Lăng Đình Cường. Rất vui được đón tiếp bạn ghé thăm!');
    }
  }

  clearHistory() {
    if (confirm('Bạn muốn xóa lịch sử cuộc trò chuyện này chứ?')) {
      localStorage.removeItem(this.historyKey);
      if (this.chatBody) {
        this.chatBody.innerHTML = '';
        this.appendMessage('bot', 'Đã làm mới cuộc trò chuyện. Chú luôn ở đây lắng nghe bạn!');
      }
    }
  }

  speak(text) {
    if (!('speechSynthesis' in window) || !this.speechEnabled) return;
    try {
      window.speechSynthesis.cancel();
      const cleanText = text.replace(/[*#_~]/g, '');
      const utter = new SpeechSynthesisUtterance(cleanText);
      utter.lang = 'vi-VN';
      utter.rate = 0.95;
      utter.pitch = 0.95;
      window.speechSynthesis.speak(utter);
    } catch (e) {
      console.warn('Speech synthesis unsupported:', e);
    }
  }
}

// Khởi tạo khi DOM đã tải xong
document.addEventListener('DOMContentLoaded', () => {
  window.cuongChanChatAI = new CuongChanChatAI();
});
