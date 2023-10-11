import MainWrapper from '@/components/layouts/MainWrapper';
import Heading from '@/components/ui/atoms/Heading';

export default function page() {
  return (
    <MainWrapper>
      <Heading size={'xl'} className="mt-12 mb-6">
        Tags
      </Heading>
      <div className="flex flex-wrap gap-2">
        <div className="flex justify-center items-center text-sm h-3 text-theme-text bg-theme-primary rounded-lg px-4 py-3">
          JavaScript
        </div>
        <div className="flex justify-center items-center text-sm h-3 text-theme-text bg-theme-primary rounded-lg px-4 py-3">
          React
        </div>
        <div className="flex justify-center items-center text-sm h-3 text-theme-text bg-theme-primary rounded-lg px-4 py-3">
          JS
        </div>
        <div className="flex justify-center items-center text-sm h-3 text-theme-text bg-theme-primary rounded-lg px-4 py-3">
          TS
        </div>
        <div className="flex justify-center items-center text-sm h-3 text-theme-text bg-theme-primary rounded-lg px-4 py-3">
          ReactNative
        </div>
        <div className="flex justify-center items-center text-sm h-3 text-theme-text bg-theme-primary rounded-lg px-4 py-3">
          TypeScript
        </div>
        <div className="flex justify-center items-center text-sm h-3 text-theme-text bg-theme-primary rounded-lg px-4 py-3">
          Java
        </div>
        <div className="flex justify-center items-center text-sm h-3 text-theme-text bg-theme-primary rounded-lg px-4 py-3">
          Python
        </div>
        <div className="flex justify-center items-center text-sm h-3 text-theme-text bg-theme-primary rounded-lg px-4 py-3">
          C#
        </div>
        <div className="flex justify-center items-center text-sm h-3 text-theme-text bg-theme-primary rounded-lg px-4 py-3">
          localStorage
        </div>
        <div className="flex justify-center items-center text-sm h-3 text-theme-text bg-theme-primary rounded-lg px-4 py-3">
          JavaScript
        </div>
      </div>
    </MainWrapper>
  );
}
