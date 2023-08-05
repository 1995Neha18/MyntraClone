import { useEffect, useRef, useState } from 'react'
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  HStack,
} from '@chakra-ui/react'

import {
  Avatar,
  Center,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

import { useToast } from '@chakra-ui/react'

import "../cart/cart.css"

import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'

let addObj = {
  name: '',
  mobileNumber: '',
  country: '',
  streetAddress: '',
  city: '',
  state: '',
  pinCode: '',
}


const Form1 = ({c_data}) => {
  const [address, setAddress] = useState(addObj)

  function handleInput(e) {
    const { name, value } = e.target
    setAddress({ ...address, [name]: value })
    c_data(address)
  }
console.log(address)
  return (
    <>
        <Heading as='h5' size='sm' >CONTACT DETAILS</Heading>
        <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="name"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Name
        </FormLabel>
        <Input
          type="text"
          name="name"
          id="name"
          autoComplete="name"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={handleInput}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="mobileNumber"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Mobile Number
        </FormLabel>
        <Input
          type="text"
          name="mobileNumber"
          id="smobileNumber"
          autoComplete="mobileNumber"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={handleInput}
        />
      </FormControl>
      
      <Heading as='h5' size='sm' mb="2%" mt="4%">ADDRESS</Heading>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
          Country 
        </FormLabel>
        <Select
          id="country"
          name="country"
          autoComplete="country"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={handleInput}
          >
          <option value='india'>India</option>
          <option valur='us'>United States</option>
          <option value='china'>China</option>
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="streetAddress"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Street address
        </FormLabel>
        <Input
          type="text"
          name="streetAddress"
          id="streetAddress"
          autoComplete="streetAddress"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={handleInput}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          City
        </FormLabel>
        <Input
          type="text"
          name="city"
          id="city"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={handleInput}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="state"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          State 
        </FormLabel>
        <Input
          type="text"
          name="state"
          id="state"
          autoComplete="state"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={handleInput}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="pinCode"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Pin code
        </FormLabel>
        <Input
          type="text"
          name="pinCode"
          id="pinCode"
          autoComplete="pinCode"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={handleInput}
        />
      </FormControl>
    </>
  )
}

const Form2 = ({data}) => {
  const location = useLocation();

  const checkoutPrice = location.state?.checkoutData;
  const {name,streetAddress,city,country,mobileNumber,state,pinCode  } = data
  return (
    <>
    <Center py={6}>
      <Box
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          name={name}
          src='https://bit.ly/broken-link'
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {name}
        </Heading>
        
        <HStack mb='1rem'>
          <Heading as='bold' fontSize={'xl'} fontFamily={'body'}>
            Address
          </Heading>
        </HStack>
        <Text
          textAlign={'left'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}
          mb="2rem"
          lineHeight={"15px"}
          >
            <Text> <b>Street: </b>{streetAddress}, {city}, ({state})</Text>
            <Text><b>Country: </b> {country}</Text>
            <Text><b>pin code: </b> {pinCode}</Text>
            <Text><b>Mobile: </b>{mobileNumber}</Text>
        </Text>
      </Box>
    </Center>
    

      <p className="p__heading">PRICE DETAILS (items  {checkoutPrice.data?checkoutPrice.data:1})</p>
        <div className="price__detail">
          <div>
            <p>Total MRP</p>
            <p>₹ {checkoutPrice.total_mrp.toFixed(0)}</p>
          </div>
          <div>
            <p>Discount on MRP</p>
            <p>
              <span className="green">- ₹ {checkoutPrice.dis}</span>{" "}
            </p>
          </div>
          <div>
            <p>Coupon Discount</p>
            <p>
              <span className="red"> Apply Coupon</span>
            </p>
          </div>
          <div>
            <p>
              Convenience Fee <span className="red">Know More</span>
            </p>
            <p>
              {" "}
              <s>₹99</s> <span className="green">Free</span>
            </p>
          </div>
        </div>
        <div className="price__total">
          <p>
            <b>Total Amount</b>
          </p>
          <p>
            <b>₹ {checkoutPrice.total.toFixed(0)}</b>
          </p>
        </div>
    </>
  )
}

export default function Multistep() {
  const toast = useToast()
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(50)
  const ref = useRef({a:''})
  const  navigate = useNavigate()
  const dispatch = useDispatch()


  const handleAddress= () => {
    for (let key in ref.current) {
        if (ref.current[key] === '') {
            toast({
              title: 'Field Empty',
              description: "All Filed are required",
              status: 'warning',
              duration: 3000,
              position:'top',
              isClosable: true,
            })
            return setStep(step)
        }else{
            setStep(step + 1)
            if (step === 2) {
              setProgress(100)
            } else {
              setProgress(progress + 50)
            }   
        }
    }                
  }

  const c_data = (val) => {
    ref.current = val;
  }

  const handleSubmit = () => {
    toast({
      title: `You Sucessfully booked Your Order`,
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
    })

    setTimeout(()=>{
      dispatch({ type: "cartLength", payload: 0 });
      navigate("/")
    },2000)   
  }


  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="2rem auto"
        as="form">
        <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>
        {step === 1 ? <Form1 c_data={c_data} /> :<Form2 data={ref.current} /> }
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1)
                  setProgress(progress - 50)
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 2}
                onClick={handleAddress}
                colorScheme="teal"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 2 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={handleSubmit}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  )
}