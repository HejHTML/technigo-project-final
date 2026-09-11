export const questions = [
  {
    question: "Vad är skillnaden mellan autentisering och auktorisering?",
    options: [
      "Autentisering avgör vad du får göra och auktorisering verifierar vem du är",
      "Autentisering verifierar vem du är och auktorisering avgör vad du får göra",
      "Autentisering krypterar information och auktorisering skyddar nätverket",
      "Autentisering lagrar information och auktorisering skapar användarkonton",
    ],
    answer:
      "Autentisering verifierar vem du är och auktorisering avgör vad du får göra",
  },

  {
    question: "Vad är syftet med informationsklassning?",
    options: [
      "Att bestämma hur snabbt information ska skickas",
      "Att avgöra hur mycket lagringsutrymme information behöver",
      "Att bedöma vilket skydd information behöver utifrån möjliga konsekvenser",
      "Att bestämma vilka användare som ska få nya datorer",
    ],
    answer:
      "Att bedöma vilket skydd information behöver utifrån möjliga konsekvenser",
  },

  {
    question: "Vad innebär principen Least Privilege?",
    options: [
      "Alla användare ska ha samma behörigheter",
      "Konton ska endast ha de rättigheter som behövs",
      "Administratörer ska kunna komma åt alla system",
      "Användare ska kunna dela sina konton med varandra",
    ],
    answer: "Konton ska endast ha de rättigheter som behövs",
  },

  {
    question: "Vad är en sårbarhet?",
    options: [
      "En svaghet som kan utnyttjas",
      "En säkerhetskopia av viktig information",
      "En regel för hur nätverk kommunicerar",
      "En användare med administratörsbehörighet",
    ],
    answer: "En svaghet som kan utnyttjas",
  },

  {
    question: "Vad innebär Secure by Design?",
    options: [
      "Att säkerhet kontrolleras först när ett system är färdigt",
      "Att säkerhet byggs in från början när ett system utvecklas",
      "Att endast brandväggar används för att skydda ett system",
      "Att alla system måste placeras i ett internt nätverk",
    ],
    answer: "Att säkerhet byggs in från början när ett system utvecklas",
  },

  {
    question: "Vad är den huvudsakliga funktionen hos en brandvägg?",
    options: [
      "Att lagra organisationens information",
      "Att skapa användarkonton",
      "Att filtrera trafik mellan nätverk",
      "Att kryptera alla filer på en dator",
    ],
    answer: "Att filtrera trafik mellan nätverk",
  },

  {
    question: "Vad gör DNS?",
    options: [
      "Översätter domännamn till IP-adresser",
      "Krypterar information mellan två användare",
      "Filtrerar skadlig nätverkstrafik",
      "Skapar säkerhetskopior av webbplatser",
    ],
    answer: "Översätter domännamn till IP-adresser",
  },

  {
    question: "Vad är nätverkssegmentering?",
    options: [
      "Att göra internetanslutningen snabbare",
      "Att dela upp ett nätverk för att begränsa spridning vid incidenter",
      "Att ge alla användare tillgång till samma nätverk",
      "Att ersätta IP-adresser med domännamn",
    ],
    answer:
      "Att dela upp ett nätverk för att begränsa spridning vid incidenter",
  },

  {
    question: "Vad är phishing?",
    options: [
      "En metod för att kryptera nätverkstrafik",
      "Ett sätt att dela upp ett nätverk",
      "Ett försök att lura användare att lämna ut information eller klicka på skadliga länkar",
      "En metod för att säkerhetskopiera databaser",
    ],
    answer:
      "Ett försök att lura användare att lämna ut information eller klicka på skadliga länkar",
  },

  {
    question: "Vad innebär Defense in Depth?",
    options: [
      "Att ett enda mycket starkt säkerhetsskydd används",
      "Att säkerheten byggs upp av flera lager av skydd",
      "Att alla användare får administratörsrättigheter",
      "Att interna nätverk alltid kopplas bort från internet",
    ],
    answer: "Att säkerheten byggs upp av flera lager av skydd",
  },

  {
    question: "Vad menas med en IT-miljö?",
    options: [
      "Endast de datorer som används av organisationens personal",
      "Den samlade tekniska miljö som möjliggör verksamheten",
      "Ett nätverk som endast används för internetåtkomst",
      "En fysisk plats där organisationens servrar står",
    ],
    answer: "Den samlade tekniska miljö som möjliggör verksamheten",
  },

  {
    question: "Vad är IT-infrastruktur?",
    options: [
      "Den tekniska grund som system och tjänster bygger på",
      "Organisationens regler för lösenord och behörigheter",
      "Alla program som en användare har installerade",
      "Informationen som lagras i organisationens databaser",
    ],
    answer: "Den tekniska grund som system och tjänster bygger på",
  },

  {
    question: "Vad kännetecknar en virtuell miljö?",
    options: [
      "System körs endast på fysiska datorer",
      "System körs virtuellt i stället för direkt på fysiska maskiner",
      "Systemet kan endast användas utan internet",
      "All information lagras automatiskt på en lokal hårddisk",
    ],
    answer:
      "System körs virtuellt i stället för direkt på fysiska maskiner",
  },

  {
    question: "Vad innebär en molntjänst?",
    options: [
      "En tjänst som alltid måste köras på organisationens egna servrar",
      "En IT-tjänst som drivs av en extern leverantör",
      "En tjänst som endast kan användas från organisationens kontor",
      "En tjänst som inte kräver något säkerhetsarbete",
    ],
    answer: "En IT-tjänst som drivs av en extern leverantör",
  },

  {
    question: "Vad är en klient i en IT-miljö?",
    options: [
      "En enhet som används för att komma åt system och tjänster",
      "En server som lagrar organisationens databaser",
      "Ett program som automatiskt krypterar nätverkstrafik",
      "En brandvägg som filtrerar internettrafik",
    ],
    answer: "En enhet som används för att komma åt system och tjänster",
  },

  {
    question: "Vad är en servers huvudsakliga funktion?",
    options: [
      "Att endast ge användaren tillgång till internet",
      "Att tillhandahålla funktioner, information eller resurser till andra system eller klienter",
      "Att ersätta alla användares konton",
      "Att automatiskt förhindra alla cyberattacker",
    ],
    answer:
      "Att tillhandahålla funktioner, information eller resurser till andra system eller klienter",
  },

  {
    question: "Vad är en databas?",
    options: [
      "Ett verktyg som endast används för att skicka e-post",
      "Ett strukturerat sätt att lagra och organisera information",
      "Ett nätverk som kopplar samman datorer",
      "En säkerhetsfunktion som blockerar obehöriga användare",
    ],
    answer: "Ett strukturerat sätt att lagra och organisera information",
  },

  {
    question: "Vad menas med en informationsmängd?",
    options: [
      "En mängd information som hör ihop och används tillsammans",
      "Alla filer som finns på en enskild dator",
      "Den mängd data som får skickas över internet",
      "Information som endast får finnas i pappersform",
    ],
    answer: "En mängd information som hör ihop och används tillsammans",
  },

  {
    question: "Vad är en digital identitet?",
    options: [
      "En fysisk ID-handling som används på kontoret",
      "En digital representation av en användare eller ett system",
      "Ett lösenord som används för flera konton",
      "En IP-adress som tillhör en organisation",
    ],
    answer: "En digital representation av en användare eller ett system",
  },

  {
    question: "Vad är ett konto i en IT-miljö?",
    options: [
      "En identitet som används för åtkomst till system",
      "En fysisk dator som används av en administratör",
      "En typ av nätverkskabel",
      "En säkerhetskopia av en användares information",
    ],
    answer: "En identitet som används för åtkomst till system",
  },

  {
    question: "Vad är Multi-Factor Authentication, MFA?",
    options: [
      "Inloggning med flera olika användarnamn",
      "Autentisering som kräver fler än en faktor",
      "Ett system för att skapa flera databaser",
      "En metod för att dela ett nätverk i flera delar",
    ],
    answer: "Autentisering som kräver fler än en faktor",
  },

  {
    question: "Vad är syftet med kryptering?",
    options: [
      "Att göra information oläslig för obehöriga",
      "Att göra nätverk snabbare",
      "Att skapa nya användarkonton",
      "Att automatiskt radera gamla filer",
    ],
    answer: "Att göra information oläslig för obehöriga",
  },

  {
    question: "Vad innebär patchning?",
    options: [
      "Att skapa ett nytt användarkonto",
      "Att uppdatera system för att bland annat åtgärda kända sårbarheter",
      "Att koppla ihop två olika nätverk",
      "Att säkerhetskopiera all information",
    ],
    answer:
      "Att uppdatera system för att bland annat åtgärda kända sårbarheter",
  },

  {
    question: "Vad är ett nätverk?",
    options: [
      "En samling lösenord som används inom en organisation",
      "En grupp enheter som är sammankopplade för att kommunicera och utbyta information",
      "Ett program som skyddar datorer mot virus",
      "En databas med information om användare",
    ],
    answer:
      "En grupp enheter som är sammankopplade för att kommunicera och utbyta information",
  },

  {
    question: "Vad används en IP-adress till?",
    options: [
      "För att identifiera en enhet och hjälpa nätverket att skicka trafik rätt",
      "För att kryptera lösenord",
      "För att skapa domännamn",
      "För att installera säkerhetsuppdateringar",
    ],
    answer:
      "För att identifiera en enhet och hjälpa nätverket att skicka trafik rätt",
  },

  {
    question: "Vad är en switch?",
    options: [
      "En tjänst som översätter domännamn till IP-adresser",
      "En enhet som kopplar samman enheter inom samma lokala nätverk",
      "En enhet som alltid kopplar det lokala nätverket till internet",
      "Ett program som krypterar filer",
    ],
    answer:
      "En enhet som kopplar samman enheter inom samma lokala nätverk",
  },

  {
    question: "Vad är en router?",
    options: [
      "En enhet som kopplar samman olika nätverk och skickar trafik mellan dem",
      "En enhet som endast ansluter skrivare till samma dator",
      "En tjänst som lagrar webbsidor",
      "Ett program som kontrollerar användarnas lösenord",
    ],
    answer:
      "En enhet som kopplar samman olika nätverk och skickar trafik mellan dem",
  },

  {
    question: "Vad är ett protokoll inom nätverk?",
    options: [
      "En fysisk kabel mellan två datorer",
      "Gemensamma regler för hur information skickas och tolkas mellan system",
      "En lista över användarnas behörigheter",
      "En metod för att lagra information i en databas",
    ],
    answer:
      "Gemensamma regler för hur information skickas och tolkas mellan system",
  },

  {
    question: "Vad används HTTP till?",
    options: [
      "Kommunikation mellan webbläsare och webbtjänster",
      "Kryptering av filer på en dator",
      "Hantering av användarnas lösenord",
      "Uppdelning av ett nätverk i mindre delar",
    ],
    answer: "Kommunikation mellan webbläsare och webbtjänster",
  },

  {
    question: "Vad är den viktigaste skillnaden mellan HTTP och HTTPS?",
    options: [
      "HTTP fungerar bara på interna nätverk",
      "HTTPS kan endast användas för e-post",
      "HTTP kräver alltid MFA medan HTTPS inte gör det",
      "HTTPS använder kryptering för kommunikationen",
    ],
    answer: "HTTPS använder kryptering för kommunikationen",
  },

  {
    question: "Vad menas med ett internt nätverk?",
    options: [
      "Ett nätverk som endast är tillgängligt inom organisationen",
      "Ett nätverk som alltid är öppet för hela internet",
      "Ett nätverk som endast används av webbplatser",
      "Ett nätverk som inte kan kommunicera med några andra system",
    ],
    answer: "Ett nätverk som endast är tillgängligt inom organisationen",
  },

  {
    question: "Vad menas med ett publikt nätverk?",
    options: [
      "Ett nätverk som endast organisationens administratörer kan använda",
      "Ett nätverk som är åtkomligt från internet",
      "Ett nätverk som saknar IP-adresser",
      "Ett nätverk som endast används för databaser",
    ],
    answer: "Ett nätverk som är åtkomligt från internet",
  },

  {
    question: "Vad menas med en perimeter i cybersäkerhet?",
    options: [
      "Gränsen mellan interna system och omvärlden",
      "Den fysiska storleken på en server",
      "Antalet användare i ett nätverk",
      "Mängden information som lagras i en databas",
    ],
    answer: "Gränsen mellan interna system och omvärlden",
  },

  {
    question: "Vad är en attack surface, eller angreppsyta?",
    options: [
      "En lista över organisationens anställda",
      "Alla delar av en miljö som kan exponeras för attacker",
      "En säkerhetskopia av organisationens system",
      "En metod för att kryptera information",
    ],
    answer: "Alla delar av en miljö som kan exponeras för attacker",
  },

  {
    question: "Vad är en felkonfiguration?",
    options: [
      "När ett system är felinställt och därmed kan vara osäkert",
      "När en användare glömmer sitt lösenord",
      "När ett nätverk får en ny IP-adress",
      "När information sparas i en databas",
    ],
    answer: "När ett system är felinställt och därmed kan vara osäkert",
  },

  {
    question: "Vad är malware?",
    options: [
      "En metod för att säkerhetskopiera filer",
      "Ett protokoll för webbsidor",
      "Skadlig kod som kan infektera system",
      "En teknik för att segmentera nätverk",
    ],
    answer: "Skadlig kod som kan infektera system",
  },

  {
    question: "Vad är ransomware?",
    options: [
      "Skadlig kod som låser eller krypterar data och kräver lösensumma",
      "Ett verktyg som skyddar nätverk mot phishing",
      "En metod för att skapa säkra lösenord",
      "En tjänst som översätter domännamn",
    ],
    answer:
      "Skadlig kod som låser eller krypterar data och kräver lösensumma",
  },

  {
    question: "Vad innebär social engineering?",
    options: [
      "Att bygga om organisationens nätverk",
      "Att kryptera all information i en databas",
      "Att dela upp ett nätverk i flera tekniska segment",
      "Att manipulera människor för att kringgå tekniska eller organisatoriska skydd",
    ],
    answer:
      "Att manipulera människor för att kringgå tekniska eller organisatoriska skydd",
  },

  {
    question: "Vad innebär en VPN-anslutning?",
    options: [
      "En säker anslutning till ett internt nätverk över internet",
      "En tjänst som automatiskt tar bort malware",
      "En metod för att skapa nya IP-adresser",
      "Ett protokoll som endast används för webbsidor",
    ],
    answer: "En säker anslutning till ett internt nätverk över internet",
  },

  {
    question: "Vad innebär Security Posture?",
    options: [
      "Antalet brandväggar som organisationen använder",
      "Hur snabbt organisationens nätverk fungerar",
      "Den samlade nivån av skydd och risk i en organisation",
      "Hur många användarkonton som finns i organisationen",
    ],
    answer: "Den samlade nivån av skydd och risk i en organisation",
  },

  {
    question: "Vad betyder förkortningen DNS?",
    options: [
      "Digital Network Security",
      "Domain Name System",
      "Data Network Service",
      "Domain Network Security",
    ],
    answer: "Domain Name System",
  },

  {
    question: "Vad betyder förkortningen HTTPS?",
    options: [
      "Hypertext Transfer Protocol Secure",
      "Hypertext Protection Transfer System",
      "Hypertext Private Transfer Service",
      "Hyperlink Transfer Protocol Security",
    ],
    answer: "Hypertext Transfer Protocol Secure",
  },

  {
    question: "Vad betyder förkortningen VPN?",
    options: [
      "Verified Public Network",
      "Virtual Protected Node",
      "Virtual Private Network",
      "Verified Private Node",
    ],
    answer: "Virtual Private Network",
  },

  {
    question: "Vad betyder förkortningen MFA?",
    options: [
      "Multi-Factor Authentication",
      "Multiple Firewall Access",
      "Managed File Authentication",
      "Multi-Function Authorization",
    ],
    answer: "Multi-Factor Authentication",
  },
];