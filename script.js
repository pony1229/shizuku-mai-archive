const header = document.querySelector("[data-header]");
const timelineTabs = document.querySelectorAll(".timeline-tab");
const memoryImage = document.querySelector("[data-memory-image]");
const memoryDate = document.querySelector("[data-memory-date]");
const memoryTitle = document.querySelector("[data-memory-title]");
const memoryText = document.querySelector("[data-memory-text]");
const memoryQuote = document.querySelector("[data-memory-quote]");
const workFilterButtons = document.querySelectorAll("[data-work-filter]");
const workCards = document.querySelectorAll("[data-work-card]");
const galleryFilterButtons = document.querySelectorAll("[data-gallery-filter]");
const galleryItems = document.querySelectorAll(".gallery-item");
const galleryRelicSet = document.querySelector("[data-gallery-relic]");
const dialogueItems = document.querySelectorAll("[data-dialogue-item]");
const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxCaption = document.querySelector("[data-lightbox-caption]");
const lightboxArtist = document.querySelector("[data-lightbox-artist]");
const lightboxClose = document.querySelector("[data-lightbox-close]");
const workModal = document.querySelector("[data-work-modal]");
const workModalImage = document.querySelector("[data-work-modal-image]");
const workModalArc = document.querySelector("[data-work-modal-arc]");
const workModalTitle = document.querySelector("[data-work-modal-title]");
const workModalSummary = document.querySelector("[data-work-modal-summary]");
const workModalBeats = document.querySelector("[data-work-modal-beats]");
const workModalMotifs = document.querySelector("[data-work-modal-motifs]");
const workModalQuote = document.querySelector("[data-work-modal-quote]");
const workModalLink = document.querySelector("[data-work-modal-link]");
const workModalClose = document.querySelector("[data-work-modal-close]");
const emptyPixel = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

const memories = {
  umbrella: {
    date: "9 月 | 給傘事件",
    title: "我沒有躲雨，只是躲不掉妳",
    text:
      "蒔把唯一的傘借給雪菜，卻沒有把自己算進去。雫因此第一次真正看見她的溫柔與自我犧牲，並用一句「要不要一起撐傘」把距離悄悄拉近。",
    quote: "「是真的有多，但沒有算進我自己……」",
    image: "assets/rain-hydrangea.jpg",
    alt: "雨天與紫陽花的記憶",
    position: "50% 50%",
  },
  cinema: {
    date: "10 月 | 電影票與二輪電影院",
    title: "電影散場後，我還在想她的側臉",
    text:
      "蒔把票交給雫，表面說可以去兩次，其實是在邀請又不敢承認。雫看懂她的繞遠路，反過來把那場電影變成兩人的共同記憶。",
    quote: "「我一個人去的話，應該沒意思吧……」",
    image: "assets/camera-date.jpg",
    alt: "相機與電影約會的記憶",
    position: "50% 42%",
  },
  kiss: {
    date: "10 月 | 飛吻練習事件",
    title: "飛吻練習中，請蒔前輩配合",
    text:
      "霞的鼓勵把雫推到練習場中央，蒔卻正好撞見。這不是大事件，卻非常適合呈現雫台上台下的反差萌，以及蒔外冷內熱的當機瞬間。",
    quote: "「嗚……像這樣嗎——？」",
    image: "assets/comic-roughs.jpg",
    alt: "飛吻練習草稿",
    position: "50% 38%",
  },
  moon: {
    date: "1 月 | 賞月時雫情緒低落",
    title: "月色下的短暫獨佔",
    text:
      "雫在聚會前先露出疲憊與自我懷疑，蒔沒有急著修好她，只把肩膀借出去。這個節點讓兩人的依賴從日常甜度進入更深的互相支撐。",
    quote: "「我可以再依靠一下嗎？」",
    image: "assets/moon-platform.jpg",
    alt: "月色站台與依靠",
    position: "50% 38%",
  },
  call: {
    date: "1 月末 | 深夜聊天室",
    title: "同時思念",
    text:
      "兩個人都在夜裡打開聊天室，都在猶豫要不要打擾對方。最後那句簡短訊息，替沉默留下了可以回去的入口。",
    quote: "「蒔前輩，在嗎？」",
    image: "assets/galaxy-window.jpg",
    alt: "銀河窗邊與深夜訊息",
    position: "50% 50%",
  },
  valentine: {
    date: "2 月 | 情人節巧克力",
    title: "把感謝包成心意",
    text:
      "雫把支持、陪練與想靠近的心意放進手作巧克力裡。蒔發現味道正合自己喜好時，這份禮物就不只是節日儀式，而是被記住的證據。",
    quote: "「我的這份心情，可以收下嗎？」",
    image: "assets/valentine-outfits.jpg",
    alt: "情人節服裝與巧克力意象",
    position: "50% 18%",
  },
};

