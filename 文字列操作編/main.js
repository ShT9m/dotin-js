'use strict';

{
  const emails = [
    `taro@example.com`,
    `jiro@example.com`,
    `saburo@example.com`,
  ];

  emails.forEach((email) => {
    // if(email.includes('taro') === true){
    //   console.log(email);
    // }
    // if(email.indexOf('taro') === 0){
    //   console.log(email);
    // }
    if(email.startsWith('taro') === true){
      console.log(email);
    }
  })
  // const string = prompt('Name?');
    // if(string.toLowerCase().trim() === 'taro'){
    //   console.log('Correct')
    // }else{
    //   console.log('Wrong');
    // }
  // console.log(string);
  // console.log(string.length);
  // console.log(string[0]);
}