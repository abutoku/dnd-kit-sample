"use client"

import React, { useState } from 'react';
import { 
  DndContext, 
  closestCenter,
  DragEndEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors, } from '@dnd-kit/core';
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import SortableItem from './components/SortableItem';
import Link from 'next/link';

// アイテムオブジェクトの型定義
interface Item {
  id: number;
  name: string;
}

const sortItems: Item[] = [
  { "id": 1, "name": 'アイテム1' }, 
  { "id": 2, "name": "アイテム2" },
  { "id": 3, "name": "アイテム3" },
  { "id": 4, "name": "アイテム4" },
  { "id": 5, "name": "アイテム5" },
  { "id": 6, "name": "アイテム6" },
  { "id": 7, "name": "アイテム7" },
  { "id": 8, "name": "アイテム8" },
  { "id": 9, "name": "アイテム9" },
  { "id": 10, "name": "アイテム10" }
]

export default function Home() {
  
  const [items, setItems] = useState<Item[]>(sortItems)

  const mouseSensor = useSensor(MouseSensor)
  const touchSensor = useSensor(TouchSensor)
  const keyboardSensor = useSensor(KeyboardSensor)

  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor)

  // ドロップされた時の処理
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over == null || active.id === over.id) {
      return;
    }
    const oldIndex = items.findIndex((item: Item) => item.id === active.id);
    const newIndex = items.findIndex((item: Item) => item.id === over.id);
    const newItems = arrayMove(items, oldIndex, newIndex);
    setItems(newItems);
  }

  return (
    <div className="w-screen">
      <div className="p-16">
        <h1 className="text-xl text-bold text-center">Home</h1>
        <Link href="./swiper" className="text-ml text-bold text-center">Swiper</Link>
        <Link href="./chakra" className="text-ml text-bold text-center ml-8">Chakra</Link>
        <div className="p-16 flex justify-center flex-col">

          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            sensors={sensors}
            >
            <SortableContext items={items}>
                {items.map((item) => (
                  <SortableItem key={item.id} Item={item}/>
                ))}
            </SortableContext>
          </DndContext>

        </div>
      </div>
    </div>
  );
}
