import dynamicBC365Logo from '@/assets/Solutions/DynamicBC365.png';
import dynamicCommerce365Logo from '@/assets/Solutions/DynamicCommerce365.png';
import microsoft365Logo from '@/assets/Solutions/Microsoft365.png';
import azureLogo from '@/assets/Solutions/Azure.png';
import powerBILogo from '@/assets/Solutions/PowerBI.png';
import odooSolutionLogo from '@/assets/Solutions/Odoo.png';
import winmaxLogo from '@/assets/Solutions/Winmax.png';
import zohoSolutionLogo from '@/assets/Solutions/Zoho.png';
import sageSolutionLogo from '@/assets/Solutions/Sage.png';
import seamlesshrSolutionLogo from '@/assets/Solutions/Seamlesshr.png';
import workdayLogo from '@/assets/Solutions/Workaday.png';
import bamboohrLogo from '@/assets/Solutions/Bamboohr.png';
import fortinetSolutionLogo from '@/assets/Solutions/Fortinet.png';
import ciscoSolutionLogo from '@/assets/Solutions/Cisco.png';
import checkpointSolutionLogo from '@/assets/Solutions/Checkpoint.png';
import forcepointSolutionLogo from '@/assets/Solutions/forcepoint.png';
import zecurionSolutionLogo from '@/assets/Solutions/Zecurion.png';
import awsSolutionLogo from '@/assets/Solutions/AWS.png';
import huaweiCloudLogo from '@/assets/Solutions/Huawei-Cloud.png';
import iforsLogo from '@/assets/Solutions/Ifors.png';
import tableauLogo from '@/assets/Solutions/Tableau.png';
import eBoardLogo from '@/assets/Solutions/e-Board.png';
import microsoftTeamsLogo from '@/assets/Solutions/Microsoft-teams.png';
import slackLogo from '@/assets/Solutions/Slack.png';
import eazzyrentLogo from '@/assets/Solutions/Eazzyrent.png';
import winguboxLogo from '@/assets/Solutions/Wingubox.png';

export type SolutionProduct = {
  name: string;
  logo: string;
};

