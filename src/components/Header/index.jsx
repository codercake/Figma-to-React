import { Image, Link, Heading, Flex, Container } from "@chakra-ui/react";
import React from "react";

export default function Header({...props}){
    return (
        <Flex{...props} alignItems="start" as="header">
        <Flex mb="168px" bg="black.900" boxShadow="xs" w="100%">
        <Container
        w="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        maxW="143px"
        gap="20px"
        px={{ md: "44px", base: "20px" }}
        py={{ base: "20px", sm: "22px"}}
        mx="auto"
        >
            <Flex ml={{ md: "20px", base: "0px" }} gap="6px" flexWrap="wrap">
                <Heading size="headingxs" as="h6" color="white.a700" letterSpacing="1.63px" fontSize="19.5px">
                    THE
                </Heading>
                <Heading
                size="headingxs"
                as="h6"
                color="gray.900_01"
                letterSpacing="1.63px"
                fontSize="19.5px"
                bg="white.a700"
                justifyContent="center"
                display="flex"
                alignItems="center"
                >
                    PRODUCT
                </Heading>
                <Heading size="headingxs" as="h6" color="white.a700" letterSpacing="1.63px" fontSize="19.5px">
                    PLATFORM
                </Heading>
            </Flex>
            <Link href="#">
            <Image src="images/img_ellipse_52.png" alt="Image" h="50px" w="50px" fit="cover" borderRadius="24px" />
            </Link>
        </Container>
        </Flex>
        </Flex>
    );
}
