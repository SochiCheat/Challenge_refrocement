// create array to take letter key
const WHITE_KEYS = ['z','x','c','v','b','n', 'm']
const BLACK_KEYS = ['s','d','g','h','j']
const keys = document.querySelectorAll('.key');
// queryselecall yerg aj jab ey kor ban dea vea jab ban tag os jom nous get all , get tag ..........
// or query jab ban tea muy muy te
const whiteKeys = document.querySelectorAll('.key.white');
// create variable to take key black
const blackKeys = document.querySelectorAll('.key.black');
// console.log(keys);
// for (let i = 0; i < keys.length; i++) {
//     console.log(keys[i]);
// }
keys.forEach(key => {
    // makes us know press what
    key.addEventListener('click', () =>  onPlaySound(key));
        // console.log(key);
});
// get from keyboard
document.addEventListener('keydown', event => {
    const keyboard = event.key;
    // indexof acess domlai jeh pi 
    const whiteKeyIndex = WHITE_KEYS.indexOf(keyboard);
    const blackKeyIndex = BLACK_KEYS.indexOf(keyboard);
    if (!event.repeat) {
        

    if (whiteKeyIndex > -1) {
        onPlaySound(whiteKeys[whiteKeyIndex]);
    }
    if(blackKeyIndex){

        onPlaySound(blackKeys[blackKeyIndex]);
    }

}   
    
 });
// for play audio
function onPlaySound(key) {
    const audioKey = document.getElementById(key.dataset.note);
    // the same real paino start pi derm mk venh
    audioKey.currentTime = 0;
    audioKey.play();
    key.classList.add('active');

    audioKey.addEventListener('ended', () =>{
        // when click already it remove color
        key.classList.remove('active');

    });
   
}
