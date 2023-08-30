/* eslint-disable react/prop-types */
import { Card, Badge } from "antd";
import { useState } from "react";
const { Meta } = Card;

const MenuItems = ({ item, addToCart }) => {
    const [show] = useState(true);
  return (
    <div>
      <Card
        className="menuItems"
        hoverable
        style={{
          width: 240,
        }}
        cover={<img className="menuImage" alt={item.name} src={item.image} />}
      >
        <Meta title={item.name} price={item.price} />
        <li>
          <div>
            Ghs {item.price} - {item.category}
          </div>
          <div className="display_badge_and_btn">
            <div>
              <Badge count={show ? `${item.number}` : 0} />
            </div>
            <div>
              <button onClick={() => addToCart(item)}>Add to cart</button>
            </div>
          </div>
        </li>
      </Card>
    </div>
  );
};

export default MenuItems
