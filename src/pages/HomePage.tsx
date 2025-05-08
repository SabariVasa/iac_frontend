// import { Link } from "@heroui/link";
// import { Snippet } from "@heroui/snippet";
// import { Code } from "@heroui/code";
// import { button as buttonStyles } from "@heroui/theme";

// import { siteConfig } from "@/config/site";
// import { title, subtitle } from "@/components/primitives";
// import { GithubIcon } from "@/components/icons";
// import DefaultLayout from "@/layouts/default";
// import { Button } from "@heroui/button";
// import { useState } from "react";
// import { Card } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
// import { Switch } from "@/components/ui/switch"


// export default function IndexPage() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [selectedMenuItem, setSelectedMenuItem] = useState("Cost Estimation");

//   const skuList = [
//     {
//       name: "Standard_D2s_v3",
//       tier: "Standard",
//       size: "D2s v3",
//       family: "Dsv3",
//       vCPUs: 2,
//       RAM: "8 GB",
//       OS_disk: "Premium SSD",
//       region: "East US",
//     },
//     {
//       name: "Standard_D4s_v3",
//       tier: "Standard",
//       size: "D4s v3",
//       family: "Dsv3",
//       vCPUs: 4,
//       RAM: "16 GB",
//       OS_disk: "Premium SSD",
//       region: "East US",
//     },
//     {
//       name: "Standard_E2s_v3",
//       tier: "Standard",
//       size: "E2s v3",
//       family: "Esv3",
//       vCPUs: 2,
//       RAM: "16 GB",
//       OS_disk: "Premium SSD",
//       region: "West US",
//     },
//     {
//       name: "Standard_F8s_v2",
//       tier: "Standard",
//       size: "F8s v2",
//       family: "Fsv2",
//       vCPUs: 8,
//       RAM: "16 GB",
//       OS_disk: "Premium SSD",
//       region: "Central US",
//     },
//   ];

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const handleMenuItemClick = (item: string) => {
//     setSelectedMenuItem(item);
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     // <DefaultLayout>
//     //   <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
//     //     <div className="inline-block max-w-lg text-center justify-center">
//     //       <span className={title()}>Make&nbsp;</span>
//     //       <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
//     //       <br />
//     //       <span className={title()}>
//     //         websites regardless of your design experience.
//     //       </span>
//     //       <div className={subtitle({ class: "mt-4" })}>
//     //         Beautiful, fast and modern React UI library.
//     //       </div>
//     //     </div>

//     //     <div className="flex gap-3">
//     //       <Link
//     //         isExternal
//     //         className={buttonStyles({
//     //           color: "primary",
//     //           radius: "full",
//     //           variant: "shadow",
//     //         })}
//     //         href={siteConfig.links.docs}
//     //       >
//     //         Documentation
//     //       </Link>
//     //       <Link
//     //         isExternal
//     //         className={buttonStyles({ variant: "bordered", radius: "full" })}
//     //         href={siteConfig.links.github}
//     //       >
//     //         <GithubIcon size={20} />
//     //         GitHub
//     //       </Link>
//     //     </div>

//     //     <div className="mt-8">
//     //       <Snippet hideCopyButton hideSymbol variant="bordered">
//     //         <span>
//     //           Get started by editing{" "}
//     //           <Code color="primary">pages/index.tsx</Code>
//     //         </span>
//     //       </Snippet>
//     //     </div>
//     //   </section>
//     // </DefaultLayout>
//     <div className="flex min-h-screen bg-gray-50">
//       <div
//         className={`${
//           isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
//         } fixed inset-y-0 left-0 z-30 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-[30%]`}
//       >
//         <div className="flex h-16 items-center justify-center border-b">
//           <h1 className="text-xl font-bold">VM Provisioning in IaC</h1>
//         </div>
//         <nav className="mt-6 px-4">
//           <ul className="space-y-2">
//             {["Virtual Machine Provisioning", "Cost Estimation", "Costing Items"].map((item) => (
//               <li key={item}>
//                 <Button
//                   variant={selectedMenuItem === item ? "solid" : "ghost"}
//                   className={`w-full justify-start ${selectedMenuItem === item ? "bg-blue-600 text-white" : ""}`}
//                   onClick={() => handleMenuItemClick(item)}
//                 >
//                   {item}
//                 </Button>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//       {/*main content end*/}
//       <div className="w-full p-4 md:w-[50%]">
//         <div className="mb-4 mt-12 md:mt-0">
//           <h2 className="text-2xl font-bold">{selectedMenuItem}</h2>
//         </div>

//         {selectedMenuItem === "Cost Estimation" && (
//           <Card className="p-4">
//             <form className="space-y-4">
//               <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//                 <div className="space-y-2">
//                   <Label htmlFor="platform">Platform</Label>
//                   <Select>
//                     <SelectTrigger id="platform">
//                       <SelectValue placeholder="Select Platform" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="vmware">VMware</SelectItem>
//                       <SelectItem value="openstack">OpenStack</SelectItem>
//                       <SelectItem value="aws">AWS</SelectItem>
//                       <SelectItem value="azure">Azure</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="location">Location</Label>
//                   <Select>
//                     <SelectTrigger id="location">
//                       <SelectValue placeholder="Select Location" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="us-east">US East</SelectItem>
//                       <SelectItem value="us-west">US West</SelectItem>
//                       <SelectItem value="eu-central">EU Central</SelectItem>
//                       <SelectItem value="asia-pacific">Asia Pacific</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="customer-tla">Customer TLA</Label>
//                   <Input id="customer-tla" placeholder="Enter Customer TLA" />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="app-tla">App TLA</Label>
//                   <Input id="app-tla" placeholder="Enter App TLA" />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="sku">SKU</Label>
//                   <Select>
//                     <SelectTrigger id="sku">
//                       <SelectValue placeholder="Select SKU" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {skuList.map((sku) => (
//                         <SelectItem key={sku.name} value={sku.name}>
//                           {sku.name}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="quantity">Quantity</Label>
//                   <Input id="quantity" type="number" min="1" defaultValue="1" />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="os">Operating System</Label>
//                   <Select>
//                     <SelectTrigger id="os">
//                       <SelectValue placeholder="Select OS" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="windows">Windows Server</SelectItem>
//                       <SelectItem value="linux">Linux</SelectItem>
//                       <SelectItem value="ubuntu">Ubuntu</SelectItem>
//                       <SelectItem value="redhat">Red Hat</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>

//               <Accordion type="single" collapsible className="w-full">
//                 <AccordionItem value="app-tier">
//                   <AccordionTrigger>Application Tier</AccordionTrigger>
//                   <AccordionContent>
//                     <div className="space-y-4 pt-2">
//                       <div className="flex items-center space-x-2">
//                         <Switch id="web-tier" />
//                         <Label htmlFor="web-tier">Web Tier</Label>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <Switch id="app-tier" />
//                         <Label htmlFor="app-tier">App Tier</Label>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <Switch id="db-tier" />
//                         <Label htmlFor="db-tier">DB Tier</Label>
//                       </div>
//                     </div>
//                   </AccordionContent>
//                 </AccordionItem>

//                 <AccordionItem value="storage">
//                   <AccordionTrigger>Storage Configuration</AccordionTrigger>
//                   <AccordionContent>
//                     <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//                       <div className="space-y-2">
//                         <Label htmlFor="disk1">Disk 1 (GB)</Label>
//                         <Input id="disk1" type="number" min="0" defaultValue="100" />
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="disk2">Disk 2 (GB)</Label>
//                         <Input id="disk2" type="number" min="0" defaultValue="0" />
//                       </div>
//                     </div>
//                   </AccordionContent>
//                 </AccordionItem>

//                 <AccordionItem value="additional">
//                   <AccordionTrigger>Additional Options</AccordionTrigger>
//                   <AccordionContent>
//                     <div className="space-y-4 pt-2">
//                       <div className="flex items-center space-x-2">
//                         <Switch id="backup" />
//                         <Label htmlFor="backup">Backup</Label>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <Switch id="replication" />
//                         <Label htmlFor="replication">Replication</Label>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <Switch id="gpu" />
//                         <Label htmlFor="gpu">GPU</Label>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <Switch id="microsegmentation" />
//                         <Label htmlFor="microsegmentation">Microsegmentation</Label>
//                       </div>
//                     </div>
//                   </AccordionContent>
//                 </AccordionItem>

//                 <AccordionItem value="software">
//                   <AccordionTrigger>Other Software</AccordionTrigger>
//                   <AccordionContent>
//                     <div className="space-y-2">
//                       <Label htmlFor="other-software">Software Packages</Label>
//                       <Select>
//                         <SelectTrigger id="other-software">
//                           <SelectValue placeholder="Select Software" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="sql-server">SQL Server</SelectItem>
//                           <SelectItem value="oracle">Oracle</SelectItem>
//                           <SelectItem value="mongodb">MongoDB</SelectItem>
//                           <SelectItem value="nginx">NGINX</SelectItem>
//                         </SelectContent>
//                       </Select>
//                     </div>
//                   </AccordionContent>
//                 </AccordionItem>
//               </Accordion>

//               <div className="flex justify-end space-x-2 pt-4">
//                 <Button variant="bordered">Reset</Button>
//                 <Button>Calculate Cost</Button>
//               </div>
//             </form>
//           </Card>
//         )}

//         {selectedMenuItem === "Virtual Machine Provisioning" && (
//           <Card className="p-4">
//             <p className="text-gray-500">VM Provisioning content will appear here.</p>
//           </Card>
//         )}

//         {selectedMenuItem === "Costing Items" && (
//           <Card className="p-4">
//             <p className="text-gray-500">Costing Items content will appear here.</p>
//           </Card>
//         )}
//       </div>
//       <div className="hidden border-l bg-white md:block md:w-[20%]">
//         <div className="border-b p-4">
//           <h3 className="font-bold">SKU List</h3>
//         </div>
//         <div className="p-2">
//           {skuList.map((sku) => (
//             <Card key={sku.name} className="mb-2 p-3">
//               <div className="text-sm font-medium">{sku.name}</div>
//               <div className="mt-1 text-xs text-gray-500">
//                 <div className="flex justify-between">
//                   <span>vCPUs:</span>
//                   <span>{sku.vCPUs}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>RAM:</span>
//                   <span>{sku.RAM}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Disk:</span>
//                   <span>{sku.OS_disk}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Region:</span>
//                   <span>{sku.region}</span>
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"; // Assuming you have an Accordion component imported

const menuItems = [
  {
    title: "Cost Estimation",
    path: "/cost-estimation",
    routes: [
      // { label: "Estimation Options", path: "/cost-estimation" },
      // { label: "Additional Options", path: "/cost-estimation/additional" },
    ],
  },
  {
    title: "VM Provisioning",
    path: "/vm-provisioning",
    routes: [
      // { label: "Basic Provisioning", path: "/vm-provisioning" },
      // { label: "Advanced Provisioning", path: "/vm-provisioning/advanced" },
    ],
  },
  {
    title: "Costing Items",
    routes: [
      { label: "View Items", path: "/costing-items" },
      { label: "Manage Items", path: "/costing-items/manage" },
    ],
  },
];

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("Cost Estimation");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = (item: string) => {
    setSelectedMenuItem(item);
    setIsMobileMenuOpen(false);
  };

  return (
    <div
      className={`${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-30 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-[30%]`}>
      <h1 className="text-3xl font-bold">Welcome to VM Provisioning</h1>
      <Accordion type="single" collapsible className="mt-4 space-y-2">
        {menuItems.map((item, index) => (
          <AccordionItem key={index} value={item.title.toLowerCase().replace(/\s+/g, '-')}>
            <AccordionTrigger onClick={() => handleMenuItemClick(item.title)} chevron={item?.routes?.length > 0 ? true : false}>{item.title}</AccordionTrigger>
            {item?.routes?.length > 0 && (
              <AccordionContent>
              <nav>
                  {item.routes.map((route, idx) => (
                    <Link to={route.path} key={idx}>
                     <button className="btn" onClick={() => handleMenuItemClick(route.label)}>
                        {route.label}
                     </button>
                   </Link>
                ))}
              </nav>
            </AccordionContent>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

