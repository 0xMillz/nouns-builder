import React from 'react'
import Link from 'next/link'
import { Avatar } from 'src/components/Avatar'
import { DaoAvatar } from 'src/components/Avatar/DaoAvatar'
import CopyButton from 'src/components/CopyButton/CopyButton'
import { Icon } from 'src/components/Icon'
import { NetworkController } from 'src/components/NetworkController'
import { ConnectButton } from './ConnectButton'
import { CreateDaoButton } from './CreateDaoButton'
import { Box, Flex, PopUp, Text } from '@zoralabs/zord'
import {
  disconnectButton,
  myDaosWrapper,
  navButton,
  activeNavAvatar,
  navMenuBurger,
} from './styles.css'
import { useRouter } from 'next/router'
import { useEnsData } from 'src/hooks/useEnsData'
import { myDaosRequest } from 'src/query/daoQuery'
import { formatCryptoVal } from 'src/utils/numbers'
import useSWR from 'swr'
import SWR_KEYS from 'src/constants/swrKeys'
import { useAccount, useBalance, useDisconnect } from 'wagmi'

const NavMenu: React.FC<{}> = () => {
  const [isOpenMenu, setIsOpenMenu] = React.useState(false)
  const [viewAll, setViewAll] = React.useState(false)
  const [activeDropdown, setActiveDropdown] = React.useState<
    'userMenu' | 'appMenu' | undefined
  >(undefined)

  const router = useRouter()

  const { address } = useAccount()
  const { displayName, ensAvatar } = useEnsData(address as string)
  const { data: balance } = useBalance({
    address: address as `0x${string}`,
  })
  const { disconnect } = useDisconnect()

  const userBalance = balance?.formatted
    ? `${Number(formatCryptoVal(balance?.formatted)).toFixed(2)} ETH`
    : undefined

  const { data: myDaos } = useSWR(
    address ? SWR_KEYS.DYNAMIC.MY_DAOS(address as string) : null,
    () => myDaosRequest([address as string]),
    {
      revalidateOnFocus: false,
    }
  )

  const initMaxDaos = 3
  const viewableDaos = myDaos && myDaos.slice(0, viewAll ? myDaos.length : initMaxDaos)
  const hasMoreDaos = myDaos && myDaos.length > initMaxDaos ? true : false

  /*
    close dropdown on route change
   */
  React.useEffect(() => {
    const handleRouteChange = () => {
      setActiveDropdown(undefined)
    }

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router])

  return (
    <Flex align={'center'} direction={'row'} gap={'x4'}>
      {address && (
        <Flex
          className={navButton}
          onClick={() => setActiveDropdown('userMenu')}
          data-active={!!activeDropdown && activeDropdown !== 'userMenu'}
        >
          <PopUp
            padding="x0"
            trigger={
              <Flex cursor={'pointer'}>
                {activeDropdown === 'userMenu' && <Box className={activeNavAvatar} />}
                <Avatar address={address} src={ensAvatar} size={'40'} />
              </Flex>
            }
            close={activeDropdown !== 'userMenu'}
            onOpenChange={(open) => {
              if (!open) {
                // if closing menu and not opening another
                if (activeDropdown === 'userMenu') {
                  setActiveDropdown(undefined)
                }
              }
            }}
          >
            <Flex direction={'column'} p={'x4'} gap={'x4'} style={{ width: 264 }}>
              <CreateDaoButton />
              {myDaos && myDaos.length > 0 && (
                <Flex direction={'column'} gap={'x4'}>
                  <Flex direction={'row'} justify={'space-between'}>
                    <Text color="tertiary" fontWeight="paragraph">
                      My DAOs
                    </Text>
                    {hasMoreDaos && (
                      <Text
                        fontWeight={'display'}
                        cursor={'pointer'}
                        onClick={() => setViewAll((bool) => !bool)}
                      >
                        {!viewAll ? 'View All' : 'View Less'}
                      </Text>
                    )}
                  </Flex>

                  <Flex direction={'column'} gap={'x4'} className={myDaosWrapper}>
                    {viewableDaos?.map((dao, index) => (
                      <Link
                        key={dao.collectionAddress}
                        href={`/dao/${dao.collectionAddress}`}
                        passHref
                        legacyBehavior
                      >
                        <a>
                          <Flex
                            key={index}
                            direction={'row'}
                            align={'center'}
                            cursor={'pointer'}
                            id={`close-modal-${index}`}
                          >
                            <DaoAvatar
                              collectionAddress={dao.collectionAddress}
                              size={'40'}
                              auctionAddress={dao.auctionAddress}
                            />
                            <Text ml="x2" fontWeight={'display'}>
                              {dao.name}
                            </Text>
                          </Flex>
                        </a>
                      </Link>
                    ))}
                  </Flex>
                </Flex>
              )}
              <Box color="border" borderStyle="solid" borderWidth="thin" />
              <Flex
                direction={'row'}
                align={'center'}
                justify={'space-between'}
                w={'100%'}
              >
                <Flex direction={'row'} align={'center'} cursor={'pointer'}>
                  <Avatar address={address} src={ensAvatar} size={'40'} />
                  <Flex direction={'column'} ml={'x2'}>
                    <Text fontWeight={'display'}>{displayName}</Text>
                    <Text variant={'paragraph-md'} color={'tertiary'}>
                      {userBalance}
                    </Text>
                  </Flex>
                </Flex>
                <CopyButton text={address as string} />
              </Flex>

              <button
                className={disconnectButton}
                onClick={() => disconnect()}
                id={'close-modal'}
              >
                Disconnect
              </button>
            </Flex>
          </PopUp>
        </Flex>
      )}
      <Flex
        className={navButton}
        onClick={() => {
          setIsOpenMenu((bool) => !bool)
          setActiveDropdown('appMenu')
        }}
        data-active={!!activeDropdown && activeDropdown !== 'appMenu'}
      >
        <PopUp
          padding="x0"
          trigger={
            <Flex align={'center'}>
              <Flex
                w={'x10'}
                h={'x10'}
                align={'center'}
                justify={'center'}
                className={navMenuBurger}
                backgroundColor={isOpenMenu ? 'ghostHover' : 'background1'}
              >
                <Icon id="burger" />
              </Flex>
            </Flex>
          }
          close={activeDropdown !== 'appMenu'}
          onOpenChange={(open) => {
            setIsOpenMenu(open)
            if (!open) {
              setViewAll(false)
              // if closing menu and not opening another
              if (activeDropdown === 'appMenu') {
                setActiveDropdown(undefined)
              }
            }
          }}
        >
          <Flex direction={'column'} p={'x4'} gap={'x2'} style={{ width: 264 }}>
            <ConnectButton />
            <Flex
              display={{ '@initial': 'flex', '@768': 'none' }}
              direction={'column'}
              gap={'x2'}
            >
              <Link href={'/explore'}>
                <Flex display="flex" align="center" justify={'center'} py={'x2'}>
                  <Text cursor={'pointer'} fontWeight={'display'}>
                    Explore
                  </Text>
                </Flex>
              </Link>
              <Link href={'/about'}>
                <Flex display="flex" align="center" justify={'center'} py={'x2'}>
                  <Text cursor={'pointer'} fontWeight={'display'}>
                    About
                  </Text>
                </Flex>
              </Link>
              <Box
                color="border"
                borderStyle="solid"
                borderWidth="thin"
                style={{ margin: '-4px 0px' }}
              />
            </Flex>

            {/* Network Switch */}
            <NetworkController.Testnet>
              <Flex
                as={'a'}
                href="https://nouns.build"
                target="_blank"
                rel="canonical"
                id={'close-modal'}
                align={'center'}
                justify={'center'}
              >
                <Flex align={'center'} py={'x2'}>
                  <Text
                    fontWeight={'display'}
                    fontSize={16}
                    style={{ lineHeight: '24px' }}
                  >
                    Mainnet
                  </Text>
                  <Icon fill="text4" size="sm" ml="x2" id="external-16" />
                </Flex>
              </Flex>
            </NetworkController.Testnet>

            <NetworkController.Mainnet>
              <Flex
                as={'a'}
                href="https://testnet.nouns.build"
                target="_blank"
                rel="nofollow"
                id={'close-modal'}
                align={'center'}
                justify={'center'}
              >
                <Flex align={'center'} py={'x2'}>
                  <Text
                    fontWeight={'display'}
                    fontSize={16}
                    style={{ lineHeight: '24px' }}
                  >
                    Testnet
                  </Text>
                  <Icon fill="text4" size="sm" ml="x2" id="external-16" />
                </Flex>
              </Flex>
            </NetworkController.Mainnet>
          </Flex>
        </PopUp>
      </Flex>
    </Flex>
  )
}

export default NavMenu
