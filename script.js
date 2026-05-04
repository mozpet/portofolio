const translations = {
    en: {
        heroIntro: 'Hi, my name is',
        heroSubtitle: 'Web Developer | IT Support | Android Developer | Excel',
        heroDesc: 'I am an IT Support and Web Developer with experience in troubleshooting hardware and software issues, including Windows installation, Microsoft Office repair, and driver configuration. Skilled in handling PCs, laptops, printers, and basic networking. I also have experience in web and mobile development, enabling me to understand systems more deeply. Detail-oriented and responsive in providing technical support to ensure smooth IT operations.',
        contactButton: 'Contact Me',
        linkedinButton: 'LinkedIn',
        experienceHeading: 'Experience',
        skillsHeading: 'Skills',
        coreTechnologies: 'Core Technologies',
        professionalTraits: 'Professional Traits',
        educationHeading: 'Education',
        footerHeading: 'Get In Touch',
        footerText: 'Whether you have a question or just want to say hi, I\'ll try my best to get back to you!',
        job1Type: 'Project',
        job1Desc: 'Attendance application project. Developed and maintained robust features for tracking employee time, ensuring accurate data synchronization, and improving overall system reliability.',
        job2Type: 'Intern',
        job2Desc: 'Provided troubleshooting support for hardware and software systems. Assisted in network configuration, monitoring infrastructure health, and ensuring optimal performance across internal systems.',
        job3Type: 'Intern',
        job3Desc: 'Managed API integrations and database operations. Streamlined data retrieval processes and assisted in the development of lightweight web tools for internal administrative use.',
        skillCommunication: 'Communication',
        skillDetailOriented: 'Detail Oriented',
        skillProblemSolving: 'Problem Solving',
        skillAdaptability: 'Adaptability',
        skillCollaboration: 'Collaboration',
        skillCriticalThinking: 'Critical Thinking',
        skillTimeManagement: 'Time Management'
    },
    id: {
        heroIntro: 'Hai, nama saya',
        heroSubtitle: 'Web Developer | IT Support | Pengembang Android | Excel',
        heroDesc: 'Saya adalah seorang IT Support dan Web Developer yang memiliki pengalaman dalam menangani troubleshooting perangkat keras dan perangkat lunak, termasuk instalasi Windows, perbaikan Microsoft Office, serta konfigurasi driver. Saya terampil dalam menangani PC, laptop, printer, dan jaringan dasar. Selain itu, saya juga memiliki pengalaman dalam pengembangan web dan mobile, yang memungkinkan saya memahami sistem secara lebih mendalam. Saya teliti dan responsif dalam memberikan dukungan teknis untuk memastikan operasional IT berjalan dengan lancar.',
        contactButton: 'Hubungi Saya',
        linkedinButton: 'LinkedIn',
        experienceHeading: 'Pengalaman',
        skillsHeading: 'Kemampuan',
        coreTechnologies: 'Teknologi Inti',
        professionalTraits: 'Sifat Profesional',
        educationHeading: 'Pendidikan',
        footerHeading: 'Hubungi Saya',
        footerText: 'Jika Anda memiliki pertanyaan atau ingin menyapa, saya akan berusaha sebaik mungkin untuk membalas Anda!',
        job1Type: 'Proyek',
        job1Desc: 'Proyek aplikasi absensi. Mengembangkan dan memelihara fitur andal untuk melacak waktu karyawan, memastikan sinkronisasi data yang akurat, dan meningkatkan keandalan sistem secara keseluruhan.',
        job2Type: 'Magang',
        job2Desc: 'Memberikan dukungan troubleshooting untuk sistem perangkat keras dan perangkat lunak. Membantu konfigurasi jaringan, memantau kesehatan infrastruktur, dan memastikan kinerja optimal di seluruh sistem internal.',
        job3Type: 'Magang',
        job3Desc: 'Mengelola integrasi API dan operasi basis data. Menyederhanakan proses pengambilan data dan membantu pengembangan alat web ringan untuk penggunaan administratif internal.',
        skillCommunication: 'Komunikasi',
        skillDetailOriented: 'Teliti',
        skillProblemSolving: 'Pemecahan Masalah',
        skillAdaptability: 'Adaptabilitas',
        skillCollaboration: 'Kolaborasi',
        skillCriticalThinking: 'Berpikir Kritis',
        skillTimeManagement: 'Manajemen Waktu'
    }
};

function applyTheme() {
    if (localStorage.getItem('theme') === 'light') {
        document.documentElement.classList.remove('dark');
        document.getElementById('theme-toggle').checked = false;
    } else {
        document.documentElement.classList.add('dark');
        document.getElementById('theme-toggle').checked = true;
    }
}

function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
}

function applyLanguage(language = localStorage.getItem('language') || 'en') {
    const lang = translations[language] ? language : 'en';
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.dataset.i18n;
        if (translations[lang][key] !== undefined) {
            element.textContent = translations[lang][key];
        }
    });

    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.textContent = lang === 'en' ? 'ID' : 'EN';
    }
}

function toggleLanguage() {
    const nextLang = localStorage.getItem('language') === 'id' ? 'en' : 'id';
    applyLanguage(nextLang);
}

window.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'dark');
    }
    if (!localStorage.getItem('language')) {
        localStorage.setItem('language', 'en');
    }
    applyTheme();
    applyLanguage();

    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
    
    (function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="JBQrdagDYy3piZA0JtuHB";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();
});
