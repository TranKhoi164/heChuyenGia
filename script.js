TweenMax.to('.overlay h1', 2.5, {
  opacity: 0,
  y: -60,
  ease: Expo.easeInOut
})
TweenMax.to('.overlay span', 2.5, {
  opacity: 0,
  delay: .7,
  y: -60,
  ease: Expo.easeInOut
})
TweenMax.to('.overlay', 2, {
  delay: 2,
  top: '-100%',
  ease: Expo.easeInOut
})
TweenMax.from('.logo', 2.5, {
  delay: 4.7,
  opacity: 0,
  y: 60,
  ease: Expo.easeInOut
})
TweenMax.from('.left', 3, {
  delay: 2.6,
  left: '-50%',
  ease: Expo.easeInOut
})
TweenMax.from('.after_left', 2.5, {
  delay: 2.6,
  left: '-50%',
  ease: Expo.easeInOut
})
TweenMax.from('.banner', 3, {
  delay: 3,
  width: 0,
  ease: Circ.easeInOut
})
TweenMax.to('.banner', 3, {
  delay: 5.5,
  opacity: 0,
  x: 100,
  ease: Expo.easeInOut
})
TweenMax.from('.header_1', 2, {
  delay: 3.3,
  opacity: 0,
  y: 60,
  ease: Expo.easeInOut
})
TweenMax.to('.header_1', 2, {
  delay: 4.4,
  opacity: 0,
  y: -60,
  ease: Expo.easeInOut
})
TweenMax.from('.header_2', 2, {
  delay: 3.3,
  opacity: 0,
  y: -60,
  ease: Expo.easeInOut
})
TweenMax.to('.header_2', 2, {
  delay: 4.4,
  opacity: 0,
  y: 60,
  ease: Expo.easeInOut
})
TweenMax.from('.decor_1', 2, {
  delay: 4.4,

  x: '-103%',
  ease: Expo.easeInOut
})
TweenMax.from('.decor_2', 2, {
  delay: 4.4,
  width: '0',
  x: -60,
  ease: Expo.easeInOut
})
TweenMax.from('.decor_3', 2, {
  delay: 4.4,
  width: '0',
  x: -60,
  ease: Expo.easeInOut
})
TweenMax.staggerFrom('.right_bar', 2.5, {
  delay: 4.7,
  x: 300,
  ease: Expo.easeInOut,
}, 0.13)
TweenMax.from('.candidate_infor', 2.5, {
  delay: 6.5,
  y: 60,
  opacity: 0,
  ease: Circ.easeInOut,
})
TweenMax.staggerFrom('.final_ani', 2, {
  delay: 7.2,
  y: 60,
  opacity: 0,
  ease: Expo.easeInOut,
}, 0.2)

//h -> rank hien tai
//c -> rank cao nhat
//s -> so tuong tu
//p -> so vi tri so truong
//f -> so tran voi ban be
//e -> kinh nghiem
//R -> rank tier
//B -> flexibility tier

const testData = [
  {},
  {
    question: "1. Kinh nghiệm đối với bộ môn",
    a: "1 - 2 năm",
    b: "3 - 5 năm",
    c: "Từng tham gia giải đấu bán chuyên",
    d: "Từng tham gia giải đấu chuyên nghiệp"
  },
  {
    question: "2. Danh hiệu hiện tại",
    a: "Dưới chiến tướng 80*",
    b: "Chiến tướng 80* - 129*",
    c: "Chiến tướng 130* trở lên hoặc thách đấu",
  },
  {
    question: "3. Danh hiệu cao nhất từng đạt được",
    a: "Dưới chiến tướng 80*",
    b: "Chiến tướng 80* - 129*",
    c: "Chiến tướng 130* trở lên hoặc thách đấu",
  },
  {
    question: "4. Số lượng tướng tủ",
    a: "1 – 3",
    b: "4 – 6",
    c: "7 – 10",
    d: "> 10"
  },
  {
    question: "5. Số vị trí sở trường",
    a: "1",
    b: "2",
    c: "> 2",
  },
  {
    question: "6. Số trận chơi cùng bạn bè",
    a: "Trên 40% số trận chơi cùng nhóm bạn bè",
    b: "26%-40% số trận chơi cùng nhóm bạn bè",
    c: "Dưới 25% số trận chơi cùng nhóm bạn bè",
  }
]

let test = document.getElementById('test')
let answerEls = document.querySelectorAll('.answer')
let questionEl = document.getElementById('question')
let a_text = document.getElementById('a_text')
let b_text = document.getElementById('b_text')
let c_text = document.getElementById('c_text')
let d_text = document.getElementById('d_text')
let last_answer = document.getElementById('4_answer')
let submitButton = document.getElementById('submitBtn')

