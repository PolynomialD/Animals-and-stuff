function checkPasswords() {
  var password = document.getElementById("password")
  var confirm = document.getElementById("passwordConfirm")
  var confirmLength = confirm.value.length
  var passwordCut = password.value.substring(0, confirmLength)

  if (passwordCut !== confirm.value) {
    confirm.className = ("form-control error-state-input")
  } else if (password.value === confirm.value) {
    confirm.className = ("form-control ok-state-input")
  } else {
    confirm.className = ("form-control")
  }
}

function loginAlert() {
  window.alert("attention! login attempted");
}

function isEven(number) {
  return (number % 2) == 0
}

// article previews

function makeTemplate(articlePreview) {
  return `
    <div class="col-md-6 col-sm-12">
    <div class="content-box">
      <h3 class="center-text preview-heading">${articlePreview.title}</h3>
      <a href="${articlePreview.link}"> <img class="images" src="${articlePreview.imgUrl}" /> </a>
      <p>${articlePreview.snippit}</p>
    </div>
    </div>
  `
}

function buildMainPreviewPage(dogArticles, catArticles, rabbitArticles, pigArticles) {
  document.getElementById("content").innerHTML =
  '<div class="row">'+ makeTemplate(dogArticles[dogArticles.length-1]) + 
  makeTemplate(catArticles[catArticles.length-1]) + '</div>' + 
  '<div class="row">' + makeTemplate(rabbitArticles[rabbitArticles.length-1]) + 
  makeTemplate(pigArticles[pigArticles.length-1]) + '</div>'
}

function buildPreviewPageNumbered(previews, page) {
  var index = (page * 4) - 1

  if (index > previews.length) {
    index = previews.length -1
  }

  var html = '<div class="row">'

  for(var i = 0; i<4; i++) {
    html += makeTemplate(previews[index])
    index--
    if(isEven(i+1)) {
      html += '</div><div class="row">'
    } 
  }
  html += '</div>'
  document.getElementById("content").innerHTML = html
}

//page links

function buildPageLinks(previews, pageName) {
  var previewLength = (previews.length) / 4
  var numberOfLinks = Math.ceil(previewLength)
  var html = '<div class = "row">'
  for (var i = 0; i < numberOfLinks; i++) {
    let pageNum = i + 1
    html += `<span class="myButton pageLinks" data-animal="${pageName}" data-page="${pageNum}">page ${ pageNum }</span>`
  }
  html += '</div>'
  document.getElementById("pageLinks").innerHTML = html
}

function addChangePageListeners() {
  var elements = document.getElementsByClassName("pageLinks")

  var myFunction = function() {
    console.log(this)
    var animal = this.getAttribute("data-animal")
    var page = this.getAttribute("data-page")
    changePage(animal, page)
  }

  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false)
  }
}

// adverts

function makeAds (ads) {
  return `
  <div class="ad-container col-md-2 row center-text">
    <h2>${ads.title}</h2>
    <p>${ads.text}</p>
  </div>
  `
}

function buildAds (ads) {
    var html = ''
    for(var i = 0; i < ads.length; i++) {
      html += makeAds(ads[i])
}
    document.getElementById("sub-ad-container").innerHTML = html
}

// data

