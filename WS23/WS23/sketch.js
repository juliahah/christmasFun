let fonts = ['Fantasy', 'Brush Script MT', 'Courier New', 'Verdana', 'Times New Roman'];//list of fonts to be changed
let selectedRow = 0; // Variable to keep track of the currently selected row
let selectedWord= -1; //Variable to keep track of the currently selected word index in a row

let row_fonts = [
  ['Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace'],
  ['Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace'],
  ['Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace'],
  ['Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace'],
  ['Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace'],
  ['Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace', 'Monospace']
]; //list of fonts to be applied at start


let currentImage;
var fade;
var fadeAmount = 1;
var fadeTracker = 0; 
var fadeParagraph = 255;
var fadeParagraphTracker = 0;

let selectAllRows = false;
let synonymIndex = -1;

//text
let row1 = ['A', 'young', 'Peter,', 'ignoring', 'his', 'grandfather\'s', 'warning,', 'goes', 'hunting', 'for', 'the', 'hungry', 'wolf', 'that', 'has', 'been', 'prowling', 'in', 'the', 'meadows.'];
let row2 = ['This', 'with', 'the', 'help', 'of', 'his', 'friends', 'Sasha', 'the', 'Songbird,', 'Sonia', 'the', 'Duck,', 'and', 'Ivan', 'the', 'Cat.'];
let row3 = ['Through', 'quick', 'thinking,', 'they', 'trick', 'the', 'wolf.'];
let row4 = ['The', 'wolf', 'is', 'taken', 'down', 'and', 'roped', 'up,', 'Peter', 'rejoices.'];
let row5 = ['But', 'he', 'was', 'mistaken.', 'The', 'wolf', 'escapes', 'and', 'swallows', 'his', 'friend,', 'Sonia', 'the', 'duck,', 'whole.'];
let row6 = ['His', 'grandfather', 'was', 'right', 'all', 'along.'];

// Create lists for synonyms of words in row1
let row1_item0 = ['A', 'A', 'A', 'A', 'A'];
let row1_item1 = ['AHHHHHV', 'junior', 'adolescent', 'juvenile', 'young'];
let row1_item2 = ['Peter', 'Peter', 'Peter', 'Peter', 'Peter'];
let row1_item3 = ['disregarding', 'neglecting', 'dismissing', 'overlooking', 'disregarding'];
let row1_item4 = ['his', 'his', 'his', 'his', 'his'];
let row1_item5 = ['grandpa\'s', 'ancestor\'s', 'forefather\'s', 'elder\'s', 'grandpa\'s'];
let row1_item6 = ['warning', 'warning', 'warning', 'warning', 'warning'];
let row1_item7 = ['goes', 'moves', 'travels', 'proceeds', 'goes'];
let row1_item8 = ['hunting', 'searching', 'pursuing', 'chasing', 'hunting'];
let row1_item9 = ['for', 'for', 'for', 'for', 'for'];
let row1_item10 = ['the', 'the', 'the', 'the', 'the'];
let row1_item11 = ['hungry', 'hungry', 'hungry', 'hungry', 'hungry'];
let row1_item12 = ['wolf', 'beast', 'creature', 'predator', 'wolf'];
let row1_item13 = ['that', 'that', 'that', 'that', 'that'];
let row1_item14 = ['has', 'possesses', 'holds', 'owns', 'has'];
let row1_item15 = ['been', 'been', 'been', 'been', 'been'];
let row1_item16 = ['prowling', 'lurking', 'stalking', 'roaming', 'prowling'];
let row1_item17 = ['in', 'in', 'in', 'in', 'in'];
let row1_item18 = ['the', 'the', 'the', 'the', 'the'];
let row1_item19 = ['meadows', 'meadows', 'meadows', 'meadows', 'meadows'];
let row1_item20 = ['.', '.', '.', '.', '.'];

// Create lists for synonyms of words in row2
let row2_item0 = ['This', 'This', 'This', 'This', 'This'];
let row2_item1 = ['with', 'with', 'with', 'with', 'with'];
let row2_item2 = ['the', 'the', 'the', 'the', 'the'];
let row2_item3 = ['aid', 'assistance', 'support', 'backing', 'aid'];
let row2_item4 = ['of', 'of', 'of', 'of', 'of'];
let row2_item5 = ['his', 'his', 'his', 'his', 'his'];
let row2_item6 = ['companions', 'buddies', 'pals', 'mates', 'companions'];
let row2_item7 = ['Sasha', 'Sasha', 'Sasha', 'Sasha', 'Sasha'];
let row2_item8 = ['the', 'the', 'the', 'the', 'the'];
let row2_item9 = ['Melodist,', 'Warbler,', 'Crooner,', 'Cantor,', 'Melodist,'];
let row2_item10 = ['Sonia', 'Sonia', 'Sonia', 'Sonia', 'Sonia'];
let row2_item11 = ['the', 'the', 'the', 'the', 'the'];
let row2_item12 = ['Quacker,','Dabbler,','Paddler,','Swimmer,','Quacker,'];
let row2_item13 = ['and', 'and', 'and', 'and', 'and'];
let row2_item14 = ['Ivan', 'Ivan', 'Ivan', 'Ivan', 'Ivan'];
let row2_item15 = ['the', 'the', 'the', 'the', 'the'];
let row2_item16 = ['Feline.', 'Feline.', 'Feline.', 'Feline.', 'Feline.'];

