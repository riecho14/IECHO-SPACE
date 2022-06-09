import Link from 'next/link'
import Image from 'next/image'
import styled from '@emotion/styled'
import { Text, useColorModeValue } from '@chakra-ui/react'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 300ms ease;
  }

  &:hover img {
    transform: rotate(-30deg);
  }
`

const Logo = () => {
  const iechoImg = `/images/iecho${useColorModeValue('', '-dark')}.png`

  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <Image src={iechoImg} width={30} height={23} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c', sans-serif"
            fontWeight="bold"
            ml={3}
          >
            IECHO SPACE
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
