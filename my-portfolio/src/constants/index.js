import {
  mobile, backend, creator, web, javascript, typescript, html, css,
  reactjs, tailwind, nodejs, git, docker, threejs,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Data Engineering", icon: backend },
  { title: "Applied AI & Evaluation", icon: creator },
  { title: "Geospatial Systems", icon: mobile },
  { title: "Full-Stack Development", icon: web },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "Git", icon: git },
  { name: "Docker", icon: docker },
];

const experiences = [
  {
    title: "Geospatial & Data Engineering",
    company_name: "NYC Department of Transportation",
    icon: backend,
    iconBg: "#182f40",
    date: "Internship",
    points: [
      "Worked with Python, ArcPy and spatial datasets to support transportation workflows.",
      "Helped migrate GIS processing to ArcGIS Pro and maintain interactive mapping tools.",
    ],
  },
  {
    title: "AI Evaluation",
    company_name: "Snorkel AI",
    icon: creator,
    iconBg: "#182f40",
    date: "Professional experience",
    points: [
      "Contributed to AI evaluation work and practical quality-review workflows.",
      "Focused on clear, testable outputs rather than unsupported model performance claims.",
    ],
  },
  {
    title: "Graduate Computer Science",
    company_name: "College of Staten Island (CUNY)",
    icon: web,
    iconBg: "#182f40",
    date: "M.S. studies",
    points: [
      "Studying natural language processing, advanced operating systems and smart-city simulation.",
      "Building research projects that combine implementation with reproducible experiments.",
    ],
  },
  {
    title: "Collaborative Full-Stack Development",
    company_name: "Nature's Call / Tech Talent Pipeline",
    icon: mobile,
    iconBg: "#182f40",
    date: "Team project and training",
    points: [
      "Collaborated on a location-based public bathroom finder with React, Express and PostgreSQL.",
      "Worked on API routes, application data and ongoing security improvements.",
    ],
  },
];

// This portfolio intentionally does not publish the starter template's
// invented endorsements. Add testimonials only with real permission.
const testimonials = [];

const projects = [
  {
    name: "Process-Pilot",
    description: "Deterministic FCFS and Round Robin CPU scheduling simulator with validated requests and regression tests.",
    tags: [{ name: "typescript", color: "blue-text-gradient" }, { name: "nextjs", color: "green-text-gradient" }],
    source_code_link: "https://github.com/rainrunner20/Process-Pilot",
  },
  {
    name: "IceBrAIker",
    description: "Networking conversation-starter interface with a Flask API and an explicitly fictional offline demo.",
    tags: [{ name: "react", color: "blue-text-gradient" }, { name: "flask", color: "green-text-gradient" }],
    source_code_link: "https://github.com/rainrunner20/IceBrAIker",
  },
  {
    name: "TweetInsights",
    description: "Offline social-topic trend analysis with UTC window comparison, JSON exports and a visual HTML report.",
    tags: [{ name: "python", color: "blue-text-gradient" }, { name: "analytics", color: "pink-text-gradient" }],
    source_code_link: "https://github.com/rainrunner20/TweetInsights",
  },
  {
    name: "NYC Coordinate Reprojector",
    description: "Tested CSV/XLSX workflow that converts WGS84 coordinate columns to EPSG:2263 projected X/Y.",
    tags: [{ name: "gis", color: "green-text-gradient" }, { name: "python", color: "blue-text-gradient" }],
    source_code_link: "https://github.com/rainrunner20/NYC-DOT-OpenData-Coordinate-Reprojector",
  },
  {
    name: "Nature's Call",
    description: "Team-built NYC bathroom finder with map, reviews and account-management source code.",
    tags: [{ name: "react", color: "blue-text-gradient" }, { name: "postgresql", color: "green-text-gradient" }],
    source_code_link: "https://github.com/rainrunner20/Natures-Call",
  },
  {
    name: "Sensor Forecasting",
    description: "Reproducible five-minute sensor forecast benchmark against a persistence baseline; not a flood alert service.",
    tags: [{ name: "scikit-learn", color: "blue-text-gradient" }, { name: "evaluation", color: "pink-text-gradient" }],
    source_code_link: "https://github.com/rainrunner20/flood-prediction-nyc-",
  },
];

export { services, technologies, experiences, testimonials, projects };
