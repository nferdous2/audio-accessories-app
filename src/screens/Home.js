import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect } from "react";
import Text from "../components/text/Text";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  // selectFeaturedProducts,
  selectStatus,
} from "../store/productSlice";
import BannerTitle from "../components/BannerTitle";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../theme";
import { Spacing } from "../theme/Spacing";
import { AntDesign } from "@expo/vector-icons";
import Button from "../components/Button";

//category
const CategoryBox = ({ title, image, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        marginVertical: Spacing[8],
        marginHorizontal: Spacing[5],
        borderRadius: Spacing[4],
        backgroundColor: colors.grey,
        alignItems: "center",
        padding: Spacing[5],
      }}
    >
      <Image style={{ top: -60 }} source={image} />

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          top: -30,
        }}
      >
        <Text style={{ fontSize: 16 }}>{title}</Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: Spacing[4],
          }}
        >
          <Text
            preset="subtitle"
            textColor="#7c7c7c"
            centered
            style={{ marginRight: Spacing[3] }}
          >
            SHOP
          </Text>
          <AntDesign name="right" color={colors.primary} size={14} />
        </View>
      </View>
    </Pressable>
  );
};

//

const FeaturedProduct = ({ name, category, image }) => {
  const windowWidth = useWindowDimensions().width;

  return (
    <View
      style={{
        marginVertical: Spacing[5],
        backgroundColor: colors.primary,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
    {/* //orange box > outer circle */}
      <View
        style={{
          borderWidth: 1,
          borderColor: "#d8d8d8",
          borderRadius: 400,
          height: 320,
          width: windowWidth - 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
          {/* //orange box > outer circle>inner circle */}

        <View
          style={{
            borderWidth: 1,
            borderColor: "#d8d8d8",
            borderRadius: 400,
            height: 280,
            width: windowWidth - 80,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ height: 172, width: 188 }}
            resizeMode="contain"
            source={require("../../assets/images/home-banner.png")}
          />
        </View>
      </View>
      <View style={{ paddingBottom: Spacing[8], marginTop: -Spacing[6] }}>
        <Text preset="h3" centered uppercase white>
          {name}
        </Text>
        <Text preset="h3" centered uppercase white>
          {category}
        </Text>
        <Text centered style={{ width: 250, marginTop: Spacing[4] }} white>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </Text>
        <Button title="title" style={{
         backgroundColor:colors.black,
           alignSelf:"center",
           margnTop:14
         }}>
         </Button>
      </View>
    </View>
  );
};

export default function Home({navigation}) {
  //for setting width and height for all screen
  const { width, height } = useWindowDimensions();

  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  // console.log("Status", status);

  //featured products by mappping

  // const featuredProducts  = useSelector(selectFeaturedProducts);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, []);

  if (status === "loading") {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <BannerTitle />
        {/* for background */}

        <View style={{ backgroundColor: colors.black }}>
          <Image
            style={{ alignSelf: "center", width: "100%" }}
            resizeMode="cover"
            source={require("../../assets/images/home-banner.png")}
          />

          <View style={{ position: "absolute", width: "100%", top: 200 }}>
            <Text centered white style={{ fontSize: 40 }}>
              WELCOME
            </Text>

            <Text
              centered
              style={{
                width: width - 20,
                marginTop: Spacing[4],
                alignSelf: "center",
              }}
              white
            >
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </Text>
          </View>
        </View>

        {/* 2nd part of home screen */}

        <View style={{ paddingTop: 40 }}>
          <CategoryBox
             title="Headphones" 
            image={require("../../assets/images/home-headphone.png")}
            onPress={() => {
              navigation.navigate("Headphones");
            }}
          />

          <CategoryBox
            title="Speakers"
            image={require("../../assets/images/home-speaker.png")}
            onPress={() => {
              navigation.navigate("Speakers");
            }}
          />

          <CategoryBox
            title="Earphones"
            image={require("../../assets/images/home-earphone.png")}
            onPress={() => {
              navigation.navigate("Earphones");
            }}
          />
        </View>
      
      {/* 3rd part */}

        <View
          style={{
            paddingVertical: Spacing[6],
            paddingHorizontal: Spacing[5],
          }}
        >
          <Text preset="h3" centered>
            FEATURED
          </Text>
          <Text preset="h3" centered>
            PRODUCTS
          </Text>

          <FeaturedProduct
            title="Speakers"
            image={require("../../assets/images/home-speaker.png")}
            onPress={() => {
              navigation.navigate("Speakers");
            }}
          />

          {/* { featuredProducts.map(product => {
                            const {name, category, image} = product;
                            return (
                                <FeaturedProduct 
                                    key={name}
                                    name={name}
                                    category={category}
                                    image={image}
                                />
                            )
                        })
                    }  */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
