import MainWrapper from '@/components/layouts/MainWrapper';
import Heading from '@/components/ui/atoms/Heading';

export default function page() {
  return (
    <MainWrapper>
      <Heading size={'xl'}>Tags</Heading>
      <div className="flex flex-wrap gap-2">
        <span className="text-center leading-8 h-8 text-theme-text bg-theme-primary rounded-xl">
          JavaScript
        </span>
        <span className="text-center leading-8 h-8 text-theme-text bg-theme-primary rounded-xl">
          CSS
        </span>
        <span className="text-center leading-8 h-8 text-theme-text bg-theme-primary rounded-xl">
          JS
        </span>
        <span className="text-center leading-8 h-8 text-theme-text bg-theme-primary rounded-xl">
          React
        </span>
        <span className="text-center leading-8 h-8 text-theme-text bg-theme-primary rounded-xl">
          TypeScript
        </span>
        <span className="text-center leading-8 h-8 text-theme-text bg-theme-primary rounded-xl">
          JavaScript
        </span>
        <span className="text-center leading-8 h-8 text-theme-text bg-theme-primary rounded-xl">
          JavaScript
        </span>
        <span className="text-center leading-8 h-8 text-theme-text bg-theme-primary rounded-xl">
          JavaScript
        </span>
      </div>
    </MainWrapper>
  );
}