const dogPreviews = [
  {
    "title": 'dog 1',
    "link": 'contentpage.html',
    "imgUrl": 'http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Rottweiler-1.jpg',
    "snippit": 'arcu elementum pretium nec vitae magna. Integer molestie sem quam, ut fermentum felis auctor facilisis. Cras vitae nibh a risus elementum elementum id ut odio. Phasellus vel dapibus erat. Pellentesque posuere turpis a euserInput ultrices, sit amet hendrerit lorem varius. Praesent porta quis mi finibus laoreet. Nunc quis loborti'
  },
  {
    "title": 'dog 2',
    "link": 'contentpage.html',
    "imgUrl": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCOv3x7B4uL_ISZbZAztW0n42f_hEynnE2n7-lHHTWK0KHuUgw-g',
    "snippit": 'arcu elementum pretium nec vitae magna. Integer molestie sem quam, ut fermentum felis auctor facilisis. Cras vitae nibh a risus elementum elementum id ut odio. Phasellus vel dapibus erat. Pellentesque posuere turpis a euserInput ultrices, sit amet hendrerit lorem varius. Praesent porta quis mi finibus laoreet. Nunc quis loborti'
  },
  {
    "title": 'dog 3',
    "link": 'contentpage.html',
    "imgUrl": 'Images/dog3.jpg',
    "snippit": 'arcu elementum pretium nec vitae magna. Integer molestie sem quam, ut fermentum felis auctor facilisis. Cras vitae nibh a risus elementum elementum id ut odio. Phasellus vel dapibus erat. Pellentesque posuere turpis a euserInput ultrices, sit amet hendrerit lorem varius. Praesent porta quis mi finibus laoreet. Nunc quis loborti'
  },
  {
    "title": 'dog 4',
    "link": 'contentpage.html',
    "imgUrl": 'Images/dog4.jpg',
    "snippit": 'arcu elementum pretium nec vitae magna. Integer molestie sem quam, ut fermentum felis auctor facilisis. Cras vitae nibh a risus elementum elementum id ut odio. Phasellus vel dapibus erat. Pellentesque posuere turpis a euserInput ultrices, sit amet hendrerit lorem varius. Praesent porta quis mi finibus laoreet. Nunc quis loborti'
  },
  {
    "title": 'dog 5',
    "link": 'contentpage.html',
    "imgUrl": 'Images/dog5.jpg',
    "snippit": 'arcu elementum pretium nec vitae magna. Integer molestie sem quam, ut fermentum felis auctor facilisis. Cras vitae nibh a risus elementum elementum id ut odio. Phasellus vel dapibus erat. Pellentesque posuere turpis a euserInput ultrices, sit amet hendrerit lorem varius. Praesent porta quis mi finibus laoreet. Nunc quis loborti'
  },
  {
    "title": 'dog 6',
    "link": 'contentpage.html',
    "imgUrl": 'Images/dog6.jpg',
    "snippit": 'arcu elementum pretium nec vitae magna. Integer molestie sem quam, ut fermentum felis auctor facilisis. Cras vitae nibh a risus elementum elementum id ut odio. Phasellus vel dapibus erat. Pellentesque posuere turpis a euserInput ultrices, sit amet hendrerit lorem varius. Praesent porta quis mi finibus laoreet. Nunc quis loborti'
  }
]

const catPreviews = [
  {
    "title": 'cat 1',
    "link": 'contentpage2.html',
    "imgUrl": 'Images/cat1.jpg',
    "snippit": 'arcu elementum pretium nec vitae magna. Integer molestie sem quam, ut fermentum felis auctor facilisis. Cras vitae nibh a risus elementum elementum id ut odio. Phasellus vel dapibus erat. Pellentesque posuere turpis a euserInput ultrices, sit amet hendrerit lorem varius. Praesent porta quis mi finibus laoreet. Nunc quis loborti'
  },
  {
    "title": 'cat 2',
    "link": 'contentpage2.html',
    "imgUrl": 'Images/cat2.jpg',
    "snippit": 'arcu elementum pretium nec vitae magna. Integer molestie sem quam, ut fermentum felis auctor facilisis. Cras vitae nibh a risus elementum elementum id ut odio. Phasellus vel dapibus erat. Pellentesque posuere turpis a euserInput ultrices, sit amet hendrerit lorem varius. Praesent porta quis mi finibus laoreet. Nunc quis loborti'
  },
  {
    "title": 'cat 3',
    "link": 'contentpage2.html',
    "imgUrl": 'Images/cat3.jpg',
    "snippit": 'arcu elementum pretium nec vitae magna. Integer molestie sem quam, ut fermentum felis auctor facilisis. Cras vitae nibh a risus elementum elementum id ut odio. Phasellus vel dapibus erat. Pellentesque posuere turpis a euserInput ultrices, sit amet hendrerit lorem varius. Praesent porta quis mi finibus laoreet. Nunc quis loborti'
  },
  {
    "title": 'cat 4',
    "link": 'contentpage2.html',
    "imgUrl": 'Images/cat4.jpg',
    "snippit": 'arcu elementum pretium nec vitae magna. Integer molestie sem quam, ut fermentum felis auctor facilisis. Cras vitae nibh a risus elementum elementum id ut odio. Phasellus vel dapibus erat. Pellentesque posuere turpis a euserInput ultrices, sit amet hendrerit lorem varius. Praesent porta quis mi finibus laoreet. Nunc quis loborti'
  }
]

