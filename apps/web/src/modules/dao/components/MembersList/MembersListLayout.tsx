import { Box, Flex, Text } from '@zoralabs/zord'
import React, { ReactNode } from 'react'

import { cardSkeleton, firstRowItem, lastRowItem, row, rowItem } from './MembersList.css'

export const MembersPanel = ({
  children,
  isMobile,
  tableRuler = true,
}: {
  children: ReactNode
  isMobile: boolean
  tableRuler?: boolean
}) => {
  return (
    <>
      <Text
        mb={{ '@initial': 'x4', '@768': 'x4' }}
        mt={{ '@initial': 'x4', '@768': 'x10' }}
        fontSize={28}
        fontWeight={'display'}
      >
        Members
      </Text>
      <Box
        borderRadius={'phat'}
        borderStyle={'solid'}
        borderWidth={'normal'}
        borderColor={'border'}
        pt={isMobile ? 'x8' : undefined}
        p={{ '@initial': 'x3', '@768': 'x6' }}
      >
        {!isMobile && tableRuler && <TableHeader />}
        {children}
      </Box>
    </>
  )
}

const TableHeader = () => {
  return (
    <Flex className={row} mb={{ '@initial': 'x4', '@768': 'x12' }}>
      <Text fontWeight={'label'} className={firstRowItem}>
        Member
      </Text>
      <Text fontWeight={'label'} className={rowItem}>
        Tokens
      </Text>
      <Text fontWeight={'label'} className={rowItem}>
        Vote %
      </Text>
      <Text fontWeight={'label'} className={lastRowItem}>
        Joined
      </Text>
    </Flex>
  )
}

export const MemberCardSkeleton = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <Flex
      className={cardSkeleton}
      borderRadius="normal"
      backgroundColor="background2"
      mb={isMobile ? 'x14' : 'x10'}
    />
  )
}
