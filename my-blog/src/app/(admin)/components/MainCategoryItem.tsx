'use client';

import AngleRightIcon from '@/components/ui/icons/AngleRightIcon';
import { ChangeEvent, useState } from 'react';
import SubCategoryItem from './SubCategoryItem';
import { categoryList } from '@/constants/mock-categories';

type Props = {
  id?: string;
  name?: string;
  isAdd?: boolean;
  toggleAdd?: () => void;
  onAdd: (category: string) => void;
  onEdit: (id: string, updated: string) => void;
  onDelete: (id: string) => void;
};

export default function MainCategoryItem({
  id,
  name,
  isAdd,
  toggleAdd,
  onAdd,
  onEdit,
  onDelete,
}: Props) {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [newCateoryName, setNewCategoryName] = useState('');
  const [editCategoryName, setEditCategoryName] = useState(name);

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  const inputCategoryHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (isAdd) {
      setNewCategoryName(e.target.value);
    } else if (isEdit) {
      setEditCategoryName(e.target.value);
    }
  };
  return (
    <div className="mb-4" id={id}>
      <div className="flex w-full h-14 items-center bg-theme-primary border border-zinc-300 dark:border-zinc-500">
        <button
          onClick={() => setOpen(!open)}
          className="w-14 h-14 bg-theme-bg flex justify-center items-center border border-l-0 border-zinc-300 dark:border-zinc-500"
          disabled={isAdd}
        >
          <AngleRightIcon
            className={`w-4 h-4 transform ${
              open && 'rotate-90'
            } transition-transform duration-300`}
          />
        </button>

        <div className="flex w-full items-center justify-between px-6">
          {isAdd || isEdit ? (
            <>
              <form>
                <input
                  type="text"
                  className="w-80 outline-none border border-zinc-300 dark:border-zinc-500"
                  value={isAdd ? newCateoryName : editCategoryName}
                  onChange={inputCategoryHandler}
                />
              </form>
              <div className="flex gap-4">
                <button
                  className="w-14 flex items-center justify-center gap-2 border border-zinc-500 rounded-xl bg-theme-secondary dark:bg-theme-primary text-white dark:text-theme-text py-2 text-sm"
                  onClick={() => {
                    if (isAdd) {
                      onAdd(newCateoryName);
                    } else if (isEdit) {
                      onEdit(id!, editCategoryName!);
                    }
                  }}
                >
                  확인
                </button>
                <button
                  className="w-14 flex items-center justify-center gap-2 border border-zinc-500 rounded-xl bg-theme-secondary dark:bg-theme-primary text-white dark:text-theme-text py-2 text-sm"
                  onClick={() => {
                    if (isAdd) {
                      toggleAdd!();
                    } else if (isEdit) {
                      toggleEdit();
                    }
                  }}
                >
                  취소
                </button>
              </div>
            </>
          ) : (
            <>
              <p>{name}</p>
              <div className="flex gap-4">
                <button className="w-14 flex items-center justify-center gap-2 border border-zinc-500 rounded-xl bg-theme-secondary dark:bg-theme-primary text-white dark:text-theme-text py-2 text-sm">
                  추가
                </button>
                <button
                  className="w-14 flex items-center justify-center gap-2 border border-zinc-500 rounded-xl bg-theme-secondary dark:bg-theme-primary text-white dark:text-theme-text py-2 text-sm"
                  onClick={() => toggleEdit()}
                >
                  수정
                </button>
                <button
                  className="w-14 flex items-center justify-center gap-2 border border-zinc-500 rounded-xl bg-theme-secondary dark:bg-theme-primary text-white dark:text-theme-text py-2 text-sm"
                  onClick={() => onDelete(id!)}
                >
                  삭제
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      {open && name && (
        <>
          {categoryList[name].map((subCategory, index) => (
            <SubCategoryItem
              key={`${subCategory}-${index}`}
              name={subCategory}
            />
          ))}
        </>
      )}
    </div>
  );
}
