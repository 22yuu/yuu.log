'use client';

import { writePost } from '@/api/post';
import ContentHeader from '@/app/(admin)/components/ContentHeader';
import MarkdownViewer from '@/components/MarkdownViewer';
import Heading from '@/components/ui/atoms/Heading';
import { LoginContextProps, useLoginContext } from '@/contexts/LoginProvider';
import { useState, useRef } from 'react';

export default function WritePage() {
  const {
    user: { accessToken },
  } = useLoginContext() as LoginContextProps;
  const ref = useRef<HTMLDivElement | null>(null);
  const [text, setText] = useState(ref.current?.innerHTML);
  const [imgData, setImgData] = useState();

  const onSubmitHandler = async () => {
    // const res = await writePost(accessToken!, text!);
  };

  const onInputTextHandler = (e: React.ChangeEvent<HTMLDivElement>) => {
    // console.log(ref.current?.innerText);
    console.log(text);
    setText(ref.current?.innerText);
  };

  /* const pasteImage = async () => {
    try {
      const clippedItems = await navigator.clipboard.read();

      console.log(clippedItems);
      console.log(clippedItems[0]);
      // const blob = await clippedItems[0].getType('image');
      // const data = URL.createObjectURL(blob);
      // setImgData(data);
    } catch (e) {
      console.log(e);
    }
  }; */

  const onPasteImageHandler = (e: any) => {
    e.preventDefault();
    const item = e.clipboardData.items[0];
    // console.log(item);
    // console.log(item.type.includes('image'));

    if (item.type.includes('image')) {
      const blob = item.getAsFile();
      console.log(blob);
      const data = URL.createObjectURL(blob);
      console.log(data);
      const file = new File([data], 'image', { ...blob });
      console.log(file);

      ref.current!.innerHTML = `<img src=${data}/>`;
    }
  };

  return (
    <div className="w-full px-16 mt-12 md:ml-[350px]">
      <ContentHeader title="글 작성하기" />
      <div className="flex w-full">
        <div className="w-[50%] mr-8">
          <div
            ref={ref}
            className="w-full h-full bg-transparent outline-none"
            contentEditable={true}
            placeholder="포스트 내용 입력하기"
            onInput={onInputTextHandler}
            spellCheck={false}
            onPaste={onPasteImageHandler}
          />
        </div>
        <div>
          <Heading size="sm">미리보기</Heading>
          {text && <MarkdownViewer content={text} />}
        </div>
      </div>
      <button className="self-end" onClick={onSubmitHandler}>
        작성하기
      </button>
    </div>
  );
}
