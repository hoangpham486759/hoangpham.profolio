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
      p1: "A passionate Software Engineer with over 5 years of experience architecting high-performance client-side architectures. I thrive at the intersection of pixel-perfect precision and high-performance engineering.",
      p2: "My mission is to eliminate lag, optimize core web vitals, and craft breathtaking interactive interfaces that leave a lasting impression. No cookie-cutter designs, just pure crafted digital art.",
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
          role: "Senior Frontend Engineer / Tech Lead",
          company: "Nexus Tech Solutions",
          period: "2024 - Present",
          desc: "Leading a team of 6 engineers building an advanced SaaS data platform. Overhauled the rendering engine in Nuxt 3, speeding up load times by 42%. Established strict TS type safety protocols."
        },
        {
          role: "Frontend Engineer Specialists",
          company: "Cyberspace Agency",
          period: "2022 - 2024",
          desc: "Created highly interactive marketing campaigns and complex 3D dashboards for global enterprise clients using React, GSAP, and Three.js. Standardized components saving 30+ development hours per project."
        },
        {
          role: "Web Application Developer",
          company: "Sota Software",
          period: "2021 - 2022",
          desc: "Architected modern responsive SPAs with Vue.js, Tailwind CSS, and Vuex. Collaborated with UI designers to implement pixel-perfect layouts and robust form handling integrations."
        },
        {
          role: "Junior Frontend Developer",
          company: "Alpha Digital",
          period: "2020 - 2021",
          desc: "Developed responsive websites, optimized layouts, and automated email campaign systems using Javascript, React, and Sass. Coordinated closely with backend team for RESTful API connections."
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
          id: "cyber-dash",
          title: "NEO-TOKYO DASHBOARD",
          desc: "A futuristic real-time metrics visualizer with heavy WebGL grid aesthetics, audio synthesis, and interactive widgets. Highly optimized for high-refresh-rate displays.",
          tech: ["React", "Next.js", "GSAP", "Tailwind CSS"],
          image: "https://picsum.photos/seed/cyberdash/800/500",
          demo: "https://example.com",
          github: "https://github.com"
        },
        {
          id: "nuxt-ecommerce",
          title: "QUANTUM COMMERCE ENGINE",
          desc: "A lightning-fast, SSR-powered storefront. Integrates state management, dynamic checkout pipelines, and complex localized multi-currency filters.",
          tech: ["Nuxt", "Vue 3", "Pinia", "Tailwind CSS"],
          image: "https://picsum.photos/seed/quantumecom/800/500",
          demo: "https://example.com",
          github: "https://github.com"
        },
        {
          id: "motion-canvas",
          title: "GRAVITY VECTOR CANVAS",
          desc: "An experimental 2D/3D physics-based interactive layout designed to showcase micro-animations, custom shaders, and responsive mouse gestures.",
          tech: ["TypeScript", "GSAP", "HTML5 Canvas"],
          image: "https://picsum.photos/seed/gravityvector/800/500",
          demo: "https://example.com",
          github: "https://github.com"
        },
        {
          id: "saas-analytics",
          title: "SYNAPSE DATA TERMINAL",
          desc: "Enterprise intelligence panel featuring rich custom charts, instant multi-tier filtering, secure OAuth gatekeeping, and heavy-duty data sheets.",
          tech: ["Next.js", "TypeScript", "Recharts", "Shadcn UI"],
          image: "https://picsum.photos/seed/synapsedata/800/500",
          demo: "https://example.com",
          github: "https://github.com"
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
      p1: "Một kỹ sư phần mềm tràn đầy nhiệt huyết với hơn 5 năm kinh nghiệm xây dựng các kiến trúc giao diện hiệu năng cao. Tôi hoạt động tại điểm giao thoa giữa độ chính xác tuyệt đối (pixel-perfect) và tối ưu hóa hệ thống.",
      p2: "Sứ mệnh của tôi là loại bỏ độ trễ, tối ưu hóa các chỉ số Core Web Vitals và thiết kế các giao diện tương tác đỉnh cao, để lại ấn tượng sâu sắc. Không rập khuôn, chỉ có nghệ thuật số được mài dũa công phu.",
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
          role: "Kỹ Sư Frontend Cấp Cao / Tech Lead",
          company: "Nexus Tech Solutions",
          period: "2024 - Hiện tại",
          desc: "Dẫn dắt đội ngũ 6 kỹ sư xây dựng nền tảng SaaS phân tích dữ liệu lớn. Tái cấu trúc công cụ hiển thị bằng Nuxt 3, tăng 42% tốc độ tải trang. Thiết lập các giao thức an toàn kiểu dữ liệu TypeScript nghiêm ngặt."
        },
        {
          role: "Chuyên Gia Phát Triển Frontend",
          company: "Cyberspace Agency",
          period: "2022 - 2024",
          desc: "Xây dựng các chiến dịch marketing tương tác cao và dashboard 3D phức tạp cho các khách hàng tập đoàn toàn cầu bằng React, GSAP, và Three.js. Chuẩn hóa thư viện component giúp tiết kiệm 30+ giờ phát triển mỗi dự án."
        },
        {
          role: "Lập Trình Viên Ứng Dụng Web",
          company: "Sota Software",
          period: "2021 - 2022",
          desc: "Kiến trúc các ứng dụng đơn trang (SPA) hiện đại sử dụng Vue.js, Tailwind CSS và Vuex. Cộng tác chặt chẽ với đội ngũ UI/UX để hiện thực hóa các bản thiết kế chuẩn xác tới từng pixel."
        },
        {
          role: "Lập Trình Viên Frontend Sơ Cấp",
          company: "Alpha Digital",
          period: "2020 - 2021",
          desc: "Xây dựng giao diện responsive, tối ưu hóa layout và tích hợp hệ thống gửi email tự động bằng Javascript, React, và Sass. Phối hợp với đội ngũ backend để tích hợp RESTful API mượt mà."
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
          id: "cyber-dash",
          title: "DASHBOARD NEO-TOKYO",
          desc: "Bảng điều khiển chỉ số tương lai thời gian thực với phong cách lưới WebGL, âm thanh tổng hợp và các widget tương tác. Tối ưu cực cao cho màn hình tần số quét lớn.",
          tech: ["React", "Next.js", "GSAP", "Tailwind CSS"],
          image: "https://picsum.photos/seed/cyberdash/800/500",
          demo: "https://example.com",
          github: "https://github.com"
        },
        {
          id: "nuxt-ecommerce",
          title: "CÔNG CỤ THƯƠNG MẠI QUANTUM",
          desc: "Trang thương mại điện tử siêu nhanh được render phía server (SSR). Tích hợp quản lý giỏ hàng, quy trình thanh toán động và bộ lọc đa tiền tệ bản địa hóa phức tạp.",
          tech: ["Nuxt", "Vue 3", "Pinia", "Tailwind CSS"],
          image: "https://picsum.photos/seed/quantumecom/800/500",
          demo: "https://example.com",
          github: "https://github.com"
        },
        {
          id: "motion-canvas",
          title: "BẢN VẼ TRỌNG LỰC VECTOR",
          desc: "Giao diện thử nghiệm tương tác dựa trên vật lý 2D/3D, được thiết kế để trình diễn các vi chuyển động, shader tùy chỉnh và cử chỉ chuột phản hồi nhanh chóng.",
          tech: ["TypeScript", "GSAP", "HTML5 Canvas"],
          image: "https://picsum.photos/seed/gravityvector/800/500",
          demo: "https://example.com",
          github: "https://github.com"
        },
        {
          id: "saas-analytics",
          title: "CỔNG DỮ LIỆU THẦN KINH SYNAPSE",
          desc: "Bảng phân tích thông tin doanh nghiệp sở hữu các biểu đồ tùy chỉnh phong phú, bộ lọc phân tầng tức thì, bảo mật OAuth và hệ thống bảng dữ liệu tải trọng lớn.",
          tech: ["Next.js", "TypeScript", "Recharts", "Shadcn UI"],
          image: "https://picsum.photos/seed/synapsedata/800/500",
          demo: "https://example.com",
          github: "https://github.com"
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
