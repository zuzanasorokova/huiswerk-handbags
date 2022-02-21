import React from 'react';
import './App.css';
import Button from "./Button";
import Product from "./Product";
import handyBag from "./assets/bag_1.png"
import stylishBag from "./assets/bag_2.png"
import simpleBag from "./assets/bag_3.png"
import trendyBag from "./assets/bag_4.png"
import ourStory from "./assets/our_story.png"
import brand from "./assets/brand.png"
import Tile from "./Tile";

function App() {
  return (
      <>
          <h1>Handbags & Purses</h1>
      <nav>
          <Button
              buttonName="to the collection"
          />
          <Button
              buttonName="shop all bags"
          />
          <Button
              buttonName="pre-order"
              disabled={true}
          />
      </nav>
          <main>
                <Product
                collection="Best seller"
                image={handyBag}
                name="The handy bag"
                price="€400,-"
                />
              <Product
                  collection="Best seller"
                  image={stylishBag}
                  name="The stylish bag"
                  price="€250,-"
              />
              <Product
                  collection="New collection"
                  image={simpleBag}
                  name="The simple bag"
                  price="€350,-"
              />
              <Product
                  collection="New collection"
                  image={trendyBag}
                  name="The trendy bag"
                  price="€150,-"
              />
          </main>
          <footer>
              <Tile>
                  title="The brand"
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum, enim exepturi, funga pariatur proesentium quia sequi similique sunt."</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum, enim exepturi, funga pariatur proesentium quia sequi similique sunt."</p>
              </Tile>
              <Tile
                  image={brand}
              />
              <Tile
                  image={ourStory}
              />
              <Tile>
                  title="Our story"
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum, enim exepturi, funga pariatur proesentium quia sequi similique sunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum, enim exepturi, funga pariatur proesentium quia sequi similique sunt."</p>
              </Tile>
          </footer>
      </>
  );
}

export default App;



