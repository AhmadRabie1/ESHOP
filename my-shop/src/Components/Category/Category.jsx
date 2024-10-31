import React from "react";
import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/watch.png";
import Image3 from "../../assets/category/macbook.png";
import Button from "../Shared/Button";

const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:placeholder:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl">
                <div>
                    <div>
                        <p>Enjoy</p>
                        <p>With</p>
                        <p>Earphone</p>
                        <Button text="Browse" textColor={"text-white"} bgColor={"bg-primary"}/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
