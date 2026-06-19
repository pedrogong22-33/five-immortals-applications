import React, { useState, useEffect, useRef } from "react";

/* ============================================================
   FIVE IMMORTALS TEMPLE — 2026 Course Data (from official site)
   ============================================================ */

const COURSES_2026 = [
  {
    id: "water-fire-taichi-jun",
    month: "JUN",
    day: "07",
    dateRange: "June 7 – 21, 2026",
    status: "now", // happening now, not open for new applications
    fee: "9,900 RMB",
    deposit: "1,900 RMB",
    title: {
      en: "Water and Fire Tai Chi Fist & Self-Healing",
      pt: "Tai Chi Punho de Água e Fogo e Autocura",
      es: "Tai Chi Puño de Agua y Fuego y Autocuración",
      fr: "Tai Chi Poing Eau et Feu et Auto-guérison",
    },
    teacher: {
      en: "Taught by Master Li Shifu",
      pt: "Ensinado pelo Mestre Li Shifu",
      es: "Impartido por el Maestro Li Shifu",
      fr: "Enseigné par le Maître Li Shifu",
    },
    summary: {
      en: "Ancient Eastern methods of guiding and cultivating qi (Dao Yin) for health, self-treatment of injuries, and Tai Chi combat methods for protection.",
      pt: "Métodos orientais ancestrais de condução e cultivo do qi (Dao Yin) para a saúde, tratamento pessoal de lesões, e métodos de combate de Tai Chi para protecção.",
      es: "Métodos orientales ancestrales de conducción y cultivo del qi (Dao Yin) para la salud, tratamiento personal de lesiones, y métodos de combate de Tai Chi para protección.",
      fr: "Méthodes orientales anciennes de guidage et de culture du qi (Dao Yin) pour la santé, le traitement personnel des blessures, et méthodes de combat de Tai Chi pour la protection.",
    },
    purpose: {
      en: "Studying ancient Eastern guiding and cultivating qi (Dao Yin) for health and self-treatment of injuries. Tai Chi combat methods for protection.",
      pt: "Estudo do antigo método oriental de condução e cultivo do qi (Dao Yin) para a saúde e tratamento pessoal de lesões. Métodos de combate de Tai Chi para protecção.",
      es: "Estudio del antiguo método oriental de conducción y cultivo del qi (Dao Yin) para la salud y el tratamiento personal de lesiones. Métodos de combate de Tai Chi para protección.",
      fr: "Étude de l'ancienne méthode orientale de guidage et de culture du qi (Dao Yin) pour la santé et le traitement personnel des blessures. Méthodes de combat de Tai Chi pour la protection.",
    },
    schedule: [
      {
        label: { en: "Theory", pt: "Teoria", es: "Teoría", fr: "Théorie" },
        text: {
          en: "Tai Chi theory, historical development, current status, and combat principles. Pain relief through fire therapy, moxibustion, cupping, music therapy, and Tai Chi qigong acupressure massage. Daoist etiquette and taboos.",
          pt: "Teoria do Tai Chi, desenvolvimento histórico, estado actual, e princípios de combate. Alívio da dor através de terapia do fogo, moxabustão, ventosas, musicoterapia, e massagem de acupressão de qigong de Tai Chi. Etiqueta e tabus taoístas.",
          es: "Teoría del Tai Chi, desarrollo histórico, estado actual, y principios de combate. Alivio del dolor mediante terapia del fuego, moxibustión, ventosas, musicoterapia, y masaje de acupresión de qigong de Tai Chi. Etiqueta y tabúes taoístas.",
          fr: "Théorie du Tai Chi, développement historique, état actuel, et principes de combat. Soulagement de la douleur par thérapie du feu, moxibustion, ventouses, musicothérapie, et massage d'acupression de qigong de Tai Chi. Étiquette et tabous taoïstes.",
        },
      },
      {
        label: { en: "Early Morning (1.5h)", pt: "Madrugada (1,5h)", es: "Madrugada (1,5h)", fr: "Tôt le matin (1,5h)" },
        text: {
          en: "Longevity Qi Gong, five forms. Opening the gate, clearing the orifice, 21-form rhythmic detoxification exercise, Five Tones Healing Song, methods to regulate cervical, thoracic, and lumbar spine issues.",
          pt: "Qi Gong da Longevidade, cinco formas. Abertura do portal, limpeza do orifício, exercício rítmico de desintoxicação de 21 formas, Canção de Cura dos Cinco Tons, métodos para regular problemas cervicais, torácicos, e lombares da coluna.",
          es: "Qi Gong de la Longevidad, cinco formas. Apertura de la puerta, limpieza del orificio, ejercicio rítmico de desintoxicación de 21 formas, Canción de Curación de los Cinco Tonos, métodos para regular problemas cervicales, torácicos, y lumbares de la columna.",
          fr: "Qi Gong de la Longévité, cinq formes. Ouverture de la porte, nettoyage de l'orifice, exercice rythmique de détoxification en 21 formes, Chant de Guérison des Cinq Tons, méthodes pour réguler les problèmes cervicaux, thoraciques, et lombaires de la colonne.",
        },
      },
      {
        label: { en: "Morning (2.5h)", pt: "Manhã (2,5h)", es: "Mañana (2,5h)", fr: "Matin (2,5h)" },
        text: {
          en: "Water and Fire Tai Chi routine: foundational methods, hand, elbow, shoulder, hip, leg, and footwork. Single and Double Push Hands.",
          pt: "Rotina de Tai Chi Água e Fogo: métodos fundamentais, mão, cotovelo, ombro, quadril, perna, e trabalho de pés. Push Hands simples e duplo.",
          es: "Rutina de Tai Chi Agua y Fuego: métodos fundamentales, mano, codo, hombro, cadera, pierna, y trabajo de pies. Push Hands simple y doble.",
          fr: "Routine de Tai Chi Eau et Feu : méthodes fondamentales, main, coude, épaule, hanche, jambe, et jeu de jambes. Push Hands simple et double.",
        },
      },
      {
        label: { en: "Afternoon (2.5h)", pt: "Tarde (2,5h)", es: "Tarde (2,5h)", fr: "Après-midi (2,5h)" },
        text: {
          en: "Tai Chi routine: foundational methods, stances, breathing. Relaxing shoulders, turning the windlass, Silk Reeling (Chan Si Li). Single and Double Push Hands.",
          pt: "Rotina de Tai Chi: métodos fundamentais, posições, respiração. Relaxamento dos ombros, rotação do guincho, Enrolamento de Seda (Chan Si Li). Push Hands simples e duplo.",
          es: "Rutina de Tai Chi: métodos fundamentales, posturas, respiración. Relajación de hombros, giro del torno, Devanado de Seda (Chan Si Li). Push Hands simple y doble.",
          fr: "Routine de Tai Chi : méthodes fondamentales, postures, respiration. Relâchement des épaules, rotation du treuil, Enroulement de Soie (Chan Si Li). Push Hands simple et double.",
        },
      },
      {
        label: { en: "Evening (1.5h)", pt: "Noite (1,5h)", es: "Noche (1,5h)", fr: "Soir (1,5h)" },
        text: {
          en: "Tai Chi Standing Meditation. Sitting meditation cultivating stillness, Lying Dragon meditation.",
          pt: "Meditação em Pé de Tai Chi. Meditação sentada cultivando a quietude, meditação do Dragão Reclinado.",
          es: "Meditación de Pie de Tai Chi. Meditación sentada cultivando la quietud, meditación del Dragón Reclinado.",
          fr: "Méditation Debout de Tai Chi. Méditation assise cultivant la quiétude, méditation du Dragon Couché.",
        },
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
    title: {
      en: "Wudang Sword & Internal Alchemy",
      pt: "Espada de Wudang e Alquimia Interna",
      es: "Espada de Wudang y Alquimia Interna",
      fr: "Épée de Wudang et Alchimie Intérieure",
    },
    teacher: {
      en: "Facilitated by disciple Cheng Ling",
      pt: "Facilitado pela discípula Cheng Ling",
      es: "Facilitado por la discípula Cheng Ling",
      fr: "Facilité par la disciple Cheng Ling",
    },
    summary: {
      en: "A private course combining Wudang Sword practice with Internal Alchemy foundations, led directly by disciple Cheng Ling. Prior appointment required.",
      pt: "Um curso privado que combina a prática da Espada de Wudang com fundamentos de Alquimia Interna, liderado directamente pela discípula Cheng Ling. Requer marcação prévia.",
      es: "Un curso privado que combina la práctica de la Espada de Wudang con fundamentos de Alquimia Interna, dirigido directamente por la discípula Cheng Ling. Requiere cita previa.",
      fr: "Un cours privé combinant la pratique de l'Épée de Wudang avec les fondements de l'Alchimie Intérieure, dirigé directement par la disciple Cheng Ling. Rendez-vous préalable requis.",
    },
    purpose: {
      en: "This course is privately facilitated and run directly by Cheng Ling. Detailed daily content is shared individually with applicants upon contact.",
      pt: "Este curso é facilitado de forma privada e gerido directamente por Cheng Ling. O conteúdo diário detalhado é partilhado individualmente com os candidatos após contacto.",
      es: "Este curso es facilitado de forma privada y gestionado directamente por Cheng Ling. El contenido diario detallado se comparte individualmente con los candidatos tras el contacto.",
      fr: "Ce cours est facilité de manière privée et géré directement par Cheng Ling. Le contenu quotidien détaillé est partagé individuellement avec les candidats après contact.",
    },
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
    title: {
      en: "Secret of the Golden Flower",
      pt: "O Segredo da Flor de Ouro",
      es: "El Secreto de la Flor de Oro",
      fr: "Le Secret de la Fleur d'Or",
    },
    teacher: {
      en: "Taught by Master Li Shifu",
      pt: "Ensinado pelo Mestre Li Shifu",
      es: "Impartido por el Maestro Li Shifu",
      fr: "Enseigné par le Maître Li Shifu",
    },
    summary: {
      en: "A foundational Internal Alchemy (Dan Dao) course exploring the path of Daoist cultivation through classical texts including the Secret of the Golden Flower.",
      pt: "Um curso fundamental de Alquimia Interna (Dan Dao) que explora o caminho do cultivo taoísta através de textos clássicos, incluindo O Segredo da Flor de Ouro.",
      es: "Un curso fundamental de Alquimia Interna (Dan Dao) que explora el camino del cultivo taoísta a través de textos clásicos, incluyendo El Secreto de la Flor de Oro.",
      fr: "Un cours fondamental d'Alchimie Intérieure (Dan Dao) explorant le chemin de la culture taoïste à travers des textes classiques, incluant Le Secret de la Fleur d'Or.",
    },
    purpose: {
      en: "To help participants understand the path and methods of Daoist cultivation in China; enhance comprehension and the ability to distinguish levels of cultivation; open the gate to wisdom amid the chaos of social life; explore the meaning of life and the truths of the universe. To strengthen one's energy field and vibrational frequency, cultivate compassion, love, forgiveness and tolerance, and prepare for future opportunities to unify body and higher self.",
      pt: "Ajudar os participantes a compreender o caminho e os métodos do cultivo taoísta na China; melhorar a compreensão e a capacidade de distinguir níveis de cultivo; abrir a porta da sabedoria em meio ao caos da vida social; explorar o sentido da vida e as verdades do universo. Fortalecer o campo energético e a frequência vibracional, cultivar a compaixão, o amor, o perdão e a tolerância, e preparar futuras oportunidades de unificação entre o corpo e o eu superior.",
      es: "Ayudar a los participantes a comprender el camino y los métodos del cultivo taoísta en China; mejorar la comprensión y la capacidad de distinguir niveles de cultivo; abrir la puerta a la sabiduría en medio del caos de la vida social; explorar el sentido de la vida y las verdades del universo. Fortalecer el campo energético y la frecuencia vibracional, cultivar la compasión, el amor, el perdón y la tolerancia, y preparar futuras oportunidades de unificación entre el cuerpo y el yo superior.",
      fr: "Aider les participants à comprendre le chemin et les méthodes de la culture taoïste en Chine ; améliorer la compréhension et la capacité à distinguer les niveaux de culture ; ouvrir la porte à la sagesse au milieu du chaos de la vie sociale ; explorer le sens de la vie et les vérités de l'univers. Renforcer le champ énergétique et la fréquence vibratoire, cultiver la compassion, l'amour, le pardon et la tolérance, et préparer de futures occasions d'unifier le corps et le soi supérieur.",
    },
    schedule: [
      {
        label: { en: "Theory", pt: "Teoria", es: "Teoría", fr: "Théorie" },
        text: {
          en: "Primarily theory-based. Fundamentals of Internal Alchemy theory, standing qigong methods, sitting meditation to gather qi, sleep-based qi retention, breathing techniques. Basics of the Microcosmic Orbit, and key points of \"49 Barriers,\" Qingjing Jing, Da Cheng Jie Yao, and the Secret of the Golden Flower itself.",
          pt: "Predominantemente teórico. Fundamentos da teoria da Alquimia Interna, métodos de qigong em pé, meditação sentada para reunir qi, retenção de qi durante o sono, técnicas de respiração. Noções básicas da Órbita Microcósmica, e pontos-chave dos \"49 Obstáculos\", Qingjing Jing, Da Cheng Jie Yao, e o próprio Segredo da Flor de Ouro.",
          es: "Predominantemente teórico. Fundamentos de la teoría de la Alquimia Interna, métodos de qigong de pie, meditación sentada para reunir qi, retención de qi durante el sueño, técnicas de respiración. Nociones básicas de la Órbita Microcósmica, y puntos clave de las \"49 Barreras\", Qingjing Jing, Da Cheng Jie Yao, y el propio Secreto de la Flor de Oro.",
          fr: "Principalement théorique. Fondements de la théorie de l'Alchimie Intérieure, méthodes de qigong debout, méditation assise pour rassembler le qi, rétention du qi pendant le sommeil, techniques de respiration. Notions de base de l'Orbite Microcosmique, et points clés des \"49 Barrières\", Qingjing Jing, Da Cheng Jie Yao, et le Secret de la Fleur d'Or lui-même.",
        },
      },
      {
        label: { en: "Early Morning (1.5h)", pt: "Madrugada (1,5h)", es: "Madrugada (1,5h)", fr: "Tôt le matin (1,5h)" },
        text: {
          en: "Longevity Qi Gong, six forms, gate-opening and detoxification methods, regulation of spinal issues.",
          pt: "Qi Gong da Longevidade, seis formas, métodos de abertura do portal e desintoxicação, regulação de problemas da coluna.",
          es: "Qi Gong de la Longevidad, seis formas, métodos de apertura de la puerta y desintoxicación, regulación de problemas de columna.",
          fr: "Qi Gong de la Longévité, six formes, méthodes d'ouverture de la porte et de détoxification, régulation des problèmes de colonne.",
        },
      },
      {
        label: { en: "Morning (3h)", pt: "Manhã (3h)", es: "Mañana (3h)", fr: "Matin (3h)" },
        text: {
          en: "Theory and practice of internal alchemy, cultivating and circulating energy. Methods for focusing the mind and igniting the inner fire.",
          pt: "Teoria e prática da alquimia interna, cultivo e circulação de energia. Métodos para concentrar a mente e acender o fogo interior.",
          es: "Teoría y práctica de la alquimia interna, cultivo y circulación de energía. Métodos para enfocar la mente y encender el fuego interior.",
          fr: "Théorie et pratique de l'alchimie intérieure, culture et circulation de l'énergie. Méthodes pour concentrer l'esprit et allumer le feu intérieur.",
        },
      },
      {
        label: { en: "Afternoon (3h)", pt: "Tarde (3h)", es: "Tarde (3h)", fr: "Après-midi (3h)" },
        text: {
          en: "Continuing internal alchemy practices and meditation. Daily life adjustments to aid cultivation of inner energy.",
          pt: "Continuação das práticas de alquimia interna e meditação. Ajustes na vida diária para auxiliar o cultivo da energia interior.",
          es: "Continuación de las prácticas de alquimia interna y meditación. Ajustes en la vida diaria para ayudar al cultivo de la energía interior.",
          fr: "Poursuite des pratiques d'alchimie intérieure et de méditation. Ajustements de la vie quotidienne pour aider à la culture de l'énergie intérieure.",
        },
      },
      {
        label: { en: "Evening (1.5h)", pt: "Noite (1,5h)", es: "Noche (1,5h)", fr: "Soir (1,5h)" },
        text: {
          en: "Standing Meditation, sitting meditation cultivating stillness, Lying Dragon meditation.",
          pt: "Meditação em Pé, meditação sentada cultivando a quietude, meditação do Dragão Reclinado.",
          es: "Meditación de Pie, meditación sentada cultivando la quietud, meditación del Dragón Reclinado.",
          fr: "Méditation Debout, méditation assise cultivant la quiétude, méditation du Dragon Couché.",
        },
      },
    ],
    requirements: [
      {
        en: "Basic foundation of sitting meditation and/or cultivation of stillness (any type)",
        pt: "Base básica de meditação sentada e/ou cultivo da quietude (qualquer tipo)",
        es: "Base básica de meditación sentada y/o cultivo de la quietud (cualquier tipo)",
        fr: "Base de méditation assise et/ou de culture de la quiétude (tout type)",
      },
      {
        en: "No diseases or disabilities",
        pt: "Sem doenças ou incapacidades",
        es: "Sin enfermedades ni discapacidades",
        fr: "Sans maladies ni handicaps",
      },
      {
        en: "Vegetarian diet, with monastic discipline (adhering to the temple's precepts)",
        pt: "Dieta vegetariana, com disciplina monástica (seguindo os preceitos do templo)",
        es: "Dieta vegetariana, con disciplina monástica (siguiendo los preceptos del templo)",
        fr: "Régime végétarien, avec discipline monastique (respect des préceptes du temple)",
      },
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
    title: {
      en: "Tai Chi, Taoist Medicine & Sitting Meditation",
      pt: "Tai Chi, Medicina Taoísta e Meditação Sentada",
      es: "Tai Chi, Medicina Taoísta y Meditación Sentada",
      fr: "Tai Chi, Médecine Taoïste et Méditation Assise",
    },
    teacher: {
      en: "Facilitated by disciple Cheng Jiu",
      pt: "Facilitado pelo discípulo Cheng Jiu",
      es: "Facilitado por el discípulo Cheng Jiu",
      fr: "Facilité par le disciple Cheng Jiu",
    },
    summary: {
      en: "A combined course covering Water and Fire Tai Chi, beginner Taoist medicine, and sitting meditation, privately facilitated by disciple Cheng Jiu. Prior appointment required.",
      pt: "Um curso combinado que abrange Tai Chi Água e Fogo, medicina taoísta para iniciantes, e meditação sentada, facilitado de forma privada pelo discípulo Cheng Jiu. Requer marcação prévia.",
      es: "Un curso combinado que abarca Tai Chi Agua y Fuego, medicina taoísta para principiantes, y meditación sentada, facilitado de forma privada por el discípulo Cheng Jiu. Requiere cita previa.",
      fr: "Un cours combiné couvrant le Tai Chi Eau et Feu, la médecine taoïste pour débutants, et la méditation assise, facilité de manière privée par le disciple Cheng Jiu. Rendez-vous préalable requis.",
    },
    purpose: {
      en: "This course is privately facilitated and run directly by Cheng Jiu, blending Tai Chi practice, beginner Taoist medicine, and seated meditation.",
      pt: "Este curso é facilitado de forma privada e gerido directamente por Cheng Jiu, combinando a prática de Tai Chi, medicina taoísta para iniciantes, e meditação sentada.",
      es: "Este curso es facilitado de forma privada y gestionado directamente por Cheng Jiu, combinando la práctica de Tai Chi, medicina taoísta para principiantes, y meditación sentada.",
      fr: "Ce cours est facilité de manière privée et géré directement par Cheng Jiu, combinant la pratique du Tai Chi, la médecine taoïste pour débutants, et la méditation assise.",
    },
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
    title: {
      en: "Tian Gang Ba Bu & Five Dragons Pure Yang",
      pt: "Tian Gang Ba Bu e Cinco Dragões Yang Puro",
      es: "Tian Gang Ba Bu y Cinco Dragones Yang Puro",
      fr: "Tian Gang Ba Bu et Cinq Dragons Yang Pur",
    },
    teacher: {
      en: "Taught by Master Li Shifu",
      pt: "Ensinado pelo Mestre Li Shifu",
      es: "Impartido por el Maestro Li Shifu",
      fr: "Enseigné par le Maître Li Shifu",
    },
    summary: {
      en: "Flower of Life: Heavenly Dipper Eight Steps (beginner level) combined with the Five Dragons Pure Yang Body Protection Skill, for combat and self-healing.",
      pt: "Flor da Vida: Oito Passos da Ursa Celestial (nível iniciante) combinados com a Técnica de Protecção Corporal dos Cinco Dragões Yang Puro, para combate e autocura.",
      es: "Flor de la Vida: Ocho Pasos de la Osa Celestial (nivel principiante) combinados con la Técnica de Protección Corporal de los Cinco Dragones Yang Puro, para combate y autocuración.",
      fr: "Fleur de Vie : Huit Pas de la Grande Ourse (niveau débutant) combinés avec la Technique de Protection Corporelle des Cinq Dragons Yang Pur, pour le combat et l'auto-guérison.",
    },
    purpose: {
      en: "Obtaining cosmic energy assistance. Practicing routines on the Flower of Life pattern for combat and self-healing of injuries.",
      pt: "Obtenção de assistência da energia cósmica. Prática de rotinas no padrão da Flor da Vida para combate e autocura de lesões.",
      es: "Obtención de asistencia de la energía cósmica. Práctica de rutinas en el patrón de la Flor de la Vida para combate y autocuración de lesiones.",
      fr: "Obtention de l'assistance de l'énergie cosmique. Pratique de routines sur le motif de la Fleur de Vie pour le combat et l'auto-guérison des blessures.",
    },
    schedule: [
      {
        label: { en: "Theory", pt: "Teoria", es: "Teoría", fr: "Théorie" },
        text: {
          en: "History and lineage of Pure Yang Gong (Chun Yang Gong). Unification of Heaven, Earth, and Human. Mantras for Heavenly Dipper protection and combat application. Pain relief through moxibustion, cupping, music therapy, and qigong acupressure.",
          pt: "História e lineagem do Yang Puro Gong (Chun Yang Gong). Unificação do Céu, Terra, e Humanidade. Mantras de protecção da Ursa Celestial e aplicação em combate. Alívio da dor através de moxabustão, ventosas, musicoterapia, e acupressão de qigong.",
          es: "Historia y linaje del Yang Puro Gong (Chun Yang Gong). Unificación del Cielo, la Tierra, y la Humanidad. Mantras de protección de la Osa Celestial y aplicación en combate. Alivio del dolor mediante moxibustión, ventosas, musicoterapia, y acupresión de qigong.",
          fr: "Histoire et lignée du Yang Pur Gong (Chun Yang Gong). Unification du Ciel, de la Terre, et de l'Humanité. Mantras de protection de la Grande Ourse et application au combat. Soulagement de la douleur par moxibustion, ventouses, musicothérapie, et acupression de qigong.",
        },
      },
      {
        label: { en: "Early Morning (2h)", pt: "Madrugada (2h)", es: "Madrugada (2h)", fr: "Tôt le matin (2h)" },
        text: {
          en: "Longevity Qi Gong, six forms. Gate-opening, 21-form detoxification, Five Tones Healing Song, Three Vertebrae Seven Forms.",
          pt: "Qi Gong da Longevidade, seis formas. Abertura do portal, desintoxicação de 21 formas, Canção de Cura dos Cinco Tons, Sete Formas das Três Vértebras.",
          es: "Qi Gong de la Longevidad, seis formas. Apertura de la puerta, desintoxicación de 21 formas, Canción de Curación de los Cinco Tonos, Siete Formas de las Tres Vértebras.",
          fr: "Qi Gong de la Longévité, six formes. Ouverture de la porte, détoxification en 21 formes, Chant de Guérison des Cinq Tons, Sept Formes des Trois Vertèbres.",
        },
      },
      {
        label: { en: "Morning (3h)", pt: "Manhã (3h)", es: "Mañana (3h)", fr: "Matin (3h)" },
        text: {
          en: "Pure Yang Da Gong and Heavenly Dipper Eight Steps routine. Hand, eye, body, and footwork training.",
          pt: "Rotina de Yang Puro Da Gong e Oito Passos da Ursa Celestial. Treino de mão, olho, corpo, e trabalho de pés.",
          es: "Rutina de Yang Puro Da Gong y Ocho Pasos de la Osa Celestial. Entrenamiento de mano, ojo, cuerpo, y trabajo de pies.",
          fr: "Routine de Yang Pur Da Gong et Huit Pas de la Grande Ourse. Entraînement de la main, de l'œil, du corps, et du jeu de jambes.",
        },
      },
      {
        label: { en: "Afternoon (3h)", pt: "Tarde (3h)", es: "Tarde (3h)", fr: "Après-midi (3h)" },
        text: {
          en: "Pure Yang Da Gong and Heavenly Dipper Eight Steps routine training.",
          pt: "Treino da rotina de Yang Puro Da Gong e Oito Passos da Ursa Celestial.",
          es: "Entrenamiento de la rutina de Yang Puro Da Gong y Ocho Pasos de la Osa Celestial.",
          fr: "Entraînement de la routine de Yang Pur Da Gong et Huit Pas de la Grande Ourse.",
        },
      },
      {
        label: { en: "Evening (2h)", pt: "Noite (2h)", es: "Noche (2h)", fr: "Soir (2h)" },
        text: {
          en: "Dynamic Pillar (Submerging and Floating). Sitting meditation.",
          pt: "Pilar Dinâmico (Submergir e Flutuar). Meditação sentada.",
          es: "Pilar Dinámico (Sumergir y Flotar). Meditación sentada.",
          fr: "Pilier Dynamique (Immersion et Flottement). Méditation assise.",
        },
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
    title: {
      en: "Taoist Medicine: Foundations",
      pt: "Medicina Taoísta: Fundamentos",
      es: "Medicina Taoísta: Fundamentos",
      fr: "Médecine Taoïste : Fondements",
    },
    teacher: {
      en: "Taught by Master Li Shifu",
      pt: "Ensinado pelo Mestre Li Shifu",
      es: "Impartido por el Maestro Li Shifu",
      fr: "Enseigné par le Maître Li Shifu",
    },
    summary: {
      en: "An introduction to Daoist medicine: simple, natural healing techniques for personal health and helping others through traditional Daoist practice.",
      pt: "Uma introdução à medicina taoísta: técnicas simples e naturais de cura para a saúde pessoal e para ajudar outros através da prática taoísta tradicional.",
      es: "Una introducción a la medicina taoísta: técnicas simples y naturales de curación para la salud personal y para ayudar a otros a través de la práctica taoísta tradicional.",
      fr: "Une introduction à la médecine taoïste : techniques simples et naturelles de guérison pour la santé personnelle et pour aider les autres à travers la pratique taoïste traditionnelle.",
    },
    purpose: {
      en: "Simple, natural healing techniques aimed at personal health improvement and helping others alleviate suffering through Daoist medicine.",
      pt: "Técnicas simples e naturais de cura, orientadas para a melhoria da saúde pessoal e para ajudar outros a aliviar o sofrimento através da medicina taoísta.",
      es: "Técnicas simples y naturales de curación, orientadas a la mejora de la salud personal y a ayudar a otros a aliviar el sufrimiento a través de la medicina taoísta.",
      fr: "Techniques simples et naturelles de guérison, visant l'amélioration de la santé personnelle et l'aide aux autres pour soulager la souffrance à travers la médecine taoïste.",
    },
    schedule: [
      {
        label: { en: "Theory", pt: "Teoria", es: "Teoría", fr: "Théorie" },
        text: {
          en: "Fundamental Yin-Yang Five Elements theory, Meridian theory, Daoist holistic health in harmony with heaven, earth, humanity, and nature, comprehensive diagnosis, medical theories.",
          pt: "Teoria fundamental do Yin-Yang e dos Cinco Elementos, teoria dos Meridianos, saúde holística taoísta em harmonia com o céu, a terra, a humanidade, e a natureza, diagnóstico abrangente, teorias médicas.",
          es: "Teoría fundamental del Yin-Yang y los Cinco Elementos, teoría de los Meridianos, salud holística taoísta en armonía con el cielo, la tierra, la humanidad, y la naturaleza, diagnóstico integral, teorías médicas.",
          fr: "Théorie fondamentale du Yin-Yang et des Cinq Éléments, théorie des Méridiens, santé holistique taoïste en harmonie avec le ciel, la terre, l'humanité, et la nature, diagnostic complet, théories médicales.",
        },
      },
      {
        label: { en: "Morning (1.5h)", pt: "Manhã (1,5h)", es: "Mañana (1,5h)", fr: "Matin (1,5h)" },
        text: {
          en: "Longevity Qi Gong, six forms, gate-opening, detoxification, regulation of spinal issues.",
          pt: "Qi Gong da Longevidade, seis formas, abertura do portal, desintoxicação, regulação de problemas da coluna.",
          es: "Qi Gong de la Longevidad, seis formas, apertura de la puerta, desintoxicación, regulación de problemas de columna.",
          fr: "Qi Gong de la Longévité, six formes, ouverture de la porte, détoxification, régulation des problèmes de colonne.",
        },
      },
      {
        label: { en: "Morning (3h)", pt: "Manhã (3h)", es: "Mañana (3h)", fr: "Matin (3h)" },
        text: {
          en: "Acupuncture, moxibustion, cupping, bloodletting, scraping (gua sha), massage, acupressure therapy. Recognizing, harvesting, and preparing medicinal herbs.",
          pt: "Acupunctura, moxabustão, ventosas, sangria, raspagem (gua sha), massagem, terapia de acupressão. Reconhecimento, colheita, e preparação de plantas medicinais.",
          es: "Acupuntura, moxibustión, ventosas, sangría, raspado (gua sha), masaje, terapia de acupresión. Reconocimiento, recolección, y preparación de plantas medicinales.",
          fr: "Acupuncture, moxibustion, ventouses, saignée, raclage (gua sha), massage, thérapie d'acupression. Reconnaissance, récolte, et préparation de plantes médicinales.",
        },
      },
      {
        label: { en: "Afternoon (3h)", pt: "Tarde (3h)", es: "Tarde (3h)", fr: "Après-midi (3h)" },
        text: {
          en: "Fire healing, qigong healing techniques, Five Elements music therapy, talisman healing methods. Herbal formulas for healing common illnesses.",
          pt: "Cura pelo fogo, técnicas de cura por qigong, musicoterapia dos Cinco Elementos, métodos de cura por talismãs. Fórmulas de plantas medicinais para curar doenças comuns.",
          es: "Curación por fuego, técnicas de curación por qigong, musicoterapia de los Cinco Elementos, métodos de curación por talismanes. Fórmulas de hierbas para curar enfermedades comunes.",
          fr: "Guérison par le feu, techniques de guérison par qigong, musicothérapie des Cinq Éléments, méthodes de guérison par talismans. Formules à base de plantes pour soigner les maladies courantes.",
        },
      },
      {
        label: { en: "Evening (2h)", pt: "Noite (2h)", es: "Noche (2h)", fr: "Soir (2h)" },
        text: {
          en: "Healing Qigong, Submerging and Floating pillar, sitting meditation, Lying Dragon meditation.",
          pt: "Qigong de Cura, pilar Submergir e Flutuar, meditação sentada, meditação do Dragão Reclinado.",
          es: "Qigong de Curación, pilar Sumergir y Flotar, meditación sentada, meditación del Dragón Reclinado.",
          fr: "Qigong de Guérison, pilier Immersion et Flottement, méditation assise, méditation du Dragon Couché.",
        },
      },
    ],
    requirements: [
      {
        en: "Study material is sent ahead of the course upon deposit. Early registration is recommended to allow preparation time",
        pt: "O material de estudo é enviado antes do curso após o depósito. Recomenda-se inscrição antecipada para permitir tempo de preparação",
        es: "El material de estudio se envía antes del curso tras el depósito. Se recomienda la inscripción anticipada para permitir tiempo de preparación",
        fr: "Le matériel d'étude est envoyé avant le cours après le dépôt. Une inscription anticipée est recommandée pour permettre un temps de préparation",
      },
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
    title: {
      en: "Secret of the Golden Flower (2nd edition)",
      pt: "O Segredo da Flor de Ouro (2ª edição)",
      es: "El Secreto de la Flor de Oro (2ª edición)",
      fr: "Le Secret de la Fleur d'Or (2e édition)",
    },
    teacher: {
      en: "Taught by Master Li Shifu",
      pt: "Ensinado pelo Mestre Li Shifu",
      es: "Impartido por el Maestro Li Shifu",
      fr: "Enseigné par le Maître Li Shifu",
    },
    summary: {
      en: "A second 2026 edition of the foundational Internal Alchemy (Dan Dao) course, identical in content to the July session.",
      pt: "Uma segunda edição de 2026 do curso fundamental de Alquimia Interna (Dan Dao), com conteúdo idêntico à sessão de Julho.",
      es: "Una segunda edición de 2026 del curso fundamental de Alquimia Interna (Dan Dao), con contenido idéntico a la sesión de julio.",
      fr: "Une deuxième édition 2026 du cours fondamental d'Alchimie Intérieure (Dan Dao), avec un contenu identique à la session de juillet.",
    },
    purpose: {
      en: "To help participants understand the path and methods of Daoist cultivation in China; enhance comprehension and the ability to distinguish levels of cultivation. To strengthen one's energy field and vibrational frequency, cultivate compassion, love, forgiveness and tolerance, and prepare for future opportunities to unify body and higher self.",
      pt: "Ajudar os participantes a compreender o caminho e os métodos do cultivo taoísta na China; melhorar a compreensão e a capacidade de distinguir níveis de cultivo. Fortalecer o campo energético e a frequência vibracional, cultivar a compaixão, o amor, o perdão e a tolerância, e preparar futuras oportunidades de unificação entre o corpo e o eu superior.",
      es: "Ayudar a los participantes a comprender el camino y los métodos del cultivo taoísta en China; mejorar la comprensión y la capacidad de distinguir niveles de cultivo. Fortalecer el campo energético y la frecuencia vibracional, cultivar la compasión, el amor, el perdón y la tolerancia, y preparar futuras oportunidades de unificación entre el cuerpo y el yo superior.",
      fr: "Aider les participants à comprendre le chemin et les méthodes de la culture taoïste en Chine ; améliorer la compréhension et la capacité à distinguer les niveaux de culture. Renforcer le champ énergétique et la fréquence vibratoire, cultiver la compassion, l'amour, le pardon et la tolérance, et préparer de futures occasions d'unifier le corps et le soi supérieur.",
    },
    schedule: [
      {
        label: { en: "Theory", pt: "Teoria", es: "Teoría", fr: "Théorie" },
        text: {
          en: "Primarily theory-based. Fundamentals of Internal Alchemy theory, standing qigong methods, sitting meditation to gather qi, sleep-based qi retention, breathing techniques. Basics of the Microcosmic Orbit, and key points of \"49 Barriers,\" Qingjing Jing, Da Cheng Jie Yao, and the Secret of the Golden Flower itself.",
          pt: "Predominantemente teórico. Fundamentos da teoria da Alquimia Interna, métodos de qigong em pé, meditação sentada para reunir qi, retenção de qi durante o sono, técnicas de respiração. Noções básicas da Órbita Microcósmica, e pontos-chave dos \"49 Obstáculos\", Qingjing Jing, Da Cheng Jie Yao, e o próprio Segredo da Flor de Ouro.",
          es: "Predominantemente teórico. Fundamentos de la teoría de la Alquimia Interna, métodos de qigong de pie, meditación sentada para reunir qi, retención de qi durante el sueño, técnicas de respiración. Nociones básicas de la Órbita Microcósmica, y puntos clave de las \"49 Barreras\", Qingjing Jing, Da Cheng Jie Yao, y el propio Secreto de la Flor de Oro.",
          fr: "Principalement théorique. Fondements de la théorie de l'Alchimie Intérieure, méthodes de qigong debout, méditation assise pour rassembler le qi, rétention du qi pendant le sommeil, techniques de respiration. Notions de base de l'Orbite Microcosmique, et points clés des \"49 Barrières\", Qingjing Jing, Da Cheng Jie Yao, et le Secret de la Fleur d'Or lui-même.",
        },
      },
      {
        label: { en: "Early Morning (1.5h)", pt: "Madrugada (1,5h)", es: "Madrugada (1,5h)", fr: "Tôt le matin (1,5h)" },
        text: {
          en: "Longevity Qi Gong, six forms, gate-opening and detoxification methods, regulation of spinal issues.",
          pt: "Qi Gong da Longevidade, seis formas, métodos de abertura do portal e desintoxicação, regulação de problemas da coluna.",
          es: "Qi Gong de la Longevidad, seis formas, métodos de apertura de la puerta y desintoxicación, regulación de problemas de columna.",
          fr: "Qi Gong de la Longévité, six formes, méthodes d'ouverture de la porte et de détoxification, régulation des problèmes de colonne.",
        },
      },
      {
        label: { en: "Morning (3h)", pt: "Manhã (3h)", es: "Mañana (3h)", fr: "Matin (3h)" },
        text: {
          en: "Theory and practice of internal alchemy, cultivating and circulating energy. Methods for focusing the mind and igniting the inner fire.",
          pt: "Teoria e prática da alquimia interna, cultivo e circulação de energia. Métodos para concentrar a mente e acender o fogo interior.",
          es: "Teoría y práctica de la alquimia interna, cultivo y circulación de energía. Métodos para enfocar la mente y encender el fuego interior.",
          fr: "Théorie et pratique de l'alchimie intérieure, culture et circulation de l'énergie. Méthodes pour concentrer l'esprit et allumer le feu intérieur.",
        },
      },
      {
        label: { en: "Afternoon (3h)", pt: "Tarde (3h)", es: "Tarde (3h)", fr: "Après-midi (3h)" },
        text: {
          en: "Continuing internal alchemy practices and meditation. Daily life adjustments to aid cultivation of inner energy.",
          pt: "Continuação das práticas de alquimia interna e meditação. Ajustes na vida diária para auxiliar o cultivo da energia interior.",
          es: "Continuación de las prácticas de alquimia interna y meditación. Ajustes en la vida diaria para ayudar al cultivo de la energía interior.",
          fr: "Poursuite des pratiques d'alchimie intérieure et de méditation. Ajustements de la vie quotidienne pour aider à la culture de l'énergie intérieure.",
        },
      },
      {
        label: { en: "Evening (1.5h)", pt: "Noite (1,5h)", es: "Noche (1,5h)", fr: "Soir (1,5h)" },
        text: {
          en: "Standing Meditation, sitting meditation cultivating stillness, Lying Dragon meditation.",
          pt: "Meditação em Pé, meditação sentada cultivando a quietude, meditação do Dragão Reclinado.",
          es: "Meditación de Pie, meditación sentada cultivando la quietud, meditación del Dragón Reclinado.",
          fr: "Méditation Debout, méditation assise cultivant la quiétude, méditation du Dragon Couché.",
        },
      },
    ],
    requirements: [
      {
        en: "Basic foundation of sitting meditation and/or cultivation of stillness (any type)",
        pt: "Base básica de meditação sentada e/ou cultivo da quietude (qualquer tipo)",
        es: "Base básica de meditación sentada y/o cultivo de la quietud (cualquier tipo)",
        fr: "Base de méditation assise et/ou de culture de la quiétude (tout type)",
      },
      {
        en: "No diseases or disabilities",
        pt: "Sem doenças ou incapacidades",
        es: "Sin enfermedades ni discapacidades",
        fr: "Sans maladies ni handicaps",
      },
      {
        en: "Vegetarian diet, with monastic discipline (adhering to the temple's precepts)",
        pt: "Dieta vegetariana, com disciplina monástica (seguindo os preceitos do templo)",
        es: "Dieta vegetariana, con disciplina monástica (siguiendo los preceptos del templo)",
        fr: "Régime végétarien, avec discipline monastique (respect des préceptes du temple)",
      },
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
    title: {
      en: "Dragon Heart Sword",
      pt: "Espada Coração de Dragão",
      es: "Espada Corazón de Dragón",
      fr: "Épée Cœur de Dragon",
    },
    teacher: {
      en: "Taught by Master Li Shifu",
      pt: "Ensinado pelo Mestre Li Shifu",
      es: "Impartido por el Maestro Li Shifu",
      fr: "Enseigné par le Maître Li Shifu",
    },
    summary: {
      en: "Sword fundamentals and the Dragon Form Sword routine, combined with natural healing methods, history and lineage of the art.",
      pt: "Fundamentos da espada e a rotina da Espada de Forma de Dragão, combinados com métodos naturais de cura, história e lineagem da arte.",
      es: "Fundamentos de la espada y la rutina de la Espada de Forma de Dragón, combinados con métodos naturales de curación, historia y linaje del arte.",
      fr: "Fondamentaux de l'épée et la routine de l'Épée Forme de Dragon, combinés avec des méthodes naturelles de guérison, histoire et lignée de l'art.",
    },
    purpose: {
      en: "Historical lineage, development, and current status of the sword arts. Practicing routines on the Flower of Life, with natural healing methods for pain relief.",
      pt: "Lineagem histórica, desenvolvimento, e estado actual das artes da espada. Prática de rotinas na Flor da Vida, com métodos naturais de cura para alívio da dor.",
      es: "Linaje histórico, desarrollo, y estado actual de las artes de la espada. Práctica de rutinas en la Flor de la Vida, con métodos naturales de curación para el alivio del dolor.",
      fr: "Lignée historique, développement, et état actuel des arts de l'épée. Pratique de routines sur la Fleur de Vie, avec des méthodes naturelles de guérison pour le soulagement de la douleur.",
    },
    schedule: [
      {
        label: { en: "Theory", pt: "Teoria", es: "Teoría", fr: "Théorie" },
        text: {
          en: "Historical lineage, development, and current status. Pain relief through fire therapy, moxibustion, cupping, bloodletting, music therapy, acupressure massage, and herbal prescriptions. Daoist etiquette and taboos.",
          pt: "Lineagem histórica, desenvolvimento, e estado actual. Alívio da dor através de terapia do fogo, moxabustão, ventosas, sangria, musicoterapia, massagem de acupressão, e prescrições de plantas medicinais. Etiqueta e tabus taoístas.",
          es: "Linaje histórico, desarrollo, y estado actual. Alivio del dolor mediante terapia del fuego, moxibustión, ventosas, sangría, musicoterapia, masaje de acupresión, y prescripciones de hierbas. Etiqueta y tabúes taoístas.",
          fr: "Lignée historique, développement, et état actuel. Soulagement de la douleur par thérapie du feu, moxibustion, ventouses, saignée, musicothérapie, massage d'acupression, et prescriptions à base de plantes. Étiquette et tabous taoïstes.",
        },
      },
      {
        label: { en: "Early Morning (1.5h)", pt: "Madrugada (1,5h)", es: "Madrugada (1,5h)", fr: "Tôt le matin (1,5h)" },
        text: {
          en: "Longevity Qi Gong, five forms, gate-opening, detoxification, regulation of spinal issues.",
          pt: "Qi Gong da Longevidade, cinco formas, abertura do portal, desintoxicação, regulação de problemas da coluna.",
          es: "Qi Gong de la Longevidad, cinco formas, apertura de la puerta, desintoxicación, regulación de problemas de columna.",
          fr: "Qi Gong de la Longévité, cinq formes, ouverture de la porte, détoxification, régulation des problèmes de colonne.",
        },
      },
      {
        label: { en: "Morning (2.5h)", pt: "Manhã (2,5h)", es: "Mañana (2,5h)", fr: "Matin (2,5h)" },
        text: {
          en: "Sword fundamentals: hand, eye, body, technique, and footwork basics. Dragon Form Sword routine.",
          pt: "Fundamentos da espada: noções básicas de mão, olho, corpo, técnica, e trabalho de pés. Rotina da Espada de Forma de Dragão.",
          es: "Fundamentos de la espada: nociones básicas de mano, ojo, cuerpo, técnica, y trabajo de pies. Rutina de la Espada de Forma de Dragón.",
          fr: "Fondamentaux de l'épée : bases de la main, de l'œil, du corps, de la technique, et du jeu de jambes. Routine de l'Épée Forme de Dragon.",
        },
      },
      {
        label: { en: "Afternoon (2.5h)", pt: "Tarde (2,5h)", es: "Tarde (2,5h)", fr: "Après-midi (2,5h)" },
        text: {
          en: "Sword fundamentals and Dragon Form Sword routine continued.",
          pt: "Continuação dos fundamentos da espada e da rotina da Espada de Forma de Dragão.",
          es: "Continuación de los fundamentos de la espada y la rutina de la Espada de Forma de Dragón.",
          fr: "Poursuite des fondamentaux de l'épée et de la routine de l'Épée Forme de Dragon.",
        },
      },
      {
        label: { en: "Evening (1h)", pt: "Noite (1h)", es: "Noche (1h)", fr: "Soir (1h)" },
        text: {
          en: "Standing Meditation, sitting meditation cultivating stillness, Lying Dragon meditation.",
          pt: "Meditação em Pé, meditação sentada cultivando a quietude, meditação do Dragão Reclinado.",
          es: "Meditación de Pie, meditación sentada cultivando la quietud, meditación del Dragón Reclinado.",
          fr: "Méditation Debout, méditation assise cultivant la quiétude, méditation du Dragon Couché.",
        },
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
    title: {
      en: "Taoist Medicine: Foundations (2nd edition)",
      pt: "Medicina Taoísta: Fundamentos (2ª edição)",
      es: "Medicina Taoísta: Fundamentos (2ª edición)",
      fr: "Médecine Taoïste : Fondements (2e édition)",
    },
    teacher: {
      en: "Taught by Master Li Shifu",
      pt: "Ensinado pelo Mestre Li Shifu",
      es: "Impartido por el Maestro Li Shifu",
      fr: "Enseigné par le Maître Li Shifu",
    },
    summary: {
      en: "A second 2026 edition of the Taoist Medicine foundations course, identical in content to the September session.",
      pt: "Uma segunda edição de 2026 do curso de fundamentos de Medicina Taoísta, com conteúdo idêntico à sessão de Setembro.",
      es: "Una segunda edición de 2026 del curso de fundamentos de Medicina Taoísta, con contenido idéntico a la sesión de septiembre.",
      fr: "Une deuxième édition 2026 du cours de fondements de Médecine Taoïste, avec un contenu identique à la session de septembre.",
    },
    purpose: {
      en: "Simple, natural healing techniques aimed at personal health improvement and helping others alleviate suffering through Daoist medicine.",
      pt: "Técnicas simples e naturais de cura, orientadas para a melhoria da saúde pessoal e para ajudar outros a aliviar o sofrimento através da medicina taoísta.",
      es: "Técnicas simples y naturales de curación, orientadas a la mejora de la salud personal y a ayudar a otros a aliviar el sufrimiento a través de la medicina taoísta.",
      fr: "Techniques simples et naturelles de guérison, visant l'amélioration de la santé personnelle et l'aide aux autres pour soulager la souffrance à travers la médecine taoïste.",
    },
    schedule: [
      {
        label: { en: "Theory", pt: "Teoria", es: "Teoría", fr: "Théorie" },
        text: {
          en: "Fundamental Yin-Yang Five Elements theory, Meridian theory, Daoist holistic health in harmony with heaven, earth, humanity, and nature, comprehensive diagnosis, medical theories.",
          pt: "Teoria fundamental do Yin-Yang e dos Cinco Elementos, teoria dos Meridianos, saúde holística taoísta em harmonia com o céu, a terra, a humanidade, e a natureza, diagnóstico abrangente, teorias médicas.",
          es: "Teoría fundamental del Yin-Yang y los Cinco Elementos, teoría de los Meridianos, salud holística taoísta en armonía con el cielo, la tierra, la humanidad, y la naturaleza, diagnóstico integral, teorías médicas.",
          fr: "Théorie fondamentale du Yin-Yang et des Cinq Éléments, théorie des Méridiens, santé holistique taoïste en harmonie avec le ciel, la terre, l'humanité, et la nature, diagnostic complet, théories médicales.",
        },
      },
      {
        label: { en: "Morning (1.5h)", pt: "Manhã (1,5h)", es: "Mañana (1,5h)", fr: "Matin (1,5h)" },
        text: {
          en: "Longevity Qi Gong, six forms, gate-opening, detoxification, regulation of spinal issues.",
          pt: "Qi Gong da Longevidade, seis formas, abertura do portal, desintoxicação, regulação de problemas da coluna.",
          es: "Qi Gong de la Longevidad, seis formas, apertura de la puerta, desintoxicación, regulación de problemas de columna.",
          fr: "Qi Gong de la Longévité, six formes, ouverture de la porte, détoxification, régulation des problèmes de colonne.",
        },
      },
      {
        label: { en: "Morning (3h)", pt: "Manhã (3h)", es: "Mañana (3h)", fr: "Matin (3h)" },
        text: {
          en: "Acupuncture, moxibustion, cupping, bloodletting, scraping (gua sha), massage, acupressure therapy. Recognizing, harvesting, and preparing medicinal herbs.",
          pt: "Acupunctura, moxabustão, ventosas, sangria, raspagem (gua sha), massagem, terapia de acupressão. Reconhecimento, colheita, e preparação de plantas medicinais.",
          es: "Acupuntura, moxibustión, ventosas, sangría, raspado (gua sha), masaje, terapia de acupresión. Reconocimiento, recolección, y preparación de plantas medicinales.",
          fr: "Acupuncture, moxibustion, ventouses, saignée, raclage (gua sha), massage, thérapie d'acupression. Reconnaissance, récolte, et préparation de plantes médicinales.",
        },
      },
      {
        label: { en: "Afternoon (3h)", pt: "Tarde (3h)", es: "Tarde (3h)", fr: "Après-midi (3h)" },
        text: {
          en: "Fire healing, qigong healing techniques, Five Elements music therapy, talisman healing methods. Herbal formulas for healing common illnesses.",
          pt: "Cura pelo fogo, técnicas de cura por qigong, musicoterapia dos Cinco Elementos, métodos de cura por talismãs. Fórmulas de plantas medicinais para curar doenças comuns.",
          es: "Curación por fuego, técnicas de curación por qigong, musicoterapia de los Cinco Elementos, métodos de curación por talismanes. Fórmulas de hierbas para curar enfermedades comunes.",
          fr: "Guérison par le feu, techniques de guérison par qigong, musicothérapie des Cinq Éléments, méthodes de guérison par talismans. Formules à base de plantes pour soigner les maladies courantes.",
        },
      },
      {
        label: { en: "Evening (2h)", pt: "Noite (2h)", es: "Noche (2h)", fr: "Soir (2h)" },
        text: {
          en: "Healing Qigong, Submerging and Floating pillar, sitting meditation, Lying Dragon meditation.",
          pt: "Qigong de Cura, pilar Submergir e Flutuar, meditação sentada, meditação do Dragão Reclinado.",
          es: "Qigong de Curación, pilar Sumergir y Flotar, meditación sentada, meditación del Dragón Reclinado.",
          fr: "Qigong de Guérison, pilier Immersion et Flottement, méditation assise, méditation du Dragon Couché.",
        },
      },
    ],
    requirements: [
      {
        en: "Study material is sent ahead of the course upon deposit. Early registration is recommended to allow preparation time",
        pt: "O material de estudo é enviado antes do curso após o depósito. Recomenda-se inscrição antecipada para permitir tempo de preparação",
        es: "El material de estudio se envía antes del curso tras el depósito. Se recomienda la inscripción anticipada para permitir tiempo de preparación",
        fr: "Le matériel d'étude est envoyé avant le cours après le dépôt. Une inscription anticipée est recommandée pour permettre un temps de préparation",
      },
    ],
    privateContact: null,
  },
];

/* Common policies shown on every course (from the official site) */
const COURSE_POLICIES = {
  minStudents: {
    en: "The minimum number of students required for any course is 8.",
    pt: "O número mínimo de alunos exigido para qualquer curso é 8.",
    es: "El número mínimo de alumnos requerido para cualquier curso es 8.",
    fr: "Le nombre minimum d'étudiants requis pour tout cours est de 8.",
  },
  cancellation: {
    en: "The temple reserves the right to cancel a course 2 months prior to commencement if the minimum is not met.",
    pt: "O templo reserva-se o direito de cancelar um curso 2 meses antes do seu início caso o mínimo não seja atingido.",
    es: "El templo se reserva el derecho de cancelar un curso 2 meses antes de su inicio si no se alcanza el mínimo.",
    fr: "Le temple se réserve le droit d'annuler un cours 2 mois avant son début si le minimum n'est pas atteint.",
  },
  decision: {
    en: "Acceptance decisions are made within 3 days of receiving a complete application.",
    pt: "As decisões de aceitação são tomadas no prazo de 3 dias após a recepção de uma candidatura completa.",
    es: "Las decisiones de aceptación se toman dentro de los 3 días posteriores a la recepción de una solicitud completa.",
    fr: "Les décisions d'acceptation sont prises dans les 3 jours suivant la réception d'une candidature complète.",
  },
  depositSecuresPlace: {
    en: "Once accepted, the deposit must be paid to secure your place in the course. Places are not held without it.",
    pt: "Após a aceitação, o depósito deve ser pago para garantir o seu lugar no curso. Os lugares não são reservados sem ele.",
    es: "Una vez aceptado, el depósito debe pagarse para asegurar tu plaza en el curso. Las plazas no se reservan sin él.",
    fr: "Une fois accepté, le dépôt doit être payé pour garantir votre place dans le cours. Les places ne sont pas réservées sans cela.",
  },
  withdrawal: {
    en: "If you are unable to attend for a serious, unforeseen reason (e.g. family bereavement), the deposit can be refunded or used toward another course, same or different, in the current year or the next.",
    pt: "Se não conseguir participar por um motivo grave e imprevisto (ex.: luto familiar), o depósito pode ser reembolsado ou utilizado noutro curso, igual ou diferente, no ano actual ou no seguinte.",
    es: "Si no puedes asistir por un motivo grave e imprevisto (p. ej., duelo familiar), el depósito puede ser reembolsado o utilizado en otro curso, igual o diferente, en el año actual o el siguiente.",
    fr: "Si vous ne pouvez pas assister pour une raison grave et imprévue (par ex. un deuil familial), le dépôt peut être remboursé ou utilisé pour un autre cours, identique ou différent, l'année en cours ou la suivante.",
  },
  courseCanceled: {
    en: "If the course itself is canceled by the temple, the deposit is refunded in full.",
    pt: "Se o próprio curso for cancelado pelo templo, o depósito é totalmente reembolsado.",
    es: "Si el propio curso es cancelado por el templo, el depósito se reembolsa en su totalidad.",
    fr: "Si le cours lui-même est annulé par le temple, le dépôt est intégralement remboursé.",
  },
  discount: {
    en: "Students who have previously attended a course can return for revision with a 20% discount.",
    pt: "Os alunos que já frequentaram um curso anteriormente podem regressar para revisão com um desconto de 20%.",
    es: "Los alumnos que ya han asistido a un curso anteriormente pueden regresar para repaso con un 20% de descuento.",
    fr: "Les étudiants ayant déjà suivi un cours peuvent revenir pour une révision avec une réduction de 20 %.",
  },
  included: {
    en: "Course fee includes classes, food, and accommodation.",
    pt: "O preço do curso inclui aulas, alimentação, e alojamento.",
    es: "El precio del curso incluye clases, comida, y alojamiento.",
    fr: "Le prix du cours comprend les cours, la nourriture, et le logement.",
  },
};

/* Temple Rules and Requirements for Foreign Students, sourced from fiveimmortals.com/temple-rules */
const TEMPLE_RULES = {
  intro: {
    en: "We ask you to commit to abide by these rules and requirements for the length of your stay at the temple. Their purpose is to ensure the safety of all, to protect the collective harmony of the place, and to maintain the discipline necessary to pass on the teachings. Any student breaking them might be asked to leave the temple at any point of their stay, without refund of their donation.",
    pt: "Pedimos que se comprometa a respeitar estas regras e requisitos durante toda a sua estadia no templo. O seu propósito é garantir a segurança de todos, proteger a harmonia colectiva do lugar, e manter a disciplina necessária para transmitir os ensinamentos. Qualquer aluno que as quebre pode ser convidado a deixar o templo em qualquer momento da sua estadia, sem reembolso da sua doação.",
    es: "Te pedimos que te comprometas a respetar estas reglas y requisitos durante toda tu estancia en el templo. Su propósito es garantizar la seguridad de todos, proteger la armonía colectiva del lugar, y mantener la disciplina necesaria para transmitir las enseñanzas. Cualquier alumno que las incumpla puede ser invitado a abandonar el templo en cualquier momento de su estancia, sin reembolso de su donación.",
    fr: "Nous vous demandons de vous engager à respecter ces règles et exigences pendant toute la durée de votre séjour au temple. Leur but est d'assurer la sécurité de tous, de protéger l'harmonie collective du lieu, et de maintenir la discipline nécessaire à la transmission des enseignements. Tout étudiant qui les enfreint peut être invité à quitter le temple à tout moment de son séjour, sans remboursement de son don.",
  },
  sections: [
    {
      title: { en: "Do as instructed", pt: "Faça o que lhe é indicado", es: "Haz lo que se te indica", fr: "Faites ce qui vous est demandé" },
      items: [
        {
          en: "Wake up in the morning at the appointed time.",
          pt: "Acorde de manhã à hora estabelecida.",
          es: "Levántate por la mañana a la hora establecida.",
          fr: "Levez-vous le matin à l'heure fixée.",
        },
        {
          en: "Assemble as quickly as possible whenever called to.",
          pt: "Reúna-se o mais rapidamente possível sempre que for chamado.",
          es: "Reúnete lo más rápido posible siempre que se te llame.",
          fr: "Rassemblez-vous le plus rapidement possible chaque fois que vous êtes appelé.",
        },
      ],
    },
    {
      title: { en: "Attend class and be punctual", pt: "Compareça às aulas e seja pontual", es: "Asiste a clase y sé puntual", fr: "Assistez aux cours et soyez ponctuel" },
      items: [
        {
          en: "The only permissible reason to miss class is illness or injury.",
          pt: "A única razão permitida para faltar às aulas é doença ou lesão.",
          es: "La única razón permitida para faltar a clase es enfermedad o lesión.",
          fr: "La seule raison acceptable pour manquer un cours est la maladie ou une blessure.",
        },
        {
          en: "If you miss too many days of class you will be dismissed.",
          pt: "Se faltar a demasiados dias de aula será dispensado.",
          es: "Si faltas a demasiados días de clase serás expulsado.",
          fr: "Si vous manquez trop de jours de cours, vous serez renvoyé.",
        },
        {
          en: "If you are consistently late you will be dismissed.",
          pt: "Se chegar atrasado de forma consistente será dispensado.",
          es: "Si llegas tarde de forma constante serás expulsado.",
          fr: "Si vous êtes régulièrement en retard, vous serez renvoyé.",
        },
        {
          en: "You may not leave class early.",
          pt: "Não pode sair da aula antes do tempo.",
          es: "No puedes salir de clase antes de tiempo.",
          fr: "Vous ne pouvez pas quitter le cours avant la fin.",
        },
        {
          en: "If you are sick or injured you still must line up for the beginning of class and state your reason for absence.",
          pt: "Se estiver doente ou lesionado, ainda assim deve apresentar-se no início da aula e indicar o motivo da sua ausência.",
          es: "Si estás enfermo o lesionado, igualmente debes presentarte al inicio de la clase e indicar el motivo de tu ausencia.",
          fr: "Si vous êtes malade ou blessé, vous devez tout de même vous présenter au début du cours et indiquer la raison de votre absence.",
        },
        {
          en: "No smoking during class. No talking during class. No talking back to the Master or to the senior student leading the class.",
          pt: "Não é permitido fumar durante a aula. Não é permitido falar durante a aula. Não é permitido responder ao Mestre ou ao aluno sénior que lidera a aula.",
          es: "No está permitido fumar durante la clase. No está permitido hablar durante la clase. No está permitido contestar al Maestro o al alumno sénior que dirige la clase.",
          fr: "Il est interdit de fumer pendant le cours. Il est interdit de parler pendant le cours. Il est interdit de répondre au Maître ou à l'étudiant senior qui dirige le cours.",
        },
      ],
    },
    {
      title: { en: "Chores", pt: "Tarefas", es: "Tareas", fr: "Tâches" },
      items: [
        {
          en: "Finish chores as explained to you by senior students at the appointed time, every day or whenever asked to.",
          pt: "Termine as tarefas conforme explicado pelos alunos seniores à hora estabelecida, todos os dias ou sempre que solicitado.",
          es: "Termina las tareas según lo explicado por los alumnos sénior a la hora establecida, todos los días o siempre que se te solicite.",
          fr: "Terminez les tâches comme expliqué par les étudiants seniors à l'heure fixée, tous les jours ou chaque fois que demandé.",
        },
        {
          en: "Be proactive about temple duties and chores even when not assigned to it.",
          pt: "Seja proactivo em relação às tarefas e deveres do templo mesmo quando não lhe forem atribuídos.",
          es: "Sé proactivo con las tareas y deberes del templo incluso cuando no te hayan sido asignados.",
          fr: "Soyez proactif concernant les tâches et devoirs du temple même lorsqu'ils ne vous sont pas assignés.",
        },
        {
          en: "Keep the temple courtyard and your room clean and orderly, and clean up after yourself.",
          pt: "Mantenha o pátio do templo e o seu quarto limpos e organizados, e limpe sempre o que utilizar.",
          es: "Mantén el patio del templo y tu habitación limpios y ordenados, y limpia siempre lo que utilices.",
          fr: "Maintenez la cour du temple et votre chambre propres et ordonnées, et nettoyez toujours après vous.",
        },
      ],
    },
    {
      title: { en: "Quiet hours", pt: "Horas de silêncio", es: "Horas de silencio", fr: "Heures de silence" },
      items: [
        {
          en: "Maintain silence from the beginning of the evening sitting meditation until the next morning after breakfast.",
          pt: "Mantenha silêncio desde o início da meditação sentada da noite até à manhã seguinte, após o pequeno-almoço.",
          es: "Mantén silencio desde el inicio de la meditación sentada de la noche hasta la mañana siguiente, después del desayuno.",
          fr: "Maintenez le silence depuis le début de la méditation assise du soir jusqu'au lendemain matin après le petit-déjeuner.",
        },
        {
          en: "Quiet hours after lunch, until afternoon class.",
          pt: "Horas de silêncio depois do almoço, até à aula da tarde.",
          es: "Horas de silencio después del almuerzo, hasta la clase de la tarde.",
          fr: "Heures de silence après le déjeuner, jusqu'au cours de l'après-midi.",
        },
        {
          en: "No loud noises or voices during morning and evening Scriptures.",
          pt: "Não são permitidos ruídos ou vozes altas durante as Escrituras da manhã e da noite.",
          es: "No se permiten ruidos ni voces altas durante las Escrituras de la mañana y la noche.",
          fr: "Aucun bruit ni voix forte n'est autorisé pendant les Écritures du matin et du soir.",
        },
      ],
    },
    {
      title: { en: "No complaining", pt: "Não se queixe", es: "No te quejes", fr: "Ne vous plaignez pas" },
      items: [
        {
          en: "Do not complain about the food unless you are allergic or experiencing severe difficulty. Be grateful instead.",
          pt: "Não se queixe da comida, salvo em caso de alergia ou dificuldade grave. Seja antes grato.",
          es: "No te quejes de la comida, salvo en caso de alergia o dificultad grave. Sé agradecido en su lugar.",
          fr: "Ne vous plaignez pas de la nourriture, sauf en cas d'allergie ou de difficulté sérieuse. Soyez plutôt reconnaissant.",
        },
        {
          en: "Do not complain about the bathrooms, or about the intensity, speed, or content of the training.",
          pt: "Não se queixe das instalações sanitárias, nem da intensidade, ritmo, ou conteúdo do treino.",
          es: "No te quejes de los baños, ni de la intensidad, el ritmo, o el contenido del entrenamiento.",
          fr: "Ne vous plaignez pas des sanitaires, ni de l'intensité, du rythme, ou du contenu de l'entraînement.",
        },
      ],
    },
    {
      title: { en: "Avoid excess, live in moderation", pt: "Evite os excessos, viva com moderação", es: "Evita los excesos, vive con moderación", fr: "Évitez les excès, vivez avec modération" },
      items: [
        {
          en: "Personal snacks may be shared, please be moderate. One movie per week maximum, no nudity.",
          pt: "Os snacks pessoais podem ser partilhados, com moderação. Máximo de um filme por semana, sem nudez.",
          es: "Los snacks personales pueden compartirse, con moderación. Máximo una película por semana, sin desnudez.",
          fr: "Les collations personnelles peuvent être partagées, avec modération. Un film maximum par semaine, sans nudité.",
        },
        {
          en: "The temple is on top of a mountain, roughly a 1 hour hike, so bring only a backpack you can carry yourself.",
          pt: "O templo está no topo de uma montanha, a cerca de 1 hora de caminhada, por isso traga apenas uma mochila que consiga transportar você mesmo.",
          es: "El templo está en la cima de una montaña, a aproximadamente 1 hora de caminata, así que trae solo una mochila que puedas cargar tú mismo.",
          fr: "Le temple est au sommet d'une montagne, à environ 1 heure de marche, n'apportez donc qu'un sac à dos que vous pouvez porter vous-même.",
        },
        {
          en: "Use common resources sparingly (tea, toilet paper, washing powder, water).",
          pt: "Utilize os recursos comuns com moderação (chá, papel higiénico, detergente de roupa, água).",
          es: "Utiliza los recursos comunes con moderación (té, papel higiénico, detergente, agua).",
          fr: "Utilisez les ressources communes avec parcimonie (thé, papier toilette, lessive, eau).",
        },
      ],
    },
    {
      title: { en: "Limit technology", pt: "Limite a tecnologia", es: "Limita la tecnología", fr: "Limitez la technologie" },
      items: [
        {
          en: "Do not video tape or photograph others without asking.",
          pt: "Não filme ou fotografe outras pessoas sem pedir permissão.",
          es: "No filmes ni fotografíes a otras personas sin pedir permiso.",
          fr: "Ne filmez ni ne photographiez d'autres personnes sans leur demander.",
        },
        {
          en: "Personal computer use, including movies, music, or games, is limited to 7 hours per week.",
          pt: "O uso pessoal de computador, incluindo filmes, música, ou jogos, está limitado a 7 horas por semana.",
          es: "El uso personal de ordenador, incluyendo películas, música, o juegos, está limitado a 7 horas por semana.",
          fr: "L'utilisation personnelle de l'ordinateur, y compris les films, la musique, ou les jeux, est limitée à 7 heures par semaine.",
        },
        {
          en: "Computers and recording devices are not permitted in class unless mentioned otherwise.",
          pt: "Computadores e dispositivos de gravação não são permitidos nas aulas, salvo indicação em contrário.",
          es: "No se permiten ordenadores ni dispositivos de grabación en clase, salvo indicación contraria.",
          fr: "Les ordinateurs et appareils d'enregistrement ne sont pas autorisés en cours, sauf indication contraire.",
        },
      ],
    },
    {
      title: { en: "Practice at mealtime", pt: "Prática nas refeições", es: "Práctica en las comidas", fr: "Pratique pendant les repas" },
      items: [
        {
          en: "Remain quiet while sitting at a meal. Only Chinese is spoken during meal times.",
          pt: "Permaneça em silêncio durante as refeições. Apenas se fala chinês durante as refeições.",
          es: "Permanece en silencio durante las comidas. Solo se habla chino durante las comidas.",
          fr: "Restez silencieux pendant les repas. Seul le chinois est parlé pendant les repas.",
        },
        {
          en: "Recite the Food Mantra before every meal, and share every dish equally with others at the table.",
          pt: "Recite o Mantra da Comida antes de cada refeição, e partilhe cada prato de forma equitativa com os outros à mesa.",
          es: "Recita el Mantra de la Comida antes de cada comida, y comparte cada plato de forma equitativa con los demás en la mesa.",
          fr: "Récitez le Mantra de la Nourriture avant chaque repas, et partagez chaque plat équitablement avec les autres à table.",
        },
        {
          en: "Finish every grain of rice. No meat is allowed within the temple.",
          pt: "Termine cada grão de arroz. Não é permitida carne dentro do templo.",
          es: "Termina cada grano de arroz. No se permite carne dentro del templo.",
          fr: "Terminez chaque grain de riz. Aucune viande n'est autorisée dans le temple.",
        },
      ],
    },
    {
      title: { en: "Wear moderate clothing and maintain hygiene", pt: "Use roupas adequadas e mantenha a higiene", es: "Usa ropa adecuada y mantén la higiene", fr: "Portez des vêtements appropriés et maintenez l'hygiène" },
      items: [
        {
          en: "Men must wear a shirt and shoes within the temple, no shorts above the knee.",
          pt: "Os homens devem usar camisa e calçado dentro do templo, sem calções acima do joelho.",
          es: "Los hombres deben usar camisa y calzado dentro del templo, sin pantalones cortos por encima de la rodilla.",
          fr: "Les hommes doivent porter une chemise et des chaussures dans le temple, pas de shorts au-dessus du genou.",
        },
        {
          en: "Women: no thin strap tank tops, no cleavage, no bare shoulders or stomach, no shorts above the knee.",
          pt: "Mulheres: sem alças finas, sem decote, sem ombros ou abdómen à mostra, sem calções acima do joelho.",
          es: "Mujeres: sin tirantes finos, sin escote, sin hombros o abdomen al descubierto, sin pantalones cortos por encima de la rodilla.",
          fr: "Femmes : pas de bretelles fines, pas de décolleté, pas d'épaules ou de ventre nus, pas de shorts au-dessus du genou.",
        },
        {
          en: "Within the altars, wear Daoist clothes if you have them, or long sleeves and long pants with proper shoes.",
          pt: "Dentro dos altares, use roupa taoísta se a tiver, ou mangas longas e calças longas com calçado adequado.",
          es: "Dentro de los altares, usa ropa taoísta si la tienes, o mangas largas y pantalones largos con calzado adecuado.",
          fr: "Dans les autels, portez des vêtements taoïstes si vous en avez, ou des manches longues et un pantalon long avec des chaussures appropriées.",
        },
      ],
    },
    {
      title: { en: "Respect the temple", pt: "Respeite o templo", es: "Respeta el templo", fr: "Respectez le temple" },
      items: [
        {
          en: "Remember that the temple is a temple. No swearwords or inappropriate language.",
          pt: "Lembre-se que o templo é um templo. Sem palavrões ou linguagem inadequada.",
          es: "Recuerda que el templo es un templo. Sin palabrotas ni lenguaje inadecuado.",
          fr: "Rappelez-vous que le temple est un temple. Pas de gros mots ni de langage inapproprié.",
        },
        {
          en: "No smoking inside the temple or in front of it, only in designated areas.",
          pt: "Não é permitido fumar dentro do templo ou à sua frente, apenas nas áreas designadas.",
          es: "No está permitido fumar dentro del templo ni delante de él, solo en las áreas designadas.",
          fr: "Il est interdit de fumer à l'intérieur du temple ou devant celui-ci, uniquement dans les zones désignées.",
        },
        {
          en: "Refrain from romantic or sexual relationships during your stay, and focus on your own training instead.",
          pt: "Evite relações românticas ou sexuais durante a sua estadia, e concentre-se antes no seu próprio treino.",
          es: "Evita las relaciones románticas o sexuales durante tu estancia, y concéntrate en tu propio entrenamiento.",
          fr: "Évitez les relations romantiques ou sexuelles pendant votre séjour, et concentrez-vous plutôt sur votre propre entraînement.",
        },
        {
          en: "Offer incense whenever practicing inside the altars. Women during their menstruation should not enter the altars.",
          pt: "Ofereça incenso sempre que praticar dentro dos altares. Mulheres durante a menstruação não devem entrar nos altares.",
          es: "Ofrece incienso siempre que practiques dentro de los altares. Las mujeres durante la menstruación no deben entrar en los altares.",
          fr: "Offrez de l'encens chaque fois que vous pratiquez dans les autels. Les femmes pendant leurs menstruations ne doivent pas entrer dans les autels.",
        },
      ],
    },
    {
      title: { en: "Maintain collective harmony", pt: "Mantenha a harmonia colectiva", es: "Mantén la armonía colectiva", fr: "Maintenez l'harmonie collective" },
      items: [
        {
          en: "Try to support and help each other. Do not pit people against each other.",
          pt: "Procure apoiar e ajudar os outros. Não coloque as pessoas umas contra as outras.",
          es: "Procura apoyar y ayudar a los demás. No enfrentes a las personas entre sí.",
          fr: "Essayez de vous soutenir et de vous aider mutuellement. Ne mettez pas les gens les uns contre les autres.",
        },
        {
          en: "Do not speak badly of others, criticize, or boast of others.",
          pt: "Não fale mal dos outros, não critique, nem se vanglorie em relação aos outros.",
          es: "No hables mal de los demás, no critiques, ni te jactes sobre los demás.",
          fr: "Ne dites pas de mal des autres, ne critiquez pas, et ne vous vantez pas au sujet des autres.",
        },
      ],
    },
    {
      title: { en: "How to respect a Master and senior instructors", pt: "Como respeitar um Mestre e instrutores seniores", es: "Cómo respetar a un Maestro e instructores sénior", fr: "Comment respecter un Maître et les instructeurs seniors" },
      items: [
        {
          en: "Do not interrupt, talk back, or make excuses when being corrected.",
          pt: "Não interrompa, não responda, nem dê desculpas quando estiver a ser corrigido.",
          es: "No interrumpas, no contestes, ni pongas excusas cuando te estén corrigiendo.",
          fr: "N'interrompez pas, ne répondez pas, et ne donnez pas d'excuses lorsque vous êtes corrigé.",
        },
        {
          en: "Listen to what you are told. If an answer seems unsatisfactory at first, ponder it instead of insisting.",
          pt: "Escute o que lhe é dito. Se uma resposta parecer insatisfatória à primeira, reflicta sobre ela em vez de insistir.",
          es: "Escucha lo que se te dice. Si una respuesta parece insatisfactoria al principio, reflexiona sobre ella en lugar de insistir.",
          fr: "Écoutez ce qui vous est dit. Si une réponse semble insatisfaisante au premier abord, réfléchissez-y plutôt que d'insister.",
        },
        {
          en: "Do not ask the Master or senior instructors to run errands for you.",
          pt: "Não peça ao Mestre ou a instrutores seniores para fazer recados por si.",
          es: "No le pidas al Maestro ni a los instructores sénior que hagan recados por ti.",
          fr: "Ne demandez pas au Maître ou aux instructeurs seniors de faire des courses pour vous.",
        },
      ],
    },
    {
      title: { en: "In town", pt: "Na cidade", es: "En la ciudad", fr: "En ville" },
      items: [
        {
          en: "Students who do not speak Chinese must stay together with a student who does, reachable by phone at all times.",
          pt: "Os alunos que não falam chinês devem permanecer junto de um aluno que fale, contactável por telefone em qualquer momento.",
          es: "Los alumnos que no hablan chino deben permanecer junto a un alumno que sí lo hable, contactable por teléfono en todo momento.",
          fr: "Les étudiants qui ne parlent pas chinois doivent rester avec un étudiant qui le parle, joignable par téléphone à tout moment.",
        },
        {
          en: "No partying at night. Do not drink alcohol, go to nightclubs, or hire the services of prostitutes.",
          pt: "Não são permitidas festas à noite. Não beba álcool, não vá a discotecas, nem contrate serviços de prostituição.",
          es: "No se permiten fiestas nocturnas. No bebas alcohol, no vayas a discotecas, ni contrates servicios de prostitución.",
          fr: "Aucune fête nocturne. Ne consommez pas d'alcool, n'allez pas en boîte de nuit, et ne recourez pas aux services de prostitution.",
        },
        {
          en: "Do not break Chinese law. Carry your passport with you when going to town.",
          pt: "Não infrinja a lei chinesa. Leve sempre o seu passaporte quando for à cidade.",
          es: "No incumplas la ley china. Lleva siempre tu pasaporte cuando vayas a la ciudad.",
          fr: "Ne violez pas la loi chinoise. Portez toujours votre passeport lorsque vous allez en ville.",
        },
        {
          en: "Be responsible for your visa situation, and let the temple know as soon as possible if you need an extension.",
          pt: "Seja responsável pela sua situação de visto, e avise o templo o mais rapidamente possível se precisar de uma extensão.",
          es: "Sé responsable de tu situación de visado, y avisa al templo lo antes posible si necesitas una extensión.",
          fr: "Soyez responsable de votre situation de visa, et informez le temple le plus rapidement possible si vous avez besoin d'une prolongation.",
        },
      ],
    },
  ],
};


/* ============================================================
   FIVE IMMORTALS TEMPLE — Application Landing Page
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
  pt: {
    heroEyebrow: "Baimashan Wu Shian Miao · Wudang, Hubei",
    heroTitle: "Five Immortals Temple",
    heroSubtitle: "Candidatura para estudar artes taoístas na montanha sagrada de Wudang",
    heroBody:
      "O único templo em Wudang onde praticantes ocidentais podem residir e estudar dentro dos muros, sob a lineagem direta do Abade Du Song Feng.",
    ctaScroll: "Começar candidatura",
    viewAllCourses: "Ver todos os cursos de 2026",
    coursesPageLabel: "Calendário de Cursos 2026",
    coursesPageTitle: "Escolhe o teu caminho",
    coursesPageSub: "Todos os cursos decorrem no Five Immortals Temple, Montanha Wudang, Hubei",
    happeningNow: "A Decorrer Agora",
    seeDetails: "Ver detalhes",
    applyToThisCourse: "Candidatar-me a este curso",
    backToCourses: "← Voltar aos cursos",
    coursePurpose: "Objetivo",
    courseSchedule: "Conteúdo e Horário",
    courseRequirements: "Requisitos",
    courseFee: "Preço do curso",
    courseDeposit: "Depósito",
    courseFeeIncluded: "Inclui aulas, alimentação e alojamento",
    privateCourseNote: "Este é um curso privado. Para mais informações e inscrição, contacta diretamente:",
    policiesTitle: "Políticas Gerais (aplicam-se a todos os cursos)",
    courseLabel: "Curso em destaque",
    courseName: "Wudang Sword e Alquimia Interna",
    courseDates: "29 de Junho — 23 de Julho, 2026",
    courseTeacher: "Ensinado pelo Mestre Li Shifu e pelo discípulo Cheng Ling",
    spotsLabel: "Vagas limitadas",
    formTitle: "Formulário de Candidatura",
    formNote:
      "Por favor sê honesto e conciso. As candidaturas só são processadas com todos os campos preenchidos.",
    sendNote: "As candidaturas são revistas pela equipa do Five Immortals Temple.",
    stepOf: "Passo {n} de {total}",
    sections: {
      intro: "Antes de Começar",
      identity: "Identificação",
      contact: "Contacto",
      profile: "Perfil",
      motivation: "Motivação e Preparação",
      logistics: "Logística",
      agreement: "Compromisso",
    },
    introTitle: "O que vais encontrar neste formulário",
    introBody: "A candidatura está dividida em 6 secções curtas, depois desta introdução. Vê abaixo o que será pedido em cada uma, para te prepares antes de começar.",
    introList: [
      { t: "Identificação", d: "Nacionalidade, género, nome completo e idade." },
      { t: "Contacto", d: "Cidade, região, país, endereço, código postal, telefone e e-mail." },
      { t: "Perfil", d: "Profissão, histórico de saúde, eventuais desequilíbrios de saúde mental ou espirituais, e nível de inglês." },
      { t: "Motivação e Preparação", d: "Objetivos de estudo, experiência prévia, apresentação pessoal com fotografia, curso(s) pretendido(s) e expectativas." },
      { t: "Logística", d: "Pedidos religiosos especiais e contacto de emergência." },
      { t: "Compromisso", d: "Confirmação de que leste e aceitas as regras do templo." },
    ],
    introStart: "Começar",
    rulesTitle: "Regras do Templo",
    fields: {
      nationality: "Nacionalidade",
      gender: "Género",
      name: "Nome completo",
      age: "Idade",
      city: "Cidade",
      region: "Região",
      country: "País",
      street: "Endereço",
      zip: "Código postal",
      phone: "Telefone",
      email: "E-mail",
      profession: "Profissão",
      health: "Histórico de saúde / condição física",
      mentalHealth: "Desequilíbrios de saúde mental ou espirituais (atuais ou passados)",
      goals: "Objetivos de estudo",
      priorStudy: "Tens já alguma base no conteúdo do curso? O que estudaste antes?",
      introduction: "Apresenta-te",
      photo: "Fotografia atual (retrato)",
      coursesApplying: "A que curso(s) te candidatas?",
      expectations: "Quais são as tuas expectativas sobre estudar no templo? Outras perguntas?",
      religious: "Pedidos religiosos especiais (ex. Ramadan, Shabbat, etc.)",
      emergencyContact: "Contacto de emergência: nome e telefone",
      englishLevel: "Nível de inglês",
      agreement: "Li e concordo em seguir todas as regras e regulamentos do templo",
    },
    photoNote: "Carrega uma foto da galeria ou tira uma fotografia agora. O passaporte só será pedido depois de aceite.",
    photoUpload: "Carregar fotografia",
    photoRetake: "Substituir fotografia",
    next: "Seguinte",
    back: "Voltar",
    submit: "Enviar candidatura",
    submitting: "A enviar...",
    successTitle: "Candidatura recebida",
    successBody:
      "A tua candidatura foi guardada com sucesso. A equipa do templo entrará em contacto através do e-mail fornecido.",
    newApplication: "Nova candidatura",
    backToWebsite: "Visitar o nosso site",
    required: "Campo obrigatório",
    genderOptions: ["Feminino", "Masculino", "Outro / Prefiro não dizer"],
    englishOptions: ["Básico", "Intermédio", "Avançado", "Fluente / Nativo"],
  },
  en: {
    heroEyebrow: "Baimashan Wu Shian Miao · Wudang, Hubei",
    heroTitle: "Five Immortals Temple",
    heroSubtitle: "Application to study Taoist arts on the sacred mountain of Wudang",
    heroBody:
      "The only temple in Wudang where Western practitioners may reside and study within its walls, under the direct lineage of Abbot Du Song Feng.",
    ctaScroll: "Start application",
    viewAllCourses: "View all 2026 courses",
    coursesPageLabel: "2026 Course Calendar",
    coursesPageTitle: "Choose your path",
    coursesPageSub: "All courses run at the Five Immortals Temple, Wudang Mountain, Hubei",
    happeningNow: "Happening Now",
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
    courseDates: "June 29 — July 23, 2026",
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
  },
  es: {
    heroEyebrow: "Baimashan Wu Shian Miao · Wudang, Hubei",
    heroTitle: "Five Immortals Temple",
    heroSubtitle: "Solicitud para estudiar artes taoístas en la montaña sagrada de Wudang",
    heroBody:
      "El único templo en Wudang donde los practicantes occidentales pueden residir y estudiar dentro de sus muros, bajo el linaje directo del Abad Du Song Feng.",
    ctaScroll: "Comenzar solicitud",
    viewAllCourses: "Ver todos los cursos de 2026",
    coursesPageLabel: "Calendario de Cursos 2026",
    coursesPageTitle: "Elige tu camino",
    coursesPageSub: "Todos los cursos se imparten en el Five Immortals Temple, Montaña Wudang, Hubei",
    happeningNow: "En Curso Ahora",
    seeDetails: "Ver detalles",
    applyToThisCourse: "Postularme a este curso",
    backToCourses: "← Volver a los cursos",
    coursePurpose: "Propósito",
    courseSchedule: "Contenido y Horario",
    courseRequirements: "Requisitos",
    courseFee: "Precio del curso",
    courseDeposit: "Depósito",
    courseFeeIncluded: "Incluye clases, comida y alojamiento",
    privateCourseNote: "Este es un curso privado. Para más información e inscripción, contacta directamente:",
    policiesTitle: "Políticas Generales (aplican a todos los cursos)",
    courseLabel: "Curso destacado",
    courseName: "Espada Wudang y Alquimia Interna",
    courseDates: "29 de junio — 23 de julio, 2026",
    courseTeacher: "Impartido por el Maestro Li Shifu y la discípula Cheng Ling",
    spotsLabel: "Plazas limitadas",
    formTitle: "Formulario de Solicitud",
    formNote:
      "Por favor sé honesto y conciso. Las solicitudes solo se procesan si se completan todos los campos.",
    stepOf: "Paso {n} de {total}",
    sections: {
      intro: "Antes de Empezar",
      identity: "Identidad",
      contact: "Contacto",
      profile: "Perfil",
      motivation: "Motivación y Preparación",
      logistics: "Logística",
      agreement: "Compromiso",
    },
    introTitle: "Qué encontrarás en este formulario",
    introBody: "La solicitud está dividida en 6 secciones breves después de esta introducción. Mira a continuación qué se pedirá en cada una, para que puedas prepararte antes de comenzar.",
    introList: [
      { t: "Identidad", d: "Nacionalidad, género, nombre completo y edad." },
      { t: "Contacto", d: "Ciudad, región, país, dirección, código postal, teléfono y correo electrónico." },
      { t: "Perfil", d: "Profesión, historial de salud, posibles desequilibrios de salud mental o espirituales, y nivel de inglés." },
      { t: "Motivación y Preparación", d: "Objetivos de estudio, experiencia previa, presentación personal con fotografía, curso(s) al que te postulas y expectativas." },
      { t: "Logística", d: "Solicitudes religiosas especiales y contacto de emergencia." },
      { t: "Compromiso", d: "Confirmación de que has leído y aceptas las reglas del templo." },
    ],
    introStart: "Comenzar",
    rulesTitle: "Reglas del Templo",
    fields: {
      nationality: "Nacionalidad",
      gender: "Género",
      name: "Nombre completo",
      age: "Edad",
      city: "Ciudad",
      region: "Región",
      country: "País",
      street: "Dirección",
      zip: "Código postal",
      phone: "Teléfono",
      email: "Correo electrónico",
      profession: "Profesión",
      health: "Historial de salud / condición física",
      mentalHealth: "Desequilibrios de salud mental o espirituales (actuales o pasados)",
      goals: "Objetivos de estudio",
      priorStudy: "¿Tienes base en el contenido de este curso? ¿Qué has estudiado antes?",
      introduction: "Preséntate",
      photo: "Fotografía actual (retrato)",
      coursesApplying: "¿A qué curso(s) te postulas?",
      expectations: "¿Cuáles son tus expectativas sobre estudiar en el templo? ¿Otras preguntas?",
      religious: "Solicitudes religiosas especiales (ej. Ramadán, Shabat, etc.)",
      emergencyContact: "Contacto de emergencia: nombre y teléfono",
      englishLevel: "Nivel de inglés",
      agreement: "He leído y acepto seguir todas las reglas y reglamentos del templo",
    },
    photoNote: "Sube una foto de tu galería o toma una ahora. El pasaporte solo se pedirá tras la aceptación.",
    photoUpload: "Subir fotografía",
    photoRetake: "Sustituir fotografía",
    next: "Siguiente",
    back: "Atrás",
    submit: "Enviar solicitud",
    submitting: "Enviando...",
    successTitle: "Solicitud recibida",
    successBody:
      "Tu solicitud se ha guardado correctamente. El equipo del templo se pondrá en contacto a través del correo proporcionado.",
    newApplication: "Nueva solicitud",
    backToWebsite: "Visitar nuestro sitio web",
    required: "Campo obligatorio",
    genderOptions: ["Femenino", "Masculino", "Otro / Prefiero no decirlo"],
    englishOptions: ["Básico", "Intermedio", "Avanzado", "Fluido / Nativo"],
  },
  fr: {
    heroEyebrow: "Baimashan Wu Shian Miao · Wudang, Hubei",
    heroTitle: "Five Immortals Temple",
    heroSubtitle: "Candidature pour étudier les arts taoïstes sur la montagne sacrée de Wudang",
    heroBody:
      "Le seul temple de Wudang où les pratiquants occidentaux peuvent résider et étudier à l'intérieur de ses murs, sous la lignée directe de l'Abbé Du Song Feng.",
    ctaScroll: "Commencer la candidature",
    viewAllCourses: "Voir tous les cours 2026",
    coursesPageLabel: "Calendrier des Cours 2026",
    coursesPageTitle: "Choisis ton chemin",
    coursesPageSub: "Tous les cours se déroulent au Five Immortals Temple, Montagne de Wudang, Hubei",
    happeningNow: "En Cours Actuellement",
    seeDetails: "Voir les détails",
    applyToThisCourse: "Postuler à ce cours",
    backToCourses: "← Retour aux cours",
    coursePurpose: "Objectif",
    courseSchedule: "Contenu et Horaire",
    courseRequirements: "Conditions requises",
    courseFee: "Prix du cours",
    courseDeposit: "Acompte",
    courseFeeIncluded: "Inclut les cours, la nourriture et le logement",
    privateCourseNote: "Ceci est un cours privé. Pour plus d'informations et inscription, contacte directement :",
    policiesTitle: "Politiques Générales (s'appliquent à tous les cours)",
    courseLabel: "Cours en vedette",
    courseName: "Épée Wudang et Alchimie Intérieure",
    courseDates: "29 juin — 23 juillet 2026",
    courseTeacher: "Enseigné par le Maître Li Shifu et la disciple Cheng Ling",
    spotsLabel: "Places limitées",
    formTitle: "Formulaire de Candidature",
    formNote:
      "Merci d'être honnête et concis. Les candidatures ne sont traitées que si tous les champs sont remplis.",
    stepOf: "Étape {n} sur {total}",
    sections: {
      intro: "Avant de Commencer",
      identity: "Identité",
      contact: "Contact",
      profile: "Profil",
      motivation: "Motivation et Préparation",
      logistics: "Logistique",
      agreement: "Engagement",
    },
    introTitle: "Ce que tu trouveras dans ce formulaire",
    introBody: "La candidature est divisée en 6 sections courtes après cette introduction. Découvre ci-dessous ce qui sera demandé dans chacune, pour te préparer avant de commencer.",
    introList: [
      { t: "Identité", d: "Nationalité, genre, nom complet et âge." },
      { t: "Contact", d: "Ville, région, pays, adresse, code postal, téléphone et e-mail." },
      { t: "Profil", d: "Profession, antécédents de santé, déséquilibres de santé mentale ou spirituels éventuels, et niveau d'anglais." },
      { t: "Motivation et Préparation", d: "Objectifs d'étude, expérience préalable, présentation personnelle avec photographie, cours auquel tu postules et attentes." },
      { t: "Logistique", d: "Demandes religieuses particulières et contact d'urgence." },
      { t: "Engagement", d: "Confirmation que tu as lu et acceptes les règles du temple." },
    ],
    introStart: "Commencer",
    rulesTitle: "Règles du Temple",
    fields: {
      nationality: "Nationalité",
      gender: "Genre",
      name: "Nom complet",
      age: "Âge",
      city: "Ville",
      region: "Région",
      country: "Pays",
      street: "Adresse",
      zip: "Code postal",
      phone: "Téléphone",
      email: "E-mail",
      profession: "Profession",
      health: "Antécédents de santé / condition physique",
      mentalHealth: "Déséquilibres de santé mentale ou spirituels (actuels ou passés)",
      goals: "Objectifs d'étude",
      priorStudy: "As-tu déjà une base dans le contenu de ce cours ? Qu'as-tu étudié avant ?",
      introduction: "Présente-toi",
      photo: "Photographie actuelle (portrait)",
      coursesApplying: "À quel(s) cours postules-tu ?",
      expectations: "Quelles sont tes attentes concernant l'étude au temple ? Autres questions ?",
      religious: "Demandes religieuses particulières (ex. Ramadan, Shabbat, etc.)",
      emergencyContact: "Contact d'urgence : nom et téléphone",
      englishLevel: "Niveau d'anglais",
      agreement: "J'ai lu et j'accepte de suivre toutes les règles et règlements du temple",
    },
    photoNote: "Téléverse une photo depuis ta galerie ou prends-en une maintenant. Le passeport ne sera demandé qu'après acceptation.",
    photoUpload: "Téléverser une photo",
    photoRetake: "Remplacer la photo",
    next: "Suivant",
    back: "Retour",
    submit: "Envoyer la candidature",
    submitting: "Envoi...",
    successTitle: "Candidature reçue",
    successBody:
      "Ta candidature a été enregistrée avec succès. L'équipe du temple te contactera via l'e-mail fourni.",
    newApplication: "Nouvelle candidature",
    backToWebsite: "Visiter notre site web",
    required: "Champ obligatoire",
    genderOptions: ["Féminin", "Masculin", "Autre / Préfère ne pas dire"],
    englishOptions: ["Basique", "Intermédiaire", "Avancé", "Courant / Natif"],
  },
};

const LANGS = [
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
  { code: "es", label: "ES" },
  { code: "fr", label: "FR" },
];

/* ---------------- Temple logo ---------------- */
/* Replace LOGO_SRC with the final hosted path when this goes live, e.g. "/assets/logo.png" */
const LOGO_SRC = "/logo.png";

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
      <option value="">—</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

/* ---------------- Photo upload ---------------- */
function PhotoUpload({ value, onChange, labelUpload, labelRetake, note }) {
  const inputRef = useRef(null);

  function handleFile(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => onChange(reader.result);
    reader.readAsDataURL(file);
  }

  return (
    <div>
      <div
        onClick={() => inputRef.current && inputRef.current.click()}
        style={{
          border: `2px dashed ${COLORS.jade}`,
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
  const [lang, setLang] = useState("en");
  const t = STR[lang];
  const [view, setView] = useState("hero"); // hero | courses | courseDetail | form | success
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [storageError, setStorageError] = useState(false);
  const [expandedCourseId, setExpandedCourseId] = useState(null);
  const [detailCourseId, setDetailCourseId] = useState(null);

  function openCourseDetail(courseId) {
    setDetailCourseId(courseId);
    setView("courseDetail");
  }

  function applyToCourse(course) {
    update("coursesApplying", course.title[lang]);
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

  function dataURLtoBlob(dataUrl) {
    const [header, base64Data] = dataUrl.split(",");
    const mimeMatch = header.match(/data:(.*?);base64/);
    const mime = mimeMatch ? mimeMatch[1] : "image/jpeg";
    const binary = atob(base64Data);
    const array = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      array[i] = binary.charCodeAt(i);
    }
    return new Blob([array], { type: mime });
  }

  async function handleSubmit() {
    setSubmitting(true);
    setStorageError(false);
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (key === "photo") return; // handled separately below as a file
        fd.append(key, value);
      });
      fd.append("lang", lang);
      fd.append("submittedAt", new Date().toISOString());

      if (form.photo) {
        try {
          const blob = dataURLtoBlob(form.photo);
          const ext = blob.type.split("/")[1] || "jpg";
          fd.append("photo", blob, `${(form.name || "applicant").replace(/\s+/g, "_")}.${ext}`);
        } catch (e) {
          fd.append("photo_error", "Photo could not be attached.");
        }
      }

      const response = await fetch("https://formspree.io/f/maqzzwop", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
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
  const LangSwitcher = (
    <div style={{ display: "flex", gap: 6 }}>
      {LANGS.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          style={{
            padding: "5px 10px",
            fontSize: 12.5,
            fontWeight: 700,
            letterSpacing: 0.5,
            borderRadius: 3,
            border: `1px solid ${lang === l.code ? COLORS.lacquer : "rgba(31,26,20,0.25)"}`,
            background: lang === l.code ? COLORS.lacquer : "transparent",
            color: lang === l.code ? "#fff" : COLORS.ink,
            cursor: "pointer",
          }}
        >
          {l.label}
        </button>
      ))}
    </div>
  );

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
          {LangSwitcher}
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
          <button
            onClick={() => setView("courses")}
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

  /* ---------- Courses list (Level 1 + Level 2 expandable summary) ---------- */
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
          {LangSwitcher}
        </header>

        <div style={{ maxWidth: 640, margin: "0 auto", padding: "36px 20px 60px" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
            <Seal size={64} />
          </div>
          <p style={{ fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase", color: COLORS.jadeDark, fontWeight: 700, textAlign: "center", marginBottom: 10 }}>
            {t.coursesPageLabel}
          </p>
          <h2 style={{ fontFamily: "'Noto Serif', Georgia, serif", fontSize: 28, color: COLORS.ink, textAlign: "center", margin: "0 0 8px" }}>
            {t.coursesPageTitle}
          </h2>
          <p style={{ fontSize: 14.5, color: "#7A6F5C", textAlign: "center", margin: "0 0 28px" }}>{t.coursesPageSub}</p>

          {COURSES_2026.map((course) => {
            const isOpen = expandedCourseId === course.id;
            return (
              <div
                key={course.id}
                style={{
                  background: course.status === "now" ? "#FFFBEF" : "#fff",
                  border: `1px solid ${course.status === "now" ? COLORS.gold : COLORS.paperDark}`,
                  borderRadius: 8,
                  marginBottom: 12,
                  overflow: "hidden",
                }}
              >
                <div
                  onClick={() => setExpandedCourseId(isOpen ? null : course.id)}
                  style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 18px", cursor: "pointer" }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: 58,
                      textAlign: "center",
                      background: COLORS.ink,
                      color: COLORS.paper,
                      borderRadius: 6,
                      padding: "8px 4px",
                    }}
                  >
                    <div style={{ fontSize: 10, letterSpacing: 1, textTransform: "uppercase", color: COLORS.gold, fontWeight: 700 }}>
                      {course.month}
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.1 }}>{course.day}</div>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ margin: "0 0 3px", fontSize: 15, fontWeight: 700, color: COLORS.ink, fontFamily: "'Noto Serif', Georgia, serif" }}>
                      {course.title[lang]}
                      {course.status === "now" && (
                        <span
                          style={{
                            marginLeft: 8,
                            fontSize: 10.5,
                            fontWeight: 700,
                            letterSpacing: 0.3,
                            textTransform: "uppercase",
                            padding: "2px 8px",
                            borderRadius: 10,
                            background: COLORS.gold,
                            color: COLORS.ink,
                          }}
                        >
                          {t.happeningNow}
                        </span>
                      )}
                    </p>
                    <p style={{ margin: 0, fontSize: 12.5, color: "#7A6F5C" }}>
                      {course.dateRange} · {course.teacher[lang]}
                    </p>
                  </div>
                  <span style={{ fontSize: 18, color: COLORS.lacquer, flexShrink: 0, transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
                    ⌄
                  </span>
                </div>

                {isOpen && (
                  <div style={{ padding: "0 18px 18px", borderTop: `1px solid ${COLORS.paperDark}` }}>
                    <p style={{ fontSize: 13.5, color: "#4A4135", lineHeight: 1.6, margin: "14px 0 16px" }}>{course.summary[lang]}</p>
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                      <button
                        onClick={() => openCourseDetail(course.id)}
                        style={{
                          background: "transparent",
                          border: `1.5px solid ${COLORS.ink}`,
                          color: COLORS.ink,
                          padding: "9px 18px",
                          fontSize: 13.5,
                          fontWeight: 600,
                          borderRadius: 4,
                          cursor: "pointer",
                        }}
                      >
                        {t.seeDetails}
                      </button>
                      {course.status === "open" && (
                        <button
                          onClick={() => applyToCourse(course)}
                          style={{
                            background: COLORS.lacquer,
                            color: "#fff",
                            border: "none",
                            padding: "9px 18px",
                            fontSize: 13.5,
                            fontWeight: 700,
                            borderRadius: 4,
                            cursor: "pointer",
                          }}
                        >
                          {t.applyToThisCourse}
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
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
          {LangSwitcher}
        </header>

        <div style={{ maxWidth: 600, margin: "0 auto", padding: "32px 20px 70px" }}>
          <p style={{ fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase", color: COLORS.jadeDark, fontWeight: 700, marginBottom: 8 }}>
            {course.dateRange}
          </p>
          <h2 style={{ fontFamily: "'Noto Serif', Georgia, serif", fontSize: 28, color: COLORS.ink, margin: "0 0 6px" }}>{course.title[lang]}</h2>
          <p style={{ fontSize: 14.5, color: COLORS.lacquer, fontWeight: 600, margin: "0 0 24px" }}>{course.teacher[lang]}</p>

          {course.purpose && (
            <div style={{ marginBottom: 22 }}>
              <h3 style={{ fontFamily: "'Noto Serif', Georgia, serif", fontSize: 15, color: COLORS.ink, margin: "0 0 6px" }}>{t.coursePurpose}</h3>
              <p style={{ fontSize: 14, color: "#4A4135", lineHeight: 1.6, margin: 0 }}>{course.purpose[lang]}</p>
            </div>
          )}

          {course.schedule && (
            <div style={{ marginBottom: 22 }}>
              <h3 style={{ fontFamily: "'Noto Serif', Georgia, serif", fontSize: 15, color: COLORS.ink, margin: "0 0 10px" }}>{t.courseSchedule}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {course.schedule.map((block, i) => (
                  <div key={i} style={{ background: "#fff", border: `1px solid ${COLORS.paperDark}`, borderRadius: 6, padding: "10px 14px" }}>
                    <p style={{ margin: "0 0 3px", fontSize: 12.5, fontWeight: 700, color: COLORS.jadeDark, textTransform: "uppercase", letterSpacing: 0.3 }}>
                      {block.label[lang]}
                    </p>
                    <p style={{ margin: 0, fontSize: 13.5, color: "#4A4135", lineHeight: 1.5 }}>{block.text[lang]}</p>
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
                    {req[lang]}
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
                  {policy[lang]}
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
              ⚠ {lang === "pt" ? "Nota: pode ter havido um problema a guardar os dados. Por favor contacta o templo diretamente para confirmar." : "Note: there may have been an issue saving your data. Please contact the temple directly to confirm."}
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
            <p style={{ fontSize: 13, color: "#4A4135", lineHeight: 1.6, margin: "0 0 16px" }}>{TEMPLE_RULES.intro[lang]}</p>
            {TEMPLE_RULES.sections.map((section, i) => (
              <div key={i} style={{ marginBottom: 14 }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: COLORS.jadeDark, margin: "0 0 6px" }}>{section.title[lang]}</p>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  {section.items.map((item, j) => (
                    <li key={j} style={{ fontSize: 12.5, color: "#4A4135", lineHeight: 1.55, marginBottom: 4 }}>
                      {item[lang]}
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
        {LangSwitcher}
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
