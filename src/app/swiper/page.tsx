"use client"

import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CustomPopover from '../components/CustomPopover';

interface Item {
  id: number;
  name: string;
  storeBrand: string;
}

const swipeItems: Item[] = [
  { "id": 1, "name": 'アイテム1', "storeBrand": "ブランドA"}, 
  { "id": 2, "name": "アイテム2", "storeBrand": "ブランドB"},
  { "id": 3, "name": "アイテム3", "storeBrand": "ブランドC"},
  { "id": 4, "name": "アイテム4", "storeBrand": "ブランドD"},
  { "id": 5, "name": "アイテム5", "storeBrand": "ブランドE"},
  { "id": 6, "name": "アイテム6", "storeBrand": "ブランドF"},
  { "id": 7, "name": "アイテム7", "storeBrand": "ブランドG"},
  { "id": 8, "name": "アイテム8", "storeBrand": "ブランドH"},
  { "id": 9, "name": "アイテム9", "storeBrand": "ブランドI"},
  { "id": 10, "name": "アイテム10", "storeBrand": "ブランドJ"}
]

const SwiperPage = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div className="h-screen bg-slate-400">
      <div className="text-2xl bold text-center m-24">
        <h1>Swiper</h1>
      </div>
      <Swiper className="h-screen bg-blue-500"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {swipeItems.map((item: Item) => (
          <SwiperSlide key={item.id}>
            <CustomPopover
                content={
                  <div className="text-xs">
                    <p>{item.storeBrand}</p>
                    <p>{item.name}</p>
                    <p>12,000円</p>
                  </div>
                }
                placement="bottom"
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              >
                <div 
                  onClick={() => setIsOpen(true)}
                  className="bg-slate-500 p-4 text-center">
                  {item.name}
                </div>
            </CustomPopover>
          </SwiperSlide>
        ))} 
      </Swiper>
    </div>
  )
}

export default SwiperPage