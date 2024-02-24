const listuniversities = [
  { university: "ALIGARH MUSLIM UNIVERSITY", link: "https://www.amu.ac.in/" },
  { university: "ASSAM UNIVERSITY", link: "http://www.aus.ac.in/" },
  {
    university: "BABASAHEB BHIMRAO AMBEDKAR UNIVERSITY",
    link: "http://www.bbau.ac.in/",
  },
  { university: "BANARAS HINDU UNIVERSITY", link: "https://www.bhu.ac.in/" },
  {
    university: "CENTRAL SANSKRIT UNIVERSITY",
    link: "http://www.sanskrit.nic.in/",
  },
  {
    university: "CENTRAL TRIBAL UNIVERSITY OF ANDHRA PRADESH",
    link: "https://cutmap.ac.in/",
  },
  {
    university: "CENTRAL UNIVERSITY OF ANDHRA PRADESH",
    link: "https://andhrauniversity.edu.in/",
  },
  {
    university: "CENTRAL UNIVERSITY OF GUJARAT",
    link: "https://www.cug.ac.in/",
  },
  {
    university: "CENTRAL UNIVERSITY OF HARYANA",
    link: "http://www.cuh.ac.in/",
  },
  {
    university: "CENTRAL UNIVERSITY OF HIMACHAL PRADESH",
    link: "https://www.cuhimachal.ac.in/",
  },
  {
    university: "CENTRAL UNIVERSITY OF JAMMU",
    link: "http://www.cujammu.ac.in/",
  },
  {
    university: "CENTRAL UNIVERSITY OF JHARKHAND",
    link: "http://www.cuj.ac.in/",
  },
  {
    university: "CENTRAL UNIVERSITY OF KARNATAKA",
    link: "http://www.cuk.ac.in/",
  },
  {
    university: "CENTRAL UNIVERSITY OF KASHMIR",
    link: "http://www.cukashmir.ac.in/",
  },
  {
    university: "CENTRAL UNIVERSITY OF KERALA",
    link: "https://www.cukerala.ac.in/",
  },
  { university: "CENTRAL UNIVERSITY OF ODISHA", link: "http://www.cuo.ac.in/" },
  {
    university: "CENTRAL UNIVERSITY OF RAJASTHAN",
    link: "http://www.curaj.ac.in/",
  },
  {
    university: "CENTRAL UNIVERSITY OF SOUTH BIHAR",
    link: "https://www.cusb.ac.in/",
  },
  {
    university: "CENTRAL UNIVERSITY OF TAMIL NADU",
    link: "https://cutn.ac.in/",
  },
  {
    university: "DR. HARISINGH GOUR VISHWAVIDYALAYA",
    link: "https://www.dhsgsu.ac.in/",
  },
  {
    university: "GURU GHASIDAS VISHWAVIDYALAYA",
    link: "http://www.ggu.ac.in/",
  },
  {
    university: "HEMVATI NANDAN BAHUGUNA GARHWAL UNIVERSITY",
    link: "https://www.hnbgu.ac.in/",
  },
  {
    university: "INDIRA GANDHI NATIONAL TRIBAL UNIVERSITY",
    link: "https://www.igntu.ac.in/",
  },
  { university: "JAMIA MILLIA ISLAMIA", link: "https://www.jmi.ac.in/" },
  { university: "JAWAHARLAL NEHRU UNIVERSITY", link: "https://www.jnu.ac.in/" },
  {
    university: "MAHATMA GANDHI ANTARRASHTRIYA HINDI VISHWAVIDYALAYA",
    link: "http://www.hindivishwa.org/",
  },
  {
    university: "MAHATMA GANDHI CENTRAL UNIVERSITY",
    link: "https://www.mgcub.ac.in/",
  },
  { university: "MANIPUR UNIVERSITY", link: "http://www.manipuruniv.ac.in/" },
  {
    university: "MAULANA AZAD NATIONAL URDU UNIVERSITY",
    link: "http://www.manuu.ac.in/",
  },
  { university: "MIZORAM UNIVERSITY", link: "https://www.mzu.edu.in/" },
  {
    university: "NAGALAND UNIVERSITY",
    link: "https://nagalanduniversity.ac.in/",
  },
  {
    university: "NATIONAL SANSKRIT UNIVERSITY",
    link: "https://www.sanskrit.nic.in/",
  },
  { university: "NORTH-EASTERN HILL UNIVERSITY", link: "https://nehu.ac.in/" },
  {
    university: "PONDICHERRY UNIVERSITY",
    link: "https://www.pondiuni.edu.in/",
  },
  {
    university: "RAJIV GANDHI NATIONAL AVIATION UNIVERSITY",
    link: "https://www.rgnau.ac.in/",
  },
  { university: "RAJIV GANDHI UNIVERSITY", link: "https://www.rgu.ac.in/" },
  {
    university: "SHRI LAL BAHADUR SHASTRI NATIONAL SANSKRIT UNIVERSITY",
    link: "https://www.slbsrsv.ac.in/",
  },
  { university: "SIKKIM UNIVERSITY", link: "https://www.cus.ac.in/" },
  { university: "TEZPUR UNIVERSITY", link: "https://www.tezu.ernet.in/" },
  {
    university: "THE ENGLISH AND FOREIGN LANGUAGES UNIVERSITY",
    link: "https://www.efluniversity.ac.in/",
  },
  { university: "TRIPURA UNIVERSITY", link: "https://www.tripurauniv.ac.in/" },
  {
    university: "UNIVERSITY OF ALLAHABAD",
    link: "https://www.allduniv.ac.in/",
  },
  { university: "UNIVERSITY OF DELHI", link: "https://www.du.ac.in/" },
  { university: "UNIVERSITY OF HYDERABAD", link: "https://www.uohyd.ac.in/" },
  {
    university: "VISVA-BHARATI UNIVERSITY",
    link: "https://www.visvabharati.ac.in/",
  },
  {
    university: "BABA GHULAM SHAH BADSHAH UNIVERSITY",
    link: "http://www.bgsbuniversity.org/",
  },
  { university: "BARKATULLAH UNIVERSITY", link: "http://www.bubhopal.ac.in/" },
  {
    university: "BHATTADEV UNIVERSITY",
    link: "http://bodolanduniversity.ac.in/",
  },
  {
    university: "Binod Bihari Mahto Koyalanchal University, Dhanbad",
    link: "https://www.bbmkuniv.in/",
  },
  {
    university: "Cluster University of Jammu",
    link: "https://www.clujammu.in/",
  },
  {
    university: "Cluster University of Srinagar",
    link: "https://www.cusrinagar.edu.in/",
  },
  {
    university: "COTTON UNIVERSTIY",
    link: "http://www.cottonuniversity.ac.in/",
  },
  {
    university: "DELHI SKILL AND ENTREPRENEURSHIP UNIVERSITY",
    link: "https://www.dseu.ac.in/",
  },
  {
    university: "Delhi Technological University",
    link: "http://www.dtu.ac.in/",
  },
  {
    university: "DEVI AHILYA VISHWAVIDYALAYA",
    link: "https://www.dauniv.ac.in/",
  },
  {
    university: "DR. A.P.J. ABDUL KALAM TECHNICAL UNIVERSITY",
    link: "https://aktu.ac.in/",
  },
  {
    university: "DR. B.R. AMBEDKAR SCHOOL OF ECONOMICS UNIVERSITY",
    link: "https://www.braseuniv.ac.in/",
  },
  {
    university: "DR. B.R. AMBEDKAR UNIVERSITY DELHI",
    link: "https://wwwaud.ac.in/",
  },
  {
    university: "Dr. SHYAMA PRASAD MUKHERJEE UNIVERSITY",
    link: "https://dsmru.up.nic.in/",
  },
  {
    university: "GOVT. COLLEGE FOR WOMEN, PARADE GROUND, JAMMU",
    link: "http://www.gcwparade.org/",
  },
  {
    university: "Guru Gobind Singh Indraprastha University",
    link: "http://www.ipu.ac.in/",
  },
  {
    university: "Harcourt Butler Technical University, Kanpur",
    link: "https://www.hbti.ac.in/",
  },
  {
    university: "Indira Gandhi Delhi Technical University for Women",
    link: "http://www.igdtuw.ac.in/",
  },
  {
    university: "Islamia College of Science and Commerce",
    link: "http://www.islamiacollege.edu.in/",
  },
  {
    university: "Islamic University of Science and Technology, Kashmir",
    link: "https://islamicuniversity.edu.in/",
  },
  {
    university: "Jamshedpur Women's University",
    link: "https://www.jwu.ac.in/",
  },
  {
    university: "JHARKHAND RAKSHA SHAKTI UNIVERSITY",
    link: "http://www.jrsu.in/",
  },
  {
    university: "KHWAJA MOINUDDIN CHISHTI LANGUAGE UNIVERSITY",
    link: "http://www.kmcludhiana.org/",
  },
  {
    university: "Kolhan University",
    link: "https://www.kolhanuniversity.ac.in/",
  },
  {
    university: "MADAN MOHAN MALAVIYA UNIVERSITY OF TECHNOLOGY",
    link: "https://www.mmmut.ac.in/",
  },
  {
    university: "MAHATMA JYOTIBA PHULE ROHILKHAND UNIVERSITY",
    link: "https://www.mjpru.ac.in/",
  },
  {
    university: "Netaji Subhas University of Technology",
    link: "http://www.nsut.ac.in/",
  },
  { university: "Nilamber Pitamber University", link: "http://www.npu.ac.in/" },
  {
    university: "OPJS UNIVERSITY CHURU, RAJASTHAN",
    link: "https://www.opjsuniversity.edu.in/",
  },
  {
    university: "RANCHI UNIVERSITY",
    link: "http://www.ranchiuniversity.ac.in/",
  },
  {
    university:
      "SARDAR PATEL UNIVERSITY OF POLICE SECURITY AND CRIMINAL JUSTICE",
    link: "https://www.spuvvn.edu/",
  },
  {
    university: "SHRI MATA VAISHNO DEVI UNIVERSITY",
    link: "https://www.smvdu.ac.in/",
  },
  {
    university: "SIDO KANHU MURMU UNIVERSITY, DUMKA",
    link: "http://www.skmu.ac.in/",
  },
  {
    university: "UNIVERSITY OF JAMMU",
    link: "https://www.jammuuniversity.ac.in/",
  },
  {
    university: "UNIVERSITY OF KASHMIR",
    link: "https://www.kashmiruniversity.net/",
  },
  { university: "VIKRAM UNIVERSITY", link: "https://www.vikramuniv.ac.in/" },
  { university: "Vinoba Bhave University", link: "http://vbu.ac.in/" },
  {
    university:
      "AVINASHILINGAM INSTITUTE FOR HOME SCIENCE AND HIGHER EDUCATION FOR WOMEN",
    link: "https://www.avinuty.ac.in/",
  },
  { university: "CHINMAYA VISHWAVIDYAPEETH", link: "https://www.cvv.ac.in/" },
  {
    university: "Datta Meghe Institute of Higher Education and Research",
    link: "https://www.dmimsu.edu.in/",
  },
  {
    university: "DAYALBAGH EDUCATIONAL INSTITUTE",
    link: "https://www.dei.ac.in/",
  },
  {
    university: "FOOTWEAR DESIGN AND DEVELOPMENT INSTITUTE",
    link: "https://fddiindia.com/",
  },
  {
    university:
      "Gandhi Institute of Technology And Management - Bengaluru, Karnataka (Off Campus)",
    link: "https://www.gitam.edu/",
  },
  {
    university:
      "Gandhi Institute of Technology And Management - Hyderabad, Telangana (Off Campus)",
    link: "https://www.gitam.edu/",
  },
  {
    university:
      "Gandhi Institute of Technology And Management - Visakhapatnam, Andhra Pradesh (Main Campus)",
    link: "https://www.gitam.edu/",
  },
  {
    university: "Govt. Degree College (Autonomous), Baramulla",
    link: "http://www.gdcbaramulla.edu.in/",
  },
  { university: "GRAPHIC ERA UNIVERSITY", link: "https://www.geu.ac.in/" },
  {
    university: "GUJARAT VIDYAPITH",
    link: "https://www.gujaratvidyapith.org/",
  },
  { university: "GURUKULA KANGRI", link: "https://www.gkv.ac.in/" },
  {
    university: "Hindustan Institute of Technology and Science",
    link: "https://www.hindustanuniv.ac.in/",
  },
  {
    university: "JAIN (Deemed-to-be University) , Bangalore (Karnataka)",
    link: "https://www.jainuniversity.ac.in/",
  },
  { university: "JAMIA HAMDARD", link: "https://www.jamiahamdard.edu/" },
  {
    university: "Jaypee Institute of Information Technology",
    link: "https://www.jiit.ac.in/",
  },
  {
    university: "KALASALINGAM ACADEMY OF RESEARCH AND EDUCATION",
    link: "https://kalasalingam.ac.in/",
  },
  {
    university:
      "Koneru Lakshmaiah Education Foundation (Deemed to be University)",
    link: "https://www.kluniversity.in/",
  },
  {
    university: "LAKSHMIBAI NATIONAL INSTITUTE OF PHYSICAL EDUCATION",
    link: "https://www.lnipe.edu.in/",
  },
  {
    university: "Lingaya's Vidyapeeth",
    link: "https://www.lingayasuniversity.edu.in/",
  },
  {
    university:
      "Maharishi Markandeshwar (Deemed to be University), Mullana - Ambala",
    link: "https://www.mmumullana.org/",
  },
  {
    university: "MANAV RACHNA INTERNATIONAL INSTITUTE OF RESEARCH AND STUDIES",
    link: "https://manavrachna.edu.in/",
  },
  { university: "Nehru Gram Bharati", link: "http://www.ngb.ac.in/" },
  {
    university: "Noorul Islam Centre for Higher Education",
    link: "https://www.niuniv.com/",
  },
  {
    university:
      "Ramakrishna Mission Vivekananda Educational and Research Institute",
    link: "https://www.rkmvu.ac.in/",
  },
  {
    university: "SHOBHIT UNIVERSITY",
    link: "https://www.shobhituniversity.ac.in/",
  },
  {
    university:
      "SRM INSTITUTE OF SCIENCE AND TECHNOLOGY (DEEMED UNIVERSITY), NCR CAMPUS",
    link: "https://www.srmist.edu.in/",
  },
  {
    university: "TATA INSTITUTE OF SOCIAL SCIENCES (TISS)",
    link: "https://www.tiss.edu/",
  },
  {
    university: "THE GANDHIGRAM RURAL INSTITUTE (DTBU)",
    link: "http://www.ruraluniv.ac.in/",
  },
  {
    university: "Tilak Maharashtra Vidyapeeth",
    link: "https://www.tmv.edu.in/",
  },
  {
    university: "Vinayaka Mission's Research Foundation",
    link: "https://www.vinayakamission.com/",
  },
  { university: "Yenepoya University", link: "https://www.yenepoya.edu.in/" },
  {
    university: "AISECT University",
    link: "https://www.aisectuniversity.ac.in/",
  },
  { university: "AKS UNIVERSITY", link: "https://www.aksuniversity.ac.in/" },
  { university: "Alliance University", link: "https://www.alliance.edu.in/" },
  {
    university: "Amity University Chhattisgarh",
    link: "https://www.amity.edu/raipur/",
  },
  {
    university: "Amity University Gurugram",
    link: "https://www.amity.edu/gurugram/",
  },
  {
    university: "Amity University Gwalior",
    link: "https://www.amity.edu/gwalior/",
  },
  {
    university: "Amity University Jaipur",
    link: "https://www.amity.edu/jaipur/",
  },
  {
    university: "AMITY UNIVERSITY JHARKHAND",
    link: "https://www.amity.edu/ranchi/",
  },
  {
    university: "Amity University Kolkata",
    link: "https://www.amity.edu/kolkata/",
  },
  {
    university: "Amity University Lucknow",
    link: "https://www.amity.edu/lucknow/",
  },
  {
    university: "Amity University Mumbai",
    link: "https://www.amity.edu/mumbai/",
  },
  {
    university: "AMITY UNIVERSITY NOIDA",
    link: "https://www.amity.edu/noida/",
  },
  {
    university: "AMITY UNIVERSITY PATNA",
    link: "https://www.amity.edu/patna/",
  },
  {
    university: "AMITY UNIVERSITY PUNJAB",
    link: "https://www.amity.edu/mohali/",
  },
  {
    university: "Apeejay Stya University",
    link: "https://university.apeejay.edu/",
  },
  {
    university: "APEX UNIVERSITY, JAIPUR",
    link: "https://www.apexuniversity.ac.in/",
  },
  {
    university: "ARKA JAIN University",
    link: "http://arkajainuniversity.ac.in/",
  },
  {
    university: "ARUNACHAL UNIVERSITY OF STUDIES",
    link: "http://www.arunachaluniversity.ac.in/",
  },
  { university: "ASBM University", link: "https://www.asbm.ac.in/" },
  {
    university: "Bahra University (Shimla Hills)",
    link: "https://www.bahrauniversity.edu.in/",
  },
  {
    university: "Bhagwant University",
    link: "https://bhagwantuniversity.ac.in/",
  },
  {
    university:
      "BHARATIYA ENGINEERING SCIENCE AND TECHNOLOGY INNOVATION UNIVERSITY",
    link: "http://www.bestiituniversity.com/",
  },
  { university: "BML MUNJAL UNIVERSITY", link: "https://www.bml.edu.in/" },
  {
    university: "CAPITAL UNIVERSITY, KODERMA, JHARKHAND",
    link: "https://www.capitaluniversity.edu.in/",
  },
  { university: "CAREER POINT UNIVERSITY", link: "https://www.cpuh.in/" },
  {
    university: "Chanakya University",
    link: "http://www.chanakyauniversity.com/",
  },
  {
    university: "CHHATRAPATI SHIVAJI MAHARAJ UNIVERSITY",
    link: "https://www.csmu.in/",
  },
  {
    university: "Chitkara University, Himachal Pradesh",
    link: "https://www.chitkara.edu.in/himachal/",
  },
  {
    university: "Chitkara University, Punjab",
    link: "https://www.chitkara.edu.in/",
  },
  { university: "COER University", link: "https://www.coer.ac.in/" },
  {
    university: "CT University, Ludhiana",
    link: "https://www.ctuniversity.in/",
  },
  {
    university: "DAV UNIVERSITY JALANDHAR",
    link: "https://www.davuniversity.org/",
  },
  {
    university: "Dr. C. V. Raman University, Vaishali, Bihar",
    link: "https://www.cvru.ac.in/",
  },
  {
    university: "G D Goenka University, Gurugram, NCR",
    link: "https://www.gdgoenkauniversity.com/",
  },
  {
    university: "GALGOTIAS UNIVERSITY",
    link: "https://www.galgotiasuniversity.edu.in/",
  },
  {
    university: "GEETA UNIVERSITY, PANIPAT, DELHI-NCR, HARYANA",
    link: "https://www.geeta.edu.in/",
  },
  { university: "GLA University Mathura", link: "https://www.gla.ac.in/" },
  {
    university: "GOPAL NARAYAN SINGH UNIVERSITY",
    link: "https://www.gnsu.ac.in/",
  },
  {
    university: "GRAPHIC ERA HILL UNIVERSITY,  HALDWANI",
    link: "https://www.gehu.ac.in/",
  },
  {
    university: "GRAPHIC ERA HILL UNIVERSITY, BHIMTAL",
    link: "https://www.geu.ac.in/",
  },
  {
    university: "GRAPHIC ERA HILL UNIVERSITY, DEHRADUN",
    link: "https://www.gehu.ac.in/",
  },
  {
    university: "Guru Kashi University",
    link: "http://gurukashiuniversity.in/",
  },
  {
    university: "Hi-Tech Institute of Engineering & Technology",
    link: "http://www.hiet.org/",
  },
  {
    university: "Himalayan University Itanagar",
    link: "https://www.himalayanuniversity.com/",
  },
  {
    university: "ICFAI University, Dehradun",
    link: "https://www.iudehradun.edu.in/",
  },
  {
    university: "ICFAI University, Jharkhand",
    link: "https://www.iujharkhand.edu.in/",
  },
  { university: "IES UNIVERSITY", link: "https://www.ies.edu/" },
  {
    university: "IFTM University, Moradabad",
    link: "https://www.iftmuniversity.ac.in/",
  },
  {
    university: "IILM University, Greater Noida",
    link: "https://www.iilm.edu.in/",
  },
  { university: "IILM University, Gurugram", link: "https://www.iilm.edu.in/" },
  { university: "IIMT UNIVERSITY", link: "https://www.iimtu.com/" },
  { university: "IMS Unison University", link: "https://www.iuu.ac/" },
  {
    university: "Invertis University",
    link: "https://www.invertisuniversity.ac.in/",
  },
  {
    university: "ITM Skills University, Navi Mumbai",
    link: "https://www.itmuniversity.ac.in/",
  },
  {
    university: "ITM UNIVERSITY GWALIOR",
    link: "https://www.itmuniversity.ac.in/gwalior/",
  },
  {
    university: "ITM University, Raipur",
    link: "https://www.itmuniversity.ac.in/raipur/",
  },
  {
    university: "ITM Vocational University, Vadodara",
    link: "https://www.itm.ac.in/",
  },
  {
    university: "JAGAN NATH UNIVERSITY BAHADURGARH HARYANA",
    link: "https://www.jagannathuniversityncr.ac.in/",
  },
  {
    university: "JAGANNATH UNIVERSITY, JAIPUR (RAJASTHAN)",
    link: "https://www.jagannathuniversity.org/",
  },
  {
    university: "JAYPEE UNIVERSITY OF INFORMATION TECHNOLOGY",
    link: "https://www.jiit.ac.in/",
  },
  {
    university: "Jharkhand Rai University",
    link: "https://www.jspuranchi.com/",
  },
  {
    university: "JOY UNIVERSITY",
    link: "https://www.juet.ac.in/joy-university/",
  },
  {
    university: "K. K. Modi University",
    link: "http://www.kkmodiuniversity.edu.in/",
  },
  {
    university: "K.R. MANGALAM UNIVERSITY",
    link: "https://krmangalam.edu.in/",
  },
  {
    university: "Karnavati University",
    link: "https://www.karnavatiuniversity.com/",
  },
  {
    university: "Lohit's Academy College of Commerce",
    link: "https://www.lohitsacademy.com/",
  },
  { university: "Lovely Professional University", link: "https://www.lpu.in/" },
  {
    university: "Madhav University",
    link: "https://www.madhavuniversity.edu.in/",
  },
  {
    university: "MANAV RACHNA UNIVERSITY",
    link: "https://manavrachna.edu.in/",
  },
  {
    university: "Mangalayatan University Jabalpur",
    link: "https://www.mangalayatan.in/",
  },
  {
    university: "Mangalayatan University, Aligarh",
    link: "https://www.mangalayatan.in/",
  },
  {
    university: "Manipal University Jaipur",
    link: "https://jaipur.manipal.edu/",
  },
  {
    university: "Mansarovar Global University",
    link: "http://mansarovarglobaluniversity.edu.in/",
  },
  { university: "MEWAR UNIVERSITY", link: "https://www.mewaruniversity.org/" },
  {
    university: "Mody University of Science and Technology",
    link: "https://www.modyuniversity.ac.in/",
  },
  { university: "MVN University", link: "https://www.mvn.edu.in/" },
  {
    university: "Netaji Subhas University",
    link: "https://www.netajisubhasuniversity.com/",
  },
  { university: "NICMAR UNIVERSITY, PUNE", link: "https://www.nicmar.ac.in/" },
  { university: "NIIT UNIVERSITY", link: "https://www.niituniversity.in/" },
  {
    university: "NIRWAN UNIVERSITY, JAIPUR",
    link: "https://www.nirwanuniversity.in/",
  },
  {
    university: "Noida International University",
    link: "https://www.niu.edu.in/",
  },
  { university: "NOWGONG COLLEGE", link: "https://nowgongcollege.edu.in/" },
  {
    university: "OM STERLING GLOBAL UNIVERSITY",
    link: "https://www.omuniversity.in/",
  },
  {
    university: "Parul University",
    link: "https://www.paruluniversity.ac.in/",
  },
  {
    university: "PRESIDENCY UNIVERSITY",
    link: "https://presidencyuniversity.in/",
  },
  {
    university: "Quantum University , Roorkee",
    link: "https://www.quantumuniversity.edu.in/",
  },
  {
    university: "Rabindranath Tagore University",
    link: "https://www.rrtu.ac.in/",
  },
  { university: "Radha Govind University, Jharkhand", link: "https://rgu.ac/" },
  {
    university: "RAM KRISHNA DHARMARTH FOUNDATION (RKDF) UNIVERSITY",
    link: "https://www.rkdf.ac.in/",
  },
  { university: "Rama University", link: "https://www.ramauniversity.ac.in/" },
  {
    university: "Ramchandra Chandravansi University",
    link: "https://www.rccuniversity.com/",
  },
  { university: "RKDF University, Bhopal", link: "https://www.rkdf.ac.in/" },
  {
    university: "RNB GLOBAL UNIVERSITY",
    link: "https://www.rnbglobal.edu.in/",
  },
  {
    university: "Sai Nath University",
    link: "https://www.sainathuniversity.com/",
  },
  {
    university: "SANGAM UNIVERSITY",
    link: "https://www.sangamuniversity.ac.in/",
  },
  { university: "SANSKRITI UNIVERSITY", link: "https://www.sanskriti.edu.in/" },
  { university: "Sarala Birla University", link: "https://www.sbu.ac.in/" },
  {
    university: "School of Management Sciences",
    link: "https://www.smslucknow.com/",
  },
  {
    university: "SCOPE GLOBAL SKILLS UNIVERSITY",
    link: "https://www.sgsu.edu.in/",
  },
  { university: "SGT UNIVERSITY", link: "https://sgtuniversity.ac.in/" },
  { university: "SHARDA UNIVERSITY", link: "https://www.sharda.ac.in/" },
  {
    university: "Shoolini University",
    link: "https://shooliniuniversity.com/",
  },
  {
    university: "SHRI KHUSHAL DAS UNIVERSITY, HANUMANGARH",
    link: "https://www.skduniversity.in/",
  },
  {
    university: "Shri Ramswaroop Memorial University",
    link: "https://www.srmu.ac.in/",
  },
  {
    university: "SHRI Venkateshwara University",
    link: "https://www.svu.edu.in/",
  },
  {
    university: "SHYAM UNIVERSITY, DAUSA, RAJASTHAN",
    link: "https://www.shyamuniversity.in/",
  },
  {
    university: "Sikkim Professional University",
    link: "https://www.sikkimuniversity.ac.in/",
  },
  { university: "Somaiya Vidyavihar University", link: "https://svu.edu.in/" },
  {
    university: "Srinath University",
    link: "https://www.srinathuniversity.com/",
  },
  {
    university: "SRM UNIVERSITY (Andhra Pradesh)",
    link: "https://www.srmuniversity.ac.in/",
  },
  {
    university: "SRM University Delhi-NCR, Sonepat",
    link: "https://www.srmuniversity.ac.in/ncr/",
  },
  {
    university: "Surajmal University",
    link: "https://www.surajmaluniversity.edu.in/",
  },
  {
    university: "Suresh Gyan Vihar University Jaipur",
    link: "https://www.gyanvihar.org/",
  },
  {
    university: "Sushant University",
    link: "https://www.sushantuniversity.edu.in/",
  },
  {
    university:
      "SVKM's MITHIBAI COLLEGE OF ARTS, CHAUHAN INSTITUTE OF SCIENCE AMRUTBEN JIVANLAL COLLEGE OF COMMERCE AND ECONOMICS (AUTONOMOUS)",
    link: "https://www.mithibai.ac.in/",
  },
  {
    university:
      "SVKM's NARSEE MONJEE COLLEGE OF COMMERCE AND ECONOMICS (AUTONOMOUS)",
    link: "https://www.nmcollege.in/",
  },
  {
    university: "Swami Vivekanand Subharti University",
    link: "https://www.subharti.org/",
  },
  {
    university: "Swami Vivekananda Yoga Anusandhana Samsthana",
    link: "https://svyasa.edu.in/",
  },
  {
    university: "TEERTHANKER MAHAVEER UNIVERSITY",
    link: "https://www.tmu.ac.in/",
  },
  {
    university: "The ICFAI University Tripura",
    link: "https://www.iutripura.edu.in/",
  },
  {
    university: "The ICFAI University, Jaipur",
    link: "https://www.iujaipur.edu.in/",
  },
  {
    university: "THE ICFAI UNIVERSITY, SIKKIM",
    link: "https://www.iusikkim.edu.in/",
  },
  { university: "The NorthCap University", link: "https://www.ncuindia.edu/" },
  {
    university: "Tribhuvan College of Environment & Development Sciences",
    link: "http://www.tribhuvan.org/",
  },
  {
    university: "UNITED UNIVERSITY, PRAYAGRAJ",
    link: "https://www.uniteduniversity.edu.in/",
  },
  {
    university: "University of Science and Technology Meghalaya",
    link: "http://ustm.ac.in/",
  },
  {
    university: "University of Technology - Jaipur",
    link: "https://www.universityoftechnology.edu.in/",
  },
  { university: "UPES - DEHRADUN", link: "https://www.upes.ac.in/" },
  {
    university: "USHA MARTIN UNIVERSITY",
    link: "https://www.ushamartinuniversity.com/",
  },
  {
    university: "Uttaranchal University, Dehradun",
    link: "https://uttaranchaluniversity.ac.in/",
  },
  {
    university: "Vivekananda Global University",
    link: "https://www.vgu.ac.in/",
  },
  {
    university: "WORLD UNIVERSITY OF DESIGN",
    link: "https://worlduniversityofdesign.ac.in/",
  },
  { university: "YBN UNIVERSITY", link: "https://www.ybnuniversity.in/" },
  {
    university: "Indian Council of Agricultural Research (ICAR)",
    link: "https://icar.org.in/",
  },
  {
    university: "Indian Culinary Institute",
    link: "https://www.ihmctan.edu.in/ici/",
  },
  {
    university: "Indian Institute of Tourism & Travel Management",
    link: "https://www.iittm.ac.in/",
  },
];

