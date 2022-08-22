import { View, Text, ScrollView } from "react-native";
import { HbLogo } from "../../components/Logo";
import { MenuItemCard } from "../../components/MenuItemCard";

import { GlobalStyles } from "../../styles/GlobalStyles"

import {style} from "./styles"

export default function MenuPage()
{
    
    return (
        <View style={GlobalStyles.mainContainer} >
            <HbLogo/>
            
            <ScrollView style={style.scrowView} >
                <MenuItemCard 
                    img={'https://assets.unileversolutions.com/recipes-v2/230447.jpg?imwidth=1600'}
                    itemName={'Classic House'} 
                    price={'11.50'} 
                    desc={'Pão, Blend Bovino Artesanal, Queijo, Muzzarela,Ovo, Maionese, Tomate, Alface, Molho Especial'} 
                />

                <MenuItemCard 
                    img={'https://www.sabornamesa.com.br/media/k2/items/cache/b9ad772005653afce4d4bd46c2efe842_XL.jpg'}
                    itemName={'Monstrinho'} 
                    price={'12.00'} 
                    desc={'Pão, Blend Bovino Artesanal, Queijo, Muzzarela,Ovo, Maionese, Tomate, Alface, Molho Especial'} 
                />

                <MenuItemCard 
                    img={'https://www.sabornamesa.com.br/media/k2/items/cache/b9ad772005653afce4d4bd46c2efe842_XL.jpg'}
                    itemName={'Monstrinho'} 
                    price={'12.00'} 
                    desc={'Pão, Blend Bovino Artesanal, Queijo, Muzzarela,Ovo, Maionese, Tomate, Alface, Molho Especial'} 
                />

                <MenuItemCard 
                    img={'https://www.sabornamesa.com.br/media/k2/items/cache/b9ad772005653afce4d4bd46c2efe842_XL.jpg'}
                    itemName={'Monstrinho'} 
                    price={'12.00'} 
                    desc={'Pão, Blend Bovino Artesanal, Queijo, Muzzarela,Ovo, Maionese, Tomate, Alface, Molho Especial'} 
                />

                <MenuItemCard 
                    img={'https://www.sabornamesa.com.br/media/k2/items/cache/b9ad772005653afce4d4bd46c2efe842_XL.jpg'}
                    itemName={'Monstrinho'} 
                    price={'12.00'} 
                    desc={'Pão, Blend Bovino Artesanal, Queijo, Muzzarela,Ovo, Maionese, Tomate, Alface, Molho Especial'} 
                    />

                <MenuItemCard 
                    img={'https://www.sabornamesa.com.br/media/k2/items/cache/b9ad772005653afce4d4bd46c2efe842_XL.jpg'}
                    itemName={'Monstrinho'} 
                    price={'12.00'} 
                    desc={'Pão, Blend Bovino Artesanal, Queijo, Muzzarela,Ovo, Maionese, Tomate, Alface, Molho Especial'} 
                    />

                <MenuItemCard 
                    img={'https://www.sabornamesa.com.br/media/k2/items/cache/b9ad772005653afce4d4bd46c2efe842_XL.jpg'}
                    itemName={'Monstrinho'} 
                    price={'12.00'} 
                    desc={'Pão, Blend Bovino Artesanal, Queijo, Muzzarela,Ovo, Maionese, Tomate, Alface, Molho Especial'} 
                />

            </ScrollView>
        </View>
    )
}