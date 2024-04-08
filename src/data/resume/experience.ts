export type ExperienceType = {
  date: string;
  role: string;
  company: string;
  project: string;
  link: string;
  details: string[];
}[];

export const experience: ExperienceType = [
  {
    date: "2024 --> Present",
    role: "ABAP S/4 Sr. Consultant",
    company: "Z Dev LLC",
    project: "ENAFOR S/4HANA Migration - Algeria",
    link: "https://www.linkedin.com/company/algerian-national-drilling-company-enafor/",
    details: [
      `I'm currently working in the migration from SAP ECC to SAP S/4HANA project at
      Enafor, an oil & gas company in Algeria.Employed by Logient, a
      Canadian company, to lead the technological transition.`,
      `Collaborating with cross - functional teams to ensure the successful
      migration and system integration.Developed UT classes, code fixes
      and performed troubleshooting to facilitate a smooth transition to
      the SAP S / 4HANA platform.`,
    ],
  },
  {
    date: "Oct. 2022 --> Dec. 2023",
    role: "ABAP Development Lead",
    company: "IBM",
    project: "YPF S/4HANA Phase 2 Implementation - Argentina",
    link: "https://news.sap.com/latinamerica/2021/11/ypf-avanza-en-un-importante-proyecto-de-evolucion-tecnologica-con-sap/",
    details: [
      `I focused on coordinating project planning with the functional team,
      conducting WRICEF estimates, analyzing requirement feasibility,
      technical design, and documentation, ABAP development, code review,
      quality assurance, team supervision using Scrum, and mentoring on
      the new S/4HANA ABAP programming paradigm.`,
    ],
  },
  {
    date: "Feb. 2022 --> Oct. 2022",
    role: "ABAP Sr. Consultant",
    company: "IBM",
    project: "Parque Arauco S/4HANA Migration - Chile",
    link: "https://www.ibm.com/case-studies/arauco-ibm-services-sap-s4-hana",
    details: [
      `Code adaptations for S4 and performance improvements, post go-live
      support and bug fixing. I created a tool to automate the dual maintenance
      process for tasks realesed to PRD in ECC during the migration.`,
    ],
  },
  {
    date: "Aug. 2021 --> Feb. 2022",
    role: "ABAP Sr. Consultant",
    company: "IBM",
    project: "LATAM Airlines S/4HANA Migration - Regional",
    link: "",
    details: [
      `Code adaptations for S/4 and performance improvements, post go-live
      support, and bug fixing. Manual tasks include importing transport
      requests from ECC to S/4 to ensure consistency between systems during the migration.`,
    ],
  },
  {
    date: "Nov. 2020 --> Aug. 2021",
    role: "ABAP Development Lead - Argentine Team",
    company: "IBM",
    project: "Alicorp S/4HANA Implementation - Regional",
    link: "https://www.sap.com/latinamerica/documents/2022/07/f63732a0-357e-0010-bca6-c68f7e60039b.html",
    details: [
      `As an ABAP Lead for the Argentine development team, I coordinated various custom
      developments for the project and reported back to the Peru team on the
      progress and outcomes of the Argentine team's work.`,
      `The developments I led included electronic billing development for
      Alicorp Mexico, H2R developments for Ecuador and Honduras, and R2R developments primarily for Peru.`,
    ],
  },
  {
    date: "Feb. 2020 --> Nov. 2020",
    role: "ABAP SSr. Developer",
    company: "IBM",
    project: "Kallpa S/4HANA Implementation - Peru",
    link: "https://www.sap.com/documents/2022/10/e8ee5f70-487e-0010-bca6-c68f7e60039b.html",
    details: [`Custom developments in S4, reports, forms & enhancements.`],
  },
  {
    date: "Jun. 2018 --> Jan. 2020",
    role: "ABAP Jr. Developer",
    company: "IBM",
    project: "R3/ECC Maintenance Projects - Regional",
    link: "",
    details: [
      `Maintained, enhanced, and troubleshooted ABAP programs and objects within the SAP system.`,
      `Implemented changes to existing functionalities and resolved system issues to ensure smooth operation.
      Collaborated with multiple functional teams to meet client requirements.
      Provided technical expertise for ongoing maintenance and improvement of SAP applications.`,
      `Clients: YPF (Argentina), Volkswagen (Argentina), SAESA (Chile),
      Compensar (Colombia), Lafrancol (Colombia), Arauco (Chile), CMPC (Chile)`,
    ],
  },
  {
    date: "Jun. 2015 --> Jun. 2017",
    role: "Genexus Jr. Developer",
    company: "Tekhne S.A.",
    project: "Maintenance Projects - Argentina",
    link: "https://www.tekhne.com.ar/",
    details: [
      `Resolution of tickets, system bug fixes, new developments requested by customers. All
      the developments were carried out in Genexus.`,
    ],
  },
];
