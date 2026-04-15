import {type MenuItem} from "./menu_type.ts"
import alienAvocadoToast from "../assets/AlienAvocadoToast.jpg"
import andromedaFriedRice from "../assets/AndromedaFriedRice.png"
import binaryStarBurger from "../assets/BinaryStarBurger.jpg"
import blueNoodles from "../assets/BlueNoodles.png"
import cosmicCarbonara from "../assets/Cosmic Carbonara.jpg"
import darkMatterMilkshare from "../assets/DarkMatterMilkshare.jpg"
import gaghalagus from "../assets/GaghALaGus.png"
import galacticGumbo from "../assets/Galactic Gumbo.jpg"
import majorCow from "../assets/MajorCow.png"
import meteorMeatballs from "../assets/MeteorMeatballs.jpg"
import nebulaNachos from "../assets/NebulaNachos.png"
import plutoPlatter from "../assets/PlutoPlatterNoText.png"
import quantumQuesadilla from "../assets/QuantumQuesadillaNoText.png"
import saturnRingCalamari from "../assets/SaturnRingCalamari.jpg"
import special from "../assets/Special.png"
import tatooineTerrine from "../assets/TatooineTerrine.png"
import wormholeWings from "../assets/WormholeWings.jpg"
import yaroRootSalad from "../assets/YaroRootSalad.png"

export const menuitems : MenuItem[] = [
    {
        id: 1,
        name: "Special!",
        description: "Delicious earth-chicken soup with our special ingredient: Cesstburs eggs! Completely and totally safe, no surprises when ingested.",
        price: 4.99,
        notes: "Advisory: Gus's Galaxy Grill is not responsible for any injuries that may be caused by ingesting Cesstburs eggs.",
        category: "Soup",
        photo: `${special}`
    },
    {
        id: 2,
        name: "Homestyle Tatooine Terrine",
        description: "Hearty mushroom stew with beef, carrots, and portabello mushrooms.",
        price: 3.99,
        notes: "Will add spice on request. Tatooine vaporator mushrooms cost extra.",
        category: "Entree",
        photo: `${tatooineTerrine}`
    },
    {
        id: 3,
        name: "Gagh a la Gus",
        description: "Famous Klingon Gagh by Gus: earth worms fresh from stasis cargo! A taste of your culture, with a twist by Gus.",
        price: 6.99,
        notes: "Completely unreplicated: fresh worms or your money back!",
        category: "Specialty",
        photo: `${gaghalagus}`
    },
    {
        id: 4,
        name: "Ameglian Major Cow",
        description: "You read that right! Straight from the end of the universe comes the delicacy you've heard so much about. It'll take your order itself!",
        price: 39.99,
        notes: "Don't worry, it likes it!",
        category: "Entree",
        photo: `${majorCow}`
    },
    {
        id: 5,
        name: "Yaro Root Salad",
        description: "To those of your watching your waistlines, Gus has prepared a delicious ceaser salad with Yaro Root. Special care has been made to ensure it's ripe this time.",
        price: 7.99,
        notes: "Croutons cost extra.",
        category: "Salad",
        photo: `${yaroRootSalad}`
    },
    {
        id: 6,
        name: "Gus's Blue Noodles",
        description: "Classic 2049 Earth Blue Noodle recipe straight from Los Angeles. Perfect meal after chasing down rouge androids.",
        price: 4.99,
        notes: "Maybe check under your eye for a model number, can never be too careful.",
        category: "Noodles",
        photo: `${blueNoodles}`
    },
    {
        id: 7,
        name: "Nebula Nachos",
        description: "Tri-layered chips infused with ionized cheese and dark matter beans. Slightly gravitational—may pull nearby snacks into orbit.",
        price: 5.99,
        notes: "Do not consume near loose silverware.",
        category: "Appetizer",
        photo: `${nebulaNachos}`
    },
    {
        id: 8,
        name: "Andromeda Fried Rice",
        description: "Classic fried rice with vegetables sourced from three separate galaxies and one suspicious asteroid colony.",
        price: 6.49,
        notes: "Contains trace amounts of stardust.",
        category: "Entree",
        photo: `${andromedaFriedRice}`
    },
    {
        id: 9,
        name: "Quantum Quesadilla",
        description: "Exists in both eaten and uneaten states until observed. Stuffed with cheese that may or may not be there.",
        price: 4.49,
        notes: "Refunds only issued if you prove it never existed.",
        category: "Specialty",
        photo: `${quantumQuesadilla}`
    },
    {
        id: 10,
        name: "Pluto Platter",
        description: "A small but emotionally significant sampler dish. Comes with sliders, fries, and a side of existential crisis.",
        price: 3.99,
        notes: "Still a planet in our hearts.",
        category: "Combo",
        photo: `${plutoPlatter}`
    },
    {
        id: 11,
        name: "Wormhole Wings",
        description: "Spicy chicken wings that teleport directly from fryer to plate. Occasionally arrive before you order them.",
        price: 7.99,
        notes: "If you receive two orders, please report temporal anomaly.",
        category: "Appetizer",
        photo: `${wormholeWings}`
    },
    {
        id: 12,
        name: "Dark Matter Milkshake",
        description: "A thick, mysterious shake that absorbs light and possibly your soul. Chocolate flavor suspected.",
        price: 4.99,
        notes: "Straw may disappear mid-use.",
        category: "Drink",
        photo: `${darkMatterMilkshare}`
    },
    {
        id: 13,
        name: "Cosmic Carbonara",
        description: "Pasta tossed in a creamy sauce harvested from free-range space comets and ethically sourced bacon.",
        price: 8.99,
        notes: "Warning: may cause mild time dilation after consumption.",
        category: "Noodles",
        photo: `${cosmicCarbonara}`
    },
    {
        id: 14,
        name: "Alien Avocado Toast",
        price: 6.99,
        description: "Smashed avocado on multigrain asteroid bread, topped with seeds from a plant that blinked first.",
        notes: "Trendier than it has any right to be.",
        category: "Breakfast",
        photo: `${alienAvocadoToast}`
    },
    {
        id: 15,
        name: "Saturn Ring Calamari",
        description: "Perfectly fried rings with a crisp that rivals Saturn itself. Served with a tangy nebula sauce.",
        price: 7.49,
        notes: "Rings not to scale.",
        category: "Appetizer",
        photo: `${saturnRingCalamari}`
    },
    {
        id: 16,
        name: "Meteor Meatballs",
        description: "Dense, fiery meatballs that crash into your plate with explosive flavor.",
        price: 6.79,
        notes: "Plate may still be hot from impact.",
        category: "Entree",
        photo: `${meteorMeatballs}`
    },//1408x768
    {
        id: 17,
        name: "Galactic Gumbo",
        description: "A rich stew combining flavors from across the universe—spicy, smoky, and slightly sentient.",
        price: 7.99,
        notes: "If it speaks to you, please do not respond.",
        category: "Soup",
        photo: `${galacticGumbo}`
    },
    {
        id: 18,
        name: "Binary Star Burger",
        description: "Two patties orbiting each other in perfect harmony, topped with twin cheeses and solar flare sauce.",
        price: 9.49,
        notes: "May collapse into a black hole if overcooked.",
        category: "Entree",
        photo: `${binaryStarBurger}`
    }
]