'use client'

import React from 'react'
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export type ItemProps = {
  Item: {id: number, name: string};
};


const SortableItem = (props: ItemProps) => {
  const { Item } = props;
  const {
    isDragging,
    // 並び替えのつまみ部分に設定するプロパティ
    setActivatorNodeRef,
    attributes,
    listeners,
    // DOM全体に対して設定するプロパティ
    setNodeRef,
    transform,
    transition
  } = useSortable({ id: Item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : ''
  };

  return (
    <div ref={setNodeRef} style={style}>
      <div className="p-4 m-4 border rounded bg-write flex">
        {/* 並び替えのつまみ部分 */}
        <div ref={setActivatorNodeRef}  
          {...attributes} 
          {...listeners}
          className={
            `${isDragging ? "cursor-grabbing" : "cursor-grab"}`}>
            {/* アイコン */}
            <svg className="h-8 w-8 text-red-500 mr-12"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="9" cy="5" r="1" />  <circle cx="9" cy="12" r="1" />  <circle cx="9" cy="19" r="1" />  <circle cx="15" cy="5" r="1" />  <circle cx="15" cy="12" r="1" />  <circle cx="15" cy="19" r="1" /></svg>
        </div>
        <div 
          key={Item.id}>
            {Item.name}
        </div>
      </div>
    </div>
  )
}

export default SortableItem