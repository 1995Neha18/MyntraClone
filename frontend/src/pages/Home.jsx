import {
  Box,
  Grid,
  Image,
  Stack,
  Text,
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
      {/* Stack-1------------------------------------------------------------ */}
      <Stack
        w="100%"
        h={"auto"}
        mt={"3rem"}
        _hover={{ cursor: "pointer" }}
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
          w={"100%"}
          margin="auto"
          
        >
          <Box w={"184.9px"} h={"242.49px"}>
            <Image
              src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/3/10/b25f89eb-fbeb-4013-829e-32ee5b5daaa01646895183668-Roadster-HRX_Unisex.jpg"
              w={"100%"}
              h={"100%"}
            />
          </Box>
          <Box w={"184.9px"} h={"242.49px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/bfa5c871-a5a5-4d81-b46e-18aedccfdc9b1644407437913-Kurta_sets-_Anouk-_AAY_-_more.jpg" />
          </Box>
          <Box w={"184.9px"} h={"242.49px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/046147d1-1874-4c10-adb9-6dbd88b606e71644407437923-Kurtas-_Anouk-_Sangria_-_more.jpg" />
          </Box>
          <Box w={"184.9px"} h={"242.49px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/76acf345-fc62-4b49-8b2c-9c0fc9c925311644407437977-Tops_-_Dressberry-_AAY_-_more.jpg" />
          </Box>
          <Box w={"184.9px"} h={"242.49px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/3923c0c1-2260-4f0e-9598-15b6f9d7731c1644407437960-Roadster_and_H-N_Shirts.jpg" />
          </Box>
          <Box w={"184.9px"} h={"242.49px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/eb70855e-98c4-412d-bf20-50804546d57e1644407437883-Dresses_-_Dressberry-_Chemistry_-_more.jpg" />
          </Box>
          <Box w={"184.9px"} h={"242.49px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/eff5a33f-ea24-4e70-84e5-ec4d25ee5c7b1644407437968-Roadster_and_KnK_Tshirts.jpg" />
          </Box>
          <Box w={"184.9px"} h={"242.49px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/667a71f0-c24b-4a00-a98c-cc6a54a815e91644407437985-Tshirts_-_Roadster-_KnK_-_more.jpg" />
          </Box>
          {/* //2nd row */}
          <Box w={"184.9px"} h={"242.49px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/ffaa74a6-4824-4b19-8936-70ffaef92f001644407437937-M-H_and_HRX_Tshirts.jpg" />
          </Box>
          <Box w={"184.9px"} h={"242.49px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/f9621136-0f00-44d5-aa06-b727a6c8f7c51644407437944-M-H_and_Wrogn_Shirts.jpg" />
          </Box>
          <Box w={"184.9px"} h={"242.49px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/3f41465b-7109-4bb2-bf79-ab89ff2128be1644407437899-HRX_and_Harvard_Trackpants.jpg" />
          </Box>
          <Box w={"184.9px"} h={"242.49px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/e27ee3af-3f6b-4106-9b20-2b4463c80ba41644407437953-Roadster-_Wrogn_Jeans.jpg" />
          </Box>
          <Box w={"184.9px"} h={"242.49px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/2b15a87a-1d92-4edf-99c2-ec390a38089e1644407437872-Activewear_-_HRX-_Slazenger.jpg" />
          </Box>
          <Box w={"184.9px"} h={"242.49px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/931b0b8f-c14d-4ec7-b923-cf512de991731644407437891-HOP_and_Anouk_Kurtas_-_sets.jpg" />
          </Box>
          <Box w={"184.9px"} h={"242.49px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/201d1bfd-287e-47b6-bef6-3c46eac444a51644407437906-Jeans_-_Roadster-_M-H_and_more.jpg" />
          </Box>
          <Box w={"184.9px"} h={"242.49px"}>
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
      {/* Stack2 ------------------------------------------------------------------------------------- */}
      <Stack
        mt="2rem"
        _hover={{ cursor: "pointer" }}
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
      {/* Stack3 ------------------------------------------------------------------------------------- */}
      <Stack
        mt="3rem"
        _hover={{ cursor: "pointer" }}
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
      {/* Stack4 ---------------------------------------------------------------------------------------- */}
      <Stack
        mt="3rem"
        _hover={{ cursor: "pointer" }}
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

      <Box mt={"2rem"}>
        <Text
          fontSize={"3xl"}
          fontWeight={"bold"}
          color={"#rgb(50,50,66)"}
          fontFamily={"heading"}
          pl={"2rem"}
        >
          MYNTRA LUXE
        </Text>
      </Box>
      {/* Stack5 ------------------------------------------------------------------------------ */}
      <Stack
        w="100%"
        h={"auto"}
        mt={"3rem"}
        _hover={{ cursor: "pointer" }}
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
          w={"100%"}
          margin="auto"
        >
          <Box w={"189.9px"} h={"249.04px"}>
            <Image
              src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/8c07792e-bbf9-4935-8d9c-3a6a66eba4f01636726166240-HP-DKNY.jpg"
              w={"100%"}
              h={"100%"}
            />
          </Box>
          <Box w={"189.9px"} h={"249.04px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/1cbf16e3-afe2-4013-af4d-4e427f1e30ee1636726166266-HP-Junghans.jpg" />
          </Box>
          <Box w={"189.9px"} h={"249.04px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/98b141e0-8d71-4e1b-8afa-49d1b7113a141636726166278-HP-Luxe.jpg" />
          </Box>
          <Box w={"189.9px"} h={"249.04px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/35f5db21-a813-4c1a-81e4-7ca2bc5a08351636726166290-HP-Oris.jpg" />
          </Box>
          <Box w={"189.9px"} h={"249.04px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/a9d39733-2022-4964-8c22-6c9e43d8502a1636726166259-HP-Hackett.jpg" />
          </Box>
          <Box w={"189.9px"} h={"249.04px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/9c262136-abbd-4087-9267-bc1f3b90b3c01636726166303-HP-RaymondWeil.jpg" />
          </Box>
          <Box w={"189.9px"} h={"249.04px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/5158cd92-89b5-452e-97c5-938bdf63516e1636726166284-HP-Movado.jpg" />
          </Box>

          <Box w={"189.9px"} h={"249.04px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/585ac7b3-36e3-4964-8707-a2249df2b1291636726166319-HP-versace.jpg" />
          </Box>
          {/* //2nd row */}
          <Box w={"189.9px"} h={"249.04px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/17/4fac3c61-9e54-486c-a083-6f61df81436c1623933299972-HPCarouselVisibility-MyntraLuxe-Tissot.jpg" />
          </Box>
          <Box w={"189.9px"} h={"249.04px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/65d5107e-35cf-4176-aef3-b7ae77dd09761636726166252-HP-FredPerry.jpg" />
          </Box>
          <Box w={"189.9px"} h={"249.04px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/17/9b04f96a-f1ed-4edc-8840-483719055fdb1623940080549-HPCarouselVisibility-MyntraLuxe-ExploreStore.jpg" />
          </Box>
          <Box w={"189.9px"} h={"249.04px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/6eaf8591-e92b-4ab3-a4e5-f38caac6c7d91636726166295-HP-POLORalphLauren.jpg" />
          </Box>
          <Box w={"189.9px"} h={"249.04px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/884c0181-9da3-43c4-89f5-8696b97ec7751636726166246-HP-Dyson.jpg" />
          </Box>
          <Box w={"189.9px"} h={"249.04px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/17/adf54639-1714-4935-8d22-ceef8ef1d8d31623940080665-HPCarouselVisibility-TheCollective-ExploreStore.jpg" />
          </Box>
          <Box w={"189.9px"} h={"249.04px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/7e273a5a-9372-4956-af96-38aa903668201636726166272-HP-KarlLagerfeld.jpg" />
          </Box>
          <Box w={"189.9px"} h={"249.04px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/17/bfa35f05-88b3-419f-af88-83c2ea0483f91623933299966-HPCarouselVisibility-MyntraLuxe-Tedbaker.jpg" />
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
          LATEST IN BEAUTY & GROOMING
        </Text>
      </Box>
      {/* Stack6 ----------------------------------------------------------------------- */}
      <Stack
        w="100%"
        h={"auto"}
        mt={"3rem"}
        _hover={{ cursor: "pointer" }}
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
          w={"100%"}
          margin="auto"
        >
          <Box w={"379.8px"} h={"271.27px"}>
            <Image
              src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/2c49ab74-5efa-4104-b71c-cdb4891762931645791174303-SS22-Beauty-Philips.jpg"
              w={"100%"}
              h={"100%"}
            />
          </Box>
          <Box w={"379.8px"} h={"271.27px"}>
            <Image src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/1850cdd3-e1be-47b3-ac4b-f8f395afce491645791174169-SS22-Beauty-Biotique.jpg" />
          </Box>
          <Box w={"379.8px"} h={"271.27px"}>
            <Image src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/7f7c368a-fa16-44f9-b7a2-8562ec21ba0a1645791174190-SS22-Beauty-ColorBar.jpg" />
          </Box>
          <Box w={"379.8px"} h={"271.27px"}>
            <Image src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/45b5535a-38c4-4c10-a301-3b6f3b56e43f1645791174266-SS22-Beauty-Lakme.jpg" />
          </Box>
        </Grid>
      </Stack>
      <Stack
        w="100%"
        h={"auto"}
        _hover={{ cursor: "pointer" }}
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
          w={"100%"}
          margin="auto"
        >
          {/* row-2 ----------------------------------------------------------- */}
          <Box w={"379.8px"} h={"271.27px"}>
            <Image src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/b0ed0a6a-5b23-42d4-9dce-3fceb80ff68c1645791174229-SS22-Beauty-Himalaya.jpg" />
          </Box>
          <Box w={"379.8px"} h={"271.27px"}>
            <Image src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/564b3c15-dba4-422e-acd5-72aac85b75541645791174149-SS22-Beauty-Beardo.jpg" />
          </Box>
          <Box w={"379.8px"} h={"271.27px"}>
            <Image src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/f4330a78-6a11-4edc-bad9-dc03f02dec0e1645791174210-SS22-Beauty-FacesCanada.jpg" />
          </Box>

          <Box w={"379.8px"} h={"271.27px"}>
            <Image src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/31253277-4623-43ed-9129-9b8015520e901645791174285-SS22-Beauty-Mamaearth.jpg" />
          </Box>
        </Grid>
      </Stack>

      <Box w="100%" pl={"2rem"} mt={"2rem"}>
        <Text
          fontSize={"3xl"}
          fontWeight={"bold"}
          color={"#rgb(50,50,66)"}
          fontFamily={"heading"}
        >
          TRENDING OUTFITS BY INFLUENCERS
        </Text>
      </Box>
      {/* Stack-7------------------------------------------------------------ */}
      <Stack
        w="100%"
        h={"auto"}
        mt={"3rem"}
        mb={"2rem"}
        _hover={{ cursor: "pointer" }}
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
          w={"100%"}
          margin="auto"
          
        >
          <Box w={"189.9px"} h={"249.09px"}>
            <Image
              src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/0d7a22b9-e201-44db-ba04-6dfba8ebd5061647418012721-Studiocontent-HPCarousel-Women-WesternWear.jpg"
              w={"100%"}
              h={"100%"}
            />
          </Box>
          <Box w={"189.9px"} h={"249.09px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/d8bee915-9dbd-4cbb-9562-896dd16afdf31647418012563-Studiocontent-HPCarousel-Men-BeyondBasicsCasulaWear.jpg" />
          </Box>
          <Box w={"189.9px"} h={"249.09px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/fa1a37d5-db35-4df5-9f3b-dfeebf9a22bd1647418012703-Studiocontent-HPCarousel-Women-IndianWearGuide.jpg" />
          </Box>
          <Box w={"189.9px"} h={"249.09px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/843d4a44-833a-4179-a5a2-7f8c52bb1ef71647418012580-Studiocontent-HPCarousel-Men-FootwearFavouritesjpg.jpg" />
          </Box>
          <Box w={"189.9px"} h={"249.09px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/ce751fad-7e3a-456d-87cd-457c6de7fccc1647418012597-Studiocontent-HPCarousel-Men-FormalWear.jpg" />
          </Box>
          <Box w={"189.9px"} h={"249.09px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/0b6937a5-cf76-49c6-a3ab-551b7a17fafa1647418012686-Studiocontent-HPCarousel-Women-GymWear.jpg" />
          </Box>
          <Box w={"189.9px"} h={"249.09px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/3edddaf4-c192-4651-966d-6b8e04fa309b1647418012668-Studiocontent-HPCarousel-Women-FormalWear.jpg" />
          </Box>
          <Box w={"189.9px"} h={"249.09px"}>
            <Image src="https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/99b98dd2-83e4-4ac1-b2a5-b0bf8b81d62a1647418012633-Studiocontent-HPCarousel-Men-LoungeWear.jpg" />
          </Box>
          
        </Grid>
      </Stack>
    </div>
  );
};

export default Home;
