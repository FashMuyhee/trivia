import {CancelIcon, CheckIcon, Flex, Text} from '@/components';
import React from 'react';
import {cleanString, numberToAlpha} from '../utils';
import {TouchableNativeFeedback} from 'react-native';

type Props = {
  correctAnswer: string;
  incorrectAnswers: string[];
};

type OptionProps = {
  index: number;
  option: string;
  ans: string;
  userChoice: string;
  onSelect: (s: string) => void;
};

const Option = ({index, option, ans, onSelect, userChoice}: OptionProps) => {
  const onSelectOption = () => {
    onSelect(option);
  };

  const isCorrect = ans === userChoice;
  const thisOption = userChoice === option;

  const borderColor = React.useMemo(() => {
    if (thisOption) {
      if (isCorrect) return 'glowGreen';
      return 'errorSecondary';
    }
  }, [thisOption, isCorrect]);

  const bgColor = React.useMemo(() => {
    if (thisOption) {
      if (isCorrect) return 'darkGreen';
      return 'errorPrimary';
    }
    return 'white';
  }, [thisOption, isCorrect]);

  const textColor = thisOption ? 'white' : 'black';

  const renderIcon = React.useMemo(() => {
    if (thisOption) {
      if (isCorrect) {
        return <CheckIcon />;
      }

      return <CancelIcon />;
    }
  }, [thisOption, isCorrect]);

  return (
    <TouchableNativeFeedback onPress={onSelectOption}>
      <Flex
        style={{paddingHorizontal: '10%'}}
        bg={bgColor}
        borderRadius={100}
        borderColor={borderColor}
        borderWidth={thisOption ? 4 : 0}
        height={thisOption ? 70 : 66}
        flexDirection="row"
        alignItems="center"
        columnGap="s"
        mt="m"
        width="100%">
        <Text color={textColor} fontSize={16}>
          {numberToAlpha(index).toUpperCase()}.
        </Text>
        <Text style={{flex: 1}} color={textColor} fontSize={16}>
          {cleanString(option)}
        </Text>
        {renderIcon}
      </Flex>
    </TouchableNativeFeedback>
  );
};
export const Options = ({correctAnswer, incorrectAnswers}: Props) => {
  const options = [...incorrectAnswers, correctAnswer];
  const [choice, setChoice] = React.useState('');
  return (
    <Flex mt="l" width="100%">
      <Text fontSize={18} color="white" fontFamily="medium">
        Choose Correct Option
      </Text>
      {options.map((option, index) => {
        return (
          <Option onSelect={setChoice} ans={correctAnswer} userChoice={choice} key={`option_#${index}`} index={index + 1} option={option} />
        );
      })}
    </Flex>
  );
};
