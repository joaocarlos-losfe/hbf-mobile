import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomePage from './Home';
import MenuPage from './Menu';
import PromotionPage from './Promotions';
import  DrawPage  from './Draw';

const Tab = createBottomTabNavigator();

const home = "Informação";
const menu = "Cardápio";
const promotion = "Promoções";
const draw = "Sorteio";

export default function MainPageNavigator()
{
    return(
        <NavigationContainer theme={DarkTheme} >

            <Tab.Navigator initialRouteName={home}  
            
            screenOptions={({route})=>({
                tabBarIcon: ({focused, color, size}) =>{
                    let iconName;
                    let rn = route.name;
                    if (rn == home)
                        iconName = focused ? 'home' : 'home-outline'
                    else if(rn == menu)
                        iconName = focused ? 'food' : 'food-outline'
                    else if(rn == promotion)
                        iconName = focused ? 'star-four-points': 'star-four-points-outline'
                    else if (rn == draw)
                        iconName = focused ? 'gift' : 'gift-outline';
                    
                    return <MaterialCommunityIcons name={iconName} size={size} color={color}/>
                },
                
                tabBarActiveTintColor:'#ee2f2b', 
                tabBarInactiveTintColor: 'gray', 
                headerShown: false,
                tabBarLabelStyle: {fontSize: 12},
                tabBarStyle: {height: 60},
                tabBarItemStyle: {margin: 5}
            })}
            >
                <Tab.Screen name={home} component={HomePage}/>

                <Tab.Screen name={menu} component={MenuPage}/>

                <Tab.Screen name={promotion} component={PromotionPage}/>

                <Tab.Screen name={draw} component={DrawPage}/>

            </Tab.Navigator>
        </NavigationContainer>
    )
}