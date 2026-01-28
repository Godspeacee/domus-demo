import React from "react";
import PropertyToolBar from "./PropertyToolBar";
import { Flex, Grid, Text, Box, Card, Inset } from "@radix-ui/themes";
import Link from "next/link";
import BookButton from "../BookButton";

const page = () => {
  return (
    <>
      <PropertyToolBar />
      <div>
        <Grid columns={{ initial: "1", sm: "2", md: "5" }} gap={"3"}>
          <Box maxWidth={"240px"}>
            <Card size={"2"}>
              <Inset clip={"padding-box"} side={"top"}>
                <img
                  src="/house1.jpg"
                  alt="house 1"
                  width={400}
                  height={300}
                  style={{
                    display: "block",
                    objectFit: "cover",
                    width: "100%",
                    height: 140,
                    backgroundColor: "var(--gray-5)",
                  }}
                  className="object-cover w-full h-[140px]"
                />
              </Inset>

              <Flex direction={"column"}>
                <Text size="3" weight="bold">
                  <Link href={`/properties/`}>House 1</Link>
                </Text>
                <Text>Lagos</Text>
                <Text>Apartment</Text>
                <Text>
                  {"Naira"} {"1,000,000"}
                </Text>
              </Flex>
              <BookButton />
            </Card>
          </Box>
          <Box maxWidth={"240px"}>
            <Card size={"2"}>
              <Inset clip={"padding-box"} side={"top"}>
                <img
                  src="/house2.jpg"
                  alt="house 2"
                  width={400}
                  height={300}
                  style={{
                    display: "block",
                    objectFit: "cover",
                    width: "100%",
                    height: 140,
                    backgroundColor: "var(--gray-5)",
                  }}
                  className="object-cover w-full h-[140px]"
                />
              </Inset>

              <Flex direction={"column"}>
                <Text size="3" weight="bold">
                  <Link href={`/properties/`}>House 2</Link>
                </Text>
                <Text>Lagos</Text>
                <Text>Apartment</Text>
                <Text>
                  {"Naira"} {"5,000,000"}
                </Text>
              </Flex>
              <BookButton />
            </Card>
          </Box>
          <Box maxWidth={"240px"}>
            <Card size={"2"}>
              <Inset clip={"padding-box"} side={"top"}>
                <img
                  src="/house3.jpg"
                  alt="house 3"
                  width={400}
                  height={300}
                  style={{
                    display: "block",
                    objectFit: "cover",
                    width: "100%",
                    height: 140,
                    backgroundColor: "var(--gray-5)",
                  }}
                  className="object-cover w-full h-[140px]"
                />
              </Inset>

              <Flex direction={"column"}>
                <Text size="3" weight="bold">
                  <Link href={`/properties/`}>House 3</Link>
                </Text>
                <Text>Lagos</Text>
                <Text>Apartment</Text>
                <Text>
                  {"Naira"} {"1,000,000"}
                </Text>
              </Flex>
              <BookButton />
            </Card>
          </Box>
          <Box maxWidth={"240px"}>
            <Card size={"2"}>
              <Inset clip={"padding-box"} side={"top"}>
                <img
                  src="/house4.jpg"
                  alt="house 1"
                  width={400}
                  height={300}
                  style={{
                    display: "block",
                    objectFit: "cover",
                    width: "100%",
                    height: 140,
                    backgroundColor: "var(--gray-5)",
                  }}
                  className="object-cover w-full h-[140px]"
                />
              </Inset>

              <Flex direction={"column"}>
                <Text size="3" weight="bold">
                  <Link href={`/properties/`}>House 4</Link>
                </Text>
                <Text>Lagos</Text>
                <Text>Apartment</Text>
                <Text>
                  {"Naira"} {"1,000,000"}
                </Text>
              </Flex>
              <BookButton />
            </Card>
          </Box>
          <Box maxWidth={"240px"}>
            <Card size={"2"}>
              <Inset clip={"padding-box"} side={"top"}>
                <img
                  src="/house5.jpg"
                  alt="house 1"
                  width={400}
                  height={300}
                  style={{
                    display: "block",
                    objectFit: "cover",
                    width: "100%",
                    height: 140,
                    backgroundColor: "var(--gray-5)",
                  }}
                  className="object-cover w-full h-[140px]"
                />
              </Inset>

              <Flex direction={"column"}>
                <Text size="3" weight="bold">
                  <Link href={`/properties/`}>House 5</Link>
                </Text>
                <Text>Lagos</Text>
                <Text>Apartment</Text>
                <Text>
                  {"Naira"} {"1,000,000"}
                </Text>
              </Flex>
              <BookButton />
            </Card>
          </Box>
        </Grid>
      </div>
    </>
  );
};

export default page;
