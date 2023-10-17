import MainWrapper from '@/components/layouts/MainWrapper';
import Tag from '@/components/ui/Tag';
import Heading from '@/components/ui/atoms/Heading';

export default function page() {
  return (
    <MainWrapper>
      <Heading size={'xl'} className="mt-12 mb-6">
        Tags
      </Heading>
      <div className="flex flex-wrap gap-2">
        <Tag tagName="JavaScript" />
        <Tag tagName="React" />
        <Tag tagName="JS" />
        <Tag tagName="TS" />
        <Tag tagName="ReactNative" />
        <Tag tagName="TypeScript" />
        <Tag tagName="Java" />
        <Tag tagName="Python" />
        <Tag tagName="localStorage" />
      </div>
    </MainWrapper>
  );
}