// Create lists for synonyms of words in row3
let row3_item0 = ['Via', 'Through', 'By', 'By means of', 'Via'];
let row3_item1 = ['speedy', 'quick', 'rapid', 'swift', 'speedy'];
let row3_item2 = ['intellect', 'mind', 'perception', 'understanding', 'intellect'];
let row3_item3 = ['they', 'they', 'they', 'they', 'they'];
let row3_item4 = ['deceive', 'fool', 'mislead', 'trick', 'deceive'];
let row3_item5 = ['the', 'the', 'the', 'the', 'the'];
let row3_item6 = ['beast', 'creature', 'monster', 'animal', 'beast'];

// Create lists for synonyms of words in row4
let row4_item0 = ['The', 'The', 'The', 'The', 'The'];
let row4_item1 = ['creature', 'animal', 'monster', 'beast', 'creature'];
let row4_item2 = ['is', 'becomes', 'gets', 'turns', 'is'];
let row4_item3 = ['captured', 'caught', 'seized', 'snared', 'captured'];
let row4_item4 = ['down', 'down', ' ', 'down', 'down'];
let row4_item5 = ['and', 'and', 'and', 'and', 'and'];
let row4_item6 = ['secured', 'fastened', 'fixed', 'attached', 'secured'];
let row4_item7 = ['aloft', 'up', 'high', 'above', 'aloft'];
let row4_item8 = ['Peter', 'Peter', 'Peter', 'Peter', 'Peter'];
let row4_item9 = ['celebrates', 'revels', 'enjoys', 'delights', 'celebrates'];

// Create lists for synonyms of words in row5
let row5_item0 = ['Yet', 'However', 'Nevertheless', 'Nonetheless', 'Yet'];
let row5_item1 = ['he', 'he', 'he', 'he', 'he'];
let row5_item2 = ['was', 'got', 'became', 'turned', 'was'];
let row5_item3 = ['incorrect', 'wrong', 'mistaken', 'erroneous', 'incorrect'];
let row5_item4 = ['The', 'The', 'The', 'The', 'The'];
let row5_item5 = ['beast', 'monster', 'creature', 'animal', 'beast'];
let row5_item6 = ['flees', 'escapes', 'runs away', 'evades', 'flees'];
let row5_item7 = ['and', 'and', 'and', 'and', 'and'];
let row5_item8 = ['engulfs', 'consumes', 'devours', 'swallows', 'engulfs'];
let row5_item9 = ['his', 'his', 'his', 'his', 'his'];
let row5_item10 = ['chum', 'pal', 'buddy', 'mate', 'chum'];
let row5_item11 = ['Sonia', 'Sonia', 'Sonia', 'Sonia', 'Sonia'];
let row5_item12 = ['the', 'the', 'the', 'the', 'the'];
let row5_item13 = ['fowl', 'bird', 'avian', 'feathered friend', 'fowl'];
let row5_item14 = ['entire', 'whole', 'complete', 'total', 'entire'];

// Create lists for synonyms of words in row6
let row6_item0 = ['His', 'His', 'His', 'His', 'His'];
let row6_item1 = ['grandpa', 'granddad', 'grandfather', 'grandparent', 'grandpa'];
let row6_item2 = ['was', 'is', 'remains', 'stays', 'was'];
let row6_item3 = ['correct', 'right', 'accurate', 'true', 'correct'];
let row6_item4 = ['all', 'all', 'all', 'all', 'all'];
let row6_item5 = ['throughout', 'through', 'during', 'in the course of', 'throughout'];




let mySound;
function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('assets/ambient');
  video = createVideo('assets/back.mp4');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textFont('Roboto', 25);
  strokeWeight(2);

  //bg0 = loadImage('assets/14.png');
  //bg1 = loadImage('assets/15.png');
  //bg2 = loadImage('assets/16.png');
  //bg3 = loadImage('assets/17.png');
 //currentImage = bg0;

  mySound.play();

  video.loop();
  video.hide();

  fade = 255;
}

