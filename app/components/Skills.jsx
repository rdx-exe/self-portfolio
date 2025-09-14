"use client";
import React, { useState } from "react";
import Image from "next/image";
import { languageSet, toolSet, certificatesData } from "@/assets/assets";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("languages");
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div id="skills" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My Expertise</h4>
      <h2 className="text-center text-green-800 text-5xl font-Ovo">Technical Skills</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Here are the technical skills I’ve developed through academics and
        hands-on practice. These skills reflect my strong foundation in computer
        science and my growing focus on cybersecurity, programming, and modern
        development tools.
      </p>

      {/* Tab Navigation */}
      <nav className="flex justify-center gap-6 mb-10 font-semibold bg-white/20 backdrop-blur-md rounded-xl p-4 shadow-md">
        <button
          onClick={() => setActiveTab("languages")}
          className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
            activeTab === "languages"
              ? "bg-green-600 text-white shadow-lg"
              : "text-green-700 hover:bg-green-200"
          }`}
        >
          Languages
        </button>
        <button
          onClick={() => setActiveTab("tools")}
          className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
            activeTab === "tools"
              ? "bg-green-600 text-white shadow-lg"
              : "text-green-700 hover:bg-green-200"
          }`}
        >
          Tools
        </button>
        <button
          onClick={() => setActiveTab("certificates")}
          className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
            activeTab === "certificates"
              ? "bg-green-600 text-white shadow-lg"
              : "text-green-700 hover:bg-green-200"
          }`}
        >
          Certificates
        </button>
      </nav>

      {/* Tab Content */}
      <div>
        {/* Languages */}
        {activeTab === "languages" && (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-bold mb-6">Languages</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {languageSet.map((lang, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl shadow hover:shadow-lg transition-all"
                >
                  <Image
                    src={lang.icon}
                    alt={lang.name}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                  <span className="font-medium">{lang.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tools */}
        {activeTab === "tools" && (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-bold mb-6">Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {toolSet.map((tool, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl shadow hover:shadow-lg transition-all"
                >
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                  <span className="font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certificates */}
        {activeTab === "certificates" && (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-bold mb-6">Certificates</h2>

            {/* Thumbnails */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {certificatesData.map((cert) => (
                <div
                  key={cert.id}
                  className="cursor-pointer hover:scale-105 transition"
                  onClick={() => setSelectedCert(cert)}
                >
                  <Image
                    src={cert.src}
                    alt={cert.title}
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                  <p className="mt-2 text-center text-sm font-medium">
                    {cert.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Fullscreen Viewer */}
            {selectedCert && (
              <div
                className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                onClick={() => setSelectedCert(null)}
              >
                <div className="relative max-w-6xl w-full">
                  <Image
                    src={selectedCert.src}
                    alt={selectedCert.title}
                    width={1600}
                    height={1200}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-full font-bold shadow hover:bg-gray-200"
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
