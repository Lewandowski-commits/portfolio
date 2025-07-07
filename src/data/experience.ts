const PAST_ROLES: {
  company: string
  role: string
  description: string
  startDate: string
  endDate: string
}[] = [
    {
      company: 'Lingaro',
      role: 'Lead Azure Data Engineer / Analytics Engineer',
      description: `
- Led the analysis of complex business requirements, translating them into robust data engineering solutions and providing accurate project estimates.
- Designed and implemented scalable ETL/ELT pipelines using Azure Data Factory and Azure Databricks, ensuring efficient data ingestion, transformation, and loading.
- Optimized existing data pipelines and DevOps processes, enhancing performance, reliability, and maintainability of data solutions on Azure.
- Developed and deployed serverless REST APIs using Azure Functions to support data-driven web applications.
- Managed and processed diverse data formats within Azure Blob Storage and Azure Data Lake Storage.
- Established and maintained comprehensive CI/CD pipelines for Azure data resources using Azure DevOps, ensuring automated and reliable deployments.
- Created detailed cloud architecture diagrams for Azure data platforms, facilitating clear communication and strategic planning.
- Spearheaded the planning and oversight of Azure resource provisioning and configuration, collaborating with offshore teams to ensure optimal infrastructure setup.
`,
      startDate: 'January 2024',
      endDate: 'Now',
    },
    {
      company: 'Lingaro',
      role: 'Power BI Developer',
      description:
        `
- Analyzed business requirements and provided accurate estimates for Power BI-related project components.
- Developed complex Power BI reports leveraging DAX, M, and SQL, incorporating advanced features like Row/Object-Level Security (RLS/OLS), calculation groups, and field parameters.
- Implemented version control for Power BI projects, ensuring robust development and deployment workflows.
- Designed and created report templates using Figma, aligning with client brand guidelines.
- Delivered training sessions on advanced Power BI functionalities to internal teams, fostering skill development and best practices.
`,
      startDate: 'August 2022',
      endDate: 'November 2022',
    },
    {
      company: 'GlaxoSmithKline/Haleon',
      role: 'Power BI Developer',
      description:
        `
- Developed comprehensive Power BI datasets, data models, reports, and applications, incorporating multi-measure visuals (DAX), dynamic measure formatting (calculation groups), and hierarchical visuals.
- Implemented robust security roles utilizing Row and Object Level Security, contributing to identified annualized margin savings of at least €33.93M.
- Advocated for and implemented self-service BI solutions to empower stakeholders with crucial data access.
- Maintained report codebases (DB queries, Python scripts) using Git for version control and leveraged deployment pipelines with dev/test workspaces to ensure seamless production environments.
- Proactively explored existing databases and systems to identify and implement enhancements for reporting capabilities.
- Developed new data entry forms using SharePoint lists to streamline data collection processes.
- Managed Robotic Process Automation (RPA) data pipelines from a business stakeholder perspective.
- Created Power Automate automations for approval workflows, report distribution/archival, and on-demand refreshes for Power BI datasets.
- Led the data readiness workstream for the Consumer Health business spin-off within a global QSC function, advising on best practices for unstructured data management across various platforms.
`,
      startDate: 'April 2021',
      endDate: 'July 2022',
    },
  ]

export default PAST_ROLES
