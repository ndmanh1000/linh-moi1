import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from 'flowbite-react';

export default function FormCustomData() {
  return (
    <Accordion>
      <AccordionPanel>
        <AccordionTitle>FormCustomData</AccordionTitle>
        <AccordionContent>
          <div className="flex flex-col md:gap-3 gap-3 w-full">
            <div>
              Add unipue fields or information tailored to your organization’s needs, making this
              part record more flexible and specific to your workflows.
            </div>
            <div className="mt-3">
              <button
                className="flex items-center gap-2 text-sm border rounded-md px-3 py-2 hover:bg-gray-50"
                type="button"
              >
                + Add Custom Field
              </button>
            </div>
          </div>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  );
}
