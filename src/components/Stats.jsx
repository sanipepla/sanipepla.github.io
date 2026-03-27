import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { value: "3.5Bn", label: "People lack access to safely managed sanitation services", color: "text-[#3498DB]" },
  { value: "8%", label: "Of the global population practices open defecation", color: "text-[#2ECC71]" },
  { value: "57%", label: "Of urban dwellers lack access to proper toilet services", color: "text-[#3FB6D8]" },
  { value: "14L", label: "Of clean water is wasted by traditional toilets per flush", color: "text-[#E67E22]" },
];

export default function Stats() {
  return (
    <section id="challenge" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">The Global Challenge</h2>
          <p className="text-slate-600">Access to safely managed sanitation is a fundamental human right. Yet, millions are still left behind.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <Card key={i} className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center flex flex-col items-center justify-center min-h-[200px]">
                <span className={`text-5xl font-extrabold mb-4 ${stat.color}`}>{stat.value}</span>
                <p className="text-sm font-medium text-slate-500 leading-relaxed uppercase tracking-wide">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
    </section>
  );
}
