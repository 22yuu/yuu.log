import MainWrapper from "@/components/layouts/MainWrapper";
import Heading from "@/components/ui/atoms/Heading";
import StarIcon from "@/components/ui/icons/StarIcon";

export default function AboutPage() {
  return (
    <MainWrapper>
      <section className="flex py-4">
        <div className="w-1/2">
          <div className="w-48 h-48 mx-auto rounded-full border border-blue-300"></div>
        </div>
        <div>
          <span>끊임없이 노력・도전・열정을 다하는 개발자, 이진유</span>
          <div>LEE JIN YU</div>
          <div className="flex items-center gap-2">
            <StarIcon />
            <span>1994.05.10</span>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <Heading size={"xl"} className="mt-12">
          안녕하세요, 개발자 이진유입니다.
        </Heading>
        <p>
          세상에 영향력을 기여하는 개발자로 성장하고 싶습니다. 새로운 기술을
          배우고 학습하는 것도 좋아하지만 개발하며 자주 쓰이는 프레임워크,
          라이브러리에 관련된 개념과 기술을 깊게 공부하는 것을 더 선호하는
          편입니다. 공부 혹은 개발하며 알게된 새로운 사실이나 얻은 인사이트를
          남이 쉽게 이해할 수 있도록 글을 작성하려고 노력합니다. 개발자는 다양한
          직군과 커뮤니케이션을 해야하는 직군으로 생각하기 때문에 커뮤니케이션이
          원활한 업무 환경을 선호합니다.
        </p>
      </section>
    </MainWrapper>
  );
}
