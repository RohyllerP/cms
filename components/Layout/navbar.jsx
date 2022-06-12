import React from "react";
import {
	Box,
	Flex,
	HStack,
	Text,
	Spacer,
	IconButton,
	Button,
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useColorMode,
	useColorModeValue,
	useDisclosure,
} from "@chakra-ui/react";
import Image from 'next/image';
import Link from 'next/link';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const btnRef = React.useRef()
	const { colorMode, toggleColorMode } = useColorMode();
	const bg = useColorModeValue("#F1EFEF", "");
	const bgTwo = useColorModeValue("teal.400", "gray.800");
	return (
		<Box h="100px">
			<Flex>
				<Box cursor="pointer">
					<Link href="/">
						<a><Image src="/img/logo2.png"
							alt="Logo del colegio maria santisima"
							width={100}
							height={100} /></a>
					</Link>
				</Box>
				<Spacer />
				<Flex display={['none', 'none', 'flex', 'flex']} ml="2em" mr="3em">
					<Box mt="2em">
						<HStack spacing="1em">
							<Text>
								<Link href="/">
									<a>Inicio</a>
								</Link>
							</Text>
							<Text>
								<Link href="/Informacion">
									<a>Información</a>
								</Link>
							</Text>
							<Text>
								<Link href="/Galeria">
									<a>Galeria</a>
								</Link>
							</Text>
						</HStack>
					</Box>
					<Box ml="2em" mt="1.9em">
						<IconButton
							icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
							bg={bg}
							isRound='true'
							size='md'
							color="colors.secondary"
							onClick={toggleColorMode}
						/>
					</Box>
				</Flex>
				<Button
					mt="1.7em"
					mr="1.5em"
					ref={btnRef}
					colorScheme="teal"
					onClick={onOpen}
					display={['flex', 'flex', 'none', 'none']}>
					Menu
				</Button>
				<Drawer placement="right" onClose={onClose} isOpen={isOpen} size="md">
					<DrawerOverlay />
					<DrawerContent color="white" bg={bgTwo}>
						<DrawerCloseButton mt="2" />
						<DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
						<DrawerBody>
							<Box>
								<Box py="25px">
									<Link href="/">
										<a>Inicio</a>
									</Link>
								</Box>
								<Box py="25px">
									<Link href="/Informacion">
										<a>Informacion</a>
									</Link>
								</Box>
								<Box py="25px">
									<Link href="/Galeria">
										<a>Galeria</a>
									</Link>
								</Box>
								<Box>
									<IconButton
										icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
										isRound='true'
										size='lg'
										alignSelf='flex-end'
										color="colors.secondary"
										onClick={toggleColorMode}
									/>
								</Box>
							</Box>
						</DrawerBody>
					</DrawerContent>
				</Drawer>
			</Flex>
		</Box>
	)
}
