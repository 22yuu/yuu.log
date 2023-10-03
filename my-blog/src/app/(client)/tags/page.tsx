import MainWrapper from '@/components/layouts/MainWrapper';
import Heading from '@/components/ui/atoms/Heading';

export default function page() {
  return (
    <MainWrapper>
      <Heading size={'xl'}>Tags</Heading>
      <div className="flex flex-wrap gap-2">
        <div className="flex justify-center items-center h-8 text-theme-text bg-theme-primary rounded-xl px-2 py-2">
          JavaScript
        </div>
        <div className="flex justify-center items-center h-8 text-theme-text bg-theme-primary rounded-xl px-2 py-2">
          React
        </div>
        <div className="flex justify-center items-center h-8 text-theme-text bg-theme-primary rounded-xl px-2 py-2">
          JS
        </div>
        <div className="flex justify-center items-center h-8 text-theme-text bg-theme-primary rounded-xl px-2 py-2">
          TS
        </div>
        <div className="flex justify-center items-center h-8 text-theme-text bg-theme-primary rounded-xl px-2 py-2">
          ReactNative
        </div>
        <div className="flex justify-center items-center h-8 text-theme-text bg-theme-primary rounded-xl px-2 py-2">
          TypeScript
        </div>
        <div className="flex justify-center items-center h-8 text-theme-text bg-theme-primary rounded-xl px-2 py-2">
          Java
        </div>
        <div className="flex justify-center items-center h-8 text-theme-text bg-theme-primary rounded-xl px-2 py-2">
          Python
        </div>
        <div className="flex justify-center items-center h-8 text-theme-text bg-theme-primary rounded-xl px-2 py-2">
          C#
        </div>
        <div className="flex justify-center items-center h-8 text-theme-text bg-theme-primary rounded-xl px-2 py-2">
          localStorage
        </div>
        <div className="flex justify-center items-center h-8 text-theme-text bg-theme-primary rounded-xl px-2 py-2">
          JavaScript
        </div>
      </div>
    </MainWrapper>
  );
}
