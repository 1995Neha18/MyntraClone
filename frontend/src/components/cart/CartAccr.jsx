import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'

const CartAccr = () => {
    const [open,setOpen] = useState(true)
  return (

      <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton style={{color:"rgb(244, 48, 48)"}} >
            <Box>
                <b>
                  {open?"Show Less":"Show More"} 
                </b>
            </Box>
            <AccordionIcon onClick={()=>setOpen(!open)} />
          </AccordionButton>
        </h2>
        <AccordionPanel style={{fontSize:"0.9rem", lineHeight:"30px"}}>
          <li>Get up to Rs 500 Cashback on CRED pay(Android Devices only) on a min spend of Rs 1000. TCA</li>
          <li>5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA</li>
          <li>10% Cashback upto Rs 200 on Airtel Payments Bank transactions on a min spend of Rs 1000. TCA</li>
          <li>10% Cashback upto Rs 150 on Freecharge Paylater transaction. TCA</li>
          <li>Get up to Rs 500 Cashback on Mobikwik Wallet transaction on a min spend of Rs 1000.Use Code MBK500 on Mobikwik. TCA</li>
        </AccordionPanel>
      </AccordionItem>
    
     
    </Accordion>
  )
}

export default CartAccr