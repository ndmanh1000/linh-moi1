import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from 'flowbite-react';
import Select from '../form/Select';
import Label from '../form/Label';

export default function FormPeopleTeam() {
  interface OptionType {
    value: string;
    label: string;
  }
  const options12: OptionType[] = [
    { value: 'tranlinh', label: 'Trần Linh' },
    { value: 'template', label: 'A' },
    { value: 'development', label: 'B' },
  ];

  const handleSelectChange12 = (value: string) => {
    console.log('Selected value:', value);
  };

  return (
    <Accordion>
      <AccordionPanel>
        <AccordionTitle>People and Teams</AccordionTitle>
        <AccordionContent>
          <div className="w-full grid grid-cols-1 md:flex items-center md:gap-5 gap-3">
            <div className="w-full">
              <Label>People</Label>
              <Select
                options={options12}
                placeholder="Select an option"
                onChange={handleSelectChange12}
                className="dark:bg-dark-900 w-full"
              />
            </div>
            <div className="w-full">
              <Label>Team</Label>
              <Select
                options={options12}
                placeholder="Select an option"
                onChange={handleSelectChange12}
                className="dark:bg-dark-900 w-full"
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  );
}