const central_universities = [
  {
    cuimg: require("../../src/assets/images/university/central/aligarh_muslim_university.png"),
    cuname: "ALIGARH MUSLIM UNIVERSITY",
    link: "https://www.amu.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/assam_university.png"),
    cuname: "ASSAM UNIVERSITY",
    link: "http://www.aus.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/babasaheb_bhimrao_ambedkar_university.png"),
    cuname: "BABASAHEB BHIMRAO AMBEDKAR UNIVERSITY",
    link: "https://www.bbau.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/banaras_hindu_university.png"),
    cuname: "BANARAS HINDU UNIVERSITY",
    link: "http://www.bhu.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/central_sanskrit_uni.png"),
    cuname: "CENTRAL SANSKRIT UNIVERSITY",
    link: "https://www.sanskrit.nic.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/ctuap.png"),
    cuname: "CENTRAL TRIBAL UNIVERSITY OF ANDHRA PRADESH",
    link: "https://www.ctuap.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/central_university_of_andhra_pradesh.png"),
    cuname: "CENTRAL UNIVERSITY OF ANDHRA PRADESH",
    link: "https://www.cuoanupam.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/central_university_of_gujarat.png"),
    cuname: "CENTRAL UNIVERSITY OF GUJARAT",
    link: "https://www.cug.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/central_university_of_haryana.png"),
    cuname: "CENTRAL UNIVERSITY OF HARYANA",
    link: "https://www.cuh.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/central_university_of_himachal_pradesh.png"),
    cuname: "CENTRAL UNIVERSITY OF HIMACHAL PRADESH",
    link: "https://www.cuhimachal.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/central_university_of_jammu.png"),
    cuname: "CENTRAL UNIVERSITY OF JAMMU",
    link: "http://www.cujammu.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/central_university_of_jharkhand.png"),
    cuname: "CENTRAL UNIVERSITY OF JHARKHAND",
    link: "https://www.cuj.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/central_university_of_karnataka.png"),
    cuname: "CENTRAL UNIVERSITY OF KARNATAKA",
    link: "https://www.cuk.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/central_university_of_kashmir.png"),
    cuname: "CENTRAL UNIVERSITY OF KASHMIR",
    link: "https://www.cukashmir.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/central_university_of_kerala.png"),
    cuname: "CENTRAL UNIVERSITY OF KERALA",
    link: "https://www.cukerala.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/central_university_of_odisha.png"),
    cuname: "CENTRAL UNIVERSITY OF ODISHA",
    link: "https://cuo.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/central_university_of_rajasthan.png"),
    cuname: "CENTRAL UNIVERSITY OF RAJASTHAN",
    link: "https://www.curaj.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/central_university_of_south_bihar.png"),
    cuname: "CENTRAL UNIVERSITY OF SOUTH BIHAR",
    link: "https://www.cub.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/central_university_of_tamil_nadu.png"),
    cuname: "CENTRAL UNIVERSITY OF TAMIL NADU",
    link: "https://cutn.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/dr_hari_singh_gaur_v.png"),
    cuname: "DR. HARISINGH GOUR VISHWAVIDYALAYA",
    link: "https://www.dhsgsu.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/guru_ghasidas_vishwavidyalaya.png"),
    cuname: "GURU GHASIDAS VISHWAVIDYALAYA",
    link: "https://www.ggu.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/hemvati_nandan_bahuguna_garhwal_university.png"),
    cuname: "HEMVATI NANDAN BAHUGUNA GARHWAL UNIVERSITY",
    link: "https://www.hnbgu.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/igntu.png"),
    cuname: "INDIRA GANDHI NATIONAL TRIBAL UNIVERSITY",
    link: "http://www.igntu.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/jamia_millia_islamia.png"),
    cuname: "JAMIA MILLIA ISLAMIA",
    link: "https://www.jmi.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/jawaharlal_nehru_university.png"),
    cuname: "JAWAHARLAL NEHRU UNIVERSITY",
    link: "https://www.jnu.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/mahatma_gandhi_antarrashtriya_hindi_vishwavidyalaya.png"),
    cuname: "MAHATMA GANDHI ANTARRASHTRIYA HINDI VISHWAVIDYALAYA",
    link: "https://www.mgahiindia.org/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/mahatma_gandhi_central_university.png"),
    cuname: "MAHATMA GANDHI CENTRAL UNIVERSITY",
    link: "https://www.mgcub.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/manipur_university.png"),
    cuname: "MANIPUR UNIVERSITY",
    link: "https://manipuruniv.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/maulana_azad_national_urdu_university.png"),
    cuname: "MAULANA AZAD NATIONAL URDU UNIVERSITY",
    link: "https://www.manuu.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/mizoram_university.png"),
    cuname: "MIZORAM UNIVERSITY",
    link: "https://www.mzu.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/nagaland_university.png"),
    cuname: "NAGALAND UNIVERSITY",
    link: "https://nagalanduniversity.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/national_sanskrit_university.png"),
    cuname: "NATIONAL SANSKRIT UNIVERSITY",
    link: "https://nsuk.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/north_eastern_hill_university.png"),
    cuname: "NORTH-EASTERN HILL UNIVERSITY",
    link: "https://www.nehu.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/pondicherry_university.png"),
    cuname: "PONDICHERRY UNIVERSITY",
    link: "https://www.pondiuni.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/RAJIV GANDHI NATIONAL AVIATION UNIVERSITY1684414138_upload_logo.png"),
    cuname: "RAJIV GANDHI NATIONAL AVIATION UNIVERSITY",
    link: "http://www.rgnau.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/rajiv_gandhi_university.png"),
    cuname: "RAJIV GANDHI UNIVERSITY",
    link: "http://www.rgu.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/shri_lal_bahadur_shastri_national_sanskrit_university.png"),
    cuname: "SHRI LAL BAHADUR SHASTRI NATIONAL SANSKRIT UNIVERSITY",
    link: "http://www.slbsrsv.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/sikkim_university.png"),
    cuname: "SIKKIM UNIVERSITY",
    link: "https://www.cus.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/tezpur_university.png"),
    cuname: "TEZPUR UNIVERSITY",
    link: "https://www.tezu.ernet.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/the_english_and_foreign_languages_university.png"),
    cuname: "THE ENGLISH AND FOREIGN LANGUAGES UNIVERSITY",
    link: "https://www.efluniversity.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/tripura_university.png"),
    cuname: "TRIPURA UNIVERSITY",
    link: "http://www.tripurauniv.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/university_of_allahabad.png"),
    cuname: "UNIVERSITY OF ALLAHABAD",
    link: "https://www.allduniv.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/university_of_delhi.png"),
    cuname: "UNIVERSITY OF DELHI",
    link: "http://www.du.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/university_of_hyderabad.png"),
    cuname: "UNIVERSITY OF HYDERABAD",
    link: "https://www.uohyd.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/visva_bharati_university.png"),
    cuname: "VISVA-BHARATI UNIVERSITY",
    link: "https://www.visvabharati.ac.in/",
  },
];

