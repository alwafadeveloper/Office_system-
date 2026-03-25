import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Server, Globe, Smartphone, Truck, LayoutDashboard, Share2, Code } from 'lucide-react';
import { Tab } from '@headlessui/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const project = {
    title: 'ইন্টিগ্রেটেড মাল্টি-প্ল্যাটফর্ম ই-কমার্স ইকোসিস্টেম',
    description: 'একটি সেন্ট্রাল সার্ভার (Backend) এর অধীনে সম্পূর্ণ ইকোসিস্টেমটি পরিচালিত হচ্ছে। এই প্রজেক্টে আমরা ডেভেলপ করেছি একটি ডাইনামিক প্রোডাক্ট ওয়েবসাইট, ইউজার-ফ্রেন্ডলি কাস্টমার মোবাইল অ্যাপ, এবং একটি ডেডিকেটেড ডেলিভারি ম্যানেজমেন্ট অ্যাপ। পুরো সিস্টেমটিকে রিয়েল-টাইমে মনিটর এবং কন্ট্রোল করার জন্য একটি শক্তিশালী সেন্ট্রাল অ্যাডমিন প্যানেল তৈরি করা হয়েছে, যা ইনভেন্টরি থেকে শুরু করে লজিস্টিকস পর্যন্ত সবকিছুর পূর্ণ নিয়ন্ত্রণ নিশ্চিত করে।',
    imageUrl: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1200&q=80',
    link: 'https://amarrannaghor.fun',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'React Native'],
    architecture: [
        { name: 'Customer Website', icon: Globe, position: 'top' },
        { name: 'Customer Mobile App', icon: Smartphone, position: 'left' },
        { name: 'Delivery App', icon: Truck, position: 'right' },
        { name: 'Central Admin Panel', icon: LayoutDashboard, position: 'bottom' },
    ],
    codePreviews: {
        'Website': {
            language: 'jsx',
            code: `// Placeholder for Website Code\n// You can provide your React component code here.\n\nconst ProductCard = ({ product }) => (\n  <div>\n    <h2>{product.name}</h2>\n    <p>{product.price}</p>\n  </div>\n);`
        },
        'Admin Panel': {
            language: 'javascript',
            code: `// Placeholder for Admin Panel Code\n// You can provide your Node.js/Express route code here.\n\nrouter.get('/dashboard/stats', (req, res) => {\n  // ...fetch stats from DB\n  res.json({ stats });\n});`
        },
        'Delivery App': {
            language: 'jsx',
            code: `// Placeholder for Delivery App Code\n// You can provide your React Native component code here.\n\nconst OrderMap = ({ orderLocation }) => (\n  <MapView initialRegion={orderLocation} />\n);`
        }
    }
};

