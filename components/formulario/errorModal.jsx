import React, { useRef } from "react";
import {
    Box,
    Button,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure
} from '@chakra-ui/react'

export default function ErrorModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef();
    return (
        <Box>
            <Box>
                <Button colorScheme='red' onClick={() => setIsOpen(true)}>
                    Delete Customer
                </Button>

                <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                >
                    <AlertDialogOverlay>
                        <AlertDialogContent>
                            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                Delete Customer
                            </AlertDialogHeader>

                            <AlertDialogBody>
                                Are you sure? You cant undo this action afterwards.
                            </AlertDialogBody>

                            <AlertDialogFooter>
                                <Button ref={cancelRef} onClick={onClose}>
                                    Cancel
                                </Button>
                                <Button colorScheme='red' onClick={onClose} ml={3}>
                                    Delete
                                </Button>Button
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialogOverlay>
                </AlertDialog>
            </Box>
        </Box>
    )
}