export type SolutionCategory = {
  category: string;
  icon: string;
  items: SolutionProduct[];
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'IT Consulting & Strategy', href: '/services' },
      { label: 'Digital Transformation', href: '/services' },
      { label: 'Cloud & Infrastructure', href: '/services' },
      { label: 'Cybersecurity Solutions', href: '/services' },
      { label: 'ERP & Systems Integration', href: '/services' },
      { label: 'Software Development', href: '/services' },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      { label: 'Microsoft Ecosystem', href: '/solutions' },
      { label: 'ERP & Business Apps', href: '/solutions' },
      { label: 'Cybersecurity', href: '/solutions' },
      { label: 'Cloud & Infrastructure', href: '/solutions' },
    ],
  },
  { label: 'Industries', href: '/industries' },
  { label: 'Process', href: '/process' },
  { label: 'Clients', href: '/clients' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

export const services = [
  {
    id: 'it-consulting',
    title: 'IT Consulting & Strategy',
    description: 'We provide strategic IT advisory services to help organizations align technology with business objectives, improving efficiency and performance.',
    image: '/service-consulting.jpg',
    icon: 'Lightbulb',
    href: '/services',
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    description: 'We help organizations modernize through automation, system integration, and process optimization for seamless adoption of digital technologies.',
    image: '/service-digital.jpg',
    icon: 'Cpu',
    href: '/services',
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud & Infrastructure',
    description: 'We design, deploy, and manage secure and scalable cloud environments. From migration to optimization — high availability, performance, and cost efficiency.',
    image: '/service-cloud.jpg',
    icon: 'Cloud',
    href: '/services',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Solutions',
    description: 'We protect organizations against evolving cyber threats through proactive security strategies, risk assessments, and advanced threat detection solutions.',
    image: '/service-security.jpg',
    icon: 'Shield',
    href: '/services',
  },
  {
    id: 'erp-integration',
    title: 'ERP & Systems Integration',
    description: 'We implement and integrate enterprise systems that streamline operations and improve decision-making, connecting people, processes, and data across your organization.',
    image: '/service-erp.jpg',
    icon: 'Database',
    href: '/services',
  },
  {
    id: 'software-development',
    title: 'Software Development',
    description: 'Custom mobile & web applications, SaaS platforms, and data analytics solutions built to address your unique business challenges and fuel growth.',
    image: '/service-software.jpg',
    icon: 'Code',
    href: '/services',
  },
];

export const additionalServices = [
  { id: 'data-analytics', title: 'Data Analytics & Migration', description: 'Transform raw data into actionable insights and seamless data migration services.' },
  { id: 'training', title: 'Training & Support', description: 'Comprehensive training programs and ongoing technical support for your teams.' },
  { id: 'project-management', title: 'Project Management', description: 'Expert project delivery using proven agile methodologies and best practices.' },
  { id: 'hr-payroll', title: 'HR & Payroll Outsourcing', description: 'Streamlined HR and payroll solutions to optimize your workforce management.' },
  { id: 'tax-compliance', title: 'Tax & Compliance Solutions', description: 'Automated tax management and regulatory compliance tools for your business.' },
  { id: 'system-audits', title: 'System Audits', description: 'Thorough IT audits to identify gaps, risks, and optimization opportunities.' },
];

export const whyChooseUs = [
  {
    title: 'African Market Expertise',
    description: 'Deep understanding of unique challenges and opportunities across African markets, with decades of experience and industry best practice knowledge.',
    icon: 'Globe',
  },
  {
    title: 'Strategic Partnerships',
    description: 'We value strategic partnerships and work hard to build strong relationships based on trust, collaboration, and a shared commitment to success.',
    icon: 'Handshake',
  },
  {
    title: 'Scalability & Flexibility',
    description: 'Whether a small startup or large corporation, our services scale to fit your needs and adapt as you grow toward your organizational goals.',
    icon: 'TrendingUp',
  },
  {
    title: 'Customized Solutions',
    description: 'We work closely with clients to understand their business objectives and develop solutions that truly help them achieve those objectives.',
    icon: 'Settings',
  },
];

export const stats = [
  { value: 30, suffix: '+', label: 'Clients Served' },
  { value: 100, suffix: '%', label: 'Client Retention' },
  { value: 40, suffix: '+', label: 'Completed Projects' },
  { value: 60, suffix: '+', label: 'Custom Features' },
  { value: 20, suffix: '+', label: 'Team Members' },
  { value: 10, suffix: '+', label: 'Technology Partners' },
];

export const partners = [
  'ICT Authority',
  'Microsoft',
  'Fortinet',
  'Veeam',
  'Cisco',
  'Odoo',
  'Check Point',
  'SeamlessHR',
  'Forcepoint',
  'Zecurion',
  'Xero',
  'Hewlett Packard Enterprise',
  'AWS',
  'Sage',
  'Huawei',
  'Zoho',
];

export const clients = [
  { name: 'AAR Hospital', industry: 'Healthcare', logo: '/src/assets/Client/AAR.png' },
  { name: '489 Solutions', industry: 'Technology', logo: '/src/assets/Client/489.png' },
  { name: 'BA StreetChild', industry: 'Nonprofit', logo: '/src/assets/Client/BA_StreetChild.png' },
  { name: 'DASA', industry: 'Logistics', logo: '/src/assets/Client/Dasa.png' },
  { name: 'Aone Kitchen', industry: 'Hospitality', logo: '/src/assets/Client/aonekitchen.png' },
  { name: 'BasiGo', industry: 'Technology', logo: '/src/assets/Client/basigo.png' },
  { name: 'Boliba Savings', industry: 'Financial Services', logo: '/src/assets/Client/bolibasavings.png' },
  { name: 'Boresha SACCO', industry: 'Financial Services', logo: '/src/assets/Client/boresha-sacco.png' },
  { name: 'Cake City', industry: 'Retail', logo: '/src/assets/Client/cakecity.png' },
  { name: 'Eldowas', industry: 'Utilities', logo: '/src/assets/Client/eldowas.png' },
  { name: 'Hazina SACCO', industry: 'Financial Services', logo: '/src/assets/Client/hazina-sacco.png' },
  { name: 'Larry Madowo', industry: 'Media', logo: '/src/assets/Client/larry.png' },
  { name: 'Mwalimu National', industry: 'Financial Services', logo: '/src/assets/Client/mwalimu-national.png' },
  { name: 'QONA', industry: 'Fintech', logo: '/src/assets/Client/qona.png' },
  { name: 'RBA', industry: 'Government', logo: '/src/assets/Client/retirement-benefits.png' },
  { name: 'Rolling Cargo', industry: 'Transportation', logo: '/src/assets/Client/rolling-cargo.png' },
  { name: 'Sheria SACCO', industry: 'Financial Services', logo: '/src/assets/Client/sheria-sacco.png' },
  { name: 'Sole Luna', industry: 'Hospitality', logo: '/src/assets/Client/sole_luna.png' },
  { name: 'Steel & Tube', industry: 'Manufacturing', logo: '/src/assets/Client/steelandtube.png' },
  { name: 'Tropekal Brands', industry: 'Consumer Goods', logo: '/src/assets/Client/tropical.png' },
  { name: 'VNS Group', industry: 'Professional Services', logo: '/src/assets/Client/vns_logo.png' },
  { name: 'YD Agency', industry: 'Creative', logo: '/src/assets/Client/yd-agency.png' },
];

export const testimonials = [
  {
    id: 'testimonial-1',
    quote: 'Dynatrix transformed our entire IT infrastructure. Their expertise in cloud migration and cybersecurity has been invaluable to our operations across Africa.',
    author: 'James Mwangi',
    title: 'CTO',
    company: 'Bolba SACCO',
    rating: 5,
    image: '/service-software.jpg',
    message: 'Dynatrix transformed our entire IT infrastructure. Their expertise in cloud migration and cybersecurity has been invaluable to our operations across Africa.',
    name: 'James Mwangi — CTO, Bolba SACCO',
  },
  {
    id: 'testimonial-2',
    quote: 'Working with Dynatrix on our ERP implementation was seamless. They understood our unique requirements and delivered beyond expectations with professionalism.',
    author: 'Dr. Sarah Ochieng',
    title: 'Director of Operations',
    company: 'AAR Hospital',
    rating: 5,
    image: '/service-consulting.jpg',
    message: 'Working with Dynatrix on our ERP implementation was seamless. They understood our unique requirements and delivered beyond expectations with professionalism.',
    name: 'Dr. Sarah Ochieng — Director of Operations, AAR Hospital',
  },
  {
    id: 'testimonial-3',
    quote: 'The team at Dynatrix brings a rare combination of technical excellence and deep understanding of the African business landscape. Truly a world-class partner.',
    author: 'Peter Kamau',
    title: 'Head of IT',
    company: 'Steel & Tube',
    rating: 5,
    image: '/service-digital.jpg',
    message: 'The team at Dynatrix brings a rare combination of technical excellence and deep understanding of the African business landscape. Truly a world-class partner.',
    name: 'Peter Kamau — Head of IT, Steel & Tube',
  },
];

export const industries = [
  'Banking & Capital Markets',
  'Consumer Goods',
  'Professional Services',
  'Retail',
  'Manufacturing',
  'Telecommunications',
  'Agriculture',
  'Media & Entertainment',
  'Pharmaceuticals',
  'Insurance',
  'Education',
  'Travel & Transportation',
  'Automotive',
  'Healthcare',
  'Energy',
  'Nonprofit',
  'Government',
  'Real Estate',
];

/** Market share breakdown from Dynatrix business profile */
export const industryMarketShare = [
  { name: 'Manufacturing', value: 10, color: '#4472C4' },
  { name: 'Telecommunications', value: 6, color: '#A5A5A5' },
  { name: 'Agriculture', value: 5, color: '#E7A6BD' },
  { name: 'Forestry and Fishing', value: 3, color: '#843C0C' },
  { name: 'Media & Entertainment', value: 4, color: '#7030A0' },
  { name: 'Pharmaceuticals', value: 5, color: '#C00000' },
  { name: 'Insurance', value: 6, color: '#548235' },
  { name: 'Education', value: 5, color: '#ED7D31' },
  { name: 'Travel & Transportation', value: 4, color: '#1F4E79' },
  { name: 'Automotive', value: 7, color: '#5B9BD5' },
  { name: 'Healthcare', value: 5, color: '#9BBB59' },
  { name: 'Energy', value: 6, color: '#7F7F7F' },
  { name: 'Nonprofit', value: 4, color: '#F4B183' },
  { name: 'Government', value: 5, color: '#BF8F00' },
  { name: 'Banking & Capital Markets', value: 9, color: '#9966FF' },
  { name: 'Consumer Goods', value: 6, color: '#FF5050' },
  { name: 'Professional Services', value: 7, color: '#00B050' },
  { name: 'Retail', value: 8, color: '#FFC000' },
];

export const solutions: SolutionCategory[] = [
  {
    category: 'Microsoft Ecosystem',
    icon: 'Monitor',
    items: [
      { name: 'Dynamics 365 Business Central', logo: dynamicBC365Logo },
      { name: 'Dynamics 365 Commerce', logo: dynamicCommerce365Logo },
      { name: 'Microsoft 365', logo: microsoft365Logo },
      { name: 'Azure', logo: azureLogo },
      { name: 'Power BI', logo: powerBILogo },
    ],
  },
  {
    category: 'ERP & Business Apps',
    icon: 'Database',
    items: [
      { name: 'ODOO', logo: odooSolutionLogo },
      { name: 'WinMax', logo: winmaxLogo },
      { name: 'Zoho', logo: zohoSolutionLogo },
      { name: 'Sage Intacct', logo: sageSolutionLogo },
    ],
  },
  {
    category: 'HR Tech',
    icon: 'Users',
    items: [
      { name: 'SeamlessHR', logo: seamlesshrSolutionLogo },
      { name: 'Workday', logo: workdayLogo },
      { name: 'BambooHR', logo: bamboohrLogo },
    ],
  },
  {
    category: 'Cybersecurity',
    icon: 'Shield',
    items: [
      { name: 'Fortinet', logo: fortinetSolutionLogo },
      { name: 'Cisco', logo: ciscoSolutionLogo },
      { name: 'Check Point', logo: checkpointSolutionLogo },
      { name: 'Forcepoint', logo: forcepointSolutionLogo },
      { name: 'Zecurion', logo: zecurionSolutionLogo },
    ],
  },
  {
    category: 'Cloud & Infrastructure',
    icon: 'Cloud',
    items: [
      { name: 'AWS', logo: awsSolutionLogo },
      { name: 'Microsoft Azure', logo: azureLogo },
      { name: 'Huawei Cloud', logo: huaweiCloudLogo },
    ],
  },
  {
    category: 'Data & BI',
    icon: 'BarChart3',
    items: [
      { name: 'Power BI', logo: powerBILogo },
      { name: 'IFORS', logo: iforsLogo },
      { name: 'Tableau', logo: tableauLogo },
    ],
  },
  {
    category: 'Collaboration',
    icon: 'MessageSquare',
    items: [
      { name: 'eBoard Meetings', logo: eBoardLogo },
      { name: 'Microsoft Teams', logo: microsoftTeamsLogo },
      { name: 'Slack', logo: slackLogo },
    ],
  },
  {
    category: 'Fintech',
    icon: 'CreditCard',
    items: [
      { name: 'EazzyRent', logo: eazzyrentLogo },
      { name: 'Wingubox', logo: winguboxLogo },
    ],
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Understand business goals, challenges, and technical requirements through in-depth consultation and analysis.',
    color: 'teal',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Develop a tailored solution architecture and implementation roadmap aligned with your business objectives.',
    color: 'navy',
  },
  {
    number: '03',
    title: 'Deliver',
    description: 'Execute with precision, transparency, and continuous communication throughout the entire project lifecycle.',
    color: 'orange',
  },
  {
    number: '04',
    title: 'Debrief',
    description: 'Evaluate performance, outcomes, and client satisfaction to ensure project success and mutual learning.',
    color: 'teal',
  },
  {
    number: '05',
    title: 'Develop',
    description: 'Continuously optimize and improve solutions to keep your technology at peak performance and ahead of change.',
    color: 'navy',
  },
];

export const agilePhases = [
  { name: 'Scope', description: 'Define project scope and objectives' },
  { name: 'Evaluate', description: 'Assess requirements and feasibility' },
  { name: 'Define', description: 'Create detailed specifications' },
  { name: 'Develop', description: 'Build and iterate on solutions' },
];

export const blogPosts = [
  {
    id: 'digital-transformation-2024',
    title: 'Digital Transformation Trends Shaping African Business in 2025',
    excerpt: 'Explore the key digital transformation trends that are reshaping how African enterprises operate and compete globally.',
    category: 'Digital Transformation',
    date: '2025-03-15',
    author: 'Dynatrix Team',
    image: '/service-digital.jpg',
  },
  {
    id: 'erp-best-practices',
    title: 'ERP Implementation Best Practices for Mid-Size Organizations',
    excerpt: 'Learn the proven strategies for successful ERP implementation that minimizes disruption and maximizes ROI across Africa.',
    category: 'ERP Tips',
    date: '2025-03-10',
    author: 'Dynatrix Team',
    image: '/service-erp.jpg',
  },
  {
    id: 'cybersecurity-africa',
    title: 'Cybersecurity Threats Facing African Enterprises in 2025',
    excerpt: 'An in-depth analysis of the evolving cybersecurity landscape and how organizations can protect themselves effectively.',
    category: 'Cybersecurity',
    date: '2025-03-05',
    author: 'Dynatrix Team',
    image: '/service-security.jpg',
  },
  {
    id: 'cloud-migration-guide',
    title: 'The Complete Guide to Cloud Migration for African Businesses',
    excerpt: 'A comprehensive roadmap for organizations looking to transition their infrastructure to the cloud with minimal disruption.',
    category: 'Cloud Migration',
    date: '2025-02-28',
    author: 'Dynatrix Team',
    image: '/service-cloud.jpg',
  },
  {
    id: 'african-tech-ecosystem',
    title: "The Rise of Africa's Tech Ecosystem: Opportunities and Challenges",
    excerpt: 'How the African technology landscape is evolving and what it means for businesses across the continent.',
    category: 'African Tech',
    date: '2025-02-20',
    author: 'Dynatrix Team',
    image: '/service-software.jpg',
  },
  {
    id: 'data-driven-decisions',
    title: 'Leveraging Data Analytics for Competitive Advantage',
    excerpt: 'How organizations can use data analytics to drive better business decisions and improve operational efficiency.',
    category: 'Data Analytics',
    date: '2025-02-15',
    author: 'Dynatrix Team',
    image: '/service-consulting.jpg',
  },
];

export const coreValues = [
  {
    title: 'Integrity',
    description: 'We uphold transparency, ethics, and accountability in all engagements with clients and partners.',
    icon: 'Award',
  },
  {
    title: 'Customer Centricity',
    description: 'We design solutions tailored to each client\'s specific business needs and long-term objectives.',
    icon: 'Heart',
  },
  {
    title: 'Innovation',
    description: 'We leverage emerging technologies to deliver forward-thinking solutions for complex business problems.',
    icon: 'Zap',
  },
  {
    title: 'Excellence',
    description: 'We are committed to delivering high-quality, reliable solutions that exceed client expectations.',
    icon: 'Star',
  },
  {
    title: 'Collaboration',
    description: 'We partner closely with clients to achieve impactful, sustainable outcomes that drive real growth.',
    icon: 'Users',
  },
];

export const companyInfo = {
  name: 'Dynatrix Consulting Ltd',
  shortName: 'Dynatrix',
  tagline: 'Crafting Solutions. Engineering Success.',
  description: 'Leading IT Consulting & Digital Transformation Partner Across Africa',
  vision: 'To be the preferred IT consulting and digital transformation partner across Africa, empowering organizations with cutting-edge technology to achieve sustainable growth and global competitiveness.',
  mission: 'To deliver innovative, secure, and scalable technology solutions that enable organizations to unlock their full potential through efficiency, resilience, and digital excellence.',
  founded: '2021',
  address: 'Cassia Court Complex, Kiambere Road, Upperhill, Nairobi, Kenya',
  phone: '+254 735 295 050',
  email: 'consulting@dynatrix.co.ke',
  website: 'dynatrix.co.ke',
  hours: {
    weekday: 'Mon - Fri: 8:00am - 5:30pm',
    saturday: 'Saturday: 9:00am - 1:00pm',
    sunday: 'Sunday & Public Holidays: Closed',
  },
  social: {
    linkedin: 'https://linkedin.com/company/dynatrix',
    twitter: 'https://twitter.com/dynatrix',
    facebook: 'https://facebook.com/dynatrix',
  },
};
