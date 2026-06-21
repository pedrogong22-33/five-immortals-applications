import React, { useState, useEffect, useRef } from "react";

/* ============================================================
   FIVE IMMORTALS TEMPLE: 2026 Course Data (from official site)
   ============================================================ */

const COURSES_2026 = [
  {
    id: "tai-he-fist-apr",
    month: "APR",
    day: "03",
    dateRange: "April 3 – April 9, 2026",
    status: "past",
    fee: "6,900 RMB",
    deposit: "1,900 RMB",
    title: "Wudang Tai He Fist & Natural Healing Foundational Methods",
    teacher: "Taught by Master Li Shifu",
    summary: "Wudang martial arts and longevity techniques, applicable for both combat and personal healing, to address physical issues and promote overall well-being.",
    purpose: "To learn Wudang martial arts and longevity techniques, applicable for both combat and personal healing. Participants address their own physical issues while building genuine combat skill, promoting overall health and well being. Tai He Fist is one of the foundational systems taught at the temple, combining the practical power of striking, locking, and footwork with the internal cultivation that distinguishes Wudang martial arts from purely external styles. Students leave with a complete 24 form routine, an understanding of combat power generation, and a set of self healing tools they can use for the rest of their lives.",
    schedule: [
      {
        label: "Theory",
        text: "Principles of martial application and combat methods. Methods for relieving pain including moxibustion, cupping, music therapy, qigong acupressure, and massage. Daoist etiquette and taboos.",
      },
      {
        label: "Early Morning (2h)",
        text: "Longevity Qi Gong, five forms (Expel the Old Take In the New; Red Phoenix Facing the Sun; Five Qi Return to the Source; Dragon Claw Gong; Embracing the Origin and Guarding the One). Opening the gate, clearing the orifice, 21-form rhythmic detoxification exercise, Five Tones Healing Song, methods to regulate cervical, thoracic, and lumbar spine issues.",
      },
      {
        label: "Morning (3h)",
        text: "Wudang Tai He Fist 24-form routine and combat power training.",
      },
      {
        label: "Afternoon (3h)",
        text: "Wudang Tai He Fist 24-form routine and combat power training.",
      },
      {
        label: "Evening (2h)",
        text: "Tai Chi Standing Meditation, Opening and Closing, Submerging and Floating pillar. Sitting meditation cultivating stillness.",
      },
    ],
    requirements: null,
    privateContact: null,
  },
  {
    id: "taichi-french-group",
    month: "APR",
    day: "13",
    dateRange: "April 13 – May 3, 2026",
    status: "past",
    fee: null,
    deposit: null,
    title: "Wudang Tai Chi Course (French Group)",
    teacher: "Led by disciple Cheng Feng",
    summary: "A private course for a French-speaking group, led directly by disciple Cheng Feng. Prior appointment required.",
    purpose: "This course is privately facilitated and run directly by Cheng Feng for a French-speaking group.",
    schedule: null,
    requirements: null,
    privateContact: "loan@silentclarity.school",
  },
  {
    id: "water-fire-taichi-jun",
    month: "JUN",
    day: "07",
    dateRange: "June 7 – 21, 2026",
    status: "now",
    fee: "9,900 RMB",
    deposit: "1,900 RMB",
    title: "Water and Fire Tai Chi Fist & Self-Healing",
    teacher: "Taught by Master Li Shifu",
    summary: "Ancient Eastern methods of guiding and cultivating qi (Dao Yin) for health, self-treatment of injuries, and Tai Chi combat methods for protection.",
    purpose: "Studying ancient Eastern guiding and cultivating qi (Dao Yin) for health and self treatment of injuries. Tai Chi combat methods for protection. Water and Fire Tai Chi is named for the way it joins two opposite qualities, the softness and yielding of water with the directness and power of fire, into a single coherent system. Students learn how to move from total relaxation into explosive power without losing structure, how to read and redirect an opponent's force through push hands, and how to apply the same principles of guided breath and circulation to heal old injuries and chronic pain. It is a complete practice for anyone who wants Tai Chi as both a martial art and a long term health discipline, not just a slow form performed for its own sake.",
    schedule: [
      {
        label: "Theory",
        text: "Tai Chi theory, historical development, current status, and combat principles. Pain relief through fire therapy, moxibustion, cupping, music therapy, and Tai Chi qigong acupressure massage. Daoist etiquette and taboos.",
      },
      {
        label: "Early Morning (1.5h)",
        text: "Longevity Qi Gong, five forms. Opening the gate, clearing the orifice, 21-form rhythmic detoxification exercise, Five Tones Healing Song, methods to regulate cervical, thoracic, and lumbar spine issues.",
      },
      {
        label: "Morning (2.5h)",
        text: "Water and Fire Tai Chi routine: foundational methods, hand, elbow, shoulder, hip, leg, and footwork. Single and Double Push Hands.",
      },
      {
        label: "Afternoon (2.5h)",
        text: "Tai Chi routine: foundational methods, stances, breathing. Relaxing shoulders, turning the windlass, Silk Reeling (Chan Si Li). Single and Double Push Hands.",
      },
      {
        label: "Evening (1.5h)",
        text: "Tai Chi Standing Meditation. Sitting meditation cultivating stillness, Lying Dragon meditation.",
      },
    ],
    requirements: null,
    privateContact: null,
  },
  {
    id: "wudang-sword-internal-alchemy",
    month: "JUN",
    day: "29",
    dateRange: "June 29 – July 23, 2026",
    status: "open",
    fee: null,
    deposit: null,
    title: "Wudang Sword & Internal Alchemy",
    teacher: "Facilitated by disciple Cheng Ling",
    summary: "A private course combining Wudang Sword practice with Internal Alchemy foundations, led directly by disciple Cheng Ling. Prior appointment required.",
    purpose: "This course is privately facilitated and run directly by Cheng Ling. Detailed daily content is shared individually with applicants upon contact.",
    schedule: null,
    requirements: null,
    privateContact: "lindsey@wudangwhitehorse.com",
  },
  {
    id: "secret-golden-flower-1",
    month: "JUL",
    day: "29",
    dateRange: "July 29 – Aug 12, 2026",
    status: "open",
    fee: "13,300 RMB",
    deposit: "2,600 RMB",
    title: "Secret of the Golden Flower",
    teacher: "Taught by Master Li Shifu",
    quote: "\"The Mysterious Pass has one opening; the center of the opening contains subtlety. It comprises movement and stillness, the void, the divine, the profound and the mysterious.\"",
    summary: "A foundational Internal Alchemy (Dan Dao) course exploring the path of Daoist cultivation through classical texts including the Secret of the Golden Flower.",
    purpose: "To help participants understand the path and methods of Daoist cultivation in China; enhance each individual's comprehension and ability to distinguish different levels of cultivation; open the gate to wisdom, guiding us to find direction amidst the chaos and illusory changes of social life; discover the value and meaning of our existence; explore the meaning of life and the truths of the universe. Strengthen one's energy field and vibrational frequency; cultivate a heart of compassion, love, forgiveness, and tolerance; awaken the willingness to assist others and serve all beings. To prepare for future opportunities to unify the body and the higher self, elevate oneself, and thereby create a true body, an immortal body, and attain the Dao.",
    schedule: [
      {
        label: "Course Contents",
        text: "Primarily theory-based, learning Daoist etiquette and taboos. Fundamentals of Internal Alchemy theory, standing qigong methods, sitting meditation to gather qi, sleep-based qi retention methods, and different breathing techniques for various stages. Basics of the Microcosmic Orbit, explanation of key points in alchemical texts: \"49 Barriers\", \"Qingjing Jing: The Scripture of Purity and Tranquility\", \"Da Cheng Jie Yao: Essentials of the Shortcut to the Great Achievement\", \"Tai Yi Jing Hua Zong Zhi: The Secret of the Golden Flower\". Overview of Dao De Jing, Yin Fu Jing, Longmen Heart Method, Huang Ting Jing, Nei Jing Tu. Basic theory of Female Alchemy, fasting, dietary requirements, daily life regulation, and the building-the-foundation period.",
      },
      {
        label: "Early Morning (1.5h)",
        text: "Longevity Qi Gong, six forms, gate-opening and detoxification methods, regulation of spinal issues.",
      },
      {
        label: "Morning (3h)",
        text: "Theory and practice of internal alchemy, cultivating and circulating energy. Methods for focusing the mind and igniting the inner fire.",
      },
      {
        label: "Afternoon (3h)",
        text: "Continuing internal alchemy practices and meditation. Daily life adjustments to aid cultivation of inner energy and improving physical health.",
      },
      {
        label: "Evening (1.5h)",
        text: "Standing Meditation, sitting meditation cultivating stillness, Lying Dragon meditation.",
      },
    ],
    requirements: [
      "Basic foundation of sitting meditation and/or cultivation of stillness (any type)",
      "No diseases or disabilities",
      "Vegetarian diet, with monastic discipline (adhering to the temple's precepts)",
      "Destiny to learn from the master",
    ],
    privateContact: null,
  },
  {
    id: "taichi-medicine-meditation-aug",
    month: "AUG",
    day: "16",
    dateRange: "Aug 16 – 27, 2026",
    status: "open",
    fee: null,
    deposit: null,
    title: "Water and Fire Tai Chi, Beginner Daoist Medicine & Sitting Meditation",
    teacher: "Facilitated by disciple Cheng Jiu",
    summary: "A combined course covering Water and Fire Tai Chi, beginner Taoist medicine, and sitting meditation, privately facilitated by disciple Cheng Jiu. Prior appointment required.",
    purpose: "This course is privately facilitated and run directly by Cheng Jiu, blending Tai Chi practice, beginner Taoist medicine, and seated meditation.",
    schedule: null,
    requirements: null,
    privateContact: null,
  },
  {
    id: "tian-gang-ba-bu",
    month: "SEP",
    day: "01",
    dateRange: "Sep 1 – 9, 2026",
    status: "open",
    fee: "6,900 RMB",
    deposit: "1,900 RMB",
    title: "Flower of Life: Tian Gang Ba Bu & Five Dragons Pure Yang",
    teacher: "Taught by Master Li Shifu",
    summary: "Heavenly Dipper Eight Steps (beginner level) combined with the Five Dragons Pure Yang Body Protection Skill, for combat and self-healing.",
    purpose: "Obtaining cosmic energy assistance. Practicing routines on the Flower of Life pattern for combat and self healing of injuries. Tian Gang Ba Bu, the Heavenly Dipper Eight Steps, is a rare practice rooted in the observation of the Big Dipper constellation and its role in classical Daoist cosmology. Paired with the Five Dragons Pure Yang Body Protection Skill, the course teaches footwork that follows the star pattern, mantras tied to each step, and a body protection method developed for both combat application and personal resilience. Students also work through pain relief techniques including moxibustion, cupping, and music therapy, so the course delivers both a distinctive martial skill and a set of healing tools used by generations of Wudang practitioners.",
    schedule: [
      {
        label: "Theory",
        text: "History and lineage of Pure Yang Gong (Chun Yang Gong). Unification of Heaven, Earth, and Human. Mantras for Heavenly Dipper protection and combat application. Auxiliary herbal methods. Pain relief through moxibustion, cupping, music therapy, and qigong acupressure.",
      },
      {
        label: "Early Morning (2h)",
        text: "Longevity Qi Gong, six forms. Opening the gate, clearing the orifice, 21-form rhythmic detoxification exercise, Five Tones Healing Song, Three Vertebrae Seven Forms.",
      },
      {
        label: "Morning (3h)",
        text: "Pure Yang Da Gong and Heavenly Dipper Eight Steps routine. Hand, eye, body, and footwork training.",
      },
      {
        label: "Afternoon (3h)",
        text: "Pure Yang Da Gong and Heavenly Dipper Eight Steps routine training.",
      },
      {
        label: "Evening (2h)",
        text: "Dynamic Pillar (Submerging and Floating). Sitting meditation.",
      },
    ],
    requirements: null,
    privateContact: null,
  },
  {
    id: "taoist-medicine-foundations-1",
    month: "SEP",
    day: "14",
    dateRange: "Sep 14 – 27, 2026",
    status: "open",
    fee: "13,300 RMB",
    deposit: "2,600 RMB",
    title: "Beginner Daoist Medicine",
    teacher: "Taught by Master Li Shifu",
    summary: "An introduction to Daoist medicine: simple, natural healing techniques for personal health and helping others through traditional Daoist practice.",
    purpose: "This course teaches simple, natural healing techniques aimed at personal health improvement and helping others alleviate suffering through Daoist medicine. Across twelve days students move through the full toolkit of traditional Daoist medical practice, acupuncture, moxibustion, cupping, bloodletting, gua sha, herbal recognition and preparation, fire healing, and Five Elements music therapy, building toward a working knowledge of around forty common illnesses and the herbal formulas used to treat them. Because the field is broad, study material is sent ahead of arrival so students walk in already familiar with the underlying Yin Yang and Five Elements framework. Graduates leave able to genuinely help themselves, their families, and their communities, which is part of why this course has become one of the most requested in the schedule.",
    schedule: [
      {
        label: "Theory",
        text: "Fundamental Yin-Yang Five Elements theory, Meridian theory, Daoist holistic health in harmony with heaven, earth, humanity, and nature, comprehensive diagnosis, medical theories.",
      },
      {
        label: "Morning (1.5h)",
        text: "Longevity Qi Gong, six forms, gate-opening, detoxification, regulation of spinal issues.",
      },
      {
        label: "Morning (3h)",
        text: "Acupuncture, moxibustion, cupping, bloodletting, scraping (gua sha), massage, acupressure therapy. Recognizing, harvesting, preparing, decocting, and administering medicinal herbs.",
      },
      {
        label: "Afternoon (3h)",
        text: "Fire healing, qigong healing techniques, Five Elements music therapy, talisman healing methods. Recognizing 60 types of herbs, with herbal formulas for healing 40 common illnesses.",
      },
      {
        label: "Evening (2h)",
        text: "Healing Qigong, five forms, Submerging and Floating pillar, sitting meditation, Lying Dragon meditation.",
      },
    ],
    requirements: [
      "Study material is sent ahead of the course upon deposit. Early registration is recommended to allow preparation time",
    ],
    privateContact: null,
  },
  {
    id: "secret-golden-flower-2",
    month: "OCT",
    day: "02",
    dateRange: "Oct 2 – 15, 2026",
    status: "open",
    fee: "13,300 RMB",
    deposit: "2,600 RMB",
    title: "Secret of the Golden Flower (2nd edition)",
    teacher: "Taught by Master Li Shifu",
    quote: "\"The Mysterious Pass has one opening; the center of the opening contains subtlety. It comprises movement and stillness, the void, the divine, the profound and the mysterious.\"",
    summary: "A second 2026 edition of the foundational Internal Alchemy (Dan Dao) course, identical in content to the July session.",
    purpose: "To help participants understand the path and methods of Daoist cultivation in China; enhance each individual's comprehension and ability to distinguish different levels of cultivation; open the gate to wisdom, guiding us to find direction amidst the chaos and illusory changes of social life; discover the value and meaning of our existence; explore the meaning of life and the truths of the universe. Strengthen one's energy field and vibrational frequency; cultivate a heart of compassion, love, forgiveness, and tolerance; awaken the willingness to assist others and serve all beings. To prepare for future opportunities to unify the body and the higher self, elevate oneself, and thereby create a true body, an immortal body, and attain the Dao.",
    schedule: [
      {
        label: "Course Contents",
        text: "Primarily theory-based, learning Daoist etiquette and taboos. Fundamentals of Internal Alchemy theory, standing qigong methods, sitting meditation to gather qi, sleep-based qi retention methods, and different breathing techniques for various stages. Basics of the Microcosmic Orbit, explanation of key points in alchemical texts: \"49 Barriers\", \"Qingjing Jing: The Scripture of Purity and Tranquility\", \"Da Cheng Jie Yao: Essentials of the Shortcut to the Great Achievement\", \"Tai Yi Jing Hua Zong Zhi: The Secret of the Golden Flower\". Overview of Dao De Jing, Yin Fu Jing, Longmen Heart Method, Huang Ting Jing, Nei Jing Tu. Basic theory of Female Alchemy, fasting, dietary requirements, daily life regulation, and the building-the-foundation period.",
      },
      {
        label: "Early Morning (1.5h)",
        text: "Longevity Qi Gong, six forms, gate-opening and detoxification methods, regulation of spinal issues.",
      },
      {
        label: "Morning (3h)",
        text: "Theory and practice of internal alchemy, cultivating and circulating energy. Methods for focusing the mind and igniting the inner fire.",
      },
      {
        label: "Afternoon (3h)",
        text: "Continuing internal alchemy practices and meditation. Daily life adjustments to aid cultivation of inner energy and improving physical health.",
      },
      {
        label: "Evening (1.5h)",
        text: "Standing Meditation, sitting meditation cultivating stillness, Lying Dragon meditation.",
      },
    ],
    requirements: [
      "Basic foundation of sitting meditation and/or cultivation of stillness (any type)",
      "No diseases or disabilities",
      "Vegetarian diet, with monastic discipline (adhering to the temple's precepts)",
      "Destiny to learn from the master",
    ],
    privateContact: null,
  },
  {
    id: "dragon-heart-sword",
    month: "OCT",
    day: "20",
    dateRange: "Oct 20 – Nov 4, 2026",
    status: "open",
    fee: "9,900 RMB",
    deposit: "1,900 RMB",
    title: "Dragon Heart Sword & Natural Healing Methods",
    teacher: "Taught by Master Li Shifu",
    summary: "Sword fundamentals and the Dragon Form Sword routine, combined with natural healing methods, history and lineage of the art.",
    purpose: "Historical lineage, development, and current status of the sword arts. Practicing routines on the Flower of Life, with natural healing methods for pain relief. The Dragon Heart Sword is Wudang's signature weapon form, built on the idea that the sword extends the practitioner's own internal energy rather than acting as a separate tool. Students begin with hand, eye, body, and footwork fundamentals before moving into the full Dragon Form Sword routine, learning how breath, intention, and blade move as one continuous line. The course also covers the same fire therapy, moxibustion, cupping, and herbal pain relief methods taught across the temple's martial curriculum, so students finish with both a complete weapon form and a practical set of recovery techniques for the demands of serious training.",
    schedule: [
      {
        label: "Theory",
        text: "Historical lineage, development, and current status. Pain relief through fire therapy, moxibustion, cupping, bloodletting, music therapy, acupressure massage, and herbal prescriptions. Daoist etiquette and taboos.",
      },
      {
        label: "Early Morning (1.5h)",
        text: "Longevity Qi Gong, five forms, gate-opening, detoxification, regulation of spinal issues.",
      },
      {
        label: "Morning (2.5h)",
        text: "Sword fundamentals: hand, eye, body, technique, and footwork basics. Dragon Form Sword routine.",
      },
      {
        label: "Afternoon (2.5h)",
        text: "Sword fundamentals and Dragon Form Sword routine continued.",
      },
      {
        label: "Evening (1h)",
        text: "Standing Meditation, sitting meditation cultivating stillness, Lying Dragon meditation.",
      },
    ],
    requirements: null,
    privateContact: null,
  },
  {
    id: "taoist-medicine-foundations-2",
    month: "NOV",
    day: "09",
    dateRange: "Nov 9 – 23, 2026",
    status: "open",
    fee: "13,300 RMB",
    deposit: "2,600 RMB",
    title: "Beginner Daoist Medicine (2nd edition)",
    teacher: "Taught by Master Li Shifu",
    summary: "A second 2026 edition of the Daoist Medicine foundations course, identical in content to the September session.",
    purpose: "This course teaches simple, natural healing techniques aimed at personal health improvement and helping others alleviate suffering through Daoist medicine. Across twelve days students move through the full toolkit of traditional Daoist medical practice, acupuncture, moxibustion, cupping, bloodletting, gua sha, herbal recognition and preparation, fire healing, and Five Elements music therapy, building toward a working knowledge of around forty common illnesses and the herbal formulas used to treat them. Because the field is broad, study material is sent ahead of arrival so students walk in already familiar with the underlying Yin Yang and Five Elements framework. Graduates leave able to genuinely help themselves, their families, and their communities, which is part of why this course has become one of the most requested in the schedule.",
    schedule: [
      {
        label: "Theory",
        text: "Fundamental Yin-Yang Five Elements theory, Meridian theory, Daoist holistic health in harmony with heaven, earth, humanity, and nature, comprehensive diagnosis, medical theories.",
      },
      {
        label: "Morning (1.5h)",
        text: "Longevity Qi Gong, six forms, gate-opening, detoxification, regulation of spinal issues.",
      },
      {
        label: "Morning (3h)",
        text: "Acupuncture, moxibustion, cupping, bloodletting, scraping (gua sha), massage, acupressure therapy. Recognizing, harvesting, preparing, decocting, and administering medicinal herbs.",
      },
      {
        label: "Afternoon (3h)",
        text: "Fire healing, qigong healing techniques, Five Elements music therapy, talisman healing methods. Recognizing 60 types of herbs, with herbal formulas for healing 40 common illnesses.",
      },
      {
        label: "Evening (2h)",
        text: "Healing Qigong, five forms, Submerging and Floating pillar, sitting meditation, Lying Dragon meditation.",
      },
    ],
    requirements: [
      "Study material is sent ahead of the course upon deposit. Early registration is recommended to allow preparation time",
    ],
    privateContact: null,
  },
];

