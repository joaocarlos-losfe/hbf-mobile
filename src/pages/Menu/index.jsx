import { useEffect, useState } from "react";
import { View, ScrollView, ActivityIndicator } from "react-native";
import { HbLogo } from "../../components/Logo";
import { MenuItemCard } from "../../components/MenuItemCard";

import { Colors, GlobalStyles } from "../../styles/GlobalStyles"

import {style} from "./styles"
import { API } from "../../services/ApiRequest";

export default function MenuPage()
{
    const [ loadingItems, setLoadingItems ] = useState(false);
    const [items, setItems] = useState([]);

    async function apiItemsRequest()
    {
        setLoadingItems(true);
        
        const response = await API.get("houseburguer/api/menu/get");

        setItems(response.data.item);
        
        setLoadingItems(false);
    }

    useEffect( ()=> { apiItemsRequest() }, []);

    return (
        <View style={GlobalStyles.mainContainer} >
            <HbLogo/>
            
            <ScrollView style={style.scrowView} >
            {
                loadingItems ? 
                <ActivityIndicator size="large" color={Colors.primary}/> 
                :
                items.map((item)=>
                {
                    return <MenuItemCard 
                    key={item._id}
                    img={item.referenceImageUrl}
                    itemName={item.itemName} 
                    price={item.price} 
                    desc={item.description} />
                })
            }
            </ScrollView>
        </View>
    )
}