'use client';

import ContentHeader from '@/app/(admin)/components/ContentHeader';
import MarkdownIt from 'markdown-it';
import Heading from '@/components/ui/atoms/Heading';
import { LoginContextProps, useLoginContext } from '@/contexts/LoginProvider';
import { useState, useRef } from 'react';
import { writePost } from '@/api/post';

export default function WritePage() {
  const {
    user: { accessToken },
  } = useLoginContext() as LoginContextProps;
  const editorRef = useRef<HTMLDivElement | null>(null);
  const previewRef = useRef<HTMLDivElement | null>(null);
  const [title, setTitle] = useState('');
  const [markdown, setMarkDown] = useState('');
  const [preview, setPreview] = useState('');

  const mdParser = new MarkdownIt({
    html: false,
    linkify: true,
    breaks: true,
  });

  const onSubmitHandler = async () => {
    const res = await writePost(accessToken!, markdown!);
  };

  const onInputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle((prev) => {
      const mdTitle = `# ${e.target.value}\n`;
      setPreview((prev) => {
        console.log(mdTitle);
        return mdParser.render(mdTitle);
      });

      onInputTextHandler(e);

      return e.target.value;
    });
  };

  const onInputTextHandler = (e: React.ChangeEvent<HTMLDivElement>) => {
    setMarkDown((prev) => {
      const mdTitle = `# ${title}\n`;
      setPreview(
        mdParser.render((mdTitle + editorRef.current?.innerText) as string)
      );
      return editorRef.current?.innerText as string;
    });
  };

  const onPasteHandler = async (e: any) => {
    e.preventDefault();
    const doc = editorRef.current?.ownerDocument.defaultView;
    const sel = doc?.getSelection(); // getSelection: caret의 현재 위치 또는 유저가 선택한 text의 길이
    const range = sel?.getRangeAt(0);
    const item = e.clipboardData.items[0];

    if (item.type.includes('image')) {
      // 클립보드로부터 이미지를 가져오는 방법 1
      const imgSrc = URL.createObjectURL(await item.getAsFile());

      const imageNode = document.createTextNode(`![](${imgSrc})`);
      // setPreview((prev) => {
      //   return mdParser.render(prev + `![](${imgSrc})`);
      // });

      range?.insertNode(imageNode);

      // URL.revokeObjectURL(imgSrc);

      // 클립보드로부터 이미지를 가져오는 방법 2
      // const reader = new FileReader();

      // reader.onload = (e) => {
      //   console.log('image loaded!!!');
      //   editorRef.current!.innerHTML += `<div><img src=${e.target?.result} ></div>`;
      // };

      // reader.readAsDataURL(item.getAsFile());
    } else {
      item.getAsString((str: string) => {
        const text = document.createTextNode(str);
        // sel?.removeAllRanges();
        range?.deleteContents();
        range?.insertNode(text);
        console.log(sel?.getRangeAt(0));
      });
    }

    onInputTextHandler(e);
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const doc = editorRef.current?.ownerDocument.defaultView;
      const sel = doc?.getSelection(); // getSelection: caret의 현재 위치 또는 유저가 선택한 text의 길이
      const range = sel?.getRangeAt(0);

      const tabNode = document.createTextNode('\u00a0\u00a0\u00a0\u00a0');
      range?.insertNode(tabNode);

      range?.setStartAfter(tabNode);
      range?.setEndAfter(tabNode);
      sel?.removeAllRanges();
      sel?.addRange(range as Range);
    }
  };

  return (
    <div className="w-full px-16 mt-12 md:ml-[350px]">
      <ContentHeader title="글 작성하기" />
      <div className="flex w-full">
        <div className="w-[50%] mr-8">
          <input
            className="w-full outline-none bg-transparent text-2xl mb-8"
            value={title}
            onChange={onInputTitle}
            placeholder="포스트 제목을 입력해주세요."
          ></input>
          <div
            id="editor"
            ref={editorRef}
            className="w-full h-full bg-transparent outline-none"
            contentEditable={true}
            placeholder="포스트 내용 입력하기"
            onInput={onInputTextHandler}
            spellCheck={false}
            onPaste={onPasteHandler}
            onKeyDown={onKeyDownHandler}
          />
        </div>
        <div>
          <Heading size="sm">미리보기</Heading>
          {preview && (
            <div
              ref={previewRef}
              contentEditable={false}
              dangerouslySetInnerHTML={{ __html: preview }}
              className="prose text-theme-text"
            ></div>
          )}
        </div>
      </div>
      <button
        className="w-52 absolute bottom-6 flex items-center justify-center gap-2 border border-zinc-500 rounded-xl bg-theme-secondary dark:bg-theme-primary text-white dark:text-theme-text py-2"
        onClick={onSubmitHandler}
      >
        작성하기
      </button>
    </div>
  );
}
