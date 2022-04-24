
// // 방문자 수 count 
// const totalCount = document.querySelector('.total-guest');

// expireDate = new Date
// expireDate.setMonth(expireDate.getMonth()+6)
// jcount = eval(cookieVal("totalCounter"))
// jcount++
// document.cookie = "totalCounter="+jcount+";expires=" + expireDate.toGMTString()

// function cookieVal(cookieName) {
// 	thisCookie = document.cookie.split("; ")
    
//     console.log(thisCookie)
// 	for (i=0; i < thisCookie.length; i++){
// 		if (cookieName == thisCookie[i].split("=")[0]){
// 			return thisCookie[i].split("=")[1]
// 		}
// 	}
// 	return 0
// }

// function page_counter(){
// 	for (i=0;i<(3-jcount.toString().length);i++)
// 		document.write('<span class="counter">0</span>')
// 	for (y=0;y<(jcount.toString().length);y++)
// 		document.write('<span class="counter">'+jcount.toString().charAt(y)+'</span>')
// }

// // totalCount.innerText = page_counter(jcount);



async function sendFing() {
    const visiteCount = await fetch('https://jihyelee329.github.io/jsChallenge-cyworld/main.html', {
        method: 'get',
        mode: "no-cors",
        credentials: 'same-origin'
    });
    const getResponse = await visiteCount.text().catch(e=>console.error(e.message)).finally(e=>console.info('fing'));
}

sendFing();


async function getVisitorCount(){
    const response = await fetch(`https://jihyelee329.github.io/jsChallenge-cyworld/main.html`, {
        // 설정들...
    });
    const data = await response.text();

    const parsedResponse = new DOMParser();
    const body = [...parsedResponse.parseFromString(data.contents, 'text/html').body.querySelectorAll('targetParent')];
    const total = body[1];
    const today = body[2];
    console.log(total, today)
    document.querySelector('#total').textContent = total.textContent+'명';
    document.querySelector('#today').textContent = today.textContent+'명';
   
}

getVisitorCount();