import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { HbLogo } from "../../components/Logo";
import { Colors, GlobalStyles } from "../../styles/GlobalStyles";
import { styles } from "./style";
import { useEffect, useState } from "react";

import { API } from "../../services/ApiRequest";

import { PromotionCard } from "../../components/PromotionCard";

export default function PromotionPage()
{
    const [loadingItems, setLoadingItems] = useState(true);
    const [promotions, setPromotions] = useState([]);

    async function getPromotions()
    {
        setLoadingItems(true);
        const response = await API.get("houseburguer/api/promotion/get");
        setPromotions(response.data.promotions);
        setLoadingItems(false);

    }

    useEffect(()=>{ getPromotions()}, []);

    return (
        <View style={GlobalStyles.mainContainer}>
            <HbLogo/>
            {
                loadingItems ? <ActivityIndicator color={Colors.primary} size="large"/> :

                <ScrollView style={styles.scrowView} horizontal={true} >
                {
                    promotions.map((item)=>
                    {
                        return <PromotionCard 
                                key={item._id} 
                                imageURI={item.referenceImageUrl} 
                                itemName={item.promotionName} 
                                />
                    })
                }
                </ScrollView>
            }
            

        </View>
    )
}