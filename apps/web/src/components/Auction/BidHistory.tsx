import AuctionAllBids from './AuctionAllBids'
import { Button, Flex } from '@zoralabs/zord'
import dynamic from 'next/dynamic'
import React, { ReactNode } from 'react'
import { Bid } from 'src/typings'

const AnimatedModal = dynamic(() => import('src/components/Modal/AnimatedModal'), {
  ssr: false,
})

export const BidHistory = ({ bids }: { bids: Bid[] }) => {
  return (
    <AnimatedModal
      trigger={
        <Button
          fontSize={18}
          width={'100%'}
          variant="secondary"
          borderRadius="curved"
          h="x14"
        >
          Bid history
        </Button>
      }
    >
      <AuctionAllBids bids={bids} />
    </AnimatedModal>
  )
}

export const ActionsWrapper = ({ children }: { children: ReactNode }) => (
  <Flex direction="column" align="center" mt={{ '@initial': 'x4', '@768': 'x6' }}>
    {children}
  </Flex>
)