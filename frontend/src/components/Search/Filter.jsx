import React from "react";
import Data from "../../data/fakedata/Data.json";
const styles = {
  filter: {
    backgroundColor: "#fbeaab",
  },
};
export default function Filter() {
  const handleClick = (e) => {
    e.preventDefault();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    var temp = [];
    const markedBrand = document.getElementsByName("brand");
    for (let i = 0; i < markedBrand.length; i++) {
      if (markedBrand[i].checked) {
        temp.push(Data.find((index) => index.brand === markedBrand[i].value));
      }
    }
    var temp2 = [];
    const markedColor = document.getElementsByName("color");
    for (let i = 0; i < markedColor.length; i++) {
      if (markedColor[i].checked) {
        temp2.push(Data.find((index) => index.color === markedColor[i].value));
      }
    }
  };
  return (
    <div>
      <div id="filter" className="mr-20 pl-5 pt-5 border">
        <p className="font-bold text-2xl">Price</p>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="checkbox" value="under100" name="price" />
            <label>Under $100</label>
            <br />
            <input type="checkbox" value="100to200" name="price" />
            <label>$100 - $200</label>
            <br />
            <input type="checkbox" value="200to500" name="price" />
            <label>$200 - $500</label>
            <br />
            <input type="checkbox" value="over500" name="price" />
            <label>Over $500</label>
          </div>
          <p className="font-bold text-2xl">Colour</p>
          <div>
            <input type="checkbox" value="black" name="color" />
            <label>Black</label>
            <br />
            <input type="checkbox" value="white" name="color" />
            <label>White</label>
            <br />
            <input type="checkbox" value="red" name="color" />
            <label>Red</label>
            <br />
            <input type="checkbox" value="blue" name="color" />
            <label>Blue</label>
            <br />
            <input type="checkbox" value="green" name="color" />
            <label>Green</label>
            <br />
            <input type="checkbox" value="yellow" name="color" />
            <label>Yellow</label>
            <br />
          </div>
          <p className="font-bold text-2xl">Brand</p>
          <div>
            <input type="checkbox" value="Nike" name="brand" />
            <label>Nike</label>
            <br />
            <input type="checkbox" value="Adidas" name="brand" />
            <label>Adidas</label>
            <br />
            <input type="checkbox" value="Converse" name="brand" />
            <label>Converse</label>
            <br />
            <input type="checkbox" value="Reebok" name="brand" />
            <label>Reebok</label>
            <br />
            <input type="checkbox" value="Vans" name="brand" />
            <label>Vans</label>
            <br />
          </div>
          <p className="font-bold text-2xl">Style</p>
          <div>
            <input type="checkbox" value="sports" name="style" />
            <label>Sports</label>
            <br />
            <input type="checkbox" value="streetwear" name="style" />
            <label>Streetwear</label>
            <br />
            <input type="checkbox" value="work" name="style" />
            <label>Work</label>
            <br />
          </div>
          <div className="mx-auto">
            <button
              type="submit"
              className="font-bold border border-black rounded-md mb-5 mt-5 p-1"
              style={styles.filter}
              onClick={(e) => handleClick(e)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
