import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import dir from "../images/dir.jpeg";
import man from "../images/manager.jpeg";
import vp from "../images/vp.jpeg";

const MakerCard = ({ img, title, name,desc }) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      w={["100%", "80%"]}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "400px" }}
        src={img}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="md">{name}</Heading>
          <Text fontSize="xl">Message From The {title}</Text>
          <Text py="2">
          {desc}
          </Text>
        </CardBody>
      </Stack>
    </Card>
  );
};

const Makers = () => {
  return (
    <VStack padding={8}>
      <Heading
        w={"full"}
        textAlign={"center"}
        padding={4}
        bgColor={"#fdba74"}
        rounded={"lg"}
        letterSpacing={"widest"}
      >
        Our Management
      </Heading>
      <MakerCard
        img={dir}
        title={"Director"}
        name={"Shri Dheeraj Latiyan"}
        desc={
          "Our vision is to empower every individual within our school community to reach their fullest potential academically, socially, and emotionally. We envision a school where diversity is celebrated, where students are inspired to embrace challenges, and where collaboration and respect are fundamental values."
        }
      />
      <MakerCard
        img={vp}
        title={"Vice Principal"}
        name={"Mr. Sunny Latiyan"}
        desc={"Children must be taught how to think not what to think (Margaret Mead) This is the thought that motivates the teachers at the S.L.S Memorial Public School. One of the most important decisions that any parents make school they choose for their children's education because young children have very impressionable minds"}
      />
    </VStack>
  );
};

export default Makers;