/* Common policies shown on every course (from the official site) */
const COURSE_POLICIES = {
  minStudents: "The minimum number of students required for any course is 8.",
  cancellation: "The temple reserves the right to cancel a course 2 months prior to commencement if the minimum is not met.",
  decision: "Acceptance decisions are made within 3 days of receiving a complete application.",
  depositSecuresPlace: "Once accepted, the deposit must be paid to secure your place in the course. Places are not held without it.",
  withdrawal: "If you are unable to attend for a serious, unforeseen reason (e.g. family bereavement), the deposit can be refunded or used toward another course, same or different, in the current year or the next.",
  courseCanceled: "If the course itself is canceled by the temple, the deposit is refunded in full.",
  discount: "Students who have previously attended a course can return for revision with a 20% discount.",
  included: "Course fee includes classes, food, and accommodation.",
};

/* Temple Rules and Requirements for Foreign Students, sourced from fiveimmortals.com/temple-rules */
const TEMPLE_RULES = {
  intro: "We ask you to commit to abide by these rules and requirements for the length of your stay at the temple. Their purpose is to ensure the safety of all, to protect the collective harmony of the place, and to maintain the discipline necessary to pass on the teachings. Any student breaking them might be asked to leave the temple at any point of their stay, without refund of their donation.",
  sections: [
    {
      title: "Do as instructed",
      items: [
        "Wake up in the morning at the appointed time.",
        "Assemble as quickly as possible whenever called to.",
      ],
    },
    {
      title: "Attend class and be punctual",
      items: [
        "The only permissible reason to miss class is illness or injury.",
        "If you miss too many days of class you will be dismissed.",
        "If you are consistently late you will be dismissed.",
        "You may not leave class early.",
        "If you are sick or injured you still must line up for the beginning of class and state your reason for absence.",
        "No smoking during class. No talking during class. No talking back to the Master or to the senior student leading the class.",
      ],
    },
    {
      title: "Chores",
      items: [
        "Finish chores as explained to you by senior students at the appointed time, every day or whenever asked to.",
        "Be proactive about temple duties and chores even when not assigned to it.",
        "Keep the temple courtyard and your room clean and orderly, and clean up after yourself.",
      ],
    },
    {
      title: "Quiet hours",
      items: [
        "Maintain silence from the beginning of the evening sitting meditation until the next morning after breakfast.",
        "Quiet hours after lunch, until afternoon class.",
        "No loud noises or voices during morning and evening Scriptures.",
      ],
    },
    {
      title: "No complaining",
      items: [
        "Do not complain about the food unless you are allergic or experiencing severe difficulty. Be grateful instead.",
        "Do not complain about the bathrooms, or about the intensity, speed, or content of the training.",
      ],
    },
    {
      title: "Avoid excess, live in moderation",
      items: [
        "Personal snacks may be shared, please be moderate. One movie per week maximum, no nudity.",
        "The temple is on top of a mountain, roughly a 1 hour hike, so bring only a backpack you can carry yourself.",
        "Use common resources sparingly (tea, toilet paper, washing powder, water).",
      ],
    },
    {
      title: "Limit technology",
      items: [
        "Do not video tape or photograph others without asking.",
        "Personal computer use, including movies, music, or games, is limited to 7 hours per week.",
        "Computers and recording devices are not permitted in class unless mentioned otherwise.",
      ],
    },
    {
      title: "Practice at mealtime",
      items: [
        "Remain quiet while sitting at a meal. Only Chinese is spoken during meal times.",
        "Recite the Food Mantra before every meal, and share every dish equally with others at the table.",
        "Finish every grain of rice. No meat is allowed within the temple.",
      ],
    },
    {
      title: "Wear moderate clothing and maintain hygiene",
      items: [
        "Men must wear a shirt and shoes within the temple, no shorts above the knee.",
        "Women: no thin strap tank tops, no cleavage, no bare shoulders or stomach, no shorts above the knee.",
        "Within the altars, wear Daoist clothes if you have them, or long sleeves and long pants with proper shoes.",
      ],
    },
    {
      title: "Respect the temple",
      items: [
        "Remember that the temple is a temple. No swearwords or inappropriate language.",
        "No smoking inside the temple or in front of it, only in designated areas.",
        "Refrain from romantic or sexual relationships during your stay, and focus on your own training instead.",
        "Offer incense whenever practicing inside the altars. Women during their menstruation should not enter the altars.",
      ],
    },
    {
      title: "Maintain collective harmony",
      items: [
        "Try to support and help each other. Do not pit people against each other.",
        "Do not speak badly of others, criticize, or boast of others.",
      ],
    },
    {
      title: "How to respect a Master and senior instructors",
      items: [
        "Do not interrupt, talk back, or make excuses when being corrected.",
        "Listen to what you are told. If an answer seems unsatisfactory at first, ponder it instead of insisting.",
        "Do not ask the Master or senior instructors to run errands for you.",
      ],
    },
    {
      title: "In town",
      items: [
        "Students who do not speak Chinese must stay together with a student who does, reachable by phone at all times.",
        "No partying at night. Do not drink alcohol, go to nightclubs, or hire the services of prostitutes.",
        "Do not break Chinese law. Carry your passport with you when going to town.",
        "Be responsible for your visa situation, and let the temple know as soon as possible if you need an extension.",
      ],
    },
  ],
};


