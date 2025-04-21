import { NextPage } from 'next';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

// Dynamic import for the map component to avoid SSR issues
const WorldMap = dynamic(
  () => import('react-svg-worldmap').then((mod) => mod.WorldMap),
  { ssr: false }
);

const Sustainable: NextPage<unknown> = () => {
  const [renewableTarget, setRenewableTarget] = useState<number>(60);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  // Sample data for the map - in a real app this would come from your data
  const mapData = [
    { country: 'us', value: 42 }, // United States renewable percentage
    { country: 'de', value: 65 }, // Germany
    { country: 'fr', value: 33 }, // France
    { country: 'cn', value: 28 }, // China
    { country: 'in', value: 22 }, // India
    { country: 'no', value: 98 }, // Norway
    { country: 'se', value: 60 }, // Sweden
    { country: 'ca', value: 72 }, // Canada
  ];

  const handleCountryHover = (countryCode: string) => {
    setSelectedCountry(countryCode);
  };

  return (
    <></>
    // <>
    //   <Head>
    //     <title>Sustainable AI | Evaluating Digital Service Impact</title>
    //     <meta name="description" content="A system for evaluating the environmental and economic sustainability of AI services" />
    //   </Head>

    //   <div className="min-h-screen bg-gray-900 text-gray-100">
    //     <header className="bg-gradient-to-r from-green-800 to-teal-900 py-12 shadow-lg">
    //       <div className="container mx-auto px-4">
    //         <h1 className="text-4xl font-bold mb-4">Sustainable AI</h1>
    //         <p className="text-xl max-w-3xl opacity-90">
    //           Evaluating the Environmental and Economic Sustainability of Large-Scale Digital Services
    //         </p>
    //       </div>
    //     </header>

    //     <main className="container mx-auto px-4 py-8">
    //       <section className="mb-12">
    //         <h2 className="text-2xl font-semibold mb-6 text-teal-300">Project Overview</h2>
    //         <div className="grid md:grid-cols-2 gap-8">
    //           <div>
    //             <p className="mb-4 opacity-90">
    //               Our system evaluates the sustainability of AI services like LLM chatbots by modeling the interactions
    //               between key stakeholders: Energy Providers, Data Centers, AI Developers, and End Users.
    //             </p>
    //             <p className="mb-4 opacity-90">
    //               Each agent in our model seeks to maximize its utility while considering environmental impact,
    //               creating a complex system where economic and sustainability goals must be balanced.
    //             </p>
    //           </div>
    //           <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
    //             <h3 className="text-lg font-medium mb-4 text-teal-200">System Parameters</h3>
    //             <div className="mb-4">
    //               <label htmlFor="renewableTarget" className="block mb-2 text-gray-300">
    //                 Desired Renewable Energy Ratio: <span className="text-teal-300">{renewableTarget}%</span>
    //               </label>
    //               <input
    //                 id="renewableTarget"
    //                 type="range"
    //                 min="0"
    //                 max="100"
    //                 value={renewableTarget}
    //                 onChange={(e) => setRenewableTarget(parseInt(e.target.value))}
    //                 className="w-full accent-teal-500"
    //               />
    //             </div>
    //             <p className="text-sm text-gray-400">
    //               Adjust this parameter to see how different renewable energy targets affect the system dynamics.
    //             </p>
    //           </div>
    //         </div>
    //       </section>

    //       <section className="mb-12">
    //         <h2 className="text-2xl font-semibold mb-6 text-teal-300">Global Energy Footprint</h2>
    //         <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
    //           <div className="h-96">
    //             <WorldMap
    //               color="#2DD4BF" // teal-400
    //               value-suffix="%"
    //               size="responsive"
    //               data={mapData}
    //               onCountryHover={handleCountryHover}
    //               style={{
    //                 hoverColor: '#10B981', // emerald-500
    //                 hoverOpacity: 0.8,
    //                 borderColor: '#4B5563', // gray-600
    //                 backgroundColor: '#1F2937', // gray-800
    //               }}
    //             />
    //           </div>
    //           {selectedCountry && (
    //             <div className="mt-4 p-3 bg-teal-900 rounded border border-teal-700">
    //               <p className="font-medium text-teal-200">
    //                 Selected country: {selectedCountry.toUpperCase()} - {mapData.find(d => d.country === selectedCountry)?.value}% renewable energy
    //               </p>
    //             </div>
    //           )}
    //         </div>
    //       </section>

    //       <section className="grid md:grid-cols-2 gap-8 mb-12">
    //         <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
    //           <h3 className="text-xl font-medium mb-4 text-teal-200">Key Stakeholders</h3>
    //           <ul className="space-y-4">
    //             <li className="pb-4 border-b border-gray-700">
    //               <h4 className="font-semibold text-teal-100">Energy Providers</h4>
    //               <p className="text-sm text-gray-400">
    //                 Balance grid stability, profit margins, and renewable energy commitments
    //               </p>
    //             </li>
    //             <li className="pb-4 border-b border-gray-700">
    //               <h4 className="font-semibold text-teal-100">Data Centers</h4>
    //               <p className="text-sm text-gray-400">
    //                 Optimize for uptime, energy costs, and carbon footprint
    //               </p>
    //             </li>
    //             <li className="pb-4 border-b border-gray-700">
    //               <h4 className="font-semibold text-teal-100">AI Service Developers</h4>
    //               <p className="text-sm text-gray-400">
    //                 Balance model performance, inference costs, and sustainability goals
    //               </p>
    //             </li>
    //             <li>
    //               <h4 className="font-semibold text-teal-100">End Users</h4>
    //               <p className="text-sm text-gray-400">
    //                 Seek responsive, high-quality services with minimal environmental impact
    //               </p>
    //             </li>
    //           </ul>
    //         </div>

    //         <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
    //           <h3 className="text-xl font-medium mb-4 text-teal-200">Sustainability Metrics</h3>
    //           <div className="space-y-4">
    //             <div className="pb-4 border-b border-gray-700">
    //               <h4 className="font-semibold text-teal-100">Carbon Intensity</h4>
    //               <p className="text-sm text-gray-400">
    //                 Grams of CO₂ equivalent per query or API call
    //               </p>
    //             </div>
    //             <div className="pb-4 border-b border-gray-700">
    //               <h4 className="font-semibold text-teal-100">Energy Mix</h4>
    //               <p className="text-sm text-gray-400">
    //                 Percentage of renewable vs. non-renewable energy sources
    //               </p>
    //             </div>
    //             <div className="pb-4 border-b border-gray-700">
    //               <h4 className="font-semibold text-teal-100">Economic Efficiency</h4>
    //               <p className="text-sm text-gray-400">
    //                 Cost per query balanced against environmental impact
    //               </p>
    //             </div>
    //             <div>
    //               <h4 className="font-semibold text-teal-100">Geographic Variability</h4>
    //               <p className="text-sm text-gray-400">
    //                 How location affects sustainability metrics
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </section>
    //     </main>

    //     <footer className="bg-gray-800 py-8 border-t border-gray-700">
    //       <div className="container mx-auto px-4 text-center">
    //         <p className="text-gray-300">© {new Date().getFullYear()} Sustainable AI Research Project</p>
    //         <p className="text-sm text-gray-500 mt-2">
    //           This project evaluates the complex interplay between digital services and sustainability goals.
    //         </p>
    //       </div>
    //     </footer>
    //   </div>
    // </>
  );
};

export default Sustainable;