import {Question} from './type';

export const numberToAlpha = (number: number) => {
  return String.fromCharCode(number + 96);
};

export const cleanString = (encodedString: string) => {
  let decodedString = decodeURIComponent(encodedString);

  const cleanedString = decodedString.trim();

  return cleanedString;
};

export const demoQuestion: Question[] = [
  {
    type: 'multiple',
    difficulty: 'easy',
    category: 'Entertainment%3A%20Cartoon%20%26%20Animations',
    question: 'Which%20of%20these%20is%20NOT%20a%20Disney%20cartoon%20character%3F',
    correct_answer: 'Daffy%20Duck',
    incorrect_answers: ['Donald%20Duck', 'Daisy%20Duck', 'Scrooge%20McDuck'],
  },
  {
    type: 'multiple',
    difficulty: 'easy',
    category: 'Entertainment%3A%20Cartoon%20%26%20Animations',
    question:
      'Who%20is%20the%20only%20voice%20actor%20to%20have%20a%20speaking%20part%20in%20all%20of%20the%20Disney%20Pixar%20feature%20films%3F%20',
    correct_answer: 'John%20Ratzenberger',
    incorrect_answers: ['Tom%20Hanks', 'Dave%20Foley', 'Geoffrey%20Rush'],
  },
  {
    type: 'multiple',
    difficulty: 'easy',
    category: 'Entertainment%3A%20Cartoon%20%26%20Animations',
    question: 'In%20the%20show%20%22Steven%20Universe%22%2C%20who%20are%20the%20main%20two%20employees%20of%20The%20Big%20Donut%3F',
    correct_answer: 'Sadie%20and%20Lars',
    incorrect_answers: ['Steven%20and%20James', 'Erik%20and%20Julie', 'Bob%20and%20May'],
  },
  {
    type: 'multiple',
    difficulty: 'easy',
    category: 'Entertainment%3A%20Cartoon%20%26%20Animations',
    question:
      'In%20the%20show%20%22Foster%27s%20Home%20For%20Imaginary%20Friends%22%2C%20which%20character%20had%20an%20obsession%20with%20basketball%3F',
    correct_answer: 'Wilt',
    incorrect_answers: ['Coco', 'Mac', 'Cheese'],
  },
  {
    type: 'multiple',
    difficulty: 'easy',
    category: 'Entertainment%3A%20Cartoon%20%26%20Animations',
    question: 'Who%20created%20the%20Cartoon%20Network%20series%20%22Regular%20Show%22%3F',
    correct_answer: 'J.%20G.%20Quintel',
    incorrect_answers: ['Ben%20Bocquelet', 'Pendleton%20Ward', 'Rebecca%20Sugar'],
  },
  {
    type: 'multiple',
    difficulty: 'easy',
    category: 'Entertainment%3A%20Cartoon%20%26%20Animations',
    question:
      'In%20the%201993%20Disney%20animated%20series%20%22Bonkers%22%2C%20what%20is%20the%20name%20of%20Bonker%27s%20second%20partner%3F',
    correct_answer: 'Miranda%20Wright',
    incorrect_answers: ['Dick%20Tracy', 'Eddie%20Valiant', 'Dr.%20Ludwig%20von%20Drake'],
  },
  {
    type: 'multiple',
    difficulty: 'easy',
    category: 'Entertainment%3A%20Cartoon%20%26%20Animations',
    question: 'What%20is%20Everest%27s%20favorite%20food%20in%20the%20Nickelodeon%2FNick%20Jr.%20series%20%22PAW%20Patrol%22%3F',
    correct_answer: 'Liver',
    incorrect_answers: ['Chicken', 'Steak', 'Caribou'],
  },
  {
    type: 'multiple',
    difficulty: 'easy',
    category: 'Entertainment%3A%20Cartoon%20%26%20Animations',
    question: 'What%20was%20the%20first%20Disney%20movie%20to%20use%20CGI%3F',
    correct_answer: 'The%20Black%20Cauldron',
    incorrect_answers: ['Tron', 'Toy%20Story', 'Fantasia'],
  },
  {
    type: 'multiple',
    difficulty: 'easy',
    category: 'Entertainment%3A%20Cartoon%20%26%20Animations',
    question: 'Who%20voices%20for%20Ruby%20in%20the%20animated%20series%20RWBY%3F',
    correct_answer: 'Lindsay%20Jones',
    incorrect_answers: ['Tara%20Strong', 'Jessica%20Nigri', 'Hayden%20Panettiere'],
  },
  {
    type: 'multiple',
    difficulty: 'easy',
    category: 'Entertainment%3A%20Cartoon%20%26%20Animations',
    question:
      'Butters%20Stotch%2C%20Pip%20Pirrup%2C%20and%20Wendy%20Testaburger%20are%20all%20characters%20in%20which%20long%20running%20animated%20TV%20series%3F',
    correct_answer: 'South%20Park',
    incorrect_answers: ['The%20Simpsons', 'Family%20Guy', 'Bob%27s%20Burgers'],
  },
];
