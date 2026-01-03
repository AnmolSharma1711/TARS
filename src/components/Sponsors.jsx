import React, { useState } from 'react';
import { Sparkles, Check, X } from 'lucide-react';
import { sponsorBenefits } from '../data/sponsorsData';

const Sponsors = ({ onNavigate }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Subtle accent blobs to match site cyan/aqua theme */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-sky-300 animate-pulse" />
            <span className="text-sky-300 font-semibold tracking-wider text-sm uppercase glow">Partnership Opportunities</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gradient leading-tight glow drop-shadow-[0_12px_30px_rgba(14,165,233,0.18)]">
            Sponsorship Benefits
          </h1>
          <p className="text-lg text-cyan-200/80 max-w-2xl mx-auto">
            Partner with us to amplify your brand and connect with tomorrow's innovators
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-transparent backdrop-blur-sm rounded-3xl overflow-hidden border border-white/6 shadow-lg">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-transparent border-b-2 border-sky-500/30">
            <div className="p-6 bg-transparent border-r-2 border-sky-500/25">
              <h3 className="text-sm font-semibold text-sky-300 uppercase tracking-wider">Benefits Category</h3>
            </div>
            <div className="p-4 sm:p-6 text-center bg-gradient-to-br from-purple-900/40 to-purple-700/30 border-2 border-purple-400/50">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/30 mb-3 shadow-lg shadow-purple-500/50 mx-auto">
                <Sparkles className="w-6 h-6 text-purple-200" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-purple-100 mb-2">PLATINUM</h3>
              <p className="text-lg sm:text-2xl font-extrabold text-purple-200">₹5,00,000</p>
            </div>
            <div className="p-4 sm:p-6 text-center bg-gradient-to-br from-yellow-700/40 to-amber-600/30 border-2 border-yellow-400/50">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-500/40 mb-3 shadow-lg shadow-yellow-500/50 mx-auto">
                <Sparkles className="w-6 h-6 text-yellow-200" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-yellow-100 mb-2">GOLD</h3>
              <p className="text-lg sm:text-2xl font-extrabold text-yellow-200">₹3,00,000</p>
            </div>
            <div className="p-4 sm:p-6 text-center bg-gradient-to-br from-slate-700/40 to-slate-600/30 border-2 border-slate-400/50">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-500/40 mb-3 shadow-lg shadow-slate-500/40 mx-auto">
                <Sparkles className="w-6 h-6 text-slate-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-200 mb-2">SILVER</h3>
              <p className="text-lg sm:text-2xl font-extrabold text-slate-200">₹1,00,000</p>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-white/6">
            {sponsorBenefits.map((benefit, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-px bg-transparent hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                <div className="bg-transparent p-4 sm:p-6 border-r-2 border-sky-500/20">
                  <h4 className="font-bold text-sky-300 text-sm uppercase tracking-wide">{benefit.category}</h4>
                </div>
                <div className="bg-transparent p-4 sm:p-6">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mt-0.5 shadow-md shadow-purple-500/50">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-purple-100 text-sm leading-relaxed break-words whitespace-normal">{benefit.platinum}</p>
                  </div>
                </div>
                <div className="bg-transparent p-4 sm:p-6">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mt-0.5 shadow-md shadow-yellow-500/50">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-yellow-100 text-sm leading-relaxed break-words whitespace-normal">{benefit.gold}</p>
                  </div>
                </div>
                <div className="bg-transparent p-4 sm:p-6">
                  {benefit.silver ? (
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-slate-500/80 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <p className="text-slate-200 text-sm leading-relaxed break-words whitespace-normal">{benefit.silver}</p>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-slate-400">
                      <X className="w-5 h-5" />
                      <span className="text-sm">Not included</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-transparent backdrop-blur-sm rounded-3xl p-12 border border-white/6">
          <h2 className="text-4xl font-bold mb-4 text-white">Ready to Make an Impact?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create a partnership that drives value for both our communities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => onNavigate?.('contact')} className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-sky-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-sky-400/40 transition-all duration-300 transform hover:scale-105">
              Contact Us
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-sky-400/20 hover:bg-white/20 transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
