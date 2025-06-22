import {
  type IconType,
  SiDatabricks,
  SiPython,
  SiPandas,
  SiJupyter,
  SiPlotly,
  SiMicrosoftsqlserver,
  SiSelenium,
  SiDocker,
  SiGit,
  SiAzuredevops,
  SiAzurefunctions,
  SiFigma,
} from '@icons-pack/react-simple-icons'
import { VscAzure } from "react-icons/vsc";
import { MdFactory } from "react-icons/md";
import { BsBarChartFill } from "react-icons/bs";



const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: 'Data Engineering',
      skills: [
        { skill: 'python', icon: SiPython },
        { skill: 'git', icon: SiGit },
        { skill: 'databricks', icon: SiDatabricks },
        { skill: 'Azure Data Factory', icon: MdFactory },
        { skill: 'Azure Functions', icon: SiAzurefunctions },
        { skill: 'SQL', icon: SiMicrosoftsqlserver },
        { skill: 'pandas', icon: SiPandas },
        { skill: 'jupyter', icon: SiJupyter },
        { skill: 'selenium', icon: SiSelenium },

      ],
    },
    {
      field: 'Intrastructure',
      skills: [
        { skill: 'Azure', icon: VscAzure },
        { skill: 'docker', icon: SiDocker },
        { skill: 'Azure DevOps', icon: SiAzuredevops },
      ],
    },
    {
      field: 'Data Visualisation',
      skills: [
        { skill: 'Power BI', icon: BsBarChartFill },
        { skill: 'plotly', icon: SiPlotly },
        { skill: 'Figma', icon: SiFigma },
      ],
    },

  ]

export default SKILLS
