function submit() {
    let logg = document.getElementById('log').value;
    let passd = document.getElementById('pass').value;

    if (logg === '') {
        document.getElementById('log').
        // innerText =  'Please fill email';
        setAttribute('placeholder', 'Please fill email');
    } else {
        document.getElementById('log').
        // innerText =  '';
        setAttribute('placeholder', '');
    }
    if (passd === '') {
        document.getElementById('pass').
        // innerText = 'please fill';
        setAttribute('placeholder', 'Please fill Password');
    } else {
        document.getElementById('pass').
        // innerText ='';
        setAttribute('placeholder', '');
    }

    if (logg !== '' && passd !== '') {
        alert(" You Are login Successful")
    }else{
        alert('Please fill login and pass.');
    }
}
