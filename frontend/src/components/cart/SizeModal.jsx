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
    Center,
    Circle,
  } from '@chakra-ui/react'
  import { IoMdArrowDropdown } from 'react-icons/io';
  
  const sizes = ["sm","lg","xl","2xl"]

 const SizeModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const [size,setSize] = useState("sm")
   
    
    const handleSizeClick = () => {
      onOpen()
    }
  
    const handle = (e) => {
      setSize(e)
    }

    const handleSize = () => {
      onClose()
    }
  
    return (
      <>
        
          <Button
            onClick={() => handleSizeClick()}
          >Size: {size} <IoMdArrowDropdown/></Button>
       
        <Modal onClose={onClose}  size={"sm"}  isOpen={isOpen}>
          <ModalOverlay  />
          <ModalContent m={"auto"}>
            <ModalHeader>Select Size</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
             
             <Stack 
                    style={{
                      display:"grid",
                      gridTemplateColumns:"repeat(5,1fr)",
                      gap:"0.6rem",
                      padding:"5%"
                      }}>
                  
                  {sizes.map(el=>
                    <Center>
                        <Circle 
                          size='50px' 
                          color={size===el?"white":"black"} 
                          bg={size===el?"rgb(255, 63, 108)":"white"} 
                          border={size===el?"none":"1.5px solid black"}
                          vlaue={size}
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
                  width:"100%"
                }}
                onClick = {handleSize}
                ><b>DONE</b>
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default SizeModal