const rabbitPreviews = [
  {
    "title": 'rabbit 1',
    "link": 'contentpage3.html',
    "imgUrl": 'data:image/jpeg;base64,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',
    "snippit": 'arcu elementum pretium nec vitae magna. Integer molestie sem quam, ut fermentum felis auctor facilisis. Cras vitae nibh a risus elementum elementum id ut odio. Phasellus vel dapibus erat. Pellentesque posuere turpis a euserInput ultrices, sit amet hendrerit lorem varius. Praesent porta quis mi finibus laoreet. Nunc quis loborti'
  },
  {
    "title": 'rabbit 2',
    "link": 'contentpage3.html',
    "imgUrl": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUVdgs_47Meiex17Z7RMHT5fzuAynwHqqBRRzxLIIOv-qhSKRtXA',
    "snippit": 'arcu elementum pretium nec vitae magna. Integer molestie sem quam, ut fermentum felis auctor facilisis. Cras vitae nibh a risus elementum elementum id ut odio. Phasellus vel dapibus erat. Pellentesque posuere turpis a euserInput ultrices, sit amet hendrerit lorem varius. Praesent porta quis mi finibus laoreet. Nunc quis loborti'
  },
  {
    "title": 'rabbit 3',
    "link": 'contentpage3.html',
    "imgUrl": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQymVLM4aVNgzIEGM2LZKwgWGQRjzOJ-GUtL8GxOLMZim3RIez',
    "snippit": 'arcu elementum pretium nec vitae magna. Integer molestie sem quam, ut fermentum felis auctor facilisis. Cras vitae nibh a risus elementum elementum id ut odio. Phasellus vel dapibus erat. Pellentesque posuere turpis a euserInput ultrices, sit amet hendrerit lorem varius. Praesent porta quis mi finibus laoreet. Nunc quis loborti'
  },
  {
    "title": 'rabbit 4',
    "link": 'contentpage3.html',
    "imgUrl": 'https://www.pets4homes.co.uk/images/articles/2840/large/rabbit-basics-ten-facts-all-potential-owners-should-be-aware-of-554a26f3058ae.jpg',
    "snippit": 'arcu elementum pretium nec vitae magna. Integer molestie sem quam, ut fermentum felis auctor facilisis. Cras vitae nibh a risus elementum elementum id ut odio. Phasellus vel dapibus erat. Pellentesque posuere turpis a euserInput ultrices, sit amet hendrerit lorem varius. Praesent porta quis mi finibus laoreet. Nunc quis loborti'
  }
]

