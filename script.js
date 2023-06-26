const movies = [
  {
    classification: "TV-MA",
    duration: "1 h 39 min",
    match: "New",
    name: "The Beast",
    frontPage:
      "https://occ-0-33-37.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVK0soH12ei44FFHU4eatp3pyEkJ1qOuepwA_53K03GcUNBQvytHXoIZhjHuPGY-8oKp4oYsrx9vyD167RHxh6g3J2DtTV4mO4Y08OxKaMVDUHdgOhSlfd6_U6zzOljUFkafpc6zGeeoG-xsPFSFFi-fvLBXDdw-oTqs78ItMNaw-G4PUkJ8gagx.jpg?r=1a3",
    tags: ["Raw", "Powerful", "Action Thriller"],
    thumbnail:
      "https://occ-0-33-37.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABdoVhu2NOFG1_eXU8YBHMnL4IQ2zeU_Lj5FQttHXmo0mvqf8kDqBBdSTO7BZdaTgkaW6WSdJIAwPXEH5c3ZPkcH4qKRuufLM6ntahkTD51yzJKCs8RYJhe5dQZtOhg.jpg?r=76b",
  },
  {
    classification: "PG",
    duration: "1 h 55 min",
    match: "New",
    name: "The Christmas Chronicles",
    frontPage:
      "https://occ-0-33-37.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb87DMORTCapwbwaXCscEoFbvLYStEWoSwX4uMYeLOzNF-Zqzci1caRK8-ZG4ReWGVGMCg71njV6E9RfMD9E5iQR_ngzpteOd3MlSkkLZ33bwqKUM4rQf7Z4fAXDXf1wCz4joq2mlZC6U824VT0OuKllTY3hGJOkCYYZLhUyQmrErtbiuWnJ_qs6.jpg?r=ab0",
    tags: ["Exciting", "Upbeat", "Action Comedy"],
    thumbnail:
      "https://occ-0-33-37.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQFG86Dt44u21VoR_NPR1BQGCokC7vOj5Y_oTsUZnOAWCesnihR2I-UlH48Rnm7DIK_WahA6fSrJJrsdXBTcMAp5iwlZeyuzqoqUKNPel9ota89mCFBcei6xdcFYZg.jpg?r=62d",
  },
  {
    classification: "TV-MA",
    duration: "1 Season",
    match: "94% for you",
    name: "100 days to fall in love",
    frontPage:
      "https://occ-0-33-37.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQzbzH5gEmBD2J24xrtqHAC7A1Lt-j6II2X1asbvLRZGalrj0aFyyZMvx1Da3tUZhxs8a1C8ytMIMHQcEJSoQ8unhbBgaEgZByU--vBDvamJCxzwm_vT8VuQ-m8M1DlfT9Sau5xtSUWUmVOWXgf5w4DqYiYw.jpg?r=f7e",
    tags: ["Soap Opera", "Emotional", "Romantic"],
    thumbnail:
      "https://occ-0-33-37.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQXnP1mibVfw3kySv4Wlzh1JrE2WyRv9J4aZbZ8_JDL2tEx953vHAtN0Nhve7YOvvv0HDcgHOXhC6-11S87fwTPrFQN_.jpg?r=8a4",
  },
  {
    classification: "TV-MA",
    duration: "1 h 42 min",
    match: "New",
    name: "Mosul",
    frontPage:
      "https://occ-0-33-37.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZJWbYW_P7Hz29iTg1jLQeQAIb_vxoQLyXZfdYOyp41ShO2evzPO_n2itLLdSK3Sm-Zvb-BpY57MxwnO_8zFLQK0t7czacLzgRHWvs-motw2mkFrKO_XiTR-ggcpcGd83tMxjyq-Q7qa_HvxocPTKttjhZufGx-PQdJkvTyeMVQauLAEpC5THVA0.jpg?r=4a0",
    tags: ["Raw", "Sinister", "Action Thriller"],
    thumbnail:
      "https://occ-0-33-37.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABeuw81XhdpTb-UHoHeRPKfNEr2_GaMfSJqPi1ViVL-dRCMN1Wlr-csDmNG27mZcg2UcnLKYRcOPBBglPwDK8CCs7DvzCLDlyaH5IKovtYGu6gXXduUdi5EAzVXL8jw.jpg?r=53a",
  },
  {
    classification: "TV-MA",
    duration: "1 h 38 min",
    match: "New",
    name: "You",
    frontPage:
      "https://occ-0-33-37.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYfsGFDoGVhI_znscqb4pCgWKEKrJnhgk8_fTNFF2jl_Mv1Jr6DiY04Ec5Jn8nqAByMiZW3kj0wpDCL7DD2ko9EGB9mnMX2URjeXpZQhfbxiV-6M35nx8sNCw6schrxmjIqk7gLsrIpIUdkgYr1s8KTdjbCqX125jpGktefgkllYFoZsglkstdXR.jpg?r=939",
    tags: ["Psychological", "Sinister", "Thriller"],
    thumbnail:
      "https://occ-0-33-37.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABRrlyMYGaWocQ-xUGqorSUyG0zXspflDdmU6tgA9g0lU1JsdLh5caTTQmiaEMTamhfX0A-j8zATa4C_FiGhL9We8q0lBtAy06yMQ4KvthwfJrMYVFmv5BkHgMKhVKQ.jpg?r=a2e",
  },
  {
    classification: "TV-14",
    duration: "2 Seasons",
    match: "98% saves you",
    name: "A place to dream",
    frontPage:
      "https://occ-0-33-37.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU1R4MeZNA8Fc7D-61o5GuBQ4qKUGbF6rkAu0ScABv9P9suXdeg2wAv4DiXkk3i8Eow7DaW7GnYnf3V63s4Lx2eJTokz2aUVQGaBX8dq_30U1SdK7wz30kcrIEJ8sOFdpFEZmO6vX3sXauQQgHaoPwg9RpkMtGdGfEVKwjBdTJ2a3vKddv8f7O6WWnOKiDa1cy1HtUdPl66uU-U-XkrPu0fOKQ.jpg?r=308",
    tags: ["Intimate", "Emotive", "Romantic"],
    thumbnail:
      "https://occ-0-33-37.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABUWKtZzgFXImXjzJj8YHN5U3BjUOTQ3qsOF4Z4j73qiN4d8FEsZ1vzMVjHMoZoWJdcAN8SyfhFM74noQYmu_kYSOucV0Q58R4feKKLG6hGNcnksg8HpLgG_g3NFT4KlHgDnXaaMJy_lut1-hJY0yFy_bLZeeDEI.jpg?r=64c",
  },
  {
    classification: "TV-MA",
    duration: "Miniseries",
    match: "99% for you",
    name: "Queen's Gambit",
    frontPage:
      "https://occ-0-33-37.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABY0k3-XrXx0_5dIj1H88TnIXTw2gf_9tOKZNH_7EFeQ7pRGmKGx_1OnN6soSLLmUptDtqYs_L-g_YZzaZy2POr0kPYw1JMSx6k3GdodT6OPLV44wjmuOmLYv1t7c4vFV_GKuju1qEyMTxebeuadOLvqlEGQFLJoL2QCWieEbhgkrdQQy0SCkoX8k.jpg?r=402",
    tags: ["Complex", "Intimate", "Emotional"],
    thumbnail:
      "https://occ-0-33-37.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABV7nw1c092OdlLiws9sXGF_UUPv46-WQAaT9QLEVjebQNBOgpG06FF-0-hZUYcr0rGaBl5LRjV0tm7wHerW9T2PVMb1Mh7f0IjaFMToQkoZirnTSy7rJLjzFRugarw.jpg?r=638",
  },
  {
    classification: "TV-MA",
    duration: "4 Seasons",
    match: "98% for you",
    name: "The crown",
    frontPage:
      "https://occ-0-33-37.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdGhDCaJPGRXb1MylrkE_C1-mlns3o9wrQBCycbTn44j32VkXgtoAV93LvzmY0WZQm7Q_xRO6tvmH_K1F2qFT-c71QRka6OQZ8m4lYF0O9bZceVHV9eSR7mb-7tBRvwBD1WjfvvJsrEldniAy9yL3caNMlega3jyZAW-BexsqXB6Bnr-McTK3Bf8yydJsDPxXGK-Kv5GF16oK1C-j0hf9EJ2Lg.jpg?r=d3b",
    tags: ["Flavourful", "Intimate", "Drama"],
    thumbnail:
      "https://occ-0-33-37.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQHxoDg-OXJyCqoSYJAXN33LQrwW8MJFQhLi65l5v5mcLW6Td97gGBomegzi4OGju0OszdIeuCfJSEo1M-rmgqoVXO-_WqvrOu5VSo3vpHQRlYKn5G6fPv6S-rlRACYXRPgESO4mD8NwsNroPZ-OrkDHwea9BWU.jpg?r=7e5",
  },
  {
    classification: "TV-PG",
    duration: "1h 45min",
    match: "96% for you",
    name: "The Christmas Chronicles",
    frontPage:
      "https://occ-0-33-37.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXSEFpS7MXCfMnZP0zLU3ET7yVnwWUF7Rllb92Xi1BZFc3y5Re_hcT8ihL395cf_6AAEslhmv1mJsnSux3sSp_irPyEdO_46zGMbYG5VGaVO4KD2l_7asN_yBxVF_UBhXmg9lD-g--AqEmArK3NoJ3SWc8T2axWNRJ75PWWtT9YISJpLOJQ-CQl2.jpg?r=4c4",
    tags: ["Exciting", "Upbeat", "Action Comedy"],
    thumbnail:
      "https://occ-0-33-37.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABRRMNlFkdGoA3q5rcYezJFS50-F1qIyVKU2v4lYVKH1zKnH13j2yM3pDkj0nYu9jQIxJH4W73UORnhZpledfT3nasIhjJ4YyYmAq_5VrwIZiGzpdJBTG37Lq_yERnw.jpg?r=395",
  },
  {
    classification: "PG",
    duration: "1 h 35 min",
    match: "New",
    name: "SpongeBob to the rescue",
    frontPage:
      "https://occ-0-33-37.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbT2F2ZLaSpg3xkHUAjzOS3rcHgcGtVWJVHh6LUnWsfWm8Focz-b3f-xJ9qgJfvB2qyfp-eYxW5U_QaKyyr6wWkCqHr34dlkLEkX8vfdHtpF-O7QQAK5fZzBzqqDyiWvlOyVVisfEyUwVMhNnQM99Q3MDvSZB0Zv4zde7tkMg1mAcET-JZUGYwgw.jpg?r=81a",
    tags: ["Wacky", "Exciting", "Kids"],
    thumbnail:
      "https://occ-0-33-37.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABRbkidT-GFeslVs43LI549F6vBzFrXfL2mNpdyPlCfP89RqxA1Sp2E-PvRrH9uqCs6nzK2BCh90JrkpU8GoGgKshI0kl3ZvV17OUmkA539R_Tq3KDiyJkZw5TMAG8g.jpg?r=7db",
  },
];
const buttons = [
  {
    clase: "play",
    icono:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M6 2l52 30L6 62V2z"></path></svg>',
  },
  {
    clase: "plus",
    icono:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M32 16v32m16-16H16"></path></svg>',
    tooltip: "Add to my List",
  },
  {
    clase: "like",
    icono:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M54 35h2a4 4 0 1 0 0-8H34a81 81 0 0 0 2-18 4 4 0 0 0-8 0s-4 22-18 22H4v24h10c4 0 12 4 16 4h20a4 4 0 0 0 0-8h2a4 4 0 0 0 0-8h2a4 4 0 0 0 0-8"></path></svg>',
    tooltip: "I like this",
  },
  {
    clase: "dislike",
    icono:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M10 29H8a4 4 0 0 0 0 8h22a81 81 0 0 0-2 18 4 4 0 0 0 8 0s4-22 18-22h6V9H50c-4 0-12-4-16-4H14a4 4 0 0 0 0 8h-2a4 4 0 0 0 0 8h-2a4 4 0 0 0 0 8"></path></svg>',
    tooltip: "Not for me",
  },
  {
    clase: "arrow",
    icono:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path  d="M20 26l11.994 14L44 26"></path></svg>',
    tooltip: "More info",
  },
];

