'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'vi';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

// Define translation dictionary
export const translations: Record<Language, Record<string, any>> = {
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greet: "INITIALIZING SYSTEM...",
      tagline: "BUILDING HIGH-PERFORMANCE INTERACTIVE CYBER SPACES",
      description: "I construct hyper-fast, visually striking web apps. Specialized in React, Next.js, Vue, Nuxt, and cutting-edge interactive motion design.",
      cta_primary: "DECRYPT WORK",
      cta_secondary: "ESTABLISH CONTACT",
      download_cv: "EXPORT CV",
      titles: [
        "SENIOR FRONTEND ENGINEER",
        "NEXT.JS / NUXT SPECIALIST",
        "INTERACTIVE MOTION DESIGNER",
        "PERFORMANCE TUNING EXPERT"
      ]
    },
    about: {
      title: "SYSTEM_INFO // HUY HOANG",
      subtitle: "FRONTEND CYBERNETICS SPECIALIST",
      p1: "Frontend Developer with 7+ years of experience building modern web applications using TypeScript, React.js, and Vue.js. Experienced in developing scalable SaaS, CRM, marketplace, and business management systems.",
      p2: "Strong focus on frontend architecture, performance optimization, and user experience, with hands-on experience in mentoring, code reviews, and building maintainable frontend systems.",
      stats: {
        experience: "YRS OF EXPERIENCE",
        projects: "PROJECTS DEPLOYED",
        coffee: "COFFEE PROTOCOLS",
        clients: "HAPPY CLIENTS"
      },
      skills_title: "CORE_SKILLS // DECRYPTED"
    },
    services: {
      title: "UI_SERVICES // PROTOCOLS",
      subtitle: "SPECIALIZED DIGITIZED CAPABILITIES",
      figma: {
        title: "FIGMA/PSD TO CODE",
        desc: "Transforming high-fidelity mockups into raw, semantic, ultra-responsive HTML/CSS/JS. Pixel-perfect translation guaranteed."
      },
      performance: {
        title: "PERFORMANCE OVERCLOCKING",
        desc: "Optimizing page load times, Core Web Vitals, and rendering pipelines to achieve perfect 100/100 Lighthouse scores."
      },
      animations: {
        title: "INTERACTIVE MOTION & GSAP",
        desc: "Breathing life into static interfaces with smooth GSAP animations, canvas visualizers, and state-driven micro-interactions."
      },
      webapp: {
        title: "ENTERPRISE WEB APPS",
        desc: "Engineering highly scalable Next.js and Nuxt applications equipped with robust global states and clean reactive architecture."
      }
    },
    timeline: {
      title: "CAREER_PATH // CHRONOLOGY",
      subtitle: "CHRONOLOGICAL LOGS OF MY PROFESSIONAL EXPEDITION",
      present: "PRESENT",
      jobs: [
        {
          role: "Senior Frontend Developer",
          company: "MC Urban Development Vietnam (Mitsubishi Corporation subsidiary)",
          period: "05/2024 - 03/2026",
          desc: "Built Radanhadat, a PropTech real estate platform, with monorepo architecture, scalable component systems, Storybook, analytics tracking, AI-powered listing analysis, VNPT ePay integration, financial calculation tools, and frontend performance improvements. Mentored junior developers through code reviews and technical guidance."
        },
        {
          role: "Middle Frontend Developer",
          company: "THE COLLECTIVEC GROUP",
          period: "01/2022 - 05/2024",
          desc: "Developed Buho, a restaurant POS and management system for order handling, table scheduling, payment workflows, delivery tracking, and business reporting. Built reusable UI components, real-time Socket.IO features, WhatsApp integration, push notifications, multilingual support, Stripe payments, Google Maps delivery flows, and frontend security improvements."
        },
        {
          role: "Web Developer",
          company: "ORIGIN AGENCY CO., LTD",
          period: "03/2017 - 12/2021",
          desc: "Delivered Testmaster and multiple campaign/product websites including Yamaha Revzone, Moveek, Innolux Footwear, NgayDauTien, TuongAn, and Daikin. Converted Figma, Sketch, and Adobe XD designs into responsive interfaces, built WordPress and PHP features, supported Laravel test management flows, optimized performance, implemented SEO and tracking, and collaborated with designers and backend teams."
        }
      ]
    },
    projects: {
      title: "PROJECTS // DIRECTORY",
      subtitle: "SUCCESSFUL CYBER-NETWORK DEPLOYMENTS",
      visit_demo: "LAUNCH DEMO",
      github: "VIEW REPO",
      all: "ALL PROJECTS",
      featured: "FEATURED DEPLOYMENTS",
      items: [
        {
          id: "radanhadat",
          title: "RADANHADAT - PROPTECH PLATFORM",
          desc: "A real estate listing platform for posting, searching, and managing property listings for buying and renting. Built planning map monorepo architecture, reusable component systems, analytics tracking, AI-powered listing analysis, VNPT ePay payments, financial calculators, and performance-focused frontend improvements.",
          tech: ["Vue.js", "Nuxt", "React", "TypeScript", "Pinia", "Redux Toolkit", "Tailwind CSS", "Shadcn UI", "ChartJS", "Sentry"],
          image: "/projects/radanhadat.png",
          demo: "#",
          github: "#"
        },
        {
          id: "buho-pos",
          title: "BUHO - RESTAURANT POS SYSTEM",
          desc: "A restaurant management and POS system for order management, table scheduling, payment processing, delivery workflows, and business performance tracking. Delivered reusable UI components, Socket.IO real-time features, WhatsApp messaging, push notifications, multilingual support, Stripe payments, Google Maps integration, and frontend security improvements.",
          tech: ["Vue 2", "Vue 3", "Vuex", "JavaScript", "SCSS", "Socket.IO", "Stripe", "Google Maps", "ChartJS", "LogRocket"],
          image: "/projects/buho.png",
          demo: "#",
          github: "#"
        },
        {
          id: "testmaster",
          title: "TESTMASTER - TEST PREP APPS",
          desc: "A language proficiency test preparation and test management platform. Built responsive interfaces from Figma designs, collaborated on exam creation and management features, and supported maintenance, bug fixing, and feature enhancements for stable test-taking workflows.",
          tech: ["PHP", "Laravel", "JavaScript", "HTML5", "SCSS", "Bootstrap", "Ajax", "JQuery", "MySQL"],
          image: "/projects/testmaster.png",
          demo: "#",
          github: "#"
        },
        {
          id: "origin-campaign-sites",
          title: "BRAND CAMPAIGN & PRODUCT WEBSITES",
          desc: "A collection of responsive websites and campaigns including Yamaha Revzone, Moveek, Innolux Footwear, NgayDauTien, TuongAn minigame, and Daikin minigame. Converted Figma, Sketch, and Adobe XD designs into semantic interfaces, customized WordPress CMS solutions, optimized assets, implemented SEO and tracking, and delivered smooth UI animations.",
          tech: ["Wordpress", "PHP", "MySQL", "HTML5", "CSS3", "SCSS", "Bootstrap", "JavaScript", "JQuery", "Ajax"],
          image: "/projects/origin-campaign-sites.png",
          demo: "#",
          github: "#"
        }
      ]
    },
    contact: {
      title: "ESTABLISH_CONTACT",
      subtitle: "OPEN SECURE TRANSMISSION CHANNEL",
      form_name: "IDENTIFIER / FULL NAME",
      form_email: "TRANSMISSION SOURCE / EMAIL",
      form_company: "ORGANIZATION (OPTIONAL)",
      form_message: "TRANSMISSION DATA / MESSAGE",
      send_btn: "TRANSMIT MESSAGE",
      sending: "TRANSMITTING...",
      success_msg: "TRANSMISSION RECEIVED. WE WILL RESPOND IN SHORT TIME.",
      error_msg: "TRANSMISSION CORRUPTED. PLEASE RE-ATTEMPT PROTOCOL.",
      socials_title: "DIRECT CONNECTIONS"
    }
  },
  vi: {
    nav: {
      about: 'Giới Thiệu',
      services: 'Dịch Vụ',
      experience: 'Kinh Nghiệm',
      projects: 'Dự Án',
      contact: 'Liên Hệ',
    },
    hero: {
      greet: "ĐANG KHỞI TẠO HỆ THỐNG...",
      tagline: "XÂY DỰNG KHÔNG GIAN SỐ TƯƠNG TÁC CAO, TỐC ĐỘ VƯỢT TRỘI",
      description: "Tôi thiết kế và lập trình các ứng dụng web siêu nhanh, trực quan và ấn tượng. Chuyên môn sâu về React, Next.js, Vue, Nuxt và chuyển động tương tác hiện đại.",
      cta_primary: "XEM DỰ ÁN",
      cta_secondary: "KẾT NỐI NGAY",
      download_cv: "XUẤT FILE CV",
      titles: [
        "KỸ SƯ FRONTEND CẤP CAO",
        "CHUYÊN GIA NEXT.JS / NUXT",
        "NHÀ THIẾT KẾ CHUYỂN ĐỘNG",
        "TỐI ƯU HÓA HIỆU NĂNG WEB"
      ]
    },
    about: {
      title: "THÔNG_TIN // HUY HOÀNG",
      subtitle: "CHUYÊN GIA CÔNG NGHỆ FRONTEND",
      p1: "Frontend Developer với hơn 7 năm kinh nghiệm xây dựng các ứng dụng web hiện đại bằng TypeScript, React.js và Vue.js. Có kinh nghiệm phát triển các hệ thống SaaS, CRM, marketplace và quản lý doanh nghiệp có khả năng mở rộng.",
      p2: "Tập trung mạnh vào kiến trúc frontend, tối ưu hiệu năng và trải nghiệm người dùng, cùng kinh nghiệm mentor, code review và xây dựng các hệ thống frontend dễ bảo trì.",
      stats: {
        experience: "NĂM KINH NGHIỆM",
        projects: "DỰ ÁN ĐÃ TRIỂN KHAI",
        coffee: "TÁCH CÀ PHÊ ĐÃ UỐNG",
        clients: "KHÁCH HÀNG HÀI LÒNG"
      },
      skills_title: "KỸ_NĂNG // GIẢI MÃ"
    },
    services: {
      title: "DỊCH_VỤ // GIAO THỨC",
      subtitle: "CÁC KHẢ NĂNG SỐ CHUYÊN BIỆT",
      figma: {
        title: "FIGMA / PSD SANG MÃ CODE",
        desc: "Chuyển đổi giao diện từ Figma sang mã nguồn HTML/CSS/JS chuẩn hóa, responsive tuyệt đối và tinh tế tới từng pixel."
      },
      performance: {
        title: "TỐI ƯU HÓA HIỆU NĂNG VÀ SEO",
        desc: "Tăng tốc độ tải trang, tối ưu hóa Core Web Vitals và cấu trúc render để đạt điểm số Lighthouse 100/100 tuyệt đối."
      },
      animations: {
        title: "HIỆU ỨNG CHUYỂN ĐỘNG & GSAP",
        desc: "Thổi hồn vào các giao diện tĩnh bằng chuyển động GSAP mượt mà, visualizer trên canvas và các vi tương tác cực kỳ nhạy."
      },
      webapp: {
        title: "ỨNG DỤNG WEB DOANH NGHIỆP",
        desc: "Xây dựng các ứng dụng Next.js và Nuxt quy mô lớn với khả năng quản lý state mạnh mẽ và cấu trúc code vô cùng khoa học."
      }
    },
    timeline: {
      title: "LỘ_TRÌNH // THỜI GIAN",
      subtitle: "NHẬT KÝ CHI TIẾT VỀ QUÁ TRÌNH PHÁT TRIỂN SỰ NGHIỆP",
      present: "HIỆN TẠI",
      jobs: [
        {
          role: "Senior Frontend Developer",
          company: "MC Urban Development Vietnam (Mitsubishi Corporation subsidiary)",
          period: "05/2024 - 03/2026",
          desc: "Phát triển Radanhadat, nền tảng PropTech cho bất động sản, với kiến trúc monorepo, hệ thống component tái sử dụng, Storybook, tracking hành vi người dùng, phân tích dữ liệu trên Grafana, tích hợp AI phân tích tin đăng, thanh toán VNPT ePay, công cụ tính toán tài chính và tối ưu hiệu năng frontend. Mentor junior developers thông qua code review và hướng dẫn kỹ thuật."
        },
        {
          role: "Middle Frontend Developer",
          company: "THE COLLECTIVEC GROUP",
          period: "01/2022 - 05/2024",
          desc: "Phát triển Buho, hệ thống POS và quản lý nhà hàng phục vụ quản lý đơn hàng, lịch bàn, thanh toán, giao hàng và báo cáo kinh doanh. Xây dựng UI component tái sử dụng, tính năng realtime bằng Socket.IO, tích hợp WhatsApp, push notification, đa ngôn ngữ, Stripe payment, Google Maps cho giao hàng, API với backend và các thực hành bảo mật frontend chống XSS/CSRF."
        },
        {
          role: "Web Developer",
          company: "ORIGIN AGENCY CO., LTD",
          period: "03/2017 - 12/2021",
          desc: "Triển khai Testmaster và nhiều website/campaign như Yamaha Revzone, Moveek, Innolux Footwear, NgayDauTien, TuongAn và Daikin. Chuyển thiết kế từ Figma, Sketch, Adobe XD thành giao diện responsive, xây dựng WordPress CMS và tính năng PHP, hỗ trợ luồng quản lý bài test bằng Laravel, tối ưu hiệu năng, triển khai SEO/tracking và phối hợp với designer, backend developer."
        }
      ]
    },
    projects: {
      title: "DỰ_ÁN // THƯ MỤC",
      subtitle: "CÁC HỆ THỐNG MẠNG SỐ ĐÃ TRIỂN KHAI THÀNH CÔNG",
      visit_demo: "TRẢI NGHIỆM",
      github: "XEM MÃ NGUỒN",
      all: "TẤT CẢ DỰ ÁN",
      featured: "DỰ ÁN TIÊU BIỂU",
      items: [
        {
          id: "radanhadat",
          title: "RADANHADAT - NỀN TẢNG PROPTECH",
          desc: "Nền tảng đăng tin bất động sản cho phép người dùng đăng, tìm kiếm và quản lý tin mua bán, cho thuê. Xây dựng kiến trúc monorepo cho planning map, hệ thống component tái sử dụng, tracking hành vi người dùng, AI phân tích tin đăng, thanh toán VNPT ePay, công cụ tính toán tài chính và tối ưu hiệu năng frontend.",
          tech: ["Vue.js", "Nuxt", "React", "TypeScript", "Pinia", "Redux Toolkit", "Tailwind CSS", "Shadcn UI", "ChartJS", "Sentry"],
          image: "/projects/radanhadat.png",
          demo: "#",
          github: "#"
        },
        {
          id: "buho-pos",
          title: "BUHO - HỆ THỐNG POS NHÀ HÀNG",
          desc: "Hệ thống POS và quản lý nhà hàng phục vụ quản lý đơn hàng, lịch bàn, thanh toán, giao hàng và theo dõi hiệu quả kinh doanh. Phát triển UI component tái sử dụng, realtime bằng Socket.IO, tích hợp WhatsApp, push notification, đa ngôn ngữ, Stripe payment, Google Maps và cải thiện bảo mật frontend.",
          tech: ["Vue 2", "Vue 3", "Vuex", "JavaScript", "SCSS", "Socket.IO", "Stripe", "Google Maps", "ChartJS", "LogRocket"],
          image: "/projects/buho.png",
          demo: "#",
          github: "#"
        },
        {
          id: "testmaster",
          title: "TESTMASTER - ỨNG DỤNG LUYỆN THI",
          desc: "Nền tảng luyện thi và quản lý bài test ngôn ngữ, hỗ trợ tạo đề, quản lý nội dung thi, theo dõi tiến độ và mô phỏng trải nghiệm làm bài. Phát triển giao diện responsive từ Figma, phối hợp với backend xây dựng tính năng quản lý bài thi, bảo trì, sửa lỗi và cải tiến tính năng.",
          tech: ["PHP", "Laravel", "JavaScript", "HTML5", "SCSS", "Bootstrap", "Ajax", "JQuery", "MySQL"],
          image: "/projects/testmaster.png",
          demo: "#",
          github: "#"
        },
        {
          id: "origin-campaign-sites",
          title: "WEBSITE SẢN PHẨM & CAMPAIGN THƯƠNG HIỆU",
          desc: "Nhóm website và campaign gồm Yamaha Revzone, Moveek, Innolux Footwear, NgayDauTien, TuongAn minigame và Daikin minigame. Chuyển thiết kế từ Figma, Sketch, Adobe XD thành giao diện semantic responsive, tùy biến WordPress CMS, tối ưu asset, triển khai SEO/tracking và hiệu ứng UI mượt.",
          tech: ["Wordpress", "PHP", "MySQL", "HTML5", "CSS3", "SCSS", "Bootstrap", "JavaScript", "JQuery", "Ajax"],
          image: "/projects/origin-campaign-sites.png",
          demo: "#",
          github: "#"
        }
      ]
    },
    contact: {
      title: "KẾT_NỐI_TÍN_HIỆU",
      subtitle: "MỞ KÊNH TRUYỀN DẪN BẢO MẬT",
      form_name: "ĐỊNH DANH / HỌ VÀ TÊN",
      form_email: "NGUỒN TRUYỀN DẪN / EMAIL",
      form_company: "TỔ CHỨC / CÔNG TY (KHÔNG BẮT BUỘC)",
      form_message: "DỮ LIỆU TRUYỀN / LỜI NHẮN",
      send_btn: "TRUYỀN PHÁT TÍN HIỆU",
      sending: "ĐANG TRUYỀN...",
      success_msg: "ĐÃ TRUYỀN THÀNH CÔNG. CHÚNG TÔI SẼ PHẢN HỒI SỚM NHẤT.",
      error_msg: "LỖI ĐƯỜNG TRUYỀN. VUI LÒNG THỰC HIỆN LẠI GIAO THỨC.",
      socials_title: "KẾT NỐI TRỰC TIẾP"
    }
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Load language from localStorage if available (client-side only)
  useEffect(() => {
    const savedLang = localStorage.getItem('portfolio-lang') as Language;
    if (savedLang === 'en' || savedLang === 'vi') {
      setTimeout(() => {
        setLanguage(savedLang);
      }, 0);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('portfolio-lang', lang);
  };

  const t = (key: string): any => {
    const keys = key.split('.');
    let result: any = translations[language];
    for (const k of keys) {
      if (result && result[k] !== undefined) {
        result = result[k];
      } else {
        return key; // return key as fallback
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