const workDetails = {
  kissPractice: {
    arc: "日常糖分",
    title: "飛吻練習中，請蒔前輩配合",
    url: "https://app.notion.com/p/2691902cdf168147b69bed4c847c9894?pvs=1",
    summary:
      "霞把偶像飛吻練習推到雫面前，雫明明害羞卻努力配合；蒔意外撞見後表面鎮定，內心卻完全被那個笨拙又認真的瞬間擊中。",
    beats: [
      "霞用小惡魔式教學把雫推進練習狀態。",
      "雫的飛吻不熟練，反而露出舞台之外的可愛破綻。",
      "蒔的嘴硬和看呆形成喜劇節奏，適合作為全站輕甜入口。",
    ],
    motifs: "練習室、飛吻、看呆、反差萌、霞的搗亂。",
    quote: "「嗚……像這樣嗎——？」",
  },
  hanahaki: {
    arc: "暗面修復",
    title: "花吐",
    url: "https://app.notion.com/p/62c90a0020b04e48ae70634099a515fb?pvs=1",
    summary:
      "蒔把無法說出口的愛壓到身體裡，黑色鳶尾成為絕望與求救的象徵。這篇的核心不是痛苦本身，而是雫最後找到她、把外套和哭聲一起留在夜裡。",
    beats: [
      "蒔在購物與日常間開始吐出黑色花瓣，仍試圖用玩笑掩飾。",
      "同好會成員逐步察覺異常，雫逼近真相。",
      "夜晚、公園、外套與被找到，讓故事從自毀轉向修復。",
    ],
    motifs: "黑色鳶尾、夜晚長椅、外套、被找到、不能直說的愛。",
    quote: "黑色鳶尾代表絕望的愛；網站以花與夜色保留它的重量。",
  },
  rain: {
    arc: "雨與逃離",
    title: "我沒有躲雨，只是躲不掉妳",
    url: "https://app.notion.com/p/2691902cdf16812eaf10c239d9700165?pvs=1",
    summary:
      "蒔把唯一的傘借給雪菜，卻說自己有多帶，只是沒有把自己算進去。雫從這裡看見她的自我排除，也第一次把靠近包裝成一個很溫柔的邀請。",
    beats: [
      "雨天放學，蒔先照顧別人，自己卻準備淋雨。",
      "雫沒有拆穿她，只用關心把蒔的退路輕輕堵住。",
      "這是兩人關係最早的轉折：溫柔被看見，也被回以溫柔。",
    ],
    motifs: "傘、雨聲、紫陽花、嘴硬、自我犧牲。",
    quote: "「是真的有多，但沒有算進我自己……」",
  },
  cinema: {
    arc: "日常糖分",
    title: "電影散場後，我還在想她的側臉",
    url: "https://app.notion.com/p/2691902cdf16813b8f43f02fd832e7ab?pvs=1",
    summary:
      "蒔拿到電影票後繞遠路邀請雫，雫則溫柔地看懂她真正想要的是一起去。老電影院和散場後停留的視線，讓約會感藏在普通日常裡。",
    beats: [
      "兩張票被說成可以讓雫去兩次，實際上是蒔不敢直說的邀請。",
      "雫把話接回兩人同行，讓蒔不用承認也能被理解。",
      "散場後記得的不是電影，而是身邊人的側臉。",
    ],
    motifs: "老電影院、二輪片、側臉、票根、散場光。",
    quote: "如果是和蒔前輩一起看的話，會成為忘不了的回憶。",
  },
  moon: {
    arc: "深夜依靠",
    title: "月",
    url: "https://app.notion.com/p/2691902cdf1681a894a8da8aeb7a278d?pvs=1",
    summary:
      "賞月聚會前，雫先露出對自己表演與角色的疲憊。蒔沒有急著解決她，只借出肩膀，讓雫在大家來之前短暫獨佔一點溫柔。",
    beats: [
      "雫承認自己演不好某個被期待的樣子。",
      "蒔看見她的勉強，給出不是說教而是陪伴的回應。",
      "月光下的靠近讓兩人的信任往更深處推進。",
    ],
    motifs: "月光、肩膀、短暫獨佔、脆弱、努力的人。",
    quote: "「我可以再依靠一下嗎？」",
  },
  drunk: {
    arc: "曖昧試探",
    title: "醉？",
    url: "https://app.notion.com/p/2691902cdf16819e8309e55c269c6673?pvs=1",
    summary:
      "微醺或假裝微醺讓雫得到一次試探的藉口。她問蒔是否喜歡自己，蒔在鬆懈裡說出真心，兩人的界線因此變得更危險也更清楚。",
    beats: [
      "朋友聚會讓日常氣氛變得鬆動，雫抓住能撒嬌的間隙。",
      "喜歡與證明被半玩笑地說出口，實際是在測試蒔的心意。",
      "蒔的防線短暫失效，讓曖昧從猜測變成需要面對的事。",
    ],
    motifs: "微醺、汽水感、試探、直球、危險邊界。",
    quote: "「蒔前輩喜歡我嗎？」",
  },
  distance: {
    arc: "雨與逃離",
    title: "找不到除了遠離以外，不會傷害到妳的方法",
    url: "https://app.notion.com/p/2691902cdf1681b8a8a7f324c7a98b26?pvs=1",
    summary:
      "蒔把遠離理解成保護，因為她害怕自己的不安會傷到雫。這篇的重點是退後不是不愛，而是不知道怎麼靠近才不會弄疼對方。",
    beats: [
      "蒔看見雫時先計算離開，而不是走近。",
      "雫必須辨認冷淡背後的害怕，才不會被表面刺傷。",
      "故事把恐懼型依戀具體化成一個反覆退後的動作。",
    ],
    motifs: "距離、退後、害怕傷人、低溫、被誤讀的保護。",
    quote: "找不到不傷害妳的方法，所以只剩下遠離。",
  },
  mutualMissing: {
    arc: "深夜通訊",
    title: "同時思念",
    url: "https://app.notion.com/p/2691902cdf16816995fbdd5d1efe39c3?pvs=1",
    summary:
      "兩個人都在夜裡反覆打開聊天室，都在猶豫要不要打擾對方。最後雫先發出一句很短的訊息，卻替蒔贖回一整晚的孤單。",
    beats: [
      "深夜的聊天室成為兩個人都不敢越過的門。",
      "輸入中與沉默比正式告白更能呈現互相等待。",
      "一句簡短問候把思念從單向變成同時發生。",
    ],
    motifs: "聊天室、深夜、輸入中、等待、很短卻很亮的訊息。",
    quote: "「蒔前輩，在嗎？」",
  },
  roleplay: {
    arc: "面具與真心",
    title: "請扮演我喜歡的你",
    url: "https://app.notion.com/p/2691902cdf16812f9fb4e1dc4104f528?pvs=1",
    summary:
      "這篇把雫最核心的矛盾拉到台前：如果喜歡是扮演對方期待的樣子，那被愛的是角色，還是真正的自己。蒔也必須面對自己是不是只敢愛安全的表演。",
    beats: [
      "雫的演技能力變成感情裡最銳利也最脆弱的問題。",
      "蒔害怕自己要求太多，雫害怕自己只是被需要的角色。",
      "故事把戀愛寫成一場拆面具的對戲。",
    ],
    motifs: "角色、劇本、表演、被期待的人、面具裂縫。",
    quote: "如果她的喜歡，是去扮演我喜歡的人呢？",
  },
  fiveMinutes: {
    arc: "修復通話",
    title: "五分鐘的通話，替我贖了這一週的懊悔",
    url: "https://app.notion.com/p/2691902cdf1681619fe4d97bc6787464?pvs=1",
    summary:
      "一週的自責被壓進一通只有五分鐘的電話。蒔用笨拙的辯解換來雫的原諒，通話本身成為兩人重新靠近的回程票。",
    beats: [
      "懊悔累積太久，反而讓開口變得更困難。",
      "五分鐘不長，卻足夠讓聲音比文字更誠實。",
      "原諒不是結案，而是下一次能更早說出口的練習。",
    ],
    motifs: "電話、辯解、原諒、一週、重新靠近。",
    quote: "五分鐘的聲音，替一週的沉默打開缺口。",
  },
  christmas: {
    arc: "節日回憶",
    title: "那年冬天，我差點相信聖誕老人",
    url: "https://app.notion.com/p/2691902cdf1681baa836e4be3c0e6e1d?pvs=1",
    summary:
      "蒔在聖誕聚會中逃到頂樓，雫追上去，不是為了逼她回到熱鬧裡，而是想成為她可以相信的節日奇蹟。同款圍巾讓寂寞有了證據。",
    beats: [
      "聚會越熱鬧，蒔越感覺自己格格不入。",
      "雫追上頂樓，承認自己無法放著寂寞的蒔不管。",
      "交換禮物與同款圍巾，把節日從儀式變成羈絆。",
    ],
    motifs: "頂樓、聖誕老人、同款圍巾、追上來、被相信的善意。",
    quote: "「蒔前輩相信聖誕老人嗎？」",
  },
  valentine: {
    arc: "節日回憶",
    title: "情人節",
    url: "https://app.notion.com/p/2691902cdf168173bfe3eeac36868bb3?pvs=1",
    summary:
      "雫把支持與陪練的感謝放進手作巧克力裡，還事先確認蒔的口味。這份禮物的甜不是糖，而是蒔發現自己真的有被記住。",
    beats: [
      "雫用感謝當作外衣，把更深的心意遞出去。",
      "蒔發現味道完全合自己喜好，心意因此變得具體。",
      "節日禮物成為接受被愛的練習。",
    ],
    motifs: "手作巧克力、口味、感謝、被記住、節日告白前夜。",
    quote: "「我的這份心情，可以收下嗎？」",
  },
  valentineAfter: {
    arc: "節日後續",
    title: "情人節・在那之後的小插曲",
    url: "https://app.notion.com/p/2691902cdf1681399904c004cb0619f1?pvs=1",
    summary:
      "情人節後的小插曲把甜味延長成更近一步的慌亂。那些比蚊子還小的聲音、被打斷的話和有口難言的表情，讓曖昧變得可愛又可惜。",
    beats: [
      "節日事件沒有立刻結束，而是在後續日常裡繼續發酵。",
      "蒔用過快的反應打斷雫，反而暴露自己的慌張。",
      "小劇場感補足主線之外的甜與尷尬。",
    ],
    motifs: "小聲、打斷、慌張、後續糖分、說不完的話。",
    quote: "有口難言的樣子，比直接說出口更像告白。",
  },
  loveReading: {
    arc: "暗面修復",
    title: "讀愛障礙",
    url: "https://app.notion.com/p/a8d117ff4b684d62a4ac63e016303231?pvs=1",
    summary:
      "書架上堆滿關於愛的書，反而說明蒔不是不想愛，而是不知道如何接受被愛。這篇適合成為網站的文學核心，因為它把笨拙求解寫得很安靜。",
    beats: [
      "蒔試著用書本理解愛，像把感情當成能查答案的題目。",
      "越是認真學習，越暴露她不相信自己也能被愛。",
      "雫的存在讓讀懂愛不再只是理論，而是日常練習。",
    ],
    motifs: "書架、愛是什麼、接受被愛、笨拙學習、安靜修復。",
    quote: "書越多，越顯得她是在笨拙學習如何接受被愛。",
  },
};

