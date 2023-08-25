import {
    Box,
    Stack,
    HStack,
    VStack,
    useColorModeValue,
    List,
    ListItem,
    ListIcon,
    Button,
  } from '@chakra-ui/react'
    
  import { Typography, useTheme } from '@mui/material'
  import { tokens } from '../../../../theme'
  
  import { BsFillCheckCircleFill } from 'react-icons/bs' 

  
  
  function PriceWrapper(props) {
    const { children } = props
  
    return (
      <Box
        mb={4}
        shadow="base"
        borderWidth="1px"
        alignSelf={{ base: 'center', lg: 'flex-start' }}
        borderColor={useColorModeValue('gray.200', 'gray.500')}
        borderRadius={'xl'}>
        {children}
      </Box>
    )
  }
  
  export default function ThreeTierPricing() {
      const theme = useTheme()
      const colors = tokens(theme.palette.mode)
  
      const startSubscription = () => {
          console.log("starting")
      }
  
    return (
      <Box py={12}>
        <VStack spacing={2} textAlign="center">
          <Typography variant="h2">
            Plans that fit your needs
          </Typography>
          <Typography variant="h5">
            Start on a subscription. Choose how much resources you want. Decide on your commitment.
          </Typography>
        </VStack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          textAlign="center"
          justify="center"
          spacing={{ base: 4, lg: 10 }}
          py={10}>
  
          {/* <PriceWrapper>
            <Box py={4} px={12}>
              <Typography variant="h3">
                Hobby
              </Typography>
              <HStack justifyContent="center">
                  <Typography variant="h3" fontWeight="bold">
                      $
                  </Typography>
                  <Typography variant="h1" fontWeight="bold">
                      79
                  </Typography>
                  <Typography variant="h3" color={colors.grey[600]}>
                      /month
                  </Typography>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  unlimited build minutes
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Lorem, ipsum dolor.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  5TB Lorem, ipsum dolor.
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="red" variant="outline">
                  Start trial
                </Button>
              </Box>
            </VStack>
          </PriceWrapper> */}
  
          <PriceWrapper>
            <Box position="relative">
              <Box
                position="absolute"
                top="-16px"
                left="50%"
                style={{ transform: 'translate(-50%)' }}>
                {/* <Typography
                  variant="h6"
                  backgroundColor={colors.redAccent[700]}
                  px={2}
                  py={0.5}
                  fontWeight="bold"
                  color={colors.grey[300]}
                  borderRadius="10px">
                  Most Popular
                </Typography> */}
              </Box>
              <Box py={4} px={12}>
                  <Typography variant="h3">
                      Build Yourself
                  </Typography>
                  <HStack justifyContent="center">
                      <Typography variant="h3" fontWeight="bold">
                          $
                      </Typography>
                      <Typography variant="h1" fontWeight="bold">
                          20
                      </Typography>
                      <Typography variant="h3" color={colors.grey[600]}>
                          /month
                      </Typography>
                  </HStack>
              </Box>
              <VStack
                bg={"#f5f3f2"}
                py={4}
                borderBottomRadius={'xl'}>
                <List spacing={3} textAlign="start" px={12}>
                  <ListItem>
                    <ListIcon as={BsFillCheckCircleFill}  />
                      {" "}Access to building roadmap
                  </ListItem>
                  <ListItem>
                    <ListIcon as={BsFillCheckCircleFill} />
                      {" "}&ge; 30 articles updated regularly
                  </ListItem>
                  <ListItem>
                    <ListIcon as={BsFillCheckCircleFill} />
                      {" "}&ge; 50 tools with exclusive discounts*
                  </ListItem>
                  <ListItem>
                    <ListIcon as={BsFillCheckCircleFill} />
                      {" "}Access to private community 
                  </ListItem>
                  <ListItem>
                    <ListIcon as={BsFillCheckCircleFill} />
                      {" "}Access to trends and analytics 
                  </ListItem>
                  <ListItem>
                    <ListIcon as={BsFillCheckCircleFill} />
                      {" "}Access to interviews and case studies 
                  </ListItem>
                  <ListItem>
                    <span style={{ fontSize: "10px" }}>*Price is reflective of benefits not currently available</span>
                  </ListItem>
                </List>
                <Box w="80%" pt={7}>
                  <Button w="full" colorScheme="red" onClick={startSubscription}>
                    Start subscription
                  </Button>
                </Box>
              </VStack>
            </Box>
          </PriceWrapper>
  
          <PriceWrapper>
            <Box py={4} px={12}>
              <Typography variant="h3">
                  Build Together
              </Typography>
              <HStack justifyContent="center">
                  <Typography variant="h3" fontWeight="bold">
                      $
                  </Typography>
                  <Typography variant="h1" fontWeight="bold">
                      50
                  </Typography>
                  <Typography variant="h3" color={colors.grey[600]}>
                      /month
                  </Typography>
              </HStack>
            </Box>
            <VStack
              bg={"#f5f3f2"}
              py={4}
              borderBottomRadius={'xl'}>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={BsFillCheckCircleFill} />
                      {" "}Everything in <i>Build Yourself</i>
                </ListItem>
                <ListItem>
                  <ListIcon as={BsFillCheckCircleFill} />
                      {" "}Invitation to monthly masterminds
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="red" variant="outline">
                  Start subscription
                </Button>
              </Box>
            </VStack>
          </PriceWrapper>
        </Stack>
      </Box>
    )
  }