const state_universities = [
  {
    cuimg: require("../../src/assets/images/university/private/pvt/BABA GULAM SHAH BADSHAH UNIVERSITY1678371977_upload_logo.png"),
    cuname: "BABA GHULAM SHAH BADSHAH UNIVERSITY",
    link: "http://www.bgsbu.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/bubhopal.png"),
    cuname: "BARKATULLAH UNIVERSITY",
    link: "http://www.bubhopal.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/BHATTADEV UNIVERSITY1678533517_upload_logo.JPG"),
    cuname: "BHATTADEV UNIVERSITY",
    link: "https://bhattadevuniversity.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Binod Bihari Mahto Koyalanchal University, Dhanbad1677478561_upload_logo.jpg"),
    cuname: "Binod Bihari Mahto Koyalanchal University, Dhanbad",
    link: "https://bbmku.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/other/Cluster University of Jammu1675943294_upload_logo.png"),
    cuname: "Cluster University of Jammu",
    link: "https://www.clujammu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Cluster University Srinagar1676093462_upload_logo.jpg"),
    cuname: "Cluster University of Srinagar",
    link: "https://www.cusrinagar.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/COTTON UNIVERSTIY1677144506_upload_logo.jpg"),
    cuname: "COTTON UNIVERSTIY",
    link: "https://www.cottonuniversity.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/other/Delhi Skill and Entrepreneurship University1675943805_upload_logo.png"),
    cuname: "DELHI SKILL AND ENTREPRENEURSHIP UNIVERSITY",
    link: "https://www.dseu.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Delhi Technological University1679378980_upload_logo.JPG"),
    cuname: "Delhi Technological University",
    link: "http://www.dtu.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/devi_ahilya.png"),
    cuname: "DEVI AHILYA VISHWAVIDYALAYA",
    link: "https://www.dauniv.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/dr_apj_tech_uni.png"),
    cuname: "DR. A.P.J. ABDUL KALAM TECHNICAL UNIVERSITY",
    link: "https://aktu.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/base.png"),
    cuname: "DR. B.R. AMBEDKAR SCHOOL OF ECONOMICS UNIVERSITY",
    link: "https://www.braecu.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/ambedkar_university_delhi.jpeg"),
    cuname: "DR. B.R. AMBEDKAR UNIVERSITY DELHI",
    link: "https://www.aud.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt1/Dr. SHYAMA PRASAD MUKHERJEE UNIVERSITY1678514260_upload_logo.jpg"),
    cuname: "Dr. SHYAMA PRASAD MUKHERJEE UNIVERSITY",
    link: "http://www.dspmukherjee.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/GOVT. COLLEGE FOR WOMEN, PARADE GROUND, JAMMU1676092543_upload_logo.png"),
    cuname: "GOVT. COLLEGE FOR WOMEN, PARADE GROUND, JAMMU",
    link: "https://www.gcwpadgjammu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Guru Gobind Singh Indraprastha University1675945731_upload_logo.png"),
    cuname: "Guru Gobind Singh Indraprastha University",
    link: "http://www.ipu.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Harcourt Butler Technical University, Kanpur1676612644_upload_logo.png"),
    cuname: "Harcourt Butler Technical University, Kanpur",
    link: "https://www.hbtu.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Indira Gandhi Delhi Technical University for Women1675944536_upload_logo.jpeg"),
    cuname: "Indira Gandhi Delhi Technical University for Women",
    link: "https://www.igdtuw.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Islamia College of Science and Commerce1676636404_upload_logo.png"),
    cuname: "Islamia College of Science and Commerce",
    link: "https://www.islamiacollege.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Islamic University of Science and Technology, Kashmir1678164911_upload_logo.jpg"),
    cuname: "Islamic University of Science and Technology, Kashmir",
    link: "https://www.islamicuniversity.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Jamshedpur Women's University1677662363_upload_logo.jpeg"),
    cuname: "Jamshedpur Womens University",
    link: "https://www.jsmu.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/jharkhand_raksha_uni.png"),
    cuname: "JHARKHAND RAKSHA SHAKTI UNIVERSITY",
    link: "https://www.jrsu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/KHWAJA MOINUDDIN CHISHTI LANGUAGE UNIVERSITY1677569507_upload_logo.jpg"),
    cuname: "KHWAJA MOINUDDIN CHISHTI LANGUAGE UNIVERSITY",
    link: "http://www.kmclucknow.org/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Kolhan University1677822580_upload_logo.png"),
    cuname: "Kolhan University",
    link: "https://www.kolhanuniversity.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/mmmut.png"),
    cuname: "MADAN MOHAN MALAVIYA UNIVERSITY OF TECHNOLOGY",
    link: "https://www.mmmut.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/mjpru.png"),
    cuname: "MAHATMA JYOTIBA PHULE ROHILKHAND UNIVERSITY",
    link: "https://www.mjpru.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Netaji Subhas University of Technology1679908303_upload_logo.png"),
    cuname: "Netaji Subhas University of Technology",
    link: "https://www.nsit.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Nilamber Pitamber University1677914164_upload_logo.png"),
    cuname: "Nilamber Pitamber University",
    link: "https://npu.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/OPJS UNIVERSITY CHURU, RAJASTHAN1679559280_upload_logo.png"),
    cuname: "OPJS UNIVERSITY CHURU, RAJASTHAN",
    link: "https://www.opjsuniversity.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/RANCHI UNIVERSITY1678361768_upload_logo.png"),
    cuname: "RANCHI UNIVERSITY",
    link: "http://www.ranchiuniversity.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/policeuni.jpeg"),
    cuname: "SARDAR PATEL UNIVERSITY OF POLICE SECURITY AND CRIMINAL JUSTICE",
    link: "https://www.policeuniversity.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/vaishno_devi_uni.png"),
    cuname: "SHRI MATA VAISHNO DEVI UNIVERSITY",
    link: "https://www.smvdu.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/SIDO KANHU MURMU UNIVERSITY, DUMKA1678518908_upload_logo.png"),
    cuname: "SIDO KANHU MURMU UNIVERSITY DUMKA",
    link: "http://www.skmu.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/UNIVERSITY OF JAMMU1675949402_upload_logo.png"),
    cuname: "UNIVERSITY OF JAMMU",
    link: "https://www.jammuuniversity.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/UNIVERSITY OF KASHMIR1677670086_upload_logo.png"),
    cuname: "UNIVERSITY OF KASHMIR",
    link: "http://www.kashmiruniversity.net/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/vikram_uni.png"),
    cuname: "VIKRAM UNIVERSITY",
    link: "https://www.vikramuniv.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Vinoba Bhave University1677750335_upload_logo.png"),
    cuname: "Vinoba Bhave University",
    link: "https://vbu.ac.in/",
  },
];
const deemed_universities = [
  {
    cuimg: require("../../src/assets/images/university/central/avi_ins_women.jpeg"),
    cuname:
      "AVINASHILINGAM INSTITUTE FOR HOME SCIENCE AND HIGHER EDUCATION FOR WOMEN",
    link: "https://www.avinuty.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/cvv.png"),
    cuname: "CHINMAYA VISHWAVIDYAPEETH",
    link: "https://www.chinmayavidyapeeth.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Datta Meghe Institute of Higher Education and Research1677131104_upload_logo.jpg"),
    cuname: "Datta Meghe Institute of Higher Education and Research",
    link: "https://www.dmimsu.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/dayalbagh_ins.png"),
    cuname: "DAYALBAGH EDUCATIONAL INSTITUTE",
    link: "https://www.dei.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/other/FOOTWEAR DESIGN AND DEVELOPMENT INSTITUTE1675943147_upload_logo.png"),
    cuname: "FOOTWEAR DESIGN AND DEVELOPMENT INSTITUTE",
    link: "https://fddiindia.com/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Gandhi Institute of Technology And Management - Bengaluru, Karnataka (Off Campus)1677824975_upload_logo.jpg"),
    cuname:
      "Gandhi Institute of Technology And Management - Bengaluru, Karnataka (Off Campus)",
    link: "https://gitam.edu/bengaluru",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Gandhi Institute of Technology And Management - Hyderabad, Telangana (Off Campus)1677825817_upload_logo.jpg"),
    cuname:
      "Gandhi Institute of Technology And Management - Hyderabad, Telangana (Off Campus)",
    link: "https://gitam.edu/hyderabad",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Gandhi Institute of Technology And Management - Visakhapatnam, Andhra Pradesh (Main Campus)1677827392_upload_logo.jpg"),
    cuname:
      "Gandhi Institute of Technology And Management - Visakhapatnam, Andhra Pradesh (Main Campus)",
    link: "https://www.gitam.edu/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Govt. Degree College (Autonomous), Baramulla1677843838_upload_logo.jpg"),
    cuname: "Govt. Degree College (Autonomous), Baramulla",
    link: "https://gdcbaramulla.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/GRAPHIC ERA UNIVERSITY1678429238_upload_logo.JPG"),
    cuname: "GRAPHIC ERA UNIVERSITY",
    link: "https://www.geu.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/gujarat_vidyapith.png"),
    cuname: "GUJARAT VIDYAPITH",
    link: "https://www.gujaratvidyapith.org/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/gurukul_kangri.png"),
    cuname: "GURUKULA KANGRI",
    link: "https://www.gkv.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Hindustan Institute of Technology and Science1677570796_upload_logo.png"),
    cuname: "Hindustan Institute of Technology and Science",
    link: "https://www.hindustanuniv.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt1/JAIN (Deemed-to-be University) , Bangalore (Karnataka)1681215034_upload_logo.png"),
    cuname: "JAIN (Deemed-to-be University) , Bangalore (Karnataka)",
    link: "https://www.jainuniversity.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/jamiahamdard.png"),
    cuname: "JAMIA HAMDARD",
    link: "https://www.jamiahamdard.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Jaypee Institute of Information Technology1677310888_upload_logo.png"),
    cuname: "Jaypee Institute of Information Technology",
    link: "https://www.jiit.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt1/KALASALINGAM ACADEMY OF RESEARCH AND EDUCATION____1678793545_upload_logo.jpg"),
    cuname: "KALASALINGAM ACADEMY OF RESEARCH AND EDUCATION",
    link: "https://kalasalingam.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Koneru Lakshmaiah Education Foundation (Deemed to be University)1677217798_upload_logo.jpg"),
    cuname: "Koneru Lakshmaiah Education Foundation (Deemed to be University)",
    link: "https://www.kluniversity.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/laxmibai_pe.png"),
    cuname: "LAKSHMIBAI NATIONAL INSTITUTE OF PHYSICAL EDUCATION",
    link: "https://lakshmibaicollege.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Lingaya's Vidyapeeth1677837895_upload_logo.jpg"),
    cuname: "Lingaya's Vidyapeeth",
    link: "https://lingayasuniversity.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Maharishi Markandeshwar1680070860_upload_logo.jpg"),
    cuname:
      "Maharishi Markandeshwar (Deemed to be University), Mullana - Ambala",
    link: "https://www.mmumullana.org/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/MANAVRACHNA.jpeg"),
    cuname: "MANAV RACHNA INTERNATIONAL INSTITUTE OF RESEARCH AND STUDIES",
    link: "https://manavrachna.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Nehru Gram Bharati1678691977_upload_logo.png"),
    cuname: "Nehru Gram Bharati",
    link: "http://www.nagb.org.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Noorul Islam Centre for Higher Education1679054805_upload_logo.png"),
    cuname: "Noorul Islam Centre for Higher Education",
    link: "https://www.niuniv.com/",
  },
  {
    cuimg: require("../../src/assets/images/university/other/Ramakrishna Mission Vivekananda Educational and Research Institute1675943506_upload_logo.png"),
    cuname:
      "Ramakrishna Mission Vivekananda Educational and Research Institute",
    link: "https://rkmvu.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/sud-logo.png"),
    cuname: "SHOBHIT UNIVERSITY",
    link: "https://www.shobhituniversity.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/SRM INSTITUTE OF SCIENCE AND TECHNOLOGY (DEEMED UNIVERSITY), NCR CAMPUS1679298771_upload_logo.jpg"),
    cuname:
      "SRM INSTITUTE OF SCIENCE AND TECHNOLOGY (DEEMED UNIVERSITY), NCR CAMPUS",
    link: "https://www.srmist.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/tiss.png"),
    cuname: "TATA INSTITUTE OF SOCIAL SCIENCES (TISS)",
    link: "https://www.tiss.edu/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/ruraluniv.png"),
    cuname: "THE GANDHIGRAM RURAL INSTITUTE (DTBU)",
    link: "https://www.ruraluniv.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Tilak Maharashtra Vidyapeeth1680088675_upload_logo.png"),
    cuname: "Tilak Maharashtra Vidyapeeth",
    link: "https://www.tmv.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Vinayaka Mission's Research Foundation1677737982_upload_logo.png"),
    cuname: "Vinayaka Mission's Research Foundation",
    link: "https://www.vinayakamission.com/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Yenepoya University1677499942_upload_logo.png"),
    cuname: "Yenepoya University",
    link: "https://www.yenepoya.edu.in/",
  },
];

