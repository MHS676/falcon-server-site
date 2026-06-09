import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seed...");

  // Clear existing data
  await prisma.news.deleteMany();
  await prisma.service.deleteMany();
  await prisma.companyInfo.deleteMany();
  console.log("✓ Cleared existing data");

  // ==================== SERVICES ====================
  const services = [
    {
      title: "Close Protection",
      description:
        "Discreet, highly-trained personal protection for executives, VIPs, and high-profile individuals.",
      category: "Physical Protection",
      icon: "🛡️",
    },
    {
      title: "Cash Custodial",
      description: "Secure cash management and custodial services for financial institutions.",
      category: "Cash Management",
      icon: "💰",
    },
    {
      title: "Cash In Transit",
      description: "Armored vehicle transportation for cash and valuable items.",
      category: "Cash Management",
      icon: "🚐",
    },
    {
      title: "Central Monitoring",
      description:
        "24/7 monitoring center for alarm systems, CCTV, and emergency response.",
      category: "Surveillance",
      icon: "📹",
    },
    {
      title: "Electronic Security",
      description:
        "Advanced electronic security systems including alarms, access control, and sensors.",
      category: "Technology",
      icon: "🔐",
    },
    {
      title: "CCTV",
      description: "Closed-circuit television systems for surveillance and monitoring.",
      category: "Surveillance",
      icon: "📷",
    },
    {
      title: "Physical Security",
      description: "On-site security personnel and physical access control systems.",
      category: "Physical Protection",
      icon: "👮",
    },
    {
      title: "Facility Management",
      description:
        "Comprehensive facility management including maintenance and operations.",
      category: "Facility",
      icon: "🏢",
    },
    {
      title: "HR Outsourcing",
      description: "Human resources management and staffing solutions.",
      category: "HR",
      icon: "👥",
    },
    {
      title: "Security Consulting",
      description:
        "Expert security consulting and threat assessment services.",
      category: "Consulting",
      icon: "📊",
    },
    {
      title: "Technical Services",
      description: "Technical support and IT security services.",
      category: "Technology",
      icon: "⚙️",
    },
    {
      title: "Data Archiving",
      description: "Secure data storage and archiving solutions.",
      category: "Technology",
      icon: "💾",
    },
    {
      title: "ATM Cash Management",
      description: "Management and servicing of ATM networks.",
      category: "Cash Management",
      icon: "🏧",
    },
  ];

  const createdServices = await Promise.all(
    services.map((service) =>
      prisma.service.create({
        data: service,
      })
    )
  );
  console.log(`✓ Created ${createdServices.length} services`);

  // ==================== NEWS ====================
  const news = [
    {
      title: "FALCON Family Day 2026: A Day of Joy and Unity",
      content:
        "FALCON Security hosted its annual Family Day featuring cultural performances including song competitions, traditional dance performances, poetry recitations, art exhibitions, kids talent shows, and team sports activities. Over 500 employees and their families celebrated together, strengthening the FALCON family bond.",
      category: "Company",
      image: "/documents/navlink_banner/events/event1.jpeg",
      published: true,
    },
    {
      title: "FALCON & ALSOK Japan Deepen Strategic Partnership",
      content:
        "Building on our existing collaboration, FALCON has signed an expanded agreement with ALSOK Japan to introduce the Premium Security Programme to an additional 500 officers this year.",
      category: "Partnership",
      image: "/documents/navlink_banner/events/event2.jpeg",
      published: true,
    },
    {
      title: "New Advanced Surveillance Technology Deployment",
      content:
        "FALCON announces the deployment of cutting-edge AI-powered surveillance technology across all monitoring centers.",
      category: "Technology",
      image: "/documents/navlink_banner/events/event3.jpeg",
      published: true,
    },
    {
      title: "FALCON Wins Industry Excellence Award 2026",
      content:
        "Recognized for outstanding contributions to security industry standards and professional excellence.",
      category: "Award",
      image: "/documents/navlink_banner/events/event4.jpeg",
      published: true,
    },
    {
      title: "Officer Training Program Expansion",
      content:
        "FALCON launches expanded training program with new curriculum and international certification pathways.",
      category: "Training",
      image: "/documents/navlink_banner/events/event5.jpeg",
      published: true,
    },
    {
      title: "Sustainable Security Practices Initiative",
      content:
        "FALCON commits to implementing eco-friendly practices across all operations and facilities.",
      category: "Operations",
      image: "/documents/navlink_banner/events/event6.jpeg",
      published: true,
    },
    {
      title: "Government Security Standards Compliance Update",
      content:
        "All FALCON operations now meet the latest government security and data protection standards.",
      category: "Government",
      published: false,
    },
    {
      title: "Mobile Security App Launch",
      content:
        "New mobile application provides real-time alerts and security updates to clients.",
      category: "Technology",
      published: true,
    },
    {
      title: "24/7 Central Monitoring Center Enhanced",
      content:
        "Upgraded monitoring infrastructure with AI-powered threat detection and response systems.",
      category: "Operations",
      published: true,
    },
    {
      title: "Community Safety Workshop Series",
      content:
        "FALCON initiates community education programs on personal and home security best practices.",
      category: "Safety",
      published: true,
    },
  ];

  const createdNews = await Promise.all(
    news.map((newsItem) =>
      prisma.news.create({
        data: newsItem,
      })
    )
  );
  console.log(`✓ Created ${createdNews.length} news articles`);

  // ==================== COMPANY INFO ====================
  const companyInfo = {
    name: "FALCON Security",
    phone: "+880-2-9619919",
    email: "info@falconsecurity.bd",
    address: "FALCON Security Headquarters, Dhaka, Bangladesh",
    data: {
      tagline: "Security Systems Consultancy, Planning & Services",
      description:
        "FALCON is a leading security systems company providing comprehensive security solutions.",
      founded: 2001,
      employees: "500+",
      coverage: "Bangladesh & Regions",
      specializations: [
        "Physical Security",
        "Electronic Security",
        "Cash Management",
        "Personnel Protection",
        "Risk Assessment",
      ],
      socialLinks: {
        facebook: "https://www.facebook.com/falconsecurity",
        linkedin: "https://www.linkedin.com/company/falconsecurity",
        youtube: "https://www.youtube.com/@falconsecurity",
      },
      certifications: [
        "ISO 9001:2015",
        "ISO 27001:2022",
        "ISO 45001:2018",
        "Government Certified",
      ],
    },
  };

  const createdCompanyInfo = await prisma.companyInfo.create({
    data: companyInfo,
  });
  console.log("✓ Created company information");

  console.log("\n✅ Database seed completed successfully!");
  console.log(
    `\n📊 Summary:\n  • Services: ${createdServices.length}\n  • News Articles: ${createdNews.length}\n  • Company Info: 1`
  );
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