/* ============================================================
   FIVE IMMORTALS TEMPLE: Application Landing Page
   Design language: unrolling scroll, temple red seal, jade + ink palette
   ============================================================ */

const COLORS = {
  ink: "#1F1A14",
  paper: "#F5EFE3",
  paperDark: "#EAE0CB",
  lacquer: "#A8442C",
  lacquerDark: "#8A3522",
  jade: "#8C9B7E",
  jadeDark: "#6E7D62",
  gold: "#C9A227",
};

/* ---------------- i18n ---------------- */
const STR = {
    heroEyebrow: "Baimashan Wu Shian Miao · Wudang, Hubei",
    heroTitle: "Five Immortals Temple",
    heroSubtitle: "Application to study Taoist arts on the sacred mountain of Wudang",
    heroBody:
      "The only temple in Wudang where Western practitioners may reside and study within its walls, under the direct lineage of Abbot Du Song Feng.",
    ctaScroll: "Start application",
    ctaExplore: "Courses",
    viewAllCourses: "View all 2026 courses",
    coursesPageLabel: "2026 Course Calendar",
    coursesPageTitle: "Choose your path",
    coursesPageSub: "All courses run at the Five Immortals Temple, Wudang Mountain, Hubei",
    happeningNow: "Happening Now",
    completed: "Completed",
    seeDetails: "See details",
    applyToThisCourse: "Apply to this course",
    backToCourses: "← Back to courses",
    coursePurpose: "Purpose",
    courseSchedule: "Content and Schedule",
    courseRequirements: "Requirements",
    courseFee: "Course fee",
    courseDeposit: "Deposit",
    courseFeeIncluded: "Includes classes, food and accommodation",
    privateCourseNote: "This is a private course. For more information and registration, please contact directly:",
    policiesTitle: "General Policies (apply to all courses)",
    courseLabel: "Featured course",
    courseName: "Wudang Sword and Internal Alchemy",
    courseDates: "June 29 to July 23, 2026",
    courseTeacher: "Taught by Master Li Shifu and disciple Cheng Ling",
    spotsLabel: "Limited spots",
    formTitle: "Application Form",
    formNote:
      "Please be honest and concise. Applications are only processed if every field is filled out.",
    stepOf: "Step {n} of {total}",
    sections: {
      intro: "Before You Begin",
      identity: "Identity",
      contact: "Contact",
      profile: "Profile",
      motivation: "Motivation and Preparation",
      logistics: "Logistics",
      agreement: "Agreement",
    },
    introTitle: "What you'll find in this form",
    introBody: "The application is divided into 6 short sections after this introduction. See below what will be asked in each one, so you can prepare before starting.",
    introList: [
      { t: "Identity", d: "Nationality, gender, full name and age." },
      { t: "Contact", d: "City, region, country, address, zip code, phone and e-mail." },
      { t: "Profile", d: "Profession, health history, any mental health or spiritual imbalances, and English level." },
      { t: "Motivation and Preparation", d: "Study goals, prior experience, a personal introduction with photograph, course(s) you're applying for, and expectations." },
      { t: "Logistics", d: "Special religious requests and emergency contact." },
      { t: "Agreement", d: "Confirmation that you've read and accept the temple's rules." },
    ],
    introStart: "Start",
    rulesTitle: "Temple Rules",
    fields: {
      nationality: "Nationality",
      gender: "Gender",
      name: "Full name",
      age: "Age",
      city: "City",
      region: "Region",
      country: "Country",
      street: "Street address",
      zip: "Zip code",
      phone: "Phone",
      email: "E-mail",
      profession: "Profession",
      health: "Health history / physical condition",
      mentalHealth: "Current or past mental health or spiritual imbalances",
      goals: "Study goals",
      priorStudy: "Do you have a foundation in this course's content? What have you studied before?",
      introduction: "Introduce yourself",
      photo: "Current photograph (portrait)",
      coursesApplying: "Which course(s) are you applying for?",
      expectations: "What are your expectations of studying at the temple? Other inquiries?",
      religious: "Special religious requests (e.g. Ramadan, Shabbat, etc.)",
      emergencyContact: "Emergency contact: name and phone number",
      englishLevel: "English level",
      agreement: "I have read and agree to follow all the temple's rules and regulations",
    },
    photoNote: "Upload from your gallery or take a photo now. Your passport will only be requested after acceptance.",
    photoUpload: "Upload photograph",
    photoRetake: "Replace photograph",
    photoSizeNote: "Maximum size: 2 MB. The image is automatically resized.",
    photoTooLarge: "The photo is still too large even after compression. Try a different photo or a lower resolution.",
    next: "Next",
    back: "Back",
    submit: "Submit application",
    submitting: "Submitting...",
    successTitle: "Application received",
    successBody:
      "Your application has been saved successfully. The temple team will contact you via the e-mail provided.",
    newApplication: "New application",
    backToWebsite: "Visit our website",
    required: "Required field",
    genderOptions: ["Female", "Male", "Other / Prefer not to say"],
    englishOptions: ["Basic", "Intermediate", "Advanced", "Fluent / Native"],
};

