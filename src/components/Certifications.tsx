// path: src/components/Certifications.tsx
import React, { useState } from 'react';

interface Certification {
    title: string;
    issuer: string;
    issueDate: string;
    credentialId?: string;
    logo: string;
  }

const certifications: Certification[] = [
  {
    title: "PrivacyOps Certification – Incident & Data Breach Management",
    issuer: "Securiti",
    issueDate: "Dec 2022",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFnjr68VLlnVw/company-logo_100_100/company-logo_100_100/0/1693074286319?e=1739404800&v=beta&t=tav6Lyv10X-xARWZvYZvGL60Cn8gAWVgO5AhIVwJYAI"
  },
  {
    title: "PrivacyOps Certification – Privacy Notice Creation & Management",
    issuer: "Securiti",
    issueDate: "Dec 2022",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFnjr68VLlnVw/company-logo_100_100/company-logo_100_100/0/1693074286319?e=1739404800&v=beta&t=tav6Lyv10X-xARWZvYZvGL60Cn8gAWVgO5AhIVwJYAI"
  },
  {
    title: "PrivacyOps Certification – Vendor Assessment Automation Badge",
    issuer: "Securiti",
    issueDate: "Dec 2022",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFnjr68VLlnVw/company-logo_100_100/company-logo_100_100/0/1693074286319?e=1739404800&v=beta&t=tav6Lyv10X-xARWZvYZvGL60Cn8gAWVgO5AhIVwJYAI"
  },
  {
    title: "AWS Developer Associate 2021: Network Security",
    issuer: "Skillsoft",
    issueDate: "Oct 2022",
    credentialId: "61023160",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQG7ftSbI_3a1w/company-logo_100_100/company-logo_100_100/0/1719840073683/skillsoft_logo?e=1739404800&v=beta&t=Ery2MM4IQ_xqyGsA-BHerZ9PnKrlKzpuftxgxGb1Y8M"
  },
  {
    title: "AWS SysOps Associate 2021: Database & EBS Volume Management",
    issuer: "Skillsoft",
    issueDate: "Oct 2022",
    credentialId: "61025397",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQG7ftSbI_3a1w/company-logo_100_100/company-logo_100_100/0/1719840073683/skillsoft_logo?e=1739404800&v=beta&t=Ery2MM4IQ_xqyGsA-BHerZ9PnKrlKzpuftxgxGb1Y8M"
  },
  {
    title: "Blockchains & Ethereum: Mining & Smart Contracts in Ethereum",
    issuer: "Skillsoft",
    issueDate: "Oct 2022",
    credentialId: "61019693",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQG7ftSbI_3a1w/company-logo_100_100/company-logo_100_100/0/1719840073683/skillsoft_logo?e=1739404800&v=beta&t=Ery2MM4IQ_xqyGsA-BHerZ9PnKrlKzpuftxgxGb1Y8M"
  },
  {
    title: "Ethereum Smart Contracts with Solidity: Functions in Solidity",
    issuer: "Skillsoft",
    issueDate: "Oct 2022",
    credentialId: "60928524",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQG7ftSbI_3a1w/company-logo_100_100/company-logo_100_100/0/1719840073683/skillsoft_logo?e=1739404800&v=beta&t=Ery2MM4IQ_xqyGsA-BHerZ9PnKrlKzpuftxgxGb1Y8M"
  },
  {
    title: "Smart Contracts & Hyperledger Fabric: Foundations of Hyperledger Fabric",
    issuer: "Skillsoft",
    issueDate: "Oct 2022",
    credentialId: "61021579",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQG7ftSbI_3a1w/company-logo_100_100/company-logo_100_100/0/1719840073683/skillsoft_logo?e=1739404800&v=beta&t=Ery2MM4IQ_xqyGsA-BHerZ9PnKrlKzpuftxgxGb1Y8M"
  },
  {
    title: "Learn Solidity, Blockchain, and Smart Contracts",
    issuer: "freeCodeCamp",
    issueDate: "Feb 2020",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQGLKj3JHcof0w/company-logo_100_100/company-logo_100_100/0/1630639684997/free_code_camp_logo?e=1739404800&v=beta&t=FBD3dgA5mGqBsjBqjuNS0BO0XW10dN_oEAyzXxOsUfs",
  },
  {
    title: "Back End Development and APIs",
    issuer: "freeCodeCamp",
    issueDate: "Jan 2019",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQGLKj3JHcof0w/company-logo_100_100/company-logo_100_100/0/1630639684997/free_code_camp_logo?e=1739404800&v=beta&t=FBD3dgA5mGqBsjBqjuNS0BO0XW10dN_oEAyzXxOsUfs"
  },
  {
    title: "Feature Engineering",
    issuer: "Codecademy",
    issueDate: "Feb 2018",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQH81kKlXtE0og/company-logo_100_100/company-logo_100_100/0/1720724787444/codecademy_logo?e=1739404800&v=beta&t=TWCP-p-3tIL3IP35mfx_rCZ1y83zbtQaqBkVUJIzJ0c",
  },
  {
    title: "User Authentication & Authorization in Express",
    issuer: "CodeAcademy",
    issueDate: "Jan 2017",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQH81kKlXtE0og/company-logo_100_100/company-logo_100_100/0/1720724787444/codecademy_logo?e=1739404800&v=beta&t=TWCP-p-3tIL3IP35mfx_rCZ1y83zbtQaqBkVUJIzJ0c",
  },
  {
    title: "Machine Learning with Python",
    issuer: "freeCodeCamp",
    issueDate: "Jan 2016",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQGLKj3JHcof0w/company-logo_100_100/company-logo_100_100/0/1630639684997/free_code_camp_logo?e=1739404800&v=beta&t=FBD3dgA5mGqBsjBqjuNS0BO0XW10dN_oEAyzXxOsUfs",
  },
  {
    title: "Nourish to Thrive",
    issuer: "Thrive Global",
    issueDate: "",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQFpUcb8f4Pk4Q/company-logo_100_100/company-logo_100_100/0/1656694636054/thrive_global_logo?e=1739404800&v=beta&t=YerFdHjgWLMa4cf2Gxl2bmuiFXV7F7PZhmla4YH0Hlk"
  },
  {
    title: "PrivacyOps Certification – Assessment Automation Badge",
    issuer: "Securiti",
    issueDate: "Dec 2022",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFnjr68VLlnVw/company-logo_100_100/company-logo_100_100/0/1693074286319?e=1739404800&v=beta&t=tav6Lyv10X-xARWZvYZvGL60Cn8gAWVgO5AhIVwJYAI"
  },
  {
    title: "PrivacyOps Certification – Consent Lifecycle Management Badge",
    issuer: "Securiti",
    issueDate: "Dec 2022",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFnjr68VLlnVw/company-logo_100_100/company-logo_100_100/0/1693074286319?e=1739404800&v=beta&t=tav6Lyv10X-xARWZvYZvGL60Cn8gAWVgO5AhIVwJYAI"
  },
  {
    title: "Thriving Mind",
    issuer: "Thrive Global",
    issueDate: "",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQFpUcb8f4Pk4Q/company-logo_100_100/company-logo_100_100/0/1656694636054/thrive_global_logo?e=1739404800&v=beta&t=YerFdHjgWLMa4cf2Gxl2bmuiFXV7F7PZhmla4YH0Hlk",
  },
  {
    title: "Thriving Together",
    issuer: "Thrive Global",
    issueDate: "",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQFpUcb8f4Pk4Q/company-logo_100_100/company-logo_100_100/0/1656694636054/thrive_global_logo?e=1739404800&v=beta&t=YerFdHjgWLMa4cf2Gxl2bmuiFXV7F7PZhmla4YH0Hlk"
  }
];  

export default function Certifications() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {certifications.map((cert, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col">
          <div className="h-12 w-12 relative mb-3">
          <img 
              src={cert.logo}
              alt={`${cert.issuer} logo`}
              className="w-16 h-16 object-contain rounded-lg"
            />
          </div>
          <h3 className="font-semibold text-lg mb-2">{cert.title}</h3>
          <div className="text-gray-600">
            <p>{cert.issuer}</p>
            <p>Issued {cert.issueDate}</p>
            {cert.credentialId && (
              <p className="text-sm">Credential ID: {cert.credentialId}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}