import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
//   HStack,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { RiHandbagLine, RiLogoutCircleRLine } from "react-icons/ri";
import { HiOutlineHeart } from "react-icons/hi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Searchbar from "./Searchbar";



export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  // const Navigate = useNavigate();
  // const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
  // const dispatch = useDispatch();

  //   useEffect(()=>{
  //   dispatch();
  // },[dispatch])

  return (
    <Box w={"100%"} mx={"auto"} 
    style={{ position: "sticky", top: 0, zIndex: 100 }}
    >
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            <NavLink to="/" >
            <Image
            src="Myntra.png" alt="logo" width={"60%"} 
            ml="2rem"
            mt={"5px"}
            // onClick={() => Navigate("/")}
            />
            </NavLink>
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Searchbar/>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={2}
        >
           
          <NavLink to="/login" >
          <Button
            display={"flex"}
            flexDirection={"column"}
            fontSize={"xs"}
            bg={"none"}
            _hover={{ bg: "white", color: "pink", fontWeight: "bold" }}
          >
            <IconButton
              aria-label="Wishlist"
              icon={<IoPersonCircleSharp />}
              variant="ghost"
              w="fit-content"
              _hover={{ bg: "pink" }}
            />
            <Text>Profile</Text>
          </Button>
          </NavLink>

          
          <Button
            display={"flex"}
            flexDirection={"column"}
            fontSize={"xs"}
            bg={"none"}
            _hover={{ bg: "white", color: "pink", fontWeight: "bold" }}
            onClick={() => localStorage.clear()}
          >
            <IconButton
              aria-label="Wishlist"
              icon={<RiLogoutCircleRLine />}
              variant="ghost"
              w="fit-content"
              _hover={{ bg: "pink" }}
            />
            <Text>Logout</Text>
          </Button>

          <NavLink to="/cart" >
          <Button
            display={"flex"}
            flexDirection={"column"}
            fontSize={"xs"}
            bg={"none"}
            _hover={{ bg: "white", color: "pink", fontWeight: "bold" }}
          >
            <IconButton
              aria-label="Wishlist"
              icon={<RiHandbagLine />}
              variant="ghost"
              w="fit-content"
              _hover={{ bg: "pink" }}
            />
            <Text>Bag</Text>
          </Button>
          </NavLink>

          {/* <Text
                bg={"#BB1679"}
                color={"white"}
                paddingX={1.5}
                borderRadius={"50%"}
                fontSize={'xs'}
              >
                {cartData.length}
              </Text> */}

        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={6}
    mr={"30rem"}
    mt={"10px"}
    >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}
       
        >
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={{md:'xs',lg:"sm"}}
                fontWeight={700}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                  borderBottom: "3px solid #BB1679",
                }}
              >
                {navItem.label==="MENS"?<NavLink to='/mens' >
                {navItem.label}
                </NavLink>:navItem.label==="WOMEN"?<NavLink to='/womens' >
                {navItem.label}
                </NavLink>:navItem.label==="KIDS"?<NavLink to='/kids' >
                {navItem.label}
                </NavLink>:<NavLink to='*' >
                {navItem.label}
                </NavLink>}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={10}
                rounded={"md"}
                w={"6xl"}
                h={"auto"}
              >
                <Flex
                  direction={"row"}
                  width={"auto"}
                  gap={"20px"}
                  justifyContent={"space-between"}
                >
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Flex>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};
const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"md"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "MENS",
    children: [
      {
        label: "Topwear",
        subLabel: [
          "T-Shirts",
          "Casual Shirts",
          "Formal Shirts",
          "Sweatshirts",
          "Sweaters",
          "Jackets",
          "Blazzers and Coats",
          "Suits",
          "Rain Jackets",
        ],
        href: "/product",
      },
      {
        label: "Indian and Festive Wear",
        subLabel: [
          "Kurtas and Kurtas Sets",
          "Sherwanies",
          "Nehru Jacket",
          "Dhoties",
        ],
        href: "/product",
      },
      {
        label: "Bottomwear",
        subLabel: [
          "Jeans",
          "Casual Trousers",
          "Shorts",
          "TrackPants and Joggers",
        ],
        href: "/product",
      },
      {
        label: "Innerwear ans Sleepwear",
        subLabel: [
          "Brief and Trunks",
          "Vests",
          "Sleepwear and Loungewear",
          "Thermals",
        ],
        href: "/product",
      },

      {
        label: "Footwear",
        subLabel: [
          "Casual Shoes",
          "Sports Shoes",
          "Formal Shoes",
          "Sneakers",
          "Sandals and Floaters",
          "Flip Flops",
          "Socks",
        ],
        href: "/product",
      },
    ],
  },
  {
    label: "WOMEN",
    children: [
      {
        label: "Indian and Fusion Wear",
        subLabel: [
          "Crop tops Lehenga",
          "Palazzo Lehenga",
          "jacket over Sari",
          "Pants under Saree",
          "Slit Dhoti under Blouse",
          "Ethnic saree",
          "Ethnic skirt",
        ],
        href: "/womens",
      },
      {
        label: "Western Wear",
        subLabel: [
          "Dresses",
          "Tops",
          "TShirts",
          "Jeans",
          "Trousers & Capris",
          "Shorts and Skirts",
          "Co-ords",
          "Playsuits",
          "Jumpsuits",
          "Shrungs",
          "Sweaters & SweatShirts",
          "Blazzers and Waistcoats",
        ],
        href: "/womens",
      },
      {
        label: "Footwear",
        subLabel: [
          "Flats",
          "Casual Shoes",
          "Heels",
          "Boots",
          "Sports Shoes & Floaters",
          "Sports and Active Wear",
        ],
        href: "/womens",
      },
      {
        label: "Lingerie & Sleepwear",
        subLabel: [
          "Acne & Blemishes",
          "Fine Lines & Wrinkles",
          "Dark Circles",
          "Dry Skin",
          "Dullness",
          "Lack of Fairness",
          "Pigmentaion",
        ],
        href: "/womens",
      },
      {
        label: "Beauty & Personal Care",
        subLabel: [
          "Take The SPF Quiz",
          "SPF 30 and over",
          "SPF 50 and over",
          "After Sun",
          "Tinted",
          "Mineral",
          "Eye Protection",
        ],
        href: "/womens",
      },
    ],
  },
  {
    label: "KIDS",
    children: [
      {
        label: "Boys Clothing",
        subLabel: [
          "T-Shirts",
          "Casual Shirts",
          "Formal Shirts",
          "Sweatshirts",
          "Sweaters",
          "Jackets",
          "Blazzers and Coats",
          "Suits",
          "Rain Jackets",
        ],
        href: "/kids",
      },
      {
        label: "Girls Clothing",
        subLabel: [
          "Shampoo",
          "Conditioners",
          "Hair Treatments",
          "Hair Masks",
          "Hair Oils",
          "Hair Sprays",
          "Hair Styling",
          "Hair Thinning & Loss",
        ],
        href: "/kids",
      },
      {
        label: "Footwear",
        subLabel: [
          "Flats",
          "Casual Shoes",
          "Heels",
          "Boots",
          "Sports Shoes & Floaters",
          "Sports and Active Wear",
        ],
        href: "/kids",
      },
      {
        label: "Toys",
        subLabel: ["Flat Irons", "Hair Dryers", "Rollers & Curling Tongs"],
        href: "#",
      },
      {
        label: "Infants",
        subLabel: [" Removal Devices", " Removal Products", " Beauty Products"],
        href: "/kids",
      },
    ],
  },
  {
    label: "HOME",
    children: [
      {
        label: "Ben Linen & Furnishing",
        subLabel: [
          "New In",
          "Clean Makeup",
          "5 Rated Products",
          "Gifts & Sets",
          "Brushes & Applicators",
          "Makeup Palettes",
          "Nails",
        ],
        href: "#",
      },
      {
        label: "Flooring",
        subLabel: [
          "Eye Liners",
          "Lash & Brow Enhancers",
          "Eye Shadows",
          "Mascaras",
          "Brow Pencils",
        ],
        href: "#",
      },
      {
        label: "Bath",
        subLabel: [
          "BB && CC Cream",
          "Blushers",
          "Bronzers",
          "Color Correctors",
          "Concealers",
          "Contour",
          "Face Powders",
          "Foundations",
          "Highlighters",
        ],
        href: "#",
      },
      {
        label: "Lamps and Lighting",
        subLabel: [
          "stastics",
          "Lamps Balms",
          "Lamp Glosses",
          " Liners",
          " Plumpers",
          "Liquid Lamps",
        ],
        href: "#",
      },
      {
        label: "Home Decor",
        subLabel: [
          "Accessories",
          "Pre-Tan Preparation",
          "Body Tanners",
          "Post Tanning",
        ],
        href: "#",
      },
    ],
  },
  {
    label: "BEAUTY",
    children: [
      {
        label: "Makeup",
        subLabel: [
          "View All Bath & Body",
          "New In",
          "Clean Bath & Body",
          "5 Rated Products",
          "Gifts & Sets",
          "Travel Sizes",
          "At Home Spa",
          "Decorants",
          "Oral Care",
        ],
        href: "#",
      },
      {
        label: "Skincare,Bath & Body",
        subLabel: [
          "Baths Oils/Soak",
          "Bath Salts",
          "Body Washes",
          "Cleansing bars",
          "Exfoliators",
        ],
        href: "#",
      },
      {
        label: "Baby Care",
        subLabel: [
          "Accessories",
          "Pre-Tan Preparation",
          "Body Tanners",
          "Post Tanning",
        ],
        href: "#",
      },
      {
        label: "Moisturizers",
        subLabel: ["Balms", "Butters", "Creams", "Lotions", "Oils"],
        href: "#",
      },
      {
        label: "Haircare",
        subLabel: [
          "Bust",
          "Cellulite",
          "Dry Skin",
          "Hair Removal",
          "Hands & Foot Care",
          "Hans Soap Senitizers & Creams",
          "Legs",
          "Simming & Sculpting",
          "Strecth Marks",
          "Sunscreen",
        ],
        href: "#",
      },
    ],
  },
  {
    label: "STUDIO",
    children: [
      {
        label: "Galary",
        subLabel: ["View All Fragrance", "New In", "5 Rated Products"],
        href: "#",
      },
      {
        label: "Top Brands",
        subLabel: [
          "NEOM Organics",
          "Glasshouse Fragrances",
          "KORRES",
          "NEST Fragrance",
          "Molton Brown",
        ],
        href: "#",
      },
      {
        label: "Deoderants",
        subLabel: [
          "Perfume",
          "EAU de Toilette",
          "Body Spray",
          "For Her",
          "For Him",
        ],
        href: "#",
      },
      {
        label: "Ethnic",
        subLabel: [
          "Scented Candles",
          "Diffusers",
          "Aromatherapy",
          "Pillow Mists",
          "Room Sprays",
        ],
        href: "#",
      },

      {
        label: "Upcoming Fashion",
        subLabel: ["In Shirts", "In Pants", "Casual", "Watches", "Footwear"],
        href: "#",
      },
    ],
  },
];
