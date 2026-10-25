/**
 * wedding-data.js — Customer-facing editable data layer for ayushi-sarvesh
 * Edit this file to update couple names, tagline, dates, events, venue, and images.
 */

window.WEDDING_DATA = {
  couple: {
    bride: "Dr. Pallavi Purohit",
    groom: "Dr. Sarvesh Kumar Singh",
    tagline: "#FromOTTableToWeddingVows",
    hashtag: "#FromOTTableToWeddingVows",
    displayNames: "Dr. Pallavi & Dr. Sarvesh",
    shortBride: "Pallavi",
    shortGroom: "Sarvesh",
    invitationPreamble: "Together with our families,",
    invitationSubtitle: "We invite you to bless us and celebrate our wedding",
    story: "From saving lives side-by-side in the Operation Theatre to uniting their hearts in sacred wedding vows, two compassionate doctors begin their journey of life.",
  },

  footer: {
    invitationNote: "Eagerly waiting to celebrate with you, best regards & love from",
    hosts: "Dr BK Purohit & Dr Sujata Hota",
    family: "& Purohit family",
  },

  family: {
    bride: {
      name: "Dr. Pallavi Purohit",
      title: "The Bride",
      father: "Dr. Birendra Kumar Purohit",
      mother: "Dr. Sujata Hota",
      brother: "Prateek Purohit",
      sisterInLaw: "Ayushi Singh",
      portrait: "./editable/assets/bride-portrait.jpg",
    },
    groom: {
      name: "Dr. Sarvesh Kumar Singh",
      title: "The Groom",
      father: "Anil Kumar Singh",
      mother: "Late Saraswati Singh",
      portrait: "./editable/assets/groom-portrait.jpg",
    },
  },

  wedding: {
    dateLabel: "9 December 2026",
    weddingISO: "2026-12-09T18:30:00+05:30",
  },

  venue: {
    name: "Empires Beachfront",
    fullName: "Empires Beachfront, Puri",
    address: "New Marine Drive Road, Sipasarubali, Baliapanda, Puri, Odisha 752001",
    mapsUrl: "https://share.google/67zNSpffo3mrQLxCX",
    searchMapsUrl: "https://www.google.com/maps/search/?api=1&query=Empires+Beachfront,+Puri",
  },

  events: [
    {
      name: "Wedding & Reception",
      day: "Wednesday, 9 Dec 2026",
      glyph: "💍",
      date: "9 Dec 2026",
      time: "6:30 PM onwards",
      venue: "Garden Area (Varmala & Wedding)",
      dressCode: "Traditional Indian",
      subEvents: [
        { label: "Celebration begins", time: "6:30 PM onwards", venue: "Empires Beachfront" },
        { label: "Varmala", time: "8:00 PM", venue: "Garden Area" },
        { label: "Wedding Ceremony", time: "10:30 PM", venue: "Garden Area" },
      ],
      note: "Celebration begins at 6:30 PM onwards · Varmala at 8:00 PM · Wedding Ceremony at 10:30 PM",
      caricature: "./editable/assets/caricature-wedding.jpg",
    },
  ],

  moments: [
    {
      name: "Mehendi",
      day: "Day 1",
      glyph: "❁",
      date: "8 Dec 2026",
      src: "./editable/assets/caricature-mehendi.jpg",
      caricature: "./editable/assets/caricature-mehendi.jpg",
      note: "Henna, melody & delightful lunch in the garden.",
    },
    {
      name: "Engagement",
      day: "Day 1",
      glyph: "💍",
      date: "8 Dec 2026",
      src: "./editable/assets/caricature-engagement.jpg",
      caricature: "./editable/assets/caricature-engagement.jpg",
      note: "Two rings, two hearts & sunset high tea.",
    },
    {
      name: "Sangeet",
      day: "Day 1",
      glyph: "✧",
      date: "8 Dec 2026",
      src: "./editable/assets/caricature-sangeet.jpg",
      caricature: "./editable/assets/caricature-sangeet.jpg",
      note: "A night of dance, music & celebratory dinner.",
    },
    {
      name: "Haldi",
      day: "Day 2",
      glyph: "❋",
      date: "9 Dec 2026",
      src: "./editable/assets/caricature-haldi.jpg",
      caricature: "./editable/assets/caricature-haldi.jpg",
      note: "Sunshine, turmeric laughter & poolside splashes.",
    },
    {
      name: "Wedding & Reception",
      day: "Day 2",
      glyph: "☀",
      date: "9 Dec 2026",
      src: "./editable/assets/caricature-wedding.jpg",
      caricature: "./editable/assets/caricature-wedding.jpg",
      note: "Varmala at 8:00 PM and wedding ceremony at 10:30 PM",
    },
  ],

  eventDates: {
    "Wedding & Reception": "2026-12-09T18:30:00+05:30",
    Wedding: "2026-12-09T22:30:00+05:30",
    Reception: "2026-12-09T18:30:00+05:30",
  },

  music: {
    src: "./editable/assets/bg-music.mp3",
    startTime: 23.0,
    title: "Dam Tara Dam Tara Dam-Dam (Flute Instrumental Cover)",
  },

  images: {
    couple: "./editable/assets/couple-walking.png",
    hero: "./editable/assets/hero-arch.jpg",
    ringsVignette: "./editable/assets/rings-seashell-vignette.png",
    venueMap: "./editable/assets/venue-map-puri.jpg",
    footerWash: "./editable/assets/footer-wash-DG1rtX_C.jpg",
    openerVideo: "./editable/assets/wedding-opener.mp4",
    ganeshJi: "./editable/assets/ganesh-ji.png",
    bridePortrait: "./editable/assets/bride-portrait.jpg",
    groomPortrait: "./editable/assets/groom-portrait.jpg",
    caricatureMehendi: "./editable/assets/caricature-mehendi.jpg",
    caricatureEngagement: "./editable/assets/caricature-engagement.jpg",
    caricatureSangeet: "./editable/assets/caricature-sangeet.jpg",
    caricatureHaldi: "./editable/assets/caricature-haldi.jpg",
    caricatureWedding: "./editable/assets/caricature-wedding.jpg",
  },
};