/* ---------------- Temple logo ---------------- */
/* Replace LOGO_SRC with the final hosted path when this goes live, e.g. "/assets/logo.png" */
const LOGO_SRC = "/logo.png";

/* Free image hosting for application photos (so emails get a clean clickable link
   instead of a giant base64 block). Get a free key at https://api.imgbb.com/ */
const IMGBB_API_KEY = "fea6dd0306fda074b778b6bb60df9018";

function Seal({ size = 56 }) {
  return (
    <img
      src={LOGO_SRC}
      alt="Baimashan Wu Shian Miao temple logo"
      width={size}
      height={size}
      style={{ borderRadius: "50%", objectFit: "cover", display: "inline-block" }}
    />
  );
}

/* ---------------- Mountain silhouette divider ---------------- */
function MountainDivider({ flip }) {
  return (
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      style={{ width: "100%", height: "60px", display: "block", transform: flip ? "scaleY(-1)" : "none" }}
      aria-hidden="true"
    >
      <path
        d="M0,90 L120,40 L220,80 L340,20 L470,75 L600,10 L730,70 L860,30 L980,85 L1100,45 L1200,90 L1200,120 L0,120 Z"
        fill={COLORS.ink}
        opacity="0.08"
      />
    </svg>
  );
}

/* ---------------- Field wrapper ---------------- */
function Field({ label, required, children, hint }) {
  return (
    <label style={{ display: "block", marginBottom: 22 }}>
      <span
        style={{
          display: "block",
          fontFamily: "'Noto Serif', Georgia, serif",
          fontSize: 14,
          fontWeight: 600,
          color: COLORS.ink,
          marginBottom: 6,
          letterSpacing: 0.2,
        }}
      >
        {label}
        {required && <span style={{ color: COLORS.lacquer }}> *</span>}
      </span>
      {children}
      {hint && (
        <span style={{ display: "block", fontSize: 12.5, color: "#7A6F5C", marginTop: 5, fontStyle: "italic" }}>
          {hint}
        </span>
      )}
    </label>
  );
}

const inputBase = {
  width: "100%",
  boxSizing: "border-box",
  padding: "11px 14px",
  fontSize: 15,
  fontFamily: "'Inter', system-ui, sans-serif",
  border: `1.5px solid ${COLORS.paperDark}`,
  borderRadius: 4,
  background: "#FFFFFF",
  color: COLORS.ink,
  outline: "none",
};

