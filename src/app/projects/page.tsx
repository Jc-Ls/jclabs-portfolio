import React from 'react';
import { ProjectCard } from '@/components/ProjectCard';

const myProjects = [
  { title: "Wedding-OS", category: "Event Tech", status: "BETA", description: "Comprehensive digital operating system for modern event planning." },
  { title: "Quickserve App", category: "Logistics", status: "ACTIVE", description: "Streamlined delivery and service management for fast-paced logistics." },
  { title: "TrustRelay", category: "Fintech", status: "ACTIVE", description: "Secure escrow and financial relay protocols for digital commerce." },
  { title: "Dispatchr", category: "Fleet Mgmt", status: "ACTIVE", description: "Real-time tracking and automated dispatching for large-scale operations." },
  { title: "Al-Kawthar", category: "Education", status: "ACTIVE", description: "Interactive Holy Quran learning platform with scalable architecture." },
  { title: "Ilorin Auto Fest", category: "Events", status: "COMPLETED", description: "The premier digital gateway for the Ilorin Automotive Festival." },
  { title: "Araba 2027", category: "Public Sector", status: "STRATEGIC", description: "Modernizing public sector digital roadmaps and service delivery." },
  { title: "HennaByKawthar", category: "E-commerce", status: "ACTIVE", description: "Premium beauty art experience and e-commerce platform." },
  { title: "Beacon-Hub", category: "Content", status: "ACTIVE", description: "High-performance blogging and community engagement ecosystem." },
  { title: "Auto Fest Intl.", category: "Automotive", status: "UPCOMING", description: "Expanding the automotive festival experience to a global digital stage." },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#080B10] text-white p-6 md:p-24">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h1 className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-[#00F0FF] to-[#FF8A00] bg-clip-text text-transparent mb-6">
            Project Archive.
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed">
            Curated engineering solutions by Olowojare Muhammed, focusing on logistics, fintech, and digital ecosystems.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((p, i) => <ProjectCard key={i} {...p} />)}
        </div>
      </div>
    </div>
  );
}
