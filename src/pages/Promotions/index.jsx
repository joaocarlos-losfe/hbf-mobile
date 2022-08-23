import { View, Text, ScrollView } from "react-native";
import { HbLogo } from "../../components/Logo";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { styles } from "./style";

import { PromotionCard } from "../../components/PromotionCard";

export default function PromotionPage()
{
    return (
        <View style={GlobalStyles.mainContainer}>
            <HbLogo/>

            <ScrollView style={styles.scrowView} horizontal={true} >
                <PromotionCard imageURI={'https://www.designi.com.br/images/preview/10024778.jpg'}/>
                <PromotionCard imageURI={'https://www.designi.com.br/images/preview/10030520.jpg'} />
                <PromotionCard imageURI={'https://res.cloudinary.com/trakto/image/upload/w_1587,c_scale/v1644940746/thumbnail/tdk04ueahfiddgethssp.png'} />
                <PromotionCard imageURI={'https://img.elo7.com.br/product/zoom/3E3E50D/artes-para-post-de-rede-social-hamburguer-story.jpg'} />
                <PromotionCard imageURI={'https://www.designi.com.br/images/preview/10024778.jpg'}/>
                <PromotionCard imageURI={'https://www.designi.com.br/images/preview/10030520.jpg'} />
                <PromotionCard imageURI={'https://www.designi.com.br/images/preview/10024778.jpg'}/>
                <PromotionCard imageURI={'https://www.designi.com.br/images/preview/10030520.jpg'} />
                <PromotionCard imageURI={'https://www.designi.com.br/images/preview/10024778.jpg'}/>
                <PromotionCard imageURI={'https://www.designi.com.br/images/preview/10030520.jpg'} />
                <PromotionCard imageURI={'https://www.designi.com.br/images/preview/10024778.jpg'}/>
                <PromotionCard imageURI={'https://www.designi.com.br/images/preview/10030520.jpg'} />
                <PromotionCard imageURI={'https://www.designi.com.br/images/preview/10024778.jpg'}/>
                <PromotionCard imageURI={'https://www.designi.com.br/images/preview/10030520.jpg'} />
                <PromotionCard imageURI={'https://www.designi.com.br/images/preview/10024778.jpg'}/>
                <PromotionCard imageURI={'https://www.designi.com.br/images/preview/10030520.jpg'} />
                <PromotionCard imageURI={'https://www.designi.com.br/images/preview/10024778.jpg'}/>
                <PromotionCard imageURI={'https://www.designi.com.br/images/preview/10030520.jpg'} />
            </ScrollView>

        </View>
    )
}