export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string[];
  category: string;
  image: string;
  clientName?: string;
  completionDate?: string;
  tags: string[];
  features?: string[];
  gallery?: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

export const projects: Project[] = [
  {
    id: "smart-city-monitoring",
    title: "Smart City Monitoring Platform",
    description:
      "An IoT-based monitoring system for urban infrastructure that helps city administrators track and manage resources efficiently.",
    fullDescription: [
      "The Smart City Monitoring Platform is a comprehensive solution designed to help city administrators efficiently manage urban infrastructure and resources. By leveraging IoT sensors, real-time data analytics, and an intuitive dashboard, the platform provides valuable insights into various aspects of city operations.",
      "Our team developed a scalable architecture that can handle thousands of connected devices, process massive amounts of data, and present actionable information through customizable visualization tools. The solution includes mobile applications for field workers, a web dashboard for administrators, and robust APIs for integration with existing city systems.",
    ],
    category: "IoT Solutions",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
    clientName: "Metropolis City Council",
    completionDate: "October 2023",
    tags: ["IoT", "Smart City", "Real-time Analytics", "Dashboard"],
    features: [
      "Real-time monitoring of urban infrastructure",
      "Predictive maintenance alerts", 
      "Resource utilization tracking",
      "Interactive dashboard with customizable widgets",
      "Mobile application for field workers",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
      "https://images.unsplash.com/photo-1444723121867-7a241cacace9",
    ],
    testimonial: {
      quote:
        "The monitoring platform has revolutionized how we manage city resources. We've seen a 30% reduction in maintenance costs and significantly improved response times to infrastructure issues.",
      author: "Jane Smith",
      position: "Chief Technology Officer, Metropolis City Council",
    },
  },
  {
    id: "renewable-energy-management",
    title: "Renewable Energy Management System",
    description:
      "A comprehensive system for monitoring and optimizing energy production from solar panels and wind turbines for maximum efficiency.",
    fullDescription: [
      "The Renewable Energy Management System is designed to help renewable energy providers monitor, analyze, and optimize their energy production. The solution integrates with various types of solar panels and wind turbines to collect performance data and provide insights for maximizing efficiency.",
      "Our development team created a sophisticated system that uses machine learning algorithms to predict energy production based on weather forecasts, historical data, and equipment performance. The platform enables energy providers to make data-driven decisions about maintenance scheduling, capacity planning, and grid integration.",
    ],
    category: "Energy",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7",
    clientName: "GreenPower Solutions",
    completionDate: "July 2023",
    tags: ["Renewable Energy", "Monitoring", "Analytics", "Optimization"],
    features: [
      "Real-time energy production monitoring",
      "Predictive analytics for output forecasting",
      "Equipment health monitoring and alerts",
      "Performance comparison across sites",
      "Automatic reporting and insights",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276",
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9",
    ],
    testimonial: {
      quote:
        "This management system has helped us increase our energy production efficiency by 15% while reducing maintenance costs significantly. The predictive capabilities are incredibly valuable for our operations.",
      author: "Michael Johnson",
      position: "Operations Director, GreenPower Solutions",
    },
  },
  {
    id: "healthcare-analytics-platform",
    title: "Healthcare Analytics Platform",
    description:
      "An advanced analytics platform for healthcare providers that uses AI to improve patient outcomes and operational efficiency.",
    fullDescription: [
      "The Healthcare Analytics Platform is a sophisticated solution that combines electronic health records, operational data, and predictive analytics to help healthcare providers improve patient care and operational efficiency. The platform securely processes and analyzes sensitive healthcare data to generate actionable insights.",
      "Our team developed this HIPAA-compliant platform with advanced security features, real-time analytics capabilities, and intuitive visualization tools. The solution integrates with existing healthcare systems and uses machine learning to identify patterns, predict patient needs, and optimize resource allocation.",
    ],
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f",
    clientName: "Regional Health Network",
    completionDate: "March 2023",
    tags: [
      "Healthcare",
      "Analytics",
      "AI",
      "Machine Learning",
      "Data Security",
    ],
    features: [
      "Secure patient data analytics",
      "Predictive patient outcome modeling",
      "Resource utilization optimization",
      "Automated regulatory compliance reporting",
      "Physician performance insights",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
    ],
    testimonial: {
      quote:
        "This analytics platform has transformed our approach to patient care. We've seen reduced readmission rates and improved resource allocation, leading to better outcomes and cost savings.",
      author: "Dr. Sarah Williams",
      position: "Chief Medical Officer, Regional Health Network",
    },
  },
  {
    id: "supply-chain-optimization",
    title: "Supply Chain Optimization System",
    description:
      "A blockchain-based supply chain management system that increases transparency, reduces fraud, and improves efficiency.",
    fullDescription: [
      "The Supply Chain Optimization System leverages blockchain technology to create a transparent, secure, and efficient supply chain management solution. The system tracks products from manufacturer to consumer, providing real-time visibility and verification at every step of the process.",
      "Our development team created a distributed ledger solution that integrates with existing ERP systems, IoT sensors, and logistics platforms to provide end-to-end supply chain visibility. The platform includes smart contracts for automated compliance and payment processing, reducing administrative overhead and preventing fraud.",
    ],
    category: "Blockchain",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3",
    clientName: "Global Logistics Corporation",
    completionDate: "December 2022",
    tags: ["Blockchain", "Supply Chain", "Logistics", "Transparency"],
    features: [
      "End-to-end product tracking and verification",
      "Smart contracts for automated compliance",
      "Real-time inventory and logistics monitoring",
      "Fraud detection and prevention",
      "Supplier performance analytics",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec",
    ],
    testimonial: {
      quote:
        "This blockchain solution has revolutionized our supply chain operations. We've reduced costs by 20%, virtually eliminated fraud cases, and significantly improved customer trust in our products.",
      author: "Robert Chen",
      position: "Supply Chain Director, Global Logistics Corporation",
    },
  },
  {
    id: "virtual-classroom-platform",
    title: "Virtual Classroom Platform",
    description:
      "An interactive e-learning platform that provides immersive educational experiences through virtual reality and gamification.",
    fullDescription: [
      "The Virtual Classroom Platform is an innovative e-learning solution that combines virtual reality, gamification, and collaborative tools to create engaging educational experiences. The platform supports various learning styles and enables educators to create interactive content that keeps students motivated and improves knowledge retention.",
      "Our team developed this comprehensive platform with features like 3D virtual environments, real-time collaboration tools, progress tracking, and adaptive learning paths. The solution includes both web and VR interfaces, making it accessible to students regardless of their available technology.",
    ],
    category: "Education",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
    clientName: "National Education Association",
    completionDate: "August 2022",
    tags: ["Education", "Virtual Reality", "E-Learning", "Gamification"],
    features: [
      "Immersive 3D learning environments",
      "Real-time collaboration between students and teachers",
      "Interactive assignments and assessments",
      "Adaptive learning paths based on student performance",
      "Comprehensive analytics for educators",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    ],
    testimonial: {
      quote:
        "This platform has transformed how we deliver education. Student engagement has increased dramatically, and we're seeing measurable improvements in test scores and knowledge retention.",
      author: "Dr. Emily Rodriguez",
      position:
        "Director of Educational Technology, National Education Association",
    },
  },
  {
    id: "financial-fraud-detection",
    title: "Financial Fraud Detection System",
    description:
      "An AI-powered system that detects fraudulent transactions in real-time, helping financial institutions protect their customers.",
    fullDescription: [
      "The Financial Fraud Detection System is a sophisticated solution that uses artificial intelligence and machine learning to identify suspicious financial transactions in real-time. The system analyzes transaction patterns, user behavior, and other relevant data points to flag potential fraud with high accuracy.",
      "Our development team built this system with state-of-the-art anomaly detection algorithms, behavior analysis capabilities, and a flexible rule engine that adapts to new fraud patterns. The solution integrates seamlessly with existing banking systems and provides intuitive tools for fraud investigators to review and resolve alerts.",
    ],
    category: "Fintech",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    clientName: "Secure Banking Alliance",
    completionDate: "May 2022",
    tags: ["Fintech", "Fraud Detection", "AI", "Machine Learning", "Security"],
    features: [
      "Real-time transaction monitoring and analysis",
      "Machine learning models for fraud pattern recognition",
      "Behavioral biometrics for user verification",
      "Case management system for fraud investigators",
      "Regulatory compliance reporting",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0",
      "https://images.unsplash.com/photo-1559526324-593bc073d938",
    ],
    testimonial: {
      quote:
        "Since implementing this fraud detection system, we've reduced fraudulent transactions by 83% and saved millions in potential losses. The system's accuracy has also reduced false positives, improving customer experience.",
      author: "Thomas Wilson",
      position: "Chief Security Officer, Secure Banking Alliance",
    },
  },
];
