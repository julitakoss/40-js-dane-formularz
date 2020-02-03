function ball(){
    let name_p = document.getElementById('name');
    console.log(name_p);

    let imie = document.getElementById('imie');
    console.log(imie);
    console.log(imie.value);

    let surname_p = document.getElementById('surname');
    console.log(surname_p);

    let nazwisko = document.getElementById('nazwisko');
    console.log(nazwisko);
    console.log(nazwisko.value);
    
    let phone_p = document.getElementById('phone');
    console.log(phone_p);

    let telefon = document.getElementById('telefon');
    console.log(telefon);
    console.log(telefon.value);

    name_p.innerHTML = 'name ' + imie.value;
    surname_p.innerHTML = 'surname ' + nazwisko.value;
    phone_p.innerHTML = 'phone ' + telefon.value;
}