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
    
import React from 'react'
import { Typography, useTheme } from '@mui/material'
import Switch from '@mui/material/Switch';
import { tokens } from '../../../../theme'

import { BsFillCheckCircleFill } from 'react-icons/bs' 


const SUBSCRIPTIONS = [
  {
    title: "Build Yourself",
    monthly: 20,
    monthly_discounted: 10,
    monthly_price_link: "https://blog.newsletterdude.com/#/portal/signup/6488174e418be50001b0fd66/monthly",
    yearly: 15,
    yearly_discounted: 8,
    yearly_price_link: "https://blog.newsletterdude.com/#/portal/signup/6488174e418be50001b0fd66/yearly",
    discounted: true,
    benefits: [
      "Access to building roadmap",
      "≥ 30 articles updated regularly",
      "≥ 50 tools with exclusive discounts*",
      "Access to private community*", 
      "Access to interviews and case studies*"
    ]
  },
  {
    title: "Build Together",
    monthly: 50,
    monthly_discounted: 25,
    monthly_price_link: "https://blog.newsletterdude.com/#/portal/signup/648819fd418be50001b0fd76/monthly",
    yearly: 40,
    yearly_discounted: 20,
    yearly_price_link: "https://blog.newsletterdude.com/#/portal/signup/648819fd418be50001b0fd76/yearly",
    discounted: true,
    benefits: [
      "Everything in 𝘉𝘶𝘪𝘭𝘥 𝘠𝘰𝘶𝘳𝘴𝘦𝘭𝘧",
      "Invitation to monthly masterminds",
      "Access to mentors and experts*",
      "Access to trends and analytics*",
    ]
  },
]


function PriceWrapper(props) {
  const { children } = props

  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      {children}
    </Box>
  )
}

export default function ThreeTierPricing() {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const [checked, setChecked] = React.useState(true);

    const startSubscription = (price_link) => {
        window.location.replace(price_link)
    }

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

  return (
    <Box py={6}>
      <section id="pricing"></section>
      <VStack spacing={2} textAlign="center">
        <Typography variant="h2">
          Plans that fit your needs
        </Typography>
        <Typography variant="h5">
          Start on a subscription. Choose how much resources you want. Decide on your commitment.
        </Typography>
      </VStack>

      <Box display="flex">
          <Box display="flex" flexDirection="row" textAlign="center" alignItems="center" margin="auto">
            <Typography><i>yearly</i></Typography>
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            <Typography><i>monthly</i></Typography>
          </Box>
      </Box>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={3}>

        {SUBSCRIPTIONS.map((subscription, i) => {
          return (
          <PriceWrapper key={i}>
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
                      {subscription.title}
                  </Typography>
                  <HStack justifyContent="center">
                      <Typography variant="h3" fontWeight="bold">
                          $
                      </Typography>
                      {subscription.discounted ? 
                        <Typography variant="h1" fontWeight="bold">
                          {checked ? subscription.monthly_discounted : subscription.yearly_discounted}
                        </Typography>
                        : <></>}
                      <Typography variant="h1" fontWeight="bold" sx={subscription.discounted ? { textDecoration: "line-through", color: colors.grey[800] } : {}}>
                          {checked ? subscription.monthly : subscription.yearly}
                      </Typography>
                      <Typography variant="h3" color={colors.grey[600]}>
                          /month
                      </Typography>
                  </HStack>
                  <Typography variant="h6">
                      billed {checked ? "monthly" : "yearly"}
                  </Typography>
              </Box>
              <VStack
                bg={"#f5f3f2"}
                py={4}
                borderBottomRadius={'xl'}>
                <List spacing={3} textAlign="start" px={12}>
                  {subscription.benefits.map((benefit, i) => {
                    return (
                      <ListItem key={i}>
                        <ListIcon as={BsFillCheckCircleFill}  />
                          {" "}{benefit}
                      </ListItem>
                    )
                  })}
                  <ListItem>
                    <span style={{ fontSize: "10px" }}>*Discounted price because benefits still in the works</span>
                  </ListItem>
                </List>
                <Box w="80%" pt={7}>
                  <Button w="full" colorScheme="red" 
                    onClick={() => startSubscription(checked ? subscription.monthly_price_link : subscription.yearly_price_link)} 
                    sx={{ backgroundColor: colors.grey[700], borderRadius: "5px", py: "4px" }}
                  >
                    SUBSCRIBE
                  </Button>
                </Box>
              </VStack>
            </Box>
          </PriceWrapper>
          )
        })}

      </Stack>
    </Box>
  )
}