let wordIndex = 0; // Variable to keep track of the current word being displayed
let delay = 5; // Time delay between words in milliseconds

function draw() {
  background(0);
  image(video,0,0,width,height);

  if (fade > 0) {
    fill(255, 255, 255, fade);

    // Display rows
    for (let i = 0; i < 6; i++) {
      displayRow(eval(`row${i + 1}`), i + 1);
    }

    // Check if there are more words to display
    if (wordIndex < row1.length - 1) {
      // Increment the word index based on frameCount and delay
      if (frameCount % delay === 0) {
        wordIndex++;
      }
    }
  }

 /*  if (fade > 0 || fade < 255) {
    fade += fadeAmount;
  } */
}

function displayRow(rowArray, rowNum) {
  textAlign(LEFT, CENTER);

  // Set the desired width for each row (80% of the screen width)
  let desiredRowWidth = 0.8 * width;
  let totalWordWidth = 0;

  // Calculate the total width of the words in the row
  for (let i = 0; i < rowArray.length; i++) {
    totalWordWidth += textWidth(rowArray[i] + ' ');
  }

  // Calculate the spacing between words
  let spacing = (desiredRowWidth - totalWordWidth) / (rowArray.length - 1);

  // Starting X position to center the row
  let startX = (width - totalWordWidth - spacing * (rowArray.length - 1)) / 2;

  // Check if "Select All" is active
  if (selectAllRows) {
    fill(255, 0, 0, fadeParagraph); // Set fill to red for all rows
  } else if (rowNum - 1 === selectedRow && selectedWord === -1) {
    fill(255, 0, 0, fadeParagraph); // Set fill to red for the selected row
  } else {
    fill(255, 255, 255, fade); // Set fill to black for other rows
  }

  // Display entire row in red when selected
  if (selectAllRows || (rowNum - 1 === selectedRow && selectedWord === -1)) {
    for (let i = 0; i < rowArray.length; i++) {
      let fontIndex = min(i, row_fonts[rowNum - 1].length - 1); // Ensure fontIndex is within bounds
      let currentFont = row_fonts[rowNum - 1][fontIndex];

      fill(255, 0, 0, fadeParagraph); // Set fill to red for the selected row
      textFont(currentFont, 16);
      text(rowArray[i], startX, (height / 7) * rowNum);

      startX += textWidth(rowArray[i] + ' ') + spacing; // Move the starting X position based on the width and spacing of each word
    }
  } else {
    // Display words up to the current word index
    for (let i = 0; i <= wordIndex && i < rowArray.length; i++) {
      let fontIndex = min(i, row_fonts[rowNum - 1].length - 1); // Ensure fontIndex is within bounds
      let currentFont = row_fonts[rowNum - 1][fontIndex];

      // Set fill before drawing each word
      if (i === selectedWord && rowNum - 1 === selectedRow) {
        fill(255, 0, 0, fadeParagraph); // Set fill to red for the selected word
      } else {
        fill(255, 255, 255, fade); // Reset fill to black for other words
      }

      textFont(currentFont, 16);
      text(rowArray[i], startX, (height / 7) * rowNum);

      if (i === selectedWord) {
        fill(255, 255, 255, fade); // Reset fill to black for the next words
      }

      startX += textWidth(rowArray[i] + ' ') + spacing; // Move the starting X position based on the width and spacing of each word
    }
  }
}


