import React, { useEffect, useRef } from "react";
import { View, Dimensions, FlatList, Animated, StyleSheet } from "react-native";
import CarouselItem from "./CarouselItem";

const { width, height } = Dimensions.get("window");

const data = [
  {
    id: "1",
    url: "https://kellysthoughtsonthings.com/wp-content/uploads/2018/07/4-Simple-Tips-for-Your-Wedding-Preparation.jpg",
    title: "Event management",
    description: "Get the best event management services!",
  },
  {
    id: "2",
    url: "https://rescuemytimecleaningservice.com/wp-content/uploads/2019/11/cleaning-person.jpeg",
    title: "Cleaning services",
    description: "Clean your home with the best cleaning services!",
  },
  {
    id: "3",
    url: "https://www.forbes.com/advisor/wp-content/uploads/2021/06/featured-image-backyard-landscaping.jpeg",
    title: "Landscaping services",
    description: "Get your place how you want it to be!",
  },
  {
    id: "4",
    url: "https://www.dumpsters.com/images/blog/carpentry_1530018525/carpentry-1200x600.jpg",
    title: "Carpentry services",
    description: "Get the best carpentry services possible!",
  },
  {
    id: "5",
    url: "https://5.imimg.com/data5/YX/KV/MY-53240397/painting-services-500x500.jpg",
    title: "Paint services",
    description: "Get your place painted how you imagined!",
  },
  {
    id: "6",
    url: "https://www.zonehomesolutions.com/wp-content/uploads/2019/11/average-pest-control-cost-1.jpg",
    title: "Pest control services",
    description: "Get rid of bugs and be clean with our pest control services!",
  },
  {
    id: "7",
    url: "https://metropha.com/wp-content/uploads/2017/06/Why-is-Plumbing-Important-Plumbing-Services-You-Should-Know-Of.jpg",
    title: "MEP services",
    description: "Get your place fixed with the best MEP services!",
  },
];

const Carousel = () => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        scrollEventThrottle={16}
        decelerationRate="fast"
        renderItem={({ item }) => {
          return <CarouselItem item={item} />;
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {}
        )}
      />
      <View style={styles.dotView}>
        {data.map((_, i) => {
          let opacity = position.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={i}
              style={{
                opacity,
                height: 8,
                width: 8,
                backgroundColor: "#014b78",
                margin: 3,
                borderRadius: 5,
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  dotView: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
