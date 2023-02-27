import React from "react";
// import Productlists from "../../Components/productlists";
import Productlists from "../../Components/Productlists";
import Product1 from "../../assist/Images/ProductList1.png";
import Product2 from "../../assist/Images/ProductList2.png";
import Product3 from "../../assist/Images/ProductList3.png";
import Product4 from "../../assist/Images/ProductList4.png";
import Product5 from "../../assist/Images/ProductList5.png";
import Product6 from "../../assist/Images/ProductList6.png";
import Product7 from "../../assist/Images/ProductList7.png";
import Product8 from "../../assist/Images/ProductList8.png";
const Product = () => {
  const dataObj = [
    {
      name: "Medicine",
      title: "Hosp",
      img: Product1,
    },
    {
      name: "Cash",
      title: "bank",
      img: Product2,
    },
    {
      name: "Project",
      title: "Category",
      img: Product3,
    },

    {
      name: "Project",
      title: "Category",
      img: Product4,
    },
    {
      name: "Project",
      title: "Category",
      img: Product5,
    },
    {
      name: "Project",
      title: "Category",
      img: Product6,
    },
    {
      name: "Project",
      title: "Category",
      img: Product7,
    },

    {
      name: "Project",
      title: "Category",
      img: Product8,
    },
  ];
  return (
    <div className="container flex flex-wrap justify-center gap-5">
      {dataObj.map((item) => (
        <Productlists data={item} />
      ))}
    </div>
  );
};

export default Product;
