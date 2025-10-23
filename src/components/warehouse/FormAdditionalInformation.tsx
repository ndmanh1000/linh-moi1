import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
  Textarea,
} from 'flowbite-react';

import Label from '../form/Label';
import UpFile10 from '../upload/UpFile10';

export default function FormAdditionalInformation() {
  return (
    <Accordion>
      <AccordionPanel>
        <AccordionTitle>Additional Information</AccordionTitle>
        <AccordionContent>
          <div className="flex flex-col md:gap-3 gap-3 w-full">
            <div>
              <Label>Notes</Label>
              <Textarea />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-sm text-gray-700">Files</label>
              <UpFile10 />
            </div>
            <div className="text-[#0071FF] cursor-pointer">Add from Saved Files</div>
          </div>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  );
}
