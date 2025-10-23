import PreventiveDetailsHeader from './ui/PreventiveDetailsHeader';
import PreventiveDetailsTabs from './ui/PreventiveDetailsTabs';

export default function PreventiveDetails() {
  return (
    <div className="w-full flex flex-col md:gap-4 gap-3">
      <PreventiveDetailsHeader />
      <div className="border-b border-gray-200" />
      <PreventiveDetailsTabs />
    </div>
  );
}