let answerList = ['bruh']
let currentTest = 1

loadTest()

function loadTest() {
  deselectAnswer()
  const currentTestData = testData[currentTest]

  questionEl.innerHTML = currentTestData.question
  a_text.innerHTML = currentTestData.a
  b_text.innerHTML = currentTestData.b
  c_text.innerHTML = currentTestData.c
  d_text.innerHTML = currentTestData.d
  if (!currentTestData.d) {
    last_answer.style.display = "none"
  } else {
    last_answer.style.display = "block"
  }
}

function deselectAnswer() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
  let answer
  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })
  return answer
}


submitButton.addEventListener('click', () => {
  const answer = getSelected()
  if (!answer) {
    alert('Người dùng cần đưa ra câu trả lời')
    return
  }
  answerList.push(answer)
  const experience = answerList[1]
  const playWithFriends = answerList[6]

  if (currentTest == 3 && answerList[2] > answerList[3]) {
    alert('Danh hiệu hiện tại cần nhỏ hơn hoặc bằng danh hiệu cao nhất')
    return
  }

  if ((currentTest == 3 && rankTier() == 'a') || (currentTest == 5 && flexibilityTier() == 'a') || (currentTest == 6 && playWithFriends == 'a')) {
    result(1)
    return
  }

  if (experience=='a' && currentTest==6) {
    if (rankTier()=='c' && flexibilityTier()=='c' && playWithFriends=='c') {
      result(2)
      return
    } else {
      result(1)
      return
    }
  }
  if (experience=='b' && currentTest==6) {
    if ((rankTier()=='c' && flexibilityTier()=='b' && playWithFriends=='c') || (rankTier() == 'c' && flexibilityTier()=='c' && playWithFriends=='b')) {
      result(2)
      return
    } else if (rankTier()=='c' && flexibilityTier()=='c' && playWithFriends=='c') {
      result(3)
      return
    } else {
      result(1)
      return
    }
  }

  if (experience=='c' && currentTest==5) {
    if ((rankTier()=='b' && flexibilityTier()=='c') || (rankTier()=='c' && flexibilityTier()=='b')) {
      result(2)
      return
    } else if (rankTier()=='c' && flexibilityTier()=='c') {
      result(3)
      return
    } 
  }

  if (experience=='d') {
    if (rankTier()=='b' && flexibilityTier()=='b' && (playWithFriends=='b' || playWithFriends=='c') && currentTest==6) {
      result(2)
      return
    } else if (rankTier()=='b' && flexibilityTier()=='c' && currentTest==5) {
      result(3)
      return
    } else if (rankTier()=='c' && currentTest==3) {
      result(3)
      return
    } 
  }

  currentTest++
  loadTest()
})


function result(n) {
  if (n == 1) {
    alert('Ứng viên không đủ tiêu chuẩn')
  } else if (n == 2) {
    alert('Ứng viên có thể được chọn để đào tạo bán chuyên')
  } else if (n == 3) {
    alert('Ứng viên có thể được chọn để đào tạo chuyên nghiệp')
  }
}


function rankTier() {
  let currentRank = answerList[2], highestRank = answerList[3]
  

  if (currentRank === 'a' || highestRank === 'a') {
    return 'a'
  } else if (currentRank == 'b' && highestRank == 'b') {
    return 'a'
  } else if (currentRank == 'b' && highestRank == 'c') {
    return 'b'
  } else if (currentRank == 'c' && highestRank == 'c') {
    return 'c'
  } else {
    return 'a'
  }
}

function flexibilityTier() {
  let numberOfFavouriteChamps = answerList[4], numberOfFavouritePositions = answerList[5]
  if (numberOfFavouriteChamps == 'a' || numberOfFavouritePositions == 'a') {
    return 'a'
  } else if (numberOfFavouriteChamps == 'b' && numberOfFavouritePositions == 'b') {
    return 'a'
  } else if (numberOfFavouriteChamps == 'b' && numberOfFavouritePositions == 'c') {
    return 'b'
  } else if (numberOfFavouriteChamps == 'c' && numberOfFavouritePositions == 'b') {
    return 'b'
  } else if (numberOfFavouriteChamps == 'c' && numberOfFavouritePositions == 'c') {
    return 'c'
  } else if (numberOfFavouriteChamps == 'd') {
    return 'c'
  } else return 'a'
}


function remake() {
  console.log('Hello world')
  deselectAnswer()
  answerList = ['bruh']
  currentTest = 1
  loadTest()
}