window.addEventListener("load", () => {
  const wrapperMovies = document.querySelectorAll(".moviesWrapper");
  const moviesSection = document.querySelectorAll(".moviesSection");
  wrapperMovies.forEach((wrapper, i) => {
    movies.map((movie, j) => {
      wrapper.innerHTML += `
    <div class="movie ${
      moviesSection[i].classList.contains("top10") ? "main" : ""
    }">
      <div class="thumbnail" style="background-image: url(${
        movie.thumbnail
      })"></div>
    </div>`;
    });
  });
  moviesSection.forEach((section, index) => {
    section.style.transitionDelay = `${index * 0.1}s`;
    section.classList.remove("hidden");
  });
  document.querySelectorAll(".movie.main").forEach((element, index) => {
    element.addEventListener("mouseenter", () => {
      if (window.innerWidth <= 500) return false;
      const modales = document.querySelectorAll("#movieModal");
      if (modales)
        modales.forEach((modal) => {
          modal.classList.add("hidden");
          setTimeout(() => modal.remove(), 100);
        });
      const modal = document.createElement("div");
      modal.id = "movieModal";
      modal.classList.add("hidden");
      let htmlbuttons = "";
      let htmlTags = "";
      buttons.map(
        (button) =>
          (htmlbuttons += `<div class="button ${button.clase}" ${
            button.tooltip ? `data-tooltip="${button.tooltip}"` : ""
          }>${button.icono}</div>`)
      );
      movies[index].tags.map(
        (tag) => (htmlTags += `<div class="tag">${tag}</div>`)
      );
      modal.innerHTML += `
      <div class="frontPage" style="background-image: url(${movies[index].frontPage})"></div>
      <div class="info">
        <div class="buttons">${htmlbuttons}</div>
        <div class="data">
          <div class="match">${movies[index].match}</div>
          <div class="classification">${movies[index].classification}</div>
          <div class="duration">${movies[index].duration}</div>
        </div>
        <div class="tags">${htmlTags}</div>
      </div>`;
      if (element.getBoundingClientRect().x + 350 > window.innerWidth) {
        modal.classList.add("righted");
      } else if (element.getBoundingClientRect().x > 350 / 2) {
        modal.classList.add("centered");
      }
      element.append(modal);
      setTimeout(() => modal.classList.remove("hidden"), 100);
    });
    element.addEventListener("mouseleave", () => {
      const modal = document.getElementById("movieModal");
      if (modal) {
        modal.classList.add("hidden");
        setTimeout(() => modal.remove(), 300);
      }
    });
  });
});
