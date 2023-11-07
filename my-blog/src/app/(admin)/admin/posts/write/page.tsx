'use client';

import ContentHeader from '@/app/(admin)/components/ContentHeader';
import MarkdownViewer from '@/components/MarkdownViewer';
import MarkdownIt from 'markdown-it';
import Heading from '@/components/ui/atoms/Heading';
import { LoginContextProps, useLoginContext } from '@/contexts/LoginProvider';
import { useState, useRef } from 'react';

export default function WritePage() {
  const {
    user: { accessToken },
  } = useLoginContext() as LoginContextProps;
  const editorRef = useRef<HTMLDivElement | null>(null);
  const previewRef = useRef<HTMLDivElement | null>(null);
  const [markdown, setMarkDown] = useState('');
  const mdParser = new MarkdownIt({
    html: false,
    linkify: true,
    breaks: true,
  });

  const onSubmitHandler = async () => {
    // const res = await writePost(accessToken!, text!);
  };

  const onInputTextHandler = (e: React.ChangeEvent<HTMLDivElement>) => {
    setMarkDown(editorRef.current?.innerText as string);
    if (markdown.length > 0) {
      previewRef.current!.innerHTML = mdParser.render(markdown);
    }
  };

  const onPasteImageHandler = async (e: any) => {
    e.preventDefault();
    const item = e.clipboardData.items[0];

    if (item.type.includes('image')) {
      // 클립보드로부터 이미지를 가져오는 방법 1
      const imgSrc = URL.createObjectURL(await item.getAsFile());
      editorRef.current!.innerText += `![](${imgSrc})`;
      // URL.revokeObjectURL(imgSrc);

      // 클립보드로부터 이미지를 가져오는 방법 2
      // const reader = new FileReader();

      // reader.onload = (e) => {
      //   console.log('image loaded!!!');
      //   editorRef.current!.innerHTML += `<div><img src=${e.target?.result} ></div>`;
      // };

      // reader.readAsDataURL(item.getAsFile());
    }
  };

  return (
    <div className="w-full px-16 mt-12 md:ml-[350px]">
      <ContentHeader title="글 작성하기" />
      <div className="flex w-full">
        <div className="w-[50%] mr-8">
          <div
            ref={editorRef}
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
          {markdown && (
            <div ref={previewRef} className="prose text-theme-text"></div>
          )}
        </div>
      </div>
      <button className="self-end" onClick={onSubmitHandler}>
        작성하기
      </button>
    </div>
  );
}
