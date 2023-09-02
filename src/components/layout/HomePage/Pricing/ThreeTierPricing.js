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
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';


const SUBSCRIPTIONS = [
  {
    title: "Build Later",
    monthly: 0,
    monthly_price_link: "https://blog.newsletterdude.com/#/portal/signup/free",
    yearly: 0,
    yearly_price_link: "https://blog.newsletterdude.com/#/portal/signup/free",
    benefits: [
      "5 Recommended links and summaries on newsletters daily",
      "Access to future discounts"
    ],
    available: true,
    free: true,
  },
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
      "Everything in 𝘉𝘶𝘪𝘭𝘥 𝘓𝘢𝘵𝘦𝘳",
      "Access to building roadmap",
      "≥ 30 articles updated regularly",
      "≥ 50 tools index*",
      "Access to private community*", 
      "Access to interviews and case studies*"
    ],
    available: true,
    free: false,
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
    ],
    available: false,
    free: false,
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
      borderRadius={'xl'}
      mx={{ base: 'auto', md: '0' }}
      width={{ base: '70%', md: '33%' }}
    >
      {children}
    </Box>
  )
}

export default function ThreeTierPricing() {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const [checked, setChecked] = React.useState(true);
    const [subscriptionLoading, setSubscriptionLoading] = React.useState(false)

    const startSubscription = (subscriptionInfo) => {
      setSubscriptionLoading(true)
      window.open(checked ? subscriptionInfo.monthly_price_link : subscriptionInfo.yearly_price_link, '_blank')
      setSubscriptionLoading(false)
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
                color="default"
              />
            <Typography><i>monthly</i></Typography>
          </Box>
      </Box>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        spacing={8}
        justifyContent="center"
        py={3}
      >

        {SUBSCRIPTIONS.map((subscription, i) => {
          return (
          <PriceWrapper key={i}>
            <Box>
              <Box
                position="absolute"
                top="-16px"
                >
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
                      {subscription.free ? "FREE FOREVER" : <>billed {checked ? "monthly" : "yearly"}</>}
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
                        <ListIcon as={BsFillCheckCircleFill} sx={{ color: colors.grey[500] }} />
                          <span style={{ color: "black" }}>{" "}{benefit}</span>
                      </ListItem>
                    )
                  })}
                  {subscription.discounted ? 
                    <ListItem>
                      <span style={{ fontSize: "10px", color: "black" }}>*Discounted price because benefits still in the works</span>
                    </ListItem>
                  : <></>}
                </List>
                <Box w="80%" pt={7}>
                  {subscription.available 
                    ? <Button w="full" colorScheme="red" isLoading={subscriptionLoading}
                        onClick={() => startSubscription(subscription)} 
                        sx={{ 
                          backgroundColor: colors.blueAccent[800], 
                          borderRadius: "5px", py: "4px" }}
                        className="btn btn-1"
                      >
                        SUBSCRIBE
                        <KeyboardDoubleArrowRightIcon />
                      </Button>
                    : <Button w="full" colorScheme="red" 
                        sx={{ 
                          backgroundColor: colors.grey[700], 
                          borderRadius: "5px", py: "4px",
                          "&:hover": { cursor: "not-allowed" }
                        }}
                      >
                        IN THE WORKS
                        <HourglassTopIcon />
                      </Button>
                  }
                  
                </Box>
              </VStack>
            </Box>
          </PriceWrapper>
          )
        })}
      </Stack>
      <Typography variant="h5" textAlign="center">
          <i>
            Please note that your subscription gives you access to both the website + blog.
            You will be redirected to the blog for signup. The website is only free to public for a limited
            period, and will still be available to you once that period ends.
          </i>
        </Typography>
    </Box>
  )
}