const pigPreviews = [
  {
    "title": 'pig 1',
    "link": 'contentpage4.html',
    "imgUrl": 'Images/pig1.jpg',
    "snippit": 'arcu elementum pretium nec vitae magna. Integer molestie sem quam, ut fermentum felis auctor facilisis. Cras vitae nibh a risus elementum elementum id ut odio. Phasellus vel dapibus erat. Pellentesque posuere turpis a euserInput ultrices, sit amet hendrerit lorem varius. Praesent porta quis mi finibus laoreet. Nunc quis loborti'
  },
  {
    "title": 'pig 2',
    "link": 'contentpage4.html',
    "imgUrl": 'Images/pig2.jpg',
    "snippit": 'arcu elementum pretium nec vitae magna. Integer molestie sem quam, ut fermentum felis auctor facilisis. Cras vitae nibh a risus elementum elementum id ut odio. Phasellus vel dapibus erat. Pellentesque posuere turpis a euserInput ultrices, sit amet hendrerit lorem varius. Praesent porta quis mi finibus laoreet. Nunc quis loborti'
  },
  {
    "title": 'pig 3',
    "link": 'contentpage4.html',
    "imgUrl": 'Images/pig3.jpg',
    "snippit": 'arcu elementum pretium nec vitae magna. Integer molestie sem quam, ut fermentum felis auctor facilisis. Cras vitae nibh a risus elementum elementum id ut odio. Phasellus vel dapibus erat. Pellentesque posuere turpis a euserInput ultrices, sit amet hendrerit lorem varius. Praesent porta quis mi finibus laoreet. Nunc quis loborti'
  },
  {
    "title": 'pig 4',
    "link": 'contentpage4.html',
    "imgUrl": 'Images/pig4.jpg',
    "snippit": 'arcu elementum pretium nec vitae magna. Integer molestie sem quam, ut fermentum felis auctor facilisis. Cras vitae nibh a risus elementum elementum id ut odio. Phasellus vel dapibus erat. Pellentesque posuere turpis a euserInput ultrices, sit amet hendrerit lorem varius. Praesent porta quis mi finibus laoreet. Nunc quis loborti'
  },
  {
    "title": 'pig 5',
    "link": 'contentpage4.html',
    "imgUrl": 'Images/pig5.jpg',
    "snippit": 'arcu elementum pretium nec vitae magna. Integer molestie sem quam, ut fermentum felis auctor facilisis. Cras vitae nibh a risus elementum elementum id ut odio. Phasellus vel dapibus erat. Pellentesque posuere turpis a euserInput ultrices, sit amet hendrerit lorem varius. Praesent porta quis mi finibus laoreet. Nunc quis loborti'
  },
  {
    "title": 'pig 6',
    "link": 'contentpage4.html',
    "imgUrl": 'Images/pig6.jpg',
    "snippit": 'arcu elementum pretium nec vitae magna. Integer molestie sem quam, ut fermentum felis auctor facilisis. Cras vitae nibh a risus elementum elementum id ut odio. Phasellus vel dapibus erat. Pellentesque posuere turpis a euserInput ultrices, sit amet hendrerit lorem varius. Praesent porta quis mi finibus laoreet. Nunc quis loborti'
  },
  {
    "title": 'pig 7',
    "link": 'contentpage4.html',
    "imgUrl": 'Images/pig7.jpg',
    "snippit": 'arcu elementum pretium nec vitae magna. Integer molestie sem quam, ut fermentum felis auctor facilisis. Cras vitae nibh a risus elementum elementum id ut odio. Phasellus vel dapibus erat. Pellentesque posuere turpis a euserInput ultrices, sit amet hendrerit lorem varius. Praesent porta quis mi finibus laoreet. Nunc quis loborti'
  },
  {
    "title": 'pig 8',
    "link": 'contentpage4.html',
    "imgUrl": 'Images/pig8.jpg',
    "snippit": 'arcu elementum pretium nec vitae magna. Integer molestie sem quam, ut fermentum felis auctor facilisis. Cras vitae nibh a risus elementum elementum id ut odio. Phasellus vel dapibus erat. Pellentesque posuere turpis a euserInput ultrices, sit amet hendrerit lorem varius. Praesent porta quis mi finibus laoreet. Nunc quis loborti'
  },
  {
    "title": 'pig 9',
    "link": 'contentpage4.html',
    "imgUrl": 'Images/pig9.jpg',
    "snippit": 'arcu elementum pretium nec vitae magna. Integer molestie sem quam, ut fermentum felis auctor facilisis. Cras vitae nibh a risus elementum elementum id ut odio. Phasellus vel dapibus erat. Pellentesque posuere turpis a euserInput ultrices, sit amet hendrerit lorem varius. Praesent porta quis mi finibus laoreet. Nunc quis loborti'
  }
]