const private_universities = [
  {
    cuimg: require("../../src/assets/images/university/private/pvt/AISECT University1678967232_upload_logo.png"),
    cuname: "AISECT University",
    link: "https://aisectuniversity.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/AKS UNIVERSITY1678532198_upload_logo.JPG"),
    cuname: "AKS UNIVERSITY",
    link: "https://www.aksuniversity.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Alliance University1678880643_upload_logo.png"),
    cuname: "Alliance University",
    link: "https://alliance.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Amity University Chhattisgarh1677910133_upload_logo.jpg"),
    cuname: "Amity University Chhattisgarh",
    link: "https://www.amity.edu/raipur/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Amity University Gurugram1677844328_upload_logo.jpg"),
    cuname: "Amity University Gurugram",
    link: "https://www.amity.edu/gurugram/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Amity University Gwalior1677906349_upload_logo.jpg"),
    cuname: "Amity University Gwalior",
    link: "https://www.amity.edu/gwalior/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Amity University Jaipur1677908063_upload_logo.jpg"),
    cuname: "Amity University Jaipur",
    link: "https://www.amity.edu/jaipur/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/AMITY UNIVERSITY JHARKHAND1678344884_upload_logo.JPG"),
    cuname: "AMITY UNIVERSITY JHARKHAND",
    link: "https://www.amity.edu/jharkhand/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt1/Amity University Kolkata1678700855_upload_logo.png"),
    cuname: "Amity University Kolkata",
    link: "https://www.amity.edu/kolkata/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt1/Amity University Lucknow1678714813_upload_logo.png"),
    cuname: "Amity University Lucknow",
    link: "https://www.amity.edu/lucknow/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Amity University Mumbai1677911309_upload_logo.jpg"),
    cuname: "Amity University Mumbai",
    link: "https://www.amity.edu/mumbai/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt1/AMITY UNIVERSITY NOIDA1678714788_upload_logo.png"),
    cuname: "AMITY UNIVERSITY NOIDA",
    link: "https://www.amity.edu/noida/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/AMITY UNIVERSITY PATNA1678680900_upload_logo.jpg"),
    cuname: "AMITY UNIVERSITY PATNA",
    link: "https://www.amity.edu/patna/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/AMITY UNIVERSITY PUNJAB1678685968_upload_logo.png"),
    cuname: "AMITY UNIVERSITY PUNJAB",
    link: "https://www.amity.edu/punjab/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Apeejay Stya University1675951505_upload_logo.png"),
    cuname: "Apeejay Stya University",
    link: "https://university.apeejay.edu/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt1/APEX UNIVERSITY, JAIPUR1681291917_upload_logo.png"),
    cuname: "APEX UNIVERSITY, JAIPUR",
    link: "https://www.apexuniversity.co.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/ARKA JAIN University1678793297_upload_logo.png"),
    cuname: "ARKA JAIN University",
    link: "https://arkajainuniversity.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/arunachal_uni.png"),
    cuname: "ARUNACHAL UNIVERSITY OF STUDIES",
    link: "https://www.arunachaluniversity.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/ASBM University1675945681_upload_logo.png"),
    cuname: "ASBM University",
    link: "https://www.asbmuniversity.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Bahra University (Shimla Hills)1675953164_upload_logo.png"),
    cuname: "Bahra University (Shimla Hills)",
    link: "https://www.bahrauniversity.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt1/Bhagwant University1678880391_upload_logo.jpg"),
    cuname: "Bhagwant University",
    link: "https://www.bhagwantuniversity.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/BHARATIYA ENGINEERING SCIENCE AND TECHNOLOGY INNOVATION UNIVERSITY1679292885_upload_logo.JPG"),
    cuname:
      "BHARATIYA ENGINEERING SCIENCE AND TECHNOLOGY INNOVATION UNIVERSITY",
    link: "https://bestiit.org/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/bmlmu.png"),
    cuname: "BML MUNJAL UNIVERSITY",
    link: "https://www.bml.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Capital University1678707596_upload_logo.png"),
    cuname: "CAPITAL UNIVERSITY, KODERMA, JHARKHAND",
    link: "https://capitaluniversity.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/career_uni.jpeg"),
    cuname: "CAREER POINT UNIVERSITY",
    link: "https://www.cpur.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Chanakya University1676708776_upload_logo.jpg"),
    cuname: "Chanakya University",
    link: "http://www.chanakyauniversity.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/csmu-logo.jpg"),
    cuname: "CHHATRAPATI SHIVAJI MAHARAJ UNIVERSITY",
    link: "http://www.csmu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Chitkara University, Himachal Pradesh1677479054_upload_logo.PNG"),
    cuname: "Chitkara University, Himachal Pradesh",
    link: "https://www.chitkarauniversity.edu.in/himachal-pradesh/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Chitkara University, Punjab1677239748_upload_logo.PNG"),
    cuname: "Chitkara University, Punjab",
    link: "https://www.chitkara.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/UNIVERSITY OF ENGINEERING AND TECHNOLOY ROORKEE1677134325_upload_logo.jpeg"),
    cuname: "COER University",
    link: "https://www.coer.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/CT University, Ludhiana 1682941425_upload_logo.png"),
    cuname: "CT University, Ludhiana ",
    link: "https://ctuniversity.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/DAV UNIVERSITY JALANDHAR1678363152_upload_logo.JPG"),
    cuname: "DAV UNIVERSITY JALANDHAR",
    link: "https://www.davuniversity.org/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt1/Dr. C. V. Raman University, Vaishali, Bihar____1682948080_upload_logo.png"),
    cuname: "Dr. C. V. Raman University, Vaishali, Bihar",
    link: "https://www.cvru.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt1/G D Goenka University, Gurugram NCR1677751782_upload_logo.jpg"),
    cuname: "G D Goenka University, Gurugram, NCR",
    link: "https://www.gdgoenkauniversity.com/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/galgotias.png"),
    cuname: "GALGOTIAS UNIVERSITY",
    link: "https://www.galgotiasuniversity.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Geeta University1675944877_upload_logo.png"),
    cuname: "GEETA UNIVERSITY, PANIPAT, DELHI-NCR, HARYANA",
    link: "https://www.geeta.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt2/GLA University Mathura1677652195_upload_logo.jpg"),
    cuname: "GLA University Mathura",
    link: "https://gla.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/GOPAL NARAYAN SINGH UNIVERSITY1682921305_upload_logo.jpg"),
    cuname: "GOPAL NARAYAN SINGH UNIVERSITY",
    link: "https://gnsu.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt1/GRAPHIC ERA HILL UNIVERSITY,  HALDWANI_1678445703_upload_logo.jpg"),
    cuname: "GRAPHIC ERA HILL UNIVERSITY,  HALDWANI      ",
    link: "https://www.gehu.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt1/GRAPHIC ERA HILL UNIVERSITY, BHIMTAL1678445620_upload_logo.jpg"),
    cuname: "GRAPHIC ERA HILL UNIVERSITY, BHIMTAL",
    link: "https://www.geu.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt1/GRAPHIC ERA HILL UNIVERSITY, DEHRADUN___1678445500_upload_logo.jpg"),
    cuname: "GRAPHIC ERA HILL UNIVERSITY, DEHRADUN                    ",
    link: "https://www.gehu.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Guru Kashi University1680241690_upload_logo.jpeg"),
    cuname: "Guru Kashi University",
    link: "https://www.gurukashiuniversity.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Hi-Tech Institute of Engineering & Technology1677744285_upload_logo.jpeg"),
    cuname: "Hi-Tech Institute of Engineering & Technology",
    link: "https://www.hiet.org/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Himalayan University Itanagar1675944606_upload_logo.png"),
    cuname: "Himalayan University Itanagar",
    link: "https://www.himalayanuniversity.com/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/ICFAI University, Dehradun1681387608_upload_logo.png"),
    cuname: "ICFAI University, Dehradun",
    link: "https://www.iudehradun.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/ICFAI University Jharkhand, Ranchi1679642762_upload_logo.png"),
    cuname: "ICFAI University, Jharkhand",
    link: "https://www.iujharkhand.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/ies_uni.png"),
    cuname: "IES UNIVERSITY",
    link: "https://www.iesuniversity.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/IFTM University, Moradabad1683784315_upload_logo.png"),
    cuname: "IFTM University, Moradabad",
    link: "https://www.iftmuniversity.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt1/IILM University, Greater Noida1676713357_upload_logo.png"),
    cuname: "IILM University, Greater Noida",
    link: "https://www.iilmuniversity.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt1/IILM University, Gurugram1676462290_upload_logo.png"),
    cuname: "IILM University, Gurugram",
    link: "https://www.iilm.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/iimt.png"),
    cuname: "IIMT UNIVERSITY",
    link: "https://www.iimtindia.net/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/IMS Unison University1677839818_upload_logo.jpg"),
    cuname: "IMS Unison University",
    link: "https://www.iuu.ac/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Invertis University1675946115_upload_logo.png"),
    cuname: "Invertis University",
    link: "https://www.invertisuniversity.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/ITM University, Navi Mumbai1681215134_upload_logo.jpeg"),
    cuname: "ITM Skills University, Navi Mumbai",
    link: "https://www.itmuniversity.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/ITM UNIVERSITY GWALIOR1676871946_upload_logo.png"),
    cuname: "ITM UNIVERSITY GWALIOR",
    link: "https://www.itm.edu/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/ITM University, Raipur1681217756_upload_logo.jpeg"),
    cuname: "ITM University, Raipur",
    link: "https://www.itmuniversity.ac.in/raipur/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/ITM Vocational University, Vadodara1681216933_upload_logo.jpeg"),
    cuname: "ITM Vocational University, Vadodara",
    link: "https://www.itmvu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt1/JAGAN NATH UNIVERSITY BAHADURGARH HARYANA1676363523_upload_logo.jpeg"),
    cuname: "JAGAN NATH UNIVERSITY BAHADURGARH HARYANA",
    link: "https://www.jagannathuniversityncr.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt2/JAGANNATH UNIVERSITY, JAIPUR (RAJASTHAN)1676632812_upload_logo.jpg"),
    cuname: "JAGANNATH UNIVERSITY, JAIPUR (RAJASTHAN)",
    link: "https://www.jagannathuniversity.org/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/juit.jpeg"),
    cuname: "JAYPEE UNIVERSITY OF INFORMATION TECHNOLOGY",
    link: "https://www.juit.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Jharkhand Rai University1678094781_upload_logo.png"),
    cuname: "Jharkhand Rai University",
    link: "https://www.jru.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt1/JOY UNIVERSITY1677584963_upload_logo.jpg"),
    cuname: "JOY UNIVERSITY",
    link: "https://www.joyuniversity.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt1/K. K. Modi University1678178498_upload_logo.png"),
    cuname: "K. K. Modi University",
    link: "https://www.kkmodiuniversity.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/kr_manglam.png"),
    cuname: "K.R. MANGALAM UNIVERSITY",
    link: "https://krmangalam.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Karnavati University1677322305_upload_logo.jpg"),
    cuname: "Karnavati University",
    link: "https://www.karnavatiuniversity.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt1/Lohit's Academy College of Commerce1678100314_upload_logo.jpg"),
    cuname: "Lohit's Academy College of Commerce",
    link: "https://www.lohitsacademy.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Lovely Professional University1675949299_upload_logo.jpg"),
    cuname: "Lovely Professional University",
    link: "https://www.lpu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Madhav University1681109333_upload_logo.jpg"),
    cuname: "Madhav University",
    link: "https://www.madhavuniversity.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/MANAVRACHNA.jpeg"),
    cuname: "MANAV RACHNA UNIVERSITY",
    link: "https://manavrachna.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt2/Mangalayatan University Jabalpur1675962528_upload_logo.jpeg"),
    cuname: "Mangalayatan University Jabalpur",
    link: "https://www.mangalayatan.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Mangalayatan University, Aligarh1675945064_upload_logo.png"),
    cuname: "Mangalayatan University, Aligarh",
    link: "https://www.mangalayatan.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Manipal University1679046981_upload_logo.jpg"),
    cuname: "Manipal University Jaipur",
    link: "https://jaipur.manipal.edu/muj.html",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Mansarovar Global University1679293109_upload_logo.jpg"),
    cuname: "Mansarovar Global University",
    link: "https://mansarovarglobaluniversity.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/mewar_uni.png"),
    cuname: "MEWAR UNIVERSITY",
    link: "https://www.mewaruniversity.org/",
  },
  {
    cuimg: require("../../src/assets/images/university/other/Mody University1675942449_upload_logo.png"),
    cuname: "Mody University of Science and Technology",
    link: "https://www.modyuniversity.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/MVN University1677563586_upload_logo.jpg"),
    cuname: "MVN University",
    link: "https://www.mvn.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Netaji Subhas University1678709680_upload_logo.png"),
    cuname: "Netaji Subhas University",
    link: "https://netajisubhasuniversity.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt2/NICMAR UNIVERSITY, PUNE1676004930_upload_logo.jpg"),
    cuname: "NICMAR UNIVERSITY, PUNE",
    link: "https://www.nicmar.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/niit_univ.png"),
    cuname: "NIIT UNIVERSITY",
    link: "https://www.niituniversity.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/NIRWAN.png"),
    cuname: "NIRWAN UNIVERSITY, JAIPUR",
    link: "https://www.nirwanuniversity.org/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Noida International University1676534885_upload_logo.png"),
    cuname: "Noida International University",
    link: "https://niu.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/NOWGONG COLLEGE1678451173_upload_logo.JPG"),
    cuname: "NOWGONG COLLEGE",
    link: "http://nowgongcollege.org/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/OM STERLING GLOBAL UNIVERSITY 1681362786_upload_logo.jpg"),
    cuname: "OM STERLING GLOBAL UNIVERSITY",
    link: "https://www.omuniversity.net/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Parul University1679744303_upload_logo.png"),
    cuname: "Parul University",
    link: "https://www.paruluniversity.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/PRESIDENCY UNIVERSITY1678346361_upload_logo.jpg"),
    cuname: "PRESIDENCY UNIVERSITY",
    link: "https://presidencyuniversity.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Quantum University , Roorkee1680066826_upload_logo.jpg"),
    cuname: "Quantum University , Roorkee",
    link: "https://www.quantumuniversity.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Rabindranath Tagore University1683786846_upload_logo.png"),
    cuname: "Rabindranath Tagore University",
    link: "https://www.urtu.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Radha Govind University, Jharkhand1679290140_upload_logo.png"),
    cuname: "Radha Govind University, Jharkhand",
    link: "https://www.rgujharkhand.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/RAM KRISHNA DHARMARTH FOUNDATION UNIVERSITY1678179849_upload_logo.jpeg"),
    cuname: "RAM KRISHNA DHARMARTH FOUNDATION (RKDF) UNIVERSITY",
    link: "https://www.rkdf.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Rama University1680090661_upload_logo.jpg"),
    cuname: "Rama University",
    link: "https://www.ramauniversity.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Ramchandra Chandravansi University1679566495_upload_logo.png"),
    cuname: "Ramchandra Chandravansi University",
    link: "https://www.rcvv.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/RKDF University, Bhopal1679988981_upload_logo.jpg"),
    cuname: "RKDF University, Bhopal",
    link: "https://www.rkdf.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/rnbglobal.jpeg"),
    cuname: "RNB GLOBAL UNIVERSITY",
    link: "https://www.rnbglobal.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Sai Nath University1678794234_upload_logo.png"),
    cuname: "Sai Nath University",
    link: "https://www.sainathuniversity.com/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt1/SANGAM UNIVERSITY1676288220_upload_logo.jpg"),
    cuname: "SANGAM UNIVERSITY",
    link: "https://www.sangamuniversity.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/SANSKRITI UNIVERSITY1676088937_upload_logo.jpg"),
    cuname: "SANSKRITI UNIVERSITY",
    link: "https://www.sanskriti.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Sarala Birla University1678776726_upload_logo.png"),
    cuname: "Sarala Birla University",
    link: "https://saralabirlauniversity.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/School of Management Sciences1679655679_upload_logo.png"),
    cuname: "School of Management Sciences",
    link: "https://www.smslucknow.com/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt1/SCOPE GLOBAL SKILLS UNIVERSITY1683009716_upload_logo.jpg"),
    cuname: "SCOPE GLOBAL SKILLS UNIVERSITY",
    link: "https://www.scopeuniversity.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/SGT UNIVERSITY1680499419_upload_logo.png"),
    cuname: "SGT UNIVERSITY",
    link: "https://sgtuniversity.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt1/SHARDA UNIVERSITY1676461870_upload_logo.jpg"),
    cuname: "SHARDA UNIVERSITY",
    link: "https://www.sharda.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/other/Shoolini University1675942961_upload_logo.png"),
    cuname: "Shoolini University",
    link: "https://shooliniuniversity.com/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/SHRI KHUSHAL DAS UNIVERSITY, HANUMANGARH1677583685_upload_logo.png"),
    cuname: "SHRI KHUSHAL DAS UNIVERSITY, HANUMANGARH",
    link: "https://www.skduni.com/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Shri Ramswaroop Memorial University1677148703_upload_logo.jpg"),
    cuname: "Shri Ramswaroop Memorial University",
    link: "https://www.srmu.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/SHRI Venkateshwara University1679032408_upload_logo.png"),
    cuname: "SHRI Venkateshwara University",
    link: "https://www.svu.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt1/SHYAM UNIVERSITY, DAUSA, RAJASTHAN1678862479_upload_logo.png"),
    cuname: "SHYAM UNIVERSITY, DAUSA, RAJASTHAN",
    link: "https://shyamuniversity.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt1/Sikkim Professional University1676350917_upload_logo.jpg"),
    cuname: "Sikkim Professional University",
    link: "https://spu.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Somaiya Vidyavihar University1677307394_upload_logo.jpg"),
    cuname: "Somaiya Vidyavihar University",
    link: "https://www.somaiya.edu/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Srinath University1679139363_upload_logo.png"),
    cuname: "Srinath University",
    link: "https://srinathuniversity.com/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt1/SRM UNIVERSITY1679122204_upload_logo.png"),
    cuname: "SRM UNIVERSITY (Andhra Pradesh)",
    link: "https://andhrauniversity.srmuniversity.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/SRM University Delhi-NCR, Sonepat1679125650_upload_logo.jpg"),
    cuname: "SRM University Delhi-NCR, Sonepat",
    link: "https://www.srmuniversity.ac.in/delhi-ncr/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Surajmal University1679291952_upload_logo.jpg"),
    cuname: "Surajmal University",
    link: "https://www.surajmaluniversity.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt1/Suresh Gyan Vihar University Jaipur1676632101_upload_logo.jpg"),
    cuname: "Suresh Gyan Vihar University Jaipur",
    link: "https://www.gyanvihar.org/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Sushant University1677480621_upload_logo.png"),
    cuname: "Sushant University",
    link: "https://sushantuniversity.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt1/SVKM.png"),
    cuname:
      "SVKM's MITHIBAI COLLEGE OF ARTS, CHAUHAN INSTITUTE OF SCIENCE AMRUTBEN JIVANLAL COLLEGE OF COMMERCE AND ECONOMICS (AUTONOMOUS)",
    link: "https://www.mithibai.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Narsee Monjee college of Commerce and Economics1679045938_upload_logo.png"),
    cuname:
      "SVKM's NARSEE MONJEE COLLEGE OF COMMERCE AND ECONOMICS (AUTONOMOUS)",
    link: "https://www.nmcollege.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Swami Vivekanand Subharti University1678778520_upload_logo.png"),
    cuname: "Swami Vivekanand Subharti University",
    link: "https://www.subharti.org/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Swami Vivekananda Yoga Anusandhana Samsthana1677239391_upload_logo.jpg"),
    cuname: "Swami Vivekananda Yoga Anusandhana Samsthana",
    link: "https://svyasa.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/central/tmu.png"),
    cuname: "TEERTHANKER MAHAVEER UNIVERSITY",
    link: "https://www.tmu.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/The ICFAI University Tripura1683019713_upload_logo.png"),
    cuname: "The ICFAI University Tripura",
    link: "https://www.iutripura.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/The ICFAI University, Jaipur1676959705_upload_logo.png"),
    cuname: "The ICFAI University, Jaipur",
    link: "https://www.iujaipur.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/THE ICFAI UNIVERSITY, SIKKIM1677155904_upload_logo.png"),
    cuname: "THE ICFAI UNIVERSITY, SIKKIM",
    link: "https://www.iusikkim.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt2/The NorthCap University1690178724_upload_logo.jpg"),
    cuname: "The NorthCap University",
    link: "https://www.ncuindia.edu/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Tribhuvan College of Environment & Development Sciences1679304609_upload_logo.png"),
    cuname: "Tribhuvan College of Environment & Development Sciences",
    link: "https://www.tu.edu.np/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/UNITED UNIVERSITY, PRAYAGRAJ1677058194_upload_logo.png"),
    cuname: "UNITED UNIVERSITY, PRAYAGRAJ",
    link: "https://uniteduniversity.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt1/University of Science and Technology Meghalaya1679918438_upload_logo.png"),
    cuname: "University of Science and Technology Meghalaya",
    link: "https://ustm.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/University of Technology - Jaipur1681537190_upload_logo.jpg"),
    cuname: "University of Technology - Jaipur",
    link: "https://www.universityoftechnology.edu.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/UNIVERSITY OF PETROLEUM & ENERGY STUDIES- DEHRADUN1676133992_upload_logo.jpg"),
    cuname: "UPES - DEHRADUN",
    link: "https://www.upes.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/USHA MARTIN UNIVERSITY1676132080_upload_logo.png"),
    cuname: "USHA MARTIN UNIVERSITY",
    link: "https://www.ushamartinuniversity.com/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Uttaranchal University1677734366_upload_logo.jpg"),
    cuname: "Uttaranchal University, Dehradun",
    link: "https://uttaranchaluniversity.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt1/Vivekananda Global University1676453990_upload_logo.png"),
    cuname: "Vivekananda Global University",
    link: "https://www.vgu.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/WORLD UNIVERSITY OF DESIGN1678443940_upload_logo.JPG"),
    cuname: "WORLD UNIVERSITY OF DESIGN",
    link: "https://www.wud.ac.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/YBN UNIVERSITY1678531110_upload_logo.JPG"),
    cuname: "YBN UNIVERSITY",
    link: "https://www.ybnuniversity.edu.in/",
  },
];
const other_universities = [
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Indian Council of Agricultural Research (ICAR)1677499198_upload_logo.jpg"),
    cuname: "Indian Council of Agricultural Research (ICAR)",
    link: "https://www.icar.org.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Indian Culinary Institute1678710304_upload_logo.jpg"),
    cuname: "Indian Culinary Institute",
    link: "https://www.ici.nic.in/",
  },
  {
    cuimg: require("../../src/assets/images/university/private/pvt/Indian Institute of Tourism & Travel Management1677824588_upload_logo.png"),
    cuname: "Indian Institute of Tourism & Travel Management",
    link: "https://www.iittm.ac.in/",
  },
];
export {
  central_universities,
  deemed_universities,
  listuniversities,
  other_universities,
  private_universities,
  state_universities,
};
