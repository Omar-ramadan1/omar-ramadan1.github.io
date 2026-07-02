export type Language = 'en' | 'de';

export type TTranslations = {
  nav: { about: string; work: string; contact: string };
  hero: { greeting: string; subtitle: string };
  about: { p: string; h2: string; content: string };
  experience: {
    p: string;
    h2: string;
    items: { title: string; date: string; points: string[] }[];
  };
  works: {
    p: string;
    h2: string;
    content: string;
    projectDescriptions: string[];
  };
  contact: {
    p: string;
    h2: string;
    form: {
      email: { span: string; placeholder: string };
      phone: { span: string; placeholder: string };
    };
  };
  services: { title: string }[];
};

export const translations: Record<Language, TTranslations> = {
  en: {
    nav: { about: 'About', work: 'Work', contact: 'Contact' },
    hero: {
      greeting: "Hi, I'm",
      subtitle: 'Experienced Software Engineer',
    },
    about: {
      p: 'Introduction',
      h2: 'Overview.',
      content:
        'A highly motivated Software Engineer specializing in Flutter, with over 5 years of experience building innovative mobile and desktop applications. Experienced in both team-based and freelance environments, with a proven ability to manage entire projects independently. Known for a proactive, solution-oriented mindset and a strong commitment to continuous learning and improvement.',
    },
    experience: {
      p: 'What I have done so far',
      h2: 'Work Experience.',
      items: [
        {
          title: 'Flutter Developer',
          date: 'April 2025 - July 2026',
          points: [
            'Developed advanced map features for gaming applications, allowing players to create and manage pins with interactive animations, filtering capabilities, and efficient local data storage for offline usability.',
            'Built AR measurement functionality for iOS using ARKit, enabling users to accurately measure height and width through depth-based detection with the iPhone camera.',
            'Collaborated within a large, well-structured development team using Scrum methodology, continuously improving communication and professional business-German proficiency.',
            'Successfully took the opportunity to expand backend expertise by learning NestJS and implementing new server-side features with real production integration.',
          ],
        },
        {
          title: 'Flutter Developer',
          date: 'March 2023 - Sep 2024',
          points: [
            'Added In-App Purchase and Store functionality including handling purchases, group functionality, bug fixing and performance improvements (main role), and integrated UI designs in an entertainment Football App.',
            'Integrated AI models for object detection within a Flutter application, including model integration, real-time inference, and UI visualization.',
            'Participated in developing an ERP mobile application for transferring money, responsible for receiving, filtering and delivering data for both Frontend and Backend teams with local storage and server sync when connection is available.',
            'Participated in a facial recognition app and enhanced the system to detect fake users by adding a liveness AI detector.',
          ],
        },
        {
          title: 'Flutter Developer',
          date: 'Jan 2021 – March 2023',
          points: [
            'Developed an e-learning platform app called Pixel Academy and Hemada Academy with 10k+ downloads, using Flutter and Firebase.',
            'Fixed memory leaks and performance issues in the app, resulting in a 30% increase in app speed and a 20% decrease in memory usage.',
            'Successfully identified and resolved critical bugs in a production app, resulting in improved user experience.',
            'Implemented UI/UX design changes to enhance the user interface and increase user engagement and satisfaction.',
            'Collaborated with cross-functional teams to ensure the timely resolution of issues and deployment of updates.',
          ],
        },
        {
          title: 'System Administrator',
          date: 'October 2020 - Nov 2021',
          points: [
            'Support in maintaining hardware, software, and other systems.',
            'Assist with troubleshooting issues and provide technical support.',
            'Organize and maintain IT resources.',
          ],
        },
        {
          title: 'Intern',
          date: 'July 2018 - Jan 2019',
          points: [
            'Gained hands-on experience with GitHub for version control, collaborating on code repositories, and managing pull requests, which enhanced my understanding of collaborative development practices.',
            'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
            'Engaged in code reviews and pair programming sessions, which provided insights into best practices, coding standards, and team collaboration techniques.',
          ],
        },
        {
          title: "Bachelor's Degree Student",
          date: 'October 2016 - May 2020',
          points: [
            'Actively participated in the Management Information Systems Club, collaborating with peers to explore the latest trends and technologies in the field of information systems.',
            'Engaged in discussions and presentations on emerging technologies like cloud computing and big data analytics, promoting knowledge sharing and continuous learning among members.',
            'Engaged in code reviews and pair programming sessions, which provided insights into best practices, coding standards, and team collaboration techniques.',
          ],
        },
      ],
    },
    works: {
      p: 'My work',
      h2: 'Projects.',
      content:
        'Following projects showcase my skills and experience through real-world work with different technologies and effective project management.',
      projectDescriptions: [
        'Explore the worlds of your favorite games with Loot Atlas! Discover hidden treasures, rare items, secret locations, and much more. Perfect for players who want to leave no stone unturned. Now featuring detailed unofficial maps for Black Myth: Wukong and Elden Ring!',
        'HiApp is your all-in-one city guide for Hildesheim, Germany. Discover local news, events, dining, shopping, and services at your fingertips. Stay connected with real-time updates and explore the best of Hildesheim with ease.',
        'Football Prediction League is a game to earn points by predicting the results of your favorite league matches.',
        'Pixel Academy is an innovative educational app designed to bridge the gap between teachers and students. Teachers can effortlessly share lectures, exams, and questions, while students can easily access and respond to them.',
        'Monitor employees throughout the day and determine their presence during working hours, since attendance registration is by face and location. Detailed and accurate reports on attendance and departure daily/weekly/monthly.',
        'ID Scanner is a private app designed to scan passports, visas, and local IDs, with a focus on Arabic identification documents. Used by hotels and businesses that need to efficiently collect customer data for bookings. The app is not available on the Play Store as it is tailored for private business use.',
        'Hotlier is a cutting-edge app designed to streamline the booking process for hotels and guests in Saudi Arabia. Guests can easily book rooms, while hotels can upload and manage their offers seamlessly.',
        'Hemada Academy is an educational app designed to bridge the gap between a popular teacher named Hemada in Egypt and his students. Lectures, exams, and questions can be shared, while students can easily access and respond to them.',
      ],
    },
    contact: {
      p: 'Get in touch',
      h2: 'Contact.',
      form: {
        email: { span: 'My Email', placeholder: 'o.abdelkader05@gmail.com' },
        phone: { span: 'My Phone', placeholder: '+4917677839266' },
      },
    },
    services: [{ title: 'Flutter Developer' }, { title: 'NestJs Developer' }],
  },

  de: {
    nav: { about: 'Über mich', work: 'Erfahrung', contact: 'Kontakt' },
    hero: {
      greeting: 'Hallo, ich bin',
      subtitle: 'Erfahrener Software-Entwickler',
    },
    about: {
      p: 'Einführung',
      h2: 'Überblick.',
      content:
        'Ein hochmotivierter Software-Ingenieur mit Spezialisierung auf Flutter und über 5 Jahren Erfahrung in der Entwicklung innovativer mobiler und Desktop-Anwendungen. Erfahren in team- und freiberuflichen Umgebungen, mit nachgewiesener Fähigkeit, gesamte Projekte eigenständig zu verwalten. Bekannt für eine proaktive, lösungsorientierte Denkweise und ein starkes Engagement für kontinuierliches Lernen und Verbesserung.',
    },
    experience: {
      p: 'Was ich bisher gemacht habe',
      h2: 'Berufserfahrung.',
      items: [
        {
          title: 'Flutter-Entwickler',
          date: 'April 2025 - Juli 2026',
          points: [
            'Entwicklung fortgeschrittener Kartenfunktionen für Gaming-Anwendungen, mit denen Spieler Pins mit interaktiven Animationen erstellen und verwalten sowie Filterfunktionen und effiziente lokale Datenspeicherung für die Offline-Nutzung verwenden können.',
            'Entwicklung einer AR-Messfunktion für iOS mit ARKit, die es Benutzern ermöglicht, Höhe und Breite durch tiefenbasierte Erkennung mit der iPhone-Kamera präzise zu messen.',
            'Zusammenarbeit in einem großen, gut strukturierten Entwicklungsteam nach der Scrum-Methodik mit kontinuierlicher Verbesserung der Kommunikation und professionellen Deutschkenntnissen im Geschäftsumfeld.',
            'Erfolgreich die Möglichkeit genutzt, Backend-Kenntnisse durch das Erlernen von NestJS zu erweitern und neue serverseitige Funktionen mit echter Produktionsintegration zu implementieren.',
          ],
        },
        {
          title: 'Flutter-Entwickler',
          date: 'März 2023 - Sep 2024',
          points: [
            'Hinzufügen von In-App-Käufen und Shop-Funktionalität, einschließlich Kaufabwicklung, Gruppen-Funktionalität sowie Fehlerbehebung und Leistungsoptimierung (Hauptaufgabe) und Integration von UI-Designs in einer Fußball-Unterhaltungs-App.',
            'Integration von KI-Modellen zur Objekterkennung in eine Flutter-Anwendung, einschließlich Modellintegration, Echtzeit-Inferenz und UI-Visualisierung.',
            'Mitarbeit bei der Entwicklung einer ERP-Mobilanwendung für Geldtransfers, verantwortlich für Empfang, Filterung und Bereitstellung von Daten für Frontend- und Backend-Teams mit lokalem Speicher und Serveraktualisierung bei verfügbarer Verbindung.',
            'Mitarbeit an einer Gesichtserkennungs-App und Verbesserung des Systems zur Erkennung gefälschter Nutzer durch Hinzufügen eines KI-basierten Liveness-Detektors.',
          ],
        },
        {
          title: 'Flutter-Entwickler',
          date: 'Jan 2021 – März 2023',
          points: [
            'Entwicklung einer E-Learning-Plattform-App namens Pixel Academy und Hemada Academy mit über 10.000 Downloads, mit Flutter und Firebase.',
            'Behebung von Speicherlecks und Leistungsproblemen in der App, was zu einer 30%igen Steigerung der App-Geschwindigkeit und einer 20%igen Reduzierung der Speichernutzung führte.',
            'Erfolgreich kritische Fehler in einer Produktions-App identifiziert und behoben, was zu einer verbesserten Benutzererfahrung führte.',
            'Implementierung von UI/UX-Design-Änderungen zur Verbesserung der Benutzeroberfläche und Steigerung der Benutzerinteraktion und -zufriedenheit.',
            'Zusammenarbeit mit funktionsübergreifenden Teams zur rechtzeitigen Lösung von Problemen und Bereitstellung von Updates.',
          ],
        },
        {
          title: 'Systemadministrator',
          date: 'Oktober 2020 - Nov 2021',
          points: [
            'Unterstützung bei der Wartung von Hardware, Software und anderen Systemen.',
            'Hilfe bei der Fehlerbehebung und technischem Support.',
            'Organisation und Pflege von IT-Ressourcen.',
          ],
        },
        {
          title: 'Praktikant',
          date: 'Juli 2018 - Jan 2019',
          points: [
            'Praktische Erfahrung mit GitHub für Versionskontrolle, Zusammenarbeit an Code-Repositories und Verwaltung von Pull-Requests gesammelt, was mein Verständnis für kollaborative Entwicklungspraktiken verbesserte.',
            'Zusammenarbeit mit funktionsübergreifenden Teams, darunter Designer, Produktmanager und andere Entwickler, zur Entwicklung hochwertiger Produkte.',
            'Teilnahme an Code-Reviews und Pair-Programming-Sitzungen, die Einblicke in Best Practices, Coding-Standards und Teamkollaborationstechniken boten.',
          ],
        },
        {
          title: 'Bachelor-Student',
          date: 'Oktober 2016 - Mai 2020',
          points: [
            'Aktive Teilnahme am Club für Management-Informationssysteme und Zusammenarbeit mit Kommilitonen zur Erkundung der neuesten Trends und Technologien im Bereich Informationssysteme.',
            'Teilnahme an Diskussionen und Präsentationen zu neuen Technologien wie Cloud-Computing und Big-Data-Analysen, um den Wissensaustausch und kontinuierliches Lernen unter den Mitgliedern zu fördern.',
            'Teilnahme an Code-Reviews und Pair-Programming-Sitzungen, die Einblicke in Best Practices, Coding-Standards und Teamkollaborationstechniken boten.',
          ],
        },
      ],
    },
    works: {
      p: 'Meine Arbeit',
      h2: 'Projekte.',
      content:
        'Die folgenden Projekte zeigen meine Fähigkeiten und Erfahrungen durch reale Arbeit mit verschiedenen Technologien und effektives Projektmanagement.',
      projectDescriptions: [
        'Erkunde die Welten deiner Lieblingsspiele mit Loot Atlas! Entdecke versteckte Schätze, seltene Gegenstände, geheime Orte und vieles mehr. Perfekt für Spieler, die keinen Stein auf dem anderen lassen wollen. Jetzt mit detaillierten inoffiziellen Karten für Black Myth: Wukong und Elden Ring!',
        'HiApp ist dein umfassender Stadtführer für Hildesheim. Entdecke lokale Nachrichten, Veranstaltungen, Restaurants, Shopping und Dienstleistungen auf Knopfdruck. Bleib mit Echtzeit-Updates verbunden und erkunde das Beste von Hildesheim.',
        'Football Prediction League ist ein Spiel, bei dem du Punkte durch die Vorhersage der Ergebnisse deiner Lieblingsliga-Spiele sammeln kannst.',
        'Pixel Academy ist eine innovative Bildungs-App, die die Lücke zwischen Lehrern und Schülern schließt. Lehrer können mühelos Vorlesungen, Prüfungen und Fragen teilen, während Schüler diese leicht abrufen und beantworten können.',
        'Überwache Mitarbeiter während des Tages und bestimme ihre Anwesenheit, da die Anwesenheitsregistrierung per Gesicht und Standort erfolgt. Detaillierte und genaue Berichte über Kommen und Gehen täglich/wöchentlich/monatlich.',
        'ID Scanner ist eine private App zum Scannen von Pässen, Visa und lokalen Ausweisen, mit Schwerpunkt auf arabischen Identifikationsdokumenten. Wird von Hotels und Unternehmen genutzt, die Kundendaten für Buchungen effizient erfassen müssen. Die App ist nicht im Play Store verfügbar, da sie für den privaten Geschäftseinsatz konzipiert ist.',
        'Hotlier ist eine fortschrittliche App zur Optimierung des Buchungsprozesses für Hotels und Gäste in Saudi-Arabien. Gäste können einfach Zimmer buchen, während Hotels ihre Angebote nahtlos hochladen und verwalten können.',
        'Hemada Academy ist eine Bildungs-App, die die Verbindung zwischen einem beliebten Lehrer namens Hemada in Ägypten und seinen Schülern herstellt. Vorlesungen, Prüfungen und Fragen können geteilt werden, während Schüler diese leicht abrufen und beantworten können.',
      ],
    },
    contact: {
      p: 'Kontakt aufnehmen',
      h2: 'Kontakt.',
      form: {
        email: { span: 'Meine E-Mail', placeholder: 'o.abdelkader05@gmail.com' },
        phone: { span: 'Meine Telefonnummer', placeholder: '+4917677839266' },
      },
    },
    services: [{ title: 'Flutter-Entwickler' }, { title: 'NestJs-Entwickler' }],
  },
};
