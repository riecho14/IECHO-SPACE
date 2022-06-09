import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const IechoSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size)/2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const IechoContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-iecho"
    m="auto"
    mt={['-290px', '-330px', '-370px']}
    mb={['230px', '130px', '50px']}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <IechoContainer>
      <IechoSpinner />
    </IechoContainer>
  )
}

export default Loader
