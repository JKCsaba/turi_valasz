document.getElementById('button_turi').onclick = function() {

    const message = "Igen, felvették, kaptam róla emailt is.\nKöszönöm szépen az extra osztályzatot, igazán nem kellett volna :).\nNem történt semmi gond, és én se szóltam időben mivel nem tudtam a határidőről, köszönöm szépen, hogy még ebben a félévben bekerült.\n Csak a kreditindexem bánta, mivel így nem lett meg az előadáslátogatási engedmény, de ez legyen a legkisebb.\n Köszönöm szépen, és legyen szép estéje, remélem nem dorgálták meg, nem kellett sok extra adminisztrációt végezni!"
    const answer = document.getElementById('textplace')

    answer.innerText = message;
    this.style.display = 'none'
}