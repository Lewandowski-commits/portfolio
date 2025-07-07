const PAST_ROLES: {
  company: string
  role: string
  description: string
  startDate: string
  endDate: string
}[] = [
    {
      company: 'Lingaro',
      role: '(Lead) BI Engineer/Analytics Engineer/BI Fullstack Developer',
      description: `
- analysed business requirements and created initial estimates of projects
- built ETL pipelines using Azure Data Factory and Azure Databricks
- refactored existing ETL/DevOps pipelines, as well as code to ensure simplicity and efficiency
- developed simple REST APIs ran on Azure Functions (meant to serve as the back-end to web apps)
- wrote and read data on Azure Blob Storage in different formats
- created and maintained CI/CD pipelines for the resources above in Azure DevOps
- prepared cloud architecture diagrams
- planned the Azure resources required for the projects, and oversaw their creation/configuration by an offshore team
`,
      startDate: 'January 2024',
      endDate: 'Now',
    },
    {
      company: 'Lingaro',
      role: 'PowerBI Developer',
      description:
        `
- analysed business requirements and estimated PowerBI-related elements of a project
- developed PowerBI reports ranging from simple to complex, utilising DAX, M, SQL languages, and advanced features such as RLS/OLS (row/object-level security), calculation groups, field parameters
- introduced version control into new and ongoing PowerBI projects
- designed report templates using Figma according to customer brand books
- conducted training sessions on advanced PowerBI features for colleagues
`,
      startDate: 'August 2022',
      endDate: 'Novebmer 2022',
    },
    {
      company: 'GlaxoSmithKline/Haleon',
      role: 'PowerBI Developer',
      description:
        `
I developed holistic PowerBI datasets/data models, reports and apps, featuing: multi-measure visuals (DAX), dynamic measure formatting (calculation groups), hierarchical visuals (adaptable to stakeholder seniority level/granularity of their area of interest), security roles utilising Row and Object Level Security, etc., which allowed the business to identify at least 33.93M € annualized margin savings. 

I have also:
- evangelised ease of access and a self-service model to deliver data crucial to stakeholders using BI solutions
- maintained report code base (DB queries, Python scripts) using VCS (GitHub); utilised deployment pipelines and dev/test workspaces together with PowerBI development pipelines to deliver a seamless production environment for the stakeholders
- explored existing databases and systems to identify further opportunities to enhance existing reporting capabilities
- built new data entry forms using SharePoint lists 
- owned a Robotic Process Automation data pipeline from the business side (stakeholder)
- built automations using Power Automate: approval workflows, report distribution/archival workflows, on-demand refreshes for PowerBI datasets with irregular data dependency refreshes, etc.
- championed the data readiness workstream for the Consumer Health business spin-off inside a global QSC function (40+ members) and advised stakeholders on best unstructured data management practices in personal OneDrives, SharePoint sites, Teams and Shared Drives
`,
      startDate: 'April 2021',
      endDate: 'July 2022',
    },
  ]

export default PAST_ROLES
