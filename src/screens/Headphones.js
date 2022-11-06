import { Image, ScrollView,View } from "react-native";
import React from "react";
import Text from "../components/text/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, Spacing } from "../theme";
import Footer from "../components/Footer";
import BannerTitle from "../components/BannerTitle";
import Button from "../components/Button";
import { useSelector } from "react-redux";


export default function electronics({ navigation, route }) {
    const headphones = useSelector(selectHeadphones)
    const onPressProduct = (id) => {
        navigation.navigate('ProductDetails', {id: id})
    }
  return (
      <SafeAreaView>
          <ScrollView>
              <BannerTitle />
              <CategoryTitle title="electronics" />

              <View style={{ margin: Spacing[5] }}>
              {
                        headphones.map(headphone => {
                            return (
                                <View key={headphone.name} style={{ marginBottom: 60 }}>
                                  <View
                                      style={{
                                          backgroundColor: colors.grey,
                                          borderRadius: 16,
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          paddingVertical: Spacing[5],
                                      }}
                                  >
                                      <Image source={headphone.featuredImage.source} />
                                    </View>

                                    <View style={{ marginTop: spacing[5] }}>
                                        <Text preset="h4" centered>
                                            {headphone.name}
                                        </Text>
                                        <Text preset="h4" centered uppercase>
                                            headphones
                                        </Text>
                                      <Text
                                          textColor="#919191"
                                          centered
                                          style={{
                                              marginTop: Spacing[5],
                                              marginHorizontal: Spacing[7],
                                          }}
                                      >
                                        {headphone.description}
                                        </Text>
                                    </View>

                                    <Button
                                        style={{ alignSelf: 'center', marginTop: spacing[5] }}
                                        title="SEE PRODUCT"
                                        onPress={() => onPressProduct(headphone.id)}
                                    />
                            
                              </View>
                          )
                      })
                  }

                  <Footer />
              </View>
          </ScrollView>
      </SafeAreaView>
  )
}