const SystemArchitectureMap = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3, delayChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.5, y: 20 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            y: 0, 
            transition: { type: 'spring', stiffness: 260, damping: 20 } 
        },
    };
    
    const lineVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: { 
            pathLength: 1, 
            opacity: 1, 
            transition: { duration: 1.5, ease: "easeInOut" } 
        }
    };

    const floatingAnimation = {
        y: [-5, 5, -5],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <div className="my-16 p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50/50 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-50/50 rounded-full blur-3xl"></div>
            </div>

            <h3 className="text-2xl font-bold text-center text-gray-800 mb-10 relative z-10">System Architecture Map</h3>
            <motion.div 
                className="relative w-full h-[400px] flex items-center justify-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Lines */}
                <svg className="absolute w-full h-full z-0" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
                    <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.5"/>
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8"/>
                        </linearGradient>
                    </defs>
                    <motion.path d="M200 200 L200 80" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="4 4" fill="none" variants={lineVariants} />
                    <motion.path d="M200 200 L80 200" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="4 4" fill="none" variants={lineVariants} />
                    <motion.path d="M200 200 L320 200" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="4 4" fill="none" variants={lineVariants} />
                    <motion.path d="M200 200 L200 320" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="4 4" fill="none" variants={lineVariants} />
                    
                    {/* Animated particles */}
                    {["M200 200 L200 80", "M200 200 L80 200", "M200 200 L320 200", "M200 200 L200 320"].map((path, i) => (
                        <circle key={i} r="3" fill="#3b82f6">
                            <animateMotion dur="2s" repeatCount="indefinite" path={path} keyPoints="0;1" keyTimes="0;1" calcMode="linear" />
                        </circle>
                    ))}
                </svg>

                {/* Central Node */}
                <motion.div variants={itemVariants} className="absolute z-20 flex flex-col items-center text-center">
                    <motion.div 
                        animate={{ boxShadow: ["0 0 0 0px rgba(37, 99, 235, 0.2)", "0 0 0 10px rgba(37, 99, 235, 0)"] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="p-5 bg-blue-600 text-white rounded-2xl shadow-xl relative"
                    >
                        <Server size={32} />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                    </motion.div>
                    <div className="mt-3 bg-white/90 backdrop-blur px-3 py-1 rounded-lg border border-blue-100 shadow-sm">
                        <p className="text-sm font-bold text-blue-900">Central Server</p>
                        <p className="text-[10px] text-gray-500">Node.js & Express</p>
                    </div>
                </motion.div>

                {/* Other Nodes */}
                {project.architecture.map((node, i) => {
                    const positions = {
                        top: 'top-[5%] left-1/2 -translate-x-1/2',
                        left: 'top-1/2 left-[5%] -translate-y-1/2',
                        right: 'top-1/2 right-[5%] -translate-y-1/2',
                        bottom: 'bottom-[5%] left-1/2 -translate-x-1/2',
                    };
                    return (
                        <motion.div key={i} variants={itemVariants} className={`absolute ${positions[node.position]} flex flex-col items-center text-center w-36 z-10`}>
                            <motion.div
                                animate={floatingAnimation}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }} 
                                className="flex flex-col items-center"
                            >
                                <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                                    <node.icon size={24} className="text-gray-600 group-hover:text-blue-600 transition-colors" />
                                </div>
                                <div className="mt-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-md">
                                    <p className="text-xs font-bold text-gray-700">{node.name}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
};

const CodePreview = () => {
    const [selectedTab, setSelectedTab] = useState(Object.keys(project.codePreviews)[0]);

    return (
        <div className="my-16">
            <div className="flex items-center gap-3 mb-6">
                <Code size={28} className="text-gray-800" />
                <h2 className="text-3xl font-bold text-gray-800">Code Preview</h2>
            </div>
            <div className="w-full rounded-2xl bg-gray-800 p-2 shadow-lg">
                <Tab.Group>
                    <Tab.List className="flex space-x-1 rounded-xl bg-gray-900/20 p-1">
                        {Object.keys(project.codePreviews).map((category) => (
                            <Tab
                                key={category}
                                className={({ selected }) =>
                                    `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-300 transition-all
                                    focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60
                                    ${selected ? 'bg-white/10 shadow text-white' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'}`
                                }
                            >
                                {category}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className="mt-2">
                        {Object.values(project.codePreviews).map((preview, idx) => (
                            <Tab.Panel key={idx} className="rounded-xl bg-gray-900 focus:outline-none">
                                <SyntaxHighlighter language={preview.language} style={vscDarkPlus} customStyle={{ margin: 0, borderRadius: '0.75rem', padding: '1.5rem', background: '#1E1E1E' }} showLineNumbers>
                                    {preview.code}
                                </SyntaxHighlighter>
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
    );
}

const WebsiteProjectsPage = () => {
  return (
    <div className="bg-white pt-24 min-h-screen font-sans">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        
        <header className="text-center">
          <h1 className="text-4xl font-black text-gray-900 sm:text-5xl lg:text-6xl font-bengali leading-tight">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Case Study: A Deep Dive into a Modern E-commerce Ecosystem.
          </p>
          <div className="mt-6 flex justify-center items-center gap-4">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block text-white bg-gray-900 hover:bg-gray-700 px-6 py-3 rounded-lg text-sm font-bold transition-colors">
              Visit Live Site
            </a>
            <button className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                <Share2 size={20} className="text-gray-700" />
            </button>
          </div>
        </header>

        <div className="my-12 aspect-video rounded-2xl overflow-hidden border-4 border-gray-200 shadow-lg">
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        </div>

        <SystemArchitectureMap />

        <CodePreview />

        <article className="prose prose-lg max-w-none mx-auto text-gray-700 leading-relaxed font-bengali space-y-6">
            <h2 className="font-bengali !mb-2">প্রজেক্টের বিবরণ</h2>
            <p>{project.description}</p>
            
            <h3 className="font-bengali !mb-2">মূল চ্যালেঞ্জ</h3>
            <p>এই প্রজেক্টের প্রধান চ্যালেঞ্জ ছিল বিভিন্ন প্ল্যাটফর্ম (ওয়েবসাইট, কাস্টমার অ্যাপ, ডেলিভারি অ্যাপ) এবং অ্যাডমিন প্যানেলকে একটি সমন্বিত সিস্টেমের অধীনে আনা, যেখানে ডেটা রিয়েল-টাইমে সিঙ্ক্রোনাইজ হবে। পারফরম্যান্স এবং নিরাপত্তা নিশ্চিত করাও আমাদের অন্যতম প্রধান লক্ষ্য ছিল।</p>
            
            <h3 className="font-bengali !mb-2">আমাদের সমাধান</h3>
            <p>আমরা একটি শক্তিশালী এবং স্কেলেবল আর্কিটেকচার ডিজাইন করেছি। Node.js এবং Express ব্যবহার করে একটি RESTful API তৈরি করা হয়েছে, যা সকল প্ল্যাটফর্মের জন্য ডেটা সরবরাহ করে। MongoDB ডেটাবেস ব্যবহারের ফলে আমরা ফ্লেক্সিবল ডেটা মডেলিং এবং দ্রুত কোয়েরি নিশ্চিত করতে পেরেছি।</p>
            
            <ul className="space-y-2">
                <li><strong>ওয়েবসাইট:</strong> React ব্যবহার করে একটি দ্রুত এবং ইন্টারেক্টিভ ইউজার ইন্টারফেস তৈরি করা হয়েছে।</li>
                <li><strong>মোবাইল অ্যাপ:</strong> React Native দিয়ে ক্রস-প্ল্যাটফর্ম (Android & iOS) অ্যাপ তৈরি করা হয়েছে, যা কোডবেসকে সহজ এবং রক্ষণাবেক্ষণযোগ্য করে তুলেছে।</li>
                <li><strong>অ্যাডমিন প্যানেল:</strong> অ্যাডমিনদের জন্য একটি সহজ এবং কার্যকরী ড্যাশবোর্ড তৈরি করা হয়েছে, যেখান থেকে তারা সহজেই পুরো সিস্টেম পরিচালনা করতে পারেন।</li>
            </ul>

            <h3 className="font-bengali !mb-2">ব্যবহৃত প্রযুক্তি</h3>
            <div className="flex flex-wrap gap-3">
                {project.tags.map(tag => (
                    <span key={tag} className="text-sm font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{tag}</span>
                ))}
            </div>
        </article>
      </div>
    </div>
  );
};

export default WebsiteProjectsPage;