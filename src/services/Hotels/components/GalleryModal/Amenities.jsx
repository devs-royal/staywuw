// "use client";

// import { InformationCircleIcon, MegaphoneIcon, ClockIcon } from "@heroicons/react/24/outline";
// import { useState } from "react";
// // import {
// //   BuildingOfficeIcon,
// //   UserIcon,
// //   InformationCircleIcon,
// //   UsersIcon,
// // } from "@heroicons/react/20/outline";


// const iconInfo = `https://sandboxmexico.com/assets/icons/alert/alert-100.svg`;

// const tabs = [
//   { name: "informacion", href: "#", icon: InformationCircleIcon },
//   { name: "Amenidades", href: "#", icon: MegaphoneIcon },
//   { name: "Horarios", href: "#", icon: ClockIcon },
// ];

// export default function Amenities() {
//   const [selectedTab, setSelectedTab] = useState(tabs[0]);

//   const handleTabClick = (tab) => {
//     setSelectedTab(tab);
//   };

//   const getMessageForTab = (tabName) => {
//     switch (tabName) {
//       case "informacion":
//         return <div>"Aquí está la información."</div>;
//       case "Amenidades":
//         return "Aquí están las amenidades.";
//       case "Horarios":
//         return "Aquí están los horarios.";
//       default:
//         return "";
//     }
//   };

//   return (
//     <div>
//       <div className="sm:hidden">
//         <label htmlFor="tabs" className="sr-only">
//           Select a tab
//         </label>
//         {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
//         <select
//           id="tabs"
//           name="tabs"
//           className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
//           value={selectedTab.name}
//           onChange={(e) =>
//             handleTabClick(tabs.find((tab) => tab.name === e.target.value))
//           }
//         >
//           {tabs.map((tab) => (
//             <option key={tab.name} value={tab.name}>
//               {tab.name}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="hidden sm:block">
//         <div className="border-b border-gray-200">
//           <nav className="-mb-px flex space-x-8" aria-label="Tabs">
//             {tabs.map((tab) => (
//               <a
//                 key={tab.name}
//                 href={tab.href}
//                 onClick={() => handleTabClick(tab)}
//                 className={`${
//                   selectedTab.name === tab.name
//                     ? "border-or-70 text-or-100"
//                     : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
//                 } group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium`}
//                 aria-current={
//                   selectedTab.name === tab.name ? "page" : undefined
//                 }
//               >
//                 <tab.icon
//                   className={`${
//                     selectedTab.name === tab.name
//                       ? "text-or-100"
//                       : "text-gray-400 group-hover:text-gray-500"
//                   } -ml-0.5 mr-2 h-5 w-5`}
//                   aria-hidden="true"
//                 />
//                 <span>{tab.name}</span>
//               </a>
//             ))}
//           </nav>
//         </div>
//       </div>
//       <div className="mt-4">{getMessageForTab(selectedTab.name)}</div>
//     </div>
//   );
// }