function TextInput(props) {
  return <input {...props} style={{ ...inputBase, ...(props.style || {}) }} />;
}
function TextArea(props) {
  return <textarea {...props} rows={props.rows || 3} style={{ ...inputBase, resize: "vertical", ...(props.style || {}) }} />;
}
function Select({ options, ...props }) {
  return (
    <select {...props} style={{ ...inputBase, ...(props.style || {}) }}>
      <option value="">-</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

/* ---------------- Photo upload ---------------- */
const MAX_PHOTO_SIZE_MB = 2;
const MAX_PHOTO_SIZE_BYTES = MAX_PHOTO_SIZE_MB * 1024 * 1024;
const PHOTO_MAX_DIMENSION = 1000; // px, longest side after resize

function PhotoUpload({ value, onChange, labelUpload, labelRetake, note, sizeNote, errorTooLarge }) {
  const inputRef = useRef(null);
  const [error, setError] = useState("");

  function resizeAndCompress(file) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const reader = new FileReader();
      reader.onload = (e) => {
        img.onload = () => {
          let { width, height } = img;
          if (width > height && width > PHOTO_MAX_DIMENSION) {
            height = Math.round((height * PHOTO_MAX_DIMENSION) / width);
            width = PHOTO_MAX_DIMENSION;
          } else if (height > PHOTO_MAX_DIMENSION) {
            width = Math.round((width * PHOTO_MAX_DIMENSION) / height);
            height = PHOTO_MAX_DIMENSION;
          }
          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);
          // Try progressively lower quality until under the size limit
          let quality = 0.85;
          let dataUrl = canvas.toDataURL("image/jpeg", quality);
          while (dataUrl.length * 0.75 > MAX_PHOTO_SIZE_BYTES && quality > 0.3) {
            quality -= 0.1;
            dataUrl = canvas.toDataURL("image/jpeg", quality);
          }
          resolve(dataUrl);
        };
        img.onerror = reject;
        img.src = e.target.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async function handleFile(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    setError("");
    try {
      const compressed = await resizeAndCompress(file);
      const approxBytes = compressed.length * 0.75;
      if (approxBytes > MAX_PHOTO_SIZE_BYTES) {
        setError(errorTooLarge);
        return;
      }
      onChange(compressed);
    } catch (err) {
      setError(errorTooLarge);
    }
  }

  return (
    <div>
      <div
        onClick={() => inputRef.current && inputRef.current.click()}
        style={{
          border: `2px dashed ${error ? COLORS.lacquer : COLORS.jade}`,
          borderRadius: 8,
          padding: value ? 12 : 28,
          textAlign: "center",
          cursor: "pointer",
          background: value ? "#fff" : "rgba(140,155,126,0.08)",
          transition: "background 0.2s",
        }}
      >
        {value ? (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
            <img
              src={value}
              alt="Pré-visualização"
              style={{ width: 120, height: 120, objectFit: "cover", borderRadius: 8, border: `2px solid ${COLORS.gold}` }}
            />
            <span style={{ fontSize: 13.5, color: COLORS.lacquer, fontWeight: 600 }}>{labelRetake}</span>
          </div>
        ) : (
          <span style={{ fontSize: 14.5, color: COLORS.jadeDark, fontWeight: 600 }}>{labelUpload}</span>
        )}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFile}
        style={{ display: "none" }}
      />
      {sizeNote && !error && (
        <span style={{ display: "block", fontSize: 12, color: "#9A8F7C", marginTop: 6 }}>{sizeNote}</span>
      )}
      {error && (
        <span style={{ display: "block", fontSize: 12.5, color: COLORS.lacquer, marginTop: 6, fontWeight: 600 }}>{error}</span>
      )}
      {note && <span style={{ display: "block", fontSize: 12.5, color: "#7A6F5C", marginTop: 6, fontStyle: "italic" }}>{note}</span>}
    </div>
  );
}

/* ---------------- Main App ---------------- */
const STEP_KEYS = ["intro", "identity", "contact", "profile", "motivation", "logistics", "agreement"];

const emptyForm = {
  nationality: "",
  gender: "",
  name: "",
  age: "",
  city: "",
  region: "",
  country: "",
  street: "",
  zip: "",
  phone: "",
  email: "",
  profession: "",
  health: "",
  mentalHealth: "",
  goals: "",
  priorStudy: "",
  introduction: "",
  photo: "",
  coursesApplying: "",
  expectations: "",
  religious: "",
  emergencyContact: "",
  englishLevel: "",
  agreement: false,
};

export default function App() {
  const t = STR;
  const [view, setView] = useState("hero"); // hero | courses | courseDetail | form | success
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [storageError, setStorageError] = useState(false);
  const [detailCourseId, setDetailCourseId] = useState(null);

  function openCourseDetail(courseId) {
    setDetailCourseId(courseId);
    setView("courseDetail");
  }

  function applyToCourse(course) {
    update("coursesApplying", course.title);
    setView("form");
    setStep(0);
  }

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function goNext() {
    setStep((s) => Math.min(s + 1, STEP_KEYS.length - 1));
  }
  function goBack() {
    setStep((s) => Math.max(s - 1, 0));
  }

  async function handleSubmit() {
    setSubmitting(true);
    setStorageError(false);
    try {
      const { photo, ...rest } = form;
      let photoField = "No photo provided";

      if (photo) {
        try {
          const base64Only = photo.split(",")[1]; // strip the data:image/...;base64, prefix
          const imgbbForm = new FormData();
          imgbbForm.append("key", IMGBB_API_KEY);
          imgbbForm.append("image", base64Only);
          const imgbbResponse = await fetch("https://api.imgbb.com/1/upload", {
            method: "POST",
            body: imgbbForm,
          });
          const imgbbData = await imgbbResponse.json();
          if (imgbbData && imgbbData.success && imgbbData.data && imgbbData.data.url) {
            photoField = imgbbData.data.url;
          } else {
            photoField = "Photo upload failed. Applicant submitted a photo but it could not be hosted.";
          }
        } catch (photoErr) {
          photoField = "Photo upload failed. Applicant submitted a photo but it could not be hosted.";
        }
      }

      const record = {
        ...rest,
        submittedAt: new Date().toISOString(),
        _subject: `New application: ${form.name || "Unnamed applicant"}`,
        "Photo": photoField,
      };

      const response = await fetch("https://formspree.io/f/maqzzwop", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(record),
      });
      if (!response.ok) {
        setStorageError(true);
      }
    } catch (err) {
      setStorageError(true);
    }
    setSubmitting(false);
    setView("success");
  }

  function resetForm() {
    setForm(emptyForm);
    setStep(0);
    setView("hero");
  }

  /* ---------- Shared chrome ---------- */
  /* ---------- Hero ---------- */
  if (view === "hero") {
    return (
      <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: COLORS.paper, minHeight: "100vh" }}>
        <style>{fontImports}</style>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "18px 24px",
            position: "sticky",
            top: 0,
            background: COLORS.paper,
            zIndex: 10,
            borderBottom: `1px solid ${COLORS.paperDark}`,
          }}
        >
          <span style={{ fontFamily: "'Noto Serif', Georgia, serif", fontWeight: 700, fontSize: 15, color: COLORS.ink }}>
            Five Immortals Temple
          </span>
        </header>

        <section
          style={{
            padding: "56px 24px 40px",
            textAlign: "center",
            maxWidth: 640,
            margin: "0 auto",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
            <Seal size={64} />
          </div>
          <p
            style={{
              fontSize: 13,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: COLORS.jadeDark,
              fontWeight: 700,
              marginBottom: 14,
            }}
          >
            {t.heroEyebrow}
          </p>
          <h1
            style={{
              fontFamily: "'Noto Serif', Georgia, serif",
              fontSize: "clamp(34px, 8vw, 52px)",
              fontWeight: 700,
              color: COLORS.ink,
              margin: "0 0 14px",
              lineHeight: 1.1,
            }}
          >
            {t.heroTitle}
          </h1>
          <p style={{ fontSize: 18, color: COLORS.lacquer, fontWeight: 600, margin: "0 0 18px" }}>{t.heroSubtitle}</p>
          <p style={{ fontSize: 15.5, color: "#4A4135", lineHeight: 1.6, margin: "0 0 32px" }}>{t.heroBody}</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => setView("form")}
              style={{
                background: COLORS.lacquer,
                color: "#fff",
                border: "none",
                padding: "14px 34px",
                fontSize: 15.5,
                fontWeight: 700,
                borderRadius: 4,
                cursor: "pointer",
                letterSpacing: 0.3,
                boxShadow: "0 6px 18px rgba(168,68,44,0.3)",
              }}
            >
              {t.ctaScroll} →
            </button>
            <button
              onClick={() => setView("courses")}
              style={{
                background: "transparent",
                color: COLORS.ink,
                border: `1.5px solid ${COLORS.ink}`,
                padding: "14px 34px",
                fontSize: 15.5,
                fontWeight: 700,
                borderRadius: 4,
                cursor: "pointer",
                letterSpacing: 0.3,
              }}
            >
              {t.ctaExplore}
            </button>
          </div>
        </section>

        <MountainDivider />

        <section style={{ background: COLORS.ink, padding: "36px 24px", color: COLORS.paper }}>
          <div style={{ maxWidth: 560, margin: "0 auto" }}>
            <p style={{ fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase", color: COLORS.gold, fontWeight: 700, marginBottom: 10 }}>
              {t.courseLabel}
            </p>
            <h2 style={{ fontFamily: "'Noto Serif', Georgia, serif", fontSize: 26, margin: "0 0 8px" }}>{t.courseName}</h2>
            <p style={{ fontSize: 15, color: COLORS.paperDark, margin: "0 0 4px" }}>{t.courseDates}</p>
            <p style={{ fontSize: 14, color: COLORS.jade, margin: "0 0 18px" }}>{t.courseTeacher}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(140,155,126,0.18)",
                  border: `1px solid ${COLORS.jade}`,
                  borderRadius: 20,
                  padding: "6px 16px",
                  fontSize: 13.5,
                  fontWeight: 600,
                }}
              >
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: COLORS.gold, display: "inline-block" }} />
                {t.spotsLabel}
              </div>
              <button
                onClick={() => setView("courses")}
                style={{
                  background: "transparent",
                  border: `1px solid ${COLORS.gold}`,
                  color: COLORS.gold,
                  borderRadius: 20,
                  padding: "6px 16px",
                  fontSize: 13.5,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                {t.viewAllCourses} →
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  /* ---------- Courses page (flowing article-style layout) ---------- */
  if (view === "courses") {
    return (
      <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: COLORS.paper, minHeight: "100vh" }}>
        <style>{fontImports}</style>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "18px 24px",
            position: "sticky",
            top: 0,
            background: COLORS.paper,
            zIndex: 10,
            borderBottom: `1px solid ${COLORS.paperDark}`,
          }}
        >
          <button
            onClick={() => setView("hero")}
            style={{ background: "none", border: "none", fontFamily: "'Noto Serif', Georgia, serif", fontWeight: 700, fontSize: 15, color: COLORS.ink, cursor: "pointer" }}
          >
            ← Five Immortals Temple
          </button>
        </header>

        <div style={{ maxWidth: 680, margin: "0 auto", padding: "36px 20px 60px" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
            <Seal size={64} />
          </div>
          <p style={{ fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase", color: COLORS.jadeDark, fontWeight: 700, textAlign: "center", marginBottom: 10 }}>
            {t.coursesPageLabel}
          </p>
          <h2 style={{ fontFamily: "'Noto Serif', Georgia, serif", fontSize: 28, color: COLORS.ink, textAlign: "center", margin: "0 0 8px" }}>
            {t.coursesPageTitle}
          </h2>
          <p style={{ fontSize: 14.5, color: "#7A6F5C", textAlign: "center", margin: "0 0 40px" }}>{t.coursesPageSub}</p>

          {COURSES_2026.map((course, idx) => (
            <div
              key={course.id}
              style={{
                opacity: course.status === "past" ? 0.65 : 1,
                marginBottom: 36,
                paddingBottom: 36,
                borderBottom: idx < COURSES_2026.length - 1 ? `1px solid ${COLORS.paperDark}` : "none",
              }}
            >
              <p style={{ fontSize: 12.5, letterSpacing: 1, textTransform: "uppercase", color: COLORS.jadeDark, fontWeight: 700, margin: "0 0 6px" }}>
                {course.dateRange}
              </p>
              <h3 style={{ fontFamily: "'Noto Serif', Georgia, serif", fontSize: 21, color: COLORS.ink, margin: "0 0 4px", lineHeight: 1.3 }}>
                {course.title}
                {course.status === "now" && (
                  <span
                    style={{
                      marginLeft: 10,
                      fontSize: 10.5,
                      fontWeight: 700,
                      letterSpacing: 0.3,
                      textTransform: "uppercase",
                      padding: "2px 8px",
                      borderRadius: 10,
                      background: COLORS.gold,
                      color: COLORS.ink,
                      verticalAlign: "middle",
                    }}
                  >
                    {t.happeningNow}
                  </span>
                )}
                {course.status === "past" && (
                  <span
                    style={{
                      marginLeft: 10,
                      fontSize: 10.5,
                      fontWeight: 700,
                      letterSpacing: 0.3,
                      textTransform: "uppercase",
                      padding: "2px 8px",
                      borderRadius: 10,
                      background: COLORS.paperDark,
                      color: "#7A6F5C",
                      verticalAlign: "middle",
                    }}
                  >
                    {t.completed}
                  </span>
                )}
              </h3>
              <p style={{ fontSize: 14, color: COLORS.lacquer, fontWeight: 600, margin: "0 0 16px" }}>{course.teacher}</p>

              {course.quote && (
                <p
                  style={{
                    borderLeft: `3px solid ${COLORS.gold}`,
                    paddingLeft: 14,
                    margin: "0 0 16px",
                    fontStyle: "italic",
                    fontFamily: "'Noto Serif', Georgia, serif",
                    fontSize: 14,
                    color: "#4A4135",
                    lineHeight: 1.6,
                  }}
                >
                  {course.quote}
                </p>
              )}

              {course.purpose && (
                <p style={{ fontSize: 14, color: "#4A4135", lineHeight: 1.65, margin: "0 0 14px" }}>
                  <strong style={{ color: COLORS.ink }}>{t.coursePurpose}: </strong>
                  {course.purpose}
                </p>
              )}

              {course.schedule && (
                <div style={{ margin: "0 0 14px" }}>
                  {course.schedule.map((block, i) => (
                    <p key={i} style={{ fontSize: 13.5, color: "#4A4135", lineHeight: 1.6, margin: "0 0 8px" }}>
                      <strong style={{ color: COLORS.jadeDark }}>{block.label}: </strong>
                      {block.text}
                    </p>
                  ))}
                </div>
              )}

              {course.requirements && (
                <p style={{ fontSize: 13.5, color: "#4A4135", lineHeight: 1.65, margin: "0 0 14px" }}>
                  <strong style={{ color: COLORS.ink }}>{t.courseRequirements}: </strong>
                  {course.requirements.join(" · ")}
                </p>
              )}

              {course.fee && (
                <p style={{ fontSize: 14, color: COLORS.ink, fontWeight: 700, margin: "0 0 16px" }}>
                  {course.fee} <span style={{ fontWeight: 400, color: "#7A6F5C" }}>({t.courseDeposit.toLowerCase()}: {course.deposit})</span>
                </p>
              )}

              {course.privateContact && (
                <p style={{ fontSize: 13.5, color: COLORS.ink, lineHeight: 1.6, margin: "0 0 16px" }}>
                  {t.privateCourseNote} <strong>{course.privateContact}</strong>
                </p>
              )}

              {course.status === "open" && (
                <button
                  onClick={() => applyToCourse(course)}
                  style={{
                    background: COLORS.lacquer,
                    color: "#fff",
                    border: "none",
                    padding: "9px 20px",
                    fontSize: 13.5,
                    fontWeight: 700,
                    borderRadius: 4,
                    cursor: "pointer",
                  }}
                >
                  {t.applyToThisCourse} →
                </button>
              )}
            </div>
          ))}

          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: 8,
            }}
          >
            <button
              onClick={() => setView("form")}
              style={{
                background: COLORS.lacquer,
                color: "#fff",
                border: "none",
                padding: "13px 28px",
                fontSize: 14.5,
                fontWeight: 700,
                borderRadius: 4,
                cursor: "pointer",
              }}
            >
              {t.ctaScroll} →
            </button>
            <a
              href="https://fiveimmortals.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "transparent",
                border: `1.5px solid ${COLORS.ink}`,
                color: COLORS.ink,
                padding: "13px 28px",
                fontSize: 14.5,
                fontWeight: 700,
                borderRadius: 4,
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              {t.backToWebsite}
            </a>
          </div>
        </div>
      </div>
    );
  }

  /* ---------- Course detail (Level 3, full information) ---------- */
  if (view === "courseDetail") {
    const course = COURSES_2026.find((c) => c.id === detailCourseId);
    if (!course) {
      return (
        <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: COLORS.paper, minHeight: "100vh", padding: 24 }}>
          <button onClick={() => setView("courses")} style={{ background: "none", border: "none", color: COLORS.lacquer, cursor: "pointer" }}>
            {t.backToCourses}
          </button>
        </div>
      );
    }
    return (
      <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: COLORS.paper, minHeight: "100vh" }}>
        <style>{fontImports}</style>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "18px 24px",
            position: "sticky",
            top: 0,
            background: COLORS.paper,
            zIndex: 10,
            borderBottom: `1px solid ${COLORS.paperDark}`,
          }}
        >
          <button
            onClick={() => setView("courses")}
            style={{ background: "none", border: "none", fontFamily: "'Noto Serif', Georgia, serif", fontWeight: 700, fontSize: 14, color: COLORS.ink, cursor: "pointer" }}
          >
            {t.backToCourses}
          </button>
        </header>

        <div style={{ maxWidth: 600, margin: "0 auto", padding: "32px 20px 70px" }}>
          <p style={{ fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase", color: COLORS.jadeDark, fontWeight: 700, marginBottom: 8 }}>
            {course.dateRange}
          </p>
          <h2 style={{ fontFamily: "'Noto Serif', Georgia, serif", fontSize: 28, color: COLORS.ink, margin: "0 0 6px" }}>{course.title}</h2>
          <p style={{ fontSize: 14.5, color: COLORS.lacquer, fontWeight: 600, margin: "0 0 24px" }}>{course.teacher}</p>

          {course.quote && (
            <div
              style={{
                borderLeft: `3px solid ${COLORS.gold}`,
                paddingLeft: 16,
                marginBottom: 22,
                fontStyle: "italic",
                fontFamily: "'Noto Serif', Georgia, serif",
                fontSize: 14.5,
                color: "#4A4135",
                lineHeight: 1.6,
              }}
            >
              {course.quote}
            </div>
          )}

          {course.purpose && (
            <div style={{ marginBottom: 22 }}>
              <h3 style={{ fontFamily: "'Noto Serif', Georgia, serif", fontSize: 15, color: COLORS.ink, margin: "0 0 6px" }}>{t.coursePurpose}</h3>
              <p style={{ fontSize: 14, color: "#4A4135", lineHeight: 1.6, margin: 0 }}>{course.purpose}</p>
            </div>
          )}

          {course.schedule && (
            <div style={{ marginBottom: 22 }}>
              <h3 style={{ fontFamily: "'Noto Serif', Georgia, serif", fontSize: 15, color: COLORS.ink, margin: "0 0 10px" }}>{t.courseSchedule}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {course.schedule.map((block, i) => (
                  <div key={i} style={{ background: "#fff", border: `1px solid ${COLORS.paperDark}`, borderRadius: 6, padding: "10px 14px" }}>
                    <p style={{ margin: "0 0 3px", fontSize: 12.5, fontWeight: 700, color: COLORS.jadeDark, textTransform: "uppercase", letterSpacing: 0.3 }}>
                      {block.label}
                    </p>
                    <p style={{ margin: 0, fontSize: 13.5, color: "#4A4135", lineHeight: 1.5 }}>{block.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {course.requirements && (
            <div style={{ marginBottom: 22 }}>
              <h3 style={{ fontFamily: "'Noto Serif', Georgia, serif", fontSize: 15, color: COLORS.ink, margin: "0 0 8px" }}>{t.courseRequirements}</h3>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                {course.requirements.map((req, i) => (
                  <li key={i} style={{ fontSize: 13.5, color: "#4A4135", lineHeight: 1.6, marginBottom: 4 }}>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {course.fee && (
            <div
              style={{
                background: COLORS.ink,
                color: COLORS.paper,
                borderRadius: 8,
                padding: "16px 18px",
                marginBottom: 22,
                display: "flex",
                gap: 24,
                flexWrap: "wrap",
              }}
            >
              <div>
                <p style={{ margin: 0, fontSize: 11, color: COLORS.gold, textTransform: "uppercase", letterSpacing: 0.5 }}>{t.courseFee}</p>
                <p style={{ margin: "2px 0 0", fontSize: 17, fontWeight: 700 }}>{course.fee}</p>
              </div>
              <div>
                <p style={{ margin: 0, fontSize: 11, color: COLORS.gold, textTransform: "uppercase", letterSpacing: 0.5 }}>{t.courseDeposit}</p>
                <p style={{ margin: "2px 0 0", fontSize: 17, fontWeight: 700 }}>{course.deposit}</p>
              </div>
              <p style={{ margin: "8px 0 0", fontSize: 12, color: COLORS.paperDark, width: "100%" }}>{t.courseFeeIncluded}</p>
            </div>
          )}

          {course.privateContact && (
            <div
              style={{
                background: "rgba(140,155,126,0.1)",
                border: `1px solid ${COLORS.jade}`,
                borderRadius: 8,
                padding: "14px 16px",
                marginBottom: 22,
              }}
            >
              <p style={{ margin: 0, fontSize: 13.5, color: COLORS.ink, lineHeight: 1.5 }}>
                {t.privateCourseNote} <strong>{course.privateContact}</strong>
              </p>
            </div>
          )}

          {course.status === "open" && (
            <button
              onClick={() => applyToCourse(course)}
              style={{
                background: COLORS.lacquer,
                color: "#fff",
                border: "none",
                padding: "13px 28px",
                fontSize: 14.5,
                fontWeight: 700,
                borderRadius: 4,
                cursor: "pointer",
                width: "100%",
              }}
            >
              {t.applyToThisCourse} →
            </button>
          )}

          <div style={{ marginTop: 36, paddingTop: 20, borderTop: `1px solid ${COLORS.paperDark}` }}>
            <h3 style={{ fontFamily: "'Noto Serif', Georgia, serif", fontSize: 14, color: COLORS.ink, margin: "0 0 10px" }}>{t.policiesTitle}</h3>
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              {Object.values(COURSE_POLICIES).map((policy, i) => (
                <li key={i} style={{ fontSize: 12.5, color: "#7A6F5C", lineHeight: 1.6, marginBottom: 4 }}>
                  {policy}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  /* ---------- Success ---------- */
  if (view === "success") {
    return (
      <div
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          background: COLORS.paper,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
        }}
      >
        <style>{fontImports}</style>
        <div style={{ textAlign: "center", maxWidth: 440 }}>
          <Seal size={72} />
          <h2 style={{ fontFamily: "'Noto Serif', Georgia, serif", fontSize: 28, color: COLORS.ink, margin: "20px 0 10px" }}>
            {t.successTitle}
          </h2>
          <p style={{ fontSize: 15, color: "#4A4135", lineHeight: 1.6, marginBottom: storageError ? 14 : 28 }}>{t.successBody}</p>
          {storageError && (
            <p style={{ fontSize: 13, color: COLORS.lacquer, marginBottom: 28 }}>
              ⚠ Note: there may have been an issue saving your data. Please contact the temple directly to confirm.
            </p>
          )}
          <a
            href="https://fiveimmortals.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "transparent",
              border: `1.5px solid ${COLORS.ink}`,
              color: COLORS.ink,
              padding: "11px 26px",
              fontSize: 14.5,
              fontWeight: 600,
              borderRadius: 4,
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            {t.backToWebsite}
          </a>
        </div>
      </div>
    );
  }


  /* ---------- Form (multi-step) ---------- */
  const total = STEP_KEYS.length;
  const key = STEP_KEYS[step];

  function renderStepContent() {
    if (key === "intro") {
      return (
        <>
          <h3 style={{ fontFamily: "'Noto Serif', Georgia, serif", fontSize: 18, color: COLORS.ink, margin: "0 0 10px" }}>
            {t.introTitle}
          </h3>
          <p style={{ fontSize: 15, color: COLORS.ink, lineHeight: 1.6, marginBottom: 22 }}>{t.introBody}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {t.introList.map((item, i) => (
              <div
                key={item.t}
                style={{
                  display: "flex",
                  gap: 14,
                  padding: "14px 16px",
                  background: "rgba(140,155,126,0.08)",
                  border: `1px solid ${COLORS.paperDark}`,
                  borderRadius: 8,
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    background: COLORS.lacquer,
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {i + 1}
                </span>
                <div>
                  <p style={{ margin: "0 0 3px", fontSize: 14.5, fontWeight: 700, color: COLORS.ink, fontFamily: "'Noto Serif', Georgia, serif" }}>
                    {item.t}
                  </p>
                  <p style={{ margin: 0, fontSize: 13.5, color: "#5A5142", lineHeight: 1.5 }}>{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      );
    }
    if (key === "identity") {
      return (
        <>
          <Field label={t.fields.nationality} required>
            <TextInput value={form.nationality} onChange={(e) => update("nationality", e.target.value)} />
          </Field>
          <Field label={t.fields.gender} required>
            <Select options={t.genderOptions} value={form.gender} onChange={(e) => update("gender", e.target.value)} />
          </Field>
          <Field label={t.fields.name} required>
            <TextInput value={form.name} onChange={(e) => update("name", e.target.value)} />
          </Field>
          <Field label={t.fields.age} required>
            <TextInput type="number" min="0" value={form.age} onChange={(e) => update("age", e.target.value)} />
          </Field>
        </>
      );
    }
    if (key === "contact") {
      return (
        <>
          <Field label={t.fields.city} required>
            <TextInput value={form.city} onChange={(e) => update("city", e.target.value)} />
          </Field>
          <Field label={t.fields.region} required>
            <TextInput value={form.region} onChange={(e) => update("region", e.target.value)} />
          </Field>
          <Field label={t.fields.country} required>
            <TextInput value={form.country} onChange={(e) => update("country", e.target.value)} />
          </Field>
          <Field label={t.fields.street} required>
            <TextInput value={form.street} onChange={(e) => update("street", e.target.value)} />
          </Field>
          <Field label={t.fields.zip} required>
            <TextInput value={form.zip} onChange={(e) => update("zip", e.target.value)} />
          </Field>
          <Field label={t.fields.phone} required>
            <TextInput type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
          </Field>
          <Field label={t.fields.email} required>
            <TextInput type="email" value={form.email} onChange={(e) => update("email", e.target.value)} />
          </Field>
        </>
      );
    }
    if (key === "profile") {
      return (
        <>
          <Field label={t.fields.profession} required>
            <TextInput value={form.profession} onChange={(e) => update("profession", e.target.value)} />
          </Field>
          <Field label={t.fields.health} required>
            <TextArea value={form.health} onChange={(e) => update("health", e.target.value)} />
          </Field>
          <Field label={t.fields.mentalHealth} required>
            <TextArea value={form.mentalHealth} onChange={(e) => update("mentalHealth", e.target.value)} />
          </Field>
          <Field label={t.fields.englishLevel} required>
            <Select options={t.englishOptions} value={form.englishLevel} onChange={(e) => update("englishLevel", e.target.value)} />
          </Field>
        </>
      );
    }
    if (key === "motivation") {
      return (
        <>
          <Field label={t.fields.goals} required>
            <TextArea value={form.goals} onChange={(e) => update("goals", e.target.value)} rows={3} />
          </Field>
          <Field label={t.fields.priorStudy} required>
            <TextArea value={form.priorStudy} onChange={(e) => update("priorStudy", e.target.value)} rows={3} />
          </Field>
          <Field label={t.fields.introduction} required>
            <TextArea value={form.introduction} onChange={(e) => update("introduction", e.target.value)} rows={4} />
          </Field>
          <Field label={t.fields.photo} required hint={t.photoNote}>
            <PhotoUpload
              value={form.photo}
              onChange={(v) => update("photo", v)}
              labelUpload={t.photoUpload}
              labelRetake={t.photoRetake}
              sizeNote={t.photoSizeNote}
              errorTooLarge={t.photoTooLarge}
            />
          </Field>
          <Field label={t.fields.coursesApplying} required>
            <TextInput value={form.coursesApplying} onChange={(e) => update("coursesApplying", e.target.value)} />
          </Field>
          <Field label={t.fields.expectations} required>
            <TextArea value={form.expectations} onChange={(e) => update("expectations", e.target.value)} rows={3} />
          </Field>
        </>
      );
    }
    if (key === "logistics") {
      return (
        <>
          <Field label={t.fields.religious}>
            <TextArea value={form.religious} onChange={(e) => update("religious", e.target.value)} rows={2} />
          </Field>
          <Field label={t.fields.emergencyContact} required>
            <TextInput value={form.emergencyContact} onChange={(e) => update("emergencyContact", e.target.value)} />
          </Field>
        </>
      );
    }
    if (key === "agreement") {
      return (
        <>
          <h3 style={{ fontFamily: "'Noto Serif', Georgia, serif", fontSize: 16, color: COLORS.ink, margin: "0 0 10px" }}>
            {t.rulesTitle}
          </h3>
          <div
            style={{
              maxHeight: 280,
              overflowY: "auto",
              border: `1px solid ${COLORS.paperDark}`,
              borderRadius: 8,
              padding: "16px 18px",
              marginBottom: 18,
              background: "#fff",
            }}
          >
            <p style={{ fontSize: 13, color: "#4A4135", lineHeight: 1.6, margin: "0 0 16px" }}>{TEMPLE_RULES.intro}</p>
            {TEMPLE_RULES.sections.map((section, i) => (
              <div key={i} style={{ marginBottom: 14 }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: COLORS.jadeDark, margin: "0 0 6px" }}>{section.title}</p>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  {section.items.map((item, j) => (
                    <li key={j} style={{ fontSize: 12.5, color: "#4A4135", lineHeight: 1.55, marginBottom: 4 }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            style={{
              background: "rgba(140,155,126,0.1)",
              border: `1px solid ${COLORS.jade}`,
              borderRadius: 8,
              padding: 20,
            }}
          >
            <label style={{ display: "flex", gap: 12, alignItems: "flex-start", cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={form.agreement}
                onChange={(e) => update("agreement", e.target.checked)}
                style={{ width: 20, height: 20, marginTop: 2, flexShrink: 0, accentColor: COLORS.lacquer }}
              />
              <span style={{ fontSize: 14.5, color: COLORS.ink, lineHeight: 1.5 }}>{t.fields.agreement}</span>
            </label>
          </div>
        </>
      );
    }
    return null;
  }

  const isLastStep = step === total - 1;
  const canSubmit = key !== "agreement" || form.agreement;

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: COLORS.paper, minHeight: "100vh" }}>
      <style>{fontImports}</style>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 24px",
          position: "sticky",
          top: 0,
          background: COLORS.paper,
          zIndex: 10,
          borderBottom: `1px solid ${COLORS.paperDark}`,
        }}
      >
        <button
          onClick={() => setView("hero")}
          style={{ background: "none", border: "none", fontFamily: "'Noto Serif', Georgia, serif", fontWeight: 700, fontSize: 15, color: COLORS.ink, cursor: "pointer" }}
        >
          ← Five Immortals Temple
        </button>
      </header>

      <div style={{ maxWidth: 560, margin: "0 auto", padding: "28px 20px 80px" }}>
        <h2 style={{ fontFamily: "'Noto Serif', Georgia, serif", fontSize: 24, color: COLORS.ink, marginBottom: 4 }}>
          {t.formTitle}
        </h2>
        <p style={{ fontSize: 13.5, color: "#7A6F5C", marginBottom: 22 }}>{t.formNote}</p>

        {/* progress */}
        <div style={{ display: "flex", gap: 6, marginBottom: 8 }}>
          {STEP_KEYS.map((sk, i) => (
            <div
              key={sk}
              style={{
                flex: 1,
                height: 5,
                borderRadius: 3,
                background: i <= step ? COLORS.lacquer : COLORS.paperDark,
                transition: "background 0.3s",
              }}
            />
          ))}
        </div>
        <p style={{ fontSize: 12, color: "#9A8F7C", marginBottom: 24, fontWeight: 600, letterSpacing: 0.3 }}>
          {t.stepOf.replace("{n}", step + 1).replace("{total}", total)} · {t.sections[key]}
        </p>

        <div
          style={{
            background: "#fff",
            border: `1px solid ${COLORS.paperDark}`,
            borderRadius: 10,
            padding: 26,
            boxShadow: "0 4px 24px rgba(31,26,20,0.06)",
          }}
        >
          {renderStepContent()}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24 }}>
          <button
            onClick={goBack}
            disabled={step === 0}
            style={{
              background: "transparent",
              border: `1.5px solid ${COLORS.ink}`,
              color: COLORS.ink,
              padding: "11px 22px",
              fontSize: 14.5,
              fontWeight: 600,
              borderRadius: 4,
              cursor: step === 0 ? "default" : "pointer",
              opacity: step === 0 ? 0.3 : 1,
            }}
          >
            {t.back}
          </button>

          {!isLastStep ? (
            <button
              onClick={goNext}
              style={{
                background: COLORS.lacquer,
                color: "#fff",
                border: "none",
                padding: "11px 26px",
                fontSize: 14.5,
                fontWeight: 700,
                borderRadius: 4,
                cursor: "pointer",
              }}
            >
              {key === "intro" ? t.introStart : t.next} →
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!canSubmit || submitting}
              style={{
                background: canSubmit ? COLORS.jadeDark : COLORS.paperDark,
                color: canSubmit ? "#fff" : "#9A8F7C",
                border: "none",
                padding: "11px 26px",
                fontSize: 14.5,
                fontWeight: 700,
                borderRadius: 4,
                cursor: canSubmit && !submitting ? "pointer" : "default",
              }}
            >
              {submitting ? t.submitting : t.submit}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

const fontImports = `
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap');
`;
