import Item1 from "../layout/images/tshirt.jpg";
import Item2 from "../layout/images/tshirt.jpg";
import Item3 from "../layout/images/button.jpg";
import Item4 from "../layout/images/button.jpg";
import Item5 from "../layout/images/button.jpg";
import Item6 from "../layout/images/button.jpg";

const initState = {
    items: [
        {
            id: 1,
            title: "Classic Screen printed Shirt",
            desc: "Show your support with the Classic Screen Printed",
            price: "$20",
            img: Item1
        },
        {
            id: 2,
            title: "New Logo T-Shirt",
            desc: "A high quality T-shirt showing our new logo.",
            price: "$15",
            img: Item2
        },
        {
            id: 3,
            title: "Character Button",
            desc: "Character Button.",
            price: "$2",
            img: Item3
        },
        {
            id: 4,
            title: "Character Button",
            desc: "Character Button.",
            price: "$2",
            img: Item4
        },
        {
            id: 5,
            title: "Character Button",
            desc: "Character Button.",
            price: "$2",
            img: Item5
        },
        {
            id: 6,
            title: "Character Button",
            desc: "Character Button.",
            price: "$2",
            img: Item6
        }
    ],

    addedItems: [],
    total: 0
};

const cartReducer = (state = initState, action) => {
    return state;
};

export default cartReducer;
