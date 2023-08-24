import { BigNumber, ethers } from 'ethers'
import { useContractRead } from 'wagmi'

import { auctionAbi, tokenAbi } from 'src/data/contract/abis'
import { AddressType, CHAIN_ID } from 'src/typings'

interface useDaoCardProps {
  collectionAddress: string
  auctionAddress: string
  chainId: CHAIN_ID
}

export const useDaoFeedCard = ({
  collectionAddress,
  auctionAddress,
  chainId,
}: useDaoCardProps) => {
  const {
    data: auction,
    isError: isErrorAuction,
    isLoading: isLoadingAuction,
  } = useContractRead({
    address: auctionAddress as AddressType,
    chainId,
    abi: auctionAbi,
    functionName: 'auction',
  })

  const {
    data: token,
    isError: isErrorToken,
    isLoading: isLoadingToken,
  } = useContractRead({
    address: collectionAddress as AddressType,
    chainId,
    abi: tokenAbi,
    functionName: 'tokenURI',
    args: [auction?.tokenId as BigNumber],
    enabled: typeof auction !== 'undefined',
  })

  const decode = (token?: string) => {
    if (!token) return null

    const decoded = ethers.utils.base64.decode(
      token?.substring(29, token?.length) as string
    )

    let data
    try {
      data = JSON.parse(new Buffer(decoded).toString())
    } catch (e) {
      console.error(e)
      data = null
    }

    return data
  }

  return {
    highestBid: auction?.highestBid
      ? ethers.utils.formatEther(auction?.highestBid)
      : undefined,
    tokenUri: decode(token),
    endTime: auction?.endTime || 0,
    tokenId: auction?.tokenId,
  }
}
