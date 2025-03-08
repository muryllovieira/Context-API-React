import { View, Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamlist } from "../../App";
import { useContext } from 'react';
import { UserContext } from "../contexts/userContext";

type UserScreenProps = {
    route: RouteProp<RootStackParamlist, 'User'>
}

export default function UserScreen( { route} : UserScreenProps ){
    
    const { username } = route.params;
    
    const UserContextValue = useContext(UserContext)
    const nameDinamico = UserContextValue?.loginName || 'Nenhum Nome Salvo'
    const nameEstatico = UserContextValue?.nome || 'Nenhum Nome Salvo'

    return (
        <View>
            <Text style={{fontSize: 32}}>NOME DA ROTA: {username}</Text>
            <Text style={{fontSize: 32}}>NOME ESTATICO: {nameEstatico}</Text>
            <Text style={{fontSize: 32}}>NOME DIMANICO: {nameDinamico}</Text>
        </View>
    )
}
