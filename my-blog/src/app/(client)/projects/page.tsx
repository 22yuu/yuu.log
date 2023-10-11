import MainWrapper from '@/components/layouts/MainWrapper';
import ProjectItemCard from '@/components/projects/ProjectItemCard';
import Heading from '@/components/ui/atoms/Heading';
import EyeIcon from '@/components/ui/icons/EyeIcon';
import ForkIcon from '@/components/ui/icons/ForkIcon';
import StarIcon from '@/components/ui/icons/StarIcon';
import Image from 'next/image';

export default function page() {
  return (
    <MainWrapper>
      <Heading size={'xl'} className="mt-12 mb-6">
        Projects
      </Heading>
      <div className="mt-12 text-theme-text">
        <ul className="relative">
          <div className="absolute left-[80px] w-1 h-full bg-theme-primary"></div>
          <ProjectItemCard />
          <ProjectItemCard />
          <ProjectItemCard />
          <ProjectItemCard />
        </ul>
      </div>
    </MainWrapper>
  );
}
