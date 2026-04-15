import {MenuItem as ListItem} from "@headlessui/react"

const DropdownItem = ({item, setFilter} : {item: string, setFilter: (text: string)=> void}) => {
    return (
        <ListItem>
            <a onClick={() => setFilter(item)}
                href="#"
                className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
            >
                {item}
            </a>
        </ListItem>
    );
};

export default DropdownItem;