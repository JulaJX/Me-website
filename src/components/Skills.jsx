//IMPORT STYLES
import './Skills.css';

//IMPORT ICONS
import { RiCodeSSlashFill } from 'react-icons/ri';
import { SiDatabricks, SiPython, SiPowerbi } from 'react-icons/si';
import {
  RiDatabase2Fill,
  RiCloudFill,
  RiGitMergeFill,
  RiTerminalBoxFill,
  RiFilter3Fill,
} from 'react-icons/ri';

//IMPORT COMPONENTS
import Skill from '../components/Skill';

const Skills = () => {
  return (
    <div className="Skills pb-[270px] xl:pb-[500px] pt-[220px] md:pt-[340px] xl:pt-[415px] flex flex-col items-left justify-center">
      <div className="absolute z-[-2] w-[100%] h-[2500px] xl:h-[2200px] 2xl:h-[1900px] top-[0] bg-mbg"></div>
      <div className="square h-[120px] w-[120px] absolute bg-secondary  xl:block hidden z-[0]"></div>
      <div className="square-m h-[90px] w-[90px] absolute bg-secondary  xl:block hidden z-[0]"></div>
      <div className="square-s h-[50px] w-[50px] absolute bg-secondary  xl:block hidden z-[0]"></div>

      <div className="square2 h-[120px] w-[120px] absolute bg-secondary xl:block hidden z-[0]"></div>
      <div className="square2-m h-[90px] w-[90px] absolute bg-secondary xl:block hidden z-[0]"></div>
      <div className="square2-s h-[50px] w-[50px] absolute bg-secondary  xl:block hidden z-[0]"></div>

      <div id="anchor" className="mb-[200px] mt-[-200px]"></div>

      <div className="flex flex-col mx-auto">
        <div className="flex flex-row items-center justify-center mb-[80px]">
          <RiCodeSSlashFill className=" text-[25px] sm:text-[35px] md:text-[46px] text-primary mr-[30px]" />
          <h1 className="text-primary text-center text-[15px] sm:text-[20px] md:text-[30px] z-[3]">
            Tech I work with
          </h1>
        </div>

        <div className="flex items-center justify-center gap-[70px] md:gap-[100px] flex-wrap w-[60%] md:w-[50%] mx-auto">
          <Skill
            linkdescription="Link to Transact-SQL page"
            lang="T-SQL"
            color="text-[#29C6FF]"
            img={<RiDatabase2Fill className="text-[28px] sm:text-[35px] md:text-[40px] text-[#29C6FF]" />}
            link="https://en.wikipedia.org/wiki/Transact-SQL"
          />

          <Skill
            linkdescription="Link to Microsoft Azure page"
            lang="Azure"
            color="text-[#2E8EFF]"
            img={<RiCloudFill className="text-[28px] sm:text-[35px] md:text-[40px] text-[#2E8EFF]" />}
            link="https://en.wikipedia.org/wiki/Microsoft_Azure"
          />

          <Skill
            linkdescription="Link to Azure Data Factory documentation"
            lang="ADF"
            color="text-[#61FFF5]"
            img={<RiGitMergeFill className="text-[28px] sm:text-[35px] md:text-[40px] text-[#61FFF5]" />}
            link="https://learn.microsoft.com/en-us/azure/data-factory/introduction"
          />

          <Skill
            linkdescription="Link to Python page"
            lang="Python"
            color="text-[#FFB329]"
            img={<SiPython className="text-[28px] sm:text-[35px] md:text-[40px] text-[#FFB329]" />}
            link="https://en.wikipedia.org/wiki/Python_(programming_language)"
          />

          <Skill
            linkdescription="Link to SQL Server Management Studio documentation"
            lang="SSMS 22"
            color="text-[#ffff]"
            img={<RiTerminalBoxFill className="text-[28px] sm:text-[35px] md:text-[40px] text-[#ffff]" />}
            link="https://learn.microsoft.com/en-us/sql/ssms/sql-server-management-studio-ssms"
          />

          <Skill
            linkdescription="Link to Databricks page"
            lang="Databricks"
            color="text-[#FF3621]"
            img={<SiDatabricks className="text-[28px] sm:text-[35px] md:text-[40px] text-[#FF3621]" />}
            link="https://en.wikipedia.org/wiki/Databricks"
          />

          <Skill
            linkdescription="Link to Power BI page"
            lang="Power BI"
            color="text-[#F2C811]"
            img={<SiPowerbi className="text-[28px] sm:text-[35px] md:text-[40px] text-[#F2C811]" />}
            link="https://en.wikipedia.org/wiki/Microsoft_Power_BI"
          />

          <Skill
            linkdescription="Link to Power Query documentation"
            lang="P-Query"
            color="text-[#45FF61]"
            img={<RiFilter3Fill className="text-[28px] sm:text-[35px] md:text-[40px] text-[#45FF61]" />}
            link="https://learn.microsoft.com/en-us/power-query/power-query-what-is-power-query"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