const setHeaderState = () => {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 24);
};

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();

timelineTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const next = memories[tab.dataset.memory];
    if (!next) return;

    timelineTabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-selected", String(selected));
    });

    memoryImage.src = next.image;
    memoryImage.alt = next.alt;
    memoryImage.style.objectPosition = next.position || "50% 50%";
    memoryDate.textContent = next.date;
    memoryTitle.textContent = next.title;
    memoryText.textContent = next.text;
    memoryQuote.textContent = next.quote;
  });
});

workFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.workFilter;

    workFilterButtons.forEach((item) => item.classList.toggle("active", item === button));
    workCards.forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.arc !== filter;
    });
  });
});

const openWorkModal = (card) => {
  const detail = workDetails[card.dataset.workId];
  if (!detail) return;

  const cardImage = card.querySelector("img");
  workModalImage.src = cardImage?.src || emptyPixel;
  workModalImage.alt = cardImage?.alt || detail.title;
  workModalImage.style.objectPosition = cardImage ? getComputedStyle(cardImage).objectPosition : "";
  workModalArc.textContent = detail.arc;
  workModalTitle.textContent = detail.title;
  workModalSummary.textContent = detail.summary;
  workModalBeats.innerHTML = detail.beats.map((beat) => `<li>${beat}</li>`).join("");
  workModalMotifs.textContent = detail.motifs;
  workModalQuote.textContent = detail.quote;
  workModalLink.href = detail.url;
  workModal.hidden = false;
  document.body.style.overflow = "hidden";
};

