import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from 'flowbite-react';

export default function CheckListAccor() {
  return (
    <div className="space-y-6">
      {' '}
      {/* khoảng cách giữa 2 accordion */}
      {/* Accordion 1 */}
      <Accordion>
        <AccordionPanel>
          <AccordionTitle>PDF Smart Import</AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built on top of Tailwind
              CSS including buttons, dropdowns, modals, navbars, and more.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to&nbsp;
              <a
                href="https://flowbite.com/docs/getting-started/introduction/"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                get started&nbsp;
              </a>
              and start developing websites even faster with components on top of Tailwind CSS.
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
      {/* Accordion 2 */}
      <Accordion>
        <AccordionPanel>
          <AccordionTitle>AI Checklist Generation</AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from Flowbite are open source under
              the MIT license, whereas Tailwind UI is a paid product. Another difference is that
              Flowbite relies on smaller and standalone components, whereas Tailwind UI offers
              sections of pages.
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  );
}
