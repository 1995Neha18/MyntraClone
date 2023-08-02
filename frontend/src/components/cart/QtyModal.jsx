import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Stack,
    Circle,
    Center,
  } from '@chakra-ui/react'
  import { IoMdArrowDropdown } from 'react-icons/io';
  
let quantities = [1,2,3,4,5,6,7,8,9,10]

const QtyModal = ({Qty,id,qty}) => {
   const { isOpen, onOpen, onClose } = useDisclosure()
   const [quantity,setQuantity] = useState(1)
   const [change,setChange]=useState(false)

   const handleQuantityClick = () => {
      onOpen()
   }
  
   const handle = (e) => {
      setQuantity(e)
      setChange(true)
   }

   const handleQuantity = () => {
      Qty({quantity,id})
      onClose()
    }
  
    return (
      <>
         <Button
            onClick={() => handleQuantityClick()}
            m={3}
          >Qty: {qty} <IoMdArrowDropdown/></Button>
       
        <Modal onClose={onClose}  size={"sm"}  isOpen={isOpen}>
          <ModalOverlay  />
          <ModalContent m={"auto"}>
            <ModalHeader>Select Qunatity</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                 <Stack 
                    style={{
                      display:"grid",
                      gridTemplateColumns:"repeat(5,1fr)",
                      gap:"0.6rem",
                      padding:"5%"
                      }}>
                  
                  {quantities.map(el=>
                    <Center>
                        <Circle 
                          size='50px' 
                          color={change===true?(quantity===el?"white":"black"):(qty===el?"white":"black")}
                          bg={change===true?(quantity===el?"rgb(255, 63, 108)":"white"):(qty===el?"rgb(255, 63, 108)":"white")} 
                          border={change===true?(quantity===el?"none":"1.5px solid black"):(qty===el?"none":"1.5px solid black")}
                          vlaue={quantity}
                          onClick={()=>(handle(el))}
                        >
                          <b>{el}</b>
                        </Circle>
                     </Center>)
                  }
                </Stack>
            </ModalBody>
            <ModalFooter>
            <Button style={{
                color: "white",
                backgroundColor: "rgb(255, 63, 108)",
                padding:"25px",
                width:"100%",
              }}
              onClick = {handleQuantity}
              ><b>DONE</b>
            </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default QtyModal