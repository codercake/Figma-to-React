import { Button, Input, Flex, Text, Heading, Image, Container } from "@chakra-ui/react";
import React from "react";

export default function LaunchAnnouncement({
    announcementTitle = "Launching New Module Soon!",
    announcementDescription,
    hournumber,
    hours,
    colon,
    minnumber,
    minutes,
    colonOne,
    secnumber,
    seconds,
    notifyDescription,
    emailInput,
    notifyButton,
    ...props
}) {
    return(
        <Container
        {...props}
        gap={{ md: "70px", base:"35px", sm:"52px"  }}
        display="flex"
        alignSelf="stretch"
        flexDirecton="column"
        alignItems="center"
        px={{ md:"0px", base: "20px" }}
        py="12px"
        >
            <Flex gap={{ base: "36px", sm: "72px" }} alignSelf="stretch" flexDirecton="column">
            <Flex gap="2px" flexDirecton="column">
                <Flex gap="8px" justifyContent="center" alignItems="start">
                    <Image src="images/img_light_mode_rocket.png" alt="Lightmode" h="64px" mt="10px" w="64px" fit="cover" />
                    <Heading 
                        size="headingmd" 
                        color="transparent" 
                        as="h1" 
                        fontFamily="Poppins" 
                        bgGradient="linear-gradient(96deg, #0f0f0f, #333333)" 
                        alignItems="center" 
                        sx={{ "background-clip": "text" }} 
                        >
                            {announcementTitle}
                            </Heading>
                            </Flex>
                            <Text textAlign="center" lineHeight="120%">
                                <Text as="span" ccolor="blue_gray.900">
                                    Exciting things are in the works! We &#39;re currently&nbsp;
                                </Text>
                                <Text as="span" color="blue_gray.900" fontWeight={500}>
                                    Crafting a new feature for you. Keep an eye out for updates. We&#39;re working to make it available soon!
                                    </Text>
                                    </Text>
                                </Flex>
                                <Image src="images/img_get_ready_text.png" alt="Image" h="26px" fit="cover" mx={{ base: "0px", sm:"198px"}} />
                                </Flex>
                                <Flex
                                bgGradient="linear-gradient(133deg, #e5b7d8, #c9b7e5)"
                                alignSelf="stretch"
                                justifyContent="center"
                                alignItems="start"
                                p={{ base: "20px", sm:"22px" }}
                                mx={{ base: "0px", sm: "176px" }}
                                borderRadius="24px"
                                >
                                    <Flex mb="12px" flexDirecton="column" alignItems="start" justifyContent="center" px="8px">
                                        {!!hournumber ? (
                                            <Heading size="textmd" as="h6" color="black.900"  fontFamily="Poppins">
                                                {hournumber} 
                                                </Heading>
                                        ):null}
                                        {!!hours ? <Text ml={{  base: "0px", sm: "6px" }}>{hours}</Text> : null}
                                    </Flex>
                                    {!!colon?(
                                        <Heading
                                        size="textmd"
                                        as="h6"
                                        color="blue_gray.900"
                                        mb="16px"
                                        fontFamily="Poppins"
                                        fontWeight={400}
                                        alignSelf="end"
                                        transform="rotate(-180deg)"
                                        >
                                            {colon}
                                            </Heading>
                                    ): null}
                                    <Flex flex={1} flexDirecton="column" alignItems="center" px={{ md: "56px", base: "20px" }}>
                                        {!!minnumber?(
                                            <Heading size="textmd" as="h6" color="black.900" fontFamily="Poppins">
                                                {minnumber}
                                                </Heading>
                                        ): null }
                                        {!!minutes?(
                                            <Text mt="-4px" position="relative">
                                                <Text as="span">M</Text>
                                                <Text as="span">inutes</Text>
                                            </Text>
                                        ): null}
                                        </Flex>
                                        {!!colonOne ? (
                                            <Heading
                                            size="textmd"
                                            as="h6"
                                            color="blue_gray.900"
                                            mb="16px"
                                            fontFamily="Poppins"
                                            alignSelf="end"
                                            transform="rotate(-180deg)"
                                            fontWeight={400}
                                            >
                                                {colonOne}
                                            </Heading>
                                        ): null}
                                        <Flex flexDirection="column" alignItems="end" px="8px">
                                            {!!secnumber?(
                                                <Heading size="textmd" as="h6" color="black.900" mr={{ base: "0px", sm: "12px" }} fontFamily="Poppins">
                                                    {secnumber}
                                                </Heading>
                                            ):null}
                                            {!!seconds?(
                                                <Text mt="-4px" position="relative">
                                                    <Text as="span">S</Text>
                                                    <Text as="span">econds</Text>
                                                </Text>
                                            ):null}
                                            </Flex>
                                            </Flex>
                                            <Flex
                                            mb="10px"
                                            gap="18px"
                                            alignSelf="stretch"
                                            flexDirection="column"
                                            alignItems="center"
                                            mx={{ base: "0px", sm:"110px" }}
                                            >
                                           {!!notifyDescription ? (
                                            <Text size="textxs" color="gray.900">
                                                {notifyDescription}
                                            </Text>
                                           ): null}
                                           <Flex gap="14px" alignSelf="stretch" justifyContent="center">
                                            {!!emailInput ? <Input colorScheme="undefined_undefined" placeholder={`Please enter your email ID`} /> : null}
                                            {!!notifyButton ? <Button minW="190px">{notifyButton}</Button> : null}
          </Flex>
        </Flex>
    </Container>
 );
}