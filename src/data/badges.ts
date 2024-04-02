export type BadgeType = {
  id: string;
  name: string;
  link: string;
  image: string;
  issuer: string;
  issuingDate: Date;
};
export type BadgesType = BadgeType[];

export const badges: BadgesType = [
  {
    id: "9d14ab98-9815-447f-8799-51c29b10d990",
    name: "Enterprise Design Thinking Practitioner",
    link: "https://www.credly.com/badges/9d14ab98-9815-447f-8799-51c29b10d990/embedded",
    image: "/images/badges/Badges_v8-07_Practitioner.png",
    issuer: "IBM",
    issuingDate: new Date("2020-05-31"),
  },
  {
    id: "9cbb5f24-a277-46d9-8311-c4cb4386a195",
    name: "Getting started with Microservices with Istio and IBM Cloud Kubernetes Service",
    link: "https://www.credly.com/badges/9cbb5f24-a277-46d9-8311-c4cb4386a195/embedded",
    image: "/images/badges/Itsio_and_IBM_Cloud_Container_Service.png",
    issuer: "IBM",
    issuingDate: new Date("2020-05-31"),
  },
  {
    id: "e9482a3d-b945-4fd2-bf10-7b51b1cc0635",
    name: "SAP Certified Development Associate - ABAP with SAP NetWeaver 7.50",
    link: "https://www.credly.com/badges/e9482a3d-b945-4fd2-bf10-7b51b1cc0635/embedded",
    image: "/images/badges/C_TAW12_750.png",
    issuer: "SAP",
    issuingDate: new Date("2020-06-30"),
  },
  {
    id: "7a920ad3-4661-46e4-a0b3-3e19c47df456",
    name: "SAP Certified Development Specialist - ABAP for SAP HANA 2.0",
    link: "https://www.credly.com/badges/7a920ad3-4661-46e4-a0b3-3e19c47df456/embedded",
    image: "/images/badges/E_HANAAW_16.png",
    issuer: "SAP",
    issuingDate: new Date("2021-08-20"),
  },
  {
    id: "d9ad414d-b958-472f-b572-2fed2a439d05",
    name: "IBM Garage Essentials",
    link: "https://www.credly.com/badges/d9ad414d-b958-472f-b572-2fed2a439d05/embedded",
    image: "/images/badges/IBM_Garage_Essentials.png",
    issuer: "IBM",
    issuingDate: new Date("2022-03-01"),
  },
  {
    id: "496c36f4-be2d-4b7c-aecc-4eca0c86b926",
    name: "IBM Garage Essentials",
    link: "https://www.credly.com/badges/496c36f4-be2d-4b7c-aecc-4eca0c86b926/embedded",
    image: "/images/badges/Basics_BTP_ABAP.png",
    issuer: "SAP",
    issuingDate: new Date("2023-09-15"),
  },
];
