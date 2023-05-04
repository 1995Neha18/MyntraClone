import {
  Box,
  Container,
  Grid,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Carousels from "../components/Carousels";

// https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/14/7cec9b95-a683-473c-aca8-cc510821b1cd1676394720493-Desktop-Banner.gif

const Home = () => {
  return (
    <div>
      <Carousels />

      <Box w="100%" pl={"2rem"} mt={"-2rem"}>
        <Text
          fontSize={"3xl"}
          fontWeight={"bold"}
          color={"#rgb(50,50,66)"}
          fontFamily={"heading"}
        >
          BEST OF MYNTRA EXCLUSIVE BRANDS
        </Text>
      </Box>
      <Stack
        w="100%"
        h={"auto"}
        mt={"3rem"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
      >
        <Grid
          gridTemplateColumns={{
            base: "repeat(2,1fr)",
            md: "repeat(4,1fr)",
            lg: "repeat(8,1fr)",
          }}
          gap={2}
          w={"100%"}
          margin="auto"
        >
          <Box w={"180px"} h={"250px"}>
            <Image
              src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/3/10/b25f89eb-fbeb-4013-829e-32ee5b5daaa01646895183668-Roadster-HRX_Unisex.jpg"
              w={"100%"}
              h={"100%"}
            />
          </Box>
          <Box w={"180px"} h={"250px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/bfa5c871-a5a5-4d81-b46e-18aedccfdc9b1644407437913-Kurta_sets-_Anouk-_AAY_-_more.jpg" />
          </Box>
          <Box w={"180px"} h={"250px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/046147d1-1874-4c10-adb9-6dbd88b606e71644407437923-Kurtas-_Anouk-_Sangria_-_more.jpg" />
          </Box>
          <Box w={"180px"} h={"250px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/76acf345-fc62-4b49-8b2c-9c0fc9c925311644407437977-Tops_-_Dressberry-_AAY_-_more.jpg" />
          </Box>
          <Box w={"180px"} h={"250px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/3923c0c1-2260-4f0e-9598-15b6f9d7731c1644407437960-Roadster_and_H-N_Shirts.jpg" />
          </Box>
          <Box w={"180px"} h={"250px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/eb70855e-98c4-412d-bf20-50804546d57e1644407437883-Dresses_-_Dressberry-_Chemistry_-_more.jpg" />
          </Box>
          <Box w={"180px"} h={"250px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/eff5a33f-ea24-4e70-84e5-ec4d25ee5c7b1644407437968-Roadster_and_KnK_Tshirts.jpg" />
          </Box>
          <Box w={"180px"} h={"250px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/667a71f0-c24b-4a00-a98c-cc6a54a815e91644407437985-Tshirts_-_Roadster-_KnK_-_more.jpg" />
          </Box>
          {/* //2nd row */}
          <Box w={"180px"} h={"250px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/ffaa74a6-4824-4b19-8936-70ffaef92f001644407437937-M-H_and_HRX_Tshirts.jpg" />
          </Box>
          <Box w={"180px"} h={"250px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/f9621136-0f00-44d5-aa06-b727a6c8f7c51644407437944-M-H_and_Wrogn_Shirts.jpg" />
          </Box>
          <Box w={"180px"} h={"250px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/3f41465b-7109-4bb2-bf79-ab89ff2128be1644407437899-HRX_and_Harvard_Trackpants.jpg" />
          </Box>
          <Box w={"180px"} h={"250px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/e27ee3af-3f6b-4106-9b20-2b4463c80ba41644407437953-Roadster-_Wrogn_Jeans.jpg" />
          </Box>
          <Box w={"180px"} h={"250px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/2b15a87a-1d92-4edf-99c2-ec390a38089e1644407437872-Activewear_-_HRX-_Slazenger.jpg" />
          </Box>
          <Box w={"180px"} h={"250px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/931b0b8f-c14d-4ec7-b923-cf512de991731644407437891-HOP_and_Anouk_Kurtas_-_sets.jpg" />
          </Box>
          <Box w={"170px"} h={"250px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/201d1bfd-287e-47b6-bef6-3c46eac444a51644407437906-Jeans_-_Roadster-_M-H_and_more.jpg" />
          </Box>
          <Box w={"180px"} h={"250px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/745cec57-af58-4ba6-8ae1-a3ccbe7c54e91644407437930-Lingerie_-_Loungewear_-_DB-_ETC.jpg" />
          </Box>
        </Grid>
      </Stack>

      <Box mt={"10"}>
        <Text
          fontSize={"3xl"}
          fontWeight={"bold"}
          color={"#rgb(50,50,66)"}
          fontFamily={"heading"}
          pl={"2rem"}
        >
          TOP PICKS
        </Text>
      </Box>

      <Stack
        mt="2rem"
        border={"1px solid #rgb(50,50,66)"}
        w="100%"
        h="auto"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
      >
        <Grid
          gridTemplateColumns={{
            base: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(7,1fr)",
          }}
          width="100%"
          margin={"auto"}
        >
          <Box w={"217px"} h={"267px"}>
            <Image src="https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/062cea23-9a6a-44b9-bdd4-87cae6a462311645602543339-Kurta-sets.jpg" />
          </Box>
          <Box w={"217px"} h={"267px"}>
            <Image src="https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/8d65d400-decd-4f42-902c-a40350a16ed11645602543346-Kurtas.jpg" />
          </Box>
          <Box w={"217px"} h={"267px"}>
            <Image src="https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/398ee53b-5899-4a9a-9d0b-b35d60c01cb41645602543325-Dresses.jpg" />
          </Box>
          <Box w={"217px"} h={"267px"}>
            <Image src="https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/2f410d81-7fae-400e-9ecc-b4a8b6df72b91645602543430-Women-Jeans.jpg" />
          </Box>
          <Box w={"217px"} h={"267px"}>
            <Image src="https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/82a9be01-3032-4725-9500-bcc94366b7931645602543399-Mens-Shirts.jpg" />
          </Box>
          <Box w={"217px"} h={"267px"}>
            <Image src="https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/c6b09c0f-5c57-472c-a3fc-854ec506a90e1645602543387-Men-T-shirt.jpg" />
          </Box>

          <Box w={"217px"} h={"267px"}>
            <Image src="https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/f08e2bac-9bed-4f87-b022-0dce8defeded1645602543380-Men-Trousers.jpg" />
          </Box>
        </Grid>
      </Stack>

      <Box mt={"2rem"}>
        <Text
          fontSize={"3xl"}
          fontWeight={"bold"}
          color={"#rgb(50,50,66)"}
          fontFamily={"heading"}
          pl={"2rem"}
        >
          CATEGORIES TO BAG
        </Text>
      </Box>

      <Stack
        mt="3rem"
        border={"1px solid #rgb(50,50,66)"}
        w="100%"
        h="auto"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
      >
        <Grid
          gridTemplateColumns={{
            base: "repeat(2,1fr)",
            md: "repeat(4,1fr)",
            lg: "repeat(8,1fr)",
          }}
          width={"100%"}
          margin={"auto"}
        >
          {/* 1st row ----------------------------------------------------------------------------------------*/}
          <Box w={"190px"} h={"236px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aa4658b5-d723-4652-9ea1-00456b355c3a1645602467046-Kurta-Sets.jpg" />
          </Box>
          <Box w={"190px"} h={"236px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aae4be67-e611-47f4-b94e-92a16a36df731645602467007-Hangbags.jpg" />
          </Box>
          <Box w={"190px"} h={"236px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0f0be09e-4155-47bf-82e1-51044e7e7fd11645602467052-Kurtas.jpg" />
          </Box>
          <Box w={"190px"} h={"236px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/dd4414f8-4e1b-4a22-997e-8e06c0a5ff861645602467167-T-Shirts.jpg" />
          </Box>
          <Box w={"190px"} h={"236px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/f9ca5609-b634-42d4-8c08-a8eaebb818b71645602467085-Sarees.jpg" />
          </Box>
          <Box w={"190px"} h={"236px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0b7869d4-f825-4625-b1db-58ad10a45f301645602467093-Shirts.jpg" />
          </Box>
          <Box w={"190px"} h={"236px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b34a30a6-504b-4c94-b7e1-61391d536bc51645602467038-Jewellery.jpg" />
          </Box>
          <Box w={"190px"} h={"236px"}>
            <Image src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b156f76a-26e7-4bce-9941-8a67d3c16f331645602467120-Teens-Wear.jpg" />
          </Box>
          {/* 2nd row------------------------------------------------------------------------------ */}

          <Box w={"190px"} h={"236px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/fb091b07-c275-4578-b08d-b4f93dfe9e841645602466976-Beauty.jpg" />
          </Box>
          <Box w={"190px"} h={"236px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b827f900-ed61-4467-84fa-a6e357787e761645602467079-Plus-Size-Styles_W.jpg" />
          </Box>
          <Box w={"190px"} h={"236px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/cd083042-3bb2-4231-8b96-0234fc0ed23f1645602467032-Jeans.jpg" />
          </Box>
          <Box w={"190px"} h={"236px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/736f3951-e67b-414f-bfb1-56e2794d441d1645602467114-Sports-Shoes.jpg" />
          </Box>
          <Box w={"190px"} h={"236px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/d13255df-c846-4dbd-8458-77ccaba4f9eb1645602467142-Trousers.jpg" />
          </Box>
          <Box w={"190px"} h={"236px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/7a774194-94e6-49b5-b8bb-64bf9901bc671645602466989-Casual-Shoes.jpg" />
          </Box>
          <Box w={"190px"} h={"236px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/5860c3c2-a639-4625-ac1d-4d55406f128a1645602467134-Track-Pants.jpg" />
          </Box>
          <Box w={"190px"} h={"236px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/07e5c29a-2eab-4b2d-b617-6565ffe1f4701645602467025-Innerwear.jpg" />
          </Box>
          {/* 3rd row-------------------------------------------------------------------------------- */}

          <Box w={"190px"} h={"236px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/09b3164c-241a-4134-baa1-49b12c56c3901645602466968-Bath-Essentials.jpg" />
          </Box>
          <Box w={"190px"} h={"236px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/171a820e-96f0-4b11-a138-03953a7e05481645602467153-Trousers_W.jpg" />
          </Box>
          <Box w={"190px"} h={"236px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/054a056f-33e8-4b6c-b747-9b88d7fce0a11645602467174-Watches.jpg" />
          </Box>
          <Box w={"190px"} h={"236px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/d3c5cd23-392f-40be-8080-99ffb79c27261645602467128-Tops.jpg" />
          </Box>
          <Box w={"190px"} h={"236px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/355b9499-3345-4457-8b3b-2eeceaecf4561645602467020-Infant-Essentials.jpg" />
          </Box>
          <Box w={"190px"} h={"236px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/7f814546-b705-4d9b-9ab5-1ddfeca786391645602467001-Flip-Flops.jpg" />
          </Box>
          <Box w={"190px"} h={"236px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/355b9499-3345-4457-8b3b-2eeceaecf4561645602467020-Infant-Essentials.jpg" />
          </Box>
          <Box w={"190px"} h={"236px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/67783047-7fcc-4530-9368-9be75a713e411645602466995-Dresses.jpg" />
          </Box>
        </Grid>
      </Stack>

      
      <Box mt={"2rem"}>
        <Text
          fontSize={"3xl"}
          fontWeight={"bold"}
          color={"#rgb(50,50,66)"}
          fontFamily={"heading"}
          pl={"2rem"}
        >
          DEALS ON TOP BRANDS
        </Text>
      </Box>

      <Stack
        mt="3rem"
        border={"1px solid #rgb(50,50,66)"}
        w="100%"
        h="auto"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
      >
        <Grid
          gridTemplateColumns={{
            base: "repeat(2,1fr)",
            md: "repeat(4,1fr)",
            lg: "repeat(8,1fr)",
          }}
          width={"100%"}
          margin={"auto"}
        >
          {/* 1st row ----------------------------------------------------------------------------------------*/}
          <Box w={"190px"} h={"309px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/3/f0dc0024-a8d3-4aec-9e1b-d9b6873b52d51599144996663-Crocs.jpg" />
          </Box>
          <Box w={"190px"} h={"309px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/85d5e2e1-fa21-43b0-a352-438e15f1006e1598892141455-Nike.jpg" />
          </Box>
          <Box w={"190px"} h={"309px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/22b908fa-38aa-46a6-a3cd-a5ccd46b04ce1598892141560-Puma.jpg" />
          </Box>
          <Box w={"190px"} h={"309px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/26/adc58a2c-fa18-4b94-b2d6-4c692a44123d1601115417606-unnamed--6-.jpg" />
          </Box>
          <Box w={"190px"} h={"309px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/8238147e-a86e-4fe4-a830-ab5c2c49beba1598892141840-W.jpg" />
          </Box>
          <Box w={"190px"} h={"309px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/1/7d0153c1-2fc4-49ec-ac7c-3c402d1ed45f1598948396008-USPA.jpg" />
          </Box>
          <Box w={"190px"} h={"309px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/c6a4ec29-f907-4d54-8ed7-83006938b20c1598892141612-Tommy-Hilfiger.jpg" />
          </Box>
          <Box w={"190px"} h={"309px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/26/d1fab403-7742-4a91-a781-2e36bea65a8a1598445950683-Men-s-Apparel---Roadster.png" />
          </Box>
          {/* 2nd row------------------------------------------------------------------------------ */}

          <Box w={"190px"} h={"309px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/4abbda25-8d58-44f7-a986-c80fa31b08b31598892141513-Only.jpg" />
          </Box>
          <Box w={"190px"} h={"309px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/26/72af0092-fd16-4b61-b1fb-e617c089fe251598456566139-image_jpeg1938580873.jpg" />
          </Box>
          <Box w={"190px"} h={"309px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/9/5a5a162e-c4ad-4497-b995-a3c077d25df71596975348916-Women-s-Ethnic-Wear_Vishudh.jpg" />
          </Box>
          <Box w={"190px"} h={"309px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/1/da4935ce-8f3f-4273-bfbe-6ded783cf2131598948352513-Levis.jpg" />
          </Box>
          <Box w={"190px"} h={"309px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/ee953e28-7ca8-4e08-a6a9-c51c98f823411598892141010-BIBA.jpg" />
          </Box>
          <Box w={"190px"} h={"309px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/1/08f15f56-156e-45c8-b0bc-7aecd0b122431598970514602-Veromoda.jpg" />
          </Box>
          <Box w={"190px"} h={"309px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/64ec275a-9d3a-432c-b3df-736a7e9518d11598892141670-UCB.jpg" />
          </Box>
          <Box w={"190px"} h={"309px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/26/0390ad1a-1262-4f7a-8f81-37c1644142a91598445950839-Sports---HRX-by-Hrithik-Roshan.png" />
          </Box>
          {/* 3rd row-------------------------------------------------------------------------------- */}

          <Box w={"190px"} h={"309px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/10/7/697bb8c0-5c99-4d02-b0f9-d46ca72889db1602086685082-dressberrywomen.jpg" />
          </Box>
          <Box w={"190px"} h={"309px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/10/7/ff1358d9-6c6f-4fef-b169-d2875d43292c1602086685210-mhmen.jpg" />
          </Box>
          <Box w={"190px"} h={"309px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/28/529db52b-ba58-423a-9ad6-3161ef642dff1598605975128-Women-s-Ethnic-Wear---Anouk.png" />
          </Box>
          <Box w={"190px"} h={"309px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/10/7/7c774b84-f2ec-4a3f-9208-8ba663ee4c221602086685157-hereand-now-men.jpg" />
          </Box>
          <Box w={"190px"} h={"309px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/c8f8c028-21c6-4b65-9d77-188378312e561598892141092-Cutecumber.jpg" />
          </Box>
          <Box w={"190px"} h={"309px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/10/7/99f75f40-4d3f-4049-87da-be2662359aca1602087172072-sangriawomen.jpg" />
          </Box>
          <Box w={"190px"} h={"309px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/4/e6c7a718-acc0-4aa6-b04c-470ab139d66c1599230080722-F21--4-.jpg" />
          </Box>
          <Box w={"190px"} h={"309px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2021/11/12/2d4b2a2c-9332-4844-bb32-6ccf0e35fef21636697516790-Urbanic-1.jpg" />
          </Box>
        </Grid>
      </Stack>

      


    </div>
  );
};

export default Home;
