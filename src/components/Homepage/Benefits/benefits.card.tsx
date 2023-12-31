import React from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator
} from '../../../../lib/chakraui';

export default function CustomTabs() {
  return (
    <div>
      <Tabs isFitted position="relative" variant="unstyled">
        <TabList>
          <Tab className="text-[#221389]  lg:text-xl">FOR PATIENTS</Tab>
          <Tab className="text-[#221389]  lg:text-xl">FOR DOCTORS</Tab>
        </TabList>
        <TabIndicator mt="-1.5px" height="2px" bg="white" borderRadius="1px" />
        <TabPanels className="p-4">
          <TabPanel>
            <div>
              <ul className="flex flex-col gap-3 list-disc lg:text-xl">
                <li>
                  <span className="text-white not-italic font-normal leading-[148.5%] tracking-[1.875px] uppercase">
                    Early Detection:
                  </span>
                  <span className="text-[#221389] not-italic font-normal leading-[148.5%] tracking-[1.875px]">
                    AI/ML enables early skin condition identification, enhancing
                    treatment success and reducing complications.
                  </span>
                </li>

                <li>
                  <span className="text-white not-italic font-normal leading-[148.5%] tracking-[1.875px] uppercase">
                    Convenience:
                  </span>
                  <span className="text-[#221389] not-italic font-normal leading-[148.5%] tracking-[1.875px]">
                    Access the AI/ML system anytime from home, eliminating the
                    need for in-person appointments.
                  </span>
                </li>

                <li>
                  <span className="text-white not-italic font-normal leading-[148.5%] tracking-[1.875px] uppercase">
                    Accessibility:
                  </span>
                  <span className="text-[#221389] not-italic font-normal leading-[148.5%] tracking-[1.875px]">
                    Under-served areas benefit from remote assessments, reducing
                    travel burdens.
                  </span>
                </li>

                <li>
                  <span className="text-white not-italic font-normal leading-[148.5%] tracking-[1.875px] uppercase">
                    Cost Savings:
                  </span>
                  <span className="text-[#221389] not-italic font-normal leading-[148.5%] tracking-[1.875px]">
                    Avoid unnecessary healthcare visits, saving on travel and
                    consultation expenses.
                  </span>
                </li>

                <li>
                  <span className="text-white not-italic font-normal leading-[148.5%] tracking-[1.875px] uppercase">
                    Personalized Recommendations:
                  </span>
                  <span className="text-[#221389] not-italic font-normal leading-[148.5%] tracking-[1.875px]">
                    Receive customized skincare advice, enhancing treatment
                    effectiveness based on skin type, condition, and lifestyle.
                  </span>
                </li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <ul className="flex flex-col gap-3 list-disc lg:text-xl">
                <li>
                  <span className="text-white not-italic font-normal leading-[148.5%] tracking-[1.875px] uppercase">
                    Enhanced Accuracy:
                  </span>
                  <span className="text-[#221389] not-italic font-normal leading-[148.5%] tracking-[1.875px]">
                    These models improve diagnostic accuracy, reducing the risk
                    of errors.
                  </span>
                </li>

                <li>
                  <span className="text-white not-italic font-normal leading-[148.5%] tracking-[1.875px] uppercase">
                    Efficient Workflow:
                  </span>
                  <span className="text-[#221389] not-italic font-normal leading-[148.5%] tracking-[1.875px]">
                    Dermatologists can focus on complex cases, while routine
                    ones are handled by AI, saving time.
                  </span>
                </li>

                <li>
                  <span className="text-white not-italic font-normal leading-[148.5%] tracking-[1.875px] uppercase">
                    Informed Decisions:
                  </span>
                  <span className="text-[#221389] not-italic font-normal leading-[148.5%] tracking-[1.875px]">
                    Historical data analysis helps identify trends and informs
                    treatment decisions.
                  </span>
                </li>

                <li>
                  <span className="text-white not-italic font-normal leading-[148.5%] tracking-[1.875px] uppercase">
                    Up-to-Date Insights:
                  </span>
                  <span className="text-[#221389] not-italic font-normal leading-[148.5%] tracking-[1.875px]">
                    AI/ML models continuously learn from new cases and research,
                    keeping doctors informed.
                  </span>
                </li>

                <li>
                  <span className="text-white not-italic font-normal leading-[148.5%] tracking-[1.875px] uppercase">
                    Expanded Reach:
                  </span>
                  <span className="text-[#221389] not-italic font-normal leading-[148.5%] tracking-[1.875px]">
                    Scalable AI/ML can handle many patients, broadening access
                    to care.
                  </span>
                </li>
              </ul>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
