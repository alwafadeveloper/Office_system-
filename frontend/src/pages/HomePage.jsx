import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, ArrowRight, Star, Tag, Zap, Clock, Heart, MessageCircle, Send, MoreHorizontal,
  User, Globe, Smartphone, Palette 
} from 'lucide-react';

const quickAccessMenu = [
  { id: 'developer-intro', name: 'Developer Introduction', icon: User },
  { id: 'website-projects', name: 'Website Projects', icon: Globe },
  { id: 'app-projects', name: 'App Projects', icon: Smartphone },
  { id: 'graphic-collection', name: 'Graphic Collection', icon: Palette },
];

const HomePage = () => {
  const [activeView, setActiveView] = useState('developer-intro');

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.95, y: -10, transition: { duration: 0.2, ease: 'easeIn' } }
  };

  const mainContentData = {
    'developer-intro': {
        title: 'আপনার ব্যবসাকে কি অনলাইনে নিয়ে আসতে চান?',
        description: 'SITB (Startup IT Bajitpur) একটি উদীয়মান আইটি প্রতিষ্ঠান যা ডিজিটাল বাংলাদেশ গড়ার লক্ষে কাজ করে যাচ্ছে। আমরা বিশ্বাস করি প্রযুক্তি শুধু শহরের জন্য নয়, বরং তৃণমূল পর্যায়ে পৌঁছে দিলেই প্রকৃত উন্নয়ন সম্ভব। ওয়েব ডেভেলপমেন্ট থেকে শুরু করে ডিজিটাল মার্কেটিং পর্যন্ত—আপনার যেকোনো আইটি সমস্যার সমাধান দিতে আমরা প্রতিশ্রুতিবদ্ধ।',
        buttonText: 'আমাদের সাথে যোগাযোগ করুন',
        buttonLink: '/contact',
    },
    'website-projects': {
        title: 'ইন্টিগ্রেটেড মাল্টি-প্ল্যাটফর্ম ই-কমার্স ইকোসিস্টেম',
        description: 'আমরা সম্প্রতি একটি বৃহদাকার প্রজেক্ট সফলভাবে সম্পন্ন করেছি, যেখানে একটি সেন্ট্রাল সার্ভার (Backend) এর অধীনে সম্পূর্ণ ইকোসিস্টেমটি পরিচালিত হচ্ছে। এই প্রজেক্টে আমরা ডেভেলপ করেছি একটি ডাইনামিক প্রোডাক্ট ওয়েবসাইট, ইউজার-ফ্রেন্ডলি কাস্টমার মোবাইল অ্যাপ, এবং একটি ডেডিকেটেড ডেলিভারি ম্যানেজমেন্ট অ্যাপ।',
        buttonText: 'প্রজেক্টটি দেখুন',
        buttonLink: '/projects/websites',
    }
  };
  
  const activeContent = mainContentData[activeView] || mainContentData['developer-intro'];

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col relative overflow-x-hidden">
      {/* Hero Section */}
      <div className="flex-1 flex flex-col md:flex-row relative">
          
          {/* Vertical Text Layer */}
          <div className="absolute left-8 lg:left-16 top-32 z-10 hidden lg:block">
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black uppercase leading-none tracking-tighter">
              <span className="block text-black">Empowering</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 -mt-2 lg:-mt-4 xl:-mt-5">Bajitpur</span>
            </h1>
            <p className="mt-6 lg:mt-8 text-lg lg:text-xl xl:text-2xl font-medium tracking-wide text-gray-500 max-w-sm lg:max-w-xs xl:max-w-md">
              Through Digital Innovation,
              <br/>
              Building a Brighter <span className="font-bold text-black">Future.</span>
            </p>

            {/* Quick Access Menu */}
            <div className="absolute top-full mt-20 space-y-3 w-64">
              <p className="font-bengali text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-1">Quick Access</p>
              {quickAccessMenu.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => setActiveView(item.id)}
                  className={`w-full text-left p-2.5 rounded-xl transition-all duration-300 flex items-center gap-3 border ${
                    activeView === item.id
                      ? 'bg-gray-800 text-white shadow-lg border-gray-700'
                      : 'bg-white/60 backdrop-blur-sm border-gray-200/80 text-gray-700 hover:bg-gray-50 hover:text-black hover:shadow-md hover:border-gray-300'
                  }`}
                >
                  <div className={`p-2 rounded-lg transition-colors ${activeView === item.id ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <item.icon size={18} className={activeView === item.id ? 'text-blue-300' : 'text-gray-600'} />
                  </div>
                  <span className="font-semibold text-sm">{item.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Red Content Card */}
          <div className="mt-24 mb-10 mx-4 md:mr-10 md:ml-auto md:w-[70%] bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] rounded-[30px] md:rounded-[40px] p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
            
            {/* Top Icons */}
            <div className="flex justify-end gap-8 mb-10">
              <div className="text-center">
                <Tag size={20} className="mx-auto mb-1 opacity-80" />
                <p className="text-[8px] uppercase font-bold">Future<br/>Threads</p>
              </div>
              <div className="text-center">
                <Zap size={20} className="mx-auto mb-1 opacity-80" />
                <p className="text-[8px] uppercase font-bold">Unique<br/>Designs</p>
              </div>
              <div className="text-center">
                <Clock size={20} className="mx-auto mb-1 opacity-80" />
                <p className="text-[8px] uppercase font-bold">Limited<br/>Drops</p>
              </div>
            </div>

            {/* Bottom Content */}
            {/* To use the 'Noto Sans Bengali' font, ensure it's imported in your main CSS file (e.g., index.css):
               @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;500;700&display=swap');
               And configured in your tailwind.config.js:
               fontFamily: { bengali: ['Noto Sans Bengali', 'sans-serif'], ... }
            */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeView}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="max-w-md z-20"
              >
                <p className="font-bengali text-sm font-semibold tracking-wide mb-4 text-blue-300">আমাদের সেবা</p>
                <h2 className="font-bengali text-3xl lg:text-4xl font-bold leading-snug mb-5">{activeContent.title}</h2>
                <p className="font-bengali text-[15px] lg:text-base opacity-80 mb-8 leading-relaxed">
                  {activeContent.description}
                </p>
                
                {activeContent.buttonLink.startsWith('http') ? (
                  <a 
                    href={activeContent.buttonLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bengali bg-gradient-to-r from-blue-500 to-teal-400 text-white px-6 py-3 rounded-full font-bold flex items-center gap-3 hover:opacity-90 transition-all w-fit shadow-lg shadow-blue-500/20"
                  >
                    {activeContent.buttonText} <ArrowRight size={18} />
                  </a>
                ) : (
                  <Link 
                    to={activeContent.buttonLink} 
                    className="font-bengali bg-gradient-to-r from-blue-500 to-teal-400 text-white px-6 py-3 rounded-full font-bold flex items-center gap-3 hover:opacity-90 transition-all w-fit shadow-lg shadow-blue-500/20"
                  >
                    {activeContent.buttonText} <ArrowRight size={18} />
                  </Link>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Core Technologies */}
            <div className="mt-12 z-10">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Core Technologies</p>
              <div className="flex items-center gap-6">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" title="React" alt="React" className="h-7 w-7 opacity-70 hover:opacity-100 transition-all hover:scale-110" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" title="Node.js" alt="Node.js" className="h-7 w-7 opacity-70 hover:opacity-100 transition-all hover:scale-110" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" title="MongoDB" alt="MongoDB" className="h-7 w-7 opacity-70 hover:opacity-100 transition-all hover:scale-110" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" title="Tailwind CSS" alt="Tailwind CSS" className="h-7 w-7 opacity-70 hover:opacity-100 transition-all hover:scale-110" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" title="Express.js" alt="Express.js" className="h-7 w-7 opacity-70 hover:opacity-100 transition-all hover:scale-110" />
              </div>
            </div>

            {/* Insta-style Developer Post Card (Floating) */}
            <div className="absolute top-1/2 right-16 -translate-y-1/2 hidden xl:block z-30 transform rotate-6 hover:rotate-0 transition-all duration-500 ease-out origin-center hover:scale-105 cursor-default">
              <AnimatePresence mode="wait">
                {activeView === 'developer-intro' && (
                  <motion.div key="dev-intro" variants={cardVariants} initial="hidden" animate="visible" exit="exit" className="bg-white text-black p-4 rounded-2xl shadow-2xl w-[clamp(20rem,25vw,24rem)]">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-[2px]">
                          <div className="w-full h-full rounded-full bg-white p-[1px] overflow-hidden">
                            <img src="https://i.pravatar.cc/150?u=bajitofficial" alt="profile" className="w-full h-full object-cover" />
                          </div>
                        </div>
                        <span className="text-xs font-bold">bajitofficial</span>
                      </div>
                      <MoreHorizontal size={16} className="text-gray-400" />
                    </div>
                    {/* Image */}
                    <div className="w-full aspect-[4/5] bg-gray-100 rounded-lg mb-3 overflow-hidden relative group">
                      <img src="/SITB.png" alt="coding" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    {/* Actions */}
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex gap-3">
                        <Heart size={20} className="cursor-pointer text-gray-700 hover:text-red-500 hover:fill-red-500 transition-all active:scale-90" />
                        <MessageCircle size={20} className="cursor-pointer text-gray-700 hover:text-blue-500 transition-all active:scale-90" />
                        <Send size={20} className="cursor-pointer text-gray-700 hover:text-green-500 transition-all active:scale-90" />
                      </div>
                    </div>
                    {/* Description */}
                    <div className="text-[10px] leading-tight">
                      <p><span className="font-bold">bajitofficial</span> From Bajitpur to the world. We're crafting digital experiences that empower local businesses and build a brighter future. 💻✨ <span className="text-blue-500">#SITB #DigitalBangladesh</span></p>
                    </div>
                  </motion.div>
                )}

                {activeView === 'website-projects' && (
                  <motion.div key="web-projects" variants={cardVariants} initial="hidden" animate="visible" exit="exit" className="bg-white text-black p-4 rounded-2xl shadow-2xl w-[clamp(20rem,25vw,24rem)] h-[500px] flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bengali text-sm font-bold text-gray-800">লাইভ প্রজেক্ট প্রিভিউ</h3>
                      <a href="https://amarrannaghor.fun" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline">নতুন ট্যাবে খুলুন</a>
                    </div>
                    <div className="flex-1 border border-gray-200 rounded-lg overflow-hidden bg-gray-100 relative">
                        <iframe 
                            src="https://amarrannaghor.fun" 
                            className="absolute top-0 left-0"
                            title="Amar Rannaghor Live Preview"
                            sandbox="allow-scripts allow-same-origin"
                            style={{
                              width: '133.33%',
                              height: '133.33%',
                              transform: 'scale(0.75)',
                              transformOrigin: '0 0',
                            }}
                        ></iframe>
                    </div>
                  </motion.div>
                )}

                {(activeView === 'app-projects' || activeView === 'graphic-collection') && (
                   <motion.div key="coming-soon" variants={cardVariants} initial="hidden" animate="visible" exit="exit" className="bg-white text-black p-4 rounded-2xl shadow-2xl w-[clamp(20rem,25vw,24rem)] h-[500px] flex flex-col items-center justify-center">
                      {activeView === 'app-projects' && <Smartphone size={48} className="text-gray-300 mb-4" />}
                      {activeView === 'graphic-collection' && <Palette size={48} className="text-gray-300 mb-4" />}
                      <h3 className="text-lg font-bold text-gray-800">
                        {activeView === 'app-projects' ? 'App Projects' : 'Graphic Collection'}
                      </h3>
                      <p className="text-xs text-gray-500">Coming soon.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
    </div>
  );
};

export default HomePage;
