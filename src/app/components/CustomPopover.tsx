'use client'

import React, { ReactNode } from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverCloseButton,
} from '@chakra-ui/react';
import { Placement } from '@chakra-ui/popper';


type CustomPopoverProps = {
  children: ReactNode;
  content: ReactNode;
  placement?: Placement;
  isOpen?: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const CustomPopover:React.FC<CustomPopoverProps> = ({ 
  children,
  content,
  placement,
  isOpen,
  setIsOpen,
}) => {
  return (
    <Popover 
      // placement="top"
      // closeOnBlur={true}
      autoFocus={false}
      preventOverflow={false}
      // strategy="absolute"
      offset={[0, 50]}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      >
      <PopoverTrigger>
        {children}
      </PopoverTrigger>
      <PopoverContent>
        <PopoverCloseButton />
        <PopoverBody>
          {content}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default CustomPopover;