function keyPressed() {
  if (keyCode === 32) { // Check if the pressed key is the spacebar
    //let randomFont = random(fonts);
    //textFont(randomFont, 18);
    //fade = 0;
    //fadeAmount = 1; 
  } else if (keyCode === ENTER) {
    // When a key is pressed, reset the fade to 0
    //fade = 0;
    //fadeAmount = 1; // Reset fade direction to increasing// Check if the pressed key is the Enter key
    //replaceWords();
  }  else if (keyCode === UP_ARROW) {
    if (selectAllRows) {
      // If coming from "Select All" mode, move to row 6
      selectedRow = 5;
      selectAllRows = false;
    } else if (selectedRow === 0) {
      selectAllRows = true;
    } else {
      selectedRow = (selectedRow - 1 + 6) % 6;
      selectAllRows = false;
    }
    selectedWord = -1; // Reset selectedWord when changing rows
  } else if (keyCode === DOWN_ARROW) {
    if (selectAllRows) {
      // If coming from "Select All" mode, move to row 1
      selectedRow = 0;
      selectAllRows = false;
    } else if (selectedRow === 5) {
      selectAllRows = true;
    } else {
      selectedRow = (selectedRow + 1) % 6;
      selectAllRows = false;
    }
    selectedWord = -1; // Reset selectedWord when changing rows
  }  else if (keyCode === LEFT_ARROW) {
    if (selectedWord > 0) {
      selectedWord--;
    } else {
      // If at the beginning of the row, reset to selecting the entire row
      selectedWord = -1;
    }
  } else if (keyCode === RIGHT_ARROW) {
    if (selectedWord < row1.length - 1) {
      selectedWord++;
    } else {
      // If at the end of the row, reset to selecting the entire row
      selectedWord = -1;
    }
  }  else if (keyCode === 83) { 
    if(currentImage == bg0){
      currentImage = bg1;
    } else if (currentImage == bg1) {
      currentImage = bg2;
    } else if (currentImage == bg2) {
      currentImage = bg3;
    } else if (currentImage == bg3) {
      currentImage = bg0;
    }
  }  else if (keyCode === 68) {
    changeSynonyms(1);
  } else if (keyCode === 65) {
    changeSynonyms(-1);
  }  else if (keyCode === 81) { // 'q' key
    changeFonts(-1);
  } else if (keyCode === 69) { // 'e' key
    changeFonts(1);
  } else if (keyCode === 87) { //Change the opacity switched to 'w'
    print(fade+''+fadeTracker);
      if(fadeTracker == 1 && fade <=255) {
        fade+=20; 
      } else if (fadeTracker == 0 && fade >= 0) {
        fade-=20;
      } else if (fade <= 0) {
        print('HELOOOOO');
        fadeTracker = 1; 
      } else if (fade >= 255) {
        fadeTracker = 0; 
      }

      if(selectAllRows) {
        if(fadeParagraphTracker == 1 && fadeParagraph <=255) {
          fadeParagraph+=20; 
        } else if (fadeParagraphTracker == 0 && fadeParagraph >= 0) {
          fadeParagraph-=20;
        } else if (fadeParagraph <= 0) {
          fadeParagraphTracker = 1; 
        } else if (fadeParagraph >= 255) {
          fadeParagraphTracker = 0; 
        }
      } 
  }
}
  

function changeSynonyms(direction) {
  // Update synonym index based on the direction
  synonymIndex = (synonymIndex + direction + 5) % 5; // Ensure the index stays within the range

  if (selectAllRows) {
    // Change synonyms for all rows
    for (let row = 0; row < 6; row++) {
      let selectedRowArray = eval(`row${row + 1}`);
      for (let i = 0; i < selectedRowArray.length; i++) {
        // Allow changes for all words in the row
        selectedRowArray[i] = eval(`row${row + 1}_item${i}`)[synonymIndex];
      }
    }
  } else {
    // Change synonyms for the selected row or word
    let selectedRowArray = eval(`row${selectedRow + 1}`);
    if (selectedWord === -1) {
      // Change all words in the row
      for (let i = 0; i < selectedRowArray.length; i++) {
        selectedRowArray[i] = eval(`row${selectedRow + 1}_item${i}`)[synonymIndex];
      }
    } else if (selectedWord >= 0 && selectedWord < selectedRowArray.length) {
      // Allow changes for the selected word
      selectedRowArray[selectedWord] = eval(`row${selectedRow + 1}_item${selectedWord}`)[synonymIndex];
    }
  }
}

function changeFonts(direction) {
  // Update font index based on the direction
  let fontIndex = (direction === 1) ? 1 : -1; // 1 for 'e' (forward), -1 for 'q' (backward)

  if (selectAllRows) {
    // Change fonts for all rows
    for (let row = 0; row < 6; row++) {
      for (let i = 0; i < row_fonts[row].length; i++) {
        // Allow changes for all words in the row
        let fontToApply = fonts[(fonts.indexOf(row_fonts[row][i]) + fontIndex + fonts.length) % fonts.length];
        row_fonts[row][i] = fontToApply;
      }
    }
  } else {
    // Change fonts for the selected row or word
    let selectedRowArray = eval(`row${selectedRow + 1}`);
    if (selectedWord === -1) {
      // Change all words in the row
      for (let i = 0; i < selectedRowArray.length; i++) {
        let fontToApply = fonts[(fonts.indexOf(row_fonts[selectedRow][i]) + fontIndex + fonts.length) % fonts.length];
        row_fonts[selectedRow][i] = fontToApply;
      }
    } else if (selectedWord >= 0 && selectedWord < selectedRowArray.length) {
      // Allow changes for the selected word
      let fontToApply = fonts[(fonts.indexOf(row_fonts[selectedRow][selectedWord]) + fontIndex + fonts.length) % fonts.length];
      row_fonts[selectedRow][selectedWord] = fontToApply;
    }
  }
}