const adverts = [
  {
    "title": 'Ad 1',
    "link": 'adpage1.html',
    "imgUrl": '',
    "text": 'arcu elementum pretium nec vitae magna. Integer molestie sem quam, ut fermentum felis auctor facilisis. Cras vitae nibh a risus elementum elementum id ut odioarcu elementum pretium nec vitae magna. Integer molestie sem quam, ut fermentum felis auctor facilisis. Cras vitae nibh a risus elementum elementum id ut odio'
  },
  {
    "title": 'Ad 1',
    "link": 'adpage1.html',
    "imgUrl": '',
    "text": 'arcu elementum pretium nec vitae magna. Integer molestie sem quam, ut fermentum felis auctor facilisis. Cras vitae nibh a risus elementum elementum id ut odioarcu elementum pretium nec vitae magna. Integer molestie sem quam, ut fermentum felis auctor facilisis. Cras vitae nibh a risus elementum elementum id ut odio'
  },
  {
    "title": 'Ad 1',
    "link": 'adpage1.html',
    "imgUrl": '',
    "text": 'arcu elementum pretium nec vitae magna. Integer molestie sem quam, ut fermentum felis auctor facilisis. Cras vitae nibh a risus elementum elementum id ut odioarcu elementum pretium nec vitae magna. Integer molestie sem quam, ut fermentum felis auctor facilisis. Cras vitae nibh a risus elementum elementum id ut odio'
  },
  {
    "title": 'Ad 1',
    "link": 'adpage1.html',
    "imgUrl": '',
    "text": 'arcu elementum pretium nec vitae magna. Integer molestie sem quam, ut fermentum felis auctor facilisis. Cras vitae nibh a risus elementum elementum id ut odioarcu elementum pretium nec vitae magna. Integer molestie sem quam, ut fermentum felis auctor facilisis. Cras vitae nibh a risus elementum elementum id ut odio'
  }
]

// router

buildMainPreviewPage(dogPreviews, catPreviews, rabbitPreviews, pigPreviews)

buildAds(adverts)

function changePage(pageName, page=1) {
  if (pageName === 'previewDog') {
    buildPreviewPageNumbered(dogPreviews, page)
    buildPageLinks(dogPreviews, pageName)
  }
  else if (pageName === 'previewCat') {
    buildPreviewPageNumbered(catPreviews, page)
    buildPageLinks(catPreviews, pageName)
  }
  else if (pageName === 'previewRabbit') {
    buildPreviewPageNumbered(rabbitPreviews, page)
    buildPageLinks(rabbitPreviews, pageName)
  }
  else if (pageName === 'previewPig') {
    buildPreviewPageNumbered(pigPreviews, page)
    buildPageLinks(pigPreviews, pageName)
  }
  addChangePageListeners()
}

//animate string

function animate_string(id) {
  var element = document.getElementById(id)
  console.log(element.childNodes)
  var textNode = element.childNodes[0]
  console.log('textNode = ', textNode)
  var text = textNode.data

setInterval(function () {
  text = text.substring(1) + text[0]
  textNode.data = text
}, 200)
}

//fib

function fib(places) {
  var seq = [1, 1]

  for (i = 0; i < places; i++) {
    seq.push(seq[i] + seq[i + 1])
  }
  return seq[places - 1]
}

function doFib() {
  var message = document.getElementById("hiddenfib");
  var userInput = document.getElementById("fibInput").value;

  message.innerHTML = "";

  try {
    if (userInput == "") throw "empty"
    if (isNaN(userInput)) throw "not a number"
    if (Number(userInput) < 0) throw "too low"
    if (Number(userInput) > 1000) throw "too high"

    message.innerHTML = fib(userInput)
  }
  catch (err) {
    message.innerHTML = "Input is " + err;
  }
}

// google link

function newWindow(url) {
  var strWindowFeatures = "location=yes,height=800,width=1200,scrollbars=yes,status=yes";
  window.open(url, "_blank", strWindowFeatures);
}
