import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import styles from './styles';


import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import { RectButton } from 'react-native-gesture-handler';

function TeacherItem(){
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.profile}>
                    <Image 
                        style={styles.avatar}
                        source={{uri: 'https://avatars1.githubusercontent.com/u/55189996?s=460&u=1a484ecee8d9625c54944a9953a4557677655de9&v=4'}}
                    />

                    <View style={styles.profileInfo}>
                        <Text style={styles.name}>Guilherme Marques</Text>
                        <Text style={styles.subject}>Química</Text>
                    </View>
                </View>

                <Text style={styles.bio}>
                Entusiasta das melhores tecnologias de química avançada.
                {'\n'}{'\n'}
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
                </Text>

                <View style={styles.footer}>
                    <Text style={styles.price}>
                        Preço/hora {'   '}
                        <Text style={styles.priceValue}>R$ 20.00</Text>
                    </Text>

                    <View style={styles.buttonsContainer}>
                        <RectButton style={[styles.favoriteButton, styles.favorited]}>
                            {/* <Image source={heartOutlineIcon} /> */}
                            <Image source={unFavoriteIcon} />
                        </RectButton>

                        <RectButton style={styles.contactButton}>
                            <Image source={whatsappIcon} />
                            <Text style={styles.contactButtonText}>Entrar em contato</Text>
                        </RectButton>

                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default TeacherItem;