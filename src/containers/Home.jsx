import React from "react";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import Carouselitem from "../components/Carouselitem";
import useInitialState from "../hooks/useInitialState";
import { connect } from "react-redux";
import "../assets/styles/App.scss";

const Home = ({ myList, trends, originals }) => {
  return (
    <>
      <Search />
      {myList.length > 0 && (
        <Categories categoryTitle="Mi Lista" title="Mi lista">
          <Carousel>
            {myList.map((item) => (
              <Carouselitem key={item.id} {...item} 
                isList
              />
            ))}
          </Carousel>
        </Categories>
      )}
      {trends.length > 0 && (
        <Categories categoryTitle="Trends" title="Tendencias">
          <Carousel>
            {trends.map((item) => (
              <Carouselitem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}
      {originals.length > 0 && (
        <Categories
          categoryTitle="Originales"
          title="Originales de PlatziVideo"
        >
          <Carousel>
            {originals.map((item) => (
              <Carouselitem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    //traer los elementos que necesito para el llamado inicial
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};
//connect(mapeo de props,map de las acciones)
export default connect(mapStateToProps, null)(Home);