const closeWorkModal = () => {
  workModal.hidden = true;
  workModalImage.src = emptyPixel;
  workModalImage.style.objectPosition = "";
  document.body.style.overflow = "";
};

workCards.forEach((card) => {
  card.addEventListener("click", () => openWorkModal(card));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openWorkModal(card);
    }
  });
});

galleryFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.galleryFilter;

    galleryFilterButtons.forEach((item) => item.classList.toggle("active", item === button));
    if (galleryRelicSet) {
      galleryRelicSet.hidden = filter !== "all" && galleryRelicSet.dataset.category !== filter;
    }
    galleryItems.forEach((item) => {
      item.hidden = filter !== "all" && item.dataset.category !== filter;
    });
  });
});

const openLightbox = (item) => {
  lightboxImage.src = item.dataset.full;
  lightboxImage.alt = item.querySelector("img")?.alt || "";
  lightboxCaption.textContent = item.dataset.caption || "";
  lightboxArtist.textContent = item.dataset.credit || `繪師：${item.dataset.artist || "待補"}`;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
};

galleryItems.forEach((item) => {
  item.addEventListener("click", () => openLightbox(item));
});

dialogueItems.forEach((item) => {
  item.addEventListener("click", () => openLightbox(item));
});

const closeLightbox = () => {
  lightbox.hidden = true;
  lightboxImage.src = emptyPixel;
  lightboxArtist.textContent = "";
  document.body.style.overflow = "";
};

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

workModalClose.addEventListener("click", (event) => {
  event.stopPropagation();
  closeWorkModal();
});

workModal.addEventListener("click", (event) => {
  if (event.target.closest("[data-work-modal-close]")) {
    closeWorkModal();
    return;
  }

  if (event.target === workModal) closeWorkModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
  if (event.key === "Escape" && !workModal.hidden) closeWorkModal();
});
