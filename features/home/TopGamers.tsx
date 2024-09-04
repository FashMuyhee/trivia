import React from 'react';
import {Flex, Text} from '@/components';
import {useTheme} from '@shopify/restyle';
import {Theme} from '@/config';
import {Dimensions, Image, ImageSourcePropType} from 'react-native';

type GamerProps = {
  name: string;
  avatar: ImageSourcePropType;
  bg: string;
};

const Gamer = ({avatar, name, bg}: GamerProps) => (
  <Flex alignItems="center" height={105} justifyContent="center" rowGap="xs">
    <Flex style={{backgroundColor: bg}} height={50} width={50} borderRadius={30} alignItems="center" justifyContent="center">
      <Image style={{height: '80%', width: '80%', borderRadius: 30}} source={avatar} />
    </Flex>
    <Text fontFamily="bold" textTransform="capitalize">
      {name}
    </Text>
    <Text fontFamily="bold" color="bluePrimary">
      ₦
      <Text variant="small" color="bluePrimary">
        5,000
      </Text>
    </Text>
  </Flex>
);

const gamers = [
  {name: 'joe', bg: '#f2f2f2', avatar: require('@/assets/images/users/2.png')},
  {name: 'sarah', bg: '#AFF0FF', avatar: require('@/assets/images/users/3.png')},
  {name: 'hanax', bg: '#C4FBD2', avatar: require('@/assets/images/users/4.png')},
  {name: 'inioluwa', bg: '#ffcbd2', avatar: require('@/assets/images/users/5.png')},
  {name: 'liz', bg: '#fff7c5', avatar: require('@/assets/images/users/6.png')},
];
export const TopGamers = () => {
  const {spacing} = useTheme<Theme>();
  const {width, height} = Dimensions.get('screen');

  const w = width - spacing.l * 2;
  const h1 = height * 0.35;
  const p = h1 * 0.3;
  const mt = 230 - p;
  
  return (
    <Flex width={w} alignSelf="center" borderRadius={spacing.m} justifyContent="center" style={{marginTop: mt + 20}}>
      <Text fontFamily="bold" fontSize={16}>
        Top Gamers of the Day
      </Text>
      <Flex justifyContent="space-between" mt="m" alignItems="center" flexDirection="row">
        {gamers.map((gamer, index) => (
          <Gamer {...gamer} key={`gamer_${index}${gamer.name}`} />
        ))}
      </Flex>
    </Flex>
  );
};
